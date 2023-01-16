import Body from "../Body/Body"
import Footer from "../Footer/Footer"
import SideBar from "../SideBar/SideBar"
import { SpotifyBody } from "./Styles"
  
const Player = () => {
  return (
    <>
    <SpotifyBody >
        <SideBar/>
            <Body/>
    </SpotifyBody>
    <Footer/>
    </>
  )
}

export default Player