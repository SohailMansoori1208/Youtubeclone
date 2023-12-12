import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth";
import currentUserReducer from './currentUsers';
import channelReducers from './channel';

export default combineReducers({
    authReducer,
    currentUserReducer,
    channelReducers
    

});