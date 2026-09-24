import React from 'react';
import { whatsappLink, trackWhatsAppClick } from '../utils/utm.js';

const ITEMS = [
  'Atendimento humano e acolhedor',
  'Entrega rápida na sua porta',
  'Curadoria premium garantida',
  'Orientação com equipe especializada'
];

export default function Experience() {
  return (
    <section className="experience">
      <div className="container">
        <p className="section__eyebrow section__eyebrow--light">Diferenciais</p>
        <h2 className="section__title section__title--light">A experiência Semeando</h2>
        <div className="experience__grid">
          {ITEMS.map(t => <p key={t} className="experience__item">{t}</p>)}
        </div>
        <div className="experience__cta">
          <a
            className="btn btn--gold btn--lg"
            href={whatsappLink('Quero conhecer a experiência Semeando.')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('experiencia')}
          >
            Fale no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}