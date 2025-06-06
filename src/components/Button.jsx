import React from 'react'

export const ConfirmButton=() =>{
  return (
              <div className="flex items-center gap-4">
        <button className="btn-secondary">Back</button>
     <button className="bg-[#FFD700] text-black hover:bg-[#e6c200] flex items-center gap-2 px-4 py-2 rounded">
  Continue
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
       viewBox="0 0 24 24" fill="none" stroke="currentColor"
       strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
       className="lucide lucide-arrow-right w-4 h-4">
    <path d="M5 12h14"></path>
    <path d="m12 5 7 7-7 7"></path>
  </svg>
</button>

      </div>
  )
}

export const CardButton=({onSelect, isSelected})=>{
    return(
        <div>
            <button
              onClick={onSelect}
              className={`w-full py-1 sm:py-2 rounded ${
                isSelected ? 'bg-green-600' : 'bg-green-500'
              } text-white hover:bg-green-600 transition-colors text-sm sm:text-base`}
            >
              {isSelected ? 'Selected' : 'Select This Skip'}
            </button>
        </div>
    )
}