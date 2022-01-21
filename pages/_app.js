import { ThemeProvider } from 'styled-components'
import Layout from '../components/Layout'
import theme from '../styles/theme'
import NProgress from 'nprogress'
import Router from 'next/router'

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());
NProgress.configure({ showSpinner: false });

import '../styles/globals.css'
import '../styles/nprogress.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
