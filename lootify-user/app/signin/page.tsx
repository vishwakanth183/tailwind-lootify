import React from "react";
// import { MdDarkMode } from "react-icons/md";
// import { FaArrowRightFromBracket } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

const Signin = () => {
  const sample =
    "https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=600";
  // const facebook =

  return (
    <div className="bg-blue-100 h-screen flex flex-col md:flex-row justify-center items-center">
      <div className="bg-white border-black-800 shadow-xl shadow-white-100 rounded-md flex md:flex-row">
        {/* Left View */}
        <div className="p-10">
          {/* Login text */}
          <div className="text-3xl text-black font-bold">Login</div>

          {/* Login description */}
          <div className="text-zinc-400 font-normal text-sm mt-5 w-80">
            Secure your ideal travel haven. Log in to our platform and unlock a
            world of exceptional hotels
          </div>

          {/* Email Input */}
          <input
            type="text"
            placeholder="Enter Email"
            className="mt-3 mb-3 w-full border border-grey-100 p-4 focus:outline-none placeholder:font-light text-black"
          />

          {/* Forgot password & Next button */}
          {/* <div className="mt-2 flex md:flex-row justify-end items-center"> */}
          {/* <div className="text-sm font-bold text-gray-500">
              Forgot Password?
            </div> */}
          {/* <button className="px-6 py-3 bg-blue-500 text-white rounded-lg">Next</button> */}
          {/* </div> */}

          <div className="flex flex-row justify-between items-center">
            <button className="flex flex-row justify-between items-center px-6 py-3 bg-teal-700 rounded-md shadow-xl border border-zinc-200 hover:scale-105 duration-150">
              <div className="text-white text-center font-normal text-md">
                Next
              </div>
              <FaArrowRightLong color="white" className="h-4 w-4 ml-3" />
            </button>
            <button className="text-sm font-bold text-gray-500 hover:scale-105 duration-150">
              Forgot Password?
            </button>
          </div>

          {/* Divider view */}
          <div className="border border-zinc-100 mt-5 mb-5"></div>
          <div className="text-sm font-light text-black text-center">
            Or log in with
          </div>
          {/* <div className="border border-zinc-100 mt-5 mb-5"></div> */}

          {/* Social buttons */}
          <div className="w-full flex md:flex-row justify-around items-center mt-5">
            <button className="px-6 py-3 flex md:flex-row items-center bg-blue-700 rounded-md shadow-xl border border-zinc-200 hover:scale-105 duration-150">
              <img
                src="/icon-facebook.svg"
                alt="facebook"
                className="h-5 w-5 mr-2"
              />
              <div className="text-white text-center font-normal text-md">
                Facebook
              </div>
            </button>

            <button className="px-6 py-3 flex md:flex-row items-center bg-green-700 rounded-md shadow-xl border border-zinc-200 hover:scale-105 duration-150">
              <img
                src="/icon-google.svg"
                alt="facebook"
                className="h-5 w-5 mr-2"
              />
              <div className="text-white text-center font-normal text-md">
                Google
              </div>
            </button>
          </div>
        </div>
        {/* Right View */}
        <div className="hidden md:block">
          <img src={sample} alt="img" className="w-[450px] h-[100%]" />
        </div>
      </div>
    </div>
  );
};

export default Signin;
