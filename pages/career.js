import MainLayout from "../layouts/main";
import styles from '../styles/Page.module.css'

export default function Career() {
  return (
    <div>
      <div className={styles.section}>
        <div className="container">
          <div className="text-center">
            <h1>Berkarir di LabPintar</h1>
            <p>
              Tertarik untuk bergabung di Tim Lab Pintar?
            </p>
          </div>
          <div className="pb-5 pt-5">
            <div className="row d-flex justify-content-center">
              <div className="col-md-3">
                <div className={styles.card}>
                  <img src="/images/career/kontributor.png" /><br/><br/>
                  Kontributor
                </div>
              </div>
              <div className="col-md-3">
                <div className={styles.card}>
                  <img src="/images/career/desain_grafis.png" /><br/><br/>
                  Desain Grafis
                </div>
              </div>
              <div className="col-md-3">
                <div className={styles.card}>
                  <img src="/images/career/engineer.png" /><br/><br/>
                  Software Engineer
                </div>
              </div>
            </div>            
          </div>
          <div className="text-center">
            Kirim langsung CV Anda, atau kontak kami untuk informasi lebih lanjut di <a href="mailto:mail.labpintar@gmail.com" className="primary-link">mail.labpintar@gmail.com</a>.
          </div>
        </div>            
      </div>
    </div>
  )
}

Career.Layout = MainLayout