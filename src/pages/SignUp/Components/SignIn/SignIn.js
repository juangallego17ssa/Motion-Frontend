
// import the parent styled component
import DivStyled from "./SignIn.style"

// import the axios instance to fetch the token
import motionAPI from "../../../../axios/motionAPI"


// import the images used
import logoIcon from "../../../../assets/images/logo.png"
import avatarIcon from "../../../../assets/svgs/avatar.svg"
import passwordIcon from "../../../../assets/svgs/password.svg"


// import useState to create controlled form
import { useState } from "react"

// import useNavigate to handle the button signUp
import { Navigate, useNavigate } from "react-router-dom"


const SignIn = () => {


    //// set state for token
    // const [token,setToken] = useState("")


    //// controlled form
    // email input
    const [email, setEmail] = useState("");

    const handleEmailChange = event => {
         setEmail(event.target.value);
    };

    // password
    const [password, setPassword] = useState("");

    const handlePasswordChange = event => {
        setPassword(event.target.value);
    };

    //// handle the button sign up
    const navigate = useNavigate()
    const handleSignUp = () => {
        navigate("/home/signup")
    }

    //// handle the button sign in
    const handleSingIn = async() => {

        // Prepare the request for login in and getting the token
        const myBody = JSON.stringify({
            // email: "rijipak673@v2ssr.com",
            // password: "password",
            email: email,
            password: password,
        });
        
        const myConfig = {
            method: "post",
            data: myBody,
        };
                
        // Fetch the data and save the token in the local storage
        try {
            const response = (await motionAPI("token/", myConfig)).data;
            const token = response.access;
            const user = response.user
            localStorage.setItem("token", token);
            localStorage.setItem("user", user);
            // setToken(token)
            navigate("/")
            
        } catch (exception) {
            console.log(exception);
        }
    }

    // if (token) { return(<Navigate to="/"/>)}

    return(

        <DivStyled id="right">


            {/* {token?<Navigate to="/"/>:""} */}
                
            <header className="homepage-header">
                <div className="logo-container">
                    <img src={logoIcon} alt="Motion logo gradient" />
                    <div className="motion">Motion</div>
                </div>
                <div className="sign-up-container">
                    <p> Don't have an account? </p>
                    <button onClick={handleSignUp}>Sign up</button>
                </div>
            </header>


            <div className="form">
                
                <form onSubmit={(event)=>event.preventDefault()}>

                    <div className="form-inputs">
                        <div className="form-title">Sign In</div>
                        <div className="input-email">
                            <img src={avatarIcon} alt="avatar icon" />
                            <input type="text" placeholder="Email" value={email} onChange={handleEmailChange}/>
                        </div>

                        <div className="input-password">
                            <img src={passwordIcon} alt="Lock icon" />
                            <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange}/>
                        </div>

                    </div>

                    <button className="form-btn" onClick={handleSingIn}>Sign in</button>
                
                </form>
                
                <div className="step-container">
                    <div className="step"></div>
                    <div className="step"></div>
                    <div className="step"></div>
                </div>
            </div>
            
      </DivStyled>
    )
}

export default SignIn