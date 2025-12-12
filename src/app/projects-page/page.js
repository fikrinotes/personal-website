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
                                <h3>INTRUSION DETECTION MODEL</h3>
                                <div className="project-tags">
                                    <span>PYTHON</span>
                                    <span>TENSOWFLOW</span>
                                    <span>DEEP LEARNING</span>
                                </div>
                            </div>
                            <p>STATUS: OFFLINE (V1.1) | LAST UPDATE: 31-07-2025</p>
                            <p>Model Deep Neural Network (DNN) untuk deteksi intrusi pada jaringan menggunakan Python dengan framework Tensorflow dan scikit-learn. Model ini mencapai metrik evaluasi yang memuaskan, dengan akurasi hingga 99%.</p>
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
                            <p>Game interaktif bertema Idul Fitri yang dirancang untuk memeriahkan perayaan Idul Fitri 2025. Pemain mengumpulkan <i>blessing items</i> (uang dan kue) sambil menghindari <i>obstacle</i> (serangga). Menggabungkan konsep gamifikasi dengan nuansa budaya lokal, dilengkapi sistem poin dan histori poin tertinggi.</p>
                            <div className="cta-group">
                                <a href="https://fikrinotes.github.io/eid-blessing-hunter-game/">VIEW LIVE PROJECT [ &gt;&gt; ]</a>
                                <a href="https://github.com/fikrinotes/fikrinotes.github.io/tree/master/eid-app">GITHUB SOURCE [ &gt;&gt; ]</a>
                            </div>
                        </div>

                        {/* <!-- DETAIL CARD 3: INTERGALACTIC WAR --> */}
                        <div className="project-detail-card">
                            <div className="project-header">
                                <h3>PROJECT ID: INTERGALACTIC WAR</h3>
                                <div className="project-tags">
                                    <span>JAVASCRIPT</span>
                                    <span>GAME DEV</span>
                                </div>
                            </div>
                            <p>STATUS: ONLINE (V1.0) | LAST UPDATE: 2020-09-10</p>
                            <p>Game sederhana yang dibangun menggunakan JavaScript dengan konsep perang antara manusia dan alien. Proyek ini menggunakan konsep mekanisme game penting seperti pergerakan objek dan <i>collision detection</i>.</p>
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
                                    <span>JAVASCRIPT</span>
                                    <span>GAME DEV</span>
                                </div>
                            </div>
                            <p>STATUS: OFFLINE (V1.0) | LAST UPDATE: 10-08-2022</p>
                            <p>Sebuah aplikasi berbasis desktop untuk enkripsi pesan menggunakan metode Hill Cipher. Dikembangkan dengan bahasa pemrograman Python. Aplikasi ini merupakan luaran tambahan untuk tugas proyek saya di kampus pada mata kuliah Aljabar Linear Terapan 1.</p>
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
                            <p>Satu-satunya aplikasi saya yang dikembangkan sepenuhnya oleh AI Gemini. Memiliki fitur jadwal olahraga harian, asupan nutrisi yang diperlukan, dan statistik harian.</p>
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
                            <p>Apikasi web yang dikembangkan untuk menyelesaikan sistem persamaan linear (SPL) 2, 3 variabel, dan persamaan kuadrat. Proyek ini berfokus pada implementasi konsep aljabar linier untuk perhitungan solusi yang efisien.</p>
                            <div className="cta-group">
                                <a href="https://fikrinotes.netlify.app/javascriptproject-menu/boring_math/">VIEW DEMO [ &gt;&gt; ]</a>
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
                            <p>Aplikasi web yang menggunakan data API eksternal (OpenWeatherMap) untuk mendapatkan informasi kondisi cuaca global secara <i>real-time</i> di berbagai kota, dilengkapi dengan informasi penting seperti kelembaban dan kecepatan angin. Proyek kunci untuk eksplorasi integrasi data.</p>
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
                            <p>Aplikasi stopwatch sederhana yang diimplementasikan dengan JavaScript untuk mengukur waktu dengan desain UI yang intuitif. project ini dikembangkan untuk mempelajari konsep manajemen waktu pada JavaScript.</p>
                            <div className="cta-group">
                                <a href="https://fikrinotes.netlify.app/javascriptproject-menu/stopwatch/">VIEW LIVE PROJECT [ &gt;&gt; ]</a>
                                <a href="https://github.com/fikrinotes/fikrinotes.github.io/tree/master/Javascriptproject-menu/Stopwatch">GITHUB SOURCE [ &gt;&gt; ]</a>
                            </div>
                        </div>

                        {/* <!-- DETAIL CARD 8: Calculator --> */}
                        <div className="project-detail-card">
                            <div className="project-header">
                                <h3>Calculator</h3>
                                <div className="project-tags">
                                    <span>JAVASCRIPT</span>
                                    <span>ARITHMETIC OPERATION</span>
                                    <span>UI DESIGN</span>
                                </div>
                            </div>
                            <p>STATUS: ONLINE (V1.1) | LAST UPDATE: 06-08-2021</p>
                            <p>Aplikasi kalkulator dengan fitur operasi aritmatika dasar dengan desain UI yang intuitif. Proyek ini dikembangkan untuk mempelajari konsep operasi aritmatika pada JavaScript sekaligus mempelajari penggunaan CSS untuk implementasi desain UI yang kompleks.</p>
                            <div className="cta-group">
                                <a href="https://fikrinotes.netlify.app/javascriptproject-menu/calculator/">VIEW LIVE PROJECT [ &gt;&gt; ]</a>
                                <a href="https://github.com/fikrinotes/fikrinotes.github.io/tree/master/Javascriptproject-menu/Calculator">GITHUB SOURCE [ &gt;&gt; ]</a>
                            </div>
                        </div>

                        {/* <!-- DETAIL CARD 9: Caesar Cipher --> */}
                        <div className="project-detail-card">
                            <div className="project-header">
                                <h3>Caesar Cipher</h3>
                                <div className="project-tags">
                                    <span>JAVASCRIPT</span>
                                    <span>CRYPTOGRAPHY</span>
                                    <span>TOOLS</span>
                                </div>
                            </div>
                            <p>STATUS: ONLINE (V1.1) | LAST UPDATE: 06-08-2021</p>
                            <p>Tools enkripsi pesan sederhana menggunakan metode Caesar Cipher dengan kunci enkripsi <i>custom</i>. Proyek ini dikembangkan untuk menguji pemahaman saya mengenai konsep dan cara kerja metode Caesar Cipher untuk enkripsi pesan.</p>
                            <div className="cta-group">
                                <a href="https://fikrinotes.netlify.app/javascriptproject-menu/caesarcipher/">VIEW LIVE PROJECT [ &gt;&gt; ]</a>
                                <a href="https://github.com/fikrinotes/fikrinotes.github.io/tree/master/Javascriptproject-menu/CaesarCipher">GITHUB SOURCE [ &gt;&gt; ]</a>
                            </div>
                        </div>

                        {/* <!-- DETAIL CARD 10: BMI Calculator --> */}
                        <div className="project-detail-card">
                            <div className="project-header">
                                <h3>BMI Calculator</h3>
                                <div className="project-tags">
                                    <span>JAVASCRIPT</span>
                                    <span>TOOLS</span>
                                </div>
                            </div>
                            <p>STATUS: ONLINE (V1.1) | LAST UPDATE: 04-08-2021</p>
                            <p>Kalkulator BMI untuk menghitung indeks massa tubuh berdasarkan berat dan tinggi badan dan dapat digunakan sebagai acuan awal untuk menilai kondisi fisik.</p>
                            <div className="cta-group">
                                <a href="https://fikrinotes.netlify.app/javascriptproject-menu/caesarcipher/">VIEW LIVE PROJECT [ &gt;&gt; ]</a>
                                <a href="https://github.com/fikrinotes/fikrinotes.github.io/tree/master/Javascriptproject-menu/CaesarCipher">GITHUB SOURCE [ &gt;&gt; ]</a>
                            </div>
                        </div>

                        {/* <!-- DETAIL CARD 10: BMI Calculator --> */}
                        <div className="project-detail-card">
                            <div className="project-header">
                                <h3>Guess-Number Game</h3>
                                <div className="project-tags">
                                    <span>JAVASCRIPT</span>
                                    <span>TOOLS</span>
                                </div>
                            </div>
                            <p>STATUS: ONLINE (V1.1) | LAST UPDATE: 07-08-2021</p>
                            <p>Game tebak angka dimana program akan memilih 1 angka acak dari 1-100, dan pemain diminta untuk menebak angka tersebut. Pemain diizinkan menebak angka berulang kali, dengan pengurangan poin sebesar -5 setiap kali tebakan salah. Game ini dikembangkan untuk menguji seberapa cepat algoritma <i>Binary Search</i> dapat membantu proses pencarian angka tebakan yang tepat.</p>
                            <div className="cta-group">
                                <a href="https://fikrinotes.netlify.app/javascriptproject-menu/guess_number_game/">VIEW LIVE PROJECT [ &gt;&gt; ]</a>
                                <a href="https://github.com/fikrinotes/fikrinotes.github.io/tree/master/Javascriptproject-menu/Guess_number_game">GITHUB SOURCE [ &gt;&gt; ]</a>
                            </div>
                        </div>


                        {/* <!-- Tambahkan lebih banyak project-detail-card di sini --> */}
                    </section>
                </div>
            </main>
            <Footer />
        </>
    )
}