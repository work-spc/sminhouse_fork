import logo from "../../icons/slider.png";
import { Button } from "../../components/button/button";
export const TopSection: React.FC = () => {
  return (
    <div className="max-w-1368 m-auto flex gap-x-9">
      <div className="w-3/5">
        <h1 className="font-bold pt-6 text-6xl">
          Универсальная система контроля недвижимости «под ключ»
        </h1>
        <h2 className="pt-6 w-2/3 text-xl mb-11 text-light_dark_font">
          Управляйте недвижимостью удобно и эффективно вместе со Sminhouse
        </h2>
        <div className="flex gap-x-6 mb-24">
          <Button children="Скачать презентацию"></Button>
          <Button children="Скачать презентацию" type="outline"></Button>
        </div>
        <div className="flex gap-x-9">
          <div className="w-1/2 border p-5 grow rounded-2xl border-gray_border ">
            <p className="font-bold text-4xl text-light_accent_font">
              с 2010 года
            </p>
            <p className="text-light_dark_font">занимаемся интеграцией</p>
          </div>

          <div className="w-1/2 border p-5 grow rounded-2xl border-gray_border ">
            <p className="font-bold text-4xl text-light_accent_font">4 000+</p>
            <p className="text-light_dark_font">
              квартир подключили наши инженеры
            </p>
          </div>
        </div>
      </div>
      <img src={logo} alt="" />
    </div>
  );
};
