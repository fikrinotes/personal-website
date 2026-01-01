"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  TrendingUp, Zap, Trash2, BarChart3, BrainCircuit, Clock, Activity 
} from 'lucide-react';

// import style
import './quants-drill.css';

/**
 * QUANT DRILL v15.7 - ZERO INLINE STYLE EDITION
 * Perbaikan: Menghapus 100% inline styles dan memindahkannya ke tag <style>.
 * Fitur: Label lengkap (LEVEL, STREAK, AKURASI), Terjemahan ID/EN, Responsif Mobile.
 */

const GAME_DURATION = 120;
const INITIAL_ELO = 1000;
const STORAGE_KEY = 'quant_drill_v15_final';

const translations = {
  EN: {
    start: "INITIATE SESSION",
    time: "LIMIT",
    hint: "Accuracy is survival",
    level: "LEVEL",
    streak: "STREAK",
    accuracy: "ACCURACY",
    arithmetic: "Arithmetic",
    arithmeticDesc: "Speed operations",
    estimation: "Estimation",
    estimationDesc: "Interval confidence",
    fraction: "Fractions",
    fractionDesc: "Decimal conv (4 dec)",
    probability: "Probability",
    probabilityDesc: "Risk & EV (3 dec)",
    avgSpeed: "Latency",
    totalSolved: "Executed",
    reset: "Format Terminal",
    confirmReset: "Are you sure? All data will be wiped.",
    fracHint: "Maximum 4 decimal places",
    probHint: "Use 3 decimal places",
    telemetry: "TELEMETRY",
    sysData: "DATA"
  },
  ID: {
    start: "MULAI SESI",
    time: "WAKTU",
    hint: "Akurasi adalah segalanya",
    level: "LEVEL",
    streak: "STREAK",
    accuracy: "AKURASI",
    arithmetic: "Aritmatika",
    arithmeticDesc: "Operasi kecepatan",
    estimation: "Estimasi",
    estimationDesc: "Rentang kepercayaan",
    fraction: "Pecahan",
    fractionDesc: "Konversi (4 desimal)",
    probability: "Probabilitas",
    probabilityDesc: "Risiko & EV (3 desimal)",
    avgSpeed: "Latensi",
    totalSolved: "Tereksekusi",
    reset: "Reset Terminal",
    confirmReset: "Apakah Anda yakin? Semua data akan dihapus.",
    fracHint: "Maksimal 4 angka desimal",
    probHint: "Gunakan 3 angka desimal",
    telemetry: "TELEMETRI",
    sysData: "DATA"
  }
};

