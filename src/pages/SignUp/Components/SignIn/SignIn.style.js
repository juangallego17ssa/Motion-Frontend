import styled from "styled-components"


const DivStyled = styled.div`

    width: 60%;
    height: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;

    .homepage-header {
        padding: 40px 40px 0 40px;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;

        @media (min-width: 0px) and (max-width: 700px) {
            justify-content: space-between;
            align-items: flex-start;
            padding: 30px;
        }

        .logo-container {
            display: none;

            @media (min-width: 0px) and (max-width: 700px) {
                display: flex;
                flex-direction: row;
                align-items: center;
            }

            .img {
                width: 40px;
                padding-right: 8px;
            }

            .motion {
                background: linear-gradient(132.96deg, #C468FF 3.32%, #6E91F6 100%);
                -webkit-text-fill-color: transparent;
                /* -webkit-background-clip: text; */
                font-size: 35px;
                letter-spacing: 0.75px;
                font-weight: 500;
                padding-left: 8px;

                @media (max-width: 400px) {
                    display: none;
                }
            }
        }


        .sign-up-container {
            display: flex;
            align-items: center;
            font-size: 14px;
            color: black;

            @media (min-width: 0px) and (max-width: 700px) {
                flex-direction: column;
                align-items: flex-end;
                flex-wrap: wrap;
            }

            button {
                border: 1px solid rgba(0, 0, 0, 0.2);
                background-color: white;
                border-radius: 50px;
                padding: 14px 38px;
                margin-left: 18px;
                font-size: 10px;
                text-align: center;
                letter-spacing: 1px;
                text-transform: uppercase;

                @media (min-width: 0px) and (max-width: 700px) {
                    padding: 10px 20px;
                    margin-top: 5px;
                }
            }
        }

    }
    
    .form {
        margin: 126px auto;
        padding: 0 26px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    
        @media (min-width: 0px) and (max-width: 700px) {
            margin: auto;
            padding: 25px;
        }
    
        .form-inputs {
            display: flex;
            flex-direction: column;
            align-items: center;
    
            .form-title {
                font-weight: 500;
                font-size: 40px;
            
                @media (min-width: 0px) and (max-width: 700px) {
                    font-size: 30px;
                }
            }
    
            .input-password {
                margin-bottom: 170px;
            
                @media (min-width: 0px) and (max-width: 700px) {
                    margin-bottom: 80px;
                }
            }
    
            .input-email,
            .input-password {
                width: 288px;
                height: 42px;
                margin-top: 53px;
                padding: 0px 0px 16px;
                border-bottom: 1px solid rgba(0, 0, 0, 0.17);
                display: flex;
                flex-direction: row;
        
                @media (max-width: 400px) {
                    width: 220px;
                }
        
                ::placeholder {
                    color: black;
                }
        
                input {
                    border: none;
                    margin-left: 24px;
                    width: 100%;
                }
        
                input:focus {
                    outline: none;
                }
            }
        }
    
        .form-btn {
            padding: 23px 120px;
            background: linear-gradient(132.96deg, #C468FF 3.32%, #6E91F6 100%);
            border: transparent;
            border-radius: 30px;
            font-size: 12px;
            text-align: center;
            letter-spacing: 1px;
            text-transform: uppercase;
            color: #FFFFFF;
        
            @media (min-width: 0px) and (max-width: 700px) {
                padding: 20px 100px;
            }
        }
    
        .step-container {
            padding: 25px;
            display: flex;
            flex-direction: row;
            display: none;
    
            .step {
                width: 8px;
                height: 8px;
                border: 1px solid black;
                border-radius: 100%;
                margin: 8px;
            }
        }
    }
    
    .footer-right {
        display: none;
        
        @media (min-width: 0px) and (max-width: 700px) {
            background-color: #9b7dfb;
            padding: 5px 20px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            color: white;
        }
        
        img {
            width: 20px;
            margin: 10px;
        }
    }


`


export default DivStyled