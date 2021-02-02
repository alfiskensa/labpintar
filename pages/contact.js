import MainLayout from "../layouts/main";
import styles from '../styles/Page.module.css'

export default function Contact() {
  return (
    <div>
      <div className={styles.section}>
        <div className="container">
          <div className="text-center">
            <h1>Kontak Kami</h1>
          </div>
          <div className="pb-5 pt-5">
            <div className="row d-flex justify-content-center">
              <div className="col-sm-3">
                <img src="/images/kontak_kami.png" width="100%" />
              </div>
            </div>            
          </div>
          <div className="text-center">
            Masukan, pertanyaan, ataupun pembaharuan informasi pribadi Anda bisa dikirimkan via email ke <a href="mailto:mail.labpintar@gmail.com" className="primary-link">mail.labpintar@gmail.com</a>.
          </div>
        </div>            
      </div>
    </div>
  )
}

Contact.Layout = MainLayout