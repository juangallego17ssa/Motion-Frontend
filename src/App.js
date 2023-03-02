import "./App.css";

import { Routes, Route } from "react-router-dom";
import Root from "./pages/SignUp";
import Home from "./pages/SignUp/Components/Home/Home";
import SignIn from "./pages/SignUp/Components/SignIn/SignIn";
import SignUp from "./pages/SignUp/Components/SignUp/SignUp";
import Success from "./pages/SignUp/Components/Success/Success";
import Validation from "./pages/SignUp/Components/Validation/Validation";
import Posts from "./pages/Posts/";
import PostsFollow from "./pages/Posts/Components/PostsFollow/PostsFollow";
import PostsFriends from "./pages/Posts/Components/PostsFriends/PostsFriends";
import PostsLiked from "./pages/Posts/Components/PostsLiked/PostsLiked";
import Profile from "./pages/Profile";
import UserEdit from "./pages/Profile/UserEdit";
import ProfilePosts from './pages/Profile/components/ProfilePosts'
import ProfileLikes from './pages/Profile/components/ProfileLikes'
import ProfileFriends from './pages/Profile/components/ProfileFriends'
import ProfileFollowers from './pages/Profile/components/ProfileFollowers'
import ProfileFollowing from './pages/Profile/components/ProfileFollowing'
import Friends from "./pages/Friends";
import RouteProtected from "./components/RouteProtected/RouteProtected";
import { useDispatch } from "react-redux";
import motionAPI from "./axios/motionAPI";
import { updateUserData } from "./redux/slices/user";
import { useEffect } from "react";

function App() {
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

        const response = await motionAPI.get("users/me", config);
        dispatch(updateUserData(response.data));
      } catch (error) {
        console.log(error);
      }
    }

    getMe();
  }, []);

  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/home" element={<Home />}>
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="success/" element={<Success />} />
          <Route path="validation/" element={<Validation />} />
        </Route>
        <Route path="/posts" element={<RouteProtected route={<Posts />} />} >
          <Route path="follow" element={<PostsFollow />} />
          <Route path="friends" element={<PostsFriends />} />
          <Route path="liked" element={<PostsLiked />} />
        </Route>
        <Route path="/edit" element={<RouteProtected route={<UserEdit />} />} />
        <Route path="/profile" element={<RouteProtected route={<Profile />} />}>
          <Route path="posts" element={<ProfilePosts />} />
          <Route path="likes" element={<ProfileLikes />} />
          <Route path="friends" element={<ProfileFriends />} />
          <Route path="followers" element={<ProfileFollowers />} />
          <Route path="following" element={<ProfileFollowing />} />
        </Route>
        <Route path="/friends" element={<Friends />} />
      </Routes>
    </div>
  );
}

export default App;
