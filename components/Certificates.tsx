import Image from 'next/image';
import Link from 'next/link';
import { certificatesData } from '@/data/certificates';
import styles from './Certificates.module.css';

interface CertificatesProps {
  limit?: number;
  hideViewAll?: boolean;
}

export default function Certificates({ limit, hideViewAll = false }: CertificatesProps) {
  const displayedCertificates = limit ? certificatesData.slice(0, limit) : certificatesData;
  return (
    <section id="certificate" className="section">
      <h2 className="section-title">Certificates</h2>
      <p className="section-subtitle">
        Sertifikasi profesional dan pencapaian akademik yang telah saya raih untuk meningkatkan kompetensi di bidang IT.
      </p>

      <div className={styles.grid}>
        {displayedCertificates.map((cert, idx) => (
          <div key={idx} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image 
                src={cert.image} 
                alt={cert.title} 
                width={400} 
                height={280} 
                className={styles.image} 
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <div className={styles.content}>
              <h4 className={styles.title}>{cert.title}</h4>
              <Link href={cert.link} target="_blank" className={styles.link}>
                See Credential <i className="ri-external-link-line"></i>
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      {!hideViewAll && certificatesData.length > (limit || certificatesData.length) && (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <Link href="/certificates" className="btn btn-outline">
            View All Certificates
          </Link>
        </div>
      )}
    </section>
  );
}
