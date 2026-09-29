
import { useEffect } from 'react';
import Login from './components/Login/Login';
import Player from './components/Player/Player';
import { exchangeCodeForToken, getStoredAccessToken, clearSession } from './SpotifyLogic';
import { SET_USER, selectUser } from './Features/UserSlice';
import { useDispatch, useSelector } from 'react-redux'
import SpotifyWebApi from 'spotify-web-api-js'
import { SET_TOKEN } from './Features/TokenSlice';
import { SET_PLAYLIST } from './Features/PlaylistSlice';

const spotify = new SpotifyWebApi();


function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();


  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    const loadUserPlaylist = async () => {
      const page = await spotify.getUserPlaylists({ limit: 20 });
      const playlists = page?.items?.filter((item) => item?.id) ?? [];
      for (const item of playlists) {
        try {
          return await spotify.getPlaylist(item.id);
        } catch (err) {
          if (err?.status !== 404 && err?.status !== 403) throw err;
        }
      }
      return null;
    };

    const boot = async (token) => {
      dispatch(SET_TOKEN(token));
      spotify.setAccessToken(token);
      const me = await spotify.getMe();
      dispatch(SET_USER(me));
      const playlist = await loadUserPlaylist();
      if (playlist) dispatch(SET_PLAYLIST(playlist));
    };

    (async () => {
      try {
        const token = code
          ? await exchangeCodeForToken(code)
          : await getStoredAccessToken();
        if (code) {
          const url = new URL(window.location.href);
          url.searchParams.delete("code");
          url.searchParams.delete("state");
          const next = url.pathname + url.search + url.hash;
          window.history.replaceState({}, document.title, next);
        }
        if (token) await boot(token);
      } catch (err) {
        if (err?.status === 401) clearSession();
      }
    })();
  }, [dispatch])


  return (
    <div>
      {
        user ? <Player /> : <Login />
      }
    </div>
  );
}

export default App;
