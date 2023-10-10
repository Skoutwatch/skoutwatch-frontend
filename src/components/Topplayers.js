import React from "react";
import stroke from "../assets/stroke.png";
import stroke3 from "../assets/stroke3.png";
import stroke2 from "../assets/stroke2.png";
import topplayer from "../assets/topplayer.png";
import topplayer2 from "../assets/topplayer2.png";
import { MdShowChart } from "react-icons/md";
import { PiFlagDuotone } from "react-icons/pi";
import { RiShieldCheckLine } from "react-icons/ri";
import shield from "../assets/shield.png";
import flag from "../assets/flag.png";
import routing from "../assets/routing.png";

const Topplayers = () => {
  return (
    <div>
      <div className="bg-[#ECC755] relative rounded-[30px]">
        <div>
          <img className="hidden md:flex  h-[450px]" src={stroke} />
          <img className="sm:hidden" src={stroke3} />
          <img className="md:hidden hidden sm:flex" src={stroke2} />
        </div>
        <div className="absolute bottom-0 2xl:left-[3%] 2xl:right-[3%] xl:left-[10px] xl:right-[10px] flex xl:justify-start md:justify-end justify-center right-[2%]">
          <div className=" xl:w-[35%] 2xl:w-[32%] w-[60%] sm:w-[45%] md:w-[50%] relative">
            <img className="hidden xl:flex" src={topplayer} />
            <img className="flex xl:hidden" src={topplayer2} />
            <div className="absolute bottom-[30px] inset-x-0 flex  justify-center ">
              <div className="hidden md:flex">
                <div>
                  <h4 className="text-[28px] xl:text-[32px] font-medium text-white">
                    Cameron Williamson
                  </h4>
                  <div className="flex justify-between items-center">
                    <h4 className="text-white lg:text-[18px]">Mid-fielder</h4>
                    <div className="bg-white flex justify-between items-center gap-[3px] py-[4px] px-[6px] rounded-[10px]">
                      <MdShowChart className="text-[25px]" />
                      <h4>9.6</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" absolute inset-0 flex md:items-center bottom-[20px] md:bottom-[0px] items-end xl:justify-end justify-center md:justify-start  2xl:right-[6%] right-[6%] md:right-[4%] left-[6%] xl:left-[50px]">
          <div>
            <div className="md:grid md:grid-cols-2">
              <div className="xl:flex hidden">
                <div className="border-r border-gray-300 ">
                  <div className="bg-white px-[30px] py-[8px] rounded-tl-[20px] ">
                    <h4 className=" text-[20px] font-semibold ">
                      Characteristic
                    </h4>
                  </div>
                  <div className="bg-[#FFFFFF40] px-[30px] py-[16px] rounded-bl-[20px] grid grid-cols-1 gap-y-[30px] h-[280px]">
                    <div className="flex justify-between lg:gap-[40px] 2xl:gap-[80px] gap-[20px]">
                      <div>
                        <h4 className="text-[20px] font-medium">Strength</h4>
                        <div className="flex gap-[6px] items-center mt-[7px] ">
                          <img className="w-[24px]" src={shield} />{" "}
                          <h4 className=" font-light ">
                            Defensive contribution
                          </h4>
                        </div>
                      </div>
                      <div className="text-white bg-[#469E0D] h-[35px] flex items-center rounded-[30px] px-[10px] font-light text-[14px] w-[100px] justify-center">
                        <h4>Very strong</h4>
                      </div>
                    </div>

                    <div className="flex justify-between lg:gap-[40px] 2xl:gap-[80px] gap-[20px]">
                      <div>
                        <h4 className="text-[20px] font-medium">Weakness</h4>
                        <div className="flex gap-[6px] items-center mt-[7px] ">
                          <img className="w-[24px]" src={flag} />{" "}
                          <h4 className=" font-light ">Crossing</h4>
                        </div>
                      </div>
                      <div className="text-white bg-[#F5C461] h-[35px] flex items-center rounded-[30px] px-[10px] font-light text-[14px] w-[100px] justify-center">
                        <h4>Weak</h4>
                      </div>
                    </div>

                    <div className="flex justify-between lg:gap-[40px] 2xl:gap-[80px] gap-[20px]">
                      <div>
                        <h4 className="text-[20px] font-medium">
                          Style of playing
                        </h4>
                        <div className="flex gap-[6px] items-center mt-[7px] ">
                          <img className="w-[24px]" src={routing} />{" "}
                          <h4 className=" font-light ">Likes to do layoffs</h4>
                        </div>
                      </div>
                      <div className="text-white bg-[#469E0D] h-[35px] flex items-center rounded-[30px] px-[10px] font-light text-[14px] w-[100px] justify-center">
                        <h4>Very strong</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="xl:w-full md:w-[350px] w-[300px]">
                <div className="bg-white md:px-[30px] px-[15px] py-[8px] rounded-tr-[20px] rounded-tl-[20px] xl:rounded-tl-[0px]">
                  <h4 className="lg:text-[20px] md:text-[18px] text-[16px] font-semibold">
                    Passing direction
                  </h4>
                </div>
                <div className="bg-[#FFFFFF40] md:px-[30px] px-[15px] py-[16px] rounded-br-[20px] rounded-bl-[20px] xl:rounded-bl-[0px] grid grid-cols-1 sm:gap-y-[20px] gap-y-[15px] xl:h-[280px] md:h-[230px]">
                  <div className="flex justify-between items-center gap-[15px] ">
                    <h4 className="lg:text-[20px] font-medium">Backward</h4>
                    <div className="flex items-center gap-[15px] w-full">
                      <div className="flex justify-end w-full">
                        <div className="md:h-[15px] h-[7px] w-full bg-gradient-to-r from-black to-gray-400 rounded-[30px]"></div>
                      </div>
                      <h4 className="lg:text-[20px] font-medium flex justify-end">
                        80%
                      </h4>
                    </div>
                  </div>

                  <div className="flex justify-between items-center gap-[15px] ">
                    <h4 className="lg:text-[20px] font-medium">Forward</h4>
                    <div className="flex items-center gap-[15px] w-full">
                      <div className="flex justify-end w-full">
                        <div className="md:h-[15px] h-[7px] w-full bg-gradient-to-r from-black to-gray-400 rounded-[30px]"></div>
                      </div>
                      <h4 className="lg:text-[20px] font-medium flex justify-end">
                        60%
                      </h4>
                    </div>
                  </div>

                  <div className="flex justify-between items-center gap-[15px] ">
                    <h4 className="lg:text-[20px] font-medium">Left</h4>
                    <div className="flex items-center gap-[15px] w-full">
                      <div className="flex justify-end w-full">
                        <div className="md:h-[15px] h-[7px] w-full bg-gradient-to-r from-black to-gray-400 rounded-[30px]"></div>
                      </div>
                      <h4 className="lg:text-[20px] font-medium flex justify-end">
                        40%
                      </h4>
                    </div>
                  </div>

                  <div className="flex justify-between items-center gap-[15px] ">
                    <h4 className="lg:text-[20px] font-medium">Right</h4>
                    <div className="flex items-center gap-[15px] w-full">
                      <div className="flex justify-end w-full">
                        <div className="md:h-[15px] h-[7px] w-full bg-gradient-to-r from-black to-gray-400 rounded-[30px]"></div>
                      </div>
                      <h4 className="lg:text-[20px] font-medium flex justify-end">
                        60%
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h4 className="absolute flex justify-center inset-0 md:justify-start top-[15px] sm:top-[20px] 2xl:left-[8%] xl:left-[50px] md:left-[6%] text-[20px] md:text-[28px] 2xl:text-[32px] font-semibold ">
          Top players in Skoutwatch
        </h4>
      </div>
    </div>
  );
};

export default Topplayers;
