import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { FiUploadCloud } from "react-icons/fi";

const Addcontest = () => {
  const [percentage, setPercentage] = useState(50); // Initial percentage value

  const handleSliderChange = (value) => {
    setPercentage(value);
  };

  return (
    <div className="px-[5%] md:px-[3%] pt-[90px] xl:pb-[60px] pb-[120px] xl:pt-[30px]">
      <div className=" md:px-[3%]  xl:pb-[60px] md:pb-[3%] pb-[50px] xl:pt-[30px] md:border-gray-200 md:border-[1px] md:rounded-[50px]">
        <div className=" py-[20px] md:py-[30px] border-b-[1px] border-gray-200 mb-[30px] items-center">
          <h4 className=" text-[16px] md:text-[18px] font-semibold">
            Add Player
          </h4>
        </div>
        <div>
          <div className=" mt-[20px] md:mt-[0px] w-full border-[2px] border-[#E2EFE4] rounded-[20px] flex justify-center items-center py-[16px]">
            {/* {!name2 ? ( */}
            <div
            //   onDragOver={handleDragOver} onDrop={handleDrop}
            >
              <div className="flex justify-center rounded-full w-[40px] h-[40px] items-center bg-lighter mx-auto mb-[12px]">
                <FiUploadCloud className="text-primary text-[30px]" />
              </div>
              <div className="flex justify-center">
                <h4
                  // onClick={() => inputRef.current.click()}
                  className="font-semibold text-primary  cursor-pointer text-[18px]"
                >
                  Click here to upload Player image
                </h4>
                {/* <h4 className="text-light">or drag and drop</h4> */}
              </div>
              <input
                type="file"
                multiple
                accept=".png, .jpg, .jpeg, .pdf, .svg, .gif, .doc, .docx"
                //   onChange={handleSubmit}
                name="file"
                hidden
                //   ref={inputRef}
              />
              <h4 className="flex justify-center mt-[4px] text-light text-center px-[10px]">
                PNG, JPG up to 5MB
              </h4>
            </div>
            {/* ) : ( */}
            <div className="px-[20px]">
              <ol>
                {/* {Array.from(files).map((file, index) => ( */}
                <li
                  className="text-primary"
                  //  key={index}
                >
                  {/* {name2.name} */}
                </li>
                {/* ))} */}
              </ol>
            </div>
            {/* )} */}
          </div>
        </div>
        <div className=" py-[20px] md:py-[30px] border-b-[1px] border-gray-200 mb-[30px] items-center">
          <h4 className=" text-[16px] md:text-[18px] font-semibold">
            Player info
          </h4>
        </div>

        <form className="">
          <div className="md:grid md:grid-cols-2 gap-[2%] ">
            <div className=" mt-[20px]">
              <h4 className="mb-[6px] text-[16px]  text-primary font-semibold">
                First name
              </h4>
              <input
                className="border border-light w-full placeholder:text-[16px] placeholder:text-light px-[16px] py-[12px] rounded-[20px] outline-primary text-primary "
                type="name"
                name="first_name"
                id="first_name"
                placeholder="Enter first name"
              />
            </div>
            <div className=" mt-[20px]">
              <h4 className="mb-[6px] text-[16px]  text-primary font-semibold">
                Last name
              </h4>
              <input
                className="border border-light w-full placeholder:text-[16px] placeholder:text-light px-[16px] py-[12px] rounded-[20px] outline-primary text-primary "
                type="name"
                name="last_name"
                id="last_name"
                placeholder="Enter last name"
              />
            </div>
          </div>
          <div className="md:grid md:grid-cols-2 gap-[2%] ">
            <div className=" mt-[20px]">
              <h4 className="mb-[6px] text-[16px]  text-primary font-semibold">
                Age
              </h4>
              <input
                className="border border-light w-full placeholder:text-[16px] placeholder:text-light px-[16px] py-[12px] rounded-[20px] outline-primary text-primary "
                type="text"
                name="age"
                id="age"
                placeholder="Enter age here"
              />
            </div>
            <div className=" mt-[20px]">
              <h4 className="mb-[6px] text-[16px]  text-primary font-semibold">
                Nationality
              </h4>
              <input
                className="border border-light w-full placeholder:text-[16px] placeholder:text-light px-[16px] py-[12px] rounded-[20px] outline-primary text-primary "
                type="text"
                name="nationality"
                id="nationality"
                placeholder="Select nationality here"
              />
            </div>
          </div>
          <div className=" mt-[20px]">
            <h4 className="mb-[6px] text-[16px]  text-primary font-semibold">
              Email
            </h4>
            <input
              className="border border-light w-full placeholder:text-[16px] placeholder:text-light px-[16px] py-[12px] rounded-[20px] outline-primary text-primary "
              type="email"
              name="email"
              id="email"
              placeholder="Enter email address"
            />
          </div>

          <div className=" mt-[20px]">
            <h4 className="mb-[6px] text-[16px]  text-primary font-semibold">
              Player position
            </h4>
            <input
              className="border border-light w-full placeholder:text-[16px] placeholder:text-light px-[16px] py-[12px] rounded-[20px] outline-primary text-primary "
              type="text"
              name="positio"
              id="position"
              placeholder="Enter player position"
            />
          </div>

          <div className=" mt-[20px]">
            <h4 className="mb-[6px] text-[16px]  text-primary font-semibold">
              National security number
            </h4>
            <input
              className="border border-light w-full placeholder:text-[16px] placeholder:text-light px-[16px] py-[12px] rounded-[20px] outline-primary text-primary "
              type="number"
              name="security"
              id="security"
              placeholder="Enter national "
            />
          </div>
          <div className="flex justify-end mt-[40px]">
            {/* {name2 && ( */}
            <h4
              //   onClick={() => {
              //     setFiles(null);
              //     setName2("");
              //   }}
              className="border-[2px] border-[#E2EFE4] text-primary px-[16px] py-[10px] rounded-[30px] mr-[15px] font-semibold cursor-pointer"
            >
              Cancel
            </h4>
            {/* )} */}

            <button className=" text-white bg-primary px-[16px] py-[10px] rounded-[30px] ">
              Save changes
            </button>
          </div>
        </form>

        <div className="flex items-center gap-[6%]">
          <h2>Position</h2>
          <Slider
            min={0}
            max={100}
            value={percentage}
            onChange={handleSliderChange}
            // marks={{ 0: "0%", 100: "100%" }}
            trackStyle={{ backgroundColor: "#231546", height: 6 }} // Customize the track style
            handleStyle={{
              borderColor: "#231546",
              height: 16,
              width: 16,
              marginLeft: -6,
              marginTop: -5,
              backgroundColor: "#231546",
            }} // Customize the handle style
            railStyle={{ backgroundColor: "lightgray", height: 6 }}
          />
          <h2>{percentage}%</h2>
        </div>
      </div>
    </div>
  );
};

export default Addcontest;
