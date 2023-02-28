import { useNavigate, useParams } from "react-router-dom"
import DivStyled from "../SignIn/SignIn.style"

const Success = () => {

    const params = useParams()

    const navigate = useNavigate()

    const handleContinue = () => {
      navigate(`/home/validation/${params.email}`)
    }



    return (


        <DivStyled id="right">
        <header className="homepage-header">
          <div className="logo-container"></div>
          <div className="sign-in-container">
          </div>
        </header>
  
        <div className="form">
          <form onSubmit={(event) => event.preventDefault()}>
            <div className="form-inputs">
              <div className="form-title">Congratulations</div>
              <div className="input-email">
                <img alt="email icon" />
                <span>We’ve sent a confirmation code to your email {params.email}</span>
              </div>
            </div>
  
            <button className="form-btn" onClick={handleContinue}>
              Continue
            </button>
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


export default Success