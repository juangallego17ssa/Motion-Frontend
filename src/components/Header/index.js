// import { StyledHeader } from "./Header.style"
import styled from "styled-components";
import { Link } from "react-router-dom";

import logo from '../../assets/images/logo.png'
import notification_bell from '../../assets/svgs/notification_bell.svg'
import jennifer from '../../assets/images/users/jennifer.png'
import menu from '../../assets/svgs/menu.svg'
import post from '../../assets/svgs/posts_logo.svg'
import friends from '../../assets/svgs/icon-friends.svg'
import { useSelector } from "react-redux";
import { useState } from "react";


//--------Style---------

const StyledHeader = styled.header`
    box-sizing: border-box;
    height: 80px;
    width: 100vw;
    position: absolute; top: 0; left: 0;
    box-shadow: 0 0 10px rgba(0,0,0,.5);
    padding: 1em;
    gap: 1em;
    color: black;
    background-color: #FFF;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;
const LogoDiv = styled.div`
    display: flex;
    align-items: center;
    gap: .5em;
`;
const NavDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 1em;
    .Link{
        display: flex;
        align-items: center;
        gap: .8em;
    }
    
`;
const UserDiv = styled.div`
    position: absolute;
    right: 1em;
    align-items: center;
    display: flex;
    gap: 2em;
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





const Header = () => {
    const [ShowProfile, setShowProfile] = useState(false);

    return (
        <StyledHeader>
            <LogoDiv>
                <img src={logo}/>
                <h1>Motion</h1>
             </LogoDiv>
            <NavDiv>
                <Link className="Link" to={'/posts'}>
                    <img src={post}/>
                    <span>Posts</span>
                </Link>
                <Link className="Link" to={'/friends'}>
                    <img src={friends}/>
                    <span>Find Friends</span>
                </Link>
                
            </NavDiv>
            <UserDiv>
                <div className="notification">
                    <img src={notification_bell}/>
                    <div className="notification_num">
                        <span >3</span>
                    </div>
                </div>
                <Link to={'/profile'}>
                     <img src={jennifer} alt="user-avatar"/>
                </Link>
                <img src={menu} alt="menu"/>

            </UserDiv>
        </StyledHeader>
    )
}

export default Header;