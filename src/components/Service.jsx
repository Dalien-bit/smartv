import { serviceImage } from "../assets";
import { serviceContent, whySmartVContent } from "../constants";
import { whySmartVImages } from "../constants/why";

export default function Service() {
  return (
    <>
      <div className="w-full bg-pink-600 lg:h-[700px] text-white">
        <div className="text-5xl flex justify-start pl-20 font-bold">
          Why SmartV
        </div>
        <div className="flex flex-col lg:flex-row mx-20 gap-2 items-center justify-around">
          <ServiceCard serviceTitle={`Affordability`} color={"blue-300"} />
          <ServiceCard serviceTitle={`Chemical free pads`} color={"pink-300"} />
          <ServiceCard serviceTitle={`Tech savvy`} color={"red-300"} />
          <ServiceCard
            serviceTitle={`Environment friendly`}
            color={"green-300"}
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-around pt-20">
        <div>
          <div className="text-5xl w-[500px] font-bold lg:pl-20">
            Just a click away from any service.
          </div>
          <div className="flex flex-row items-center justify-center"></div>
          <button className="bg-black lg:ml-20  text-white text-lg hover:bg-pink-800 py-2 px-4 mt-10 rounded-xl">
            Request Call Back
          </button>
          <button className="bg-black lg:ml-20 text-white text-lg hover:bg-pink-800 py-2 px-4 mt-10 rounded-xl">
            Buy Now
          </button>
        </div>
        <div>
          <img src={serviceImage} alt="" />
        </div>
      </div>
    </>
  );
}

function ServiceCard({ serviceTitle, color }) {
  return (
    <>
      <div
        className={`h-[500px] my-20 hover:my-0 hover:h-[550px]  hover:p-2 hover:transition-all w-full max-w-[400px] bg-${color}  text-white hover:text-black rounded-lg`}
      >
        <div className="flex flex-col h-full items-center justify-around">
          <div className="text-3xl font-bold pt-5 ">{serviceTitle}</div>
          <img
            className="h-[100px] rounded-full"
            src={whySmartVImages[serviceTitle]}
            alt=""
          />
          <p className="text-xl px-5">{whySmartVContent[serviceTitle]}</p>
        </div>
      </div>
    </>
  );
}
