import { useSelector } from "react-redux";
import styled from "styled-components";
import userPic from '../../assets/images/users/jennifer.png'

//--------Style---------
const UserContainer = styled.div`
  background-color: #FFFFFF;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 34px;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.05);
`;

const UserLeftContainer = styled.div`
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

const Avatar = styled.div`
  width: 100px;
  height: 100px;
  margin-bottom: 12px;
  border: 1px solid grey;
  display: flex;
  justify-content: center;
  align-items: center;
  display: inline-block; position: relative; width: 100px; height: 100px; overflow: hidden; border-radius: 50%;

  img {
    width: auto; height: 100%; margin-left: -12px;
  }
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

  &:hover {
    cursor: pointer;
    background-color: grey;
}
`;

const UserRightContainer = styled.div`
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
  min-height: 30px;
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

const TagContainer = styled.div`
  padding-top: 22px;
`;

const Tag = styled.p`
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

//--------User Component---------
const User = ({ updateCurrentView, userData }) => {

  const handleEditClick = () => {
    updateCurrentView('edit');
  }

  return (
    <UserContainer>
      <UserLeftContainer>
        <UserDetails>
          <Avatar>
            <img src={userData.avatar}></img>
          </Avatar>
          <Name>{userData.first_name} {userData.last_name}</Name>
          <Location>{userData.location}</Location>
        </UserDetails>
        <Button onClick={handleEditClick}>Edit profile</Button>
      </UserLeftContainer>
      <UserRightContainer>
        <UserInfo>
          <UserInfoLeft>
            <UserAbout>
              <Text>About</Text>
              <TextAbout>{userData.about_me}</TextAbout>
            </UserAbout>
            <UserContactDetails>
              <UserEmail>
                <Text>Email</Text>
                <Text>{userData.email}</Text>
              </UserEmail>
              <UserPhone>
                <Text>Phone</Text>
                <Text>{userData.phone_number}</Text>
              </UserPhone>
            </UserContactDetails>
          </UserInfoLeft>
          <UserInfoRight>
            <Text>Things I like</Text>
            <TagContainer>
              {
                userData.things_user_likes ?
                  (userData.things_user_likes).map((thing, idx) => {
                    return <Tag key={idx}>{thing}</Tag>
                  })
                  : null
              }
            </TagContainer>
          </UserInfoRight>
        </UserInfo>
        <UserNumbers>
          <div>
            <Number>{userData.amount_of_posts}</Number>
            <p>Posts</p>
          </div>
          <div>
            <Number>{userData.amount_of_likes}</Number>
            <p>Likes</p>
          </div>
          <div>
            <Number>{userData.amount_of_friends}</Number>
            <p>Friends</p>
          </div>
          <div>
            <Number>{userData.amount_of_followers}</Number>
            <p>Followers</p>
          </div>
          <div>
            <Number>{userData.amount_following}</Number>
            <p>Following</p>
          </div>
        </UserNumbers>
      </UserRightContainer>
    </UserContainer>
  );
}

export default User;