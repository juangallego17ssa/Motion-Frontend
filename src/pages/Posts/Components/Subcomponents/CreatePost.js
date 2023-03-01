import styled from "styled-components"
import jennifer from '../../../../assets/images/users/jennifer.png'
import sendButton from '../../../../assets/images/send_button.png'
import { useState } from "react"


const CreatePostStyled = styled.div`

    background-color: white;
    margin: 30px;
    /* width: 20%;
    min-width: 560px; */
    width: 560px;
    border-radius: 3px;
    height: 120px;

    .createPostElementContainer {
        margin: 30px;
        display: flex;
        justify-content:space-between;
        align-items: center;

        .createPostElementLeft{
            display: flex;


            img{
                height: 60px;
                width: 60px;
            }

            .createPostInput{
                margin-left: 25px;
                border: none;
                width: 220px;
                font-size: 16px;
                color: #7d7d7d;
                display:flex;
                align-items:center;
                justify-content: center;
                cursor: pointer;
            }



        }

        .createPostElementRight{
            height: 60px;
            width: 60px;
            background: linear-gradient(132.96deg, #C468FF 3.32%, #6E91F6 100%);
            border-radius: 30px;
            display:flex;
            align-items:center;
            justify-content: center;
        }


    }

    .darkBackground{
        background-color: rgba(0,0,0,0.8);
        height: 100vh;
        width: 100vw;
        position: absolute;
        top: -162px;
        left: -0px;
        display:${props=>props.showCreatePost?"flex":"none"};
    }


    .createPostElement{
        position:relative;
        display:${props=>props.showCreatePost?"flex":"none"};
        
        background-color: white;
        /* margin: 30px; */
        top:-120px;
        left:0;
        /* width: 20%;
        min-width: 560px; */
        width: 560px;
        border-radius: 3px;
        min-height: 120px;

        .createPostElementContainer {
            margin: 30px;
            width:500px;
            display: flex;
            justify-content:space-between;
            align-items: center;

            .createPostElementLeft{
                display: flex;


                img{
                    height: 60px;
                    width: 60px;
                }

                .createPostInput{
                    margin-left: 25px;
                    border: none;
                    width: 220px;
                    font-size: 16px;
                    color: #7d7d7d;
                    display:flex;
                    align-items:center;
                    justify-content: center;
                    cursor: pointer;
                }

                .createPostInput:focus{
                    color:black;
                    background-color: white;
                    border:none;

                }



            }

            .createPostElementRight{
                height: 60px;
                width: 60px;
                background: linear-gradient(132.96deg, #C468FF 3.32%, #6E91F6 100%);
                border-radius: 30px;
                display:flex;
                align-items:center;
                justify-content: center;
            }
        }
    }


`

const CreatePost = (props) => {



    const [showCreatePost, setShowCreatePost] = useState(false)

    const handleCreatePost = () =>{
        setShowCreatePost(true)
          console.log(showCreatePost)
    }

    const handleHideCreatePost = (event) => {
        return (event.target.className==="darkBackground")? setShowCreatePost(false) : ""
    }


return(
    <>
    <CreatePostStyled showCreatePost={showCreatePost}>
        
        <div className="createPostElementContainer">
            <div className="createPostElementLeft">
                <img src={jennifer} alt="user-avatar"/>
                <span className="createPostInput" onClick={handleCreatePost}>What’s on your mind, Jennifer?</span> 
            </div>
            <div className="createPostElementRight">
                <img src={sendButton} alt="send_button" />
            </div>
        </div>
        
        <div className="darkBackground" onClick={(event) => handleHideCreatePost(event)}></div>
        
        <div className="createPostElement">
            <div className="createPostElementContainer">
                <div className="createPostElementLeft">
                    <img src={jennifer} alt="user-avatar"/>
                    <input type="text" className="createPostInput" placeholder="What’s on your mind, Jennifer?" /> 
                </div>
                <div className="createPostElementRight">
                    <img src={sendButton} alt="send_button" />
                </div>
            </div>
        </div>

    </CreatePostStyled>
    </>
)

}

export default CreatePost
