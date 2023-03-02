import React from 'react';
import styled from 'styled-components';

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



//------------- Component -------------// 
export default function SentRequest(props) {
    console.log(props)

  return (
             <Friend>
                 <img src={props.avatar}/>
                 <div className="friend-info">
                     <p>{props.first_name} {props.last_name}</p>
                     <p>{props.location}</p>
                 </div>
                 <div className="button-container">
                     <BiTimeFive className="icon"/>
                 </div>
             </Friend>   
  );
}
