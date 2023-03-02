import React from 'react';
import styled from 'styled-components';
import UserAvatar from '../UserAvatar';

//  >>>>>> icon <<<<<<<
import { BiTimeFive} from 'react-icons/bi'

import jennifer from '../../assets/images/users/jennifer.png'




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
            opacity: 0.5;
            :hover{
                opacity: 1;
            }
        }
    } 
`;
const UserName = styled.p`

`
const UserLocation = styled.p`
    opacity: 0.5;
`



//------------- Component -------------// 
export default function SentRequest(props) {
    console.log(props)

  return (
             <Friend>
                <UserAvatar userData={props} isHeaderAvatar />
                 {/* <img src={props.avatar}/> */}
                 <div className="friend-info">
                     <UserName>{props.first_name} {props.last_name}</UserName>
                     <UserLocation>{props.location}</UserLocation>
                 </div>
                 <div className="button-container">
                     <BiTimeFive className="icon"/>
                 </div>
             </Friend>   
  );
}
