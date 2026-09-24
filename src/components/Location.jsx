import React from 'react';

const WHATSAPP = 'https://wa.me/5521964787876';

const MAP_SRC =
'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1778.6529340222291!2d-43.40160208347255!3d-22.839494154000768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9963da1aa41439%3A0x6beee1f2ae6e0ecf!2sPet%20Shop%20Semeando!5e1!3m2!1spt-BR!2sbr!4v1790220718523!5m2!1spt-BR!2sbr';

export default function Location() {
  return (
    <section id="localizacao" className="location">
      <div className="container">
        <p className="section__eyebrow section__eyebrow--light">Onde Estamos</p>
        <h2 className="section__title section__title--light">Nossa Localização</h2>
        <p className="location__lead">
          Estamos de portas abertas para receber você e seu pet com o cuidado e a
          atenção que sempre entregamos.
        </p>

        <div className="location__frame">
          <div className="location__inner">
            <iframe
              src={MAP_SRC}
              title="Localização do Pet Shop Semeando"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              style={{ border: 0, width: '100%', height: '420px', display: 'block', borderRadius: '4px' }}
            />
          </div>
        </div>

        {/* Fallback caso o mapa não carregue */}
        <noscript>
          <p>Ricardo de Albuquerque, Rio de Janeiro - RJ</p>
        </noscript>
      </div>
    </section>
  );
}