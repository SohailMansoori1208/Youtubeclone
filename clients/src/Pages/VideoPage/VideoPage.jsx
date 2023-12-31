import React, { useEffect } from 'react'
//import vid from '../../Components/Video/vid.mp4.mp4'
import './VideoPage.css'
import LikeWatchLaterSavebtns from './LikeWatchLaterSavebtns'
import Comments from '../../Components/Comments/Comments'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment';
import { addToHistory } from '../../actions/History'
import { viewVideo } from '../../actions/video'
function VideoPage() {
    const {vid}=useParams();
    console.log(vid)
    //const channels= useSelector((state)=> state?.channelReducers);
    //console.log(channels)
   // const currentChannel = channels.filter((c) =>c._id === vid)[0];

    const vids=useSelector(state=>state.videoReducer)?.data;
    console.log(vids)
    const vv = vids?.filter((q) => q._id === vid)[0];
    const dispatch= useDispatch();
    const CurrentUser = useSelector((state) => state?.currentUserReducer);

    const handleHistory = () => {
        dispatch(
          addToHistory({
            videoId: vid,
            Viewer: CurrentUser?.result._id,
          })
        );
      };

      const handleViews=()=>{
        dispatch( viewVideo({
          id:vid
        }))
      }

    useEffect(() => {
        if (CurrentUser) {
          handleHistory();
        }
        handleViews();
      }, []);

  return (
    <>
        <div className="container_videoPage">
            <div className="container2_videoPage">
                <div className="video_display_screen_videoPage">
                    <video 
                        src={`http://localhost:5500/${vv?.filePath}`}
                        className={"video_ShowVideo_videoPage"}
                        controls
                        //autoPlay
                    ></video>
                <div className="video_details_videoPage">       
                    <div className="video_btns_title_VideoPage_cont">
                        <p className="video_title_videoPage">{vv?.videoTitle}</p>
                        <div className="views_date_btns_videoPage">
                            <div className="views_videoPage">
                                {vv?.Views} views <div className="dot"></div> {moment(vv?.createdAt).fromNow()}
                            </div>
                            <LikeWatchLaterSavebtns vv={vv} vid={vid}/>
                        </div>
                    </div>
                    <Link to={`/channel/${vv?.videoChannel}`} className="channel_details_videoPage">
                        <b className="channel_logo_videoPage">
                            <p>{vv?.Uploader?.charAt(0).toUpperCase()}</p>
                        </b>
                        <p className="channel_name_videoPage">{vv?.Uploader}</p>
                    </Link>
                    <div className="comments_videoPage">
                        <h2>
                            <u>Comments</u>
                        </h2>
                        <Comments videoId={vv._id}/>
                    </div>
                </div>
            </div>
            <div className="more_videoBar">
                More Video
            </div>
            </div>
        </div>
    </>
  )
}

export default VideoPage
