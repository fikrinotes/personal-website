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
                                A <i>Master of Science</i> in Mathematics specializing in <i>Deep Learning</i> and <i>Explainable AI (XAI)</i>. My expertise lies at the intersection of rigorous mathematical modeling and scalable computing, focusing on creating transparent, high-stakes decision-making systems. Beyond research, I am a technical tinkerer and community mentor, dedicated to bridging the gap between complex theory and practical, real-world solutions.
                            </p>
                            <p>
                                I am deeply committed to exploring diverse technologic  al frontiers, ranging from <i>Artificial Intelligence</i> and <i>Game Development</i> to <i>Software Engineering</i> and <i>Web3 technologies</i>.
                            </p>
                            <div className="social-links">
                                <a href="https://github.com/fikrinotes">GITHUB</a>
                                <a href="https://www.linkedin.com/in/fikri-mulyana-setiawan">LINKEDIN</a>
                                <a href="https://www.instagram.com/fikrimulyana_s">CONTACT</a>
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
                                <h4>MASTER OF SCIENCE IN MATHEMATICS</h4>
                                <span>UNIVERSITAS ANDALAS (2025 - 2027)</span>
                                <p>Specialized in <i>Computational Mathematics</i> and <i>Financial Modeling</i>. Conducted advanced research on cryptocurrency asset performance analysis utilizing <i>Bayesian Long Short-Term Memory (BLSTM)</i> models.</p>
                            </div>
                        </div>
                        <div className="history-entry">
                            <div className="entry-content">
                                <h4>BACHELOR OF SCIENCE IN MATHEMATICS</h4>
                                <span>UNIVERSITAS ANDALAS (2021 - 2025)</span>
                                <p>Focused studies on <i>Deep Learning</i>, <i>Explainable AI (XAI)</i>, and <i>statistical analysis</i>. Awarded for excellence in various national-level mathematics competitions.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}