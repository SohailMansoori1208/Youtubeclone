
import React from 'react'
import Home from '../Pages/Home/Home'

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import Library from '../Pages/Library/Library';
import WatchHistory from '../Pages/WatchHistory/WatchHistory';
import WatchLater from '../Pages/WatchLater/WatchLater';
import YourVideos from '../Pages/YourVideos/yourvideos';
import LikedVideos from '../Pages/LikedVideos/LikedVideos';
import VideoPage from '../Pages/VideoPage/VideoPage';
function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/library" element={<Library/>} />
      <Route path="/watchhistory" element={<WatchHistory/>}/>
      <Route path="/watchlater" element={<WatchLater/>}/>
      <Route path="/likedvideos" element={<LikedVideos/>}/>
      <Route path="/YourVideos" element={<YourVideos/>}/>
      <Route path="/videopage/:vid" element={<VideoPage/>}/>
    </Routes>
  )
}

export default AllRoutes
