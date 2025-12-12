import Image from "next/image";


// import components
import Navbar from "@/components/Navbar/index";
import Footer from "@/components/Footer/index";
import ProjectCard from "@/components/ProjectCard/index";

// import style
import "./Home.css"

import { Michroma, Space_Mono } from 'next/font/google';

// Inisialisasi Michroma (hanya 1 weight)
const michroma = Michroma({
  weight: '400', // Wajib diisi karena Michroma hanya punya 1 weight
  subsets: ['latin'],
  variable: '--font-michroma', // Opsional, untuk CSS Variable
});

// Inisialisasi Space Mono (memilih beberapa weight)
const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono', // Opsional, untuk CSS Variable
});

export default function Home() {
  return (
    <>
      <Navbar />
        <main className="container">
          {/* <!-- HERO SECTION (JUDUL UTAMA) --> */}
          <section className="hero">
              <h1> &gt;&gt; HELLO WORLD:</h1>
              <h2>FIKRI MULYANA SETIAWAN</h2>
              <p>//SOFTWARE DEVELOPER & MATHEMATICS STUDENT///</p>
          </section>

          {/* <!-- GRID PROYEK (BRUTALIST CARDS) --> */}
          <section className="projects-grid">
              {/* <!-- Kartu Proyek 1 --> */}
              <ProjectCard title="Weather App" description="Aplikasi web pertama yang menggunakan data API eksternal. Berfungsi menampilkan kondisi cuaca global secara *real-time*." projectUrl="#" />
              {/* <!-- Kartu Proyek 2 --> */}
              <ProjectCard title="BMI Calculator" description="Aplikasi web utilitas untuk menghitung Indeks Massa Tubuh (BMI) secara instan berdasarkan input berat dan tinggi badan." projectUrl="#" />
              {/* <!-- Kartu Proyek 3 --> */}
              <ProjectCard title="Caesar Cipher" description="Program sederhana yang berfungsi untuk melakukan enkripsi dan dekripsi pesan menggunakan metode sandi Caesar." projectUrl="#" />
              {/* <!-- Kartu Proyek 4 --> */}
              <ProjectCard title="Math Solver" description="Aplikasi untuk menyelesaikan persamaan linear dengan dua dan tiga variabel secara otomatis. Memanfaatkan logika pemrograman Python." projectUrl="#" />
              {/* <!-- Kartu Proyek 5 --> */}
              <ProjectCard title="Intergalactic War" description="Game arcade sederhana dengan tema perang antargalaksi yang dibangun menggunakan JavaScript dan HTML Canvas." projectUrl="#" />
              {/* <!-- Kartu Proyek 6 --> */}
              <ProjectCard title="Donkey.js Game" description="Game arcade sederhana di mana pemain harus terus berkendara sambil menghindari keledai yang akan menghalangi jalan." projectUrl="#" />
          </section>
          
          {/* <!-- LOGS JOURNEY SECTION (TIMELINE) --> */}
          <section className="log-journey">
              <h2>LOGS: MY PROGRAMMING JOURNEY</h2>
              <div className="timeline-entry">
                  <span>[ 2018 SEP ]</span>
                  <p>Mulai tertarik dengan programming pada saat kelas 10 SMA karena sebuah kelas TIK di sekolah yang memperkenalkan bahasa pemrograman Pascal.</p>
              </div>
              <div className="timeline-entry">
                  <span>[ 2018 OKT ]</span>
                  <p>Mempelajari Pascal lebih secara mandiri hingga membuat beberapa proyek aplikasi sederhana berbasis Pascal seperti game tebak angka, program aritmatika, dan sebagainya.</p>
              </div>
              <div className="timeline-entry">
                  <span>[ 2019 DES ]</span>
                  <p>Mulai menekuni bahasa pemrograman Python secara otodidak dari website dan buku di sela-sela kesibukan persiapan olimpiade fisika.</p>
              </div>
              <div className="timeline-entry">
                  <span>[ 2020 MEI ]</span>
                  <p>Mempelajari dasar-dasar web development (HTML dan CSS) dari website Khan Academy, dan mempublikasikan web pribadi versi pertama di GitHub Pages.</p>
              </div>
              <div className="timeline-entry">
                  <span>[ 2020 JUL ]</span>
                  <p>Memperbaiki struktur dan desain web sebelumnya dengan style CSS yang lebih kompleks. Mempelajari JavaScript dan mengimplementasikannya dengan mengembangkan berbagai proyek. Disaat yang sama juga mempelajari pengembangan Graphical User Interface pada Python menggunakan library TKinter.</p>
              </div>
              <div className="timeline-entry">
                  <span>[ 2020 AGU ]</span>
                  <p>Mempelajari bahasa pemrograman Java dan mengerjakan tantangan programmin pada platform online seperti CodeWars, Project Euler, dsb.</p>
              </div>
              <div className="timeline-entry">
                  <span>[ 2022 JAN ]</span>
                  <p>Mulai tertarik pada bidang Data Science, mempelajari R dan Python untuk analisis statistik, pengembangan model Machine Learning & Deep Learning, dan penggunakan teknik Explainable AI (XAI).</p>
              </div>
              <div className="timeline-entry">
                  <span>[ 2025 OKT ]</span>
                  <p>Mempelajari dasar dasar mata uang kripto, blockchain, dan Web3. Membangun proyek Decentralized App (DApp) pertama menggunakan solidity dan Ethereum.</p>
              </div>
          </section>
        </main>
      <Footer />
    </>
  )
}
