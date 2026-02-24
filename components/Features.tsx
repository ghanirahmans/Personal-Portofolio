import Link from 'next/link';
import styles from './Features.module.css';

const featuresData = [
  {
    icon: "ri-macbook-line",
    title: "Full Stack Dev",
    description: "Bangun aplikasi end-to-end tanpa repot! Tim Full Stack kami ahli menangani front-end yang user-friendly dan back-end yang powerful.",
    color: "#3b82f6" // blue
  },
  {
    icon: "ri-bug-line",
    title: "Backend Dev",
    description: "Kami pastikan sistem belakang aplikasi Anda bekerja cepat, aman, dan efisien. Fokus kami pada performa dan skalabilitas.",
    color: "#10b981" // green
  },
  {
    icon: "ri-database-line",
    title: "Data Engineering",
    description: "Ubah data menjadi aset berharga! Layanan kami membantu Anda mengelola, memproses, dan menyiapkan data untuk analisis cerdas.",
    color: "#f59e0b" // yellow/orange
  },
  {
    icon: "ri-lock-password-line",
    title: "Cyber Security",
    description: "Lindungi sistem dan data. Layanan kami mencakup pencegahan, deteksi, dan respons cepat untuk keamanan total bisnis Anda.",
    color: "#ef4444" // red
  }
];

export default function Features() {
  return (
    <section id="features" className="section">
      <h2 className="section-title">OUR FEATURES</h2>
      <p className="section-subtitle">
        Layanan unggulan kami untuk membantu kebutuhan digitalisasi dan teknologi Anda.
      </p>
      
      <div className={styles.grid}>
        {featuresData.map((feat, idx) => (
          <div key={idx} className={styles.card}>
            <div 
              className={styles.iconWrapper} 
              style={{ '--icon-color': feat.color } as React.CSSProperties}
            >
              <i className={feat.icon}></i>
              <div className={styles.iconGlow}></div>
            </div>
            <h3 className={styles.cardTitle}>{feat.title}</h3>
            <p className={styles.cardDesc}>{feat.description}</p>
            <Link href="#" className={styles.cardLink}>
              Join Now <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
