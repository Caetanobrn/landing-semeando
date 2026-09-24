import React from 'react';
import { whatsappLink, trackWhatsAppClick } from '../utils/utm.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <img src="/logo-semeando.png" alt="Pet Shop Semeando" className="footer__logo" />
          <p className="footer__tagline">
            Semeando amor e cuidado no coração de cada pet e sua família
          </p>
        </div>
        <div>
          <h4>Navegação</h4>
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#servicos">Serviços</a>
          <a href="#categorias">Categorias</a>
        </div>
        <div>
          <h4>Contato</h4>
          <a
            href={whatsappLink('Vim pelo rodapé do site.')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('footer')}
          >
            WhatsApp: (21) 96478-7876
          </a>
          <a href="tel:+552130196479">Fixo: (21) 3019-6479</a>
          <p>Ricardo de Albuquerque, Rio de Janeiro - RJ</p>
        </div>
      </div>
      <div className="footer__bottom">
        <p>© 2026 Pet Shop Semeando — Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}