import React from "react";

const Table = () => {
  return (
    <div>
      <div className="">
        <table className="w-full md:min-w-[1000px] min-w-[1000px]   ">
          <thead className="">
            <tr className="font-semibold text-light text-[16px] border-b-[1px] border-gray-200">
              <td className="text-primary leaderboardtd text-start">No.</td>
              <td className="text-primary leaderboardtd text-start">Name</td>
              <td className="text-primary leaderboardtd text-center">
                Start date
              </td>
              <td className="text-primary leaderboardtd text-center">
                Start date
              </td>

              <td className="text-primary leaderboardtd text-center">Teams</td>
              <td className="text-primary leaderboardtd text-end">Actions</td>
            </tr>
          </thead>

          <tbody className="body font-medium">
            <tr className="text-[16px] text-primary border-b-[1px] border-gray-200">
              <td className="text-primary text-start">1</td>
              <td>
                <h4 className="w-max text-primary">African Cup of Champions</h4>
              </td>
              <td className="text-primary text-center">20-07-2023</td>
              <td className="text-primary text-center">20-07-2023</td>

              <td className="text-primary text-center">20</td>
              <td className=" text-end text-secondary">View leaderboard</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
