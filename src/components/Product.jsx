export default function Product() {
  return (
    <>
      <div className="text-5xl flex flex-col font-bold my-28 mt-[200px]">
      </div>
      <div className="w-full flex flex-col lg:justify-end lg:h-[700px] text-white">
        <div className="flex flex-col items-center justify-around py-20">
            <div className="text-5xl text-pink-900   font-bold px-2 lg:px-0 rounded-xl  bg-pink-200  ">
              Just a click away <br/>to order the machine.
            </div>
            <button className="bg-black lg:ml-20 rounded-xl font-bold text-white text-4xl hover:bg-pink-800 py-2 px-4 mt-10 rounded">
              Buy Now
            </button>
        </div>
      </div>
    </>
  );
}
