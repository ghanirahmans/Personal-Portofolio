import Image from 'next/image';
import Link from 'next/link';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.imageColumn}>
          <div className={styles.imageWrapper}>
            <div className={styles.imageBorder}>
              <Image 
                src="/images/hero/myphoto2.jpg" 
                alt="Ghaniyyir Rahman" 
                width={700} 
                height={800} 
                className={styles.image}
              />
            </div>
            <div className={styles.block1}></div>
            <div className={styles.block2}></div>
          </div>
          
          <div className={styles.actions}>
            <Link href="mailto:ghaniyyirrahmansn@gmail.com" className="btn">
              <i className="ri-mail-send-line"></i> Email Me
            </Link>
            <Link href="https://github.com/ghanirahmans" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              <i className="ri-github-fill"></i> GitHub
            </Link>
            <Link href="https://linkedin.com/in/ghaniyyir-rahmans" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              <i className="ri-linkedin-fill"></i> LinkedIn
            </Link>
            <Link href="https://youtube.com/@GhaniRahmans" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              <i className="ri-youtube-fill"></i> YouTube
            </Link>
            <Link href="https://instagram.com/ghani.rahmans" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              <i className="ri-instagram-fill"></i> Instagram
            </Link>
          </div>
        </div>
        
        <div className={styles.contentColumn}>
          <h2 className={styles.title}>About <span className={styles.highlight}>Me</span></h2>
          <h3 className={styles.subtitle}>Backend Developer & Data Enthusiast</h3>
          
          <p className={styles.description}>
            Saya mahasiswa Teknologi Informasi di Universitas Muhammadiyah Sumatera Utara. Saya tertarik mendalami pengembangan <strong>back-end</strong>, <strong>data engineering</strong>, dan praktik <strong>keamanan</strong> dasar agar sistem lebih rapi dan aman digunakan.
          </p>
          
          <p className={styles.description}>
            Fokus saya membangun sisi server yang cepat dan mudah dikembangkan, serta membuat API yang jelas dan konsisten (RESTful/GraphQL). Saya terbiasa menggunakan ekosistem Node.js, database relasional (PostgreSQL, MySQL), dan ORM seperti Prisma untuk mempercepat pengembangan.
          </p>
          
          <div className={styles.statsGrid}>
            <div className={styles.statBox}>
              <h4 className={styles.statNumber}>6+</h4>
              <p className={styles.statLabel}>Projects Completed</p>
            </div>
            <div className={styles.statBox}>
              <h4 className={styles.statNumber}>5+</h4>
              <p className={styles.statLabel}>Certifications</p>
            </div>
            <div className={styles.statBox}>
              <h4 className={styles.statNumber}>1+</h4>
              <p className={styles.statLabel}>Years Coding</p>
            </div>
          </div>
          
          <div className={styles.skillsSection}>
            <h4 className={styles.skillsTitle}>Technologies I Frequently Use:</h4>
            <div className={styles.skillsTags}>
              <span className={styles.tag}><i className="ri-javascript-line"></i> JavaScript</span>
              <span className={styles.tag}><i className="ri-code-s-slash-line"></i> TypeScript</span>
              <span className={styles.tag}><i className="ri-database-line"></i> PostgreSQL</span>
              <span className={styles.tag}><i className="ri-terminal-box-line"></i> Express.js</span>
              <span className={styles.tag}><i className="ri-server-line"></i> Next.js</span>
              <span className={styles.tag}><i className="ri-braces-line"></i> Prisma ORM</span>
              <span className={styles.tag}><i className="ri-cloud-line"></i> AWS Cloud</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
