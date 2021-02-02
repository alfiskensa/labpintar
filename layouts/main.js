import Head from 'next/head'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

export default function MainLayout({ children }) {
  return (
    <>
      <Head>
        <title>Lab Pintar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main>
        {children}
      </main>
      <Footer/>
    </>
  )
}