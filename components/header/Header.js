import Link from 'next/link'
import styles from './Header.module.css'
import React from 'react'

export default function Header(){
  const [showCollapse, setShowCollapse] = React.useState(false);

  return (
    <header className={`${styles.header} navbar navbar-expand-lg`}>
      <nav className="container flex-wrap flex-lg-nowrap">
        <Link href="/">
          <a className={styles.navbarBrand}>
            <img
              src="/images/logo_black_icon.png"
              alt="LabPintar Logo"
              className="logo"          
            />
          </a>
        </Link>
        <button className="navbar-toggler" type="button" onClick={() => setShowCollapse(!showCollapse)}>
          {showCollapse ? <span className="navbar-toggler-icon icon-close"></span> : <span className="navbar-toggler-icon icon-hamburger"></span>}
        </button>
        <div className={`collapse navbar-collapse ${showCollapse && 'show'} `} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto flex-row flex-wrap mb-2 mb-lg-0">
            <li className={`${styles.navItem}`}>
              <Link href="/about-us">
                <a onClick={() => setShowCollapse(false)}>Tentang Kami</a>
              </Link>
            </li>
            <li className={`${styles.navItem}`}>
              <Link href="/research">
                <a onClick={() => setShowCollapse(false)}>Penelitian Kami</a>
              </Link>
            </li>
            <li className={`${styles.navItem}`}>
              <Link href="/product">
              <a onClick={() => setShowCollapse(false)}>Produk</a>
              </Link>
            </li>
          </ul>
          <form className="navbar-nav-form d-flex">
            <Link href="/join-community">
              <a onClick={() => setShowCollapse(false)} className='btn btn-coco'>Gabung Komunitas #SobatPintar</a>
            </Link>
          </form>          
        </div>
      </nav>
    </header>
  )
}