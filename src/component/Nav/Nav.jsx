import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { RxCross1 } from "react-icons/rx";
import { RiMenuAddFill } from "react-icons/ri";
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, LogOut } = useAuth();
  const [isProfile, setIsProfile] = useState(false);


const handleLogout = () => {
  LogOut()
  .then(result)
  .catch(error)
}

 
   
    return (
      <div className="flex  border shadow-md text-black items-center py-4  justify-between px-8 md:px-16 lg:px-24">
        <div className="hidden md:block">
          <div className="flex gap-2   items-center">
            <img
              className="w-[35px] filter grayscale-[100px] "
              src={logo}
              alt=""
            />
            <h2 className=" font-semibold py-4 text-xl">Taskiee</h2>
          </div>
        </div>
        <div className="hidden md:flex ">
          <ul className="flex gap-6 items-center md:gap-10 text-lg md:text-xl">
            <li className="hover:border-b  border-black">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li className="hover:border-b  border-black">
              <NavLink
                to="/about"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                About
              </NavLink>
            </li>
            <li className="hover:border-b  border-black">
              <NavLink
                to="/pricing"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Pricing
              </NavLink>
            </li>
            {user ? (
              <li
                onClick={() => setIsProfile(!isProfile)}
                className=" duration-500 w-[70px]  h-[70px] rounded-full ease-in-out border hover:bg-black hover:text-white border-black p-1"
              >
                <img
                  className="w-full h-full rounded-full"
                  src={user?.photoURL}
                  alt=""
                />
              </li>
            ) : (
              <li className=" duration-500 ease-in-out border  hover:bg-black hover:text-white border-black rounded px-6 py-2">
                <NavLink
                  to="/register"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  Register
                </NavLink>
              </li>
            )}
          </ul>
          <ul
            className={`bg-gray-50 w-[150px] space-y-2 shadow-md border ${
              isProfile
                ? "absolute top-[100px]  duration-700 opacity-100 rounded-lg p-4 ease-in-out right-[5%] z-50"
                : " absolute  duration-700   opacity-0 ease-in-out right-[5%] -top-[999px] "
            }`}
          >
            <li onClick={()=>setIsOpen(false)} className=" text-center">
              <NavLink
                to="/dashboard/profile"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-white bg-black" : ""
                }
              >
                Profile
              </NavLink>
            </li>
            <li onClick={()=>setIsOpen(false)} className="text-center">
              <NavLink
                to="/dashboard"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-white bg-black" : ""
                }
              >
                Dashboard
              </NavLink>
            </li>
            <li
              onClick={handleLogout}
              className=" text-center border text-red-500 rounded-lg mx-auto duration-500 ease-in-out w-max px-4 py-1 border-red-500 hover:bg-red-500 hover:text-white"
            >
              Logout
            </li>
          </ul>
        </div>
        <button className="md:hidden z-40" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <RxCross1 className="text-[30px]" />
          ) : (
            <RiMenuAddFill className="text-[30px]" />
          )}
        </button>
        <div className={` ${isOpen ? "" : "hidden"} md:hidden mx-auto `}>
          <ul className="flex flex-col bg-white inset-0 absolute transition-all duration-500 ease-in-out gap-4 justify-center items-center text-lg md:text-xl">
            <li onClick={()=>setIsOpen(false)} className="hover:border-b duration-500 ease-in-out border-black">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li onClick={()=>setIsOpen(false)} className="hover:border-b duration-500 ease-in-out border-black">
              <NavLink
                to="/about"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                About
              </NavLink>
            </li>
            <li onClick={()=>setIsOpen(false)} className="hover:border-b duration-500 ease-in-out border-black">
              <NavLink
                to="/pricing"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Pricing
              </NavLink>
            </li>
            <li onClick={()=>setIsOpen(false)} className=" duration-500 ease-in-out border hover:bg-black hover:text-white border-black rounded-lg px-6 py-2">
              <NavLink
                to="/register"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Register
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default Nav;