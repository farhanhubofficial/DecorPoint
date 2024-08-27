// Header.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { BsCart } from "react-icons/bs";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import clsx from "clsx";
import { useSelector } from "react-redux";
import Logo from "../Images/Logo.jpg";

function Header() {
  const [Admin, setAdmin] = useState(false);
  const [isSideMenuOpen, setMenu] = useState(false);
  const [HrMenu, setHrMenu] = useState("");
  const [About, SetAbout] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  const items = useSelector((state) => state.cart.items);
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  const handleHomeHr = () => setHrMenu("Home");
  const handleAboutHr = () => setHrMenu("About");
  const handleCurtainsHr = () => setHrMenu("Curtains");
  const handleShearsHr = () => setHrMenu("Shears");
  const handleCarpetsHr = () => setHrMenu("Carpets");
  const handlePillowsHr = () => setHrMenu("Pillows");
  const handleDuvetsHr = () => setHrMenu("Duvets");

  const MouseMoeve = () => SetAbout(true);
  const MouseLeave = () => SetAbout(false);

  const handleLoginClick = () => {
    navigate("/login"); // Navigate to the login page
  };

  const handleSignupClick = () => {
    navigate("/signup"); // Navigate to the signup page
  };

  return (
    <nav className="flex items-center justify-between max-[500px]:justify-around px-3 relative bg-slate-200 font-[poppins] ">
      <div className="flex items-center gap-4">
        <IoMdMenu onClick={() => setMenu(true)} className="text-3xl lg:hidden" />
        <div className="flex">
          <img
            src={Logo}
            alt=""
            className="rounded-full w-12 h-12 bg-black mr-2"
          />
          <Link>
            <h2 className="text-white text font-roboto font-bold text-3xl">
              <span className="text-black">DECOR</span>
              <span className="text-yellow-800">POINT</span>
            </h2>
          </Link>
        </div>
      </div>

      <div className="hidden lg:block font-bold text-yellow-800/100">
        <nav className="flex justify-between items-center text-lg gap-6 text-yellow-900 px-">
          <Link to="/" onClick={handleHomeHr}>
            HOME{" "}
            <hr
              className={
                HrMenu === "Home" ? "border-none w-[80%] h-[3px] bg-black" : ""
              }
            />{" "}
          </Link>
          <div className="relative" onMouseLeave={MouseLeave} onMouseMove={MouseMoeve}>
            <Link to="/About" onClick={handleAboutHr}>
              ABOUT US
              <hr
                className={
                  HrMenu === "About"
                    ? "border-none w-[80%] h-[3px] bg-black"
                    : ""
                }
              />
            </Link>
            <div
              className={
                About
                  ? "bg-slate-100 shadow-custom-light border h-80 w-[270%] left-[-3rem] absolute flex flex-col p-3"
                  : "hidden"
              }
            >
              <Link
                className="border-b-2 border-solid border-yellow-800"
                to="/Vision"
              >
                <h1 className="my-8">
                  Vission, Mission And Core <span>Values</span>
                </h1>
              </Link>
              <Link
                className="border-b-2 border-solid border-yellow-800"
                to="/Approach"
              >
                <h1 className="ml-[-.4rem] my-9">Our Approach</h1>
              </Link>
              <Link className="mt-5">
                <h1>Our Product And Services</h1>
              </Link>
            </div>
          </div>
          <Link to="/Curtains" onClick={handleCurtainsHr}>
            CURTAINS{" "}
            <hr
              className={
                HrMenu === "Curtains"
                  ? "border-none w-[80%] h-[3px] bg-black"
                  : ""
              }
            />
          </Link>
          <Link to="/Shears" onClick={handleShearsHr}>
            SHEARS
            <hr
              className={
                HrMenu === "Shears" ? "border-none w-[80%] h-[3px] bg-black" : ""
              }
            />
          </Link>
          <Link to="/Carpets" onClick={handleCarpetsHr}>
            CARPETS{" "}
            <hr
              className={
                HrMenu === "Carpets"
                  ? "border-none w-[80%] h-[3px] bg-black"
                  : ""
              }
            />
          </Link>
          <Link to="/Pillows" onClick={handlePillowsHr}>
            PILLOWS{" "}
            <hr
              className={
                HrMenu === "Pillows" ? "border-none w-[80%] h-[3px] bg-black" : ""
              }
            />
          </Link>
          <Link to="/Duvets" onClick={handleDuvetsHr}>
            DUVETS{" "}
            <hr
              className={
                HrMenu === "Duvets" ? "border-none w-[80%] h-[3px] bg-black" : ""
              }
            />
          </Link>
        </nav>
      </div>

      <div
        className={clsx(
          "fixed h-full w-[100%] lg:hidden bg-black/50 backdrop-blur-sm max-[692px]:right-6 top-0 right-0 -translate-x-full transition-all z-50",
          isSideMenuOpen && "translate-x-0"
        )}
      >
        <section className="text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 flex items-center w-56">
          <IoMdClose
            className="text-2xl mb-8 mt-0 cursor-pointer"
            onClick={() => setMenu(false)}
          />

          <nav className="flex flex-col items-center text-lg gap-6 text-black px-">
            <Link to="/" onClick={handleHomeHr}>
              HOME{" "}
              <hr
                className={
                  HrMenu === "Home"
                    ? "border-none w-[80%] h-[3px] bg-black"
                    : ""
                }
              />{" "}
            </Link>
            <div className="relative" onMouseLeave={MouseLeave} onMouseMove={MouseMoeve}>
              <Link to="/About" onClick={handleAboutHr}>
                ABOUT US
                <hr
                  className={
                    HrMenu === "About"
                      ? "border-none w-[80%] h-[3px] bg-black"
                      : ""
                  }
                />
              </Link>
              <div
                className={
                  About
                    ? "bg-slate-200 h-80 w-[270%] left-[-3rem] absolute flex flex-col p-3"
                    : "hidden"
                }
              >
                <Link
                  className="border-b-2 border-solid border-yellow-800"
                  to="/Vision"
                >
                  <h1 className="my-8">
                    Vission, Mission And Core <span>Values</span>
                  </h1>
                </Link>
                <Link
                  className="border-b-2 border-solid border-yellow-800"
                  to="/Approach"
                >
                  <h1 className="ml-[-.4rem] my-9">Our Approach</h1>
                </Link>
                <Link className="mt-5">
                  <h1>Our Product And Services</h1>
                </Link>
              </div>
            </div>
            <Link to="/Curtains" onClick={handleCurtainsHr}>
              CURTAINS{" "}
              <hr
                className={
                  HrMenu === "Curtains"
                    ? "border-none w-[80%] h-[3px] bg-black"
                    : ""
                }
              />
            </Link>
            <Link to="/Shears" onClick={handleShearsHr}>
              SHEARS
              <hr
                className={
                  HrMenu === "Shears"
                    ? "border-none w-[80%] h-[3px] bg-black"
                    : ""
                }
              />
            </Link>
            <Link to="/Carpets" onClick={handleCarpetsHr}>
              CARPETS{" "}
              <hr
                className={
                  HrMenu === "Carpets"
                    ? "border-none w-[80%] h-[3px] bg-black"
                    : ""
                }
              />
            </Link>
            <Link to="/Pillows" onClick={handlePillowsHr}>
              PILLOWS{" "}
              <hr
                className={
                  HrMenu === "Pillows"
                    ? "border-none w-[80%] h-[3px] bg-black"
                    : ""
                }
              />
            </Link>
            <Link to="/Duvets" onClick={handleDuvetsHr}>
              DUVETS{" "}
              <hr
                className={
                  HrMenu === "Duvets"
                    ? "border-none w-[80%] h-[3px] bg-black"
                    : ""
                }
              />
            </Link>
          </nav>

          <div className="items-center gap-3 flex flex-col">
            <button
              onClick={handleLoginClick}
              className="bg-blue-600 w-14 rounded-md text-white text-bold"
            >
              Login
            </button>
            <button
            
              onClick={handleSignupClick} // Add click handler for mobile menu
              className="bg-blue-600 w-14 rounded-md text-white text-bold"
            >
              SignUp
            </button>
          </div>
        </section>
      </div>

      <div className="flex justify-between items-center gap-6">
        <div className="flex justify-between items-center gap-6">
          <Link to="/Cart">
            <div className="relative rounded-2xl flex justify-center items-center w-24">
              <BsCart className="font-bold text-4xl text-yellow-800" />
              <p className="absolute top-[.55rem] right-[2.35rem] font-bold text-black rounded-full w-4 h-4 flex justify-center items-center">
                {totalItems}
              </p>
            </div>
          </Link>
        </div>

        <div className="  items-center gap-3 hidden lg:flex">
          <button
            onClick={handleLoginClick}
            className="bg-blue-600 w-14 rounded-md text-white text-bold"
          >
            Login
          </button>
          <button
            onClick={handleSignupClick} // Add click handler
            className="bg-blue-600 w-14 rounded-md text-white text-bold"
          >
            SignUp
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
