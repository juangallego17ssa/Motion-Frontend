import { MainPost } from "../Subcomponents/MainPost.style";
import MyPost from "../Subcomponents/MyPost";
import { v4 as uuid } from 'uuid';
import { useEffect, useState } from "react";
import motionAPI from "../../../../axios/motionAPI";
import styled from "styled-components";





const PostsFollow = () => {

    const [postArray, setPostArray] = useState([])
    const token = localStorage.getItem("token")


    //// on load, get postArray
    useEffect( () => {
        getArray()
    }, [])


    //// get postArray
    const getArray = async () => {
        
        const myConfig = {
            headers: {
                "Authorization": `Bearer ${token}`
            },
            method: "get",
        };

        // send axios request
        try {             
            const response = (await motionAPI("social/posts/following/", myConfig))
            setPostArray(response.data.results)
        }
        catch(exception) {
            console.log(exception)
        }    
    }


    return(
    <MainPost>
    <div className="posts">
        <MyPost className="postNew post" post="MyPost in Follow"></MyPost>
        { postArray.length ? postArray.map( (post) => <MyPost key={uuid()} post={post} />) : "" }
    </div>
    </MainPost>
    )
}

export default PostsFollow