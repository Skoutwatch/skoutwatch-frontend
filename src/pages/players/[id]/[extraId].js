import React from "react";
import { BsFillCameraFill } from "react-icons/bs";

const OnePlayer = () => {
  return (
    <div className="px-[5%] md:px-[3%] pt-[90px] xl:pb-[60px] pb-[120px] xl:pt-[30px]">
      <div className=" md:px-[3%]  xl:py-[60px] md:py-[3%] py-[50px]  md:border-gray-200 md:border-[1px] md:rounded-[50px] grid lg:grid-cols-3 grid-cols-1 lg:gap-[4%]">
        <div className="lg:col-start-1 lg:col-end-2">
          <h4 className=" text-[22px] font-semibold text-primary">
            Players info
          </h4>
          <div className="my-[10px] w-[100px] h-[100px] bg-primary rounded-[100%] relative">
            <div className="absolute -bottom-[2px] -right-[2px] flex justify-center items-center w-[40px] h-[40px] rounded-[100%] border-[2px] border-white bg-gray-200">
              <BsFillCameraFill className="text-[20px]" />
            </div>
          </div>
          <h4 className=" text-[18px] font-medium text-primary">
            Add player image
          </h4>
          <div className="flex gap-[20px] items-center mt-[15px]">
            <div className="h-[10px] w-full bg-gray-100 rounded-[20px]">
              <div className="h-[10px] w-[10%] bg-primary rounded-[20px]"></div>
            </div>
            <h4 className="text-primary font-semibold">10%</h4>
          </div>

          <form className="mt-[20px]">
            <div className=" ">
              <h4 className="mb-[6px] text-[16px]  text-primary font-semibold">
                Name
              </h4>
              <input
                className="border border-light w-full placeholder:text-[16px] placeholder:text-light px-[16px] py-[12px] rounded-[20px] outline-primary text-primary "
                type="name"
                name="name"
                id="name"
                placeholder="Enter full name"
              />
            </div>
            <div className=" mt-[15px]">
              <h4 className="mb-[6px] text-[16px]  text-primary font-semibold">
                Email
              </h4>
              <input
                className="border border-light w-full placeholder:text-[16px] placeholder:text-light px-[16px] py-[12px] rounded-[20px] outline-primary text-primary "
                type="email"
                name="email"
                id="email"
                placeholder="Enter email address"
              />
            </div>
            <div className=" mt-[15px]">
              <h4 className="mb-[6px] text-[16px]  text-primary font-semibold">
                Age
              </h4>
              <input
                className="border border-light w-full placeholder:text-[16px] placeholder:text-light px-[16px] py-[12px] rounded-[20px] outline-primary text-primary "
                type="text"
                name="age"
                id="age"
                placeholder="Enter age here"
              />
            </div>
            <div className=" mt-[15px]">
              <h4 className="mb-[6px] text-[16px]  text-primary font-semibold">
                Nationality
              </h4>
              <input
                className="border border-light w-full placeholder:text-[16px] placeholder:text-light px-[16px] py-[12px] rounded-[20px] outline-primary text-primary "
                type="text"
                name="nationality"
                id="nationality"
                placeholder="Select nationality here"
              />
            </div>
            <div className=" mt-[15px]">
              <h4 className="mb-[6px] text-[16px]  text-primary font-semibold">
                Player position
              </h4>
              <input
                className="border border-light w-full placeholder:text-[16px] placeholder:text-light px-[16px] py-[12px] rounded-[20px] outline-primary text-primary "
                type="text"
                name="positio"
                id="position"
                placeholder="Enter player position"
              />
            </div>
            <div className=" mt-[15px]">
              <h4 className="mb-[6px] text-[16px]  text-primary font-semibold">
                Name
              </h4>
              <input
                className="border border-light w-full placeholder:text-[16px] placeholder:text-light px-[16px] py-[12px] rounded-[20px] outline-primary text-primary "
                type="name"
                name="name"
                id="name"
                placeholder="Enter full name"
              />
            </div>
          </form>
        </div>

        <div className="lg:col-start-2 lg:col-end-4 mt-[40px] lg:mt-[0px]">
          <div className="grid grid-cols-1 lg:mt-[0px]   lg:gap-[3%] xl:gap-[2%]">
            <div className="border-[2px] border-gray-200 rounded-[20px] overflow-hidden">
              <div className="h-[10px] bg-primary"></div>
              <h4 className="md:px-[5%] py-[3%] text-[22px] font-semibold text-primary">
                Defence
              </h4>
              <div className="flex border-t-[1px] border-gray-200 flex justify-between md:px-[5%] py-[3%] px-[10px] md:text-[16px] text-primary">
                <h4>Clean sheets</h4>
                <h4>9</h4>
              </div>
              <div className="flex border-t-[1px] border-gray-200 flex justify-between md:px-[5%] py-[3%] px-[10px] md:text-[16px] text-primary">
                <h4>Goals Conceded</h4>
                <h4>20</h4>
              </div>
              <div className="flex border-t-[1px] border-gray-200 flex justify-between md:px-[5%] py-[3%] px-[10px] md:text-[16px] text-primary">
                <h4>Tackles</h4>
                <h4>12</h4>
              </div>
              <div className="flex border-t-[1px] border-gray-200 flex justify-between md:px-[5%] py-[3%] px-[10px] md:text-[16px] text-primary">
                <h4>Tackle success %</h4>
                <h4>70%</h4>
              </div>
              <div className="flex border-t-[1px] border-gray-200 flex justify-between md:px-[5%] py-[3%] px-[10px] md:text-[16px] text-primary">
                <h4>Blocked shot</h4>
                <h4>10</h4>
              </div>
              <div className="flex border-t-[1px] border-gray-200 flex justify-between md:px-[5%] py-[3%] px-[10px] md:text-[16px] text-primary">
                <h4>Interceptions</h4>
                <h4>8</h4>
              </div>
              <div className="flex border-t-[1px] border-gray-200 flex justify-between md:px-[5%] py-[3%] px-[10px] md:text-[16px] text-primary">
                <h4>Clearances</h4>
                <h4>60</h4>
              </div>
              <div className="flex border-t-[1px] border-gray-200 flex justify-between md:px-[5%] py-[3%] px-[10px] md:text-[16px] text-primary">
                <h4>Own goals</h4>
                <h4>1</h4>
              </div>
            </div>

            <div className="border-[2px] border-gray-200 rounded-[20px] overflow-hidden">
              <div className="h-[10px] bg-primary"></div>
              <h4 className="md:px-[5%] py-[3%] text-[22px] font-semibold text-primary">
                Team play
              </h4>
              <div className="flex border-t-[1px] border-gray-200 flex justify-between md:px-[5%] py-[3%] px-[10px] md:text-[16px] text-primary">
                <h4>Assists</h4>
                <h4>9</h4>
              </div>
              <div className="flex border-t-[1px] border-gray-200 flex justify-between md:px-[5%] py-[3%] px-[10px] md:text-[16px] text-primary">
                <h4>Passes</h4>
                <h4>2340</h4>
              </div>
              <div className="flex border-t-[1px] border-gray-200 flex justify-between md:px-[5%] py-[3%] px-[10px] md:text-[16px] text-primary">
                <h4>Passes per match</h4>
                <h4>20.1</h4>
              </div>
              <div className="flex border-t-[1px] border-gray-200 flex justify-between md:px-[5%] py-[3%] px-[10px] md:text-[16px] text-primary">
                <h4>Big Chances Created</h4>
                <h4>7</h4>
              </div>
              <div className="flex border-t-[1px] border-gray-200 flex justify-between md:px-[5%] py-[3%] px-[10px] md:text-[16px] text-primary">
                <h4>Crosses</h4>
                <h4>70</h4>
              </div>
              <div className="flex border-t-[1px] border-gray-200 flex justify-between md:px-[5%] py-[3%] px-[10px] md:text-[16px] text-primary">
                <h4>Cross accuracy %</h4>
                <h4>30%</h4>
              </div>
              <div className="flex border-t-[1px] border-gray-200 flex justify-between md:px-[5%] py-[3%] px-[10px] md:text-[16px] text-primary">
                <h4>Through</h4>
                <h4>6</h4>
              </div>
              <div className="flex border-t-[1px] border-gray-200 flex justify-between md:px-[5%] py-[3%] px-[10px] md:text-[16px] text-primary">
                <h4>Accurate long balls</h4>
                <h4>90</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnePlayer;
