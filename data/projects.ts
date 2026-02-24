export interface Project {
  title: string;
  image: string;
  description: string;
  link: string;
}

export const projectsData: Project[] = [
  {
    title: "UMKM Desa Mekar Sawit Website",
    image: "/images/projects/umkm-desamekarsawit-web.png",
    description: "Website untuk UMKM Desa Mekar Sawit yang dibangun menggunakan Next.js, Tailwind CSS, dan TypeScript. Website ini memiliki fitur untuk menampilkan produk UMKM dan informasi tentang UMKM.",
    link: "https://github.com/ghanirahmans/mekarsawit-umkm-web"
  },
  {
    title: "Check Connection IG",
    image: "/images/projects/check-connct-ig-project.png",
    description: "Program sederhana yang memungkinkan pengguna untuk memeriksa koneksi internet mereka dengan mengakses data JSON connection, memberikan umpan balik langsung tentang status koneksi.",
    link: "https://github.com/ghanirahmans/Check-Connection-Instagram"
  },
  {
    title: "Calculator App",
    image: "/images/projects/calc-project.png",
    description: "Aplikasi kalkulator interaktif yang dibangun menggunakan JavaScript murni, HTML, dan CSS. Selain mendukung operasi aritmatika dasar, fitur utamanya adalah penyimpanan riwayat perhitungan memanfaatkan localStorage.",
    link: "https://github.com/ghanirahmans/Calculator-Web-App"
  },
  {
    title: "Simple Authentication",
    image: "/images/projects/auth-project.png",
    description: "Program sederhana yang memungkinkan pengguna melakukan autentikasi menggunakan email dan password, memanfaatkan LocalStorage untuk menyimpan informasi pengguna.",
    link: "https://github.com/ghanirahmans/Authentication"
  },
];
