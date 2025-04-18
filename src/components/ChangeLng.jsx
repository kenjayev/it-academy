import React from "react";

const ChangeLng = () => {
  return (
    <div>
      <div className="flex gap-[10px] cursor-pointer relative items-center text-sm p-2 pl-0">
        <span>uz UZ</span>
        <span className="text-white text-[10px] self-center">▼</span>
        <div className="absolute bottom-0 w-full "></div>
      </div>
    </div>
  );
};

export default ChangeLng;
