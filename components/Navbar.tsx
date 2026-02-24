"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/#home">
            <Image src="/images/logo/logo-white-bg-tran.png" alt="Logo" width={50} height={50} />
          </Link>
        </div>

        <ul className={`${styles.navLinks} ${isOpen ? styles.open : ""}`}>
          {/* Dedicated close button for mobile inside the menu */}
          <div className={styles.mobileCloseBtn} onClick={toggleMenu}>
            <i className="ri-close-line"></i>
          </div>
          <li className={styles.link}><Link href="/#home" onClick={toggleMenu}>Home</Link></li>
          <li className={styles.link}><Link href="/#features" onClick={toggleMenu}>Features</Link></li>
          <li className={styles.link}><Link href="/#project" onClick={toggleMenu}>Project</Link></li>
          <li className={styles.link}><Link href="/#certificate" onClick={toggleMenu}>Certificate</Link></li>
          <li className={styles.link}><Link href="/#about" onClick={toggleMenu}>About</Link></li>
        </ul>

        <div className={styles.actions}>
          <button className="btn">Hire Me</button>
          <div className={styles.hamburger} onClick={toggleMenu}>
            <i className={`ri-${isOpen ? "close-line" : "menu-3-line"}`}></i>
          </div>
        </div>
      </div>
    </nav>
  );
}
