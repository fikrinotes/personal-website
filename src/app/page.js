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
              <ProjectCard title="Intrusion Detection Model" description="Model Deep Neural Network (DNN) untuk deteksi intrusi pada jaringan menggunakan Python dengan framework Tensorflow dan scikit-learn." projectUrl="https://github.com/fikrinotes/DNN-IDS" />
              {/* <!-- Kartu Proyek 2 --> */}
              <ProjectCard title="Eid Blessing Hunter Game" description="Game interaktif bertema Idul Fitri yang dirancang untuk memeriahkan perayaan Idul Fitri 2025. " projectUrl="https://fikrinotes.github.io/eid-blessing-hunter-game/" />
              {/* <!-- Kartu Proyek 3 --> */}
              <ProjectCard title="Intergalactic War" description="Game sederhana yang dibangun menggunakan JavaScript dengan konsep perang antara manusia dan alien. " projectUrl="https://fikrinotes.netlify.app/javascriptproject-menu/intergalacticwar/" />
              {/* <!-- Kartu Proyek 4 --> */}
              <ProjectCard title="Boring Math" description="Apikasi web yang dikembangkan untuk menyelesaikan sistem persamaan linear (SPL) 2, 3 variabel, dan persamaan kuadrat." projectUrl="https://fikrinotes.netlify.app/javascriptproject-menu/boring_math/" />
              {/* <!-- Kartu Proyek 5 --> */}
              <ProjectCard title="Hill Cipher Encryption App" description="Sebuah aplikasi berbasis desktop untuk enkripsi pesan menggunakan metode Hill Cipher. Dikembangkan dengan bahasa pemrograman Python." projectUrl="https://github.com/fikrinotes/PowerfulPython/tree/main/Encryption%20App" />
              {/* <!-- Kartu Proyek 6 --> */}
              <ProjectCard title="Daily Workout App" description="Satu-satunya aplikasi saya yang dikembangkan sepenuhnya oleh AI Gemini. Memiliki fitur jadwal olahraga harian, asupan nutrisi yang diperlukan, dan statistik harian." projectUrl="https://fikrinotes.netlify.app/javascriptproject-menu/workout-app/" />
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
