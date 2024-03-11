import ru from "../../icons/best-solution/RU.svg";

interface UniversalInputProps {
  type: string;
  placeholder: string;
}

export const WhiteInput: React.FC<UniversalInputProps> = ({
  type,
  placeholder,
}) => {
  if (type === "tel") {
    return (
      <div className="relative h-14  md:h-auto w-full ">
        <img
          className="absolute top-1/2 transform -translate-y-1/2 ml-5"
          src={ru}
          alt=""
        />
        <p className="absolute text-black top-1/2 transform -translate-y-1/2 ml-12 text-xl">
          +7
        </p>
        <input
          type={type}
          placeholder={placeholder}
          className="border border-gray_border bg-white w-full rounded-md py-2 pr-5 pl-20 h-full md:h-16 text-black leading-tight focus:outline-none focus:bg-opacity-15"
          style={{ caretColor: "black", fontSize: "20px" }}
        />
      </div>
    );
  }
  return (
    <div className="relative h-14 md:h-auto w-full ">
      <input
        type={type}
        placeholder={placeholder}
        className="border border-gray_border bg-white rounded-md h-full px-5 md:h-16 w-full text-black leading-tight focus:outline-none focus:bg-opacity-15"
        style={{ caretColor: "black", fontSize: "20px" }}
      />
    </div>
  );
};
