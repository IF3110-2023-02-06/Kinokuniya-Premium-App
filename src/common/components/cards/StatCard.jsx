import React from "react";

const StatCard = ({ title, value, icon }) => {
    return (
        <div
            className="relative block overflow-hidden rounded-lg p-4 sm:p-6 lg:p-8 bg-[#222637] drop-shadow-xl border-gray-700 border-[0.5px] hover:scale-105 transition-all duration-100"
        >
            <span
                className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-[#00486E] via-[#001C41] to-[#431237]"
            ></span>
            <div className="flex flex-col items-start gap-4">

              <div className="bg-gray-600 w-fit p-2 rounded-full">
                {icon}
              </div>

              <div className="flex flex-col">
                  <div className="sm:flex sm:justify-between sm:gap-4">
                      <div>
                          <h3 className="text-lg font-bold text-gray-100 sm:text-xl">
                              {value}
                          </h3>

                          <p className="mt-1 text-md font-medium text-gray-400">
                              {title}
                          </p>
                      </div>
                  </div>
              </div>
            </div>
        </div>
    );
};

export default StatCard;
