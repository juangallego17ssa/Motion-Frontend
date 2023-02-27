import { StyledHeader } from "./Header.style"
import { Link } from "react-router-dom";


const Header = () =>{





    return(
        <StyledHeader>
           <div className="leftHeader">
                <h1>T-Shirt Shop</h1>
            </div>
           <div className="rightHeader">
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/cart">Cart</Link>
            </div>


        </StyledHeader>
    )
}

export default Header;