import "./App.css";

import { Routes, Route } from "react-router-dom";
import Root from "./pages/SignUp";
import Home from "./pages/SignUp/Components/Home/Home";
import SignIn from "./pages/SignUp/Components/SignIn/SignIn";
import SignUp from "./pages/SignUp/Components/SignUp/SignUp";
import Success from "./pages/SignUp/Components/Success/Success";
import Validation from "./pages/SignUp/Components/Validation/Validation";
import Posts from "./pages/Posts";
import Profile from "./pages/SignUp";
import Friends from "./pages/Friends";
import Header from "./components/Header";
import RouteProtected from "./components/RouteProtected/RouteProtected";

function App() {
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
        <Route path="/posts" element={<RouteProtected route={<Posts />} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/friends" element={<Friends />} />
      </Routes>
    </div>
  );
}

export default App;
