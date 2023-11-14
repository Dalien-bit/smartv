import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <div className="w-full h-[500px] bg-pink-600  flex flex-col items-center justify-around px-10 lg:px-64">
        <div className="md:flex w-full items-center justify-between ">
          <div className="flex flex-col text-white hover:cursor-pointer mr-64">
            Follow Us
            <div className="flex gap-2 mb-2">
              <FaFacebook />
              <FaLinkedin />
              <FaInstagram />
            </div>
          </div>
          <div className="flex flex-col text-white hover:cursor-pointer mb-2">
            Phone Us
            <div>+91 79896 77226</div>
          </div>
          <div className="flex flex-col text-white hover:cursor-pointer mb-2">
            Email Us
            <div>nikhilsai1010@gmail.com</div>
          </div>
          <div className="flex flex-col text-white hover:cursor-pointer mb-2">
            Find Us
            <div>Visakhapatnam, Andhra Pradesh</div>
          </div>
        </div>
        <div className="w-full h-[0.5px] bg-white hover:cursor-pointer"></div>
        <div className="md:flex w-full items-center justify-between text-white">
          <div className="hover:cursor-pointer mr-64">SmartV 2023</div>
          <div className="hover:cursor-pointer">Terms & Conditions</div>
          <div className="hover:cursor-pointer">Privacy</div>
          <div className="hover:cursor-pointer">Cookies</div>
        </div>
      </div>
    </>
  );
}
