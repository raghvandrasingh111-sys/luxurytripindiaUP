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
      padding: scrolled ? '15px 5%' : '25px 5%',
      backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
      boxShadow: scrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none',
      transition: 'all 0.3s ease',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: scrolled ? 'var(--dark-text)' : 'white'
    }}>
      <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
        <Link href="/">
          <img 
            src="/logo-luxury.png" 
            alt="Luxury Trip India" 
            style={{ 
              height: scrolled ? '50px' : '70px', 
              width: 'auto',
              transition: 'all 0.3s ease',
              filter: scrolled ? 'none' : 'brightness(0) invert(1)' // Invert to white on transparent background
            }} 
          />
        </Link>
      </div>

      <ul style={{
        display: 'flex',
        listStyle: 'none',
        gap: '30px',
        margin: 0,
        padding: 0,
        fontWeight: '600'
      }}>
        <li><Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link></li>
        <li><Link href="/tour-packages" style={{ color: 'inherit', textDecoration: 'none' }}>Tour Packages</Link></li>
        <li><Link href="/hotels" style={{ color: 'inherit', textDecoration: 'none' }}>Hotels</Link></li>
        <li>
          <Link href="/enquire-now" style={{
            backgroundColor: 'var(--primary-orange)',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '5px',
            textDecoration: 'none'
          }}>
            Enquire Now
          </Link>
        </li>
      </ul>
    </nav>
  );
}
