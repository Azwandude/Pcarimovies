import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../component/header'
import '../component/footer'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
