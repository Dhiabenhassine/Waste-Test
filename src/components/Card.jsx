import React from 'react';
import { ToggleSwitch } from './Button';
const Cards = ({ size, price, days, allowed, onSelect, isSelected }) => {
  const sizeNumber = parseInt(size.split(' ')[0], 10);
  const imageSrc = sizeNumber >= 20 ? '/largeWaste.jpg' : '/waste.jpg';

  return (
    <div className="flex items-center justify-center bg-gray-900">
      <div className="relative w-56 h-64 sm:w-72 sm:h-80 md:w-80 md:h-96 rounded-2xl bg-gradient-to-b from-gray-700/70 to-gray-900 shadow-[0_25px_50px_rgba(0,0,0,0.55)] cursor-pointer transition-transform duration-300 hover:scale-90 p-3">
        {allowed && (
          <div className="absolute -top-1 -left-2 w-32 h-32 flex items-center justify-center overflow-hidden">
            <div className="absolute w-[150%] h-8 rotate-[-45deg] bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-400 flex items-center justify-center text-black font-semibold tracking-wider shadow-md text-xs">
              Not Allowed On The Road
            </div>
            <div className="absolute bottom-0 left-0 w-2 h-2 -z-10 shadow-[140px_-140px_0_0_#cc3f47] bg-gradient-to-r from-orange-600 via-yellow-400 to-orange-600"></div>
          </div>
        )}

        <div className="flex flex-col h-full">
          <img
            src={imageSrc}
            alt={`${size} Skip`}
            className="w-full h-32 sm:h-40 object-cover rounded-lg"
          />
          <div className="flex flex-col flex-grow justify-between text-center space-y-1 sm:space-y-2 pt-2 px-2">
            <h3 className="text-lg sm:text-xl font-medium text-white">{size}</h3>
            <p className="text-gray-400 text-xs sm:text-sm">{days} day hire period</p>
            
            <p className="text-base sm:text-lg font-semibold text-green-400">£{price}</p>
            <ToggleSwitch onSelect={onSelect} isSelected={isSelected} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;




