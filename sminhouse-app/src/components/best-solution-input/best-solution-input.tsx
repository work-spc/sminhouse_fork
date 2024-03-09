import ru from "../../icons/best-solution/RU.svg";

interface UniversalInputProps {
  type: string;
  placeholder: string;
}

const InputBestSolution: React.FC<UniversalInputProps> = ({
  type,
  placeholder,
}) => {
  if (type === "tel") {
    return (
      <div className="relative w-1/4">
        <img
          className="absolute top-1/2 transform -translate-y-1/2 ml-5"
          src={ru}
          alt=""
        />
        <p className="absolute text-white top-1/2 transform -translate-y-1/2 ml-12 text-xl">
          +7
        </p>
        <input
          type={type}
          placeholder={placeholder}
          className="border border-white border-opacity-10 bg-gray-100 bg-opacity-10 w-full rounded-md py-2 pr-5 pl-20 h-full text-white leading-tight focus:outline-none focus:bg-opacity-15"
          style={{ caretColor: "white", fontSize: "20px" }}
        />
      </div>
    );
  }
  return (
    <div className="relative w-1/4">
      <input
        type={type}
        placeholder={placeholder}
        className="border border-white border-opacity-10 bg-gray-100 bg-opacity-10 rounded-md h-full px-5 w-full text-white leading-tight focus:outline-none focus:bg-opacity-15"
        style={{ caretColor: "white", fontSize: "20px" }}
      />
    </div>
  );
};

export default InputBestSolution;
