import Header from '@/components/Header';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ActiveSectionContextProvider from '@/context/active-sectioncontext';
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/Footer';
import ThemeSwitch from '@/components/ThemeSwitch';

import './globals.css';
import ThemeCotextProvider from '@/context/theme-cotext';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sandeep Thakur | Portfolio',
  description: 'Sandeep Thakur is a React/MERN/NextJS Developer with 6months of experience.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={`${inter.className} relative pt-28 sm:pt-36
      bg-gray-50 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 text-gray-950`}>
        <div className='bg-[#fbe2e3] -z-10 absolute top-[-6rem] right-[11rem] h-[31.25rem]
        w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]'></div>
        <div className='bg-[#dbd7fb] -z-10 absolute top-[-1rem] left-[-35rem] h-[31.25rem]
        w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem]
        lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]'></div>

        <ThemeCotextProvider>
          <ActiveSectionContextProvider>
            <Header/>
            {children}
            <Toaster position='top-right'/>
            <Footer/>
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeCotextProvider>
        
      </body>
    </html>
  )
}
