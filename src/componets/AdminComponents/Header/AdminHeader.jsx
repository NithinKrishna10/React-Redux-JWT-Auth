import React from 'react';
import Swal from 'sweetalert2';
import {useNavigate} from 'react-router-dom';
import Cookies from 'js-cookie';


function AdminHeader(){
  const navigate=useNavigate()

  const logout=(e)=>{

    e.preventDefault();
    Swal.fire({
        title: 'Logout?',
        text: "Do you want to Logout?",
        icon: 'warning',
        showCancelButton: true,
        cancelButtonColor: '#d33',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Logout'
    }).then((result) => {
        if (result.isConfirmed) {
          Cookies.remove('admin_jwt')
          navigate('/adminlogin')
        }
    })
  };
  return(
    // <nav class="navnar navbar-expand-lg adminHeadernav">
    //   <div class="container-fluid">
    //     <a class="navbar-band" href='/adminHome' style={{color:"white"}}>WELCOME ADMIN</a>
    //     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //       <span class="navbar-toggler-icon"></span>
    //     </button>
    //     <div class="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    //         <li class="nav-item">
              
    //         </li>
    //         <li class="nav-item">

    //         </li>
    //         <li class="nav-item dropdown">
    //           <ul class="dropdown-menu">

    //           </ul>
    //         </li>
    //         <li class="nav-item">

    //         </li>
    //       </ul>
    //       <form class="d-flex" >
    //         <button class="adminLogoutBtn" onClick={logout}>Logout</button>
    //       </form>
    //     </div>
    //   </div>
    // </nav>

    <header>
    <div className="container">
       <h1>Nithin Krishna</h1>

       <div className="right-section">
          <div className="cart-count-header"></div>
          <svg width="32" height="32" viewBox="0 0 16 16" cursor="pointer">
             <path
                d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86"
                fill="#fff"
             ></path>
          </svg>
          <p onClick={logout}>Logout</p>
       </div>
      
    </div>
    
 </header>
  )
}

export default AdminHeader