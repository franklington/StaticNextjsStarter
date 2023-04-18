import '../styles/app.scss'

import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';


function MyApp({ Component, pageProps }) {
  return ( <>
    <DefaultSeo {...SEO} />
    <div className='container'>
    <Header/>
    <Component {...pageProps} />
    </div>
    <Footer />
  </>)
}

export default MyApp
