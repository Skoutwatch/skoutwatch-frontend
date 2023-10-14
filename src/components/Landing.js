import React from "react";
import { NavLink } from "react-router-dom";
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

const Landing = ({ show, setShow }) => {
  return (
    <div>
      <div className="bg-white xl:px-[150px] 2xl:px-[250px] lg:px-[70px] px-[15px] md:px-[30px] pb-[50px] min-h-screen">
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
              <NavLink to="/Login">
                <h4 className="mr-[44px] text-[12px] md:text-[16px] lg:text-[16px] font-semibold">
                  {/* <NavLink to="#"> */}
                  Login
                  {/* </NavLink> */}
                </h4>
              </NavLink>
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
                <NavLink to="/Login">
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
                </NavLink>

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
        <div className="mt-[30px]">
          <h4 className="text-primary flex justify-center text-[30px] md:text-[50px] xl:text-[64px] font-semibold sm:w-2/3 mx-auto text-center leading-tight ">
            Discover the world’s top football talent.
          </h4>
          <h4 className="flex justify-center text-center text-primary font-semibold mt-[10px]">
            Connect with a community of millions of top-rated players and scouts
            around the world
          </h4>

          <div className="flex justify-center mt-[25px]">
            <button className="bg-[#EFB339] hover:bg-yellow-600 items-center px-[36px] py-[12px] rounded-[30px] text-primary font-semibold">
              Get started today
            </button>
          </div>

          <div className="mt-[30px]">
            <div className="hidden md:flex ">
              <img className="rounded-[30px]" src={tie1} />
            </div>
            <div className="flex md:hidden">
              <img className="rounded-[30px]" src={tie2} />
            </div>
          </div>
        </div>

        <div className="mt-[70px]">
          <h4 className="text-[32px] text-black font-semibold text-center flex justify-center">
            Our Partners
          </h4>
          <div className="slider flex whitespace-nowrap mt-[20px]">
            <div className=" slide-track items-center bg-white">
              <div className="slide">
                <img className="w-[110px]" src={midas} />
              </div>
              <div className="slide">
                <img className="w-[110px]" src={fate} />
              </div>
              <div className="slide">
                <img className="w-[110px]" src={sit} />
              </div>{" "}
              <div className="slide">
                <img className="w-[110px]" src={kuda} />
              </div>
              <div className="slide">
                <img className="w-[110px]" src={orange} />
              </div>
              <div className="slide">
                <img className="w-[110px]" src={sustain} />
              </div>
            </div>
            <div className=" slide-track items-center bg-white">
              <div className="slide">
                <img className="w-[110px]" src={midas} />
              </div>
              <div className="slide">
                <img className="w-[110px]" src={fate} />
              </div>
              <div className="slide">
                <img className="w-[110px]" src={sit} />
              </div>
              <div className="slide">
                <img className="w-[110px]" src={kuda} />
              </div>
              <div className="slide">
                <img className="w-[110px]" src={orange} />
              </div>
              <div className="slide">
                <img className="w-[110px]" src={sustain} />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[50px] lg:mt-[80px]">
          <h4 className="text-black flex justify-center text-[30px] md:text-[45px] xl:text-[55px] font-semibold sm:w-[90%] mx-auto text-center leading-tight">
            Connecting talents with scouts and top clubs across the globe
          </h4>
          <h4 className="flex justify-center text-center text-black font-semibold lg:font-normal mt-[10px] lg:text-[24px]">
            The top leading clubs and scouts use skoutwatch to browse lots of
            top rated players
          </h4>
          <div className="md:grid md:grid-cols-2 md:grid-rows-1 md:grid-flow-col md:gap-[20px]  xl:gap-[70px] items-center mt-[40px]">
            <div className="md:col-start-2 md:col-end-3">
              <img className="rounded-[30px]" src={hands} />
            </div>
            <div className="md:col-start-1 md:col-end-2 mt-[24px] md:mt-[0px] md:px-[0px]">
              <h4 className="lg:text-[40px] md:text-[30px] text-[24px] md:font-normal font-semibold leading-tight">
                Find African top rated players
              </h4>
              <h4 className="text-[16px] md:text-[18px] mt-[10px]">
                As African’s largest and broad network of exceptional talented
                players across African, you are able to find the perfect player
                for your club or team.
              </h4>
              <button className="mt-[30px] px-[24px] py-[12px] bg-primary rounded-[30px] text-white hover:bg-violet-950">
                Browse players
              </button>
            </div>
          </div>
        </div>

        <div>
          <h4 className="lg:text-[40px] md:text-[30px] text-[24px] md:font-normal font-semibold leading-tight xl:w-2/5 md:w-[70%] mt-[50px]">
            A better way to discover players
          </h4>
          <div className="md:grid grid-cols-3 gap-[20px] mt-[40px]">
            <div>
              <h4 className="md:text-[22px] text-[20px] font-semibold">
                The #1 platform for talented player
              </h4>
              <h4 className="mt-[10px]">
                We provide players with the tools and resources they need to
                showcase their skills and build their profiles, making it easy
                for scouts and coaches to find the perfect players for their
                teams.
              </h4>
            </div>
            <div className="mt-[30px] md:mt-[0px]">
              <h4 className="md:text-[22px] text-[20px] font-semibold">
                Special player requests
              </h4>
              <h4 className="mt-[10px]">
                we allow scouts, coaches, and agencies to request specific
                attributes, tests, or information about a certain player. This
                allow scouts to get more information on a player before they
                sign them.
              </h4>
            </div>
            <div className="mt-[30px] md:mt-[0px]">
              <h4 className="md:text-[22px] text-[20px] font-semibold">
                Top talented players
              </h4>
              <h4 className="mt-[10px]">
                you'll find a curated list of the most promising young players
                across africa, all of whom are ready to take their careers to
                the next level.
              </h4>
            </div>
          </div>
        </div>

        <div className="mt-[50px] lg:mt-[80px]">
          <h4 className="text-black flex justify-center text-[30px] md:text-[45px] xl:text-[55px] font-semibold  sm:w-[90%] w-[70%] mx-auto text-center leading-tight">
            Why you should choose us
          </h4>
          <h4 className="flex justify-center mx-auto text-center text-black font-semibold lg:font-normal mt-[10px] lg:text-[24px] md:w-[60%]">
            Join the thousands of players who have already found success on our
            platform.
          </h4>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:grid-flow-col lg:gap-[20px]  xl:gap-[70px] items-center mt-[50px]">
          <div className="lg:col-start-2 lg:col-end-3">
            <img className="rounded-[30px]" src={ballheld} />
          </div>
          <div className="lg:col-start-1 lg:col-end-2 mt-[30px]  lg:px-[0px]">
            <div>
              <div className="flex items-center">
                <BsStar className="text-[25px] lg:text-[32px] mr-[10px]" />
                <h4 className="md:text-[22px] text-[20px] font-semibold">
                  Discover world-class talents
                </h4>
              </div>
              <h4 className="mt-[10px]">
                We are the trusted choice for players and scouts alike. We have
                helped thousands of players find success at the professional
                level, and we are committed to helping even more players achieve
                their dreams.
              </h4>
            </div>
            <div className=" mt-[30px] lg:mt-[60px]">
              <div className="flex items-center">
                <BiGlobe className="text-[25px] lg:text-[32px] mr-[10px]" />
                <h4 className="md:text-[22px] text-[20px] font-semibold">
                  Global reach
                </h4>
              </div>
              <h4 className="mt-[10px]">
                We showcase Players and their skills to the world and get them
                discovered by scouts and coaches from top clubs and teams across
                the globe.
              </h4>
            </div>
            <div className="mt-[30px] lg:mt-[60px]">
              <div className="flex items-center">
                <RiCoinsLine className="text-[25px] lg:text-[32px] mr-[10px]" />
                <h4 className="md:text-[22px] text-[20px] font-semibold">
                  No placement fees
                </h4>
              </div>
              <h4 className="mt-[10px]">
                Players, scouts and coaches also benefit from our no placement
                fee policy. This means that they can find and recruit the best
                players without having to worry about paying any additional
                fees.
              </h4>
            </div>
          </div>
        </div>

        <div>
          <h4 className="lg:text-[40px] md:text-[30px] text-[24px]  font-semibold leading-tight xl:w-[50%] lg:w-[60%] md:w-[70%] mt-[70px]">
            How players can reach their full potential with Skoutwatch
          </h4>
          <div className="md:grid grid-cols-3 gap-[20px] mt-[40px]">
            <div>
              <h4 className="md:text-[22px] text-[20px] font-semibold">
                Expert Coaching
              </h4>
              <h4 className="mt-[10px]">
                Skoutwatch offers a variety of training programs led by
                experienced coaches, helping players improve their game with the
                latest techniques and drills.
              </h4>
            </div>
            <div className="mt-[30px] md:mt-[0px]">
              <h4 className="md:text-[22px] text-[20px] font-semibold">
                Video analysis
              </h4>
              <h4 className="mt-[10px]">
                Skoutwatch also offers video analysis and performance coaching
                to help players identify their areas of improvement and develop
                a plan to reach their goals.
              </h4>
            </div>
            <div className="mt-[30px] md:mt-[0px]">
              <h4 className="md:text-[22px] text-[20px] font-semibold">
                Performance coaching
              </h4>
              <h4 className="mt-[10px]">
                Skoutwatch's review services are conducted by experienced scouts
                and coaches who provide players with detailed feedback on their
                strengths and weaknesses
              </h4>
            </div>
          </div>
        </div>

        <div className="md:grid md:grid-cols-2  md:gap-[20px]  xl:gap-[70px] items-center md:mt-[90px] mt-[60px]">
          <div className="">
            <img className="rounded-[30px]" src={seated} />
          </div>
          <div className=" mt-[24px] md:mt-[0px] md:px-[0px]">
            <h4 className="lg:text-[40px] md:text-[30px] text-[24px]  font-semibold leading-tight">
              For the fans who want more.
            </h4>
            <h4 className="text-[16px] md:text-[18px] mt-[10px]">
              Our goal is to be the ultimate fan destination for Africans.
              Today, we do this by offering simplified fantasy gaming
              experiences that entertain Africa’s 400M sports fans.
            </h4>
            <button className="mt-[30px] px-[24px] py-[12px] bg-primary rounded-[30px] text-white hover:bg-violet-950">
              Skoutwatch Fantasy coming soon...
            </button>
          </div>
        </div>

        <div className="md:grid md:grid-cols-2  md:gap-[5%]  md:mt-[90px] mt-[60px]">
          <div className="bg-gray-200 rounded-[40px]  p-[10%]">
            <div className="">
              <div className="mb-[30px]">
                <button className="bg-[#EFB339] hover:bg-yellow-600 items-center px-[24px] py-[12px] rounded-[30px] text-primary font-semibold">
                  For payers
                </button>
              </div>
              <h4 className="lg:text-[40px] md:text-[30px] w-[80%] md:w-full text-[30px]  font-semibold leading-tight">
                Find your next opportunity
              </h4>
              <h4 className="text-[16px] md:text-[18px] mt-[10px]">
                Get discovered by scouts, coaches, and international teams. Sign
                up now and create your profile to showcase your skills and
                stats.
              </h4>
              <button className="mt-[30px] px-[24px] py-[12px] bg-primary rounded-[30px] text-white hover:bg-violet-950">
                Get discovered
              </button>
            </div>
          </div>

          <div className="bg-gray-200 rounded-[40px]  p-[10%] mt-[30px] md:mt-[0px]">
            <div className="">
              <div className="mb-[30px]">
                <button className="bg-[#EFB339] hover:bg-yellow-600 items-center px-[24px] py-[12px] rounded-[30px] text-primary font-semibold">
                  For Scouts
                </button>
              </div>
              <h4 className="lg:text-[40px] md:text-[30px] md:w-full w-[80%] text-[30px]  font-semibold leading-tight">
                Discover talented Players
              </h4>
              <h4 className="text-[16px] md:text-[18px] mt-[10px]">
                Discover the next generation of football stars. Sign up today
                and scout talented players from Africa
              </h4>
              <button className="mt-[30px] px-[24px] py-[12px] bg-primary rounded-[30px] text-white hover:bg-violet-950">
                Browse players
              </button>
            </div>
          </div>
        </div>

        <div className="mt-[50px] lg:mt-[80px]">
          <h4 className="text-black flex justify-center text-[30px] md:text-[45px] xl:text-[55px] font-semibold  sm:w-[60%] w-[70%] mx-auto text-center leading-tight">
            Transparent pricing for your success
          </h4>
          <h4 className="flex justify-center mx-auto text-center text-black font-semibold lg:font-normal mt-[10px] lg:text-[24px] md:w-[50%]">
            Our payment structure ensures you know exactly what you are paying
            for without any hidden fee.
          </h4>
          <div className="flex justify-center mt-[30px] p-[5px] bg-gray-200 w-fit mx-auto rounded-[30px] gap-[10px]">
            <button className="text-white bg-primary px-[20px] py-[8px] rounded-[30px]">
              Monthly
            </button>
            <button className="text-primary bg-gray px-[20px] py-[8px] rounded-[30px]">
              Yearly
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-[3%] mt-[30px]">
          <div className="rounded-[20px] p-[10%] bg-gray-100">
            <h4 className="text-[20px] lg:text-[24px]">Starter plan</h4>
            <div className="flex items-center">
              <h4 className="text-[30px] lg:text-[48px] mr-[10px] font-semibold">
                $10
              </h4>
              <h4 className="text-[20px] lg:text-[24px]">/ month</h4>
            </div>
            <h4 className="mb-[20px]">Perfect to start with Skoutwatch</h4>
            <div>
              <div className="p-[3px] bg-gray-200 rounded-[20px] mb-[10px]">
                <IoCheckmarkCircle className="text-[30px] text-primary" />
              </div>
              <div className="p-[3px] bg-gray-200 rounded-[20px] mb-[10px]">
                <IoCheckmarkCircle className="text-[30px] text-primary" />
              </div>
              <div className="p-[3px] bg-gray-200 rounded-[20px] mb-[10px]">
                <IoCheckmarkCircle className="text-[30px] text-primary" />
              </div>
              <div className="p-[3px] bg-gray-200 rounded-[20px] mb-[10px]">
                <IoCheckmarkCircle className="text-[30px] text-primary" />
              </div>
              <div className="p-[3px] bg-gray-200 rounded-[20px] mb-[10px]">
                <IoCheckmarkCircle className="text-[30px] text-primary" />
              </div>
              <div className="p-[3px] bg-gray-200 rounded-[20px] mb-[10px]">
                <IoCheckmarkCircle className="text-[30px] text-primary" />
              </div>
              <div className="p-[3px] bg-gray-200 rounded-[20px] mb-[10px]">
                <IoCheckmarkCircle className="text-[30px] text-primary" />
              </div>
            </div>
            <button className="mt-[20px] px-[24px] py-[12px] bg-primary rounded-[30px] text-white hover:bg-violet-950 w-full">
              Get started
            </button>
          </div>

          <div className="rounded-[20px] p-[10%] bg-gray-100">
            <h4 className="text-[20px] lg:text-[24px]">Lite plan</h4>
            <div className="flex items-center">
              <h4 className="text-[30px] lg:text-[48px] mr-[10px] font-semibold">
                $20
              </h4>
              <h4 className="text-[20px] lg:text-[24px]">/ month</h4>
            </div>
            <h4 className="mb-[20px]">For players and their managers</h4>
            <div>
              <div className="p-[3px] bg-gray-200 rounded-[20px] mb-[10px]">
                <IoCheckmarkCircle className="text-[30px] text-primary" />
              </div>
              <div className="p-[3px] bg-gray-200 rounded-[20px] mb-[10px]">
                <IoCheckmarkCircle className="text-[30px] text-primary" />
              </div>
              <div className="p-[3px] bg-gray-200 rounded-[20px] mb-[10px]">
                <IoCheckmarkCircle className="text-[30px] text-primary" />
              </div>
              <div className="p-[3px] bg-gray-200 rounded-[20px] mb-[10px]">
                <IoCheckmarkCircle className="text-[30px] text-primary" />
              </div>
              <div className="p-[3px] bg-gray-200 rounded-[20px] mb-[10px]">
                <IoCheckmarkCircle className="text-[30px] text-primary" />
              </div>
              <div className="p-[3px] bg-gray-200 rounded-[20px] mb-[10px]">
                <IoCheckmarkCircle className="text-[30px] text-primary" />
              </div>
              <div className="p-[3px] bg-gray-200 rounded-[20px] mb-[10px]">
                <IoCheckmarkCircle className="text-[30px] text-primary" />
              </div>
            </div>
            <button className="mt-[20px] px-[24px] py-[12px] bg-primary rounded-[30px] text-white hover:bg-violet-950 w-full">
              Get started
            </button>
          </div>

          <div className="rounded-[20px] p-[10%] bg-gray-100">
            <h4 className="text-[20px] lg:text-[24px]">Professional plan</h4>
            <div className="flex items-center">
              <h4 className="text-[30px] lg:text-[48px] mr-[10px] font-semibold">
                $50
              </h4>
              <h4 className="text-[20px] lg:text-[24px]">/ month</h4>
            </div>
            <h4 className="mb-[20px]">
              For Scouts ,coaches and their agencies{" "}
            </h4>
            <div>
              <div className="p-[3px] bg-gray-200 rounded-[20px] mb-[10px]">
                <IoCheckmarkCircle className="text-[30px] text-primary" />
              </div>
              <div className="p-[3px] bg-gray-200 rounded-[20px] mb-[10px]">
                <IoCheckmarkCircle className="text-[30px] text-primary" />
              </div>
              <div className="p-[3px] bg-gray-200 rounded-[20px] mb-[10px]">
                <IoCheckmarkCircle className="text-[30px] text-primary" />
              </div>
              <div className="p-[3px] bg-gray-200 rounded-[20px] mb-[10px]">
                <IoCheckmarkCircle className="text-[30px] text-primary" />
              </div>
              <div className="p-[3px] bg-gray-200 rounded-[20px] mb-[10px]">
                <IoCheckmarkCircle className="text-[30px] text-primary" />
              </div>
              <div className="p-[3px] bg-gray-200 rounded-[20px] mb-[10px]">
                <IoCheckmarkCircle className="text-[30px] text-primary" />
              </div>
              <div className="p-[3px] bg-gray-200 rounded-[20px] mb-[10px]">
                <IoCheckmarkCircle className="text-[30px] text-primary" />
              </div>
            </div>
            <button className="mt-[20px] px-[24px] py-[12px] bg-primary rounded-[30px] text-white hover:bg-violet-950 w-full">
              Get started
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#ECC755] mt-[150px] lg:mt-[0px] relative">
        <div>
          <img className="hidden md:flex" src={stroke} />
          <img className="md:hidden" src={stroke2} />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div>
            <h4 className="text-black flex justify-center text-[30px] md:text-[45px] xl:text-[55px] font-semibold   mx-auto text-center leading-tight">
              Get discovered today
            </h4>
            <h4 className="flex justify-center mx-auto text-center text-black font-semibold lg:font-normal mt-[10px] lg:text-[24px] ">
              Browse talented players and top scouts today.
            </h4>
            <div className="flex justify-center">
              <button className="mt-[20px] px-[24px] py-[12px] bg-primary rounded-[30px] text-white hover:bg-violet-950">
                Get started today
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white xl:px-[150px] 2xl:px-[250px] lg:px-[70px] px-[15px] md:px-[30px] pb-[50px] pt-[30px]">
        <div className=" xl:py-[25px] py-[20px] xl:flex justify-between items-center mb-[20px]">
          <div className="flex justify-center xl:justify-start xl:mx-[0px] mb-[40px] xl:mb-[0px]">
            <img className="w-[135px]" src={logo} />
          </div>
          <div className="flex md:mx-auto md:w-[80%] lg:w-[50%] justify-between mb-[30px] xl:mb-[0px]">
            <h4 className="text-gray-500 text-[12px] md:text-[16px] lg:text-[16px] font-semibold  px-[16px]">
              For player
            </h4>

            <div className=" flex items-center px-[16px]">
              <h4 className="text-gray-500 text-[12px] md:text-[16px] lg:text-[16px] font-semibold  ">
                Discover talent
              </h4>
            </div>

            <div className=" flex items-center px-[16px]">
              <h4 className="text-gray-500 text-[12px] md:text-[16px] lg:text-[16px] font-semibold  ">
                About Us
              </h4>
            </div>
            <h4 className="text-gray-500 text-[12px] md:text-[16px] lg:text-[16px] font-semibold  px-[16px]">
              Support
            </h4>
          </div>
          <div className="flex xl:gap-[20px] xl:justify-end justify-between px-[20%] md:px-[30%] xl:px-[0px] xl:mx-[0px] mx-auto ">
            <BsApple className="text-[24px]" />
            <FaGoogle className="text-[24px]" />
            <BsFacebook className="text-[24px]" />
            <BsInstagram className="text-[24px]" />
          </div>
        </div>
        <div class="border-t border-gray-200"></div>

        <h4 className="text-gray-500 flex justify-center mt-[40px]">
          &copy; 2023 skoutwatch. All Rights Reserved.
        </h4>
      </div>
    </div>
  );
};

export default Landing;
