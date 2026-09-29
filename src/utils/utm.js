// Captura e persiste parâmetros UTM da URL de entrada
export function captureUtm() {
  const params = new URLSearchParams(window.location.search);
  const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
  const utm = {};

  utmKeys.forEach(key => {
    const value = params.get(key);
    if (value) utm[key] = value;
  });

  // Só sobrescreve se houver UTMs novas na URL (respeita a origem mais recente)
  if (Object.keys(utm).length > 0) {
    localStorage.setItem('utm_data', JSON.stringify(utm));
    localStorage.setItem('utm_landing', window.location.pathname);
    localStorage.setItem('utm_timestamp', new Date().toISOString());
  }

  return getUtm();
}

export function getUtm() {
  try {
    return JSON.parse(localStorage.getItem('utm_data')) || {};
  } catch {
    return {};
  }
}

// Monta link do WhatsApp com origem identificável
export function whatsappLink(message) {
  const utm = getUtm();
  const source = utm.utm_source || 'direto';
  const campaign = utm.utm_campaign || 'organico';
  const base = 'https://wa.me/5521964787876';
  const text = encodeURIComponent(
    `Olá! Vim pelo site e gostaria de saber mais. ${message}`
  );
  return `${base}?text=${text}`;
}

// Dispara evento de clique rastreado (GA4 / Pixel / console)
export function trackWhatsAppClick(position) {
  const utm = getUtm();
  const event = {
    event: 'whatsapp_click',
    position,
    utm_source: utm.utm_source || 'direto',
    utm_medium: utm.utm_medium || 'none',
    utm_campaign: utm.utm_campaign || 'organico',
    page: window.location.pathname,
    timestamp: new Date().toISOString()
  };

  if (window.dataLayer) window.dataLayer.push(event);
  if (window.fbq) window.fbq('trackCustom', 'WhatsAppClick', event);
  console.log('[Lead Track]', event);
}