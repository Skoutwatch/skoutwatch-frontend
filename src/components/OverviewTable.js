import React from "react";

const OverviewTable = () => {
  return (
    <div>
      <div className="">
        <div className="">
          <table className="w-full md:min-w-[1000px] min-w-[1000px]   ">
            <thead className="">
              <tr className="font-semibold text-light text-[16px] border-b-[1px] border-gray-200">
                <td className="text-primary text-start">NO.</td>
                <td className="text-primary text-start">Name</td>
                <td className="text-primary text-center">Teams</td>
                <td className="text-primary text-center">Actions</td>
              </tr>
            </thead>

            <tbody className="body font-medium">
              <tr className="text-[16px] text-primary border-b-[1px] border-gray-200">
                <td className="text-primary text-start">1</td>
                <td>
                  <h4 className="w-max text-primary">
                    Africa Cup of Champions
                  </h4>
                </td>
                <td className="text-primary text-center">20</td>
                <td className=" text-center text-secondary">
                  View leaderboard
                </td>
              </tr>
              <tr className="text-[16px] text-primary border-b-[1px] border-gray-200">
                <td className="text-primary text-start">2</td>
                <td>
                  <h4 className="w-max text-primary">
                    Africa Cup of Champions
                  </h4>
                </td>
                <td className="text-primary text-center">20</td>
                <td className=" text-center text-secondary">
                  View leaderboard
                </td>
              </tr>
              <tr className="text-[16px] text-primary border-b-[1px] border-gray-200">
                <td className="text-primary text-start">3</td>
                <td>
                  <h4 className="w-max text-primary">
                    Africa Cup of Champions
                  </h4>
                </td>
                <td className="text-primary text-center">20</td>
                <td className=" text-center text-secondary">
                  View leaderboard
                </td>
              </tr>
              <tr className="text-[16px] text-primary border-b-[1px] border-gray-200">
                <td className="text-primary text-start">4</td>
                <td>
                  <h4 className="w-max text-primary">
                    Africa Cup of Champions
                  </h4>
                </td>
                <td className="text-primary text-center">20</td>
                <td className=" text-center text-secondary">
                  View leaderboard
                </td>
              </tr>

              <tr className="text-[16px] text-primary border-b-[1px] border-gray-200">
                <td className="text-primary text-start">5</td>
                <td>
                  <h4 className="w-max text-primary">
                    Africa Cup of Champions
                  </h4>
                </td>
                <td className="text-primary text-center">20</td>
                <td className=" text-center text-secondary">
                  View leaderboard
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OverviewTable;
