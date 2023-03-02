import { useEffect, useState } from "react";
import styled from "styled-components";
import motionAPI from '../../../axios/motionAPI'
import FriendsCard from "../../Friends/FriendsCard";

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 33px;
`;

const ProfilePosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      return;
    }

    const getPosts = async () => {
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        };

        const response = await motionAPI.get("social/posts/me", config);
        setPosts(response.data.results);
      } catch (error) {
        console.log(error);
      }
    }

    getPosts();
  }, []);

  return (
    <Container>
      {
        posts
          ?
          posts.map((post) => {
            console.log(post)
            return <div>{post.content}</div>
          })
          :
          null
      }
    </Container>
  )
}

export default ProfilePosts;