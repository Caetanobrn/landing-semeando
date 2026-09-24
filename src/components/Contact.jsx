import React from 'react';
import { whatsappLink, trackWhatsAppClick } from '../utils/utm.js';

export default function Contact() {
  return (
    <section id="contato" className="contact">
      <div className="container contact__inner">
        <p className="section__eyebrow">Atendimento</p>
        <h2 className="section__title">Fale Conosco</h2>
        <p className="contact__lead">
          Nossa equipe está sempre pronta para ajudar com carinho e atenção.
          Atendimento rápido e personalizado.
        </p>
        <div className="contact__cards">
          <a
            className="contact-card"
            href={whatsappLink('Falei com vocês pela seção de contato do site.')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('contato')}
          >
            <span className="contact-card__label">WhatsApp</span>
            <span className="contact-card__value">(21) 96478-7876</span>
            <span className="contact-card__action">Abrir conversa</span>
          </a>
          <a className="contact-card" href="tel:+552130196479">
            <span className="contact-card__label">Telefone Fixo</span>
            <span className="contact-card__value">(21) 3019-6479</span>
            <span className="contact-card__action">Ligar agora</span>
          </a>
        </div>
        <div className="contact__address">
          <p>Ricardo de Albuquerque, Rio de Janeiro - RJ</p>
          <p className="contact__note">Local de fácil acesso, com estacionamento disponível.</p>
        </div>
      </div>
    </section>
  );
}