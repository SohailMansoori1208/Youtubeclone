import React from 'react'
import './LeftSideBar.css'
import { AiFillLike, AiFillPlaySquare, AiOutlineHome } from 'react-icons/ai'
import { MdOutlineExplore, MdOutlineVideoLibrary, MdOutlineWatchLater, MdSubscriptions } from 'react-icons/md'
import shorts from './youtube-shorts-logo-15252.png'
import { FaHistory } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
function DrawerSidebar({ toggleDrawer, toggleDrawerSidebar}) {
  return (
    <div className='container_DrawerLeftSidebar' style={toggleDrawerSidebar}>
        <div className='container2_DrawerLeftSidebar'>
            <div className='Drawer_leftsidebar'>
                <NavLink to={'/'} className="icon_siderbar_div">
                    <p>
                        <AiOutlineHome
                            size={22}
                            className={'icon_sidebar'}
                            style={{margin: "auto 0.7rem"}}
                        />
                        <div className="text_sidebar_icon">Home</div>
                    </p>
                </NavLink>
                <div className="icon_siderbar_div">
                        <p>
                            <MdOutlineExplore
                                size={22}
                                className={'icon_sidebar'}
                                style={{margin: "auto 0.7rem"}}
                            />
                            <div className="text_sidebar_icon">Explore</div>
                            </p>
                    </div>

                    <div className="icon_siderbar_div">
                        <p>
                            <img
                                src='shorts'
                                width={22}
                                className={'icon_sidebar'}
                                style={{margin: "auto 0.7rem"}}
                            />
                        <div className="text_sidebar_icon">Shorts</div>
                        </p>
                    </div>

                    <div className="icon_siderbar_div">
                        <p>
                            <MdSubscriptions
                                size={22}
                                className={'icon_sidebar'}
                                style={{margin: "auto 0.7rem"}}
                            />
                            <div className="text_sidebar_icon">Subscription</div>
                        </p>
                    </div>
            </div>
            <div className="librarybtn_Drawerleftsidebar">
                <NavLink to={'/library'} className="icon_siderbar_div">
                     <p>
                        <MdOutlineVideoLibrary
                            size={22}
                            className={'icon_sidebar'}
                            style={{margin: "auto 0.7rem"}}
                        />
                        <div className="text_sidebar_icon">Library</div>
                    </p>
                </NavLink>
                </div>
                <NavLink to={'/watchhistory'} className="icon_siderbar_div">
                    <p>
                        <FaHistory
                            size={22}
                            className={'icon_sidebar'}
                            style={{margin: "auto 0.7rem"}}
                        />
                        <div className="text_sidebar_icon">History</div>
                    </p>
                </NavLink>
                <NavLink to={'/YourVideos'} className="icon_siderbar_div">
                    <p>
                        <AiFillPlaySquare
                            size={22}
                            className={'icon_sidebar'}
                            style={{margin: "auto 0.7rem"}}
                        />
                        <div className="text_sidebar_icon">Your Videos</div>
                    </p>
                </NavLink>
                    <NavLink to={'/watchlater'} className="icon_siderbar_div">
                        <p>
                            <MdOutlineWatchLater
                                size={22}
                                className={'icon_sidebar'}
                                style={{margin: "auto 0.7rem"}}
                            />
                            <div className="text_sidebar_icon">Watch later</div>
                        </p>
                    </NavLink>

                    <NavLink to={'/likedvideos'} className="icon_siderbar_div">
                        <p>
                            <AiFillLike
                                size={22}
                                className={'icon_sidebar'}
                                style={{margin: "auto 0.7rem"}}
                            />
                            <div className="text_sidebar_icon">Liked videos</div>
                        </p>
                    </NavLink>
            <div className="Subscription_lsdbar">
                <h3>Your Subscription</h3>
                <div className="Channel_lsdbar">
                    <p>c</p>
                    <div>channel</div>
                </div>

                <div className="Channel_lsdbar">
                    <p>c</p>
                    <div>channel</div>
                </div>

                <div className="Channel_lsdbar">
                    <p>c</p>
                    <div>channel</div>
                </div>

                <div className="Channel_lsdbar">
                    <p>c</p>
                    <div>channel</div>
                </div>
            </div>
        </div>
        <div className="container3_DrawerLeftSidebar"
        onClick={()=> toggleDrawer()}
        ></div>
    </div>
  )
}

export default DrawerSidebar
