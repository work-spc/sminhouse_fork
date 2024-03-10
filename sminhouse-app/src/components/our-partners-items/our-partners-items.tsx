import "./style.css";

import React, { FC, MouseEventHandler } from "react";

interface OurPartnersItemsProps {
  children?: string;
  type?: "outline";
}

export const OurPartnersItems: FC<OurPartnersItemsProps> = ({
  children,
  type,
}) => {
  if (type === "outline") {
    return (
      <div className="bg-opacity-0 flex border border-white  min-h-28 md:min-h-36 w-full md:w-full rounded-xl text-xl">
        <img className="m-auto" src={children} alt="" />
      </div>
    );
  }
  return (
    <div className="bg-white flex min-h-28 md:min-h-36 w-full md:w-full rounded-xl text-xl">
      <img className="m-auto" src={children} alt="" />
    </div>
  );
};
