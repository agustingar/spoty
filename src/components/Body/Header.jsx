import { Search } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React from 'react'
import { selectUser } from '../../Features/UserSlice'
import { HeaderContainer, HeaderLeft, HeaderRight } from './Styles'
import { useSelector } from 'react-redux';
const Header = () => {
  const user = useSelector(selectUser)
  console.log(user)
  return (
    <HeaderContainer>
        <HeaderLeft>
          <Search/>
        <input type='text' placeholder="Search for Artist, Songs, or Playlists" /></HeaderLeft>
        <HeaderRight>
          <Avatar src={user?.images[0]?.url} alt={user?.id}/> <h4>{user?.display_name}</h4>
        </HeaderRight>
    </HeaderContainer>
  )
}

export default Header