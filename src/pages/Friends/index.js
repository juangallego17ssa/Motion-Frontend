import styled from "styled-components";
import Header from "../../components/Header";
import FriendsCard from "./FriendsCard";
import { useEffect,useState } from "react";
import axios from "axios";


//-------STYLE--------->
const StyledFriends = styled.div`
  padding: 120px 7vw;
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #F2F2F2;
  gap: 30px;
 
`;



//-------COMPONENT--------->
const Friends = () => {
 const [users, setUsers] = useState([]);
  console.log(localStorage.getItem('token'))
  useEffect(() => {
    const getUser = async () => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
            };
            const response = await axios.get("https://motion.propulsion-home.ch/backend/api/users/?limit=200", config);
            const results = (response.data.results)
            setUsers(results.filter((user)=>user.first_name !== ''& user.location !== ''))
            console.log(results.filter((user)=>user.first_name !== ''& user.about_me !== ''))
            // setUsers(response.data.results);
            // console.log(users)
        } catch (error) {
            console.log(error);
        }
    }
    getUser();
}, []);

  return (
    <>
      <Header />
    <StyledFriends>
      
        {users.map(user => <FriendsCard key={user.id} user={user}/>)}
  
    </StyledFriends>
    </>
  )
}

export default Friends;



