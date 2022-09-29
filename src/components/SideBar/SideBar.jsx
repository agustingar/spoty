import React from 'react'
import { Playlists, SideBarContainer } from './Styles'
import HomeIcon from '@mui/icons-material/Home';
import SideBarChoice from './SideBarChoice';
import { LibraryMusic, Search } from '@mui/icons-material';

const SideBar = () => {
  return (
    <SideBarContainer>
        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt='logo' />
    <SideBarChoice title="Home" Icon={HomeIcon } />
    <SideBarChoice title="Search" Icon={Search } />
    <SideBarChoice title="Your Library" Icon={LibraryMusic } />
<Playlists>PLAYLISTS</Playlists>   
<hr/>
<SideBarChoice title="2022 - Chillout " />
    <SideBarChoice title="Exitos España" />
    </SideBarContainer>
 
  )
}

export default SideBar