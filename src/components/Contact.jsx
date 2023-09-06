import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <div className="w-full h-[500px] bg-pink-600 mt-20 flex flex-col items-center justify-around px-10 lg:px-64">
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col text-white hover:cursor-pointer mr-64">
            Follow Us
            <div className="flex gap-2">
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
            </div>
          </div>
          <div className="flex flex-col text-white hover:cursor-pointer">
            Phone Us
            <div>Phone Number</div>
          </div>
          <div className="flex flex-col text-white hover:cursor-pointer">
            Email Us
            <div>Email</div>
          </div>
          <div className="flex flex-col text-white hover:cursor-pointer">
            Find Us
            <div>The Address</div>
          </div>
        </div>
        <div className="w-full h-[0.5px] bg-white hover:cursor-pointer"></div>
        <div className="flex w-full items-center justify-between text-white">
          <div className="hover:cursor-pointer mr-64">SmartV 2023</div>
          <div className="hover:cursor-pointer">Terms & Conditions</div>
          <div className="hover:cursor-pointer">Privacy</div>
          <div className="hover:cursor-pointer">Cookies</div>
        </div>
      </div>
    </>
  );
}
