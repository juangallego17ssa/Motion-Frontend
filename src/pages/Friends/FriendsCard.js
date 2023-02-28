import React from 'react';
import styled from 'styled-components';
import alber from '../../assets/images/users/alber.png'

//-------STYLE--------->

const StyledFriendCard = styled.div`
    box-sizing: border-box;
    padding: 30px;
    display: flex;  flex-direction: column;
    justify-content: flex-start; align-items: center;
    height: 489px; width: 362px;
    border-radius: 5px;
    background-color: #FFF;
    gap: 30px;
    justify-content: center;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.05);
  
`;
const Tag = styled.span`
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
   .img{
    width: 90px;
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
    position: relative;
    
    display: flex;
    gap: 6px;
`;
const Button = styled.button`
    width: 120px; height: 40px;
    background-color: #fff;
    border-radius: 30px;
    border: 1px solid rgba(0,0,0,.5);
    font-size: 0.8rem; font-weight: 500;  
        :hover{
        background: linear-gradient(132.96deg, #C468FF 3.32%, #6E91F6 100%);
        border: none;
        color: #FFF;
        font-weight: 600;
        } 
`;
//-------Component--------->
export default function FriendsCard({user}) {
    console.log(user)
  return (
    <StyledFriendCard >
      <FlexDiv>
        <img className='img' src={user.avatar}/>
        <p className='name'>{user.first_name} {user.last_name}</p>
        <p className='country'>{user.location}</p>
      </FlexDiv>
      <ButtonContainer>
        <Button>FOLLOW</Button>
        <Button>ADD FRIEND</Button>
      </ButtonContainer>
      <FlexDiv>
        <p>Lorem ipsum dolor sit amet, vim ut quas volumus probatus, has tantas laudem iracundia et, ad per utamur ceteros apeirian</p>
      </FlexDiv>
      <HobbiesBox>
        {user.things_user_likes.map(thing=><Tag>{thing}</Tag>)}
      </HobbiesBox>
    </StyledFriendCard>
  );
}
