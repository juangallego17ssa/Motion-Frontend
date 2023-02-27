import Header from "../../components/Header";

import styled from "styled-components";
import userPic from '../../assets/images/users/jennifer.png'

//styles
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F2F2F2;
`;

const Background = styled.div`
    background-color: antiquewhite;
    width: 100%;
    height: 240px;
`;

const Main = styled.div`
    width: 1152px;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
`;

const UserContainer = styled.div`
    background-color: #FFFFFF;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 34px;
`;

const UserLeftWrapper = styled.div`
    border-right: 2px solid #f2f2f2;
    min-width: 320px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap:40px;
`;

const UserDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Image = styled.img`
    width: 95px;
    height: 95px;
    padding-bottom: 12px;
`;

const Name = styled.p`
    font-size: 24px;
    padding-bottom: 8px;
`;

const Location = styled.p`
    font-size: 14px;
`;

const Button = styled.button`
    padding: 16px 38px;
    mix-blend-mode: normal;
    border: 1px solid #f2f2f2;
    border-radius: 30px;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.07);
    background-color: white;
    color: #000000;
    text-transform: uppercase;
`;

const UserRightWrapper = styled.div`
    min-width: 832px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const UserInfo = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 40px 60px;
    display: grid;
    grid-template-columns: 3fr 2fr;
`;

const UserInfoLeft = styled.div`
    display: flex;
    flex-direction: column;
    gap: 38px;
`;

const UserAbout = styled.div`
    display: flex;
    flex-direction: column;
    gap: 11px;
`;

const TextAbout = styled.p`
    width: 320px;
    font-size: 16px;
`;

const UserContactDetails = styled.div`
    display: flex;
    flex-direction: row;
    gap: 60px;
`;

const UserEmail = styled.div`
    display: flex;
    flex-direction: column;
`;

const UserPhone = styled.div`
    display: flex;
    flex-direction: column;
`;

const UserInfoRight = styled.div`
`;

const LabelContainer = styled.div`
    padding-top: 22px;
`;

const Label = styled.p`
    width: max-content;
    text-align: center;
    padding: 9px 16px;
    background: #f2f2f2;
    mix-blend-mode: normal;
    border-radius: 18px;
    color: black;
    float: left;
    margin: 0  8px 16px 0;
`;

const UserNumbers = styled.div`
    border-top: 2px solid #f2f2f2;
    width: 100%;
    box-sizing: border-box;
    padding: 40px 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 78px;
`;

const Number = styled.p`
    font-size: 24px;
    padding-bottom: 7px;
`;

const Text = styled.p`
    font-size: 16px;
`;
//component
const Profile = () => {
    return (
        <>
            <Header />
            <Container>
                <Background> Background Image </Background>
                <Main>
                    <UserContainer>
                        <UserLeftWrapper>
                            <UserDetails>
                                <Image src={userPic}></Image>
                                <Name>Jennifer Smith</Name>
                                <Location>Zürich, Switzerland</Location>
                            </UserDetails>
                            <Button>Edit profile</Button>
                        </UserLeftWrapper>
                        <UserRightWrapper>
                            <UserInfo>
                                <UserInfoLeft>
                                    <UserAbout>
                                        <Text>About</Text>
                                        <TextAbout>Lorem ipsum dolor sit amet, vim ut quas volumus probatus, has tantas laudem iracundia et, ad per utamur ceteros apeirian</TextAbout>
                                    </UserAbout>
                                    <UserContactDetails>
                                        <UserEmail>
                                            <Text>Email</Text>
                                            <Text>jennifersmith@gmail.com</Text>
                                        </UserEmail>
                                        <UserPhone>
                                            <Text>Phone</Text>
                                            <Text>123-456-7890</Text>
                                        </UserPhone>
                                    </UserContactDetails>
                                </UserInfoLeft>
                                <UserInfoRight>
                                    <Text>Things I like</Text>
                                    <LabelContainer>
                                        <Label>Cooking</Label>
                                        <Label>Travel</Label>
                                        <Label>Reading</Label>
                                        <Label>Swimming</Label>
                                        <Label>Running</Label>
                                    </LabelContainer>
                                </UserInfoRight>
                            </UserInfo>
                            <UserNumbers>
                                <div>
                                    <Number>34</Number>
                                    <p>Posts</p>
                                </div>
                                <div>
                                    <Number>256</Number>
                                    <p>Likes</p>
                                </div>
                                <div>
                                    <Number>98</Number>
                                    <p>Friends</p>
                                </div>
                                <div>
                                    <Number>129</Number>
                                    <p>Followers</p>
                                </div>
                                <div>
                                    <Number>154</Number>
                                    <p>Following</p>
                                </div>
                            </UserNumbers>
                        </UserRightWrapper>
                    </UserContainer>
                    <div>Profile posts</div>
                </Main>
            </Container>
        </>
    )
}

export default Profile;
