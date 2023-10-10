import React from "react";
import nigeria from "../assets/nigeria.png";

const TopplayerTable = () => {
  return (
    <div>
      <div className="">
        <div className="">
          <table className="w-full">
            <tbody className="body2 w-full">
              <tr className="text-[16px] text-primary border-b-[1px] border-gray-200 w-full">
                <td className="bodytd text-primary text-end">1</td>
                <td className="bodytd flex gap-[15px]">
                  <div className="w-[60px] h-[60px] rounded-[100%] bg-gray-300 relative">
                    <img
                      className="absolute bottom-0 -right-[5px] w-[25px]"
                      src={nigeria}
                    />
                  </div>
                  <h4 className="w-max text-primary font-semibold">
                    Player's name
                  </h4>
                </td>

                <td className="bodytd text-secondary ">
                  <div className="bg-primary flex justify-center py-[5px] px-[2px] w-[40px] rounded-[10px]">
                    10
                  </div>
                </td>
              </tr>

              <tr className="text-[16px] text-primary border-b-[1px] border-gray-200 w-full">
                <td className="bodytd text-primary text-end">2</td>
                <td className="bodytd flex gap-[15px]">
                  <div className="w-[60px] h-[60px] rounded-[100%] bg-gray-300 relative">
                    <img
                      className="absolute bottom-0 -right-[5px] w-[25px]"
                      src={nigeria}
                    />
                  </div>
                  <h4 className="w-max text-primary font-semibold">
                    Player's name
                  </h4>
                </td>

                <td className="bodytd text-secondary ">
                  <div className="bg-primary flex justify-center py-[5px] px-[2px] w-[40px] rounded-[10px]">
                    10
                  </div>
                </td>
              </tr>

              <tr className="text-[16px] text-primary border-b-[1px] border-gray-200 w-full">
                <td className="bodytd text-primary text-end">3</td>
                <td className="bodytd flex gap-[15px]">
                  <div className="w-[60px] h-[60px] rounded-[100%] bg-gray-300 relative">
                    <img
                      className="absolute bottom-0 -right-[5px] w-[25px]"
                      src={nigeria}
                    />
                  </div>
                  <h4 className="w-max text-primary font-semibold">
                    Player's name
                  </h4>
                </td>

                <td className="bodytd text-secondary ">
                  <div className="bg-primary flex justify-center py-[5px] px-[2px] w-[40px] rounded-[10px]">
                    10
                  </div>
                </td>
              </tr>

              <tr className="text-[16px] text-primary border-b-[1px] border-gray-200 w-full">
                <td className="bodytd text-primary text-end">4</td>
                <td className="bodytd flex gap-[15px]">
                  <div className="w-[60px] h-[60px] rounded-[100%] bg-gray-300 relative">
                    <img
                      className="absolute bottom-0 -right-[5px] w-[25px]"
                      src={nigeria}
                    />
                  </div>
                  <h4 className="w-max text-primary font-semibold">
                    Player's name
                  </h4>
                </td>

                <td className="bodytd text-secondary ">
                  <div className="bg-primary flex justify-center py-[5px] px-[2px] w-[40px] rounded-[10px]">
                    10
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TopplayerTable;
