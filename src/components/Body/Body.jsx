import Header from './Header'
import { BodyContainer,Icons,Info, InfoText, Songs } from './Styles'
import {useSelector} from "react-redux";
import { selectPlaylist } from '../../Features/PlaylistSlice';
import { Favorite, MoreHoriz, PlayCircle } from '@mui/icons-material';
import SongRow from './SongRow';


const Body = () => {
  const playlist = useSelector(selectPlaylist);
  console.log("playlist =>" , playlist);
  return (
    <BodyContainer>
     <Header/>
     <Info>
      <img src={playlist?.images[0]?.url} alt=""/>
      <InfoText>
        <h4>Playlist</h4>
        <h2>Weekly discovered</h2>
        <p> {playlist?.name} </p>
      </InfoText>
     </Info>
     <Songs>
      <Icons>
        <PlayCircle className='playButton'/>
        <Favorite fontSize='large'/>
        <MoreHoriz fontSize='large'/>
        </Icons>
        {
          playlist?.tracks?.items.map((item, index) => (
            <SongRow track={item.track} key={index}/>
          ))
        }
     </Songs>
      </BodyContainer>
  )
}

export default Body