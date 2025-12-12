import Link from 'next/link';
import Image from 'next/image';

const NavLinkItem = ({ href, children, current = false }) => (
  <li className="nav-item">
    <Link 
      href={href} 
      className={`nav-link ${current ? 'active' : ''}`} 
      aria-current={current ? 'page' : undefined}
    >
      {children}
    </Link>
  </li>
);

const mainLinks = [
  { href: 'index.html', label: 'Home', current: true },
  { href: 'Physics_menu.html', label: 'Fisika' },
  { href: 'Math-menu.html', label: 'Matematika' },
  { href: 'computerscience.html', label: 'Computer Science' },
  { href: '/Javascriptproject-menu/index.html', label: 'Javascript Project' },
  { href: 'HearingMusic.html', label: 'Hear Music' },
  { href: 'Get_help.html', label: 'Help!' },
  { href: 'My_album.html', label: 'My Album' },
  { href: 'Contact-me.html', label: 'Contact Me' },
  { href: 'TermOfUse.html', label: 'Terms of Use' },
];

const quickLinks = [
  { href: '/Javascript-menu/Weather_app/index.html', label: 'Weather App' },
  { href: '/Javascript-menu/ChatBot/index.html', label: 'ChatBot' },
  // ... tambahkan tautan Quick Link lainnya di sini ...
  { href: 'https://fikrimulyana.github.io/', label: 'My Previous Website' },
];

export default function Navbar() {
  return (
    <>
      <header>
          <div className="container">
              <h2 className="logo">FIKRI NOTES</h2>
              <nav>
                  <a href="/">HOME</a> | <a href="/about">ABOUT</a> | <a href="https://fikrinotes.medium.com/">BLOG</a> | <a href="/projects-page">PROJECTS</a>
              </nav>
          </div>
      </header>
    </>
  );
}