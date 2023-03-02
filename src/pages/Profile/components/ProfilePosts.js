import styled from "styled-components";

const Container = styled.div`
    height: 200px;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.05);
    background-color: white;
`;

const ProfilePosts = () => {
  return (
    <Container>
      Profile Posts
    </Container>
  )
}

export default ProfilePosts;