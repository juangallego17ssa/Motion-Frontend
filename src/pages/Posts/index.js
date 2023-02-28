import Header from "../../components/Header";
import { MainTop } from "./Components/Subcomponents/MainTop.style";
import { NavLink, Outlet } from "react-router-dom";






const Posts = () => {






    

    return (
        <>
         <Header />
         <MainTop className="mainTop">
            <div className="navigation">
            <div className="leftNav">
                <div className="searchLogo">
                <img src="images/svg/search_icon.svg" alt="" />
                </div>
                <div className="searchText">Search posts...</div>
            </div>
            <div className="rightNav">
                <div className="liked">
                <div><NavLink to={"/posts/liked"}>Liked</NavLink></div>
                </div>
                <div className="friends">
                <div><NavLink to={"/posts/friends"}>Friends</NavLink></div>
                </div>
                <div className="follows">
                <div><NavLink to={"/posts/follow"}>Follow</NavLink></div>
                </div>
            </div>
            </div>
        </MainTop>

        <Outlet/>


        </>
    )
}

export default Posts;
