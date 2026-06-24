import React from 'react'
import './Contacto.scss'

const businessHours = [
  { days: 'Lunes-Jueves-Viernes', hours: '10:00-18:30' },
  { days: 'Martes-Miércoles', hours: '10:00-14:00 y 17:30-20:30' },
  { days: 'Sábado-Domingo', hours: 'Cerrado' },
]

const contactMethods = [
  {
    icon: 'whatsapp',
    label: '+(34) 603 439 373',
    desc: 'Déjanos un mensaje de WhatsApp para lo que necesites y te atendemos.',
    href: 'https://api.whatsapp.com/send?phone=+34603439373',
  },
  {
    icon: 'email',
    label: 'Mariiaromeeo07@gmail.com',
    desc: 'Puedes escribirnos cualquier duda, consulta o cita que necesites por email.',
    href: 'mailto:Mariiaromeeo07@gmail.com',
  },
  {
    icon: 'phone',
    label: '+(34) 603 439 373',
    desc: 'Puedes contactar con nosotros por teléfono, pero atender el teléfono en horario de trabajo nos es complicado. Te rogamos disculpas y utiliza WhatsApp e Email como medios preferentes.',
    href: 'tel:+34603439373',
  },
]

function Contacto() {
  return (
    <div className="contacto-page">
      <section className="contacto-hero">
        <div className="contacto-hero-overlay" />
        <div className="container">
          <h1 className="contacto-hero-title">Contacto</h1>
          <p className="contacto-hero-text">
            No dudes en contactar con nosotros para pedir una cita, para una consulta, para
            localizarnos... seguro no te arrepentirás. Eso sí, déjanos mensaje por email o WhatsApp
            a ser posible, pues en horario de trabajo nos es difícil atender el teléfono.
          </p>
        </div>
      </section>

      <section className="contacto-section">
        <div className="container">
          <div className="contacto-row">
            <div className="contacto-col">
              <h2 className="contacto-heading">Dónde estamos</h2>
              <p className="contacto-text">
                En una de las ciudades costeras más bonitas y atractivas de la Costa del Sol podrás
                encontrar nuestro Salón de Belleza; solo usa nuestro mapa y tu móvil te llevará hasta
                nosotras.
              </p>
            </div>
            <div className="contacto-col">
              <div className="contacto-map">
                <iframe
                  src="https://maps.google.com/maps?q=Calle%20Terraza%2C%20107%20bajo%2C%20Estepona&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  title="Calle Terraza, 107 bajo, Estepona"
                  aria-label="Calle Terraza, 107 bajo, Estepona"
                  loading="lazy"
                  className="contacto-map-iframe"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contacto-section contacto-section--alt">
        <div className="container">
          <div className="contacto-row">
            <div className="contacto-col">
              <img
                src="assets/images/wp-assets/WhatsApp-Image-2024-10-12-at-21.31.41-1.jpeg"
                alt="Salón María Romero"
                className="contacto-image"
                loading="lazy"
              />
            </div>
            <div className="contacto-col">
              <h2 className="contacto-heading">Horario de apertura</h2>
              <p className="contacto-text">
                De lunes a viernes en el horario informado, excepto fiestas locales y nacionales.
              </p>
              <ul className="contacto-hours">
                {businessHours.map((item, i) => (
                  <li key={i} className="contacto-hours-item">
                    <span className="contacto-hours-days">{item.days}</span>
                    <span className="contacto-hours-separator" />
                    <span className="contacto-hours-time">{item.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="contacto-section">
        <div className="container">
          <div className="contacto-cards">
            {contactMethods.map((method, i) => (
              <div key={i} className="contacto-card">
                <a
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="contacto-card-icon"
                >
                  {method.icon === 'whatsapp' && (
                    <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                    </svg>
                  )}
                  {method.icon === 'email' && (
                    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                      <path d="M176 216h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16zm-16 80c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16zm96 121.13c-16.42 0-32.84-5.06-46.86-15.19L0 250.86V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V250.86L302.86 401.94c-14.02 10.12-30.44 15.19-46.86 15.19zm237.61-254.18c-8.85-6.94-17.24-13.47-29.61-22.81V96c0-26.51-21.49-48-48-48h-77.55c-3.04-2.2-5.87-4.26-9.04-6.56C312.6 29.17 279.2-.35 256 0c-23.2-.35-56.59 29.17-73.41 41.44-3.17 2.3-6 4.36-9.04 6.56H96c-26.51 0-48 21.49-48 48v44.14c-12.37 9.33-20.76 15.87-29.61 22.81A47.995 47.995 0 0 0 0 200.72v10.65l96 69.35V96h320v184.72l96-69.35v-10.65c0-14.74-6.78-28.67-18.39-37.77z" />
                    </svg>
                  )}
                  {method.icon === 'phone' && (
                    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                      <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
                    </svg>
                  )}
                </a>
                <h3 className="contacto-card-title">
                  <a href={method.href}>{method.label}</a>
                </h3>
                <p className="contacto-card-desc">{method.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contacto
