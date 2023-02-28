import Header from "../../components/Header";

import { Outlet } from "react-router-dom";
import MainTop from "./Components/MainTop/MainTop";






const Posts = () => {






    

    return (
        <>
         <Header />
        <MainTop/>

        <Outlet/>


        </>
    )
}

export default Posts;
