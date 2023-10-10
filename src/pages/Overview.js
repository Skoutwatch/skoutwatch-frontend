import React from "react";
import Topplayers from "../components/Topplayers";
import ContestTable from "../components/ContestTable";
import TopplayerTable from "../components/TopplayerTable";
import { BsArrowRight } from "react-icons/bs";

const Overview = () => {
  return (
    <div className="px-[5%] md:px-[3%] pt-[90px] xl:pb-[60px] xl:pt-[30px]">
      <div>
        <Topplayers />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2%] xl:mb-[0px]  mb-[100px] mt-[30px]">
        <div className="lg:col-start-1 lg:col-end-3 overflow-x-auto overflow-y-hidden  bg-gray-100 rounded-[20px] relative">
          <h4 className="pl-[30px] text-[20px] font-semibold h-[70px] flex items-center border-b-[1px] text-primary">
            Contests
          </h4>
          <ContestTable />
          <div className="h-[60px]">
            <button className="pr-[30px] text-[16px] font-semibold  flex justify-end items-center absolute right-0 bottom-[20px] gap-[12px] text-primary">
              <h4>Show all</h4>
              <BsArrowRight className="stroke-[0.5px]" />
            </button>
          </div>
        </div>

        <div className="lg:col-start-3 lg:col-end-4 overflow-x-auto overflow-y-hidden  bg-gray-100 rounded-[20px] relative">
          <div className="pl-[30px] text-[20px] font-semibold h-[70px] flex items-center border-b-[1px] ">
            <div>
              <h4 className="text-primary">Top Players</h4>
              <h4 className="text-[16px] font-thin text-gray-500">
                Best rated players from recent matches
              </h4>
            </div>
          </div>
          <TopplayerTable />
          <div className="h-[60px]">
            <button className="pr-[30px] text-[16px] font-medium  flex justify-end items-center absolute right-0 bottom-[20px] gap-[12px] text-primary">
              <h4>Show all</h4>
              <BsArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
