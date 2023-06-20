import { useState } from "react";
import Button from "./Button";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const Header = (props) => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className=" flex justify-between items-center">
      <h2 className="text-4xl font-bold">
        <span className="text-white">Tech-</span>Lateef
      </h2>
      <span className="hidden md:flex md:gap-7">
        <Button link="#work" text="Work" />
        <Button text="Resume" />
        <Button link="#contact" text="Contact" />
      </span>
      <div className="hidden md:flex md:gap-5">
        <Button text="En" />
        <Button
          link="https://www.linkedin.com/in/mubarak-abdullateef-b8669b244/"
          text={<i className="fa-brands fa-linkedin"></i>}
        />
        <Button
          link="https://github.com/TechLateef"
          text={<i className="fa-brands fa-github"></i>}
        />
      </div>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineMenu size={20} /> : ""}
      </div>

      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full flex-col border-r border-r-grey-900 bg-[#c58a8a] ease-in-out duration-500 lg:hidden"
            : "fixed left-[-100%] "
        }
      >
        <div className="flex gap-[10rem] mt-6">
          <h2 className="text-2xl font-bold">
            <span className="text-white">Tech-</span>Lateef
          </h2>

          <div onClick={handleNav} className="block md:hidden">
            {nav ? <AiOutlineClose size={20} /> : ""}
          </div>
        </div>
        <span className="uppercase p-4 flex flex-col gap-8">
          <Button
            className="border-b border-gray-600"
            link="#work"
            text="Work"
          />
          <Button className="border-b border-gray-600" text="Resume" />
          <Button
            className="border-b border-gray-600"
            link="#contact"
            text="Contact"
          />
        </span>
        <div className="flex gap-6 ml-5 mt-56">
          <Button text="En" />
          <Button
            link="https://www.linkedin.com/in/mubarak-abdullateef-b8669b244/"
            text={<i className="fa-brands fa-linkedin"></i>}
          />
          <Button
            link="https://github.com/TechLateef"
            text={<i className="fa-brands fa-github"></i>}
          />
        </div>
      </div>
    </nav>
  );
};

export default Header;
