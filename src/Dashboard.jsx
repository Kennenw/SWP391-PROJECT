import React, { useState, useContext } from "react";
import './StyleDashboard.css';
import { UserContext } from './UserContext';

const Dashboard = () => {

  const { loginMessage, setLoginMessage } = useContext(UserContext);
  const [noticeVisible, setNoticeVisible] = useState(false);

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
    if (loginMessage) {
        setTimeout(() => {
        setLoginMessage("Login successfully");
      }, 5000);
    }
  }, [loginMessage, setLoginMessage]);

    const handleCloseNotice = () => {
       setNoticeVisible(false);
    };

    return (
        <section className="home-section">
        <nav>
          <div className="sidebar-button">
            <i className="bx bx-menu sidebarBtn"></i>
            <span className="dashboard">Dashboard</span>
          </div>
        </nav>
  
        <div className="home-content">
          <div className="overview-boxes">
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Total Users</div>
                <div className="number">40,876</div>
              </div>
              <i className="bx bx-cart-alt cart"></i>
            </div>
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Total Badminton Court</div>
                <div className="number">38,876</div>
              </div>
              <i className="bx bxs-cart-add cart two"></i>
            </div>
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Total Register Court</div>
                <div className="number">$12,876</div>
              </div>
              <i className="bx bx-cart cart three"></i>
            </div>
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Total Return</div>
                <div className="number">11,086</div>
              </div>
              <i className="bx bxs-cart-download cart four"></i>
            </div>
            {loginMessage && (
                  <div className={`success ${noticeVisible ? '' : 'hide'}`}>
                        <span className="check"><i className="fa fa-check-circle"></i></span>
                        <span className="msg">{loginMessage}</span>
                        <span className="crose" onClick={handleCloseNotice}><i className="fa fa-times"></i></span>
                  </div>
            )}
          </div>
          </div>
      </section>
    );
};

export default Dashboard;
