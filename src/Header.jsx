import React, { useContext , useEffect , useState } from "react";
import { NavLink, Link } from "react-router-dom";
import './StyleHome.css';
import { UserContext } from './UserContext';

const Header = () => {
    const { user } = useContext(UserContext);

        const [dropdownOpen, setDropdownOpen] = useState(false);
      
        const toggleDropdown = () => {
          setDropdownOpen(!dropdownOpen);
        };
      
        const handleClickOutside = (event) => {
          if (!event.target.closest('.dropbtn')) {
            setDropdownOpen(false);
          }
        };
      
        useEffect(() => {
          if (dropdownOpen) {
            window.addEventListener('click', handleClickOutside);
          } else {
            window.removeEventListener('click', handleClickOutside);
          }
      
          return () => {
            window.removeEventListener('click', handleClickOutside);
          };
        }, [dropdownOpen]);

    return (
        <div className="image-container">
            <img className="background" src={"https://www.badmintonengland.co.uk/wp-content/uploads/2023/08/AdobeStock_512922491.png"} alt="Description of Screenshot" style={{width: "-webkit-fill-available", height: "500px", objectFit: "none"}} />
            <ul>
                <li style={{padding: 0, paddingTop: "5px", marginLeft: "9px"}}>
                    <svg width="33" height="33" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M22.4875 0.129715C20.6523 -0.265697 18.4363 0.181035 16.2847 2.33251C14.707 3.91019 14.0482 5.52035 13.9621 6.98644C12.4961 7.07267 10.8862 7.7315 9.30863 9.30904C7.73125 10.8864 7.0724 12.4962 6.98607 13.9621C5.52005 14.0483 3.91006 14.7071 2.3325 16.2847C0.181038 18.4362 -0.265695 20.6523 0.129713 22.4875C0.656836 24.9342 2.92618 26.0786 4.16799 26.6429L23.9899 35.653C25.4875 36.3335 27.2501 36.0139 28.4132 34.8507L34.8508 28.4134C36.0139 27.25 36.3336 25.4874 35.653 23.9898L26.6431 4.16798C26.0786 2.92617 24.9342 0.656832 22.4875 0.129715ZM20.6874 4.04091C21.0714 3.92025 21.3912 3.9303 21.6564 3.98746C21.7995 4.01828 21.9903 4.11019 22.248 4.41719C22.5213 4.74305 22.7801 5.20609 23.0505 5.80097L32.0604 25.6228L31.8173 25.8659L18.4645 8.69786C18.2102 8.43555 18.0276 8.08633 17.9457 7.73132C17.8479 7.3072 17.7774 6.42073 19.0752 5.12294C19.7478 4.45032 20.2973 4.16342 20.6874 4.04091ZM8.69788 18.4648L25.8657 31.8176L25.6228 32.0603L5.80097 23.0504C5.20607 22.7801 4.74306 22.5212 4.41719 22.2479C4.11019 21.9902 4.01828 21.7994 3.98746 21.6564C3.9303 21.391 3.92024 21.0714 4.04092 20.6874C4.16343 20.2973 4.45032 19.7478 5.12294 19.0751C6.42073 17.7773 7.3072 17.8478 7.73131 17.9457C8.08868 18.0282 8.43759 18.2044 8.69788 18.4648ZM28.6784 29.0053L11.3679 15.5417C11.2571 15.3977 11.0548 15.0769 10.9696 14.7078C10.8718 14.2837 10.8013 13.3973 12.0991 12.0995C13.3969 10.8017 14.2833 10.8722 14.7074 10.97C15.0774 11.0554 15.399 11.2586 15.5424 11.3692L29.0052 28.6786L28.6784 29.0053Z" fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M29.4179 36.6367C28.4405 37.6144 28.1838 39.301 29.241 40.5321C29.9736 41.3853 31.5274 42.9638 33.6748 43.6577C34.7888 44.018 36.0745 44.1427 37.4496 43.7913C38.8189 43.4415 40.1437 42.6536 41.3986 41.3987C42.6535 40.1438 43.4414 38.8188 43.7914 37.4494C44.1426 36.0744 44.0179 34.7889 43.6578 33.6746C42.9637 31.5275 41.3852 29.9734 40.5322 29.241C39.301 28.1838 37.6143 28.4403 36.6368 29.418L29.4179 36.6367ZM34.8885 39.9028C34.1564 39.6663 33.483 39.1864 32.9429 38.6925L38.6925 32.943C39.1863 33.4831 39.6662 34.1565 39.9028 34.8883C40.0679 35.3992 40.1092 35.9201 39.9679 36.4726C39.8252 37.0307 39.4622 37.7543 38.6082 38.6083C37.7542 39.4622 37.0307 39.8253 36.4725 39.968C35.9202 40.109 35.3993 40.068 34.8885 39.9028Z" fill="white"/>
                    </svg>
                </li>
                <li style={{width: "-webkit-fill-available"}}></li>
                <li><NavLink to="/Home">HOME</NavLink></li>
                <li><NavLink to="/AboutUS">ABOUT US</NavLink></li>
                <li><a href="">BOOK PLAY</a></li>
                <li><a href="">CHECK IN</a></li>
                <li><a href="">SUPPORT</a></li>
                {user ? (
                    <div className="dropdown">
                    <button className="user-info dropbtn" onClick={toggleDropdown} style={{width: "max-content"}}>Hello {user.userName}</button>
                    <div id="myDropdown" className={`dropdown-content ${dropdownOpen ? 'show' : ''}`}>
                    <a href="#">Link 1</a>
                    <Link to="/">Logout</Link>
                  </div>
                  </div>
                ) : (
                    <>
                        <button className="in"><NavLink to="/Login">Sign in</NavLink></button>
                        <button className="up"><NavLink to="/Register">Sign up</NavLink></button>
                    </>
                )}
                {/* <button className="in"><NavLink to="/Login" >Sign in</NavLink></button>
                <button className="up"><NavLink to="/Register" >Sign up</NavLink></button> */}
            </ul>
        </div>
    );
};

export default Header;