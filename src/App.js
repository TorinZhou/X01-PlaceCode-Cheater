import placeCodeCheat from "./assets/placeCodeCheat.png";
import Timer from "./Components/Timer";

function App() {
  return (
    <div className="flex flex-col w-full ">
      <div className="mx-auto">
        <div className="relative">
          <img src={placeCodeCheat} className="" alt="background" />
          <div className="absolute top-[33%] left-[50%] translate-x-[-50%]">
            <Timer />
          </div>
          <div className="absolute top-[81%] left-[50%] translate-x-[-50%]">
            <p className=" whitespace-nowrap font-bold text-base">
              <span className="text-4xl  text-purple-600 "> 24</span>{" "}
              小时内核酸检测结果{""}
              <span className="text-green-500 text-base">【阴性】</span>
            </p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default App;
