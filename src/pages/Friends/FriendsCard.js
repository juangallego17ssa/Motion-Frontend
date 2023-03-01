import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useStore } from 'react-redux';
import { BiCheck } from "react-icons/bi";

//-------STYLE--------->

const StyledFriendCard = styled.div`
    box-sizing: border-box;
    padding: 30px;
    display: flex;  flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    /* height: 489px;  */
   
    width: 362px;
    border-radius: 5px;
    background-color: #FFF;
    gap: 30px;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.05);
  
`;
const Tag = styled.p`
        margin: 3px;
        background-color: #F2F2F2;
        padding: 0.8rem 1.2rem;
        border-radius: 30px;
        border: none;
        font-size: 1rem; font-weight: 400; 
`;

const FlexDiv = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: .3rem;
   img{
    position: relative;
    width: 90px;
    height: 90px;
    border-radius: 50px;
    :hover{
      transform: scale(1.1);
    }
   }
   .name{
    font-size: 22px;
   }

`;
const HobbiesBox = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;
const ButtonContainer = styled.div`
    position: relative; top:0px;
    display: flex;
    gap: 6px;
`;
const Button = styled.button`
    width: 120px; height: 40px;
    border-radius: 30px;
    border: 1px solid rgba(0,0,0,.5);
    font-size: 0.8rem; font-weight: 500;  
    background-color: #fff;
    &.false{
      background-color: #fff;
    }
    &.true{
      background: linear-gradient(132.96deg, #C468FF 3.32%, #6E91F6 100%);
      color: #FFF;font-weight:bolder;border:none;
    }
    
        :hover{
        background: linear-gradient(132.96deg, #C468FF 3.32%, #6E91F6 100%);
        border: none;
        color: #FFF;
        font-weight: 600;
        } 
`;
const Img = styled.div`
  clip-path: circle(90px at 80% 65%);
  background-color: #F2F2F2 ;
`;
const User = styled.p`
  display: flex; justify-content: center; align-items: center;
  width: 90px; height: 90px; border-radius: 50px;
  background-color: #F2F2F2;
  font-size: 1.5rem; font-weight: 600;
  :hover{
    transform: scale(1.1);
    cursor:default;
  }
`
//-------Component--------->
export default function FriendsCard({user}) {
   
  const userData = useSelector(state => state.user.userData); 
  const [isFollowing, setIsFollowing] = useState(false);
  const [isFriend, setIsFriend] = useState(false);

    const followHandler = ()=>{
      setIsFollowing(!isFollowing)
      // console.log(userData.first_name)
    }
    const handleAddFriend = ()=>{
      setIsFriend(!isFriend)
    }




    // console.log(user)
  return (
    <StyledFriendCard >
      <FlexDiv>
       {user.avatar?(<img src={user.avatar}/>):(<User>{user.first_name.charAt(0).toUpperCase()}</User>)}
        <p className='name'>{user.first_name} {user.last_name}</p>
        <p className='country'>{user.location}</p>
      </FlexDiv>
      <ButtonContainer>
        {isFollowing?
        <Button className='true' onClick={followHandler}>FOLLOWING</Button>:
        <Button className='false'onClick={followHandler}>FOLLOW</Button>}
        {/* <Button onClick={followHandler}>{isFollowing?`FOLLOWING`:`FOLLOW`}</Button> */}
        {isFriend?
        <Button onClick={handleAddFriend}><BiCheck/>FRIEND</Button>:
        <Button onClick={handleAddFriend}>ADD FRIEND</Button>}
       
      </ButtonContainer>
      <FlexDiv>
        <p>{user.about_me}</p>
      </FlexDiv>
      <HobbiesBox>
        {user.things_user_likes.map((thing,index)=><Tag key={index}>{thing}</Tag>)}
      </HobbiesBox>
    </StyledFriendCard>
  );
}
