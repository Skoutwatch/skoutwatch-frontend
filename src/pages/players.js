import React, { useEffect } from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";
import stroke3 from "../assets/stroke3.png";
import topplayer from "../assets/topplayer.png";
import { NavLink } from "react-router-dom";
import { getPlayers } from "../redux/actions/playersAction";
import { useSelector, useDispatch } from "react-redux";

const Players = () => {
  const { player } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPlayers());
    console.log(player?.player?.data?.results);
  }, [dispatch]);

  return (
    <div className="px-[5%] md:px-[3%] pt-[90px] xl:pb-[60px] pb-[120px] xl:pt-[30px]">
      <div className=" md:px-[3%]  xl:pb-[60px] md:pb-[3%] pb-[50px]  md:border-gray-200 md:border-[1px] md:rounded-[50px]">
        <div className="flex justify-between py-[20px] md:py-[25px] border-b-[1px] border-gray-200 mb-[30px] items-center">
          <h4 className=" text-[16px] md:text-[18px] font-semibold">
            Players list
          </h4>
          <div className="relative ">
            <input
              className="relative py-[2px] md:py-[4px] pl-[40px] md:pl-[50px] bg-gray-100 placeholder:font-semibold placeholder:text-[#666666] placeholder:text-[14px] md:placeholder:text-[16px] w-[160px] md:w-[200px] h-[40px] md:h-[55px]  border-gray-300 outline-primary focus:outline-none  focus:bg-gray-200 text-black rounded-[30px]"
              type="text"
              name="search"
              placeholder="Search Players"
            />
            <MagnifyingGlass className="absolute left-[16px] md:left-[20px] md:top-[18px] top-[14px]  text-[16px] md:text-[20px] text-[#666666]" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[2%]">
          {player?.player?.data?.results &&
          player?.player?.data?.results?.length
            ? player?.player?.data?.results?.map((data) => (
                <div>
                  <NavLink to={`/players/${data?.id}`}>
                    <div>
                      <div className="bg-[#ECC755] relative rounded-t-[15px] ">
                        <div>
                          <img className="h-[300px]" src={stroke3} />
                        </div>
                        <div className="absolute bottom-0  justify-center left-0 right-0">
                          <div className="  relative">
                            <img
                              className="h-[300px] w-full object-contain"
                              src={data?.image}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-100 rounded-b-[15px] p-[5%]">
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="lg:text-[25px] text-[20px] font-thin">
                              {data?.attributes?.first_name}
                            </h4>
                            <h4 className="2xl:text-[40px] text-[30px]  font-semibold">
                              {data?.attributes?.last_name}
                            </h4>
                          </div>

                          <div>
                            <h4 className="lg:text-[50px] text-[35px] md:text-[50px] font-extrabold">
                              {data?.attributes?.age}
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </NavLink>
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default Players;
