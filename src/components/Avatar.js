import React from "react";
import { UserCircle } from "@phosphor-icons/react";

function Avatar({ src, width, height }) {
  return (
    <div>
      <UserCircle className={` ${width} `} />
    </div>
  );
}

export default Avatar;
