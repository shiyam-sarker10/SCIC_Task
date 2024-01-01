import { TaskLottie } from '../LottieReact/LottieReact';
import { Link } from 'react-router-dom';
import useAuth from './../../hooks/useAuth';



const Banner = () => {

  const {user} = useAuth()

    
    return (
      <div className="flex  justify-center h-[calc(100vh-94px)]  items-center px-8 md:px-16 lg:px-24">
        <div className="space-y-6">
          <h1 className="text-3xl lg:w-[80%]  md:text-4xl font-semibold text-gray-900">
            Boost your productivity by 10X with Taskiee.{" "}
          </h1>
          <p className="md:w-[60%] pb-6 text-sm md:text-base text-gray-500">
            Enhance your productivity with Taskiee. Start maximizing your time
            efficiently today rather than postponing productivity.
          </p>
          <Link className='' to={`${user ? "/dashboard" : "/login"}`}>
            <button className="duration-500  text-sm md:text-base ease-in-out border hover:bg-black hover:text-white border-black rounded px-6 py-2">
              Let's Explore
            </button>
          </Link>
        </div>
        <div className="md:w-1/2 hidden md:block ">
          <TaskLottie></TaskLottie>
        </div>
      </div>
    );
};

export default Banner;