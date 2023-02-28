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
  height: 100%;
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



//-------hard code user data ---------> fetch from

// const users =[
//   {
//   "id": 833,
//   "email": "lap77082@cuoly.com",
//   "first_name": "bolor",
//   "last_name": "jdjdj",
//   "username": "gianbolor",
//   "job": "",
//   "avatar": null,
//   "banner": null,
//   "location": "",
//   "phone_number": "",
//   "about_me": "",
//   "things_user_likes": [],
//   "logged_in_user_is_following": false,
//   "logged_in_user_is_friends": false,
//   "logged_in_user_is_rejected": false,
//   "logged_in_user_received_fr": false,
//   "logged_in_user_sent_fr": false,
//   "amount_of_posts": 0,
//   "amount_of_likes": 0,
//   "amount_of_friends": 1,
//   "amount_of_followers": 4,
//   "amount_following": 0
// },
// {
//   "id": 948,
//   "email": "hfggjrvsnpajhkikaw@wqcefp.com",
//   "first_name": "",
//   "last_name": "",
//   "username": "hfggjrvsnpajhkikaw@wqcefp.com",
//   "job": "",
//   "avatar": null,
//   "banner": null,
//   "location": "",
//   "phone_number": "",
//   "about_me": "",
//   "things_user_likes": [],
//   "logged_in_user_is_following": false,
//   "logged_in_user_is_friends": false,
//   "logged_in_user_is_rejected": false,
//   "logged_in_user_received_fr": false,
//   "logged_in_user_sent_fr": false,
//   "amount_of_posts": 0,
//   "amount_of_likes": 0,
//   "amount_of_friends": 1,
//   "amount_of_followers": 0,
//   "amount_following": 0
// },
// {
//   "id": 809,
//   "email": "juans@propulsionacademy.com",
//   "first_name": "Juan Miguel",
//   "last_name": "Sánchez Arce",
//   "username": "JuanMiguelSanchezArce",
//   "job": "",
//   "avatar": "https://motion.propulsion-home.ch/media-files/JMSA_WhiteBackground.png",
//   "banner": "https://motion.propulsion-home.ch/media-files/Groot_Revenge.jpg",
//   "location": "",
//   "phone_number": "",
//   "about_me": "",
//   "things_user_likes": [],
//   "logged_in_user_is_following": false,
//   "logged_in_user_is_friends": false,
//   "logged_in_user_is_rejected": false,
//   "logged_in_user_received_fr": false,
//   "logged_in_user_sent_fr": false,
//   "amount_of_posts": 0,
//   "amount_of_likes": 0,
//   "amount_of_friends": 2,
//   "amount_of_followers": 8,
//   "amount_following": 0
// }, {
//   "id": 5,
//   "email": "guillaumer@propulsionacademy.com",
//   "first_name": "Billy",
//   "last_name": "Bob",
//   "username": "Billy",
//   "job": "Coffee drinker",
//   "avatar": "https://motion.propulsion-home.ch/media-files/schrimp_man_TKoKgA3.jpg",
//   "banner": null,
//   "location": "Zürich",
//   "phone_number": "",
//   "about_me": "I like to drink coffee while playing guitar and shooting some free throws",
//   "things_user_likes": [
//       "BBQ",
//       "Basket",
//       "Guitar"
//   ],
//   "logged_in_user_is_following": false,
//   "logged_in_user_is_friends": false,
//   "logged_in_user_is_rejected": false,
//   "logged_in_user_received_fr": false,
//   "logged_in_user_sent_fr": false,
//   "amount_of_posts": 0,
//   "amount_of_likes": 0,
//   "amount_of_friends": 2,
//   "amount_of_followers": 14,
//   "amount_following": 1
// },]
