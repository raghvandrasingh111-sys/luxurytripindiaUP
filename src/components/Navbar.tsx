"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1000,
      padding: scrolled ? '10px 5%' : '20px 5%',
      backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'transparent',
      boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.08)' : 'none',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backdropFilter: scrolled ? 'blur(10px)' : 'none'
    }}>
      <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
        <Link href="/">
          <img 
            src="/logo-luxury.png" 
            alt="Luxury Trip India" 
            style={{ 
              height: scrolled ? '55px' : '85px', 
              width: 'auto',
              transition: 'all 0.4s ease',
              // Dynamic filter to ensure visibility on all backgrounds
              filter: scrolled ? 'none' : 'drop-shadow(0 0 10px rgba(255,255,255,0.5))'
            }} 
          />
        </Link>
      </div>

      <ul style={{
        display: 'flex',
        listStyle: 'none',
        gap: '35px',
        margin: 0,
        padding: 0,
        fontWeight: '600',
        alignItems: 'center'
      }}>
        {['Home', 'Tour Packages', 'Hotels'].map((item) => (
          <li key={item}>
            <Link 
              href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} 
              style={{ 
                color: scrolled ? '#1a1a1a' : 'white', 
                textDecoration: 'none',
                fontSize: '1.05rem',
                transition: 'color 0.3s ease',
                textShadow: scrolled ? 'none' : '0 2px 4px rgba(0,0,0,0.3)'
              }}
              className="nav-link"
            >
              {item}
            </Link>
          </li>
        ))}
        <li>
          <Link href="/enquire-now" style={{
            backgroundColor: '#FF8C00',
            color: 'white',
            padding: '12px 28px',
            borderRadius: '50px',
            textDecoration: 'none',
            fontSize: '1rem',
            fontWeight: '700',
            boxShadow: '0 4px 15px rgba(255, 140, 0, 0.3)',
            transition: 'all 0.3s ease'
          }}
          className="btn-enquire"
          >
            Enquire Now
          </Link>
        </li>
      </ul>

      <style jsx>{`
        .nav-link:hover {
          color: #FF8C00 !important;
        }
        .btn-enquire:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255, 140, 0, 0.4);
          background-color: #e67e00 !important;
        }
      `}</style>
    </nav>
  );
}
