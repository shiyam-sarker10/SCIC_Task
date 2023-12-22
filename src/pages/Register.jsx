import React, { useContext } from "react";
import { FaLock } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import SocialLogin from "../component/SocialLogin/SocialLogin";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { AuthContext } from "../AuthProvider/AuthProvider";



const Register = () => {
     const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;

     const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

     const { createUser, UserUpdate, LogOut } = useContext(AuthContext);
     const loginNavigate = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault();
      const name = e.target.name.value;
      const email = e.target.email.value;
      const password = e.target.password.value;
      const image = e.target.image.files[0];
      const imageFile = { image: image };
    

      const imageRes = await axios.post(image_hosting_api, imageFile, {
        headers: {
          "content-type": "multipart/form-data",
        },

      });
      const imageUrl = imageRes.data.data.display_url;
      console.log(imageUrl);
      const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
      if (password.length < 6) {
        toast.error("Password must be at least 6 characters long");
        return;
      } else if (!/[A-Z]/.test(password)) {
        toast.error("Password must contain 1 capital letter ");
        return;
      } else if (!specialChars.test(password)) {
        toast.error("Password must contain 1 spacial  character ");
        return;
      } else {
        createUser(email, password)
          .then((result) => {
            console.log(result);
            toast.success("SuccessFully registered");
            UserUpdate(name, imageUrl)
              .then((result) => {
                console.log(result);
                loginNavigate("/login");
              })
              .catch((error) => {
                
              });
            LogOut()
              .then((result) => {})
              .catch((error) => {});
          })
          .catch((error) => {
            toast.error(error);
          });
      }

    };
  return (
    <div className="flex justify-center h-screen items-center px-4 my-20">
      <div className="max-w-[400px]  border shadow-md py-10 px-4 md:px-10 rounded-lg">
        <h1 className="text-3xl font-semibold mb-6">Register Now</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* username  */}
          <div>
            <label
              htmlFor="email-address-icon"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <FaUser className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </div>
              <input
                name="name"
                type="text"
                id="email-address-icon"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Shiyam Sarker"
              />
            </div>
          </div>
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
          <div className="mb-3">
            <label
              htmlFor="formFileMultiple"
              className="mb-2 inline-block text-black dark:text-neutral-200 text-sm font-medium"
            >
              Upload Image
            </label>
            <input
              name="image"
              className="relative m-0 block w-full min-w-0 flex-auto rounded-lg border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-gray-900 file:px-3 file:py-[0.32rem] file:text-white file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-black focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-white dark:file:bg-gray-800 dark:file:text-neutral-100 dark:focus:border-primary"
              type="file"
              id="formFileMultiple"
              multiple
            />
          </div>

          <h6 className="text-xs">
            Already have an account ?{" "}
            <Link to="/login" className="border-black border-b ">Login here</Link>
          </h6>

          {/* submit  */}
          <div className="flex justify-center pt-4">
            <button className="duration-500  text-sm md:text-base ease-in-out border hover:bg-black hover:text-white border-black rounded px-6 py-2">
              Register
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

export default Register;
