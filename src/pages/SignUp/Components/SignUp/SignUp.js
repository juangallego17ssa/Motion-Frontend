// import the parent styled component
import DivStyled from "../SignIn/SignIn.style";

// import the axios instance to fetch the token
import motionAPI from "../../../../axios/motionAPI";

// import the images used
// import emailIcon from "../../../assets/svgs/email.svg"

// import useState to create controlled form
import { useState } from "react";

// import useNavigate to handle the button signUp
import { Navigate, useNavigate, useOutletContext } from "react-router-dom";

const SignUp = () => {
  //// controlled form
  // email input
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  // const [success, setSuccess] = useState("")

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };



  const setEmailHome = useOutletContext()[1];


  //// handle the button sign up
  const navigate = useNavigate();
  const handleSignIn = () => {
    navigate("/");
  };

  //// handle the button sign in
  const handleSingUp = async () => {
    // Prepare the request for login in and getting the token
    const myBody = JSON.stringify({
      email: email,
    });

    const myConfig = {
      method: "post",
      data: myBody,
    };

    // Fetch the data and save the token in the local storage
    try {
      setError("");
      const response = await motionAPI("registration/", myConfig);
      if (response.status === 200) {
        // setSuccess(email)
        setEmailHome(email)
        navigate("/home/success/")
      }
    } catch (exception) {
      if (exception.response.data.email[0] === "This email is taken") {
        setError("This email is taken!");
      } else {
        setError("Error!");
      }
    }
  };

  // if (success) { 
  //   return(<Navigate to={`/home/success/`} />)
    // return(<Navigate to={`/home/success/${success}`} />)
    // navigation.navigate('Home')
  // }

  // const test = () => {
  //   setSuccess(email)
  // }

  return (
    <DivStyled id="right">

      {/* <button onClick={test}></button> */}

      <header className="homepage-header">
        <div className="logo-container"></div>
        <div className="sign-in-container">
          <p> Already have an account? </p>
          <button onClick={handleSignIn}>Sign in</button>
        </div>
      </header>

      <div className="form">
        <form onSubmit={(event) => event.preventDefault()}>
          <div className="form-inputs">
            <div className="form-title">Sign Up</div>
            <div className="input-email">
              {/* <img src={emailIcon} alt="email icon" /> */}
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
          </div>

          <button className="form-btn" onClick={handleSingUp}>
            Sign up
          </button>
        </form>
        <span>{error}</span>

        <div className="step-container">
          <div className="step"></div>
          <div className="step"></div>
          <div className="step"></div>
        </div>
      </div>
    </DivStyled>
  );
};

export default SignUp;
