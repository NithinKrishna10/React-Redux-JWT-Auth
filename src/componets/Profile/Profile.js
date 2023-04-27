import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { verifyToken, addImage } from "../../utils/Constants";
import axios from '../../utils/axios';
import './Profile.css';
// import styles from './Profile.module.css';
import Swal from "sweetalert2";


import Cookies from 'js-cookie';
import { userAction } from '../../redux/usernameSlice';
import { userImageAction } from '../../redux/userImageSlice';


function Profile() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState('')
  const [email, setemail] = useState('')
  const [image, setImage] = useState('')





  useEffect(() => {
    const token = Cookies.get('jwt');
    if (!token) {
      navigate('/login');

    } else {
      const body = JSON.stringify({ token });
      axios.post(verifyToken, body, { headers: { "Content-Type": "application/json" } }).then((res) => {
        // if (res.data.token) {
        console.log(res)
        setName(res.data.full_name)
        setemail(res.data.email)
        setImage(res.data.image)
        dispatch(userAction.setUsername(res.data.full_name))
        dispatch(userImageAction.setUserImage(res.data.image))
        // }

      })
    }
  }, [navigate, dispatch]);

  const Image = useSelector((state) => state.userImage.value);
  console.log(Image, '+++++++++');

  const userImage = async () => {
    const { value: file } = await Swal.fire({
      title: 'Select image',
      input: 'file',
      inputAttributes: {
        'accept': 'image/*',
        'aria-label': 'Upload your profile picture'
      }
    })

    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        Swal.fire({
          title: "img",
          imageUrl: e.target.result,
          imageHeight: 400,
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: 'Update',
          denyButtonText: `Change`,
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            uploading(file)

          } else if (result.isDenied) {
            userImage()
          }
        })
      }
      reader.readAsDataURL(file)
    }

    function uploading(file) {
      console.log(Cookies);
      const Token2 = Cookies.get("id");
      // const Stoken = JSON.stringify({Token2});
      let formData = new FormData();
      formData.append("image", file)
      axios.post(`${addImage}/${Token2}`, formData)
        .then((res) => {
          console.log(res.data, 'llllllllllll');
          console.log(res.data.image, 'kkkkkkkkkkkkkkkkkk');
          dispatch(userImageAction.setUserImage('http://127.0.0.1:8000' + res.data.image))
          navigate('/profile')
        }).catch((err) => {
          console.log(err);
        })
    }
  }

  return (


    // <div className='row text-allign-center'> 
    //     <div class="container rounded bg- mt-5 mb-5 profilepage">
    //         <div class="row">
    //             <div class="col-md-4 border-right">
    //                 <div class="d-flex flex-column align-items-center text-center p-3 py-5">
    //                     <img class="rounded-circle mt-4 mb-4" width={150} src={'http://localhost:8000'+Image} alt="profile photo" />

    //                     <span class="text-black-50"></span>
    //                     <span>
    //                         <button onClick={userImage} type="button" class="btn btn-primary" >
    //                             Update Image
    //                         </button>


    //                         </span></div>
    //             </div>
    //             <div class="col-md-8 border-right">
    //                 <div class="p-3 py-5">
    //                     <div class="d-flex justify-content-between align-items-center mb-3">
    //                         <h4 class="text-right">Profile Settings</h4>
    //                     </div>
    //                     <div class="row mt-2">
    //                         <div class="col-md-6"><label class="labels">Name :</label> {name}</div>

    //                     </div>
    //                     <div class="row mt-3">
    //                         <div class="col-md-6"><label class="labels">Email :</label> {email}</div>

    //                     </div>

    //                 </div>
    //             </div>
    //             <div class="col-md-4">

    //             </div>
    //         </div>
    //     </div>
    // </div>



// {/* <div>
//      <img class="rounded-circle profile-img" onClick={userImage} width="150" src={'http://127.0.0.1:8000/' + Image} alt="Profile Photo" />

// </div> */}


    // <div class="container profile-container mt-5 mb-5">
    //   <div class="row" >
    //     <div class="col-md-4 border-right">
    //       <div class="d-flex flex-column align-items-center text-center p-3 py-5">

    //         <img class="rounded-circle profile-img" onClick={userImage} width="150" src={'http://127.0.0.1:8000/' + Image} alt="Profile Photo" />

    //         {/* <button class="Image" type="button" >Update Image</button>  */}

    //       </div>
    //       <div class="p-3 py-5">
    //         <div class="d-flex justify-content-between align-items-center mb-3">
    //           <h4 class="text-right">Profile Settings</h4>
    //         </div>
    //         <div class="row mt-2">
    //           <div class="col-md-6">
    //             <label class="labels" >Name :</label>
    //             <span class="profile-text">{name}</span>
    //           </div>
    //         </div>
    //         <div class="row mt-3">
    //           <div class="col-md-6">
    //             <label class="labels">Email :</label>
    //             <span class="profile-text">{email}</span>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div class="col-md-8 border-right">
    //       <div>
    //         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    //       </div>
    //     </div>

    //     <div class="col-md-4"></div>
    //   </div>
    // </div>




    
    <div className='profile-container' >
<div>
<img class="rounded-circle profile-img" onClick={userImage} width="150" src={'http://127.0.0.1:8000/' + Image} alt="Profile Photo" />
</div>
  <div className='labell'>
    {/* <div className='label-field'>
      Name:

    </div> */}
    <div className='label-value'>
      {name}
      
    </div>
  </div>
  <div className='labell'>
    {/* <div className='label-field'>
      Email:

    </div> */}
    <div className='label-value'>
      {email}
      
    </div>
  </div>
</div>


  )
}

export default Profile

