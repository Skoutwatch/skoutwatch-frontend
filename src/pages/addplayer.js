import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FiUploadCloud } from "react-icons/fi";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { createPlayer } from "../redux/actions/playersAction";

const Addplayer = () => {
  const initialState = {
    first_name: "",
    last_name: "",
    age: "",
    nationality: "",
    email: "",
    player_position: "",
    national_security_number: "",
  };

  const [playerData, setPlayerData] = useState(initialState);
  const [files, setFiles] = useState(null);
  const [name2, setName2] = useState(null);

  const {
    first_name,
    last_name,
    age,
    nationality,
    email,
    player_position,
    national_security_number,
  } = playerData;

  const dispatch = useDispatch();
  const { alert, player } = useSelector((state) => state);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setPlayerData({ ...playerData, [name]: value });
  };

  const history = useNavigate();

  const pushPlayer = player.redirect;

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await dispatch(createPlayer(playerData));
      if (pushPlayer === true) {
        history("/players");
      }
    } catch (error) {}
  };

  const inputRef = useRef();

  const handleSubmitImage = (e) => {
    e.preventDefault();
    // const formData = new FormData();
    // for (let i = 0; i < files.length; i++) {
    //   formData.append(`file[${i}]`, files[0]);
    // }
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    setName2(e.target.files[0]);
    reader.onload = () => {
      setFiles(reader.result);
    };
    reader.onerror = (error) => {
      console.log("Error: ", error);
    };
    // console.log(formData);
    // dispatch(postDocument(auth.token, id, formData));
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.readAsDataURL(e.dataTransfer.files[0]);
    setName2(e.dataTransfer.files[0]);
    reader.onload = () => {
      setFiles(reader.result);
    };
    reader.onerror = (error) => {
      console.log("Error: ", error);
    };
  };

  return (
    <div className="px-[5%] md:px-[3%] pt-[90px] xl:pb-[60px] pb-[120px] xl:pt-[30px]">
      <div className=" md:px-[3%]  xl:pb-[60px] md:pb-[3%] pb-[50px] xl:pt-[30px] md:border-gray-200 md:border-[1px] md:rounded-[50px]">
        <div className=" py-[20px] md:py-[30px] border-b-[1px] border-gray-200 mb-[30px] items-center">
          <h4 className=" text-[16px] md:text-[18px] font-semibold">
            Add Player
          </h4>
        </div>

        <form onSubmit={handleSubmit} className="">
          <div>
            <div className=" mt-[20px] md:mt-[0px] w-full border-[2px] border-[#E2EFE4] rounded-[20px] flex justify-center items-center py-[16px]">
              {!name2 ? (
                <div onDragOver={handleDragOver} onDrop={handleDrop}>
                  <div className="flex justify-center rounded-full w-[40px] h-[40px] items-center bg-lighter mx-auto mb-[12px]">
                    <FiUploadCloud className="text-primary text-[30px]" />
                  </div>
                  <div className="flex justify-center items-center">
                    <h4
                      onClick={() => inputRef.current.click()}
                      className="font-semibold text-primary  cursor-pointer text-[18px] mr-[8px]"
                    >
                      Click here to upload Player image
                    </h4>
                    <h4 className="text-light">or drag and drop</h4>
                  </div>
                  <input
                    type="file"
                    multiple
                    accept=".png, .jpg, .jpeg, .pdf, .svg, .gif, .doc, .docx"
                    onChange={handleSubmitImage}
                    name="file"
                    hidden
                    ref={inputRef}
                  />
                  <h4 className="flex justify-center mt-[4px] text-light text-center px-[10px]">
                    PNG, JPG up to 5MB
                  </h4>
                </div>
              ) : (
                <div className="px-[20px]">
                  <ol>
                    <li className="text-primary">{name2.name}</li>
                  </ol>
                </div>
              )}
            </div>
          </div>
          <div className=" py-[20px] md:py-[30px] border-b-[1px] border-gray-200 mb-[30px] items-center">
            <h4 className=" text-[16px] md:text-[18px] font-semibold">
              Player info
            </h4>
          </div>
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
                onChange={handleChangeInput}
                value={first_name}
                required
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
                onChange={handleChangeInput}
                value={last_name}
                required
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
                onChange={handleChangeInput}
                value={age}
                required
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
                onChange={handleChangeInput}
                value={nationality}
                required
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
              onChange={handleChangeInput}
              value={email}
              required
            />
          </div>

          <div className=" mt-[20px]">
            <h4 className="mb-[6px] text-[16px]  text-primary font-semibold">
              Player position
            </h4>
            <input
              className="border border-light w-full placeholder:text-[16px] placeholder:text-light px-[16px] py-[12px] rounded-[20px] outline-primary text-primary "
              type="text"
              name="player_position"
              id="plyer_position"
              placeholder="Enter player position"
              onChange={handleChangeInput}
              value={player_position}
              required
            />
          </div>

          <div className=" mt-[20px]">
            <h4 className="mb-[6px] text-[16px]  text-primary font-semibold">
              National security number
            </h4>
            <input
              className="border border-light w-full placeholder:text-[16px] placeholder:text-light px-[16px] py-[12px] rounded-[20px] outline-primary text-primary "
              type="number"
              name="national_security_number"
              id="national_security_number"
              placeholder="Enter national "
              onChange={handleChangeInput}
              value={national_security_number}
              required
            />
          </div>
          <div className="flex justify-end mt-[40px]">
            {name2 && (
              <h4
                onClick={() => {
                  setFiles(null);
                  setName2("");
                }}
                className="border-[2px] border-[#E2EFE4] text-primary px-[16px] py-[10px] rounded-[30px] mr-[15px] font-semibold cursor-pointer"
              >
                Cancel
              </h4>
            )}

            <button className=" text-white bg-primary px-[16px] py-[10px] rounded-[30px] ">
              Save changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addplayer;
