import React from "react";
import { NavLink } from "react-router-dom";
import Avatar from "./Avatar";
import logo from "../assets/logo.png";
import { MdViewComfy } from "react-icons/md";
import { BiSolidMoviePlay } from "react-icons/bi";
import { MdPersonSearch } from "react-icons/md";
import { IoCaretDownOutline } from "react-icons/io5";
import { IoMdPodium } from "react-icons/io";
import { SlBadge } from "react-icons/sl";
import { FcSettings } from "react-icons/fc";
import { MagnifyingGlass, PlusCircle, UserPlus } from "@phosphor-icons/react";

const Navbar = () => {
  return (
    <div className="">
      <div className="border-b-[1px] py-[25px] flex justify-center xl:hidden fixed  top-0  left-0 right-0 z-40 bg-white">
        <img className="w-[130px]" src={logo} />
      </div>
      <div className="  xl:flex justify-between items-center hidden px-[5%] md:px-[3%] border-b-[1px]">
        <div>
          <img className="w-[135px]" src={logo} />
        </div>
        <div className=" 2xl:w-[50%] xl:w-[60%] justify-between flex items-center">
          <div className="flex items-center ">
            <h4 className="text-black text-[12px] md:text-[16px] lg:text-[16px] font-semibold ">
              <NavLink
                className="flex items-center gap-[10px] lg:py-[30px] py-[20px]"
                to="/Overview"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "#D99A26" : "#666666",
                    borderBottomColor: isActive ? "#D99A26" : "",
                    borderBottomWidth: isActive ? "3px" : "0px",
                    borderBottomStyle: "solid",
                  };
                }}
              >
                <MdViewComfy className="text-[25px]" />
                Overview
              </NavLink>
            </h4>
          </div>

          <div className="flex items-center">
            <h4 className="text-black text-[12px] md:text-[16px] lg:text-[16px] font-semibold ">
              <NavLink
                className="flex items-center gap-[10px] lg:py-[30px] py-[20px]"
                to="/videos"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "#D99A26" : "#666666",
                    borderBottomColor: isActive ? "#D99A26" : "",
                    borderBottomWidth: isActive ? "3px" : "0px",
                    borderBottomStyle: "solid",
                  };
                }}
              >
                <BiSolidMoviePlay className="text-[25px]" />
                Videos
              </NavLink>
            </h4>
          </div>

          <div className="flex items-center">
            <h4 className="text-black text-[12px] md:text-[16px] lg:text-[16px] font-semibold ">
              <NavLink
                className="flex items-center gap-[10px] lg:py-[30px] py-[20px]"
                to="/contest"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "#D99A26" : "#666666",
                    borderBottomColor: isActive ? "#D99A26" : "",
                    borderBottomWidth: isActive ? "3px" : "0px",
                    borderBottomStyle: "solid",
                  };
                }}
              >
                <IoMdPodium className="text-[25px]" />
                Contest
              </NavLink>
            </h4>
          </div>

          <div className="flex items-center">
            <h4 className="text-black text-[12px] md:text-[16px] lg:text-[16px] font-semibold ">
              <NavLink
                className="flex items-center gap-[10px] lg:py-[30px] py-[20px]"
                to="/players"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "#D99A26" : "#666666",
                    borderBottomColor: isActive ? "#D99A26" : "",
                    borderBottomWidth: isActive ? "3px" : "0px",
                    borderBottomStyle: "solid",
                  };
                }}
              >
                <MdPersonSearch className="text-[25px]" />
                Players
              </NavLink>
            </h4>
          </div>
          <div className="flex items-center">
            <h4 className="text-black text-[12px] md:text-[16px] lg:text-[16px] font-semibold ">
              <NavLink
                className="flex items-center gap-[10px] lg:py-[30px] py-[20px]"
                to="/leaderboard"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "#D99A26" : "#666666",
                    borderBottomColor: isActive ? "#D99A26" : "",
                    borderBottomWidth: isActive ? "3px" : "0px",
                    borderBottomStyle: "solid",
                  };
                }}
              >
                Leaderboard
                <SlBadge className="text-[25px]" />
              </NavLink>
            </h4>
          </div>
          <div className="flex items-center">
            <h4 className="text-black text-[12px] md:text-[16px] lg:text-[16px] font-semibold ">
              <NavLink
                className="flex items-center gap-[10px] lg:py-[30px] py-[20px]"
                to="/addplayer"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "#D99A26" : "#666666",
                    borderBottomColor: isActive ? "#D99A26" : "",
                    borderBottomWidth: isActive ? "3px" : "0px",
                    borderBottomStyle: "solid",
                  };
                }}
              >
                Add
                <IoCaretDownOutline className="text-[25px]" />
              </NavLink>
            </h4>
          </div>
        </div>

        <div className="flex justify-between items-center gap-[30px]">
          <div className="relative ">
            <input
              className="relative py-[4px] pl-[50px] bg-gray-100 placeholder:font-semibold placeholder:text-[#666666] placeholder:text-[16px] w-[170px] h-[55px]  border-gray-300 outline-primary focus:outline-none  focus:bg-gray-200 text-black rounded-[30px]"
              type="text"
              name="search"
              placeholder="Explore"
            />
            <MagnifyingGlass className="absolute left-[20px] top-[18px]  text-[20px] text-[#666666]" />
          </div>
          <FcSettings className="text-[25px]" />
          <Avatar width="text-[50px]" />
        </div>
      </div>

      <div className=" flex xl:hidden justify-between items-center fixed  bottom-0  left-0 right-0 border-t-[1px] z-40 bg-white">
        <div className=" w-[100%] justify-between grid grid-cols-5 items-center">
          <NavLink
            className="grid justify-items-center py-[20px] w-full text-black text-[12px] md:text-[16px] lg:text-[16px] font-semibold"
            to="/Overview"
            style={({ isActive }) => {
              return {
                color: isActive ? "#D99A26" : "#666666",
                borderTopColor: isActive ? "#D99A26" : "",
                borderTopWidth: isActive ? "3px" : "0px",
                borderTopStyle: "solid",
              };
            }}
          >
            <MdViewComfy className="text-[25px]" />
            Overview
          </NavLink>

          <NavLink
            className="grid justify-items-center py-[20px] w-full text-black text-[12px] md:text-[16px] lg:text-[16px] font-semibold"
            to="/videos"
            style={({ isActive }) => {
              return {
                color: isActive ? "#D99A26" : "#666666",
                borderTopColor: isActive ? "#D99A26" : "",
                borderTopWidth: isActive ? "3px" : "0px",
                borderTopStyle: "solid",
              };
            }}
          >
            <BiSolidMoviePlay className="text-[25px]" />
            Videos
          </NavLink>

          <NavLink
            className="grid justify-items-center py-[20px] w-full text-black text-[12px] md:text-[16px] lg:text-[16px] font-semibold"
            to="/more"
            style={({ isActive }) => {
              return {
                color: isActive ? "#D99A26" : "#666666",
                borderTopColor: isActive ? "#D99A26" : "",
                borderTopWidth: isActive ? "3px" : "0px",
                borderTopStyle: "solid",
              };
            }}
          >
            <PlusCircle className="text-[25px]" />
            More
          </NavLink>

          <NavLink
            className="grid justify-items-center py-[20px] w-full text-black text-[12px] md:text-[16px] lg:text-[16px] font-semibold"
            to="/explore"
            style={({ isActive }) => {
              return {
                color: isActive ? "#D99A26" : "#666666",
                borderTopColor: isActive ? "#D99A26" : "",
                borderTopWidth: isActive ? "3px" : "0px",
                borderTopStyle: "solid",
              };
            }}
          >
            <MagnifyingGlass className="text-[25px]" />
            Explore
          </NavLink>

          <NavLink
            className="grid justify-items-center py-[20px] w-full text-black text-[12px] md:text-[16px] lg:text-[16px] font-semibold"
            to="/account"
            style={({ isActive }) => {
              return {
                color: isActive ? "#D99A26" : "#666666",
                borderTopColor: isActive ? "#D99A26" : "",
                borderTopWidth: isActive ? "3px" : "0px",
                borderTopStyle: "solid",
              };
            }}
          >
            <Avatar width="text-[25px]" />
            Account
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
