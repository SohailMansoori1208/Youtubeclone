import React from 'react'
import {BsThreeDots} from 'react-icons/bs'
import './LikeWacthLaterSavebtns.css'
import { MdPlaylistAddCheck } from 'react-icons/md'
import { RiHeartAddFill, RiPlayListAddFill, RiShareForwardLine} from 'react-icons/ri'
import { useState } from 'react'
import { AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'
function LikeWatchLaterSavebtns() {
    const [SAveVideo, setSAveVideo] = useState(true);
    const [DislikeBtn, setDislikeBtn] = useState(false);
    const [LikeBtn, setLikeBtn] = useState(false);

    const toggleSavedVideo=()=>{
        if(SAveVideo){
            setSAveVideo(false);
        }else{
            setSAveVideo(true);
        }
    }
    const toggleLikeBtn=()=>{
        if(LikeBtn){
            setLikeBtn(false);
        }else{
            setLikeBtn(true);
        }
    }
    const toggleDislikeBtn=()=>{
        if(DislikeBtn){
            setDislikeBtn(false);
        }else{
            setDislikeBtn(true);
        }
    }
  return (
    <div className='btns_cont_videoPage'>
        <div className="btn_videoPage">
            <BsThreeDots/>
        </div>

        <div className="btn_videoPage">

             <div className="like_videoPage" onClick={()=>toggleLikeBtn()}>
                {LikeBtn ? ( <>
                    <AiFillLike size={22} className='btns_videoPage'/>
                    </>
                    ):(
                    <>
                    <AiOutlineLike size={22} className='btns_videoPage'/>
                    </>
                )} 
                <b>1</b>
            </div>

            <div className="like_videoPage" onClick={()=>toggleDislikeBtn()}>
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
