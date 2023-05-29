import { Route, Routes } from 'react-router-dom';
//Login Components
import LoginHome from './components/login/Home';
import Login from './components/login/Login';
import Register from './components/login/Register';

//Farmer Components
import FarmerHome from './components/farmer/Home';
import Sell from './components/farmer/Sell';
import FarmerProfile from './components/farmer/FarmerProfile';


//User Components
import UserHome from'./components/user/Home';
import Buy from './components/user/Buy';
import ViewProduct from './components/user/ViewProduct';
import UserProfile from './components/user/Profile';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

const App = () => {
  return (
    <div>
      <Routes>
        
        {/* login routes */}
        <Route path="/" element={<LoginHome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* farmer routes */}
        <Route path="/farmer" element={<FarmerHome />} />
        <Route path="/farmer/sell" element={<Sell />} />
        <Route path="/farmer/profile" element={<FarmerProfile />} />

        {/* user routes */}
        <Route path="/user" element={<UserHome />} />
        <Route path="/user/buy" element={<Buy />} />
        <Route path="/user/profile" element={<UserProfile />} />
          
        {/* product routes */}
        <Route path="/product/:prodID" element={<ViewProduct />} />
           
      </Routes>
    </div>
  )
}

export default App;
