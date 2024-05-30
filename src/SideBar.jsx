import { NavLink, Link, useNavigate } from 'react-router-dom';
import './StyleDashboard.css';
import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const Sidebar = ({ activeLink, setActiveLink }) => {
  const { user } = useContext(UserContext);
  
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const navigate = useNavigate();

  React.useEffect(() => {
    let sidebar = document.querySelector(".sidebar");
    let sidebarBtn = document.querySelector(".sidebarBtn");
    sidebarBtn.onclick = function () {
      sidebar.classList.toggle("active");
      if (sidebar.classList.contains("active")) {
        sidebarBtn.classList.replace("bx-menu", "bx-menu-alt-right");
      } else {
        sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
      }
    };
  }, []);

  const handleLogout = () => {
    navigate("/");
  };

    return (
        <div className="sidebar">
        <div className="logo-details">
          <i className="bx bxl-c-plus-plus"></i>
          <span className="logo_name">RacketUp</span>
        </div>
        <div className="logo-details">
          <img src="https://i.postimg.cc/cCh8vxk4/minion.png" width="28" height="28" style={{ margin: '0 16px 0 31px'}} alt="Minion logo" />
          <div style={{ display: 'grid' }}>
          <span className="logo_name" style={{ fontSize: '12px' }}>Admin</span>
          <span className="logo_name" style={{ fontSize: '17px' }}>{user ? user.name : 'Minion'}</span>
          </div>
        </div>
        <ul className="nav-links">
          <li>
          <NavLink to="/Dashboard" className={activeLink === "Dashboard" ? "active" : ""} onClick={() => handleLinkClick("Dashboard")}>
              <i className="bx bx-grid-alt"></i>
              <span className="links_name">Dashboard</span>
            </NavLink>
          </li>
          <li>
          <NavLink to="/User" className={activeLink === "User" ? "active" : ""} onClick={() => handleLinkClick("User")}>
              <i className="bx bx-box"></i>
              <span className="links_name">Users</span>
            </NavLink>
          </li>
          <li>
          <NavLink to="/Role" className={activeLink === "Role" ? "active" : ""} onClick={() => handleLinkClick("Role")}>
              <i className="bx bx-box"></i>
              <span className="links_name">Role</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Court" className={activeLink === "Court" ? "active" : ""} onClick={() => handleLinkClick("Court")}>
              <i className="bx bx-list-ul"></i>
              <span className="links_name">Court</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="./RegCou">
              <i className="bx bx-pie-chart-alt-2"></i>
              <span className="links_name">Register Court</span>
            </NavLink>
          </li>
          <li className="log_out">
          <Link to="/Login">
            <i className="bx bx-log-out"></i>
            <span className="links_name">Log out</span>
          </Link>
          </li>
        </ul>
      </div>  
    );
};

export default Sidebar;