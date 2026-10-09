import React, { useState, useEffect, useRef } from 'react';
import { whatsappLink, trackWhatsAppClick } from '../utils/utm.js';

const SLIDES = [
  {
    img: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=1600&q=80',
    title: 'Semeando amor pelo seu pet desde 1998',
    sub: 'Atendimento exclusivo, produtos premium e cuidado em cada detalhe da vida do seu companheiro.',
    cta: 'Fale no WhatsApp',
    type: 'whatsapp',
    message: 'Quero saber mais sobre os serviços.',
    position: 'hero_slide_1'
  },
  {
    img: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=1600&q=80',
    title: 'Experiência premium para todas as espécies',
    sub: 'De cães e gatos a pássaros, aquarismo, plantas e piscinas — tudo em um só lugar.',
    cta: 'Conheça as categorias',
    type: 'anchor',
    target: 'categorias',
    position: 'hero_slide_2'
  },
  {
    img: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=1600&q=80',
    title: 'Conforto e segurança até a sua porta',
    sub: 'Entrega rápida via WhatsApp com o mesmo cuidado da nossa loja.',
    cta: 'Peça agora',
    type: 'whatsapp',
    message: 'Quero fazer um pedido.',
    position: 'hero_slide_3'
  }
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const touchX = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(i => (i + 1) % SLIDES.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const go = d => {
    setIndex(i => (i + d + SLIDES.length) % SLIDES.length);
  };

  const handleCTA = slide => {
    if (slide.type === 'anchor') {
      const element = document.getElementById(slide.target);

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }

      return;
    }

    if (slide.type === 'whatsapp') {
      trackWhatsAppClick(slide.position);
      window.open(
        whatsappLink(slide.message),
        '_blank',
        'noopener,noreferrer'
      );
    }
  };

  return (
    <section
      id="inicio"
      className="hero"
      onTouchStart={e => {
        touchX.current = e.touches[0].clientX;
      }}
      onTouchEnd={e => {
        if (touchX.current === null) return;

        const dx =
          e.changedTouches[0].clientX - touchX.current;

        if (Math.abs(dx) > 50) {
          go(dx < 0 ? 1 : -1);
        }

        touchX.current = null;
      }}
    >
      {SLIDES.map((s, i) => (
        <div
          key={i}
          className={`hero__slide ${
            i === index ? 'is-active' : ''
          }`}
        >
          <img
            src={s.img}
            alt=""
            onError={e => {
              e.target.style.display = 'none';
            }}
          />

          <div className="hero__overlay" />

          <div className="container hero__content">
            <p className="hero__eyebrow">
              Pet Shop Semeando
            </p>

            <h1>{s.title}</h1>

            <p className="hero__sub">
              {s.sub}
            </p>

            <button
                type="button"
                className="btn btn--gold btn--lg"
                onClick={e => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleCTA(s);
                }}
              >
                {s.cta}
            </button>
          </div>
        </div>
      ))}

      <button
        className="hero__arrow hero__arrow--prev"
        aria-label="Slide anterior"
        onClick={() => go(-1)}
      >
        ‹
      </button>

      <button
        className="hero__arrow hero__arrow--next"
        aria-label="Próximo slide"
        onClick={() => go(1)}
      >
        ›
      </button>

      <div className="hero__dots">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            className={`hero__dot ${
              i === index ? 'is-active' : ''
            }`}
            aria-label={`Ir para slide ${i + 1}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}