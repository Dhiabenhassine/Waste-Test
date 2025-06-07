import React from "react";

/*
const NavHeader = () => {
  return (
    <div className="w-full bg-[#111] py-2 px-2 overflow-x-auto">
      <div
        className="mx-auto flex justify-start sm:justify-center items-center space-x-2 min-w-max sm:min-w-0"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <button className="min-w-[100px] flex items-center whitespace-nowrap text-[#FFD700] hover:text-[#B8860B] transition-colors cursor-pointer text-xs sm:text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            className="w-5 h-6 sm:w-6 sm:h-6"
          >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span className="ml-1 sm:ml-2 text-white">Postcode</span>
        </button>

        <div className="w-6 h-px bg-[#FFD700] hidden sm:block"></div>

        <button className="min-w-[100px] flex items-center whitespace-nowrap text-[#FFD700] hover:text-[#B8860B] transition-colors cursor-pointer text-xs sm:text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            className="w-7 h-6 sm:w-6 sm:h-6"
          >
            <path d="M3 6h18"></path>
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
            <line x1="10" x2="10" y1="11" y2="17"></line>
            <line x1="14" x2="14" y1="11" y2="17"></line>
          </svg>
          <span className="ml-1 sm:ml-2 text-white">Waste Type</span>
        </button>

        <div className="w-6 h-px bg-[#2A2A2A] hidden sm:block"></div>

        <button className="min-w-[100px] flex items-center whitespace-nowrap text-[#FFD700] hover:text-[#B8860B] transition-colors cursor-pointer text-xs sm:text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            className="w-7 h-6 sm:w-6 sm:h-6"
          >
            <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
            <path d="M15 18H9" />
            <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
            <circle cx="17" cy="18" r="2" />
            <circle cx="7" cy="18" r="2" />
          </svg>
          <span className="ml-1 sm:ml-2 text-white">Select Skip</span>
        </button>

        <div className="w-6 h-px bg-[#2A2A2A] hidden sm:block"></div>

        {[
          { text: "Permit Check", icon: "shield" },
          { text: "Choose Date", icon: "calendar" },
          { text: "Payment", icon: "credit-card" },
        ].map(({ text, icon }) => (
          <React.Fragment key={text}>
            <button
              disabled
              className="min-w-[100px] flex items-center whitespace-nowrap text-white/60 cursor-not-allowed opacity-50 text-xs sm:text-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                className={`w-7 h-6 sm:w-6 sm:h-6 lucide lucide-${icon}`}
              >
                {icon === "shield" && (
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                )}
                {icon === "calendar" && (
                  <>
                    <path d="M8 2v4" />
                    <path d="M16 2v4" />
                    <rect width="18" height="18" x="3" y="4" rx="2" />
                    <path d="M3 10h18" />
                  </>
                )}
                {icon === "credit-card" && (
                  <>
                    <rect width="20" height="14" x="2" y="5" rx="2" />
                    <line x1="2" x2="22" y1="10" y2="10" />
                  </>
                )}
              </svg>
              <span className="ml-1 sm:ml-2 text-white">{text}</span>
            </button>
            <div className="w-6 h-px bg-[#2A2A2A] hidden sm:block"></div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
*/
// NavHeader.jsx or NavHeader.tsx (if using TypeScript)
import {
  Check,
} from "lucide-react"; // Only importing used icon

const steps = [
  { id: 1, name: "Postcode", icon: "📍", completed: true },
  { id: 2, name: "Waste Type", icon: "🗑️", completed: true },
  { id: 3, name: "Select Skip", icon: "🚛", current: true },
  { id: 4, name: "Permit Check", icon: "📋", completed: false },
  { id: 5, name: "Choose Date", icon: "📅", completed: false },
  { id: 6, name: "Payment", icon: "💳", completed: false },
];

const NavHeader = () => {
  return (
    <div className="bg-[#FFD700] border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between overflow-x-auto">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div className="flex items-center">
                <div
                  className={`
                    flex items-center justify-center w-10 h-10 rounded-full text-sm font-medium
                    ${
                      step.completed
                        ? "bg-green-100 text-green-800 border-2 border-green-200"
                        : step.current
                        ? "bg-blue-100 text-blue-800 border-2 border-blue-200"
                        : "bg-gray-100 text-gray-500 border-2 border-gray-200"
                    }
                  `}
                >
                  {step.completed ? <Check className="h-5 w-5" /> : step.icon}
                </div>
                <div className="ml-3 hidden sm:block">
                  <p
                    className={`text-sm font-medium ${
                      step.current
                        ? "text-blue-800"
                        : step.completed
                        ? "text-green-800"
                        : "text-gray-500"
                    }`}
                  >
                    {step.name}
                  </p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden sm:block w-12 lg:w-20 mx-4">
                  <div
                    className={`h-0.5 ${
                      step.completed ? "bg-green-200" : "bg-gray-200"
                    }`}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavHeader;
