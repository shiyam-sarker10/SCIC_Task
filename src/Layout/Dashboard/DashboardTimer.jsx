import React from 'react';
import StopWatch from '../../component/StopWatch/StopWatch';

const DashboardTimer = () => {
    return (
      <div className="flex flex-col justify-center h-screen">
        <div>
          <h1 className=" text-2xl text-gray-900 lg:text-3xl text-center font-semibold">
            Time Tracker
          </h1>
          <p className="text-gray-500  text-sm md:text-base w-[40%] mx-auto text-center">
            Measure your productivity with our stopwatch feature.
          </p>
        </div>
        <StopWatch></StopWatch>
      </div>
    );
};

export default DashboardTimer;