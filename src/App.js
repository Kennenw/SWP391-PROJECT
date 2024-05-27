import React , {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Register";
// import Profile from "./Profile";
import Sidebar from "./SideBar";
import Dashboard from "./Dashboard";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import HomeStaff from "./HomeStaff";
import BookInStaff from "./BookInfStaff";
import { USERS } from "./data";
import Users from "./User";
import Court from "./Court";
import About from "./AboutUS";
import './App.css';
import Role from "./Role";
import './StyleHome.css';
import HomeManager from "./HomeManager";
import { UserProvider } from './UserContext';

const App = () => {
  const [activeLink, setActiveLink] = useState("");

  return (
    <UserProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Header /><Home /><Footer /></>} />
        <Route path="Login" element={<Login users={USERS} />}></Route>
        <Route path="Dashboard" element={<><Sidebar activeLink={activeLink} setActiveLink={setActiveLink} /><Dashboard setActiveLink={setActiveLink} /></>} />
        <Route path="User" element={<><Sidebar activeLink={activeLink} setActiveLink={setActiveLink} /><Users setActiveLink={setActiveLink} /></>} />
        <Route path="Role" element={<><Sidebar activeLink={activeLink} setActiveLink={setActiveLink} /><Role setActiveLink={setActiveLink} /></>} />
        <Route path="Court" element={<><Sidebar activeLink={activeLink} setActiveLink={setActiveLink} /><Court setActiveLink={setActiveLink} /></>} />
        <Route path="Home" element={<><Header /><Home /><Footer /></>} />
        <Route path="AboutUS" element={<><Header /><About /><Footer /></>} />
        <Route path="HomeStaff" element={<><Header /><HomeStaff /><Footer /></>} />
        <Route path="BookInStaff" element={<><Header /><BookInStaff /><Footer /></>} />
        <Route path="HomeManager" element={<><Header /><HomeManager /><Footer /></>} />
        <Route path="Register" element={<Signup />}></Route>
      </Routes>
    </BrowserRouter>
    </UserProvider>
  );
};

export default App;
