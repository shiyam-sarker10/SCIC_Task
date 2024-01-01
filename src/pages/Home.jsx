import React from 'react';
import Banner from '../component/Banner/Banner';
import allTask from '../assets/allTask.png'
import PWGB from '../component/PWGB/PWGB';

const Home = () => {
    return (
      <div>
        <Banner></Banner>
        <div className='my-20'>
            <h1 className=' text-3xl text-gray-900 lg:text-4xl text-center font-semibold'>Manage your Daily Todo Tasks</h1>
            <p className='text-gray-500 py-6 text-sm md:text-base w-[40%] mx-auto text-center'>With  the help of Taskiee's clean user interface you  can easily manage your daily task routine with just a simple drag and drop </p>
          <img className='w-[80%] rounded-2xl shadow-lg mx-auto my-6'  src={allTask} alt="" />
        </div>
        <PWGB></PWGB>
      </div>
    );
};

export default Home;