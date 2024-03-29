import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from './viewss/NavBar'
import Footer from './viewss/Footer'
import Navbar from './viewss/Header/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <NavBar></NavBar> */}
      <Navbar/>
        <main className='lg:px-6 px-3'>
        {children}
        </main>
        <Footer/>
        </body>

    </html>
  )
}
