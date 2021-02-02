import Image from 'next/image'
import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer(){
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="text-center">
          <img
            src="/images/logo_white_icon.png"
            alt="LabPintar Logo"
            className="logo"          
          />      
        </div>
        <hr className={styles.divider}/>
        <div className={`row justify-content-center`}>
          <div className={`${styles.col} col-sm-6`}>
            <span className={styles.titleMenu}>LabPintar</span>
            <Link href="/about-us">Tentang Kami</Link><br/>
            <Link href="/career">Berkarir di Lab Pintar</Link><br/>
            <Link href="/contact">Kontak Kami</Link><br/>
          </div>
          <div className={`${styles.col} col-sm-6`}>
            <span className={styles.titleMenu}>Produk</span>
            <Link href="/product">Kurikulum A(nak)ku Pintar</Link><br/>
          </div>
          <div className={`${styles.col} col-sm-6`}>
            <span className={styles.titleMenu}>Bantuan</span>
            <Link href="/soon">Kebijakan Privasi</Link><br/>
            <Link href="/soon">Syarat dan Ketentuan</Link><br/>
          </div>
          <div className={`${styles.col} col-sm-6`}>
            <span className={styles.titleMenu}>Media Sosial</span>
            <a href="mailto:mail.labpintar@gmail.com">mail.labpintar@gmail.com</a><br/>
            <a href="https://facebook.com/labpintar" target="_blank"> <img src='/icons/facebook.png' height="20px" /> </a>&nbsp;&nbsp;&nbsp;
            <a href="https://www.instagram.com/labpintar/" target="_blank"> <img src='/icons/instagram.png' height="20px" /> </a>&nbsp;&nbsp;&nbsp;
            <a href="https://twitter.com/lab_pintar" target="_blank"> <img src='/icons/twitter.png' height="20px" /> </a>
          </div>
        </div>        
      </div>
    </footer>
  )
}