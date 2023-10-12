import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import soccerplayer from "../assets/soccerplayer.png";
import logo2 from "../assets/logo2.png";
import left from "../assets/left.png";
import right from "../assets/right.png";

const Login = () => {
  const [typePass, setTypePass] = useState(false);

  return (
    <div className="flex">
      <div className="xl:flex hidden relative">
        <img className="h-screen p-[10px] rounded-[30px]" src={soccerplayer} />
        <div className="absolute top-[40px] left-[40px]">
          <img className="md:w-[146px] w-[88px]" src={logo2} />
        </div>
        <div className="absolute bottom-[40px] left-[40px]">
          <div className="text-white">
            <h4 className="text-[28px] font-medium w-[300px] leading-[35px] mb-[10px]">
              Find African top rated players
            </h4>
            <h4 className="w-[60%] text-[14px]">
              As African’s largest and broad network of exceptional talented
              players across African, you are able to find the perfect player
              for your club or team.
            </h4>
          </div>
        </div>
        <div className="absolute flex bottom-[40px] right-[40px] gap-[40px]">
          <img className="w-[50px] h-[50px]" src={left} />
          <img className="w-[50px] h-[50px]" src={right} />
        </div>
      </div>
      <div className="h-[calc(100vh-5.75rem)] bg-white md:flex justify-center items-center mx-auto w-[95%]  md:w-[360px] px-[16px]  py-[48px] ">
        <div className="m-auto">
          <div className="">
            <img className="md:w-[146px] w-[88px]" src={logo} />
          </div>
          <h4 className="mt-[24px] text-[20px] md:text-[30px] font-semibold text-primary ">
            Login
          </h4>
          <h4 className="text-[14px] md:text-[16px] text-light flex  mt-[8px]">
            Welcome back! Please enter your details.
          </h4>
          <form>
            <div className="mt-[32px]  md:w-[360px] ">
              <h4 className="mb-[6px] text-[12px] md:text-[14px] xl:text-[16px] text-primary font-medium">
                Email
              </h4>
              <input
                className="border border-light w-full placeholder:text-[14px] placeholder:text-light px-[14px] py-[10px] rounded-[30px] outline-primary text-primary bg-gray-100"
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                // onChange={handleChangeInput}
                // value={email}
              />
            </div>
            {/* <h2 className="text-red-400 text-[14px] mt-[10px]">
        {alert.emptyInput?.email ? alert.emptyInput?.email : ""}
      </h2> */}
            <div className="mt-[20px]  md:w-[360px] ">
              <h4 className="mb-[6px] text-[12px] md:text-[14px] xl:text-[16px] text-primary font-medium">
                Password
              </h4>
              <div className="relative">
                <input
                  className=" border border-light w-full placeholder:text-[14px] placeholder:text-light px-[14px] py-[10px] rounded-[30px] outline-primary text-primary bg-gray-100"
                  type={typePass ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  // onChange={handleChangeInput}
                  // value={password}
                />

                <small
                  className="cursor-pointer absolute top-1/2  transform  -translate-y-1/2 right-[20px] font-semibold text-primary"
                  onClick={() => setTypePass(!typePass)}
                >
                  {typePass ? "Hide" : "Show"}
                </small>
              </div>
            </div>
            {/* <h2 className="text-red-400 text-[14px] mt-[10px]">
        {alert.emptyInput?.password ? alert.emptyInput?.password : ""}
      </h2> */}
            <div className="flex mt-[24px] items-center justify-between">
              <div className="flex items-center ">
                <input
                  className="w-[15px] h-[15px] cursor-pointer rounded accent-primary"
                  name="button"
                  type="checkbox"
                  placeholder=""
                />

                <h4 className="text-[14px] ml-[8px] font-medium text-primary text-center">
                  Remember for 30 days
                </h4>
              </div>
              <h4 className="text-[14px] font-semibold text-secondary text-center">
                Forgot password
              </h4>
            </div>
            <button
              type="submit"
              className="w-full py-[12px] text-[16px] font-semibold bg-primary text-white rounded-[30px] mt-[24px] "
              // disabled={email && password ? false : true}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
