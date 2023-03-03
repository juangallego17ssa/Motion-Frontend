import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import motionAPI from '../../../axios/motionAPI'
import MyPost from "../../Posts/Components/Subcomponents/MyPost";

const Container = styled.div`
    padding: 34px 0;
    max-width: 1152px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;  
    gap: 33px;
`;

const ProfileLikes = () => {
  const [likedPosts, setLikedPosts] = useState([]);

  const fetchLikes = () => {
    if (!localStorage.getItem('token')) {
      return;
    }

    const getLikedPosts = async () => {
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        };

        const response = await motionAPI.get("social/posts/likes/", config);
        setLikedPosts(response.data.results);
      } catch (error) {
        console.log(error);
      }
    }

    getLikedPosts();
  }

  useEffect(fetchLikes, []);

  return (
    <Container>
      {
        likedPosts
          ?
          likedPosts.map((post) => {
            return <MyPost postContent={post} />
          })
          :
          null
      }
    </Container>
  )
}

export default ProfileLikes;