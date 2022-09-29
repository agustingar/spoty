import { configureStore }  from '@reduxjs/toolkit';
import userReducer from "../Features/UserSlice";
import tokenReducer from "../Features/TokenSlice";
import playlistReducer from "../Features/PlaylistSlice";

export default configureStore({
    reducer:{
    user: userReducer,
    token: tokenReducer,
    playlist: playlistReducer,
}

})