import React from 'react';

const CATS = [
  { name: 'Cães', text: 'Do filhote ao sênior, tudo para a rotina do seu melhor amigo.' },
  { name: 'Gatos', text: 'Conforto, nutrição e enriquecimento para felinos exigentes.' },
  { name: 'Pássaros', text: 'Tudo o que sua ave precisa para viver feliz.' },
  { name: 'Aquarismo', text: 'Cuidado completo do seu aquário, dos peixes ao substrato.' },
  { name: 'Plantas e Jardinagem', text: 'Linha completa para o cuidado e embelezamento das suas plantas.' },
  { name: 'Piscina e Lazer', text: 'Qualidade para o seu lazer, diversão e bem-estar.' }
];

const ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21.2l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8z" />
  </svg>
);

export default function Categories() {
  return (
    <section id="categorias" className="categories">
      <div className="container">
        <p className="section__eyebrow">Nossas Categorias</p>
        <h2 className="section__title">Tudo para todas as espécies</h2>
        <div className="categories__grid">
          {CATS.map(c => (
            <article key={c.name} className="category-card">
              <div className="category-card__icon">{ICON}</div>
              <h3>{c.name}</h3>
              <p>{c.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}