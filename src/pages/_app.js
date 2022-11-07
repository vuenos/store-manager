import '../../styles/globals.css'
import SSRProvider from 'react-bootstrap/SSRProvider';

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>
  )
}

export default MyApp
