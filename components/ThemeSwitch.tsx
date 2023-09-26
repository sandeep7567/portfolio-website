"use client";

import { useTheme } from '@/context/theme-cotext';
import { BsMoon, BsSun } from 'react-icons/bs';

const ThemeSwitch = () => {
  const { toggleTheme, theme } = useTheme();
  return (
    <div className='fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop:blur-[0.5rem]
    border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center
    hover:scale-[1.15] active:scale-105 transition-all duration-200 cursor-pointer dark:bg-gray-950
    '
    onClick={toggleTheme}
    >
      {theme === "dark" ? <BsMoon/> : <BsSun/>}
    </div>
  )
}

export default ThemeSwitch;