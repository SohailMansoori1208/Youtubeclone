import * as api from '../api'

export const updateChannelDate=(id,updateData)=> async(dispatch)=>{
    try {
        const {data}= await api.updatechannelData(id,updateData);
        dispatch({type:'UPDATE_DATA',payload: data})
    } catch (error) {
        console.log(error)
    }
}