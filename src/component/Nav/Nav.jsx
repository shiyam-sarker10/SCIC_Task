import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'

const Nav = () => {
   
    return (
      <div className="flex bg-[#E4F1FF] text-[#0F2167] items-center py-4  justify-between px-8 md:px-16 lg:px-24">
        <div className="flex gap-2  items-center">
          <img className="w-[35px]" src={logo} alt="" />
          <h2 className=" font-semibold py-4 text-xl">Taskiee</h2>
        </div>
        <div className="hidden md:flex">
          <ul className="flex gap-6 md:gap-10 text-lg md:text-xl">
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
              <a href="#projects">Projects</a>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default Nav;