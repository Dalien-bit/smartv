import { male, nikhil,female } from "../assets";

export default function Product() {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center pt-10 bg-pink-300">
        <div className="text-5xl font-bold">The Team</div>
        <div className="grid grid-cols-1  md:grid-cols-3 items-center justify-around py-20 gap-20">
          <TeamCard name={`K.Nikhil Sai`} photo={nikhil} />
          <TeamCard name={`M.Hemanth Kumar`} photo={male} />
          <TeamCard name={`K.Satish Kumar`} photo={male} />
          <TeamCard name={`S.Harshitha`} photo={female} />
          <TeamCard name={`Krishna`} photo={male} />
        </div>
      </div>
    </>
  );
}

function TeamCard({ name, photo }) {
  return (
    <>
      <div className="rounded-xl flex flex-col items-center justify-around gap-4">
        <img src={photo} className="h-[120px] rounded-full" alt="" />
        <p className="text-lg font-bold">{name}</p>
      </div>
    </>
  );
}
