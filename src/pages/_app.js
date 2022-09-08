import Footer from '../components/Layout/Footer'
import Header from '../components/Layout/Header'
import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return <>
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem={true}>
      <Header />
      <Component {...pageProps} />
      <div id="contact">
        <Footer />
      </div>
    </ThemeProvider>
  </>
}

export default MyApp
