import { redirectToSpotifyLogin } from "../../SpotifyLogic"
import { LoginContainer, LoginButton, Credit } from "./Styles"

const PORTFOLIO = "https://agustingarciallorca.com/portfolio"

const Login = () => {
  return (
    <LoginContainer>
      <div className="card">
        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="Spotify" className="logo" />
        <p className="tagline">Escucha lo que te gusta.</p>
        <LoginButton
          href="#login"
          onClick={(event) => {
            event.preventDefault();
            redirectToSpotifyLogin();
          }}
        >
          Entrar con Spotify
        </LoginButton>
        <Credit href={PORTFOLIO} target="_blank" rel="noreferrer">
          Agustín García
        </Credit>
      </div>
    </LoginContainer>
  )
}

export default Login
