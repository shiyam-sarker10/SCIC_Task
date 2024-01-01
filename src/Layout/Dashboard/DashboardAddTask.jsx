import React, { useState } from 'react';
import { TaskLottie } from '../../component/LottieReact/LottieReact';
import axios from 'axios';
import { toast } from 'react-toastify';
import useAuth from '../../hooks/useAuth';

const DashboardAddTask = () => {
    const {user} = useAuth()

      const [selectedPriority, setSelectedPriority] = useState(""); // Initial state

      const handlePriorityChange = (event) => {
        setSelectedPriority(event.target.value); // Update the selected value
      };
    const handleSubmit = (e) =>{
        e.preventDefault()
        const TaskName  = e.target.name.value
        const TaskMsg = e.target.description.value;
        const TaskDeadline  = e.target.time.value
        const TaskPriority = selectedPriority;
        const email = user?.email
        const category = "todo"
        const info = {
          TaskName,
          TaskMsg,
          TaskDeadline,
          TaskPriority,
          email,
          category,
        };
        axios
          .post("https://scic-server-psi.vercel.app/addTask", info)
          .then(() => {
            e.target.reset();
            toast.success("Successfully Inserted!", {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          })
          .catch(() => {});



    }
    return (
      <div className="flex justify-center items-center">
        <div className="w-full md:w-[50%]">
          <form onSubmit={handleSubmit}>
            <div className="max-w-[500px] rounded-xl  space-y-4  py-10 px-8 ">
              <h1 className="text-4xl font-medium pb-4">Add Your Task</h1>
              {/* title  */}
              <div>
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Task Name :
                </label>
                <input
                  name="name"
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John"
                  required
                />
              </div>
              {/* text area  */}
              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Task message :
                </label>
                <textarea
                  name="description"
                  id="message"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Write your thoughts here..."
                ></textarea>
              </div>
              {/* date  */}
              <div>
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Task Deadline :
                </label>
                <input
                  name="time"
                  type="date"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John"
                  required
                />
              </div>
              {/* select  */}
              <div>
                <label
                  htmlFor="countries"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Task Priority :
                </label>
                <select
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={selectedPriority} 
                  onChange={handlePriorityChange}
                >
                  <option selected>Choose Priority</option>
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="">Low</option>
                </select>
              </div>

              <button className="duration-500  text-sm md:text-base ease-in-out border hover:bg-black hover:text-white border-black rounded px-6 py-2">
                Add Task
              </button>
            </div>
          </form>
        </div>
        <div className="md:w-[50%] hidden md:block">
          <TaskLottie></TaskLottie>
        </div>
      </div>
    );
};

export default DashboardAddTask;