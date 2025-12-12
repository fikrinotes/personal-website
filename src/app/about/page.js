import Image from "next/image";

// import components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// import style
import "./about.css"

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


export default function About() {
    return (
        <>
            <Navbar />
            <main className="container">
                <section className="about-section">
                    
                    <div className="about-header">
                        <h1>[ // PROFILE DATA LOADED // ]</h1>
                        <p>FILE NAME: FIKRI_M_SETIAWAN_V2.0.LOG</p>
                    </div>

                     {/* PROFILE INFO CARD  */}
                    <div className="profile-info">
                        <div className="profile-photo">
                            <Image 
                                src="/img/profile-pic.png" 
                                alt="Fikri Mulyana Setiawan" 
                                width={3} 
                                height={4} 
                                className="photo"
                                layout="responsive"
                            />
                        </div>
                        <div className="profile-details">
                            <h2>FIKRI MULYANA SETIAWAN</h2>
                            <p>
                                Saya adalah seorang lulusan jurusan Matematika dengan fokus kajian pada penerapan <i>Deep Learning</i> dan <i>Explainable AI</i> (XAI) untuk pengambilan keputusan yang bijak dan terukur. Saya senang mengeksplorasi persimpangan antara Matematika dan Ilmu Komputer, serta bagaimana keduanya dapat bersinergi untuk menciptakan solusi inovatif.
                            </p>
                            <p>
                                Saya tertarik untuk mempelajari banyak hal, mulai dari Kecerdasan Buatan, <i>Game Development</i>, pengembangan perangkat lunak, hingga teknologi Web3.
                            </p>
                            <div className="social-links">
                                <a href="https://github.com/fikrinotes">GITHUB</a>
                                <a href="https://www.linkedin.com/in/fikri-mulyana-setiawan">LINKEDIN</a>
                                <a href="#">CONTACT</a>
                            </div>
                        </div>
                    </div>

                    {/* <!-- SKILLS MATRIX BARU --> */}
                    <h3>// TECHNICAL SKILLS //</h3>
                    <div className="skills-matrix">
                        
                        <div className="skill-group">
                            <h4>DATA SCIENCE & AI</h4>
                            <div className="skill-list">
                                <span>TENSORFLOW</span>
                                <span>PYTORCH</span>
                                <span>SCIKIT LEARN</span>
                                <span>NUMPY</span>
                                <span>MATPLOTLIB</span>
                                <span>SEABORN</span>
                                <span>PANDAS</span>
                            </div>
                        </div>

                        <div className="skill-group">
                            <h4>PROGRAMMING LANGUAGES</h4>
                            <div className="skill-list">
                                <span>PYTHON</span>
                                <span>JAVASCRIPT</span>
                                <span>JAVA</span>
                                <span>C</span>
                                <span>C++</span>
                                <span>RUBY</span>
                                <span>PASCAL</span>
                            </div>
                        </div>
                        
                        <div className="skill-group">
                            <h4>FRAMEWORKS & LIBRARIES</h4>
                            <div className="skill-list">
                                <span>REACT</span>
                                <span>NEXT JS</span>
                                <span>NODE JS (BASIC)</span>
                                <span>BOOTSTRAP</span>
                                <span>TAILWIND CSS</span>
                            </div>
                        </div>
                        
                        <div className="skill-group">
                            <h4>DATABASES & DATA INTEGRATION</h4>
                            <div className="skill-list">
                                <span>SQL</span>
                                <span>POSTMAN</span>
                                <span>RESTFUL API</span>
                                <span>JSON PARSING</span>
                            </div>
                        </div>

                        <div className="skill-group">
                            <h4>WEB3</h4>
                            <div className="skill-list">
                                <span>SOLIDITY</span>
                                <span>ETHEREUM</span>
                            </div>
                        </div>
                        
                        <div className="skill-group">
                            <h4>TOOLS </h4>
                            <div className="skill-list">
                                <span>GIT / GITHUB</span>
                                <span>VS CODE</span>
                                <span>VIM</span>
                                <span>FIGMA</span>
                            </div>
                        </div>
                        
                    </div>
                    {/* <!-- AKHIR SKILLS MATRIX --> */}

                    {/* <!-- HISTORY TIMELINE --> */}
                    <h3>// EDUCATION //</h3>
                    <div className="history-timeline">
                        
                        <div className="history-entry">
                            <div className="entry-content">
                                <h4>BACHELOR OF SCIENCE IN MATHEMATICS</h4>
                                <span>UNIVERSITAS ANDALAS (2021 - 2025)</span>
                                <p>Memfokuskan studi pada <i>Deep Learning</i>, <i>Explainable AI</i> (XAI) dan analisis statistik. Meraih gelar penghargaan untuk prestasi pada berbagai kompetisi matematika tingkat nasional.</p>
                            </div>
                        </div>

                        <div className="history-entry">
                            <div className="entry-content">
                                <h4>SENIOR HIGH SCHOOL</h4>
                                <span>SMA NEGERI 4 PADANG (2018 - 2021)</span>
                                <p>Berhasil menjuarai beberapa olimpiade fisika tingkat provinsi dan aktif mengikuti ekstra kurikuler debat. Mengisi waktu luang dengan mempelajari dasar-dasar pemrograman.</p>
                            </div>
                        </div>
                    </div> 
                </section>
            </main>

            <Footer />
        </>
    )
}