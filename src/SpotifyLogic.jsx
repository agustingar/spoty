const config = {
  authEndpoint: process.env.REACT_APP_AUTH_END_POINT || "https://accounts.spotify.com/authorize",
  tokenEndpoint: "https://accounts.spotify.com/api/token",
  clientID: process.env.REACT_APP_CLIENT_ID,
  redirectUri: process.env.REACT_APP_CLIENT_URL,
};

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
  "playlist-read-private",
];

const generateRandomString = (length) => {
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const values = crypto.getRandomValues(new Uint8Array(length));
  return values.reduce((acc, x) => acc + possible[x % possible.length], "");
};

const sha256 = async (plain) => {
  const data = new TextEncoder().encode(plain);
  return crypto.subtle.digest("SHA-256", data);
};

const base64encode = (input) =>
  btoa(String.fromCharCode(...new Uint8Array(input)))
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");

const saveToken = (response) => {
  localStorage.setItem("access_token", response.access_token);
  if (response.refresh_token) {
    localStorage.setItem("refresh_token", response.refresh_token);
  }
  const expiresAt = Date.now() + Number(response.expires_in) * 1000;
  localStorage.setItem("token_expires", String(expiresAt));
  return response.access_token;
};

const postToken = async (body) => {
  const res = await fetch(config.tokenEndpoint, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(body),
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.error_description || data.error || "token error");
  }
  return data;
};

export const redirectToSpotifyLogin = async () => {
  const codeVerifier = generateRandomString(64);
  const codeChallenge = base64encode(await sha256(codeVerifier));
  localStorage.setItem("code_verifier", codeVerifier);

  const authUrl = new URL(config.authEndpoint);
  authUrl.search = new URLSearchParams({
    response_type: "code",
    client_id: config.clientID,
    redirect_uri: config.redirectUri,
    scope: scopes.join(" "),
    code_challenge_method: "S256",
    code_challenge: codeChallenge,
    show_dialog: "true",
  }).toString();

  window.location.href = authUrl.toString();
};

let exchangePromise = null;

export const exchangeCodeForToken = (code) => {
  if (!exchangePromise) {
    exchangePromise = postToken({
      client_id: config.clientID,
      grant_type: "authorization_code",
      code,
      redirect_uri: config.redirectUri,
      code_verifier: localStorage.getItem("code_verifier"),
    })
      .then(saveToken)
      .finally(() => {
        localStorage.removeItem("code_verifier");
      });
  }
  return exchangePromise;
};

export const getStoredAccessToken = async () => {
  const access = localStorage.getItem("access_token");
  const expires = Number(localStorage.getItem("token_expires") || 0);
  if (access && Date.now() < expires - 60000) return access;

  const refresh = localStorage.getItem("refresh_token");
  if (!refresh) return null;

  return saveToken(
    await postToken({
      client_id: config.clientID,
      grant_type: "refresh_token",
      refresh_token: refresh,
    })
  );
};

export const clearSession = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  localStorage.removeItem("token_expires");
  localStorage.removeItem("code_verifier");
};
