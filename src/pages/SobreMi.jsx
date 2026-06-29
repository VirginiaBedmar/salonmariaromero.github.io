import React from 'react'
import './SobreMi.scss'

const galleryItems = [
  { src: 'assets/images/wp-assets/WhatsApp-Image-2024-09-26-at-15.02.12-1.jpeg', category: 'Manicura' },
  { src: 'assets/images/wp-assets/WhatsApp-Image-2024-09-26-at-15.02.12.jpeg', category: 'Manicura' },
  { src: 'assets/images/wp-assets/WhatsApp-Image-2024-09-26-at-15.02.11-1.jpeg', category: 'Manicura' },
  { src: 'assets/images/wp-assets/WhatsApp-Image-2024-09-26-at-15.02.11.jpeg', category: 'Manicura' },
  { src: 'assets/images/wp-assets/WhatsApp-Image-2024-09-26-at-15.02.10-1.jpeg', category: 'Manicura' },
  { src: 'assets/images/wp-assets/WhatsApp-Image-2024-09-26-at-15.02.07.jpeg', category: 'Manicura' },
  { src: 'assets/images/wp-assets/WhatsApp-Image-2024-09-26-at-15.02.07-1.jpeg', category: 'Manicura' },
  { src: 'assets/images/wp-assets/WhatsApp-Image-2024-09-26-at-15.02.07-2.jpeg', category: 'Manicura' },
  { src: 'assets/images/wp-assets/WhatsApp-Image-2024-09-26-at-15.02.08.jpeg', category: 'Manicura' },
  { src: 'assets/images/wp-assets/WhatsApp-Image-2024-09-26-at-15.02.09.jpeg', category: 'Manicura' },
  { src: 'assets/images/wp-assets/WhatsApp-Image-2024-09-26-at-15.02.09-1.jpeg', category: 'Manicura' },
  { src: 'assets/images/wp-assets/WhatsApp-Image-2024-09-26-at-15.02.10.jpeg', category: 'Manicura' },
  { src: 'assets/images/wp-assets/WhatsApp-Image-2024-09-26-at-15.02.05-2.jpeg', category: 'Manicura' },
  { src: 'assets/images/wp-assets/WhatsApp-Image-2024-09-26-at-15.02.05.jpeg', category: 'Manicura' },
  { src: 'assets/images/wp-assets/WhatsApp-Image-2024-09-26-at-15.02.04-5.jpeg', category: 'Manicura' },
  { src: 'assets/images/wp-assets/WhatsApp-Image-2024-09-26-at-15.02.04-4.jpeg', category: 'Manicura' },
  { src: 'assets/images/wp-assets/WhatsApp-Image-2024-09-26-at-15.02.04-3.jpeg', category: 'Manicura' },
  { src: 'assets/images/wp-assets/WhatsApp-Image-2024-09-26-at-15.02.04-2.jpeg', category: 'Manicura' },
  { src: 'assets/images/wp-assets/WhatsApp-Image-2024-09-26-at-15.02.04-1.jpeg', category: 'Manicura' },
  { src: 'assets/images/wp-assets/WhatsApp-Image-2024-09-26-at-15.02.04.jpeg', category: 'Manicura' },
  { src: 'assets/images/wp-assets/WhatsApp-Image-2024-09-26-at-15.03.41.jpeg', category: 'Micropigmentación' },
  { src: 'assets/images/wp-assets/WhatsApp-Image-2024-09-26-at-15.03.40-1.jpeg', category: 'Micropigmentación' },
  { src: 'assets/images/wp-assets/WhatsApp-Image-2024-09-26-at-15.03.40.jpeg', category: 'Micropigmentación' },
]

