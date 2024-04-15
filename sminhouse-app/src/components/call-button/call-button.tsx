import { useState } from "react";
import phone_call from "../../icons/chat-and-call/phone-call.svg";

const phoneNumber = "8 (800) 302-08-70";

export const CallButton: React.FC = () => {
  const [showPhoneNumber, setShowPhoneNumber] = useState<boolean>(false);

  const handleCall = () => {
    if (isMobileDevice()) {
      window.location.href = `tel:${phoneNumber}`;
    } else {
      setShowPhoneNumber((prevState) => !prevState);
    }
  };

  const isMobileDevice = () => {
    return window.matchMedia("(max-width: 768px)").matches;
  };

  const handlePhoneNumberClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
  };

  return (
    <div
      onClick={handleCall}
      className="button-ChatAndCall md:h-16 md:w-16 flex p-[17px] md:p-[19px] cursor-pointer mb-4 bg-white rounded-full border-[1.5px] border-accent_background"
    >
      <img className="w-5 md:w-6" src={phone_call} alt="звонок" />
      {showPhoneNumber && (
        <div
          onClick={handlePhoneNumberClick}
          className="absolute w-[180px] text-center top-[7px] right-0 translate-x-[-70px] bg-white border border-gray-300 p-3 rounded-xl shadow-md"
        >
          <p style={{ userSelect: "text" }}>{phoneNumber}</p>
        </div>
      )}
    </div>
  );
};
