import Image from "next/image";

// import components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// import style
import "./projects-page.css"

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

export default function ProjectPage() {
    return (
        <>
            <Navbar />
            <main className="container">
                {/* <!-- Struktur utama diubah, sidebar dihapus --> */}
                <div className="project-page-layout">

                    {/* <!-- PROJECT LIST mengisi lebar penuh --> */}
                    <section className="project-list">
                        <h1>// PROJECT ARCHIVE LOG //</h1>

                        {/* <!-- DETAIL CARD 1: INTRUSION DETECTION MODEL --> */}
                        <div className="project-detail-card">
                            <div className="project-header">
                                <h3>PROBABILISTIC BAYESIAN LSTM FOR AUTONOMOUS CRYPTO TRADING</h3>
                                <div className="project-tags">
                                    <span>PYTHON</span>
                                    <span>PYTORCH</span>
                                    <span>TIME-SERIES FORECASTING</span>
                                </div>
                            </div>
                            <p>STATUS: OFFLINE (V1.1) | LAST UPDATE: 09-01-2026</p>
                            <p>A probabilistic forecasting model designed to predict cryptocurrency returns and future risks for intelligent trading strategies. Utilizing Bayesian Long Short-Term Memory (BLSTM), the model successfully manages risk and achieves optimized returns even within volatile market conditions.</p>
                            <div className="cta-group">
                                <a href="https://huggingface.co/fikrimulyana/crypto-blstm-v1">VIEW MODEL AT HUGGINGFACE [ &gt;&gt; ]</a>
                            </div>
                        </div>

                        {/* <!-- DETAIL CARD 1: INTRUSION DETECTION MODEL --> */}
                        <div className="project-detail-card">
                            <div className="project-header">
                                <h3>QUANT DRILL: ADAPTIVE MENTAL ARITHMETIC FOR QUANTS</h3>
                                <div className="project-tags">
                                    <span>NEXT.JS</span>
                                    <span>TOOLS</span>
                                    <span>WEB APP</span>
                                </div>
                            </div>
                            <p>STATUS: ONLINE (V1.1) | LAST UPDATE: 01-01-2026</p>
                            <p>A Next.js web application designed for quantitative traders to sharpen mental math and logical speed. Features an ELO-based adaptive difficulty system to tailor challenges to the user's skill level.</p>
                            <div className="cta-group">
                                <a href="/quants-drill">VIEW LIVE PROJECT [ &gt;&gt; ]</a>
                                <a href="https://github.com/fikrinotes/personal-website/tree/main/src/app/quants-drill">GITHUB SOURCE [ &gt;&gt; ]</a>
                            </div>
                        </div>

                        {/* <!-- DETAIL CARD 1: INTRUSION DETECTION MODEL --> */}
                        <div className="project-detail-card">
                            <div className="project-header">
                                <h3>EXPLAINABLE DNN FOR NETWORK INTRUSION DETECTION</h3>
                                <div className="project-tags">
                                    <span>PYTHON</span>
                                    <span>TENSOWFLOW</span>
                                    <span>DEEP LEARNING</span>
                                </div>
                            </div>
                            <p>STATUS: OFFLINE (V1.1) | LAST UPDATE: 31-07-2025</p>
                            <p>A high-performance Deep Neural Network (DNN) model for network security, integrating SHAP (Shapley Additive Explanations) to provide model transparency. Published in a Scopus Q2-indexed journal (2026).</p>
                            <div className="cta-group">
                                <a href="http://scholar.unand.ac.id/502315/">VIEW REPORT [ &gt;&gt; ]</a>
                                <a href="https://github.com/fikrinotes/DNN-IDS">GITHUB SOURCE [ &gt;&gt; ]</a>
                            </div>
                        </div>

                        {/* <!-- DETAIL CARD 2: EID BLESSING HUNTER GAME --> */}
                        <div className="project-detail-card">
                            <div className="project-header">
                                <h3>EID BLESSING HUNTER GAME</h3>
                                <div className="project-tags">
                                    <span>JAVASCRIPT</span>
                                    <span>HTML CANVAS</span>
                                    <span>GAME DEV</span>
                                </div>
                            </div>
                            <p>STATUS: ONLINE (V1.1) | LAST UPDATE: 17-06-2025</p>
                            <p>An engaging interactive web game developed to celebrate Eid al-Fitr 2025. Experience the festive spirit through this entertaining mini-game.</p>
                            <div className="cta-group">
                                <a href="https://fikrinotes.github.io/eid-blessing-hunter-game/">VIEW LIVE PROJECT [ &gt;&gt; ]</a>
                                <a href="https://github.com/fikrinotes/fikrinotes.github.io/tree/master/eid-app">GITHUB SOURCE [ &gt;&gt; ]</a>
                            </div>
                        </div>

                        {/* <!-- DETAIL CARD 3: INTERGALACTIC WAR --> */}
                        <div className="project-detail-card">
                            <div className="project-header">
                                <h3>INTERGALACTIC WAR</h3>
                                <div className="project-tags">
                                    <span>JAVASCRIPT</span>
                                    <span>GAME DEV</span>
                                </div>
                            </div>
                            <p>STATUS: ONLINE (V1.0) | LAST UPDATE: 2020-09-10</p>
                            <p>A classic arcade-style game built with JavaScript, focusing on fundamental game engine mechanics such as object movement, sprite rendering, and collision detection.</p>
                            <div className="cta-group">
                                <a href="https://fikrinotes.netlify.app/javascriptproject-menu/intergalacticwar/">VIEW LIVE PROJECT [ &gt;&gt; ]</a>
                                <a href="https://github.com/fikrinotes/fikrinotes.github.io/tree/master/IntergalacticWar">GITHUB SOURCE [ &gt;&gt; ]</a>
                            </div>
                        </div>

                        {/* <!-- DETAIL CARD 3: Encryption App --> */}
                        <div className="project-detail-card">
                            <div className="project-header">
                                <h3>HILL CIPHER ENCRYPTION APP</h3>
                                <div className="project-tags">
                                    <span>PYTHON</span>
                                    <span>ALGEBRA</span>
                                </div>
                            </div>
                            <p>STATUS: OFFLINE (V1.0) | LAST UPDATE: 10-08-2022</p>
                            <p>A desktop-based application for secure message encryption using the Hill Cipher method. Developed as a practical implementation of Applied Linear Algebra concepts to demonstrate matrix-based cryptography.</p>
                            <div className="cta-group">
                                <a href="https://github.com/fikrinotes/PowerfulPython/blob/main/Encryption%20App/readme.md">LEARN MORE [ &gt;&gt; ]</a>
                                <a href="https://github.com/fikrinotes/PowerfulPython/tree/main/Encryption%20App">GITHUB SOURCE [ &gt;&gt; ]</a>
                            </div>
                        </div>

                        {/* <!-- DETAIL CARD 4: DAILY WORKOUT APP --> */}
                        <div className="project-detail-card">
                            <div className="project-header">
                                <h3>DAILY WORKOUT APP</h3>
                                <div className="project-tags">
                                    <span>JAVASCRIPT</span>
                                    <span>GEMINI AI</span>
                                    <span>TOOLS</span>
                                </div>
                            </div>
                            <p>STATUS: ONLINE (V1.1) | LAST UPDATE: 03-11-2025</p>
                            <p>An experimental fitness application developed through advanced AI-assisted engineering (Gemini AI). Features automated workout scheduling, nutritional intake tracking, and daily progress analytics.</p>
                            <div className="cta-group">
                                <a href="https://fikrinotes.netlify.app/javascriptproject-menu/workout-app/">VIEW LIVE PROJECT [ &gt;&gt; ]</a>
                                <a href="https://github.com/fikrinotes/fikrinotes.github.io/tree/master/Javascriptproject-menu/workout-app">GITHUB SOURCE [ &gt;&gt; ]</a>
                            </div>
                        </div>

                        {/* <!-- DETAIL CARD 5: MATH SOLVER --> */}
                        <div className="project-detail-card">
                            <div className="project-header">
                                <h3>MATH SOLVER: BORING MATH</h3>
                                <div className="project-tags">
                                    <span>JAVASCRIPT</span>
                                    <span>LINEAR ALGEBRA</span>
                                    <span>TOOLS</span>
                                </div>
                            </div>
                            <p>STATUS: ONLINE (V1.0) | LAST UPDATE: 06-08-2021</p>
                            <p>A web application designed to solve systems of linear equations (2 and 3 variables) and quadratic equations. This project focuses on implementing linear algebra concepts for efficient solution calculation.</p>
                            <div className="cta-group">
                                <a href="https://fikrinotes.netlify.app/javascriptproject-menu/boring_math/">VIEW LIVE PROJECT [ &gt;&gt; ]</a>
                                <a href="https://github.com/fikrinotes/fikrinotes.github.io/tree/master/Javascriptproject-menu/Boring_math">GITHUB SOURCE [ &gt;&gt; ]</a>
                            </div>
                        </div>

                        {/* <!-- DETAIL CARD 6: WEATHER APP --> */}
                        <div className="project-detail-card">
                            <div className="project-header">
                                <h3>WEATHER APP</h3>
                                <div className="project-tags">
                                    <span>JAVASCRIPT</span>
                                    <span>API INTEGRATION</span>
                                </div>
                            </div>
                            <p>STATUS: ONLINE (V2.1) | LAST UPDATE: 07-04-2021</p>
                            <p>A web application that utilizes external API data (OpenWeatherMap) to retrieve real-time global weather conditions for various cities, complete with essential information such as humidity and wind speed. A key project for exploring data integration.</p>
                            <div className="cta-group">
                                <a href="#">VIEW LIVE PROJECT [ &gt;&gt; ]</a>
                                <a href="#">GITHUB SOURCE [ &gt;&gt; ]</a>
                            </div>
                        </div>

                        {/* <!-- DETAIL CARD 7: STOPWATCH --> */}
                        <div className="project-detail-card">
                            <div className="project-header">
                                <h3>STOPWATCH</h3>
                                <div className="project-tags">
                                    <span>JAVASCRIPT</span>
                                    <span>TIME INTERVAL</span>
                                    <span>UI DESIGN</span>
                                </div>
                            </div>
                            <p>STATUS: ONLINE (V1.1) | LAST UPDATE: 06-08-2021</p>
                            <p>A simple stopwatch application implemented with JavaScript to measure time with an intuitive UI design. This project was developed to learn time management concepts in JavaScript.</p>
                            <div className="cta-group">
                                <a href="https://fikrinotes.netlify.app/javascriptproject-menu/stopwatch/">VIEW LIVE PROJECT [ &gt;&gt; ]</a>
                                <a href="https://github.com/fikrinotes/fikrinotes.github.io/tree/master/Javascriptproject-menu/Stopwatch">GITHUB SOURCE [ &gt;&gt; ]</a>
                            </div>
                        </div>

                        {/* <!-- DETAIL CARD 8: Calculator --> */}
                        <div className="project-detail-card">
                            <div className="project-header">
                                <h3>CALCULATOR</h3>
                                <div className="project-tags">
                                    <span>JAVASCRIPT</span>
                                    <span>ARITHMETIC OPERATION</span>
                                    <span>UI DESIGN</span>
                                </div>
                            </div>
                            <p>STATUS: ONLINE (V1.1) | LAST UPDATE: 06-08-2021</p>
                            <p>A calculator application with basic arithmetic operations and an intuitive UI design. This project was developed to learn arithmetic operations in JavaScript while also learning to use CSS for complex UI implementation.</p>
                            <div className="cta-group">
                                <a href="https://fikrinotes.netlify.app/javascriptproject-menu/calculator/">VIEW LIVE PROJECT [ &gt;&gt; ]</a>
                                <a href="https://github.com/fikrinotes/fikrinotes.github.io/tree/master/Javascriptproject-menu/Calculator">GITHUB SOURCE [ &gt;&gt; ]</a>
                            </div>
                        </div>

                        {/* <!-- DETAIL CARD 9: Caesar Cipher --> */}
                        <div className="project-detail-card">
                            <div className="project-header">
                                <h3>CAESAR CIPHER</h3>
                                <div className="project-tags">
                                    <span>JAVASCRIPT</span>
                                    <span>CRYPTOGRAPHY</span>
                                    <span>TOOLS</span>
                                </div>
                            </div>
                            <p>STATUS: ONLINE (V1.1) | LAST UPDATE: 06-08-2021</p>
                            <p>A simple message encryption tool using the Caesar Cipher method with a custom encryption key. This project was developed to test my understanding of the concepts and workings of the Caesar Cipher method for message encryption.</p>
                            <div className="cta-group">
                                <a href="https://fikrinotes.netlify.app/javascriptproject-menu/caesarcipher/">VIEW LIVE PROJECT [ &gt;&gt; ]</a>
                                <a href="https://github.com/fikrinotes/fikrinotes.github.io/tree/master/Javascriptproject-menu/CaesarCipher">GITHUB SOURCE [ &gt;&gt; ]</a>
                            </div>
                        </div>

                        {/* <!-- DETAIL CARD 10: BMI Calculator --> */}
                        <div className="project-detail-card">
                            <div className="project-header">
                                <h3>BMI CALCULATOR</h3>
                                <div className="project-tags">
                                    <span>JAVASCRIPT</span>
                                    <span>TOOLS</span>
                                </div>
                            </div>
                            <p>STATUS: ONLINE (V1.1) | LAST UPDATE: 04-08-2021</p>
                            <p>A BMI calculator to calculate body mass index based on weight and height and can be used as an initial reference to assess physical condition.</p>
                            <div className="cta-group">
                                <a href="https://fikrinotes.netlify.app/javascriptproject-menu/caesarcipher/">VIEW LIVE PROJECT [ &gt;&gt; ]</a>
                                <a href="https://github.com/fikrinotes/fikrinotes.github.io/tree/master/Javascriptproject-menu/CaesarCipher">GITHUB SOURCE [ &gt;&gt; ]</a>
                            </div>
                        </div>

                        {/* <!-- DETAIL CARD 10: BMI Calculator --> */}
                        <div className="project-detail-card">
                            <div className="project-header">
                                <h3>GUESS-NUMBER GAME</h3>
                                <div className="project-tags">
                                    <span>JAVASCRIPT</span>
                                    <span>TOOLS</span>
                                </div>
                            </div>
                            <p>STATUS: ONLINE (V1.1) | LAST UPDATE: 07-08-2021</p>
                            <p>A number guessing game where the program selects a random number between 1-100, and the player is asked to guess the number. Players are allowed to guess the number repeatedly, with a penalty of -5 points for each incorrect guess. This game was developed to test how quickly the <i>Binary Search</i> algorithm can assist in the process of finding the correct guess number.</p>
                            <div className="cta-group">
                                <a href="https://fikrinotes.netlify.app/javascriptproject-menu/guess_number_game/">VIEW LIVE PROJECT [ &gt;&gt; ]</a>
                                <a href="https://github.com/fikrinotes/fikrinotes.github.io/tree/master/Javascriptproject-menu/Guess_number_game">GITHUB SOURCE [ &gt;&gt; ]</a>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    )
}