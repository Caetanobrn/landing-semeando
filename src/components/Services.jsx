import React from 'react';

const SERVICES = [
  {
    title: 'Curadoria de Produtos Premium',
    text: 'Rações premium, petiscos saudáveis, brinquedos interativos, caminhas confortáveis e acessórios modernos.',
    tags: ['Rações', 'Brinquedos', 'Acessórios']
  },
  {
    title: 'Entrega a Domicílio',
    text: 'Faça seu pedido pelo WhatsApp e receba em casa com agilidade, segurança e o mesmo cuidado da loja física.',
    tags: ['Rápido', 'Seguro', 'WhatsApp']
  },
  {
    title: 'Orientação de Cuidados',
    text: 'Orientação prática da equipe sobre alimentação, rotina e bem-estar do seu pet no dia a dia.',
    tags: ['Bem-estar', 'Rotina', 'Carinho']
  }
];

export default function Services() {
  return (
    <section id="servicos" className="services">
      <div className="container">
        <p className="section__eyebrow section__eyebrow--light">Nossos Serviços</p>
        <h2 className="section__title section__title--light">Cuidado premium em cada detalhe</h2>
        <div className="services__grid">
          {SERVICES.map(s => (
            <article key={s.title} className="service-card">
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <div className="service-card__tags">
                {s.tags.map(t => <span key={t}>{t}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}