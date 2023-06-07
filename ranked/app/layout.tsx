import NavigationBar from "./components/navbar"
import AuthModal from "./components/modals/auth-modal"
import TierList from "./components/tier-list"
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
          <AuthModal/>
          <NavigationBar/>
          <TierList/>
        {children}
        
      </body>
    </html>
  )
}
