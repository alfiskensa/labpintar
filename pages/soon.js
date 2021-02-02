import MainLayout from "../layouts/main";
import styles from '../styles/Home.module.css'

export default function Soon() {
  return (
    <div className="container vh-100">
      <div className={styles.section}>
        <div className="dflex text-center pt-5 mt-5">
          <img src="/images/coming_soon_background.png" style={{maxWidth: '600px', width: '100%'}} />
          <br />
          <h1 className="mt-5">
            Segera Hadir..
          </h1>
        </div>
      </div>
    </div>
  )
}
Soon.Layout = MainLayout