import React from 'react';

type CustomToastProps = {
  children: React.ReactNode;
}

const CustomToast = ({children}: CustomToastProps ) => {
  return (
    <div className='invisible w-[min(95%,38rem)] px-4 py-2 border border-gray-200 flex justify-center items-center bg-white mb-8 mx-auto rounded-md'>
      <p className='w-full text-base font-medium text-pink-950 opacity-50'>
        {children}
      </p>
    </div>
  )
}

export default CustomToast