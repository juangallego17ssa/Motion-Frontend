import styled from "styled-components";

const Avatar = styled.div`
  width: ${props => props.isSmallAvatar ? "40px" : "100px"};
  height: ${props => props.isSmallAvatar ? "40px" : "100px"};
  font-size: ${props => props.isSmallAvatar ? "20px" : "40px"};
  margin-bottom: 12px;
  border: 1px solid grey;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-image: url(${props => props.avatarURL});
  background-size: 130%;
  background-position: center;
`;

const UserAvatar = ({ userData, isSmallAvatar }) => {
  return (
    userData
      ?
      (
        userData.avatar
          ?
          <Avatar avatarURL={userData.avatar} isSmallAvatar={isSmallAvatar} />
          :
          <Avatar isSmallAvatar={isSmallAvatar} >{userData.first_name?.charAt(0).toUpperCase()}</Avatar>
      )
      :
      null
  )
}

export default UserAvatar;