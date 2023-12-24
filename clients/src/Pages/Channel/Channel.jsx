import React from 'react'
import LeftSideBar from '../../Components/LeftSideBar/LeftSideBar'
import ShowVideoGrid from '../../Components/ShowVideoGrid/ShowVideoGrid'

import vid from '../../Components/Video/vid.mp4.mp4'
import DescribeChannel from './DescribeChannel';
import { useParams } from 'react-router-dom';


function Channel({setEditCreateChannelBtn, setVidUploadPage}) {

  const {Cid}=useParams();
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
          <DescribeChannel Cid={Cid}
            setVidUploadPage={setVidUploadPage}
            setEditCreateChannelBtn={setEditCreateChannelBtn}/>
        <ShowVideoGrid vids={vids}/>
        </div>
    </div>
  )
}

export default Channel
