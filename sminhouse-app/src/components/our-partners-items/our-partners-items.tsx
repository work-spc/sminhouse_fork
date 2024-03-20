import "./style.css";

import { FC } from "react";

interface OurPartnersItemsProps {
  children?: string;
  position?: string;
}

export const OurPartnersItems: FC<OurPartnersItemsProps> = ({
  children,
  position,
}) => {
  if (position === "upper") {
    return (
      <div className="background-partners-upper bg-white flex min-h-28 md:min-h-36 w-full md:w-full rounded-xl text-xl">
        <img className="m-auto max-h-36" src={children} alt="" />
      </div>
    );
  }
  if (position === "left") {
    return (
      <div className="background-partners-left bg-white flex min-h-28 md:min-h-36 w-full md:w-full rounded-xl text-xl">
        <img className="m-auto max-h-36" src={children} alt="" />
      </div>
    );
  }
  if (position === "right") {
    return (
      <div className="background-partners-right bg-white flex min-h-28 md:min-h-36 w-full md:w-full rounded-xl text-xl">
        <img className="m-auto max-h-36" src={children} alt="" />
      </div>
    );
  }
  return (
    <div className="bg-opacity-0 flex border border-white  min-h-28 md:min-h-36 w-full md:w-full rounded-xl text-xl">
      <img className="m-auto max-h-36" src={children} alt="" />
    </div>
  );
};
