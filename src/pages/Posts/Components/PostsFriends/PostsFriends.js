import { MainPost } from "../Subcomponents/MainPost.style";
import MyPost from "../Subcomponents/MyPost";
import { v4 as uuid } from 'uuid';
import { useEffect, useState } from "react";
import motionAPI from "../../../../axios/motionAPI";



const PostsFriends = () => {


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
            const response = (await motionAPI("social/posts/friends/", myConfig))
            setPostArray(response.data.results)
        }
        catch(exception) {
            console.log(exception)
        }    
    }


    return(
    <MainPost>
    <div className="posts">
        <div className="postNew post">MyPost in Friends</div>
        { postArray.length ? postArray.map( (post) => <MyPost key={uuid()} post={post} />) : "" }
    </div>
    </MainPost>
    )
}

export default PostsFriends