import React, { useState, useEffect } from "react";
import './StyleDashboard.css';
import { ROLE } from "./roles";

const Role = () => {
  const [role, setRole] = useState(ROLE);
  const [filteredRole, setFilteredRole] = useState(ROLE);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [selectedRole, setSelectedRole] = useState(null);
  const [activeFilter, setActiveFilter] = useState(null);

  useEffect(() => {
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

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const searchResults = role.filter(role =>
      role.roleName.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredRole(searchResults);
  };

  const handleSort = () => {
    const sortedRole = [...filteredRole].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.roleName.localeCompare(b.roleName);
      } else {
        return b.roleName.localeCompare(a.roleName);
      }
    });
    setFilteredRole(sortedRole);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

//   const handleFilterByColumn = (columnName) => {
//     const columnValue = prompt(`Enter value to filter ${columnName}:`);
//     if (columnValue !== null) {
//       const filtered = users.filter(user => user[columnName].toLowerCase().includes(columnValue.toLowerCase()));
//       setFilteredUsers(filtered);
//     }
//   };

  const handleFilter = (property) => {
    setActiveFilter(property);
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    const searchResults = role.filter(role =>
      role[activeFilter].toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredRole(searchResults);
  };


  return (
    <section className="home-section" style={{ padding: "0 27px" }}>
      <nav>
        <div className="sidebar-button">
          <i className="bx bx-menu sidebarBtn"></i>
          <span className="dashboard">Role</span>
        </div>
      </nav>

      <div className="home-content">
        <div className="infor">
          <div className="total">{filteredRole.length} total</div>
          <div className="function">
          <button onClick={handleSort}>Sort {sortOrder === 'asc' ? 'Descending' : 'Ascending'}</button>
          <input type="text" placeholder="Search by role name" value={searchTerm} onChange={handleSearch} />
          <button className="create"><a href='#popup1' id='openPopUp'>Create Role</a></button>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th onClick={() => handleFilter('roleID')}>Role ID {activeFilter === 'roleID' && <input type="text" className="search" onChange={handleInputChange} />}</th>
              <th onClick={() => handleFilter('roleName')}>Name {activeFilter === 'roleName' && <input type="text" className="search" onChange={handleInputChange} />}</th>
              <th className="center">Edit</th>   
            </tr>
          </thead>
          <tbody>
            {filteredRole.map((role) => (
              <tr key={role.roleID}>
                <td>{role.roleID}</td>
                <td>{role.roleName}</td>
                <td className="put">
                  <button className='detail' onClick={() => setSelectedRole(role)}>
                    <a href='#popup1' id='openPopUp'>
                    <svg width="33" height="33" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="65.8739" height="65.8739" rx="32.937" fill="#292D32"/>
                        <mask id="mask0_146_689" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="7" y="5" width="55" height="54">
                          <path d="M35.5517 21.8315L21.1497 36.2335L21.1497 36.2335C20.5042 36.879 20.1814 37.2018 19.9692 37.5983C19.757 37.9948 19.6675 38.4424 19.4885 39.3376L18.0527 46.5164C17.8507 47.5266 17.7496 48.0318 18.037 48.3191C18.3243 48.6065 18.8295 48.5054 19.8397 48.3034L27.0185 46.8676L27.0185 46.8676C27.9137 46.6886 28.3613 46.5991 28.7578 46.3869C29.1543 46.1747 29.4771 45.8519 30.1226 45.2064L44.5246 30.8044L35.5517 21.8315Z" fill="white"/>
                          <path d="M35.5517 21.8315L21.1497 36.2335L21.1497 36.2335C20.5042 36.879 20.1814 37.2018 19.9692 37.5983C19.757 37.9948 19.6675 38.4424 19.4885 39.3376L18.0527 46.5164C17.8507 47.5266 17.7496 48.0318 18.037 48.3191C18.3243 48.6065 18.8295 48.5054 19.8397 48.3034L27.0185 46.8676L27.0185 46.8676C27.9137 46.6886 28.3613 46.5991 28.7578 46.3869C29.1543 46.1747 29.4771 45.8519 30.1226 45.2064L44.5246 30.8044L35.5517 21.8315Z" fill="black" fill-opacity="0.1"/>
                          <path d="M36.9096 20.9468L21.3131 36.5433L21.3131 36.5433L21.2752 36.5812L21.2752 36.5812C21.2445 36.6118 21.2142 36.6421 21.1841 36.6721C20.6814 37.1741 20.27 37.5849 19.9808 38.0957C19.6915 38.6066 19.551 39.1707 19.3792 39.86C19.3689 39.9012 19.3585 39.9428 19.348 39.9849L18.1268 44.8699C18.1207 44.8942 18.1146 44.9185 18.1085 44.9428C17.9874 45.4268 17.8647 45.9169 17.8249 46.3233C17.7817 46.7656 17.7978 47.4567 18.3489 48.0077C18.9 48.5588 19.5911 48.575 20.0333 48.5317C20.4397 48.492 20.9298 48.3693 21.4138 48.2481C21.4381 48.242 21.4624 48.2359 21.4867 48.2299L26.3717 47.0086C26.4138 46.9981 26.4554 46.9877 26.4966 46.9775C27.1859 46.8057 27.7501 46.6651 28.2609 46.3759C28.7718 46.0866 29.1826 45.6752 29.6845 45.1725C29.7145 45.1425 29.7448 45.1121 29.7755 45.0814L45.4098 29.4471L45.4432 29.4137C45.9825 28.8744 46.4372 28.4198 46.7814 28.018C47.1414 27.5976 47.4497 27.1584 47.6373 26.6286C47.9653 25.7024 47.9653 24.6915 47.6373 23.7652C47.4497 23.2355 47.1414 22.7962 46.7814 22.3759C46.4372 21.9741 45.9825 21.5194 45.4431 20.9801L45.4098 20.9468L45.3765 20.9134C44.8372 20.3741 44.3825 19.9194 43.9807 19.5752C43.5604 19.2152 43.1212 18.9069 42.5914 18.7194C41.6651 18.3914 40.6543 18.3914 39.728 18.7194C39.1983 18.9069 38.759 19.2152 38.3387 19.5752C37.9369 19.9195 37.4822 20.3741 36.9429 20.9135L36.9096 20.9468Z" stroke="white" stroke-width="2.50406"/>
                          <path d="M36.9096 20.9468L21.3131 36.5433L21.3131 36.5433L21.2752 36.5812L21.2752 36.5812C21.2445 36.6118 21.2142 36.6421 21.1841 36.6721C20.6814 37.1741 20.27 37.5849 19.9808 38.0957C19.6915 38.6066 19.551 39.1707 19.3792 39.86C19.3689 39.9012 19.3585 39.9428 19.348 39.9849L18.1268 44.8699C18.1207 44.8942 18.1146 44.9185 18.1085 44.9428C17.9874 45.4268 17.8647 45.9169 17.8249 46.3233C17.7817 46.7656 17.7978 47.4567 18.3489 48.0077C18.9 48.5588 19.5911 48.575 20.0333 48.5317C20.4397 48.492 20.9298 48.3693 21.4138 48.2481C21.4381 48.242 21.4624 48.2359 21.4867 48.2299L26.3717 47.0086C26.4138 46.9981 26.4554 46.9877 26.4966 46.9775C27.1859 46.8057 27.7501 46.6651 28.2609 46.3759C28.7718 46.0866 29.1826 45.6752 29.6845 45.1725C29.7145 45.1425 29.7448 45.1121 29.7755 45.0814L45.4098 29.4471L45.4432 29.4137C45.9825 28.8744 46.4372 28.4198 46.7814 28.018C47.1414 27.5976 47.4497 27.1584 47.6373 26.6286C47.9653 25.7024 47.9653 24.6915 47.6373 23.7652C47.4497 23.2355 47.1414 22.7962 46.7814 22.3759C46.4372 21.9741 45.9825 21.5194 45.4431 20.9801L45.4098 20.9468L45.3765 20.9134C44.8372 20.3741 44.3825 19.9194 43.9807 19.5752C43.5604 19.2152 43.1212 18.9069 42.5914 18.7194C41.6651 18.3914 40.6543 18.3914 39.728 18.7194C39.1983 18.9069 38.759 19.2152 38.3387 19.5752C37.9369 19.9195 37.4822 20.3741 36.9429 20.9135L36.9096 20.9468Z" stroke="black" stroke-opacity="0.1" stroke-width="2.50406"/>
                          <path d="M35.5518 21.8315L44.5246 30.8044" stroke="white" stroke-width="2.50406"/>
                          <path d="M35.5518 21.8315L44.5246 30.8044" stroke="black" stroke-opacity="0.1" stroke-width="2.50406"/>
                        </mask>
                        <g mask="url(#mask0_146_689)">
                          <rect x="-2.51172" y="4.87988" width="64.1115" height="59.1798" fill="#F49D1A"/>
                        </g>
                    </svg>
                    </a>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {selectedRole && (
          <div id="popup1" className="overlay">
            <div className="popup">
              <div className="tabname"><div>Role</div><a className='close' href='#'>&times;</a></div>
              <div className="content">
                <form className="pt-3 pb-3" style={{padding : "30px"}}>
              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="inputRoleID"  defaultValue={selectedRole.roleID} />
                <label htmlFor="inputRoleID" className="form-label">Username</label>
              </div>
              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="inputRoleName"   defaultValue={selectedRole.roleName} />
                <label htmlFor="inputRoleName" className="form-label">Name</label>
              </div>
            </form>  

            </div>
            <div className="pop-footer">
              <button className="btn btn-primary"><a href='#'>Cancel</a></button>
              <button className="btn btn-primary">Save</button>
              <button className="btn btn-danger">Delete</button>
            </div>

            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Role;


