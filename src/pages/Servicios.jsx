import React from 'react'
import './Servicios.scss'

const servicesData = {
  manicura: {
    title: 'Manicura',
    subtitle: 'Uñas impecables y color vibrante',
    items: [
      { name: 'Manicura semipermanente', price: '22€', desc: 'Uñas impecables y color vibrante que resiste por más tiempo.' },
      { name: 'Manicura sin esmaltado', price: '12€', desc: 'Cuida y embellece tus uñas de forma natural.' },
      { name: 'Manicura con refuerzo', price: '25€', desc: 'Fortalece tus uñas mientras luces un acabado perfecto.' },
      { name: 'Primera puesta poligel', price: '50€', desc: 'Uñas esculpidas y resistentes con un acabado natural.' },
      { name: 'Rellenos gel o poligel', price: '30€', desc: 'Renueva tus uñas y prolonga la belleza de tu manicura.' },
      { name: 'Retirado con manicura', price: '12€', desc: 'Retira tu esmalte con cuidado y disfruta de unas manos renovadas.' },
      { name: 'Decoración elaborada', price: 'desde 0,50€', desc: 'Dale un toque personal a tus manos con nuestra decoración creativa.' },
      { name: 'Decoración con aerógrafo', price: 'desde 1,00€', desc: 'Luce diseños impresionantes y suaves con nuestra técnica de aerógrafo.' },
    ],
    img: 'https://salonmariaromero.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-12-at-21.31.40-768x1024.jpeg',
  },
  micropigmentacion: {
    title: 'Micropigmentación',
    subtitle: 'Define tu mirada',
    items: [
      { name: 'Labios efecto acuarela', price: '195€', desc: 'Resalta la belleza de tus labios con un toque de color suave y natural.' },
      { name: 'Cejas sombreadas', price: '185€', desc: 'Define tu mirada con cejas perfectas y un acabado natural.' },
      { name: 'Eyeliner clásico', price: '175€', desc: 'Destaca tus ojos con un delineado duradero y elegante.' },
      { name: 'Retoque necesario a los 45 días', price: '50€', desc: '' },
    ],
  },
  pedicura: {
    title: 'Pedicura',
    subtitle: 'Pies perfectos',
    items: [
      { name: 'Pedicura con esmaltado semipermanente', price: '30€', desc: 'Disfruta de pies perfectos y duraderos con un acabado brillante.' },
      { name: 'Pedicura sin esmaltado semipermanente', price: '25€', desc: 'Una pedicura sencilla que resalta la belleza natural de tus pies.' },
      { name: 'Esmaltado semipermanente', price: '23€', desc: 'Color vibrante y duradero para tus uñas, sin preocupaciones.' },
      { name: 'Retirado de esmaltado semipermanente', price: '12€', desc: 'Trato profesional que deja tus pies como nuevos.' },
    ],
  },
  cejasPestanas: {
    title: 'Cejas y Pestañas',
    subtitle: 'Define tu mirada',
    items: [
      { name: 'Lifting + tinte de pestañas', price: '25€', desc: 'Dale volumen y definición a tus pestañas para un look deslumbrante.' },
      { name: 'Tinte de cejas', price: '10€', desc: 'Define tu mirada con cejas perfectamente tintadas y naturales.' },
    ],
  },
}

