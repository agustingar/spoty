
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

    const boot = async (token) => {
      dispatch(SET_TOKEN(token));
      spotify.setAccessToken(token);
      const user = await spotify.getMe();
      dispatch(SET_USER(user));
      const playlist = await spotify.getPlaylist("37i9dQZF1DWVJv1UsWItkB");
      dispatch(SET_PLAYLIST(playlist));
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
        console.error(err);
        clearSession();
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
