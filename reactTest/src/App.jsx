import React, { useState } from "react";
import "./index.css";
import audiophile from "../src/assets/client-audiophile.svg";
import databiz from "../src/assets/client-databiz.svg";
import maker from "../src/assets/client-maker.svg";
import meet from "../src/assets/client-meet.svg";
import calendar from "../src/assets/icon-calendar.svg";
import planning from "../src/assets/icon-planning.svg";
import reminders from "../src/assets/icon-reminders.svg";
import todo from "../src/assets/icon-todo.svg";
import heroDesktop from "../src/assets/image-hero-desktop.png";
import arrowDown from "../src/assets/icon-arrow-down.svg";
import arrowUp from "../src/assets/icon-arrow-up.svg";

function App() {
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);

  return (
    <div>
      <nav className="flex justify-between items-center py-4 px-8 bg-white-500 text-black">
        <div className="flex space-x-2 md:space-x-6 mb-2 md:mb-0">
          <h1 className="nav-item text-3xl font-semibold">snap</h1>

          <div className="relative group nav-item">
            <span
              className="flex items-center hover:text-blue-300 cursor-pointer"
              onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}
            >
              Features
              <img
                src={isFeaturesOpen ? arrowUp : arrowDown}
                alt="Dropdown Arrow"
                className="ml-2 w-3 h-3"
              />
            </span>
            {isFeaturesOpen && (
              <div className="absolute bg-white w-40 py-2 mt-2 rounded-lg shadow-lg">
                <div className="flex items-center mb-2">
                  <img src={todo} alt="Todo List Icon" className="w-4 h-4 mr-2"/>
                  <a href="#" className="text-sm hover:text-blue-300">Todo list</a>  
                </div>

                <div className="flex items-center mb-2">
                  <img src={calendar} alt="Calendar" className="w-4 h-4 mr-2"/>
                  <a href="#" className="text-sm hover:text-blue-300">Calendar</a>  
                </div>

                <div className="flex items-center mb-2">
                  <img src={reminders} alt="Reminders" className="w-4 h-4 mr-2"/>
                  <a href="#" className="text-sm hover:text-blue-300">Reminders</a>  
                </div>

                <div className="flex items-center mb-2">
                  <img src={planning} alt="Planning" className="w-4 h-4 mr-2"/>
                  <a href="#" className="text-sm hover:text-blue-300">Planning</a>  
                </div>
                
              </div>
            )}
          </div>

          <div className="relative group nav-item">
            <span
              className="flex items-center hover:text-blue-300 cursor-pointer"
              onClick={() => setIsCompanyOpen(!isCompanyOpen)}
            >
              Company
              <img
                src={isCompanyOpen ? arrowUp : arrowDown}
                alt="Dropdown Arrow"
                className="ml-2 w-3 h-3"
              />
            </span>
            {isCompanyOpen && (
              <div className="absolute bg-white w-50 py-2 mt-2 rounded-lg shadow-lg">
              <a className="text-sm text-left block px-4 py-2 hover:bg-blue-200 whitespace-nowrap" href="#">
                History
              </a>
              <a className="text-sm text-left block px-4 py-2 hover:bg-blue-200 whitespace-nowrap" href="#">
                Our Team
              </a>
              <a className="text-sm text-left block px-4 py-2 hover:bg-blue-200 whitespace-nowrap" href="#">
                Blog
              </a>
            </div>
            
            )}
          </div>

          <a className="nav-item hover:text-blue-300" href="#">
            Career
          </a>
          <a className="nav-item hover:text-blue-300" href="#">
            About
          </a>
        </div>

        {/* Add right menu items here */}
      </nav>

      <div className="flex flex-row justify-between items-center h-100 px-8 ">
        <div className=" p-8 text-left">
          <div className="my-16">
            <span className="text-6xl font-semibold text-black">Make</span>
            <br />
            <span className="text-6xl font-semibold text-black">
              Remote Work
            </span>
          </div>

          <div className="max-w-sm">
            <p className="text-sm mb-12 text-gray-500 font-sans">
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </p>
          </div>

          <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-blue-500">
            Learn more
          </button>

          <div className="mt-4 py-20 text-left">
            <img
              src={databiz}
              alt="Image 1"
              className="w-auto h-auto inline-block"
            />
            <img
              src={audiophile}
              alt="Image 2"
              className="w-auto h-auto inline-block ml-4"
            />
            <img
              src={meet}
              alt="Image 3"
              className="w-auto h-auto inline-block ml-4"
            />
            <img
              src={maker}
              alt="Image 4"
              className="w-auto h-auto inline-block ml-4"
            />
          </div>
        </div>

        <div className="pb-16">
          <img
            src={heroDesktop}
            className="object-fill w-96 h-100 pb-4"
            alt="Image Alt Text"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
