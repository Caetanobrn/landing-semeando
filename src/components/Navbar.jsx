import React, { useState, useEffect } from 'react';
import { whatsappLink, trackWhatsAppClick } from '../utils/utm.js';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#inicio', label: 'Início' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#categorias', label: 'Categorias' },
    { href: '#contato', label: 'Contato' }
  ];

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#inicio" className="navbar__brand" aria-label="Pet Shop Semeando">
          <img src="/logo-semeando.png" alt="Pet Shop Semeando" />
          <span>Pet Shop Semeando</span>
        </a>
        <nav className={`navbar__menu ${open ? 'is-open' : ''}`}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a
            className="btn btn--gold"
            href={whatsappLink('Vim pelo menu do site.')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('navbar')}
          >
            Fale Conosco
          </a>
        </nav>
        <button
          className={`navbar__toggle ${open ? 'is-active' : ''}`}
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}