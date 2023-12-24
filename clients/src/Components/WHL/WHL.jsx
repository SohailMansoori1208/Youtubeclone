import React from 'react'
import LeftSideBar from '../LeftSideBar/LeftSideBar'
import './Whl.css'
import WHLVideoList from './WHLVideoList'
import { useSelector } from 'react-redux';

function WHL({page,videoList}) {

    const CurrentUser =useSelector((state)=> state?.currentUserReducer);
    console.log(CurrentUser)

  return (
    <div className='Container_Pages_App'>
        <LeftSideBar/>
        <div className="Container2_Pages_App">
            <p className="det">
                <div className="box_WHL leftside_whl">
                    <b>Your {page} Shown Here</b>
                    {
                            page==="History"&&
                    <div className="clear_History_btn">
                        Clear History
                    </div>
}
                </div>
                <div className="rightSide_whl">
                    <h1>{page}</h1>
                    <div className="whl_list">
                        <WHLVideoList page={page} 
                        CurrentUser={CurrentUser?.result._id}
                        videoList={videoList}/>
                    </div>
                </div>
            </p>
        </div>
    </div>
  )
}

export default WHL
