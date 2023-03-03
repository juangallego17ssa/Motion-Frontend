import { useEffect, useState } from "react";
import styled from "styled-components";
import motionAPI from '../../../axios/motionAPI'
import FriendsCard from "../../Friends/FriendsCard";

const Container = styled.div`
    /* display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 33px; */
    padding-top: 34px;
    max-width: 1152px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;  
    gap: 33px;

    @media (max-width: 1152px) {
    max-width: 800px;
    margin: auto;
    }
`;

const ProfileFollowing = () => {
  const [following, setFollowing] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      return;
    }

    const getFollowing = async () => {
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        };

        const response = await motionAPI.get("social/followers/following", config);
        setFollowing(response.data.results);
      } catch (error) {
        console.log(error);
      }
    }

    getFollowing();
  }, []);

  return (
    <Container>
      {
        following
          ?
          following.map((user) => {
            return <FriendsCard user={user} key={user.id} />
          })
          :
          null
      }
    </Container>
  )
}

export default ProfileFollowing;