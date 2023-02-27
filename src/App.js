import './App.css';
import { Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Posts from './pages/Posts';
import Profile from './pages/Profile';
import Friends from './pages/Friends';

import RouteProtected from './components/RouteProtected/RouteProtected';


function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/posts' element={<RouteProtected route={<Posts />} />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/friends' element={<Friends />} />
      </Routes>
    </div>
  );
}

export default App;
