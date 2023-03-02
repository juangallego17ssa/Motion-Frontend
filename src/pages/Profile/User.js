import { Avatar, Button, Location, Name, NavLinkItem, Number, Tag, TagContainer, Text, TextAbout, UserAbout, UserContactDetails, UserContainer, UserDetails, UserEmail, UserInfo, UserInfoLeft, UserInfoRight, UserLeftContainer, UserNumbers, UserPhone, UserRightContainer } from "./User.styles";

const User = ({ updateCurrentView, userData }) => {
  const handleEditClick = () => {
    updateCurrentView('edit');
  }

  return (
    <UserContainer>
      <UserLeftContainer>
        <UserDetails>
          {
            userData.avatar
              ?
              <Avatar avatarURL={userData.avatar} />
              :
              <Avatar>{userData.first_name?.charAt(0)}</Avatar>
          }
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
              {userData.things_user_likes
                ? userData.things_user_likes.map((thing, idx) => {
                  return <Tag key={idx}>{thing}</Tag>
                })
                : null
              }
            </TagContainer>
          </UserInfoRight>
        </UserInfo>
        <UserNumbers>
          <NavLinkItem to="posts">
            <Number>{userData.amount_of_posts}</Number>
            <p>Posts</p>
          </NavLinkItem>
          <NavLinkItem to="likes">
            <Number>{userData.amount_of_likes}</Number>
            <p>Likes</p>
          </NavLinkItem>
          <NavLinkItem to="friends">
            <Number>{userData.amount_of_friends}</Number>
            <p>Friends</p>
          </NavLinkItem>
          <NavLinkItem to="followers">
            <Number>{userData.amount_of_followers}</Number>
            <p>Followers</p>
          </NavLinkItem>
          <NavLinkItem to="following">
            <Number>{userData.amount_following}</Number>
            <p>Following</p>
          </NavLinkItem>
        </UserNumbers>
      </UserRightContainer>
    </UserContainer>
  );
}

export default User;