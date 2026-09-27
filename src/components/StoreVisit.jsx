import React from 'react';
import { whatsappLink, trackWhatsAppClick } from '../utils/utm.js';

export default function StoreVisit() {
  return (
    <section id="loja" className="store-visit">
      <div className="container">
        <p className="section__eyebrow">Atendimento Presencial</p>
        <h2 className="section__title">Visite Nossa Loja</h2>
        <div className="store-visit__grid">
          <div className="store-visit__item">
            <span className="store-visit__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
                <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
            </span>
            <h3>Endereço</h3>
            <p>Ricardo de Albuquerque<br />Rio de Janeiro - RJ</p>
            <p className="store-visit__note">Local de fácil acesso, com estacionamento disponível.</p>
          </div>
          <div className="store-visit__item">
            <span className="store-visit__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </svg>
            </span>
            <h3>Horário de Funcionamento</h3>
            <p>Segunda a Sexta: 08:00 às 20:00</p>
            <p>Sábado: 08:00 às 18:00</p>
            <p>Domingos e Feriados: 08:00 às 14:00</p>
          </div>
        </div>
        <div className="store-visit__cta">
          <p>Prefere receber em casa? Peça pelo WhatsApp com taxa justa e entrega segura em toda a região.</p>
          <a
            className="btn btn--gold"
            href={whatsappLink('Quero fazer um pedido para entrega.')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('store_visit')}
          >
            Pedir pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}