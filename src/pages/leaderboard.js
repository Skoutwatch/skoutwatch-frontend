import React from "react";
import LeaderBoard from "../components/LeaderBoard";

const Leaderboard = () => {
  return (
    <div className="px-[5%] md:px-[3%] pt-[90px] xl:pb-[60px] xl:pt-[30px]">
      <div className="text-primary">
        <h4 className="text-[24px]  sm:text-[30px] font-semibold">
          Leaderboard
        </h4>
        <h4 className="text-[16px]">Ranking of all players on skoutwatch</h4>
      </div>

      <div className="overflow-x-auto overflow-y-hidden  border-[2px] border-gray-100 rounded-[30px] relative mt-[30px]">
        <LeaderBoard />
      </div>
    </div>
  );
};

export default Leaderboard;
