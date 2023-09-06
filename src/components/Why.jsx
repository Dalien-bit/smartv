import { whySmartVContent } from "../constants";
import { serviceImage } from "../assets";
import "./Why.css";
export default function Why() {
  return (
    <>
      {/* <div>
        <div className="flex justify-center text-5xl font-bold py-28">
          Why Smart V?
        </div>
        <div className="hidden lg:block">
          <div className="flex flex-col w-full md:flex-row items-center justify-start md:justify-center">
            <div className="md:w-1/2 bg-blue-300 h-[500px] lg:h-[700px] w-full flex lg:flex-row items-center justify-start">
              <div className="flex flex-col w-full gap-2">
                <div className="ball"></div>
                <div className="ball1"></div>
                <div className="ball2"></div>
                <div className="ball3"></div>
              </div>
              <div className="ring"></div>
            </div>
            <Content title={`Affordability`} />
          </div>
          <div className="flex flex-col w-full md:flex-row items-center justify-start md:justify-center">
            <Content title={`Chemical free pads`} />
            <div className="md:w-1/2 bg-pink-300 h-[500px] lg:h-[700px] w-full flex flex-col items-center justify-start">
              <div className="ball4"></div>
              <div className="ball5"></div>
              <div className="ball6"></div>
              <div className="ring2"></div>
            </div>
          </div>
          <div className="flex flex-col w-full md:flex-row items-center justify-start md:justify-center">
            <div className="md:w-1/2 bg-green-300 h-[500px] lg:h-[700px] w-full flex flex-col items-center justify-center gap-2">
              <div className="h-[100px] w-[100px] bg-white square"></div>
              <div className="h-[80px] w-[80px] bg-white rounded-full"></div>
            </div>
            <Content title={`Tech savvy`} />
          </div>
          <div className="flex flex-col w-full md:flex-row items-center justify-start md:justify-center">
            <Content title={`Environment friendly`} />
            <div className="md:w-1/2 bg-red-200 h-[500px] lg:h-[700px] w-full flex flex-col items-center justify-center">
              <div className="container">
                <div className="center-ball"></div>
                <div className="orbit-ball"></div>
                <div className="orbit-ball"></div>
                <div className="orbit-ball"></div>
                <div className="orbit-ball"></div>
                <div className="orbit-ball"></div>
              </div>
            </div>
          </div>
        </div>



        <div className="lg:hidden">
          <div className="flex flex-col w-full md:flex-row items-center justify-start md:justify-center">
            <Content title={`Affordability`} />
            <div className="md:w-1/2 bg-blue-300 h-[500px] lg:h-[700px] w-full flex flex-row items-center justify-start">
              <div className="flex flex-col w-full gap-2">
                <div className="ball"></div>
                <div className="ball1"></div>
                <div className="ball2"></div>
                <div className="ball3"></div>
              </div>
              <div className="ring"></div>
            </div>
          </div>
          <div className="flex flex-col w-full md:flex-row items-center justify-start md:justify-center">
            <Content title={`Chemical free pads`} />
            <div className="md:w-1/2 bg-pink-300 h-[500px] lg:h-[700px] w-full flex flex-col items-center justify-start">
              <div className="ball4"></div>
              <div className="ball5"></div>
              <div className="ball6"></div>
              <div className="ring2"></div>
            </div>
          </div>
          <div className="flex flex-col w-full md:flex-row items-center justify-start md:justify-center">
            <Content title={`Tech savvy`} />
            <div className="md:w-1/2 bg-green-300 h-[500px] lg:h-[700px] w-full flex flex-col items-center justify-center gap-2">
              <div className="h-[100px] w-[100px] bg-white square"></div>
              <div className="h-[80px] w-[80px] bg-white rounded-full"></div>
            </div>
          </div>
          <div className="flex flex-col w-full md:flex-row items-center justify-start md:justify-center">
            <Content title={`Environment friendly`} />
            <div className="md:w-1/2 bg-red-300 h-[500px] lg:h-[700px] w-full flex flex-col items-center justify-center">
              <div className="container">
                <div className="center-ball"></div>
                <div className="orbit-ball"></div>
                <div className="orbit-ball"></div>
                <div className="orbit-ball"></div>
                <div className="orbit-ball"></div>
                <div className="orbit-ball"></div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="w-full bg-pink-600 lg:h-[700px] text-white">
        <div className="flex flex-col lg:flex-row items-center justify-around py-20">
          <div>
            <div className="text-5xl w-[500px] font-bold lg:pl-20">
              Just a click away from requesting a service for the machine.
            </div>
            <button className="bg-black lg:ml-20 rounded-xl text-white text-xl hover:bg-pink-800 py-2 px-4 mt-10 rounded">
              Request Call Back
            </button>
          </div>
          <div>
            <img src={serviceImage} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

function Content({ title }) {
  return (
    <div className="md:w-1/2 flex m-auto px-20 pb-10 h-[500px] items-center">
      <p className="text-lg">
        <span className="text-5xl font-bold">{title}</span>
        <br />
        <br />
        {whySmartVContent[title]}
      </p>
    </div>
  );
}
