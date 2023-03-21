import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { BiRss } from "react-icons/bi";
import { IoLogoDiscord } from "react-icons/io5";

export const Profile = () => {
  return (
    <>
      <div className="avatar flex justify-center items-center">
        <div className="mask mask-hexagon  mt-20 w-40 h-40">
          <img className=" object-contain" src="/Avatar.png" />
        </div>
      </div>
      <div className="columns-3 flex flex-col items-center">
        <p className="text-3xl font-bold my-5">Takuya 🐋</p>
        <p className="text-lg">Road to Full-stack developer</p>
        <div className="my-4"></div>
        <div className="flex mt-5">
          <AiFillTwitterCircle className=" w-10 h-10 mx-3" />
          <IoLogoDiscord className=" w-10 h-10 mx-3" />
          <AiOutlineGithub className=" w-10 h-10 mx-3" />
          <BiRss className=" w-10 h-10 mx-3" />
        </div>
      </div>
    </>
  );
};
