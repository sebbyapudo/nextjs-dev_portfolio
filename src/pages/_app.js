import '@/styles/globals.css'
import {Montserrat} from 'next/font/google'

const montserrat = ({
  subsets: ["latin"],
  variable: "--font-mont"
})

export default function App({ Component, pageProps }) {
  return (
    <main className={`${montserrat.variable} font-sans`}>
      <Component {...pageProps} />
    </main> 
  )
  
}
