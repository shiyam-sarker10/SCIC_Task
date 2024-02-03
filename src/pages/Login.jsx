import React, { useContext } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { FaLock } from "react-icons/fa";
import SocialLogin from "../component/SocialLogin/SocialLogin";
import { toast } from 'react-toastify';
import { AuthContext } from '../AuthProvider/AuthProvider';




const Login = () => {
      const { signInUser } = useContext(AuthContext);
      const navigateDashbaord = useNavigate()
      


    const handleSubmit = (e) => {
      e.preventDefault();
      
       const email = e.target.email.value;
       const password = e.target.password.value;

       if (email === "" || password === "") {
         toast.info("Enter something or sign in with github or google");
       } else {
         signInUser(email, password)
           .then((result) => {
             toast.success("Login Successfully");
             navigateDashbaord("/dashboard/profile");
           })
           .catch((error) => {
             toast.error(`${error}`);
           });
       }
    }
    return (
      <div className="flex justify-center h-screen items-center px-4">
        <div className="max-w-[400px]  border shadow-md py-10 px-4 md:px-10 rounded-lg">
          <h1 className="text-3xl font-semibold mb-6">Login Now</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Email  */}
            <div>
              <label
                htmlFor="email-address-icon"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 16"
                  >
                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                  </svg>
                </div>
                <input
                  name="email"
                  type="text"
                  id="email-address-icon"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@flowbite.com"
                />
              </div>
            </div>
            {/* password  */}
            <div>
              <label
                htmlFor="email-address-icon"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <FaLock className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                </div>
                <input
                  name="password"
                  type="text"
                  id="email-address-icon"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Password"
                />
              </div>
            </div>
            {/* image upload   */}

            <h6 className="text-xs">
              Don't have an account yet ?{" "}
              <Link to="/register" className="border-black border-b ">
                register here
              </Link>
            </h6>

            {/* submit  */}
            <div className="flex justify-center pt-4">
              <button className="duration-500  text-sm md:text-base ease-in-out border hover:bg-black hover:text-white border-black rounded px-6 py-2">
                Login
              </button>
            </div>
            <div className="flex justify-center items-center gap-4">
              <hr className="w-full" />
              <span>OR</span>
              <hr className="w-full" />
            </div>
            <SocialLogin></SocialLogin>
          </form>
        </div>
      </div>
    );
};

export default Login;