import React from 'react';
import styled from 'styled-components';
import UserAvatar from '../UserAvatar';

//  >>>>>> icon <<<<<<<
import { RxCross2,RxCheck } from 'react-icons/rx'






//------------- Styling -------------// 

const Friend = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    align-items: center;
   
    .button-container{
        display: flex;
        justify-content: flex-end;
        .icon{
            background-color:#F2F2F2 ;
            padding: 3px;
            border-radius: 30px;
            margin-left:25px ;
            /* scale: calc(1); */
            opacity: 0.5;
            :hover{
                opacity: 1;
            }
        }
    }
  
`;
const UserName = styled.p`
    font-weight: 500;
    position: absolute;
    top: 10%;

`
const UserLocation = styled.p`
    position: absolute;
    top: 50%;
    opacity: 0.5;
`


//------------- Component -------------// 
export default function ReceivedRequest(props) {
    // console.log(props)
  return (
             <Friend>
                <UserAvatar userData={props} isHeaderAvatar isSmallAvatar={true} />
                 <div className="friend-info">
                     <UserName>{props.first_name} {props.last_name}</UserName>
                     <UserLocation>{props.location}</UserLocation>
                 </div>
                 <div className="button-container">
                     <RxCheck className="icon"/>
                     <RxCross2 className="icon"/>
                 </div>
             </Friend>   
  );
}
