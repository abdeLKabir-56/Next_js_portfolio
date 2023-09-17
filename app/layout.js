import Navbar from './components/Navbar'
import Provider from './components/Provider'
import './globals.css'
import { Inter } from 'next/font/google'
import ParticleBackground from './components/ParticleBackground';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressContentEditableWarning>
      <body className={`${inter.className} light:bg-white text-black dark:bg-[#090908]
       dark:text-white h-full selection:bg-gray-50 dark:selection:bg-gray-800`}>
        <Provider>
          <Navbar />
          <ParticleBackground />
          <main className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>

            {children}
          </main>
        </Provider>
        </body>
    </html>
  )
}
