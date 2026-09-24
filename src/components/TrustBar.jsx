import React from 'react';

const ITEMS = ['Desde 1998', 'Mais de 5.000 clientes', 'Produtos selecionados', 'Atendimento personalizado'];

export default function TrustBar() {
  return (
    <div className="trustbar">
      {ITEMS.map((t, i) => (
        <React.Fragment key={t}>
          {i > 0 && <span className="trustbar__diamond" />}
          <span>{t}</span>
        </React.Fragment>
      ))}
    </div>
  );
}