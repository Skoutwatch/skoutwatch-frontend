import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const sliderData = [
  {
    category: "Pacing skill",
    slides: [
      { value: 30, name: "Acceleration" },
      { value: 40, name: "Sprint speed" },
    ],
  },
  {
    category: "Shooting skill",
    slides: [
      { value: 30, name: "Positioning" },
      { value: 40, name: "Finishing" },
      { value: 50, name: "Shot power" },
      { value: 70, name: "Long shots" },
      { value: 50, name: "Volleys" },
      { value: 90, name: "Penalties" },
    ],
  },
  {
    category: "Passing skill",
    slides: [
      { value: 20, name: "Vision" },
      { value: 60, name: "Crossing" },
      { value: 80, name: "Freekick" },
      { value: 70, name: "Short passing" },
      { value: 67, name: "Long passing" },
      { value: 43, name: "Curving" },
    ],
  },
  {
    category: "Dribbling skill",
    slides: [
      { value: 10, name: "Agility" },
      { value: 50, name: "Balance" },
      { value: 70, name: "Reaction" },
      { value: 50, name: "Ball control" },
      { value: 70, name: "Dribbling" },
    ],
  },
  {
    category: "Defending skill",
    slides: [
      { value: 40, name: "Interception" },
      { value: 76, name: "Head accuracy" },
      { value: 90, name: "Defense awareness" },
      { value: 43, name: "Standing tackle" },
      { value: 27, name: "Sliding tackle" },
    ],
  },
  {
    category: "Physicality skill",
    slides: [
      { value: 50, name: "Jumping" },
      { value: 80, name: "Stamina" },
      { value: 30, name: "Strength" },
      { value: 95, name: "Aggression" },
    ],
  },
];

const AddAttribute = () => {
  const [sliderValues, setSliderValues] = useState(sliderData);

  const handleSliderChange = (index, innerIndex, value) => {
    const newSliderValues = [...sliderValues];
    if (newSliderValues[index] && newSliderValues[index].slides) {
      newSliderValues[index].slides[innerIndex].value = value;
      setSliderValues(newSliderValues);
    }
  };

  return (
    <div className="px-[5%] md:px-[3%] pt-[90px] xl:pb-[60px] pb-[50px] xl:pt-[30px]">
      <div className=" md:px-[3%]  xl:pb-[60px] md:pb-[3%] pb-[50px] xl:pt-[30px] md:border-gray-200 md:border-[1px] md:rounded-[50px]">
        <div className=" py-[20px] md:py-[30px] border-b-[1px] border-gray-200 mb-[30px] items-center">
          <h4 className=" text-[16px] md:text-[18px] font-semibold">
            Add Player attributes
          </h4>
        </div>

        <form className="">
          <div className="md:grid md:grid-cols-2 gap-[2%] ">
            <div className=" mt-[20px]">
              <h4 className="mb-[6px] text-[16px]  text-primary font-semibold">
                Player ID
              </h4>
              <input
                className="border border-light w-full placeholder:text-[16px] placeholder:text-light px-[16px] py-[12px] rounded-[20px] outline-primary text-primary "
                type="name"
                name="player_id"
                id="player_id"
                placeholder="Enter player ID"
                // onChange={handleChangeInput}
                // value={player_id}
                required
              />
            </div>
            <div className=" mt-[20px]">
              <h4 className="mb-[6px] text-[16px]  text-primary font-semibold">
                Contest ID
              </h4>
              <input
                className="border border-light w-full placeholder:text-[16px] placeholder:text-light px-[16px] py-[12px] rounded-[20px] outline-primary text-primary "
                type="name"
                name="contest_id"
                id="contest_id"
                placeholder="Enter contest ID"
                // onChange={handleChangeInput}
                // value={contest_id}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] mt-[30px] ">
            {sliderValues.map((sliders, index) => (
              <div>
                <div
                  key={index}
                  className="border-[2px] border-gray-200 rounded-[20px] overflow-hidden  h-fit"
                >
                  <div>
                    <div className="h-[10px] bg-primary"></div>
                    <h4 className="px-[5%] py-[3%] text-[22px] font-semibold text-primary">
                      {sliders.category}
                    </h4>
                    {sliders.slides.map((slider, innerIndex) => (
                      <div
                        key={innerIndex}
                        className=" border-t-[1px] border-gray-200 flex  px-[5%] py-[20px] md:text-[16px] text-primary items-center gap-[6%] justify-between"
                      >
                        <h2>{slider.name}</h2>
                        <div className="w-[40%]">
                          <Slider
                            min={0}
                            max={100}
                            value={slider.value}
                            onChange={(value) =>
                              handleSliderChange(index, innerIndex, value)
                            }
                            // marks={{ 0: "0%", 100: "100%" }}
                            trackStyle={{
                              backgroundColor: "#231546",
                              height: 6,
                            }} // Customize the track style
                            handleStyle={{
                              borderColor: "#231546",
                              height: 16,
                              width: 16,
                              marginLeft: -6,
                              marginTop: -5,
                              backgroundColor: "#231546",
                            }} // Customize the handle style
                            railStyle={{
                              backgroundColor: "lightgray",
                              height: 6,
                            }}
                          />
                        </div>
                        <h2>{slider.value}%</h2>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end mt-[40px]">
            <h4 className="border-[2px] border-[#E2EFE4] text-primary px-[16px] py-[10px] rounded-[30px] mr-[15px] font-semibold cursor-pointer">
              Cancel
            </h4>

            <button className=" text-white bg-primary px-[16px] py-[10px] rounded-[30px] ">
              Save changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAttribute;
