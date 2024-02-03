import React from 'react';
import useAuth from '../../hooks/useAuth';
import { BsEnvelopeAt } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import Modal from '../../component/Modal/Modal';


const DashboardProfile = () => {
    const loginNavigate = useNavigate()
    
    const { user, LogOut } = useAuth();
    const handleLogout = () => {
      LogOut()
      .then(result =>{
        loginNavigate("/")
        console.log("this is logout")
      })
      .catch(error);

    };

    return (
      <div className="flex justify-center items-center h-screen">
        <div className=" relative w-[350px] max-w-[450px] md:w-[450px]  space-y-4 shadow-lg rounded-lg p-6 flex flex-col justify-center items-center">
          <div className="absolute -right-20 top-5">
            <Modal></Modal>
          </div>
          <img
            className="rounded-full w-[120px] h-[120px] object-cover mx-auto"
            src={user?.photoURL}
            alt=""
          />
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-semibold text-gray-800">
              {user?.displayName}
            </h1>
            <div className="flex items-center gap-2 text-gray-600">
              <BsEnvelopeAt />
              <p>{user?.email}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="duration-500 w-[60%] mx-auto  text-sm md:text-base ease-in-out border hover:bg-black hover:text-white border-black rounded px-6 py-2"
          >
            Logout
          </button>
        </div>
      </div>
    );
};

export default DashboardProfile;