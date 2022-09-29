

export const getTokenFromURL = () => {
    return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial,item) => {
        let parts = item.split("=")
        initial[parts[0]] = decodeURIComponent(parts[1])
        return initial;
    }, {})
}

const config ={
 authEndpoint : process.env.REACT_APP_AUTH_END_POINT,
 clientID : process.env.REACT_APP_CLIENT_ID,
 redirectUri : process.env.REACT_APP_CLIENT_URL,
}
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state"
]
export const loginURL = `${config.authEndpoint}?client_id=${config.clientID}&response_type=token&redirect_uri=${config.redirectUri}&scope=${scopes.join(
    "%20")}&show_dialog=true`;
