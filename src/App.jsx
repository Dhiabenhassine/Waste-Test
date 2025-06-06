import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import './App.css';
import NavHeader from './components/NavHeader';
import {ConfirmButton} from './components/Button';
const App = () => {
  const [skips, setSkips] = useState([]);
  const [selectedSkip, setSelectedSkip] = useState(null);

  useEffect(() => {
    fetch('https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft')
      .then(response => response.json())
      .then(data => {
        const formattedSkips = data.map(skip => ({
          size: `${skip.size} Yards`,
          price: skip.price_before_vat,
          days: skip.hire_period_days,
          allowed: skip.allowed_on_road === false
          
        }));
        setSkips(formattedSkips);
      })
      .catch(error => console.error('Error fetching skip data:', error));
  }, []);

  const handleSelect = (skip) => {
    setSelectedSkip((prevSkip) => (prevSkip === skip ? null : skip));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-2 relative">
      <NavHeader/>
      <h1 className="text-2xl font-semibold text-center mb-4">Choose Your Skip Size</h1>
      <p className="text-center text-gray-400 mb-4 text-sm">Select the skip size that best suits your needs</p>
<div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-2 max-w-5xl mx-auto ${selectedSkip ? 'pb-44' : ''}`}>
        {skips.map((skip, index) => (
          <Card
            key={index}
            size={skip.size}
            price={skip.price}
            days={skip.days}
            image={skip.image}
            allowed={skip.allowed}
            onSelect={() => handleSelect(skip)}
            isSelected={selectedSkip === skip}
          />
        ))}
      </div>
      {selectedSkip && (
  <div className="fixed bottom-0 left-0 right-0 bg-[#1C1C1C] border-t border-[#2A2A2A] p-4 animate-slideUp z-50">
    <div className="max-w-7xl mx-auto">
      <div className="mb-3 text-xs text-gray-400 text-center leading-snug">
        Imagery and information shown throughout this website may not reflect the exact shape or size specification, colours may vary, options and/or accessories may be featured at additional cost.
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-6">
  <p className="text-sm text-gray-400">{selectedSkip.size}</p>
  <div>
    <span className="text-2xl font-bold text-[#FFD700]">£{selectedSkip.price}</span>
    <span className="text-sm text-gray-400 ml-2">{selectedSkip.days} day hire</span>
  </div>
</div>

        <ConfirmButton />
      </div>
    </div>
  </div>
)}


    
    </div>
  );
};

export default App;