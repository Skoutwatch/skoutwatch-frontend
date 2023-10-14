import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import stroke from "../../assets/stroke.png";
import stroke3 from "../../assets/stroke3.png";
import stroke2 from "../../assets/stroke2.png";
import topplayer from "../../assets/topplayer.png";
import topplayer2 from "../../assets/topplayer2.png";
import foot from "../../assets/foot.png";
import nigeria from "../../assets/nigeria.png";
import whitestroke from "../../assets/whitestroke.png";
import { BsArrowLeftShort } from "react-icons/bs";
import { LuPencilLine } from "react-icons/lu";
import { getDataApi } from "../../utils/fetchData";
import { getOnePlayer } from "../../redux/actions/playersAction";

const Player = () => {
  const { id } = useParams();

  const { player } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOnePlayer(id));
  }, [dispatch]);

  const onePlayer = player?.player?.data;

  console.log(player);

  return (
    <div className="px-[5%] md:px-[3%] pt-[90px] xl:pb-[60px] pb-[120px] xl:pt-[30px]">
      <div className=" md:px-[3%]  xl:pb-[60px] md:pb-[3%] pb-[50px] xl:pt-[30px] md:border-gray-200 md:border-[1px] md:rounded-[50px]">
        <div className="flex justify-between py-[20px] md:py-[30px] border-b-[1px] border-gray-200 mb-[30px] items-center">
          <NavLink to="/players">
            <button className="flex items-center gap-[6px] md:gap-[10px]">
              <BsArrowLeftShort className="text-[25px] md:text-[30px]" />
              <h4 className=" text-[16px] md:text-[18px] font-semibold">
                Back
              </h4>
            </button>
          </NavLink>

          <div className="flex gap-[15px] items-center">
            <button className="flex  text-primary bg-white md:py-[10px] md:px-[16px] rounded-[30px] md:border-[1px] border-[0px] border-gray-200 font-semibold gap-[10px] items-center">
              <LuPencilLine className="text-[20px]" />
              <h4 className="hidden md:flex">Edit players profile</h4>
            </button>
            <a
              href={`https://xray.helius.xyz/token/${onePlayer?.mintAddress}?network=devnet`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="text-white text-[14px] md:text-[16px] bg-primary py-[8px] md:py-[10px] px-[12px] md:px-[16px] rounded-[30px]">
                Explore on Solscan
              </button>
            </a>
          </div>
        </div>
        <div className="bg-[#ECC755] relative rounded-[30px]">
          <div>
            <img className="hidden md:flex  h-[450px]" src={stroke} />
            <img className="sm:hidden h-[450px]" src={stroke3} />
            <img className="md:hidden hidden sm:flex h-[450px]" src={stroke2} />
          </div>
          <div className="absolute md:inset-auto inset-0 top-0 md:bottom-0 2xl:left-[3%] 2xl:right-[3%] xl:left-[3%] xl:right-[3%] flex xl:justify-start md:justify-end justify-center md:right-[4%]">
            <div className=" xl:w-[35%] 2xl:w-[32%] w-[100%] sm:w-[100%] md:w-[100%] relative">
              <img
                className="hidden xl:flex h-[450px]"
                src={onePlayer?.image}
              />
              <img
                className="flex mx-auto xl:hidden md:h-[450px] h-[200px]"
                src={onePlayer?.image}
              />
            </div>
          </div>

          <div className=" absolute inset-0 flex md:items-center top-[20px] md:bottom-[0px] items-end xl:justify-end justify-center md:justify-start  2xl:right-[6%] lg:right-[20%] right-[6%] md:right-[4%] left-[6%] xl:left-[50px]">
            <div className="">
              <div className="grid grid-cols-1 2xl:grid-cols-2   2xl:gap-[150px] items-center">
                <div>
                  <h4 className="2xl:text-[48px] lg:text-[35px] text-[25px] font-thin">
                    {onePlayer?.attributes?.first_name}
                  </h4>
                  <h4 className="2xl:text-[64px] lg:text-[40px] text-[30px]  font-semibold">
                    {onePlayer?.attributes?.last_name}
                  </h4>
                </div>

                <div>
                  <h4 className="2xl:text-[248px] text-[100px] md:text-[200px] font-extrabold">
                    {onePlayer?.attributes?.age}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-5 grid-cols-1 mt-[30px]">
          <div className="md:border-r border-t md:border-t-[0px] border-b md:border-b-[0px] border-gray-300 border-solid py-[15px] md:py-[0px]">
            <h4 className="text-[16px] text-primary flex justify-center">
              Players feet
            </h4>
            <div className="mt-[6px] ">
              <img
                className="mx-auto flex justify-center w-[33px]"
                src={foot}
              />
            </div>
          </div>

          <div className="md:border-r border-b md:border-b-[0px] border-gray-300 border-solid py-[15px] md:py-[0px]">
            <h4 className="text-[16px] text-primary flex justify-center">
              Players Position
            </h4>
            <div className="mt-[6px] flex justify-center">
              <h4 className="text-[18px] font-semibold">
                {" "}
                {onePlayer?.attributes?.player_position}
              </h4>
            </div>
          </div>

          <div className="md:border-r border-b md:border-b-[0px] border-gray-300 border-solid py-[15px] md:py-[0px]">
            <h4 className="text-[16px] text-primary flex justify-center">
              Players Age
            </h4>
            <div className="mt-[6px] flex justify-center">
              <h4 className="text-[18px] font-semibold">
                {" "}
                {onePlayer?.attributes?.age} years
              </h4>
            </div>
          </div>

          <div className="md:border-r border-b md:border-b-[0px] border-gray-300 border-solid py-[15px] md:py-[0px]">
            <h4 className="text-[16px] text-primary flex justify-center">
              Players Country
            </h4>
            <div className="mt-[6px] flex justify-center gap-[10px] items-center">
              <img className="w-[20px] h-[20px]" src={nigeria} />
              <h4 className="text-[18px] font-semibold">
                {" "}
                {onePlayer?.attributes?.nationality}
              </h4>
            </div>
          </div>

          <div className=" border-gray-300 border-solid py-[15px] md:py-[0px]">
            <h4 className="text-[16px] text-primary flex justify-center">
              Players Points
            </h4>
            <div className="mt-[6px] flex justify-center">
              <h4 className="text-[18px] font-semibold">0 points</h4>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[3%] xl:gap-[2%] mt-[30px]">
          <div className=" relative rounded-[30px] border border-solid ">
            <div>
              <img className="" src={whitestroke} />
            </div>
            <div className="absolute flex justify-start  items-center inset-0 md:left-[10%] left-[6%]">
              <div>
                <h4 className="text-[18px] font-semibold">
                  Appearance testing
                </h4>
                <h4 className="text-[100px] font-extrabold leading-[90px]">
                  0
                </h4>
              </div>
            </div>
          </div>

          <div className=" relative rounded-[30px] border border-solid ">
            <div>
              <img className="" src={whitestroke} />
            </div>
            <div className="absolute flex justify-start  items-center inset-0 md:left-[10%] left-[6%]">
              <div>
                <h4 className="text-[18px] font-semibold">Goals</h4>
                <h4 className="text-[100px] font-extrabold leading-[90px]">
                  0
                </h4>
              </div>
            </div>
          </div>

          <div className=" relative rounded-[30px] border border-solid ">
            <div>
              <img className="" src={whitestroke} />
            </div>
            <div className="absolute flex justify-start  items-center inset-0 md:left-[10%] left-[6%]">
              <div>
                <h4 className="text-[18px] font-semibold">Wins</h4>
                <h4 className="text-[100px] font-extrabold leading-[90px]">
                  0
                </h4>
              </div>
            </div>
          </div>

          <div className=" relative rounded-[30px] border border-solid ">
            <div>
              <img className="" src={whitestroke} />
            </div>
            <div className="absolute flex justify-start  items-center inset-0 md:left-[10%] left-[6%]">
              <div>
                <h4 className="text-[18px] font-semibold">Losses</h4>
                <h4 className="text-[100px] font-extrabold leading-[90px]">
                  0
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 mt-[140px] md:mt-[30px] gap-[3%] xl:gap-[2%]">
          <div className="border-[2px] border-gray-200 rounded-[20px] overflow-hidden">
            <div className="h-[10px] bg-primary"></div>
            <h4 className="px-[5%] py-[3%] text-[22px] font-semibold text-primary">
              Defence
            </h4>
            <div className="flex border-t-[1px] border-gray-200 justify-between px-[5%] py-[3%] md:text-[16px] text-primary">
              <h4>Clean sheets</h4>
              <h4>0</h4>
            </div>
            <div className=" border-t-[1px] border-gray-200 flex justify-between md:px-[5%] py-[3%] px-[10px] md:text-[16px] text-primary">
              <h4>Goals Conceded</h4>
              <h4>0</h4>
            </div>
            <div className=" border-t-[1px] border-gray-200 flex justify-between md:px-[5%] py-[3%] px-[10px] md:text-[16px] text-primary">
              <h4>Tackles</h4>
              <h4>0</h4>
            </div>
            <div className=" border-t-[1px] border-gray-200 flex justify-between md:px-[5%] py-[3%] px-[10px] md:text-[16px] text-primary">
              <h4>Tackle success %</h4>
              <h4>0%</h4>
            </div>
            <div className=" border-t-[1px] border-gray-200 flex justify-between md:px-[5%] py-[3%] px-[10px] md:text-[16px] text-primary">
              <h4>Blocked shot</h4>
              <h4>0</h4>
            </div>
            <div className=" border-t-[1px] border-gray-200 flex justify-between md:px-[5%] py-[3%] px-[10px] md:text-[16px] text-primary">
              <h4>Interceptions</h4>
              <h4>0</h4>
            </div>
            <div className=" border-t-[1px] border-gray-200 flex justify-between md:px-[5%] py-[3%] px-[10px] md:text-[16px] text-primary">
              <h4>Clearances</h4>
              <h4>0</h4>
            </div>
            <div className=" border-t-[1px] border-gray-200 flex justify-between md:px-[5%] py-[3%] px-[10px] md:text-[16px] text-primary">
              <h4>Own goals</h4>
              <h4>0</h4>
            </div>
          </div>

          <div className="border-[2px] border-gray-200 rounded-[20px] overflow-hidden">
            <div className="h-[10px] bg-primary"></div>
            <h4 className="px-[5%] py-[3%] text-[22px] font-semibold text-primary">
              Team play
            </h4>
            <div className=" border-t-[1px] border-gray-200 flex justify-between px-[5%] py-[3%] md:text-[16px] text-primary">
              <h4>Assists</h4>
              <h4>0</h4>
            </div>
            <div className=" border-t-[1px] border-gray-200 flex justify-between md:px-[5%] py-[3%] px-[10px] md:text-[16px] text-primary">
              <h4>Passes</h4>
              <h4>0</h4>
            </div>
            <div className=" border-t-[1px] border-gray-200 flex justify-between md:px-[5%] py-[3%] px-[10px] md:text-[16px] text-primary">
              <h4>Passes per match</h4>
              <h4>0</h4>
            </div>
            <div className=" border-t-[1px] border-gray-200 flex justify-between md:px-[5%] py-[3%] px-[10px] md:text-[16px] text-primary">
              <h4>Big Chances Created</h4>
              <h4>0</h4>
            </div>
            <div className=" border-t-[1px] border-gray-200 flex justify-between md:px-[5%] py-[3%] px-[10px] md:text-[16px] text-primary">
              <h4>Crosses</h4>
              <h4>0</h4>
            </div>
            <div className=" border-t-[1px] border-gray-200 flex justify-between md:px-[5%] py-[3%] px-[10px] md:text-[16px] text-primary">
              <h4>Cross accuracy %</h4>
              <h4>0%</h4>
            </div>
            <div className=" border-t-[1px] border-gray-200 flex justify-between md:px-[5%] py-[3%] px-[10px] md:text-[16px] text-primary">
              <h4>Through</h4>
              <h4>0</h4>
            </div>
            <div className=" border-t-[1px] border-gray-200 flex justify-between md:px-[5%] py-[3%] px-[10px] md:text-[16px] text-primary">
              <h4>Accurate long balls</h4>
              <h4>0</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
