import MyPost from "./MyPost"
import { v4 as uuid } from "uuid";
import CreatePost from "./CreatePost";


const Posts = (props)=>{

    const postArray = props.postArray
    


    return (
        <div className="posts">
            <CreatePost className="postNew post" filter={props.filter} />
            {postArray.length ? postArray.map((post) => <MyPost key={uuid()} post={post} />) : ""}
        </div>
    )
}


export default Posts