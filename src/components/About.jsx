import React, { useEffect, useRef } from 'react';

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('is-visible')),
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="sobre" className="about reveal" ref={ref}>
      <div className="container about__grid">
        <div>
          <p className="section__eyebrow">Nossa História</p>
          <h2 className="section__title">Uma história de amor pelos animais</h2>
          <p>
            O Pet Shop Semeando nasceu do amor pelos animais e do desejo de oferecer um
            atendimento acolhedor e cuidadoso para cada pet. Nossa missão é garantir
            bem-estar, saúde e alegria para o seu companheiro, sempre com produtos de
            qualidade e uma equipe apaixonada pelo que faz.
          </p>
          <p>Cada cliente é tratado como parte da nossa família.</p>
          <ul className="about__list">
            <li>Espaço moderno e acolhedor</li>
            <li>Produtos selecionados</li>
            <li>Equipe apaixonada por pets</li>
            <li>Atendimento personalizado</li>
          </ul>
        </div>
        <div className="about__badge-col">
          <div className="about__badge">
            <span className="about__badge-year">Desde</span>
            <span className="about__badge-num">1998</span>
          </div>
        </div>
      </div>
    </section>
  );
}