function SobreMi() {
  const [activeCategory, setActiveCategory] = React.useState('Manicura')
  const categories = ['Manicura', 'Micropigmentación']

  const filteredItems = galleryItems.filter((item) => item.category === activeCategory)

  return (
    <div className="sobremi-page">
      <section className="sobremi-hero">
        <div className="sobremi-hero-overlay" />
        <div className="container">
          <h1 className="sobremi-hero-title">Sobre María Romero</h1>
          <h3 className="sobremi-hero-subtitle">Tu mejor elección para tu tratamiento de belleza</h3>
        </div>
      </section>

      <section className="sobremi-about">
        <div className="container">
          <div className="sobremi-about-grid">
            <div className="sobremi-about-content">
              <h6 className="sobremi-about-label">Conoce mi historia profesional</h6>
              <h2 className="sobremi-about-heading">Tratamientos personalizados dignos de cualquier estrella.</h2>
              <div className="sobremi-about-text">
                <p>
                  Mi nombre es María Romero, y mi pasión por el mundo de la belleza comenzó en 2021
                  casi de forma inesperada. Lo que empezó como un pasatiempo pronto se transformó en
                  una auténtica vocación. Desde el primer momento, me sumergí en el fascinante
                  universo de la manicura, pedicura, lifting de pestañas y micropigmentación, con una
                  curiosidad insaciable por aprender cada detalle y perfeccionar cada técnica.
                </p>
                <p>
                  Conforme avanzaba en mi formación, combinaba mis estudios con esta nueva ilusión que
                  fue creciendo día a día. En mi tiempo libre, me dedicaba por completo a estudiar, no
                  solo las últimas tendencias en el sector, sino también la anatomía de las uñas, el
                  cuidado de la piel y la prevención de enfermedades. Quería ofrecer un servicio
                  impecable, donde cada limado, cada estructura y cada tratamiento reflejara la
                  dedicación y profesionalidad que pongo en mi trabajo.
                </p>
                <p>
                  Después de meses de preparación, decidí enfrentarme a mi primera gran prueba: una
                  competición en Madrid. Con esfuerzo, nervios y muchas ganas, conseguí llevarme a
                  casa tres premios. Aquello fue solo el principio de mi travesía competitiva, ya que
                  poco después me embarqué en otra competición en Portugal. Aunque las cosas no
                  salieron como esperaba, aprendí una lección valiosa: incluso de las dificultades
                  podemos extraer lo positivo. A pesar de los contratiempos, me llevé dos premios más,
                  lo que me demostró que la perseverancia y la pasión siempre tienen su recompensa.
                </p>
                <p>
                  Tras un breve descanso de las competiciones, me lancé de nuevo a una nueva aventura,
                  esta vez en el campeonato de Andalucía, donde obtuve cinco premios. Fue un hito
                  importante en mi carrera, pero también un momento de reflexión: había llegado la
                  hora de canalizar toda esa experiencia, formación y aprendizaje en un proyecto propio.
                </p>
                <p>
                  Hoy, puedo decir con orgullo que he convertido esa pasión en mi profesión. Cada día
                  en MR Salón de Belleza es una nueva oportunidad para seguir aprendiendo,
                  innovando y ofreciendo lo mejor de mí a cada cliente. Porque para mí, la belleza no
                  es solo estética, es también cuidado, confianza y bienestar.
                </p>
              </div>
            </div>
            <div className="sobremi-about-images">
              <img
                src="assets/images/wp-assets/WhatsApp-Image-2024-10-12-at-21.31.41-2.jpeg"
                alt="María Romero"
                className="sobremi-about-image"
                loading="lazy"
              />
              <img
                src="assets/images/wp-assets/WhatsApp-Image-2024-09-26-at-15.02.04-5.jpeg"
                alt="María Romero"
                className="sobremi-about-image sobremi-about-image--secondary"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="sobremi-motto">
        <div className="sobremi-motto-overlay" />
        <div className="container">
          <h6 className="sobremi-motto-label">Nuestro lema</h6>
          <h2 className="sobremi-motto-title">Uñas suaves como la piel, y duras como el diamante.</h2>
          <p className="sobremi-motto-text">
            En nuestro salón, cuidamos cada detalle para que tus uñas luzcan impecables. Con
            productos de alta calidad y técnicas avanzadas, te ofrecemos un acabado suave y resistente
            que realza tu belleza natural. Nuestras manicuras están diseñadas para durar y adaptarse a
            tus necesidades, porque creemos en un servicio totalmente personalizado que cuide tanto de
            la estética como de la salud de tus uñas.
          </p>
        </div>
      </section>

      <section className="sobremi-contact">
        <div className="container">
          <div className="sobremi-contact-cards">
            <div className="sobremi-contact-card">
              <a
                href="https://wa.me/+34603439373"
                target="_blank"
                rel="noopener noreferrer"
                className="sobremi-contact-icon"
              >
                <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
              </a>
              <h3 className="sobremi-contact-title">
                <a href="https://wa.me/+34603439373" target="_blank" rel="noopener noreferrer">
                  +(34) 603 439 373
                </a>
              </h3>
              <p className="sobremi-contact-desc">
                Déjanos un mensaje de WhatsApp para lo que necesites y te atendemos.
              </p>
            </div>
            <div className="sobremi-contact-card">
              <a href="mailto:Mariiaromeeo07@gmail.com" className="sobremi-contact-icon">
                <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M176 216h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16zm-16 80c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16zm96 121.13c-16.42 0-32.84-5.06-46.86-15.19L0 250.86V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V250.86L302.86 401.94c-14.02 10.12-30.44 15.19-46.86 15.19zm237.61-254.18c-8.85-6.94-17.24-13.47-29.61-22.81V96c0-26.51-21.49-48-48-48h-77.55c-3.04-2.2-5.87-4.26-9.04-6.56C312.6 29.17 279.2-.35 256 0c-23.2-.35-56.59 29.17-73.41 41.44-3.17 2.3-6 4.36-9.04 6.56H96c-26.51 0-48 21.49-48 48v44.14c-12.37 9.33-20.76 15.87-29.61 22.81A47.995 47.995 0 0 0 0 200.72v10.65l96 69.35V96h320v184.72l96-69.35v-10.65c0-14.74-6.78-28.67-18.39-37.77z" />
                </svg>
              </a>
              <h3 className="sobremi-contact-title">
                <a href="mailto:Mariiaromeeo07@gmail.com">Mariiaromeeo07@gmail.com</a>
              </h3>
              <p className="sobremi-contact-desc">
                Puedes escribirnos cualquier duda, consulta o cita que necesites por email.
              </p>
            </div>
            <div className="sobremi-contact-card">
              <a href="tel:+34603439373" className="sobremi-contact-icon">
                <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
                </svg>
              </a>
              <h3 className="sobremi-contact-title">
                <a href="tel:+34603439373">+(34) 603 439 373</a>
              </h3>
              <p className="sobremi-contact-desc">
                Puedes contactar con nosotros por teléfono, pero atender el teléfono en horario de
                trabajo nos es complicado. Te rogamos disculpas y utiliza WhatsApp e Email como
                medios preferentes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sobremi-gallery">
        <div className="container">
          <h2 className="sobremi-gallery-title">Galería de trabajos realizados</h2>
          <div className="sobremi-gallery-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`sobremi-gallery-filter ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="sobremi-gallery-grid">
            {filteredItems.map((item, i) => (
              <a
                key={i}
                href={item.src}
                className="sobremi-gallery-item"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={item.src} alt="" loading="lazy" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default SobreMi
