import React from 'react'
import ShowVideoList from '../ShowVideoList/ShowVideoList'

function WHLVideoList({page,CurrentUser,videoList}) {
  console.log(videoList)
  return (
    <>
    {
        videoList?.data?.filter(q=>q?.Viewer=== CurrentUser).reverse().map(m=>{
            return(
                <>
                <ShowVideoList videoId={m?.videoId} key={m?._id}/>
                </>
            )
        })
    }
    </>
  )
}

export default WHLVideoList
