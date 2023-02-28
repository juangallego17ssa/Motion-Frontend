import React from 'react';
import styled from 'styled-components';
import alber from '../../assets/images/users/alber.png'

//-------STYLE--------->
const StyledFriendCard = styled.div`
    margin-top: 120px;
    box-sizing: border-box;
    padding: 30px;
    display: flex;  flex-direction: column;
    justify-content: flex-start; align-items: center;
    height: 489px; width: 362px;
    border-radius: 4px;
    background-color: #FFF;
    gap: 30px;
    .btn{
        background-color: #fff;
        margin: 0 3px;
        width: 120px; height: 40px;
        border-radius: 30px;
        border: 1px solid rgba(0,0,0,.5);
        font-size: 0.8rem; font-weight: 500;  
        :hover{
        background: linear-gradient(132.96deg, #C468FF 3.32%, #6E91F6 100%);
        border: none;
        color: #FFF;
        } 
    }
    .user-hobbies{
        width: 100%;
        display:flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;

    }
`;
const Tag = styled.span`
        margin: 3px;
        background-color: #F2F2F2;
        padding: 0.8rem 1.2rem;
        border-radius: 30px;
        border: none;
        font-size: 1rem; font-weight: 400; 
`;

const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .3rem;
    .user-pic{
        width: 90px;
    }
    .user-name{
        font-size: 1.5rem;
        font-weight: 500;
    }
    .user-country{
        font-size: .9rem;
        font-weight: 400px;
    }

`;

export default function FriendsCard() {
  return (
    <StyledFriendCard >
      <UserInfo>
        <img className='user-pic' src={alber}/>
        <p className='user-name'>Albert Lawrence</p>
        <p className='user-country'>Zürich, Switzerland</p>
      </UserInfo>
      <div className='acion-buttons'>
        <button className='btn'>FOLLOW</button>
        <button className='btn'>ADD FRIEND</button>
      </div>
      <div className='user-about'>
        <p>Lorem ipsum dolor sit amet, vim ut quas volumus probatus, has tantas laudem iracundia et, ad per utamur ceteros apeirian</p>
      </div>
      <div className='user-hobbies'>
        <Tag>Hobby</Tag>
        <Tag>Hobby</Tag>
        <Tag>Hobby</Tag>
        <Tag>Hobby</Tag>
        <Tag>Hobby</Tag>
       
      </div>
    </StyledFriendCard>
  );
}
