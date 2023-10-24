import React from "react";
import Upcoming from "../components/Upcoming";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import ContestTable from "../components/ContestTable";

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

const Contest = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="px-[5%] md:px-[3%] pt-[90px] xl:pb-[60px] xl:pt-[30px] pb-[100px]">
      <div className="text-primary">
        <h4 className="text-[24px]  sm:text-[30px] font-semibold">
          Upcoming Matches
        </h4>
        <h4 className="text-[16px]">Matches from ongoing contests</h4>
      </div>

      <div className="lg:grid grid-cols-3 mt-[20px] gap-[2%] hidden">
        <Upcoming date="11" />
        <Upcoming date="18" />
        <Upcoming date="21" />
      </div>

      <div className="lg:hidden mt-[20px]">
        <Slider {...settings}>
          <Upcoming date="11" />
          <Upcoming date="18" />
          <Upcoming date="21" />
        </Slider>
      </div>

      <div className="mt-[30px] bg-gray-100 rounded-[20px]">
        <ContestTable height="md:h-[calc(70vh-10.75rem)] h-[calc(80vh-10.75rem)]" />
      </div>
    </div>
  );
};

export default Contest;
