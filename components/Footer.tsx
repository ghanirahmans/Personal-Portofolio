import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer id="about" className={styles.footer}>
      <div className={`${styles.glow1} glow-blur`}></div>
      <div className={`${styles.glow2} glow-blur`}></div>
      
      <div className={styles.container}>
        <div className={styles.column}>
          <div className={styles.logo}>
            <Image src="/logo/logo-white-bg-tran.png" alt="Logo" width={80} height={80} />
          </div>
          <p className={styles.description}>
            Personal portfolio website that focuses on website development, especially backend, scalable architecture, and fullstack capabilities.
          </p>
          <div className={styles.socials}>
            <Link href="https://www.youtube.com/@GhaniRahmans" target="_blank" className={styles.socialIcon}>
              <i className="ri-youtube-line"></i>
            </Link>
            <Link href="https://www.instagram.com/ghani.rahmans/" target="_blank" className={styles.socialIcon}>
              <i className="ri-instagram-line"></i>
            </Link>
            <Link href="https://www.linkedin.com/in/ghaniyyir-rahmans/" target="_blank" className={styles.socialIcon}>
              <i className="ri-linkedin-line"></i>
            </Link>
            <Link href="https://github.com/ghanirahmans" target="_blank" className={styles.socialIcon}>
              <i className="ri-github-line"></i>
            </Link>
          </div>
        </div>

        <div className={styles.linksContainer}>
          <div className={styles.column}>
            <h4 className={styles.colTitle}>Company</h4>
            <Link href="#" className={styles.link}>Business</Link>
            <Link href="#" className={styles.link}>Partnership</Link>
            <Link href="#" className={styles.link}>Network</Link>
          </div>
          
          <div className={styles.column}>
            <h4 className={styles.colTitle}>About Us</h4>
            <Link href="#" className={styles.link}>Blogs</Link>
            <Link href="#" className={styles.link}>Channels</Link>
            <Link href="#" className={styles.link}>Sponsors</Link>
          </div>
          
          <div className={styles.column}>
            <h4 className={styles.colTitle}>Contact</h4>
            <Link href="#" className={styles.link}>Contact Us</Link>
            <Link href="#" className={styles.link}>Privacy Policy</Link>
            <Link href="#" className={styles.link}>Terms & Conditions</Link>
          </div>
        </div>
      </div>
      
      <div className={styles.copyright}>
        Copyright © {new Date().getFullYear()} Ghaniyyir Rahman. All Rights Reserved.
      </div>
    </footer>
  );
}
