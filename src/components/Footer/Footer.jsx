import { PlayCircleOutline, PlaylistAdd, Repeat, Shuffle, SkipNext, SkipPrevious, VolumeDown } from '@mui/icons-material'
import { Grid,Slider } from '@mui/material'
import React from 'react'
import { FooterCenter, FooterContainer, FooterLeft, FooterRight } from './Styles'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLeft>
        <img src="https://static.posters.cz/image/750/buque-costero/coldplay-parachutes-album-cover-i56853.jpg" alt="cover"/>
      <div>
      <h4>Shape of My heart</h4>
      <p>String</p>
      </div>
      </FooterLeft>
      <FooterCenter>
        <Shuffle className='shuffle'/>
        <SkipPrevious className='icon'/>
        <PlayCircleOutline className='icon'/>
        <SkipNext className='icon'/>
        <Repeat className='repeat'/>
      </FooterCenter>
      <FooterRight>
        <Grid container spacing={3}>
          <Grid item><PlaylistAdd/></Grid>
          <Grid item><VolumeDown/></Grid>
          <Grid item xs><Slider/></Grid>

        </Grid>
      </FooterRight>
    
    </FooterContainer>
  )
}

export default Footer