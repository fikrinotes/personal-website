"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from "next/image";
import { 
  TrendingUp, 
  Zap, 
  History, 
  ShieldCheck, 
  Trash2, 
  BarChart3, 
  BrainCircuit 
} from 'lucide-react';

// Impor file CSS yang berisi class terminal-container dan reset-btn
import "./quants-drill.css";

// Impor pengaturan dan bahasa
import { GAME_DURATION, INITIAL_ELO, STORAGE_KEY } from "@/lib/constants";
import { translations } from "@/lib/translations";

/**
 * Komponen QuantsDrill
 * Menggunakan state React untuk mengelola permainan matematika kuantitatif.
 */
export default function QuantsDrill() {
  // --- State Utama ---
  const [lang, setLang] = useState('ID');
  const [elo, setElo] = useState(INITIAL_ELO);
  const [bestElo, setBestElo] = useState(INITIAL_ELO);
  const [totalSessions, setTotalSessions] = useState(0);
  
  const [gameState, setGameState] = useState('IDLE'); // IDLE, PLAYING
  const [mode, setMode] = useState('ARITHMETIC');
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [history, setHistory] = useState([]);
  const [streak, setStreak] = useState(0);

  // State untuk Input User
  const [mainInput, setMainInput] = useState('');
  const [lowerBound, setLowerBound] = useState('');
  const [upperBound, setUpperBound] = useState('');

  const t = translations[lang];
  const startTimeRef = useRef(null);
  const inputRef = useRef(null);
  const lowerRef = useRef(null);

  // --- Memuat Data dari LocalStorage ---
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setElo(parsed.elo || INITIAL_ELO);
        setBestElo(parsed.bestElo || INITIAL_ELO);
        setTotalSessions(parsed.totalSessions || 0);
        setLang(parsed.lang || 'ID');
      } catch (e) {
        console.error("Gagal memuat data:", e);
      }
    }
  }, []);

  // --- Menyimpan Data ke LocalStorage ---
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ elo, bestElo, totalSessions, lang }));
  }, [elo, bestElo, totalSessions, lang]);

  // --- Logika Pembuatan Soal ---
  const generateQuestion = useCallback(() => {
    const scale = 1 + (level * 0.25);
    let q = { text: '', answer: null, hint: t.hint };

    if (mode === 'ARITHMETIC') {
      const ops = ['+', '-', '*', '/'];
      const op = ops[Math.floor(Math.random() * ops.length)];
      let a, b;
      if (op === '+') { a = Math.floor(Math.random() * (100 * scale)) + 10; b = Math.floor(Math.random() * (100 * scale)) + 10; q.answer = a + b; }
      else if (op === '-') { a = Math.floor(Math.random() * (150 * scale)) + 20; b = Math.floor(Math.random() * a); q.answer = a - b; }
      else if (op === '*') { a = Math.floor(Math.random() * 12) + 2; b = Math.floor(Math.random() * (20 * scale)) + 2; q.answer = a * b; }
      else { b = Math.floor(Math.random() * 12) + 2; q.answer = Math.floor(Math.random() * (15 * scale)) + 1; a = b * q.answer; }
      q.text = `${a} ${op === '*' ? '×' : op === '/' ? '÷' : op} ${b}`;
    } 
    else if (mode === 'ESTIMATION') {
      const types = ['PRODUCT', 'SQRT', 'POWER'];
      const type = types[Math.floor(Math.random() * types.length)];
      if (type === 'PRODUCT') {
        const a = Math.floor(Math.random() * 900) + 100;
        const b = Math.floor(Math.random() * 90) + 10;
        q.text = `Est: ${a} × ${b}`; q.answer = a * b;
      } else if (type === 'SQRT') {
        const base = Math.floor(Math.random() * 900000) + 100000;
        q.text = `Est: √${base.toLocaleString()}`; q.answer = Math.round(Math.sqrt(base));
      } else {
        const base = 2; const exp = Math.floor(Math.random() * 5) + 8;
        q.text = `Est: ${base}^${exp}`; q.answer = Math.pow(base, exp);
      }
      q.hint = lang === 'ID' ? "Rentang [Bawah, Atas]" : "Range [Lower, Upper]";
    }
    else if (mode === 'FRACTION') {
      const denoms = [2, 4, 8, 16, 20, 40, 80];
      const d = denoms[Math.floor(Math.random() * denoms.length)];
      const n = Math.floor(Math.random() * (d - 1)) + 1;
      q.text = `Conv: ${n}/${d}`; q.answer = Number((n / d).toFixed(4));
    }
    else if (mode === 'PROBABILITY') {
      const target = Math.floor(Math.random() * 3) + 7;
      q.text = `P(Sum 2 dice = ${target})`;
      const map = { 7: 0.166, 8: 0.138, 9: 0.111 };
      q.answer = map[target]; q.hint = "3 desimal";
    }

    setCurrentQuestion(q);
    startTimeRef.current = Date.now();
    setTimeout(() => {
        if (mode === 'ESTIMATION') lowerRef.current?.focus();
        else inputRef.current?.focus();
    }, 50);
  }, [mode, level, lang, t.hint]);

  // --- Logika Pemrosesan Jawaban ---
  const processAnswer = (isCorrect) => {
    const latency = (Date.now() - startTimeRef.current) / 1000;
    const K = 32;
    const expected = 1 / (1 + Math.pow(10, (1200 - elo) / 400));
    const bonus = isCorrect ? Math.max(0, (2 - latency) * 10) : 0;
    const newElo = Math.round(elo + K * ((isCorrect ? 1 : 0) - expected) + bonus);
    
    setElo(newElo);
    if (newElo > bestElo) setBestElo(newElo);

    if (isCorrect) {
      setScore(s => s + 1); setStreak(st => st + 1);
      setHistory(prev => [{ q: currentQuestion.text, status: 'SUCCESS', latency }, ...prev].slice(0, 10));
    } else {
      setStreak(0); setTimeLeft(prev => Math.max(0, prev - 5));
      setHistory(prev => [{ q: currentQuestion.text, status: 'FAILED', latency }, ...prev].slice(0, 10));
    }

    setMainInput(''); setLowerBound(''); setUpperBound('');
    setLevel(Math.max(1, Math.min(10, Math.floor((newElo - 800) / 200) + 1)));
    generateQuestion();
  };

  const startGame = () => {
    setGameState('PLAYING'); setTimeLeft(GAME_DURATION); setScore(0); setStreak(0); setHistory([]);
    setTotalSessions(s => s + 1);
    generateQuestion();
  };

  const resetData = () => {
    if (confirm(t.confirmReset)) {
      localStorage.removeItem(STORAGE_KEY);
      window.location.reload();
    }
  };

  // Timer Effect
  useEffect(() => {
    let timer = null;
    if (gameState === 'PLAYING' && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
    } else if (timeLeft === 0 && gameState === 'PLAYING') {
      setGameState('IDLE');
    }
    return () => clearInterval(timer);
  }, [gameState, timeLeft]);

  // Statistik Rata-rata
  const avgSpeed = history.length > 0 
    ? (history.reduce((a, b) => a + b.latency, 0) / history.length).toFixed(2) 
    : '0.00';

  return (
    <div className="terminal-container">
      {/* Navbar Atas */}
      <nav className="navbar">
        <div className="navbar-content">
          <div className="logo-text">
             <TrendingUp size={14} color="var(--blue-500)" />
             <span>QUANTS DRILL PRO</span>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button className={`lang-btn ${lang === 'EN' ? 'active' : ''}`} onClick={() => setLang('EN')}>EN</button>
            <button className={`lang-btn ${lang === 'ID' ? 'active' : ''}`} onClick={() => setLang('ID')}>ID</button>
          </div>
        </div>
      </nav>

      {/* Dashboard Stats (HUD) */}
      <div className="hud-grid">
        <div className="stat-box">
          <div className="stat-label">ELO RATING</div>
          <div className="stat-value" style={{ color: 'var(--blue-500)' }}>{elo}</div>
          <div className="stat-sub">BEST: {bestElo}</div>
        </div>
        <div className="stat-box">
          <div className="stat-label">{t.level}</div>
          <div className="stat-value" style={{ color: 'var(--amber-500)' }}>{level}</div>
          <div className="stat-sub">Adaptive</div>
        </div>
        <div className="stat-box">
          <div className="stat-label">{t.streak}</div>
          <div className="stat-value" style={{ color: 'var(--purple-500)' }}>{streak}</div>
          <div className="stat-sub">Multiplier</div>
        </div>
        <div className="stat-box" style={{ textAlign: 'center' }}>
          <div className="stat-label">{t.time}</div>
          <div className={`stat-value ${timeLeft < 15 ? 'timer-critical' : ''}`}>{timeLeft}s</div>
        </div>
      </div>

      <main className="game-main">
        {gameState === 'IDLE' ? (
          <div className="menu-card">
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
              <BrainCircuit size={48} color="var(--blue-500)" />
            </div>
            <h1 style={{ color: 'white', fontWeight: 900, fontSize: '28px', marginBottom: '8px', letterSpacing: '-0.05em' }}>QUANTS DRILLS</h1>
            <p style={{ fontSize: '11px', fontWeight: 'bold', color: 'var(--zinc-600)', marginBottom: '40px', letterSpacing: '0.2em' }}>SESSIONS RECORDED: {totalSessions}</p>
            
            <div className="mode-grid">
              {['ARITHMETIC', 'ESTIMATION', 'FRACTION', 'PROBABILITY'].map(m => (
                <button key={m} className={`mode-btn ${mode === m ? 'selected' : ''}`} onClick={() => setMode(m)}>
                  <div className="mode-title">{t[m.toLowerCase()]}</div>
                  <div className="mode-desc">{t[m.toLowerCase() + 'Desc']}</div>
                </button>
              ))}
            </div>

            <button onClick={startGame} className="btn-execute">
              {t.start} <Zap size={20} fill="currentColor" />
            </button>
          </div>
        ) : (
          <div style={{ width: '100%', maxWidth: '800px', textAlign: 'center' }}>
            <p style={{ color: 'var(--zinc-600)', fontSize: '10px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.4em', marginBottom: '16px' }}>Signal Inbound</p>
            <h2 className="question-text">{currentQuestion?.text}</h2>
            <p style={{ color: 'var(--blue-500)', fontSize: '12px', fontWeight: 900, textTransform: 'uppercase', marginBottom: '40px' }}>{currentQuestion?.hint}</p>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              {mode === 'ESTIMATION' ? (
                <div className="estimation-grid">
                  <input ref={lowerRef} type="number" value={lowerBound} onChange={e => setLowerBound(e.target.value)} 
                    onKeyDown={e => e.key === 'Enter' && upperBound && processAnswer(currentQuestion.answer >= parseFloat(lowerBound) && currentQuestion.answer <= parseFloat(upperBound))} 
                    className="est-input" placeholder="Min" />
                  <input type="number" value={upperBound} onChange={e => setUpperBound(e.target.value)} 
                    onKeyDown={e => e.key === 'Enter' && lowerBound && processAnswer(currentQuestion.answer >= parseFloat(lowerBound) && currentQuestion.answer <= parseFloat(upperBound))} 
                    className="est-input" placeholder="Max" />
                </div>
              ) : (
                <input ref={inputRef} autoFocus type="text" value={mainInput} 
                  onChange={e => { setMainInput(e.target.value); if (parseFloat(e.target.value) === currentQuestion?.answer) processAnswer(true); }} 
                  className="main-input" placeholder="0" />
              )}
            </div>
          </div>
        )}
      </main>

      <footer className="footer-logs">
        <div className="log-box">
          <div style={{ fontSize: '10px', fontWeight: 900, color: 'var(--zinc-600)', marginBottom: '16px', letterSpacing: '0.1em', borderBottom: '1px solid #111', paddingBottom: '10px' }}>
             <BarChart3 size={12} style={{ display: 'inline', marginRight: '6px' }} /> EXECUTION LOGS
          </div>
          {history.map((log, i) => (
            <div key={i} className="log-item">
              <span style={{ fontWeight: 900, color: 'white' }}>{log.q}</span>
              <span style={{ color: log.status === 'SUCCESS' ? 'var(--emerald-500)' : 'var(--red-500)', fontWeight: 900 }}>
                {log.status === 'SUCCESS' ? '[OK]' : '[FAIL]'} — {log.latency.toFixed(2)}s
              </span>
            </div>
          ))}
          {history.length === 0 && <p style={{ color: 'var(--zinc-700)', fontSize: '12px', fontStyle: 'italic' }}>Awaiting data stream...</p>}
        </div>
        <div className="log-box">
          <div style={{ fontSize: '10px', fontWeight: 900, color: 'var(--zinc-600)', marginBottom: '16px', borderBottom: '1px solid #111', paddingBottom: '10px' }}>STATION DATA</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
             <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
               <span>Total Solved</span><span style={{ color: 'white', fontWeight: 900 }}>{score}</span>
             </div>
             <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
               <span>Avg Speed</span><span style={{ color: 'var(--blue-500)', fontWeight: 900 }}>{avgSpeed}s</span>
             </div>
             <div style={{ marginTop: '12px', borderTop: '1px solid #111', paddingTop: '12px' }}>
               {/* INI ADALAH TOMBOL RESET DENGAN CLASS reset-btn */}
               <button onClick={resetData} className="reset-btn">
                 <Trash2 size={12} /> {t.reset}
               </button>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
}