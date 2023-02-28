import styled from "styled-components";
import Header from "../../components/Header";
import FriendsCard from "./FriendsCard";


//-------STYLE--------->
const StyledFriends = styled.div`
  border: 1px solid red;
  display: block;
  flex-direction: column;
  box-sizing: border-box;
  margin-top: 80px;
  height: 100vh;
  background-color: #F2F2F2;
 
`;




const Friends = () => {

  return (
    <>
      <Header />
    <StyledFriends>
      <div>
        <p>Friends</p>
        <FriendsCard/>
      </div>
    </StyledFriends>
    </>
  )
}

export default Friends;
