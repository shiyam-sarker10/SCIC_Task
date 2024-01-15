import React from 'react';
import Banner from '../component/Banner/Banner';
import allTask from '../assets/allTask.png'
import PWGB from '../component/PWGB/PWGB';
import Testimonial from '../component/Testimonial/Testimonial';
import Contact from '../component/Contact/Contact';
import FAQ from '../component/FAQ/FAQ';

const Home = () => {
    return (
      <div>
        <Banner></Banner>
        <div className="my-20">
          <h1 className=" text-3xl text-gray-900 lg:text-4xl text-center font-semibold">
            Manage your Daily Todo Tasks
          </h1>
          <p className="text-gray-500 py-6 text-sm md:text-base w-[40%] mx-auto text-center">
            With the help of Taskiee's clean user interface you can easily
            manage your daily task routine with just a simple drag and drop{" "}
          </p>
          <img
            className="w-[80%] rounded-2xl shadow-lg mx-auto my-6"
            src={allTask}
            alt=""
          />
        </div>
        <PWGB></PWGB>
        <div className="py-20">
          <h1 className=" text-3xl text-gray-900 lg:text-4xl text-center font-semibold">
            What Our Clients Say
          </h1>
          <p className="text-gray-500 py-6 text-sm md:text-base w-[40%] mx-auto text-center">
            Let's Hear From Some Of our User From Different Field How Taskiee
            Help them to manage their time and make them productive
          </p>
          <Testimonial />
        </div>
        <div className="py-20">
          <h1 className=" text-3xl text-gray-900 lg:text-4xl text-center font-semibold">
            Frequently asked questions
          </h1>
          <p className="text-gray-500 py-6 text-sm md:text-base w-[38%] mx-auto text-center">
            Here are the some most that we get from our users.Hope you might
            find your answer here
          </p>
          <FAQ></FAQ>
        </div>

        <Contact></Contact>
      </div>
    );
};

export default Home;