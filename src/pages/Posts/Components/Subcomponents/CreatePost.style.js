import styled from "styled-components"

export const CreatePostStyled = styled.div`

    background-color: white;
    margin: 0px 0px 30px 30px;
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
        flex-direction:column;
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
                    margin-top: 15px;
                    border: none;
                    width: 400px;
                    height:200px;
                    font-size: 16px;
                    color: #7d7d7d;
                    display:flex;
                    align-items:center;
                    justify-content: center;
                    cursor: pointer;
                    resize:both;
                    word-break:break-word;
                    white-space: pre-wrap;
                    resize:none;
                    font:inherit;
                    outline:none

                }

                .createPostInput:focus{
                        color:black;
                        background-color: white;
                        border:none;
                        outline:none

                    }

            }
        }
            .attachAndSend{

                display:flex;
                flex-direction:row;
                /* height:100px; */
                width:560px;
                background-color:white-space;
                border-top: 1px solid rgb(236,236,236);
                justify-content: space-between;


                .createPostAttachIcons{
                    display:flex;
                    justify-content:space-between;
                    align-items:center;
                    width: 60px;
                    margin: 30px;

                    img{
                        height:20px;
                        width:20px;
                    }
                }

                .createPostElementRight{
                    margin:30px;
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

