// import { StyledHeader } from "./Header.style"
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

//  >>>>>> Component <<<<<<<
import ReceivedRequest from "./ReceivedRequest";
import SentRequest from "./SentRequest";
//  >>>>>> icon <<<<<<<
import { BiUser, BiDotsVerticalRounded } from 'react-icons/bi'
import { IoMdLogOut, IoMdNotifications } from 'react-icons/io'


//  >>>>>> img <<<<<<<
import logo from '../../assets/images/logo.png'
import post from '../../assets/svgs/posts_logo.svg'
import friends from '../../assets/svgs/icon-friends.svg'
import UserAvatar from "../UserAvatar";


//--------Style---------

const StyledHeader = styled.header`
    box-sizing: border-box;
    height: 80px;
    width: 100vw;
    position: absolute; top: 0; left: 0;
    box-shadow: 0 0 10px rgba(0,0,0,.5);
    padding: 2rem;
    gap: 5em;
    color: black;
    background-color: #FFF;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    .icon{
        transform: scale(1.8);
        opacity: 0.3;
        :hover{
            opacity: 0.5;
        }
    }
`;
const LogoDiv = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    gap: 12px;
    h1{
        font-size: 22px; font-weight: 400;
    }
`;
const NavDiv = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    gap: 3em;
   
    .NavLink{
        display: flex;
        height: 80px;
        align-items: center;
        gap: 5px;
        text-decoration: none;
        color: black;
        &.active{
            border-bottom:3px solid #AD73FD ;
            
        }

    }
    
`;
const UserDiv = styled.div`
    position: absolute;
    right: 2rem;
    align-items: center;
    display: flex;
    gap: 2em;
    img{
        width: 40px;
        height: 40px;
    }
    .notification{
      position: relative;
      display: flex;
      .notification_num{
        position: relative; top: -6px; left:3px;
        width: 20px; height: 20px;
        background: linear-gradient(132.96deg, #C468FF 3.32%, #6E91F6 100%);
        border-radius: 20px;
        span{
            position: absolute; top:13%; left: 28%;
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
            color: #fff; font-size: 14px;
        }
      }
    }  
`;

const ProfileBox = styled.div`
    z-index: 1;
    /* box-sizing: border-box; */
    padding:0.5rem 0 ;
    position: absolute; 
    right:10%; top: 120%;
    width: 180px;
    border-radius: 4px;
    background-color: #FFF;
    box-shadow: 0 0 5px rgba(0,0,0,0.1);
    .link{
        /* border: 1px solid green; */
        justify-content: center;
        align-items: center;
        padding: .8rem 2rem;
        display:grid;
        grid-template-columns: 1fr 3fr;
        text-align: center;
        text-decoration: none;
        opacity:0.5;
        color: black;
        :hover{
            background-color: #F2F2F2;
            opacity: 1;
        }
    }
    .icon{
        opacity: 0.9;
        transform: scale(1.5);

    }
`;

const UserName = styled.h1`
    display: flex;
    width: 40px; height:40px;
    background-color: rgba(0,0,0,0.3);
    border-radius: 30px;
    align-items: center;
    justify-content: center;
    color: #FFF;
    cursor: default;
`;

const NotificationBox = styled.div`
    /* border: 1px solid blue; */
    border-radius:4px;
    z-index: 1;
    position :absolute; right: 10%; top: 190%;
    width: 300px;
    padding:30px ;
    background-color: #FFF;
    display: flex;
    flex-direction: column;
    gap: 40px;
    box-shadow: 0 0 5px rgba(0,0,0,0.1);
`;

const Header = () => {
    const userData = useSelector(state => state.user.userData);
    const [ShowNotification, setShowNotification] = useState(false);
    const [ShowProfile, setShowProfile] = useState(false);
    const navigate = useNavigate()

    const logout = () => {
        localStorage.setItem('token', '')
        navigate('/')
    }

    return (
        <StyledHeader>
            <LogoDiv>
                <img src={logo} />
                <h1>Motion</h1>
            </LogoDiv>
            <NavDiv>
                <NavLink className="NavLink" to={'/posts'}>
                    <img src={post} /><span>Posts</span>
                </NavLink>
                <NavLink className="NavLink" to={'/friends'}>
                    <img src={friends} />Find Friends
                </NavLink>

            </NavDiv>

            {/*   ========= Notification drop-down box =========  */}
            <UserDiv>
                <div className="notification">
                    <IoMdNotifications className="icon" onClick={() => setShowNotification(!ShowNotification)} />

                    <div className="notification_num">
                        <span >3</span>
                    </div>
                    {ShowNotification && (
                        <NotificationBox>
                            <h2>Received request</h2>
                            <ReceivedRequest className='notice' />
                            <h2>Sent request</h2>
                            <SentRequest />
                        </NotificationBox>
                    )}
                </div>


                {/*   ========= if user dont set up avatar show first letter in capital =========  */}
                <div>
                    <UserAvatar userData={userData} isSmallAvatar />


                    {/*   ========= profile dropdown box =========  */}
                    {ShowProfile && (
                        <ProfileBox>
                            <Link className="link" to={'/profile'}><BiUser className="icon" />Profile</Link>
                            <div className="link" onClick={logout}><IoMdLogOut className="icon" onClick={logout} />Logout</div>

                        </ProfileBox>
                    )}

                </div>
                <BiDotsVerticalRounded className="icon" />
            </UserDiv>
        </StyledHeader >
    )
}

export default Header;