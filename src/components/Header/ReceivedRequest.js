import React from 'react';
import styled from 'styled-components';

//  >>>>>> icon <<<<<<<
import { RxCross2,RxCheck } from 'react-icons/rx'

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
            margin-left:25px ;
            /* scale: calc(1); */
            opacity: 0.5;
            :hover{
                opacity: 1;
            }
        }
    }
  
`;



//------------- Component -------------// 
export default function ReceivedRequest() {
  return (
             <Friend>
                 <img src={jennifer}/>
                 <div className="friend-info">
                     <p>first_name last_name</p>
                     <p>location</p>
                 </div>
                 <div className="button-container">
                     <RxCheck className="icon"/>
                     <RxCross2 className="icon"/>
                 </div>
             </Friend>   
  );
}
