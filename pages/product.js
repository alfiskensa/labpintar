import Link from 'next/link'
import MainLayout from "../layouts/main";
import styles from '../styles/Home.module.css'

function HeroSubscribe() {
  return (
    <div className={styles.heroSubscribe}>
      <div className='container' style={{height: '100%'}}>
        <div className={`row justify-content-center`} style={{height: '100%'}}>
          <div className={`col-lg-5 col-md-12 col-sm-12 align-self-center`}>
            <div className={styles.productDesc}>
              <span className={styles.productDescHeader}>Kurikulum A(nak)ku Pintar</span>
              <p>
                Kurikulum lengkap untuk orang tua dan calon orang tua! Tersedia dalam bentuk Pelatihan Online dan Buku Ajar yang terkurasi oleh para dokter, psikolog, dan peneliti.
              </p>
            </div>
          </div>
          <div className={`col-lg-5 col-md-12 col-sm-12 align-self-center`}>
            <div className="card card-subscribe">
              <div className='card-content'>
                <h1 className='title mb-4'>
                  Pilih paket langganan disini
                </h1>
                <select className="form-select" aria-label="Default select example" disabled>
                  <option value="1">Pelatihan online 6 bulan</option>
                  <option value="2">Pelatihan online 3 bulan</option>
                  <option value="3">Pelatihan online 1 bulan</option>
                </select>
              </div>
              {/* <div className="detail-paket mb-4">
                <div className='card-content'>
                  <h1 className='title mb-4'>
                    Harga Paket
                  </h1>                
                  <hr />  
                  <div className="d-flex justify-content-between">
                    <div>
                      <span className="harga-coret">
                        Rp 540.000
                      </span><br/>
                      <span className="harga">
                        Rp 540.000
                      </span>                      
                    </div>
                    <div>
                      <span className='mybadge'>
                        &nbsp;&nbsp;
                        <span className='color-yellow'>
                          Hemat
                        </span>&nbsp;
                        <span className='color-white'>
                          Rp 45000/bulan
                        </span>
                      </span>
                    </div>
                  </div>
                  <hr />  
                  <div className="d-flex justify-content-between kodediskon">
                    <div>
                      Kode Diskon
                    </div>
                    <div>
                      #ortupintar
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="mb-4 container">
                <div className="d-grid">
                  <Link href="/soon">
                    <a className='btn btn-yellow'>
                      Langganan Sekarang
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Product() {
  return (
    <div>
      <div>
        <HeroSubscribe />
      </div>
    </div>
  )
}

Product.Layout = MainLayout