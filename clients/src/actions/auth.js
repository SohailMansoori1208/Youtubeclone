import * as api from '../api'
import { setCurrentUser } from './currentUsers';

export const login=(authData)=>async(dispatch)=>{
    try {
        // console.log(authData);
        const { data } = await api.login(authData);
        dispatch({ type: "AUTH", data });
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
      } catch (error) {
        alert(error);
      }
    } 