import React, { useState, useEffect } from "react";
import './StyleDashboard.css';
import { USERS } from "./data";
import { ROLE } from "./roles";

const Users = () => {
  const [users, setUsers] = useState(USERS);
  const [roles, setRoles] = useState(ROLE);
  const [filteredRole, setFilteredRole] = useState(ROLE);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [filteredUsers, setFilteredUsers] = useState(USERS);
  const [selectedUser, setSelectedUser] = useState(null);
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

  const getRoleName = (roleID) => {
    const role = roles.find(role => role.roleID === roleID);
    return role ? role.roleName : 'Unknown';
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const searchResults = users.filter(user =>
      user.userName.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredUsers(searchResults);
  };

  const handleSort = () => {
    const sortedUsers = [...filteredUsers].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.userName.localeCompare(b.userName);
      } else {
        return b.userName.localeCompare(a.userName);
      }
    });
    setFilteredUsers(sortedUsers);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  // const handleFilter = (status) => {
  //   const filtered = users.filter(user => user.status === status);
  //   setFilteredUsers(filtered);
  // };

  const handleFilterByColumn = (columnName) => {
    const columnValue = prompt(`Enter value to filter ${columnName}:`);
    if (columnValue !== null) {
      const filtered = users.filter(user => user[columnName].toLowerCase().includes(columnValue.toLowerCase()));
      setFilteredUsers(filtered);
    }
  };

  const handleFilter = (property) => {
    setActiveFilter(property);
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    const searchResults = users.filter(user =>
      user[activeFilter].toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredUsers(searchResults);
  };


  return (
    <section className="home-section" style={{ padding: "0 27px" }}>
      <nav>
        <div className="sidebar-button">
          <i className="bx bx-menu sidebarBtn"></i>
          <span className="dashboard">Users</span>
        </div>
      </nav>

      <div className="home-content">
        <div className="infor">
          <div className="total">{filteredUsers.length} total</div>
          <div className="function">
          <button onClick={handleSort}>Sort {sortOrder === 'asc' ? 'Descending' : 'Ascending'}</button>
          <input type="text" placeholder="Search by account name" value={searchTerm} onChange={handleSearch} />
          <button className="create"><a href='#popup1' id='openPopUp'>Create User</a></button>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th onClick={() => handleFilter('userName')}>Account Name {activeFilter === 'userName' && <input type="text" className="search" onChange={handleInputChange} />}</th>
              <th onClick={() => handleFilter('name')}>FullName {activeFilter === 'name' && <input type="text" className="search" onChange={handleInputChange} />}</th>
              <th onClick={() => handleFilter('telephone')}>Phone {activeFilter === 'telephone' && <input type="number" className="search" onChange={handleInputChange} />}</th>
              <th onClick={() => handleFilter('email')}>Email {activeFilter === 'email' && <input type="text" className="search" onChange={handleInputChange} />}</th>
              <th onClick={() => handleFilter('roleID')} className="center">Role {activeFilter === 'roleID' && <input type="text" className="search" onChange={handleInputChange} />}</th>
              <th onClick={() => handleFilter('status')} className="center">Status {activeFilter === 'status' && <input type="text" className="search" onChange={handleInputChange} />}</th>
              <th className="center">Edit</th>   
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.userName}</td>
                <td>{user.name}</td>
                <td>{user.telephone}</td>
                <td>{user.email}</td>
                <td className="center">{getRoleName(user.roleID)}</td>
                <td className="center" style={{ color: user.status === "Active" ? "green" : "red" }}>{user.status}</td>
                <td className="put">
                  <button className='detail' onClick={() => setSelectedUser(user)}>
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

        {selectedUser && (
          <div id="popup1" className="overlay">
            <div className="popup">
              <div className="tabname"><div>Users</div><a className='close' href='#'>&times;</a></div>
              <div className="content">
                <form className="pt-3 pb-3" style={{padding : "30px"}}>
              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="inputUserName"   defaultValue={selectedUser.userName} />
                <label htmlFor="inputUserName" className="form-label">Username</label>
              </div>
              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="inputName"   defaultValue={selectedUser.name} />
                <label htmlFor="inputName" className="form-label">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input type="tel" className="form-control" id="inputTel"   defaultValue={selectedUser.telephone} />
                <label htmlFor="inputTel" className="form-label">Telephone</label>
              </div>
              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="inputEmail"   defaultValue={selectedUser.email} />
                <label htmlFor="inputEmail" className="form-label">Email</label>
              </div>
              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="inputRoleID"   defaultValue={selectedUser.roleID} />
                <label htmlFor="inputRoleID" className="form-label">RoleID</label>
              </div>
              <div className="form-floating mb-3">
                <select className="form-select" id="inputStatus"  defaultValue={selectedUser.status}>
                  <option value="Active">Active</option>
                  <option value="Disable">Disable</option>
                </select>
                <label htmlFor="inputStatus" className="form-label">Status</label>
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

export default Users;

// import React, { useState, useEffect } from "react";
// import './StyleDashboard.css';
// import { USERS } from "./data";

// const Users = () => {
//   const [users, setUsers] = useState(USERS);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [sortOrder, setSortOrder] = useState('asc');
//   const [filteredUsers, setFilteredUsers] = useState(USERS);
//   const [selectedUser, setSelectedUser] = useState({
//     userName: '',
//     name: '',
//     telephone: '',
//     email: '',
//     roleID: '',
//     status: 'Active'
//   });
//   const [isEditMode, setIsEditMode] = useState(false);

//   useEffect(() => {
//     let sidebar = document.querySelector(".sidebar");
//     let sidebarBtn = document.querySelector(".sidebarBtn");
//     sidebarBtn.onclick = function () {
//       sidebar.classList.toggle("active");
//       if (sidebar.classList.contains("active")) {
//         sidebarBtn.classList.replace("bx-menu", "bx-menu-alt-right");
//       } else {
//         sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
//       }
//     };
//   }, []);

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//     const searchResults = users.filter(user =>
//       user.userName.toLowerCase().includes(e.target.value.toLowerCase())
//     );
//     setFilteredUsers(searchResults);
//   };

//   const handleSort = () => {
//     const sortedUsers = [...filteredUsers].sort((a, b) => {
//       if (sortOrder === 'asc') {
//         return a.userName.localeCompare(b.userName);
//       } else {
//         return b.userName.localeCompare(a.userName);
//       }
//     });
//     setFilteredUsers(sortedUsers);
//     setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
//   };

//   const handleFilter = (status) => {
//     const filtered = users.filter(user => user.status === status);
//     setFilteredUsers(filtered);
//   };

//   const handleCreateUser = () => {
//     setSelectedUser({
//       userName: '',
//       name: '',
//       telephone: '',
//       email: '',
//       roleID: '',
//       status: 'Active'
//     });
//     setIsEditMode(false);
//   };

//   const handleSaveUser = (e) => {
//     e.preventDefault();
//     if (isEditMode) {
//       setUsers(users.map(user => user.userName === selectedUser.userName ? selectedUser : user));
//     } else {
//       setUsers([...users, selectedUser]);
//     }
//     setFilteredUsers([...users, selectedUser]);
//     setSelectedUser(null); // Clear selected user after save
//   };

//   return (
//     <section className="home-section" style={{ padding: "0 27px" }}>
//       <nav>
//         <div className="sidebar-button">
//           <i className="bx bx-menu sidebarBtn"></i>
//           <span className="dashboard">Users</span>
//         </div>
//       </nav>

//       <div className="home-content">
//         <div className="infor">
//           <div className="total">51 total</div>
//           <div className="function">
//             <button onClick={() => handleFilter('Active')}>Filter Active</button>
//             <button onClick={() => handleFilter('Disable')}>Filter Disable</button>
//             <button onClick={handleSort}>Sort {sortOrder === 'asc' ? 'Descending' : 'Ascending'}</button>
//             <button onClick={handleCreateUser}><a href='#popup1' id='openPopUp'>Create User</a></button>
//             <input type="text" placeholder="Search by account name" value={searchTerm} onChange={handleSearch} />
//           </div>
//         </div>

//         <table>
//           <thead>
//             <tr>
//               <th>Account Name</th>
//               <th>FullName</th>
//               <th>Phone</th>
//               <th>Email</th>
//               <th className="center">RoleID</th>
//               <th className="center">Status</th>
//               <th className="center">Edit</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredUsers.map((user) => (
//               <tr key={user.userName}>
//                 <td>{user.userName}</td>
//                 <td>{user.name}</td>
//                 <td>{user.telephone}</td>
//                 <td>{user.email}</td>
//                 <td className="center">{user.roleID}</td>
//                 <td className="center" style={{ color: user.status === "Active" ? "green" : "red" }}>{user.status}</td>
//                 <td className='put'>
//                   <button className='detail' onClick={() => { setSelectedUser(user); setIsEditMode(true); }}>
//                     <a href='#popup1' id='openPopUp'>
//                       <svg width="33" height="33" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <rect width="65.8739" height="65.8739" rx="32.937" fill="#292D32" />
//                         <mask id="mask0_146_689" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="7" y="5" width="55" height="54">
//                           <path d="M35.5517 21.8315L21.1497 36.2335L21.1497 36.2335C20.5042 36.879 20.1814 37.2018 19.9692 37.5983C19.757 37.9948 19.6675 38.4424 19.4885 39.3376L18.0527 46.5164C17.8507 47.5266 17.7496 48.0318 18.037 48.3191C18.3243 48.6065 18.8295 48.5054 19.8397 48.3034L27.0185 46.8676L27.0185 46.8676C27.9137 46.6886 28.3613 46.5991 28.7578 46.3869C29.1543 46.1747 29.4771 45.8519 30.1226 45.2064L44.5246 30.8044L35.5517 21.8315Z" fill="white" />
//                           <path d="M35.5517 21.8315L21.1497 36.2335L21.1497 36.2335C20.5042 36.879 20.1814 37.2018 19.9692 37.5983C19.757 37.9948 19.6675 38.4424 19.4885 39.3376L18.0527 46.5164C17.8507 47.5266 17.7496 48.0318 18.037 48.3191C18.3243 48.6065 18.8295 48.5054 19.8397 48.3034L27.0185 46.8676L27.0185 46.8676C27.9137 46.6886 28.3613 46.5991 28.7578 46.3869C29.1543 46.1747 29.4771 45.8519 30.1226 45.2064L44.5246 30.8044L35.5517 21.8315Z" fill="black" fill-opacity="0.1" />
//                           <path d="M36.9096 20.9468L21.3131 36.5433L21.3131 36.5433L21.2752 36.5812L21.2752 36.5812C21.2445 36.6118 21.2142 36.6421 21.1841 36.6721C20.6814 37.1741 20.27 37.5849 19.9808 38.0957C19.6915 38.6066 19.551 39.1707 19.3792 39.86C19.3689 39.9012 19.3585 39.9428 19.348 39.9849L18.1268 44.8699C18.1207 44.8942 18.1146 44.9185 18.1085 44.9428C17.9874 45.4373 17.8802 45.869 18.0964 46.0852C18.3126 46.3014 18.7443 46.1942 19.2388 46.0731C19.2631 46.067 19.2874 46.0609 19.3117 46.0548L24.1967 44.8336C24.2388 44.663 24.28 44.5125 24.3607 44.2786C24.5284 43.7897 24.7984 43.2424 25.2855 42.7554L40.882 27.1589L36.9096 20.9468Z" stroke="#222831" stroke-width="1.5" />
//                           <path d="M36.9096 20.9468L21.3131 36.5433L21.3131 36.5433L21.2752 36.5812L21.2752 36.5812C21.2445 36.6118 21.2142 36.6421 21.1841 36.6721C20.6814 37.1741 20.27 37.5849 19.9808 38.0957C19.6915 38.6066 19.551 39.1707 19.3792 39.86C19.3689 39.9012 19.3585 39.9428 19.348 39.9849L18.1268 44.8699C18.1207 44.8942 18.1146 44.9185 18.1085 44.9428C17.9874 45.4373 17.8802 45.869 18.0964 46.0852C18.3126 46.3014 18.7443 46.1942 19.2388 46.0731C19.2631 46.067 19.2874 46.0609 19.3117 46.0548L24.1967 44.8336C24.2388 44.663 24.28 44.5125 24.3607 44.2786C24.5284 43.7897 24.7984 43.2424 25.2855 42.7554L40.882 27.1589L36.9096 20.9468Z" stroke="black" stroke-opacity="0.1" stroke-width="1.5" />
//                         </mask>
//                         <g mask="url(#mask0_146_689)">
//                           <rect width="65.8739" height="65.8739" rx="32.937" fill="white" />
//                           <rect x="-4" y="-4" width="73.8739" height="73.8739" fill="#292D32" />
//                         </g>
//                         <path d="M39.0364 28.1275L37.8495 29.3144C37.5525 29.6114 37.0857 29.6114 36.7887 29.3144L34.7102 27.2359L35.8971 26.049L39.0364 28.1275ZM33.5257 28.4204L36.9648 31.8595M31.2484 30.6976L33.5257 28.4204M28.9711 32.975L31.2484 30.6976M30.6976 31.2484L30.6976 31.2484C30.7566 31.1894 30.8277 31.1441 30.9068 31.1152C30.986 31.0863 31.0711 31.0744 31.1566 31.0802C31.2422 31.0861 31.3264 31.1095 31.4027 31.149C31.479 31.1886 31.5459 31.2438 31.598 31.3106L33.2359 33.2359M33.2359 33.2359L34.5898 34.5898" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
//                       </svg>
//                     </a>
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <div id="popup1" className="overlay">
//         <div className="popup">
//           <a className="close" href="#">×</a>
//           <div className="content">
//             <form onSubmit={handleSaveUser}>
//               <label>Account Name</label>
//               <input type="text" value={selectedUser?.userName || ''} onChange={(e) => setSelectedUser({ ...selectedUser, userName: e.target.value })} disabled={isEditMode} />
//               <label>Full Name</label>
//               <input type="text" value={selectedUser?.name || ''} onChange={(e) => setSelectedUser({ ...selectedUser, name: e.target.value })} />
//               <label>Phone</label>
//               <input type="text" value={selectedUser?.telephone || ''} onChange={(e) => setSelectedUser({ ...selectedUser, telephone: e.target.value })} />
//               <label>Email</label>
//               <input type="email" value={selectedUser?.email || ''} onChange={(e) => setSelectedUser({ ...selectedUser, email: e.target.value })} />
//               <label>Role ID</label>
//               <input type="text" value={selectedUser?.roleID || ''} onChange={(e) => setSelectedUser({ ...selectedUser, roleID: e.target.value })} />
//               <label>Status</label>
//               <select value={selectedUser?.status || 'Active'} onChange={(e) => setSelectedUser({ ...selectedUser, status: e.target.value })}>
//                 <option value="Active">Active</option>
//                 <option value="Disable">Disable</option>
//               </select>
//               <button type="submit">{isEditMode ? 'Save' : 'Create'}</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Users;


