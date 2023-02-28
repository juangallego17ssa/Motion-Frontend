import Header from "../../components/Header";
import styled from "styled-components";
import User from "./User";
import axios from "axios";
import { updateUserData } from "../../redux/slices/user";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import profileBackground from '../../assets/images/profile-background-img.jpg'

//--------Style---------
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F2F2F2;
`;

const Background = styled.div`
    margin-top: 80px;
    background-image: url(${profileBackground});
    background-position: center;
    width: 100%;
    height: 240px;
`;

const Main = styled.div`
    width: 1152px;
    border-radius: 4px;
    position: absolute;
    margin-top: 200px;
`;

const ProfilePosts = styled.div`
    height: 800px;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.05);
    background-color: white;
`;

//--------Profile Page---------
const Profile = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            return;
        }

        const getMe = async () => {
            try {
                const config = {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    },
                };

                const response = await axios.get("https://motion.propulsion-home.ch/backend/api/users/me", config);
                dispatch(updateUserData(response.data));
            } catch (error) {
                console.log(error);
            }
        }

        getMe();
    }, []);

    return (
        <>
            <Header />
            <Container>
                <Background />
                <Main>
                    <User></User>
                    <ProfilePosts>Profile posts</ProfilePosts>
                </Main>
            </Container>
        </>
    );
}

export default Profile;
