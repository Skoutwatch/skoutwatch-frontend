import React, { useState } from "react";
import Table from "./Table";
import { AiFillCaretDown } from "react-icons/ai";

const ContestTable = ({ height }) => {
  const Menus = [
    {
      name: "All Contest",
      dis: "translate-x-[30px]",
      width: "w-[120px]",
      font: "font-semibold",
    },
    {
      name: "Upcoming Contest",
      dis: "translate-x-[160px]",
      width: "w-[170px]",
      font: "font-semibold",
      show: "block",
    },
    {
      name: "Ongoing Contest",
      dis: "translate-x-[345px]",
      width: "w-[155px]",
      font: "font-semibold",
    },
    {
      name: "Past Contest",
      dis: "translate-x-[520px]",
      width: "w-[110px]",
      font: "font-semibold",
    },
  ];

  const [active, setActive] = useState(0);
  const [show, setShow] = useState(false);
  return (
    <div className="">
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
                    className={`py-[10px] ${i !== active && show && " hidden"}`}
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
      <div className={` overflow-x-auto  ${height}`}>
        {Menus[active].name === "All Contest" && (
          <Table
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
        {Menus[active].name === "Upcoming Contest" && (
          <Table
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
        {Menus[active].name === "Ongoing Contest" && (
          <Table
          //   show="Ongoing Contest"
          //   visible="hidden"
          //   status={status}
          //   id=""
          //   amount=""
          //   title=""
          //   pageNumber={1}
          //   search={search}
          />
        )}
        {Menus[active].name === "Past Contest" && (
          <Table
          //   show="Past Contest"
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
  );
};

export default ContestTable;
