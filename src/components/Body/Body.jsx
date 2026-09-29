import Header from './Header'
import { BodyContainer,Icons,Info, InfoText, Songs } from './Styles'
import {useSelector} from "react-redux";
import { selectPlaylist } from '../../Features/PlaylistSlice';
import { Favorite, MoreHoriz, PlayCircle } from '@mui/icons-material';
import SongRow from './SongRow';



const Body = () => {
  const playlist = useSelector(selectPlaylist);
  const tracks = playlist?.tracks?.items?.filter((item) => item?.track?.album?.images?.[0]?.url) ?? [];
  return (
    <BodyContainer>
     <Header/>
     <Info>
      {playlist?.images?.[0]?.url ? <img src={playlist.images[0].url} alt="" /> : null}
      <InfoText>
        <h4>Playlist</h4>
        <h2>{playlist?.name || "Sin playlist"}</h2>
        <p>{playlist ? `${playlist.tracks?.total ?? tracks.length} canciones` : "Entra de nuevo con Spotify para cargar tus playlists."}</p>
      </InfoText>
     </Info>
     <Songs>
      <Icons>
        <PlayCircle className='playButton'/>
        <Favorite fontSize='large'/>
        <MoreHoriz fontSize='large'/>
        </Icons>
        {
          tracks.map((item, index) => (
            <SongRow track={item.track} key={item.track.id || index}/>
          ))
        }
     </Songs>
      </BodyContainer>
  )
}

export default Body