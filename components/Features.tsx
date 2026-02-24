import Link from 'next/link';
import styles from './Features.module.css';

const featuresData = [
  {
    icon: "ri-macbook-line",
    title: "Full Stack Dev",
    description: "Saya bisa membantu membuat aplikasi sederhana end-to-end, dari tampilan yang rapi dan responsif sampai API, database dasar, serta deployment ringan.",
    color: "#3b82f6" // blue
  },
  {
    icon: "ri-bug-line",
    title: "Backend Dev",
    description: "Saya membantu membangun dan merapikan back-end agar lebih terstruktur, aman secara basic, mudah dikembangkan, dan enak dipelihara ke depannya.",
    color: "#10b981" // green
  },
  {
    icon: "ri-database-line",
    title: "Data Engineering",
    description: "Saya bisa membantu menyiapkan data: cleaning, transformasi, dan pipeline sederhana agar data lebih siap dianalisis dan dipakai untuk laporan.",
    color: "#f59e0b" // yellow/orange
  },
  {
    icon: "ri-lock-password-line",
    title: "Cyber Security",
    description: "Saya bisa membantu pengecekan keamanan dasar seperti konfigurasi, best practice, dan review sederhana untuk mengurangi risiko dan celah umum.",
    color: "#ef4444" // red
  }
];

export default function Features() {
  return (
    <section id="features" className="section">
      <h2 className="section-title">OUR FEATURES</h2>
      <p className="section-subtitle">
        Layanan yang bisa saya bantu untuk kebutuhan digital dan teknologi Anda.
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
              Hubungi Saya <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
