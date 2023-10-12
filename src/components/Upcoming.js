import React from "react";
import dribblingtest from "../assets/dribblingtest.png";

const Upcoming = () => {
  return (
    <div>
      <div className="bg-gray-100 p-[5%] lg:p-[6%] rounded-[20px]">
        <h4 className="md:font-semibold text-[16px] md:text-[18px] mb-[10px]">
          Dribbling skill testing contest
        </h4>
        <div className="flex justify-center">
          <div>
            <div className="w-full">
              <img className="w-[70%] mx-auto" src={dribblingtest} />
            </div>
            <div className="flex justify-center -mt-[15px]">
              <div className="">
                <h4 className="flex justify-center font-semibold text-[18px]">
                  13:00
                </h4>
                <h4 className="flex justify-center font-medium">Sat, 21 Nov</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
