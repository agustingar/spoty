
import { useEffect } from 'react';
import Login from './components/Login/Login';
import Player from './components/Player/Player';
import { getTokenFromURL } from './SpotifyLogic';
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
    const hash = getTokenFromURL();
    const Token = hash.access_token;
    if (Token) {
      dispatch(SET_TOKEN(Token));
      spotify.setAccessToken(Token);
      spotify.getMe().then(user => dispatch(SET_USER(user)))
      console.log("token => ", Token);
      spotify.getPlaylist("37i9dQZF1DWVJv1UsWItkB").then(playlist =>
        dispatch(SET_PLAYLIST(playlist)))
    }
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
