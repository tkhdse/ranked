import NavigationBar from "./components/navbar"
import Modal from "./components/modal"
import { Poppins } from 'next/font/google'
import './globals.css'

// can be used to make a component that shows up on every page of the app

export const metadata = {
  title: 'ranked',
  description: 'Generated by create next app',
}

const inter = Poppins({ 
  subsets: ['latin'],
  weight: '400'
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <NavigationBar/>
          <Modal isOpen={true} title="Login"/>

        {children}
        
      </body>
    </html>
  )
}
