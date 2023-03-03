import { useEffect, useState } from "react";
import styled from "styled-components";
import motionAPI from '../../../axios/motionAPI'
import FriendsCard from "../../Friends/FriendsCard";

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 33px;
`;

const ProfileFollowers = () => {
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      return;
    }

    const getFollowers = async () => {
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        };

        const response = await motionAPI.get("social/followers/followers", config);
        setFollowers(response.data.results);
      } catch (error) {
        console.log(error);
      }
    }

    getFollowers();
  }, []);

  return (
    <Container>
      {
        followers
          ?
          followers.map((user) => {
            return <FriendsCard user={user} key={user.id} />
          })
          :
          null
      }
    </Container>
  )
}

export default ProfileFollowers;