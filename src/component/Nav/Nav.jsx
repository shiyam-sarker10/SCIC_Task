import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { RxCross1 } from "react-icons/rx";
import { RiMenuAddFill } from "react-icons/ri";
import { useState } from 'react';
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
   
    return (
      <div className="flex  border shadow-md text-black items-center py-4  justify-between px-8 md:px-16 lg:px-24">
        <div className="hidden md:block">
          <div className="flex gap-2   items-center">
            <img className="w-[35px] filter grayscale-[100px] " src={logo} alt="" />
            <h2 className=" font-semibold py-4 text-xl">Taskiee</h2>
          </div>
        </div>
        <div className="hidden md:flex ">
          <ul className="flex gap-6 items-center md:gap-10 text-lg md:text-xl">
            <li className="hover:border-b  border-black">
              <NavLink
                to="/messages"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li className="hover:border-b  border-black">
              <NavLink
                to="/messages"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                About
              </NavLink>
            </li>
            <li className="hover:border-b  border-black">
              <NavLink
                to="/messages"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Pricing
              </NavLink>
            </li>
            <li className=" duration-500 ease-in-out border hover:bg-black hover:text-white border-black rounded px-6 py-2">
              <NavLink
                to="/messages"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Register
              </NavLink>
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
            <li className="hover:border-b duration-500 ease-in-out border-black">
              <NavLink
                to="/messages"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li className="hover:border-b duration-500 ease-in-out border-black">
              <NavLink
                to="/messages"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                About
              </NavLink>
            </li>
            <li className="hover:border-b duration-500 ease-in-out border-black">
              <NavLink
                to="/messages"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Pricing
              </NavLink>
            </li>
            <li className=" duration-500 ease-in-out border hover:bg-black hover:text-white border-black rounded-lg px-6 py-2">
              <NavLink
                to="/messages"
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