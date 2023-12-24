import * as api from '../api';

export const uploadVideo=(videoData)=>async(dispatch)=>{
    try {
        const { fileData, fileOptions } = videoData;
        //console.log(fileData)
        const {data}= await api.uploadVideo(fileData, fileOptions)
        dispatch({type:'POST_VIDEO',data})
        dispatch(getAllVideos())
      } catch (error) {
        alert(error.response.data.message)
      }
}

export const getAllVideos=()=>async(dispatch)=>{
    try {
      const {data}= await api.getVideos();
      dispatch({type:'FETCH_ALL_VIDEOS',payload:data})
  } catch (error) {
      console.log(error)
  }
}

export const likeVideo=(LikeDate)=>async(dispatch)=>{
  try {
    const {id,Like}=LikeDate;
    const {data}= await api.likeVideo(id,Like);
    dispatch({type:"POST_LIKE",payload:data})
    dispatch(getAllVideos());
  } catch (error) {
    console.log(error)
  }
}