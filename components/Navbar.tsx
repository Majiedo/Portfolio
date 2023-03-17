import { HiOutlineMail } from "react-icons/hi";

export const Navbar = () => {
  return (
    <div className="hidden md:flex items-center w-full h-24 border-b-[1px] border-gray-400 border-opacity-10 justify-between">
      <div className="flex items-center">
        <a
          href="mailto:82qill@gmail.com"
          className="bg-primary scale-105 transition-all active:scale-95 border-opacity-10 h-10 w-10 border-2 border-secondary rounded-full flex justify-center items-center cursor-pointer"
        >
          {/* //* icon for email */}
          <HiOutlineMail size={15} color="#737373" />
        </a>
      </div>
      <div className="flex text-secondary">
        <a
          href="https://github.com/Majiedo"
          target="_blank"
          className="text-sm cursor-pointer hover:text-activeColor transition-colors"
        >
          Github{" "}
        </a>
        <span className=" text-sm mx-2"> / </span>
        <a
          href="https://twitter.com/MajedDev_"
          target="_blank"
          className="text-sm cursor-pointer hover:text-activeColor transition-colors"
        >
          {" "}
          Twitter
        </a>
        <span className=" text-sm mx-2"> / </span>
        <a
          href="https://dev.to/majiedo"
          target="_blank"
          className=" text-sm cursor-pointer hover:text-activeColor transition-colors"
        >
          {" "}
          Blog
        </a>
      </div>
    </div>
  );
};
