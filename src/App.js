import { Fragment, useEffect, useState } from "react";

import Home from './pages/home';
import SignupPage from "./pages/signuppage";
import LoginPage from "./pages/loginPage";
import AdminPage from './pages/AdminPage';
import AdminAddUser from './componets/AdminComponents/AdminAddUser';
import UpdateUser from './componets/AdminComponents/UpdateUser';
import UserList from './componets/AdminComponents/UserList';
import Profile from './pages/Profile';
// import { Routes, Route ,Router} from 'react-router-dom'


import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signup" element={<SignupPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path ='/adminlogin'element= {<AdminPage />}/>  
          <Route path ='/profile' element={<Profile />} />

          <Route path ='/userlist'element= {<UserList />}/>
          <Route path ='/updateUser/:id'element= {<UpdateUser />}/>
          <Route path ='/adminAddUser'element= {<AdminAddUser />}/>
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;