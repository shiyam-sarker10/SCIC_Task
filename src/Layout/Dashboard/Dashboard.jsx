import React, { useState } from "react";
import {  Link, Outlet } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { RiProfileFill } from "react-icons/ri";
import { MdAddToPhotos } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { IoMdStopwatch } from "react-icons/io";
// import component 👇
import Drawer from 'react-modern-drawer'
import { RiMenuUnfoldLine } from "react-icons/ri";

//import styles 👇
import 'react-modern-drawer/dist/index.css'
import useAuth from "../../hooks/useAuth";

const Dashboard = () => {
     const [isOpen, setIsOpen] = React.useState(false);
     const toggleDrawer = () => {
       setIsOpen((prevState) => !prevState);
     };

     const {user} = useAuth()
  return (
    <div className="flex">
      <div className="hidden md:block w-[250px]">
        <Drawer
          onClose={toggleDrawer}
          direction="left"
          className="bla bla bla"
          open={true}
          enableOverlay={false}
        >
          <div>
            <div className="my-10 space-y-4">
              <img
                className="w-[100px] h-[100px] object-cover  rounded-full mx-auto "
                src={user?.photoURL}
                alt=""
              />
              <h1 className="font-medium text-xl text-center">
                Name : {user?.displayName}
              </h1>
            </div>
            <div className="">
              <ul className="">
                <Link to="/dashboard">
                  <li className="flex gap-8 font-medium items-center px-6 py-2 duration-500 ease-in-out hover:bg-black/10 active:bg-black active:text-white">
                    <MdDashboard className="text-[30px]" />
                    Dashbaord
                  </li>
                </Link>

                <Link to="/dashboard/profile">
                  <li className="flex gap-8 font-medium items-center px-6 py-2 duration-500 ease-in-out hover:bg-black/10 active:bg-black active:text-white">
                    <RiProfileFill className="text-[30px]" />
                    Profile
                  </li>
                </Link>
                <Link to="/dashboard/add task">
                  <li className="flex gap-8 font-medium items-center px-6 py-2 duration-500 ease-in-out hover:bg-black/10 active:bg-black active:text-white">
                    <MdAddToPhotos className="text-[30px]" />
                    Add Task
                  </li>
                </Link>
                <Link to="/dashboard/all task">
                  <li className="flex gap-8 font-medium items-center px-6 py-2 duration-500 ease-in-out hover:bg-black/10 active:bg-black active:text-white">
                    <FaTasks className="text-[30px]" />
                    All Task
                  </li>
                </Link>
                <Link to="/dashboard/timer">
                  <li className="flex gap-8 font-medium items-center px-6 py-2 duration-500 ease-in-out hover:bg-black/10 active:bg-black active:text-white">
                    <IoMdStopwatch className="text-[30px]" />
                    Stop Watch
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </Drawer>
      </div>
      <div className="h-full w-full md:w-[82%] z-50  ">
        <div className="h-[10%] w-full mx-auto block md:hidden bg-black p-4 sticky top-0  ">
          <button onClick={toggleDrawer}>
            <RiMenuUnfoldLine className="text-[30px] text-white" />
          </button>
        </div>
        <div className="p-10 overflow-hidden">
          <Outlet></Outlet>
        </div>
      </div>

      <div className="block md:hidden">
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="left"
          className="bla bla bla"
        >
          <div>
            <div className="my-10 space-y-4">
              <img
                className="w-[100px] h-[100px] object-cover rounded-full mx-auto "
                src={user?.photoURL}
                alt=""
              />
              <h1 className="font-medium text-2xl text-center">
                Name : {user?.displayName}
              </h1>
            </div>
            <div className="">
              <ul className="">
                <Link to="/dashboard">
                  <li className="flex gap-8 font-medium items-center px-6 py-2 duration-500 ease-in-out hover:bg-black/10 active:bg-black active:text-white">
                    <MdDashboard className="text-[30px]" />
                    Dashbaord
                  </li>
                </Link>

                <Link to="/dashboard/profile">
                  <li className="flex gap-8 font-medium items-center px-6 py-2 duration-500 ease-in-out hover:bg-black/10 active:bg-black active:text-white">
                    <RiProfileFill className="text-[30px]" />
                    Profile
                  </li>
                </Link>
                <Link to="/dashboard/add task">
                  <li className="flex gap-8 font-medium items-center px-6 py-2 duration-500 ease-in-out hover:bg-black/10 active:bg-black active:text-white">
                    <MdAddToPhotos className="text-[30px]" />
                    Add Task
                  </li>
                </Link>
                <Link to="/dashboard/all task">
                  <li className="flex gap-8 font-medium items-center px-6 py-2 duration-500 ease-in-out hover:bg-black/10 active:bg-black active:text-white">
                    <FaTasks className="text-[30px]" />
                    All Task
                  </li>
                </Link>
                <li></li>
              </ul>
            </div>
          </div>
        </Drawer>
      </div>
    </div>
  );
};

export default Dashboard;
