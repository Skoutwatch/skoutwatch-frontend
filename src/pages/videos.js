import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import Videos from "../components/Videos";
import { AiFillCaretDown } from "react-icons/ai";
import VideoTable from "../components/VideoTable";

const CustomPrevArrow = (props) => (
  <button {...props} className="custom-arrow custom-prev-arrow z-40">
    <AiOutlineLeft />
  </button>
);

const CustomNextArrow = (props) => (
  <button {...props} className="custom-arrow custom-next-arrow">
    <AiOutlineRight />
  </button>
);

const Video = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  const Menus = [
    {
      name: "All Videos",
      dis: "translate-x-[30px]",
      width: "w-[120px]",
      font: "font-semibold",
    },
    {
      name: "Training Videos",
      dis: "translate-x-[160px]",
      width: "w-[140px]",
      font: "font-semibold",
      show: "block",
    },
    {
      name: "Tournament Videos",
      dis: "translate-x-[310px]",
      width: "w-[170px]",
      font: "font-semibold",
    },
    {
      name: "Players Videos",
      dis: "translate-x-[500px]",
      width: "w-[140px]",
      font: "font-semibold",
    },
  ];

  const [active, setActive] = useState(0);
  const [show, setShow] = useState(false);

  return (
    <div className="px-[5%] md:px-[3%] pt-[90px] xl:pb-[60px] xl:pt-[30px] pb-[100px]">
      <div className="text-primary">
        <h4 className="text-[22px]  sm:text-[30px] font-semibold ml-[2%]">
          Free Videos
        </h4>
      </div>

      <div className="lg:grid grid-cols-3 mt-[10px] gap-[2%] hidden">
        <Videos />
        <Videos />
        <Videos />
      </div>

      <div className="">
        <div className="lg:hidden mt-[20px] ">
          <Slider {...settings}>
            <Videos />
            <Videos />
            <Videos />
          </Slider>
        </div>
      </div>

      <div>
        <div className="text-primary">
          <h4 className="text-[22px]  sm:text-[30px] font-semibold mt-[40px] md:mt-[20px] mb-[5px] ml-[2%]">
            Premium Videos
          </h4>
        </div>

        <div className="bg-gray-100 rounded-[20px]">
          <div className="md:flex hidden w-full">
            <div className="w-full">
              <ul className="flex relative ml-[50px] mb-[30px] pt-[30px]">
                {Menus.map((menu, i) => (
                  <li key={i} className="flex mr-[50px]">
                    <h4
                      className={`cursor-pointer   ${
                        i === active && "font-semibold text-secondary"
                      } ${i !== active && "text-gray-600 text-medium"}`}
                      onClick={() => setActive(i)}
                    >
                      {menu.name}
                    </h4>
                  </li>
                ))}
              </ul>
              <div className="bg-gray-200 w-full h-[2px] ">
                <ul className="flex relative rounded-full">
                  <div
                    className={` duration-500 ${Menus[active].dis}  border-2 border-secondary ${Menus[active].width} absolute
          `}
                  ></div>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex md:hidden px-[30px] pt-[30px] w-full">
            <div className="flex items-start justify-between w-full">
              <div>
                <div>
                  <ul className="  ">
                    {Menus.map((menu, i) => (
                      <li
                        key={i}
                        className={`py-[10px] ${
                          i !== active && show && " hidden"
                        }`}
                      >
                        <h4
                          className={`cursor-pointer   ${
                            i === active && "font-semibold text-secondary"
                          } ${i !== active && "text-gray-600 text-medium"}`}
                          onClick={() => {
                            setActive(i);
                            setShow(!show);
                          }}
                        >
                          {menu.name}
                        </h4>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <AiFillCaretDown
                  onClick={() => setShow(!show)}
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div className="flex md:hidden"></div>
          <div
            className={` overflow-x-auto  md:h-[calc(70vh-10.75rem)] h-[calc(80vh-10.75rem)]`}
          >
            {Menus[active].name === "All Videos" && (
              <VideoTable
              // show=""
              // visible="visible"
              //   status={status}
              //   id=""
              //   amount=""
              //   title=""
              //   pageNumber={1}
              // search={search}
              />
            )}
            {Menus[active].name === "Training Videos" && (
              <VideoTable
              //   show="Sucesssful"
              //   visible="hidden"
              //   status={status}
              //   id=""
              //   amount=""
              //   title=""
              //   pageNumber={1}
              //   search={search}
              />
            )}
            {Menus[active].name === "Tournament Videos" && (
              <VideoTable
              //   show="Tournament Videos"
              //   visible="hidden"
              //   status={status}
              //   id=""
              //   amount=""
              //   title=""
              //   pageNumber={1}
              //   search={search}
              />
            )}
            {Menus[active].name === "Players Videos" && (
              <VideoTable
              //   show="Players Videos"
              //   visible="hidden"
              //   status={status}
              //   id=""
              //   amount=""
              //   title=""
              //   pageNumber={1}
              //   search={search}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
