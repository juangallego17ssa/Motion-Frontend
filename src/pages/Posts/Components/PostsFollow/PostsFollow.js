import { PostsContainer } from "../Subcomponents/PostsContainer.style";
import Posts from "../Subcomponents/Posts";

import { useEffect, useState } from "react";
import motionAPI from "../../../../axios/motionAPI";

const PostsFollow = () => {
  const [postArray, setPostArray] = useState([]);
  const token = localStorage.getItem("token");

  //// on load, get postArray
  useEffect(() => {
    getArray();
  }, []);

  //// get postArray
  const getArray = async () => {
    const myConfig = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "get",
    };

    // send axios request
    try {
      const response = await motionAPI("social/posts/me/", myConfig);
      setPostArray(response.data.results);
    } catch (exception) {
      console.log(exception);
    }
  };

  return (
    <PostsContainer className="mainPostContainer">
        <Posts postArray={postArray} filter={"follow"} />
    </PostsContainer>
  );
};

export default PostsFollow;
