import React from "react";
import logo from "../assets/logo.png";
import intro1 from "../assets/intro1.png";
import intro2 from "../assets/intro2.png";
import intro3 from "../assets/intro3.png";
import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { GrClose } from "react-icons/gr";

const Intro = ({ show, setShow }) => {
  return (
    <div className="bg-amber-50 xl:px-[150px] 2xl:px-[250px] lg:px-[70px] px-[15px] md:px-[30px] pb-[50px] min-h-screen">
      <div>
        <div className=" lg:py-[25px] py-[20px] flex justify-between items-center ">
          <div>
            <img className="w-[135px]" src={logo} />
          </div>
          <div className="xl:flex hidden w-2/5 justify-between">
            <h4 className="text-black text-[12px] md:text-[16px] lg:text-[16px] font-medium  px-[16px]">
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
              <h4 className="text-black text-[12px] md:text-[16px] lg:text-[16px] font-medium  ">
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
              <h4 className="text-black text-[12px] md:text-[16px] lg:text-[16px] font-medium  ">
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
            <h4 className="text-black text-[12px] md:text-[16px] lg:text-[16px] font-medium  px-[16px]">
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
            <h4 className="mr-[44px] text-[12px] md:text-[16px] lg:text-[16px] font-medium">
              {/* <NavLink to="#"> */}
              Login
              {/* </NavLink> */}
            </h4>
            <button className="bg-primary hover:bg-violet-950 flex items-center px-[36px] py-[12px] rounded-[30px]">
              <h4 className="text-white text-[12px] md:text-[16px] lg:text-[16px] font-normal ">
                {/* <NavLink to="#"> */}
                Register
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
          className={`top-0 left-0 z-40 absolute bg-amber-50  w-full h-screen lg:px-[70px] px-[15px] md:px-[30px] xl:hidden ${
            show ? "translate-y-0" : "-translate-y-[1300px]"
          } ease-in-out duration-500`}
        >
          <div className="bg-amber-50  lg:py-[16px] py-[20px] flex justify-between items-center xl:hidden">
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
                  className="text-black text-[12px] md:text-[16px] lg:text-[16px] font-medium mr-[8px] lg:px-[16px] flex justify-center hover:cursor-pointer"
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
                  className="text-black text-[12px] md:text-[16px] lg:text-[16px] font-medium mr-[8px] hover:cursor-pointer flex justify-center"
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
                  className="text-black text-[12px] md:text-[16px] lg:text-[16px] font-medium mr-[8px] hover:cursor-pointer flex justify-center"
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
                  className="text-black text-[12px] md:text-[16px] lg:text-[16px] font-medium mr-[8px] lg:px-[16px] flex justify-center  hover:cursor-pointer"
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
                  className="text-black text-[12px] md:text-[16px] lg:text-[16px] font-medium mr-[8px] lg:px-[16px] flex justify-center  hover:cursor-pointer"
                >
                  {/* <NavLink to="#"> */}
                  Login
                  {/* </NavLink> */}
                </h4>
              </div>

              <div className="flex justify-center">
                <div className="h-[70px] min-h-fit ">
                  <button
                    onClick={() => setShow(!show)}
                    className="bg-primary hover:bg-violet-950 flex items-center px-[36px] py-[12px] rounded-[30px]"
                  >
                    <h4 className="text-white text-[12px] md:text-[16px] lg:text-[16px] font-normal ">
                      {/* <NavLink to="#"> */}
                      Register
                      {/* </NavLink> */}
                    </h4>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[30px]">
        <h4 className="text-primary flex justify-center text-[30px] md:text-[50px] xl:text-[64px] font-medium md:font-normal sm:w-2/3 mx-auto text-center leading-tight">
          Discover the world’s top football talent.
        </h4>
        <h4 className="flex justify-center text-center text-primary font-medium mt-[10px]">
          Connect with a community of millions of top-rated players and scouts
          around the world
        </h4>

        <div className="flex justify-center mt-[25px]">
          <button className="bg-primary hover:bg-violet-950  items-center px-[36px] py-[12px] rounded-[30px] text-white">
            Get started today
          </button>
        </div>
      </div>

      <div className="flex justify-between mt-[30px]">
        <div className="sm:pr-[100px] pr-[20px]">
          <img src={intro1} />
        </div>
        <div>
          <img src={intro2} />
        </div>
        <div className="sm:pl-[100px] pl-[20px]">
          <img src={intro3} />
        </div>
      </div>
    </div>
  );
};

export default Intro;
