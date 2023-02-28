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
    border-radius: 5px;
    background-color: #FFF;
    gap: 30px;
  
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
export default function FriendsCard() {
  return (
    <StyledFriendCard >
      <FlexDiv>
        <img className='img' src={alber}/>
        <p className='name'>Albert Lawrence</p>
        <p className='country'>Zürich, Switzerland</p>
      </FlexDiv>
      <ButtonContainer>
        <Button>FOLLOW</Button>
        <Button>ADD FRIEND</Button>
      </ButtonContainer>
      <FlexDiv>
        <p>Lorem ipsum dolor sit amet, vim ut quas volumus probatus, has tantas laudem iracundia et, ad per utamur ceteros apeirian</p>
      </FlexDiv>
      <HobbiesBox>
        <Tag>Hobby</Tag>
        <Tag>Hobby</Tag>
        <Tag>Hobby</Tag>
        <Tag>Hobby</Tag>
        <Tag>Hobby</Tag>
      </HobbiesBox>
    </StyledFriendCard>
  );
}
