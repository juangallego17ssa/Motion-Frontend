import { NavLink } from "react-router-dom"
import { DivMainTop } from "./MainTop.style"


const MainTop = () => {
    return (
        <DivMainTop className="mainTop">
            <div className="navigation">
                <div className="leftNav">
                    <div className="searchLogo">
                    <img src="images/svg/search_icon.svg" alt="" />
                    </div>
                    <div className="searchText">Search posts...</div>
                </div>
                <div className="rightNav">
                    <div className="liked NavLinkContainer">
                        <NavLink className={"NavLink"} to={"/posts/liked"}>Liked</NavLink>
                    </div>
                    <div className="friends NavLinkContainer">
                        <NavLink className={"NavLink"} to={"/posts/friends"}>Friends</NavLink>
                    </div>
                    <div className="follows NavLinkContainer">
                        <NavLink className={"NavLink"} to={"/posts/follow"}>Follow</NavLink>
                    </div>
                </div>
            </div>
        </DivMainTop>
    )
}

export default MainTop