export default function App() {
  const [lang, setLang] = useState('ID');
  const [elo, setElo] = useState(INITIAL_ELO);
  const [bestElo, setBestElo] = useState(INITIAL_ELO);
  const [totalSessions, setTotalSessions] = useState(0);
  const [history, setHistory] = useState([]); // Sekarang akan dipersistensi
  
  const [gameState, setGameState] = useState('IDLE'); 
  const [mode, setMode] = useState('ARITHMETIC'); 
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [streak, setStreak] = useState(0);
  const [mainInput, setMainInput] = useState('');
  const [lowerBound, setLowerBound] = useState('');
  const [upperBound, setUpperBound] = useState('');
  const [isErrorFlash, setIsErrorFlash] = useState(false);

  const t = translations[lang];
  const startTimeRef = useRef(null);
  const inputRef = useRef(null);
  const lowerRef = useRef(null);

  // Update theme-color for mobile
  useEffect(() => {
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', '#050505');
    }
    
    return () => {
      if (metaThemeColor) {
        metaThemeColor.setAttribute('content', '#0A192F');
      }
    };
  }, []);

  // Persistence (Load Data)
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setElo(parsed.elo || INITIAL_ELO);
        setBestElo(parsed.bestElo || INITIAL_ELO);
        setTotalSessions(parsed.totalSessions || 0);
        setLang(parsed.lang || 'ID');
        setHistory(parsed.history || []);
        // Hitung level berdasarkan ELO yang dimuat
        const loadedElo = parsed.elo || INITIAL_ELO;
        setLevel(Math.max(1, Math.min(10, Math.floor((loadedElo - 800) / 150) + 1)));
      } catch (e) { console.error("Gagal sinkronisasi data", e); }
    }
  }, []);

  // Persistence (Save Data) - Menambahkan history ke daftar pantauan
  useEffect(() => {
    const dataToSave = { elo, bestElo, totalSessions, lang, history };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave));
  }, [elo, bestElo, totalSessions, lang, history]);

  const generateQuestion = useCallback(() => {
    const scale = 1 + (level * 0.4);
    let q = { text: '', answer: null, hint: t.hint };

    if (mode === 'ARITHMETIC') {
      const ops = ['+', '-', '*', '/'];
      const op = ops[Math.floor(Math.random() * ops.length)];
      let a, b;
      if (op === '+') { a = Math.floor(Math.random() * (150 * scale)) + 10; b = Math.floor(Math.random() * (150 * scale)) + 10; q.answer = a + b; }
      else if (op === '-') { a = Math.floor(Math.random() * (250 * scale)) + 20; b = Math.floor(Math.random() * a); q.answer = a - b; }
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
        const b = 2; const exp = Math.floor(Math.random() * 4) + 8;
        q.text = `Est: ${b}^${exp}`; q.answer = Math.pow(b, exp);
      }
      q.hint = lang === 'ID' ? "Rentang [Bawah, Atas]" : "Range [Lower, Upper]";
    }
    else if (mode === 'FRACTION') {
      const denoms = [4, 5, 8, 10, 16, 20, 25, 40, 50];
      const d = denoms[Math.floor(Math.random() * denoms.length)];
      const n = Math.floor(Math.random() * (d - 1)) + 1;
      q.text = `Conv: ${n}/${d}`; 
      q.answer = Number((n / d).toFixed(4));
      q.hint = translations[lang].fracHint;
    }
    else if (mode === 'PROBABILITY') {
      const targets = [7, 8, 9, 10, 11];
      const target = targets[Math.floor(Math.random() * targets.length)];
      q.text = `P(Dice Sum = ${target})`;
      const map = { 7: 0.167, 8: 0.139, 9: 0.111, 10: 0.083, 11: 0.056 };
      q.answer = map[target];
      q.hint = translations[lang].probHint;
    }

    setCurrentQuestion(q);
    startTimeRef.current = Date.now();
    setTimeout(() => {
        if (mode === 'ESTIMATION') lowerRef.current?.focus();
        else inputRef.current?.focus();
    }, 50);
  }, [mode, level, t.hint, lang]);

  const processAnswer = (isCorrect) => {
    const latency = (Date.now() - startTimeRef.current) / 1000;
    const K = isCorrect ? 24 : 80; 
    const expected = 1 / (1 + Math.pow(10, (1200 - elo) / 400));
    const bonus = isCorrect ? Math.max(0, (2 - latency) * 15) : 0;
    const newElo = Math.round(elo + K * ((isCorrect ? 1 : 0) - expected) + bonus);
    
    setElo(newElo);
    if (newElo > bestElo) setBestElo(newElo);

    if (isCorrect) {
      setScore(s => s + 1); setStreak(st => st + 1);
      setHistory(prev => [{ q: currentQuestion.text, status: 'SUCCESS', latency }, ...prev].slice(0, 10));
    } else {
      setStreak(0);
      setIsErrorFlash(true);
      setTimeout(() => setIsErrorFlash(false), 200);
      // PENALTI -10 DETIK
      setTimeLeft(prev => Math.max(0, prev - 10));
      setHistory(prev => [{ q: currentQuestion.text, status: 'FAILED', latency }, ...prev].slice(0, 10));
    }

    setMainInput(''); setLowerBound(''); setUpperBound('');
    setLevel(Math.max(1, Math.min(10, Math.floor((newElo - 800) / 150) + 1)));
    generateQuestion();
  };

  const startGame = () => {
    setGameState('PLAYING'); setTimeLeft(GAME_DURATION); setScore(0); setStreak(0);
    setTotalSessions(s => s + 1);
    setTimeout(() => generateQuestion(), 0);
  };

  useEffect(() => {
    let timer = null;
    if (gameState === 'PLAYING' && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    } else if (timeLeft === 0 && gameState === 'PLAYING') {
      setGameState('IDLE');
    }
    return () => clearInterval(timer);
  }, [gameState, timeLeft]);

  const handleInputChange = (e) => {
    const val = e.target.value;
    setMainInput(val);
    if (gameState === 'PLAYING' && mode !== 'ESTIMATION') {
      const numVal = parseFloat(val);
      if (!isNaN(numVal) && numVal === currentQuestion?.answer) {
        processAnswer(true);
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const val = parseFloat(mainInput);
      if (!isNaN(val)) {
        processAnswer(Math.abs(val - currentQuestion.answer) < 0.0001);
      }
    }
  };

  const handleEstKey = (e) => {
    if (e.key === 'Enter') {
      const low = parseFloat(lowerBound);
      const high = parseFloat(upperBound);
      if (!isNaN(low) && !isNaN(high)) {
        processAnswer(currentQuestion.answer >= low && currentQuestion.answer <= high);
      }
    }
  };

  const avgSpeed = history.length > 0 ? (history.reduce((a,b) => a + b.latency, 0) / history.length).toFixed(2) : '0.00';
  const accuracy = history.length > 0 ? (history.filter(h => h.status === 'SUCCESS').length / history.length * 100).toFixed(0) + '%' : '100%';


  return (
    <div className={`terminal-container ${isErrorFlash ? 'flash-red' : ''}`}>
      <header className="header-system">
        <nav className="navbar">
          <div className="navbar-content">
            <div className="logo">
              <TrendingUp size={18} color="var(--blue)" />
              Quant <span>Drill</span>
            </div>
            
            {gameState === 'PLAYING' && (
              <div className={`timer-nav ${timeLeft < 15 ? 'timer-crit' : ''}`}>
                <Clock size={14} /> {timeLeft}s
              </div>
            )}

            <div className="lang-switcher">
              <button className={`lang-btn ${lang==='EN'?'active':''}`} onClick={()=>setLang('EN')}>EN</button>
              <button className={`lang-btn ${lang==='ID'?'active':''}`} onClick={()=>setLang('ID')}>ID</button>
            </div>
          </div>
        </nav>

        <div className="hud-grid">
          <div className="stat-box">
            <div className="stat-label">ELO RATING</div>
            <div className="stat-value elo">{elo}</div>
          </div>
          <div className="stat-box">
            <div className="stat-label">{t.level}</div>
            <div className="stat-value lvl">{level}</div>
          </div>
          <div className="stat-box">
            <div className="stat-label">{t.streak}</div>
            <div className="stat-value streak">{streak}</div>
          </div>
          <div className="stat-box">
            <div className="stat-label">{t.accuracy}</div>
            <div className="stat-value accuracy">{accuracy}</div>
          </div>
        </div>
      </header>

      <main className="main-view">
        {gameState === 'IDLE' ? (
          <div className="menu-card">
            <BrainCircuit size={48} color="var(--blue)" style={{margin:'0 auto 16px'}} />
            <h1 style={{color:'#fff', fontWeight:900, fontSize:'28px', letterSpacing:'-0.04em'}}>Quant <span style={{color:'var(--blue)'}}>Drill</span></h1>
            <div className="mode-list">
              {['ARITHMETIC', 'ESTIMATION', 'FRACTION', 'PROBABILITY'].map(m => (
                <button key={m} className={`mode-btn ${mode === m ? 'active' : ''}`} onClick={() => setMode(m)}>
                  <div style={{fontWeight:900, fontSize:'11px', textTransform:'uppercase'}}>{t[m.toLowerCase()]}</div>
                  <div style={{fontSize: '8px', color: '#444', marginTop: '2px'}}>{t[m.toLowerCase() + 'Desc']}</div>
                </button>
              ))}
            </div>
            <button onClick={startGame} className="btn-start">
              {t.start} <Zap size={16} fill="currentColor" />
            </button>
          </div>
        ) : (
          <div className="question-container">
            <div>
              <h2 className="question-text">{currentQuestion?.text}</h2>
              <p className="hint-text">{currentQuestion?.hint}</p>
            </div>
            <div style={{ width: '100%', marginTop: '15px' }}>
              {mode === 'ESTIMATION' ? (
                <div className="est-grid">
                  <input ref={lowerRef} type="number" value={lowerBound} onChange={e=>setLowerBound(e.target.value)} onKeyDown={handleEstKey} className="est-input" placeholder="MIN" />
                  <input type="number" value={upperBound} onChange={e=>setUpperBound(e.target.value)} onKeyDown={handleEstKey} className="est-input" placeholder="MAX" />
                </div>
              ) : (
                <input 
                  ref={inputRef} autoFocus type="text" value={mainInput} 
                  onChange={handleInputChange} onKeyDown={handleKeyDown}
                  className="input-hero" placeholder="0" 
                />
              )}
            </div>
          </div>
        )}
      </main>

      <footer className="footer-logs">
        <div className="log-box">
          <div style={{fontSize:'8px', fontWeight:900, color:'#444', marginBottom:'12px', borderBottom:'1px solid #111', paddingBottom:'6px'}}><BarChart3 size={10} style={{display:'inline', marginRight:'6px'}} /> {t.telemetry}</div>
          {history.map((log, i) => (
            <div key={i} className="log-row">
              <span style={{fontWeight:900, color:'#fff'}}>{log.q}</span>
              <div style={{display:'flex', gap:'12px'}}>
                <span className={`log-status ${log.status === 'SUCCESS' ? 'ok' : 'fail'}`}>
                  {log.status === 'SUCCESS' ? '[OK]' : '[FAIL]'}
                </span>
                <span style={{color:'#333'}}>{log.latency.toFixed(2)}s</span>
              </div>
            </div>
          ))}
        </div>
        <div className="log-box" style={{minHeight:'auto'}}>
          <div style={{fontSize:'8px', fontWeight:900, color:'#444', marginBottom:'12px', borderBottom:'1px solid #111', paddingBottom:'6px'}}><Activity size={10} style={{display:'inline', marginRight:'6px'}} /> {t.sysData}</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '11px' }}>
             <div style={{display:'flex', justifyContent:'space-between'}}><span>{t.totalSolved}</span><span style={{color:'#fff', fontWeight:900}}>{score}</span></div>
             <div style={{display:'flex', justifyContent:'space-between'}}><span>{t.avgSpeed}</span><span style={{color:'var(--blue)', fontWeight:900}}>{avgSpeed}s</span></div>
             <div style={{display:'flex', justifyContent:'space-between'}}><span>Best ELO</span><span style={{color:'#fff'}}>{bestElo}</span></div>
             <button onClick={()=>confirm(t.confirmReset) && (localStorage.clear() || window.location.reload())} className="reset-link">
               <Trash2 size={10} /> {t.reset}
             </button>
          </div>
        </div>
      </footer>
    </div>
  );
}