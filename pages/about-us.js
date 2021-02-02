import MainLayout from "../layouts/main";
import styles from '../styles/About.module.css'

export default function About() {
  return (
    <div>
      <div>
        <div>
          <img src="/images/tentang_kami_background.png" className="d-none d-xs-none d-sm-none d-lg-block" width="100%"/>
          <img src="/images/tentang_kami_background_sm.png" className="d-block d-lg-none" width="100%"/>
        </div>
        <div className={styles.section}>
          <div className="container">
            <p>
              Generasi cerdas menjadi target dari berbagai kalangan saat ini. Target ini perlu dimulai dari tumbuh kembang anak usia dini yang optimal. Sayangnya, pengasuhan dan pendidikan anak usia dini masih belum banyak tersentuh. Di Indonesia, masih banyak praktik pengasuhan yang ditemukan belum efektif.
            </p>
            <p>
              Lab Pintar hadir untuk membantu para orang tua mendapatkan informasi parenting berbasis penelitian yang bisa diandalkan untuk pola asuh, asah, dan asih anak yang lebih efektif. Kami percaya, menghadirkan orang tua yang cerdas dan siap mendidik anak adalah kunci penting mewujudkan generasi cerdas di masa depan. Sejak April 2020, Lab Pintar rutin menyajikan informasi mengenai pola asuh, asah, dan asih anak serta kesehatan keluarga setiap minggunya.
            </p>
            <p>
              Lab Pintar telah terpilih untuk mempresentasikan hasil penelitiannya di Seminar Internasional Excellence in Pediatrics 2020, mempublikasikan abstrak penelitian di Cogent Medicine, dan memenangkan kompetisi Wirausaha Muda Mandiri sebagai runner-up kategori business plan bidang kreatif se-DKI Jakarta, Banten, dan Jawa Barat.          
            </p>
            <h3 className="mt-5">
              Visi Lab Pintar
            </h3>
            <p>
              Menjadi platform yang mempromosikan pengambilan keputusan berbasis bukti (evidence-based decision-making) untuk generasi Indonesia di masa depan yang cerdas, sehat, dan berdaya.
            </p>
            <h3 className="mt-5">
              Misi Lab Pintar
            </h3>
            <ul>
              <li>Membumikan pengetahuan berbasis bukti ilmiah sebagai upaya mengoptimalkan kecerdasan anak, perbaikan gizi, kesehatan, dan isu kewanitaan di Indonesia.</li>
              <li>Mengumpulkan data dasar untuk mengidentifikasi populasi yang memerlukan dukungan pertumbuhan dan perkembangan.</li>
              <li>Menerapkan intervensi kecerdasan anak dan gizi dengan evaluasi berbasis data.</li>
            </ul>
            <div className={`row dflex text-center mt-5 ms-0 me-0 ${styles.sectionSocmed}`}>
              <div className={`col-lg-3 col-md-6 align-self-center ${styles.socmedItem}`}>
                <a href="https://www.instagram.com/labpintar/" target="_blank"><img src='/icons/instagram.png' height="26px" /> &nbsp;&nbsp; @labpintar</a>
              </div>
              <div className={`col-lg-3 col-md-6 align-self-center  ${styles.socmedItem}`}>
                <a href="https://twitter.com/lab_pintar" target="_blank"><img src='/icons/twitter.png' height="20px" /> &nbsp;&nbsp; @lab_pintar</a>
              </div>
              <div className={`col-lg-3 col-md-6 align-self-center ${styles.socmedItem}`}>
                <a href="https://facebook.com/labpintar" target="_blank"><img src='/icons/facebook.png' height="20px" /> &nbsp;&nbsp; Lab Pintar</a>
              </div>
              <div className={`col-lg-3 col-md-6 align-self-center ${styles.socmedItem}`}>
                <a href="mailto:mail.labpintar@gmail.com"><img src='/icons/email.png' height="20px" /> &nbsp;&nbsp; mail.labpintar@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
About.Layout = MainLayout