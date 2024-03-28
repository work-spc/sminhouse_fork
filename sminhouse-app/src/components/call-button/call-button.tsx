import phone_call from "../../icons/chat-and-call/phone-call.svg";

const phoneNumber = "+7-917-435-8984";

export const CallButton = () => {
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div
      className="button-ChatAndCall md:h-16 md:w-16 flex p-[17px] md:p-[19px] cursor-pointer mb-4 bg-white rounded-full border-[1.5px] border-accent_background"
      onClick={handleCall}
    >
      <img className="w-5 md:w-6" src={phone_call} alt="звонок" />
    </div>
  );
};
