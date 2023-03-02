import MyPost from "./MyPost"
import { v4 as uuid } from "uuid";
import CreatePost from "./CreatePost";
import { useState } from "react";


const Posts = (props)=>{


    const myPostArray = props.myPostArray
    const postArray = props.postArray
    console.log(postArray)


    return (
        <div className="posts">
            <div className="left">
            <CreatePost className="postNew post" filter={props.filter} />
            {myPostArray.length ? myPostArray.map((post) => <MyPost key={uuid()} post={post} isMine={true}/>) : ""}
            </div>
            <div className="right">
            {postArray.length ? postArray.map((post) => <MyPost key={uuid()} post={post} isMine={false}/>) : ""}
            </div>
        </div>
    )
}


export default Posts