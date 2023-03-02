import { useEffect, useState } from "react";
import styled from "styled-components";
import motionAPI from '../../../axios/motionAPI'
import FriendsCard from "../../Friends/FriendsCard";

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 33px;
`;

const ProfileLikes = () => {
  const [likedPosts, setLikedPosts] = useState([]);

  useEffect(() => {
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
  }, []);

  return (
    <Container>
      {
        likedPosts
          ?
          likedPosts.map((user) => {
            return <FriendsCard user={user} key={user.id} />
          })
          :
          null
      }
    </Container>
  )
}

export default ProfileLikes;