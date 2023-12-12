import React from 'react'
import { Link } from 'react-router-dom'
import './ShowVideo.css'

function ShowVideo({vid}) {
  return (
    <>
        <Link to={`/VideoPage/${vid?._id}`}>
        <video
            src={`${vid?.video_src}`}
                className='Video_ShowVideo'
        ></video>
        </Link>
        <div className="video_description">
            <div className="Channel_logo_App">
                <div className="fstChar_logo_App">
                    <>{vid?.Uploader?.charAt(0).toUpperCase()}</>
                </div>
            </div>
            <div className="Video_details">
                <p className='title_vid_ShowVideo'>title</p>
                <pre className="vid_views_UploadTime">31-07-2002</pre>
                <pre className="vid_views_UploadTime">
                    1000 views  <div className="dot"></div>video uploaded 1 year ago
                </pre>

            </div>
        </div>
    </>
  )
}

export default ShowVideo
