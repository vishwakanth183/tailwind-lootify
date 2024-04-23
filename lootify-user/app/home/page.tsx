import HomeComponent from "@/src/components/home";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white h-screen">
      <div className="w-screeen mb-3 text-black">
        Hello welcome to tailwind vk
      </div>
      <img
        src="https://images.pexels.com/photos/20123607/pexels-photo-20123607/free-photo-of-a-coffee-machine-with-a-coffee-cup-on-top.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        className="h-20 w-20 grayscale"
      />
      {/* <div className="p-5 text-green-500">hi</div> */}
    </div>
  );
};

export default Home;
