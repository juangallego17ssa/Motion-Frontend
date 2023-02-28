import Header from "../../components/Header";
import styled from "styled-components";
import User from "./User";

//--------Style---------
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F2F2F2;
`;

const Background = styled.div`
    margin-top: 80px;
    background-color: antiquewhite;
    width: 100%;
    height: 240px;
`;

const Main = styled.div`
    width: 1152px;
    border-radius: 4px;
`;

const ProfilePosts = styled.div`
    height: 800px;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.05);
    background-color: white;
`;

//--------Profile Page---------
const Profile = () => {
    return (
        <>
            <Header />
            <Container>
                <Background> Background Image </Background>
                <Main>
                    <User></User>
                    <ProfilePosts>Profile posts</ProfilePosts>
                </Main>
            </Container>
        </>
    );
}

export default Profile;
