import React from 'react'
import LeftSideBar from '../../Components/LeftSideBar/LeftSideBar'
import ShowVideoGrid from '../../Components/ShowVideoGrid/ShowVideoGrid'
import vid from '../../Components/Video/vid.mp4.mp4'
import './yourvideos.css'

function Yourvideos() {
  const vids = [
    {
      _id: 1,
       video_src: vid,
       Chanel: "62bafe6752cea35a6c30685f",
       title: "video 1",
       Uploder: "abc",
       description: "description of  video 1",
     },
     {
       _id: 2,
       video_src: vid,
       Chanel: "cdd",
       title: "video 2",
       Uploder: "abc",
       description: "description of  video 2",
     },
     {
       _id: 3,
       video_src: vid,
       Chanel: "add",
       title: "video 3",
       Uploder: "abc",
       description: "description of  video 3",
     },
     {
      _id: 4,
      video_src: vid,
      Chanel: "add",
      title: "video 3",
      Uploder: "abc",
      description: "description of  video 3",
    },
    ];

  return (
    <div className='Container_Pages_App'>
        <LeftSideBar/>
        <div className="Container2_Pages_App">
          <div className="navigation_Home"></div>
          <div className="container_yourvideo">
          <h1>Your Videos</h1>
        <ShowVideoGrid vids={vids}/>
          </div>
        </div>  
    </div>
  )
}

export default Yourvideos
