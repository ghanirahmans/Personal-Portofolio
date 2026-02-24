import Image from 'next/image';
import Link from 'next/link';
import { projectsData } from '@/data/projects';
import styles from './Projects.module.css';

interface ProjectsProps {
  limit?: number;
  hideViewAll?: boolean;
}

export default function Projects({ limit, hideViewAll = false }: ProjectsProps) {
  const displayedProjects = limit ? projectsData.slice(0, limit) : projectsData;
  return (
    <section id="project" className="section">
      <h2 className="section-title">Projects</h2>
      <p className="section-subtitle">
        Berikut adalah beberapa proyek yang telah saya kerjakan.
      </p>
      
      <div className={styles.grid}>
        {displayedProjects.map((proj, idx) => (
          <div key={idx} className={styles.card}>
            <div className={styles.imageContainer}>
              <Image 
                src={proj.image} 
                alt={proj.title} 
                fill
                style={{ objectFit: 'cover' }}
                className={styles.image}
              />
              <div className={styles.overlay}>
                <Link href={proj.link} target="_blank" className={styles.viewBtn}>
                  <i className="ri-github-fill"></i> View Code
                </Link>
              </div>
            </div>
            <div className={styles.content}>
              <h3 className={styles.title}>{proj.title}</h3>
              <p className={styles.description}>{proj.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      {!hideViewAll && projectsData.length > (limit || projectsData.length) && (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <Link href="/projects" className="btn btn-outline">
            View All Projects
          </Link>
        </div>
      )}
    </section>
  );
}
