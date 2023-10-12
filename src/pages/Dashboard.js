import React from "react";
import logo from "../assets/logo.png";
import { IoMenu } from "react-icons/io5";
import { GrClose } from "react-icons/gr";
import { BsStar } from "react-icons/bs";
import { BiGlobe } from "react-icons/bi";
import { RiCoinsLine } from "react-icons/ri";
import { IoCheckmarkCircle } from "react-icons/io5";
import { BsApple } from "react-icons/bs";
import { FaGoogle } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import tie1 from "../assets/tie1.png";
import tie2 from "../assets/tie2.png";
import midas from "../assets/midas.png";
import fate from "../assets/fate.png";
import sit from "../assets/sit.png";
import kuda from "../assets/kuda.png";
import orange from "../assets/orange.png";
import sustain from "../assets/sustain.png";
import hands from "../assets/hands.png";
import ballheld from "../assets/ballheld.png";
import seated from "../assets/seated.png";
import stroke from "../assets/stroke.png";
import stroke2 from "../assets/stroke2.png";

const dashboard = ({ show, setShow }) => {
  return (
    <div>
      <div>
        <div className=" lg:py-[25px] py-[20px] flex justify-between items-center ">
          <div>
            <img className="w-[135px]" src={logo} />
          </div>
          <div className="xl:flex hidden w-2/5 justify-between">
            <h4 className="text-black text-[12px] md:text-[16px] lg:text-[16px] font-semibold  px-[16px]">
              {/* <NavLink
          to="/about"
          style={({ isActive }) => {
            return { color: isActive ? "#2E3192" : "black" };
          }}
        > */}
              Home
              {/* </NavLink> */}
            </h4>

            <div className=" flex items-center px-[16px]">
              <h4 className="text-black text-[12px] md:text-[16px] lg:text-[16px] font-semibold  ">
                {/* <NavLink
            to="/Market"
            style={({ isActive }) => {
              return { color: isActive ? "#2E3192" : "black" };
            }}
          > */}
                Market
                {/* </NavLink> */}
              </h4>
            </div>

            <div className=" flex items-center px-[16px]">
              <h4 className="text-black text-[12px] md:text-[16px] lg:text-[16px] font-semibold  ">
                {/* <NavLink
            to="/Contact us"
            style={({ isActive }) => {
              return { color: isActive ? "#2E3192" : "black" };
            }}
          > */}
                Contact us
                {/* </NavLink> */}
              </h4>
            </div>
            <h4 className="text-black text-[12px] md:text-[16px] lg:text-[16px] font-semibold  px-[16px]">
              {/* <NavLink
          to="/contactus"
          style={({ isActive }) => {
            return { color: isActive ? "#2E3192" : "black" };
          }}
        > */}
              About
              {/* </NavLink> */}
            </h4>
          </div>
          <div className="xl:flex hidden items-center">
            <h4 className="mr-[44px] text-[12px] md:text-[16px] lg:text-[16px] font-semibold">
              {/* <NavLink to="#"> */}
              Login
              {/* </NavLink> */}
            </h4>
            <button className="bg-[#EFB339] hover:bg-yellow-600 flex items-center px-[36px] py-[12px] rounded-[30px]">
              <h4 className="text-primary text-[12px] md:text-[16px] lg:text-[16px] font-semibold ">
                {/* <NavLink to="#"> */}
                Request for a demo
                {/* </NavLink> */}
              </h4>
            </button>
          </div>
          <IoMenu
            onClick={() => setShow(!show)}
            className="xl:hidden hover:cursor-pointer text-[25px]"
          />
        </div>

        <div
          className={`top-0 left-0 z-40 absolute bg-white  w-full h-screen lg:px-[70px] px-[15px] md:px-[30px] xl:hidden ${
            show ? "translate-y-0" : "-translate-y-[1300px]"
          } ease-in-out duration-500`}
        >
          <div className="bg-white  lg:py-[16px] py-[16px] flex justify-between items-center xl:hidden">
            <div className="invisible">
              {/* <NavLink to="/"> */}
              <img src={logo} />
              {/* </NavLink> */}
            </div>

            <GrClose
              onClick={() => setShow(!show)}
              className="hover:cursor-pointer text-[25px]"
            />
          </div>
          <div className="flex justify-center">
            <div className=" xl:hidden">
              <div className="h-[70px] min-h-fit">
                <h4
                  onClick={() => setShow(!show)}
                  className="text-black text-[12px] md:text-[16px] lg:text-[16px] font-semibold mr-[8px] lg:px-[16px] flex justify-center hover:cursor-pointer"
                >
                  {/* <NavLink
              to="/about"
              style={({ isActive }) => {
                return { color: isActive ? "#2E3192" : "black" };
              }}
            > */}
                  Home
                  {/* </NavLink> */}
                </h4>
              </div>

              <div className="  lg:px-[16px] h-[70px] min-h-fit">
                <h4
                  onClick={() => setShow(!show)}
                  className="text-black text-[12px] md:text-[16px] lg:text-[16px] font-semibold mr-[8px] hover:cursor-pointer flex justify-center"
                >
                  {/* <NavLink
              to="/Market"
              style={({ isActive }) => {
                return { color: isActive ? "#2E3192" : "black" };
              }}
            > */}
                  Market
                  {/* </NavLink> */}
                </h4>
              </div>

              <div className="  lg:px-[16px] h-[70px] min-h-fit">
                <h4
                  onClick={() => setShow(!show)}
                  className="text-black text-[12px] md:text-[16px] lg:text-[16px] font-semibold mr-[8px] hover:cursor-pointer flex justify-center"
                >
                  {/* <NavLink
              to="/Contact us"
              style={({ isActive }) => {
                return { color: isActive ? "#2E3192" : "black" };
              }}
            > */}
                  Contact us
                  {/* </NavLink> */}
                </h4>
              </div>
              <div className="h-[70px] min-h-fit">
                <h4
                  onClick={() => setShow(!show)}
                  className="text-black text-[12px] md:text-[16px] lg:text-[16px] font-semibold mr-[8px] lg:px-[16px] flex justify-center  hover:cursor-pointer"
                >
                  {/* <NavLink
              to="/contactus"
              style={({ isActive }) => {
                return { color: isActive ? "#2E3192" : "black" };
              }}
            > */}
                  About
                  {/* </NavLink> */}
                </h4>
              </div>
              <div className="h-[70px] min-h-fit">
                <h4
                  onClick={() => setShow(!show)}
                  className="text-black text-[12px] md:text-[16px] lg:text-[16px] font-semibold mr-[8px] lg:px-[16px] flex justify-center  hover:cursor-pointer"
                >
                  {/* <NavLink to="#"> */}
                  Login
                  {/* </NavLink> */}
                </h4>
              </div>

              <div className="flex justify-center">
                <div className="h-[70px] min-h-fit ">
                  <button className="bg-[#EFB339] hover:bg-yellow-600 flex items-center px-[36px] py-[12px] rounded-[30px]">
                    <h4 className="text-primary text-[12px] md:text-[16px] lg:text-[16px] font-semibold ">
                      {/* <NavLink to="#"> */}
                      Request for a demo
                      {/* </NavLink> */}
                    </h4>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dashboard;
