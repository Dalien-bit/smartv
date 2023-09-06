import Typewriter from "typewriter-effect";

const space = " ";

export default function Home() {
  return (
    <>
      <div className="h-screen flex flex-col justify-center">
        <div className="mx-10 md:m-20 relative bottom-20 text-3xl font-bold">
          <p className="flex lg:w-1/2 lg:text-5xl">
            India's first Smart Sanitary napkins vending machine making hygiene
          </p>
          <div className="text-3xl text-pink-800">
            <p>{space} </p>
            <Typewriter
              options={{
                strings: ["Available", "Accessible", "Affordable"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <p className="text-3xl">during menstruation</p>
          <button className="bg-black border border-white rounded-xl text-white text-xl hover:bg-pink-800 py-2 px-4 mt-10 rounded">
            Request Call Back
          </button>
        </div>
      </div>
    </>
  );
}
