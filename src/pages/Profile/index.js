import styled from "styled-components";
import profileBackground from '../../assets/images/profile-background-img.jpg'
import { updateUserData } from "../../redux/slices/user";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Header from "../../components/Header";
import User from "./User";
import UserEdit from "./UserEdit";

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
    background-image: url(${props => props.userDataBanner || profileBackground});
    background-position: center;
    width: 100%;
    height: 240px;
`;

const Main = styled.div`
    width: 1152px;
    margin-top: 200px;
    margin-bottom: 100px;
    border-radius: 4px;
    position: absolute;
`;

const ProfilePosts = styled.div`
    height: 200px;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.05);
    background-color: white;
`;

//--------Profile Page---------
const Profile = () => {
    const dispatch = useDispatch();

    //currentView: 'user', 'edit'
    const [currentView, setCurrentView] = useState('user');

    const updateCurrentView = (view) => {
        setCurrentView(view);
    }

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

    const userData = useSelector(state => state.user.userData);

    return (
        userData
            ?
            <>
                <Header />
                <Container>
                    <Background userDataBanner={userData.banner} />
                    <Main>
                        {
                            currentView === 'user'
                                ?
                                <>
                                    <User
                                        userData={userData}
                                        updateCurrentView={updateCurrentView}
                                    />
                                    <ProfilePosts>Profile posts</ProfilePosts>
                                </>
                                :
                                <UserEdit userData={userData} />
                        }
                    </Main>
                </Container>
            </>
            :
            null
    );
}

export default Profile;
