import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout ? Component.Layout : React.Fragment;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
