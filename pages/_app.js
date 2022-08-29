import Footer from '../components/Layout/Footer'
import Header from '../components/Layout/Header'
import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return <>
    <ThemeProvider attribute='class'>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  </>
}

export default MyApp
