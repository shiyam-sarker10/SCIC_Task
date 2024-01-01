import React from 'react';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

const DashboardWelcome = () => {
    const {user} =useAuth()
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl lg:text-4xl font-bold text-gray-900 ">
            Welcome, Mr.{user ? user?.displayName : "X"} 👋{" "}
          </h1>
          <p className='py-4'>Lets add all of your todays task </p>
        
          <Link to="/dashboard/add task">
            <button className="duration-500  text-sm md:text-base ease-in-out border hover:bg-black hover:text-white border-black rounded px-6 py-2">
              Add Task
            </button>
          </Link>
        </div>
      </div>
    );
};

export default DashboardWelcome;