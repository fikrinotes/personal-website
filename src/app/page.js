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
          <p>//AI RESEARCHER // DATA SCIENTIST // QUANTITATIVE ANALYST//</p>
        </section>

        {/* <!-- GRID PROYEK (BRUTALIST CARDS) --> */}
        <section className="projects-grid">
          {/* <!-- Kartu Proyek 1 --> */}
          <ProjectCard title="Probabilistic Bayesian LSTM for Autonomous Crypto Trading" description="Leveraging Bayesian Deep Learning to predict cryptocurrency returns and quantifying predictive uncertainty. Developed as a Master’s Thesis research." projectUrl="https://huggingface.co/fikrimulyana/crypto-blstm-v1" />
          {/* <!-- Kartu Proyek 1 --> */}
          <ProjectCard title="Explainable DNN for Network Intrusion Detection" description="A high-performance Deep Neural Network (DNN) model for network security, integrating SHAP (Shapley Additive Explanations) to provide model transparency. Published in a Scopus Q2-indexed journal (2026)." projectUrl="https://github.com/fikrinotes/DNN-IDS" />
          {/* <!-- Kartu Proyek 4 --> */}
          <ProjectCard title="Quant Drill: Adaptive Mental Arithmetic for Quants" description="A Next.js web application designed for quantitative traders to sharpen mental math and logical speed. Features an ELO-based adaptive difficulty system to tailor challenges to the user's skill level." projectUrl="/quants-drill" />
          {/* <!-- Kartu Proyek 2 --> */}
          <ProjectCard title="Eid Blessing Hunter Game" description="An engaging interactive web game developed to celebrate Eid al-Fitr 2025. Experience the festive spirit through this entertaining mini-game. " projectUrl="https://fikrinotes.github.io/eid-blessing-hunter-game/" />
          {/* <!-- Kartu Proyek 5 --> */}
          <ProjectCard title="Hill Cipher Encryption App" description="A desktop security tool implementing matrix-based cryptography. Developed in Python to demonstrate the practical application of linear algebra in secure message transmission." projectUrl="https://github.com/fikrinotes/PowerfulPython/tree/main/Encryption%20App" />
          {/* <!-- Kartu Proyek 6 --> */}
          <ProjectCard title="AI-Generated Fitness & Nutrition App" description="An experimental project developed entirely through AI-human collaboration (Gemini). Features automated workout scheduling, nutritional tracking, and daily progress analytics." projectUrl="https://fikrinotes.netlify.app/javascriptproject-menu/workout-app/" />
        </section>

        {/* <!-- AWARDS & MILESTONES SECTION --> */}
        <section className="awards-milestones-section">
          <h2>// AWARDS & MILESTONES //</h2>
          <div className="achievement-grid">
            <div className="achievement-card">
              <span className="achievement-badge">RESEARCH</span>
              <p><strong>First Author</strong> of Published XAI Paper in Scopus Q2 Journal (2026).</p>
            </div>
            <div className="achievement-card">
              <span className="achievement-badge">ACADEMIC</span>
              <p><strong>Most Outstanding Student Activist</strong> - Faculty of Mathematics and Natural Sciences, Andalas University (2024).</p>
            </div>
            <div className="achievement-card">
              <span className="achievement-badge">CLOUD TECH</span>
              <p><strong>JuaraGCP Participant</strong> - Google Cloud Platform (2026).</p>
            </div>
            <div className="achievement-card">
              <span className="achievement-badge">COMPETITION</span>
              <p><strong>Bronze Medalist</strong> of <i>Mathematical Analysis and Geometry Day </i> (MaG-D) XIV - Bandung Institute of Technology (2023).</p>
            </div>
            <div className="achievement-card">
              <span className="achievement-badge">COMPETITION</span>
              <p><strong>University Delegates</strong> for <i>ONMIPA Regional Level</i> - Ministry of Education, Culture, Research, and Technology (2023).</p>
            </div>
            <div className="achievement-card">
              <span className="achievement-badge">HACKATHON</span>
              <p><strong>3rd Winner</strong> at <a href="https://www.instagram.com/fam_developer/"> <i>Cybertech Hackathon</i> (FamDev Team)</a> - State Polytechnic of Padang (2023).</p>
            </div>
            <div className="achievement-card">
              <span className="achievement-badge"> COMPETITION</span>
              <p><strong>Participant</strong> of <i>National Programming Competition (Gemastik XV) </i> - Ministry of Education, Culture, Research, and Technology (2022).</p>
            </div>
            <div className="achievement-card">
              <span className="achievement-badge">COMPETITION</span>
              <p><strong>2nd Winner</strong> at <i>Competition of Islamic Science (Physics) Regional Level</i> - State Islamic University of Imam Bonjol Padang (2019).</p>
            </div>
            <div className="achievement-card">
              <span className="achievement-badge">COMPETITION</span>
              <p><strong>2nd Winner</strong> at <i>Physics Competition Regional Level</i> - SMAN 1 2x11 Enam Lingkung (2019).</p>
            </div>
          </div>
        </section>

        {/* <!-- ACTIVITY & EXPERIENCE SECTION --> */}
        <section className="activity-experience-section">
          <h2>// ACTIVITY & EXPERIENCE //</h2>
          <div className="achievement-grid">
            <div className="achievement-card">
              <span className="achievement-badge">WORK</span>
              <p><strong>AI Trainer</strong> at <a href="https://www.dataannotation.tech/">DataAnnotation.tech</a> (2026 - Present).</p>
            </div>
            <div className="achievement-card">
              <span className="achievement-badge">BUSINESS</span>
              <p><strong>Founder & Operations Lead</strong> of <a href="https://www.instagram.com/temeninplatform/">Temen.in Platform</a> (2023 - Present).</p>
            </div>
            <div className="achievement-card">
              <span className="achievement-badge">ORGANIZATION</span>
              <p><strong>Head of Development and Maintenance Division</strong> at <a href="https://www.instagram.com/mathdasc_/">MathDaSc Laboratory, Andalas University</a> (2023 - 2025).</p>
            </div>
            <div className="achievement-card">
              <span className="achievement-badge">WORK</span>
              <p><strong>Teaching Assistant</strong> at <a href="https://matematika.fmipa.unand.ac.id/">Department of Mathematics and Data Science, Andalas University</a> (2023 - 2025).</p>
            </div>
            <div className="achievement-card">
              <span className="achievement-badge">RECOGNITION</span>
              <p><strong>Invited Jury</strong> at <i>Pekan Seni Bermatematika (PSB)</i> by Mathematics Student Association, Andalas University (2025).</p>
            </div>
            <div className="achievement-card">
              <span className="achievement-badge">WORK</span>
              <p><strong>Fullstack Web Developer</strong> at <a href="https://matematika.fmipa.unand.ac.id/">Department of Mathematics and Data Science, Andalas University</a> (2023).</p>
            </div>
            <div className="achievement-card">
              <span className="achievement-badge">WORK</span>
              <p><strong>Freelance Logo Designer</strong> at Fiverr (2022 - Present).</p>
            </div>
            <div className="achievement-card">
              <span className="achievement-badge">MEDIA</span>
              <p><strong>Featured Guest Speaker</strong> at <a href="https://www.youtube.com/watch?v=onWFAHDQQG0&t=145s">BEM FMIPA Unand Podcast</a> - Business Series (2024).</p>
            </div>
            <div className="achievement-card">
              <span className="achievement-badge">INITIATIVE</span>
              <p><strong>Initiator & Lead Instructor</strong> of Initated Semester-long <i>Coding Bootcamp</i> for Undergraduates Student at Mathematics Department (2024).</p>
            </div>
          </div>
        </section>

        {/* <!-- LOGS JOURNEY SECTION (TIMELINE) --> */}
        <section className="log-journey">
          <h2>LOGS: MY PROGRAMMING JOURNEY</h2>
          <div className="timeline-entry">
            <span>[ 2018 SEP ]</span>
            <p>Became interested in programming during 10th grade of high school due to an ICT class that introduced the Pascal programming language.</p>
          </div>
          <div className="timeline-entry">
            <span>[ 2018 OCT ]</span>
            <p>Learned Pascal independently and created several simple applications, such as a number guessing game, arithmetic programs, and more.</p>
          </div>
          <div className="timeline-entry">
            <span>[ 2019 DEC ]</span>
            <p>Started self-learning Python from websites and books while preparing for physics olympiads.</p>
          </div>
          <div className="timeline-entry">
            <span>[ 2020 MAY ]</span>
            <p>Learned the basics of web development (HTML and CSS) through Khan Academy and published the first version of my personal website on GitHub Pages.</p>
          </div>
          <div className="timeline-entry">
            <span>[ 2020 JUL ]</span>
            <p>Improved the structure and design of the previous website with more complex CSS styling. Learned JavaScript and implemented it by developing various projects. Simultaneously explored Graphical User Interface development in Python using the Tkinter library.</p>
          </div>
          <div className="timeline-entry">
            <span>[ 2020 AUG ]</span>
            <p>Learned the Java programming language and completed programming challenges on online platforms such as CodeWars, Project Euler, etc.</p>
          </div>
          <div className="timeline-entry">
            <span>[ 2022 JAN ]</span>
            <p>Developed an interest in Data Science, learning R and Python for statistical analysis, developing Machine Learning & Deep Learning models, and utilizing Explainable AI (XAI) techniques.</p>
          </div>
          <div className="timeline-entry">
            <span>[ 2025 OCT ]</span>
            <p>Learned the fundamentals of cryptocurrency, blockchain, and Web3. Built my first Decentralized App (DApp) project using Solidity and Ethereum.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
