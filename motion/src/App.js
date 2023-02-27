import './App.css';

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Header from './react/Header/Header';
import RouteProtected from './react/RouteProtected/RouteProtected';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cart' element={<RouteProtected route={<Cart/>}/>}/>
      </Routes>
    </div>
  );
}

export default App;
