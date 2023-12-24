import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth";
import currentUserReducer from './currentUsers';
import channelReducers from './channel';
import videoReducer from "./Video";
import likedVideoReducer from './likedVideo'


export default combineReducers({
    authReducer,
    currentUserReducer,
    channelReducers,
    videoReducer,
    likedVideoReducer,
    

});