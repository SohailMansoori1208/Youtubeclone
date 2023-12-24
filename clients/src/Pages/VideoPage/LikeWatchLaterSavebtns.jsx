import React, { useEffect } from 'react'
import {BsThreeDots} from 'react-icons/bs'
import './LikeWacthLaterSavebtns.css'
import { MdPlaylistAddCheck } from 'react-icons/md'
import { RiHeartAddFill, RiPlayListAddFill, RiShareForwardLine} from 'react-icons/ri'
import { useState } from 'react'
import { AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { likeVideo } from '../../actions/video'
import { addTolikedVideo } from '../../actions/likedVideo'

function LikeWatchLaterSavebtns({vv,vid}) {

    const CurrentUser = useSelector((state)=> state?.currentUserReducer);
    const dispatch = useDispatch();
    const [SAveVideo, setSAveVideo] = useState(true);
    const [DislikeBtn, setDislikeBtn] = useState(false);
    const [LikeBtn, setLikeBtn] = useState(false);

    const likedVideoList = useSelector((state) => state.likedVideoReducer); 
    console.log(likedVideoList)
    // useEffect(() => {
    //     likedVideoList?.data?.filter(
    //         (q) => q?.videoId === vid && q?.Viewer === CurrentUser?.result._id
    //       )
    //       .map(m => setLikeBtn(true));
    //   }, []);

    const toggleSavedVideo=()=>{
        if(SAveVideo){
            setSAveVideo(false);
        }else{
            setSAveVideo(true);
        }
    }
    const toggleLikeBtn=(e,lk)=>{
    if(CurrentUser){
        if(LikeBtn){
            setLikeBtn(false);
            dispatch(
                likeVideo({
                    id:vid,
                    Like:lk - 1,
                })
            )
        }else{
            setLikeBtn(true);
            dispatch(
                likeVideo({
                    id:vid,
                    Like:lk + 1,
                })
            );
            dispatch(
                addTolikedVideo({
                    videoId:vid,
                    Viewer: CurrentUser?.result._id,
            }))
            setDislikeBtn(false);
        }
        }else{
            alert("Please Login to give a like")
        }
    }
    const toggleDislikeBtn=(e,lk)=>{
        if(CurrentUser){
        if(DislikeBtn){
            setDislikeBtn(false);
        }else{
            setDislikeBtn(true);
            if(LikeBtn){
                dispatch(
                    likeVideo({
                        id:vid,
                        Like:lk - 1,
                    })
                )
            }
            setLikeBtn(false);
        }
        }else{
            alert("Please  Login to give a dislike")
        }
    }
  return (
    <div className='btns_cont_videoPage'>
        <div className="btn_videoPage">
            <BsThreeDots/>
        </div>

        <div className="btn_videoPage">

             <div className="like_videoPage" onClick={(e)=>toggleLikeBtn(e,vv.Like)}>
                {LikeBtn ? ( <>
                    <AiFillLike size={22} className='btns_videoPage'/>
                    </>
                    ):(
                    <>
                    <AiOutlineLike size={22} className='btns_videoPage'/>
                    </>
                )} 
                <b>{vv?.Views}</b>
            </div>

            <div className="like_videoPage" onClick={(e)=>toggleDislikeBtn(e,vv.Like)}>
                {DislikeBtn ? ( <>
                    <AiFillDislike size={22} className='btns_videoPage'/>
                    </>
                    ):(
                    <>
                    <AiOutlineDislike size={22} className='btns_videoPage'/>
                    </>
                )} 
                <b>Dislike</b>
            </div>

            <div className="like_videoPage" onClick={()=>toggleSavedVideo()}>
                {
                    SAveVideo ?<>
                    <RiPlayListAddFill size={22} className='btns_videoPage'/>
                    <b>Save</b>
                    </>:<>
                    <MdPlaylistAddCheck size={22} className='btns_videoPage'/>
                    <b>Save</b>
                    </>
                } 
            </div>

            <div className="like_videoPage">
                    <>
                    <RiHeartAddFill size={22} className='btns_videoPage'/>
                    <b>Thanks</b>
                    </>
            </div>

            <div className="like_videoPage">
                    <>
                    <RiShareForwardLine size={22} className='btns_videoPage'/>
                    <b>Share</b>
                    </>
            </div>
        </div>
     </div>
  )
}

export default LikeWatchLaterSavebtns
