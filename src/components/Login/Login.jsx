
import { Button } from "@mui/material"
import { loginURL } from "../../SpotifyLogic"
import { LoginContainer, LoginButton } from "./Styles"



const Login = () => {
  return (
    <LoginContainer>
      <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="logo" className="logo" />

      <LoginButton href={loginURL}>LoginButton</LoginButton>
      <Button className="bot" href="https://www.github.com/agustingar" target="_blank">By Agustín García</Button>
    </LoginContainer>
  )
}

export default Login