function Servicios() {
  return (
    <div className="servicios-page">
      <section className="servicios-hero">
        <div className="servicios-hero-overlay" />
        <div className="container">
          <h1 className="servicios-hero-title">Servicios</h1>
          <h3 className="servicios-hero-subtitle">Calidad y profesionalidad a precios increíbles</h3>
        </div>
      </section>

      <section className="servicios-section">
        <div className="container">
          <div className="servicios-row">
            <div className="servicios-col servicios-col-content">
              <h3 className="servicios-category-title">{servicesData.manicura.title}</h3>
              <div className="servicios-divider" />
              <ul className="servicios-price-list">
                {servicesData.manicura.items.map((item, i) => (
                  <li key={i} className="servicios-price-item">
                    <div className="servicios-price-header">
                      <span className="servicios-price-name">{item.name}</span>
                      <span className="servicios-price-separator" />
                      <span className="servicios-price-value">{item.price}</span>
                    </div>
                    {item.desc && <p className="servicios-price-desc">{item.desc}</p>}
                  </li>
                ))}
              </ul>
            </div>
            <div className="servicios-col servicios-col-image">
              <img
                src={servicesData.manicura.img}
                alt="Manicura"
                className="servicios-image"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="servicios-section">
        <div className="container">
          <div className="servicios-row">
            <div className="servicios-col servicios-col-image">
              <img
                src="https://salonmariaromero.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-12-at-21.31.39-768x1024.jpeg"
                alt="Micropigmentación y Pedicura"
                className="servicios-image"
                loading="lazy"
              />
            </div>
            <div className="servicios-col servicios-col-content">
              <h3 className="servicios-category-title">{servicesData.micropigmentacion.title}</h3>
              <div className="servicios-divider" />
              <ul className="servicios-price-list">
                {servicesData.micropigmentacion.items.map((item, i) => (
                  <li key={i} className="servicios-price-item">
                    <div className="servicios-price-header">
                      <span className="servicios-price-name">{item.name}</span>
                      <span className="servicios-price-separator" />
                      <span className="servicios-price-value">{item.price}</span>
                    </div>
                    {item.desc && <p className="servicios-price-desc">{item.desc}</p>}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="servicios-section">
        <div className="container">
          <div className="servicios-row">
            <div className="servicios-col servicios-col-content">
              <h3 className="servicios-category-title">{servicesData.pedicura.title}</h3>
              <div className="servicios-divider" />
              <ul className="servicios-price-list">
                {servicesData.pedicura.items.map((item, i) => (
                  <li key={i} className="servicios-price-item">
                    <div className="servicios-price-header">
                      <span className="servicios-price-name">{item.name}</span>
                      <span className="servicios-price-separator" />
                      <span className="servicios-price-value">{item.price}</span>
                    </div>
                    {item.desc && <p className="servicios-price-desc">{item.desc}</p>}
                  </li>
                ))}
              </ul>
              <div className="servicios-category-spacer">
                <h3 className="servicios-category-title">{servicesData.cejasPestanas.title}</h3>
                <div className="servicios-divider" />
                <ul className="servicios-price-list">
                  {servicesData.cejasPestanas.items.map((item, i) => (
                    <li key={i} className="servicios-price-item">
                      <div className="servicios-price-header">
                        <span className="servicios-price-name">{item.name}</span>
                        <span className="servicios-price-separator" />
                        <span className="servicios-price-value">{item.price}</span>
                      </div>
                      {item.desc && <p className="servicios-price-desc">{item.desc}</p>}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="servicios-col servicios-col-image">
              <img
                src="https://salonmariaromero.es/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-12-at-21.31.40-768x1024.jpeg"
                alt="Cejas y Pestañas"
                className="servicios-image"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="servicios-presoterapia">
        <div className="container">
          <div className="servicios-presoterapia-grid">
            <div className="servicios-presoterapia-image">
              <img
                src="https://salonmariaromero.es/wp-content/uploads/2025/05/presoterapiaial-819x1024.webp"
                alt="Presoterapia"
                loading="lazy"
              />
            </div>
            <div className="servicios-presoterapia-content">
              <h2 className="servicios-presoterapia-title">Presoterapia: Belleza y bienestar en una sola sesión</h2>
              <p className="servicios-presoterapia-text">
                La presoterapia es un tratamiento corporal no invasivo que utiliza un sistema de presión
                de aire controlada a través de botas o trajes neumáticos, que se ajustan a zonas
                específicas del cuerpo. Esta presión rítmica y secuencial estimula el sistema linfático,
                mejorando la circulación, facilitando la eliminación de toxinas, y ayudando a reducir
                la retención de líquidos y la celulitis. Es especialmente útil para personas con
                sensación de piernas cansadas, edemas, varices o postoperatorios de tratamientos
                estéticos como la liposucción. En MR Salón de Belleza, aplicamos este tratamiento con
                equipos de última generación y bajo protocolos personalizados, garantizando seguridad,
                comodidad y eficacia desde la primera sesión. Ideal para quienes desean cuidar su salud
                y mejorar el aspecto de su cuerpo sin recurrir a procedimientos invasivos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="servicios-cta">
        <div className="servicios-cta-overlay" />
        <div className="container">
          <h2 className="servicios-cta-title">¡Despierta tu belleza y haz que cada día cuente!</h2>
          <p className="servicios-cta-text">
            En nuestro salón, cada servicio está diseñado para realzar tu belleza natural. Desde
            manicuras impecables hasta cejas perfectamente definidas, te ayudamos a sentirte y lucir
            como nunca antes. ¡No dejes pasar la oportunidad de disfrutar de un momento especial para ti!
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=+34603439373"
            target="_blank"
            rel="noopener noreferrer"
            className="servicios-cta-button"
          >
            Contacta ya
          </a>
        </div>
      </section>
    </div>
  )
}

export default Servicios
