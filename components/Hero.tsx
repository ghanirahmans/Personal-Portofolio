import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      {/* Background glow effects */}
      <div className={`${styles.glow1} glow-blur`}></div>
      <div className={`${styles.glow2} glow-blur`}></div>
      
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <i className="ri-code-s-slash-line"></i>
            <span>PORTFOLIO WEBSITE</span>
          </div>
          <h1 className={styles.title}>
            Hi, I'm <span className={styles.highlight}>Ghani</span>,<br/>
            Backend Developer
          </h1>
          <p className={styles.description}>
            Undergraduate in Information Technology at Muhammadiyah University of North Sumatra. I am deeply passionate about backend systems, data engineering, and creating scalable digital experiences.
          </p>
          <div className={styles.actions}>
            <Link href="/#project" className="btn">
              Get Started
            </Link>
            <Link href="/about" className="btn btn-outline">
              Contact Me
            </Link>
          </div>
        </div>
        
        <div className={styles.imageWrapper}>
          <div className={styles.imageBorder}>
            <Image 
              src="/images/hero/myphoto.png" 
              alt="Ghaniyyir Rahman" 
              width={450} 
              height={450} 
              className={styles.image}
              priority
            />
          </div>
          {/* Decorative floating skill elements */}
          <div className={`${styles.floatIcon} ${styles.icon1}`} title="JavaScript"><i className="ri-javascript-fill"></i></div>
          <div className={`${styles.floatIcon} ${styles.icon2}`} title="TypeScript"><i className="ri-code-s-slash-line"></i></div>
          <div className={`${styles.floatIcon} ${styles.icon3}`} title="Express.js"><i className="ri-terminal-box-line"></i></div>
          <div className={`${styles.floatIcon} ${styles.icon4}`} title="Prisma"><i className="ri-database-2-line"></i></div>
          <div className={`${styles.floatIcon} ${styles.icon5}`} title="MySQL"><i className="ri-database-line"></i></div>
          <div className={`${styles.floatIcon} ${styles.icon6}`} title="PostgreSQL"><i className="ri-server-line"></i></div>
        </div>
      </div>
    </section>
  );
}
