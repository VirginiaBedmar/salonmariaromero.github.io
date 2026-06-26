import React from 'react';
import './Home.scss';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const testimonials = [
  {
    img: 'assets/images/wp-assets/eye-211610_1280.jpg',
    name: 'Patricia T.',
    text: 'Me encanta el trato y la profesionalidad de Maria Romero. Su centro de estética es muy acogedor y no le falta ningun detalle para mimar a sus clientas. Lo recomiendo 100%.',
  },
  {
    img: 'assets/images/wp-assets/WhatsApp-Image-2024-10-09-at-12.02.46.jpeg',
    name: 'Sofia D.',
    text: 'Maria es maravillosa. Súper atenta y profesional. Lleves la idea que lleves siempre la lleva a cabo a la perfección. Te aconseja en cuanto a colores y diseños, etc. Es una chica super amable, amigable y simpática. Llevo con ella desde hace más de un año y no la cambio por nada.',
  },
  {
    img: 'assets/images/wp-assets/WhatsApp-Image-2024-10-10-at-19.13.24.jpeg',
    name: 'Carmen G.',
    text: 'Pasión y cuidado así es como describiría el arte y la experiencia con María cada vez que me hace la manicura. Mis uñas se mantienen sanas y fuertes y siempre supera mis expectativas con los diseños que le pido. ¡100% recomendada!',
  },
  {
    img: 'assets/images/wp-assets/woman-in-a-nail-salon-receiving-a-manicure.jpg',
    name: 'Tamara L.',
    text: 'Soy clienta de Maria desde hace más de un año y medio y sólo puedo hablar maravillas de ella. Es súper atenta, profesional, se nota que le encanta su trabajo y siempre siempre hace lo posible para dar lo mejor de ella en cada uno de sus servicios. Sin duda alguna la elegiría una y otra vez. Gracias María por darnos a tus clientas lo mejor de ti.',
  },
]

const microprecios = [
  { name: 'Labios efecto acuarela', price: '195 €', desc: 'Resalta la belleza de tus labios con un toque de color suave y natural.' },
  { name: 'Cejas sombreadas', price: '185 €', desc: 'Define tu mirada con cejas perfectas y un acabado natural.' },
  { name: 'Eyeliner clásico', price: '175 €', desc: 'Destaca tus ojos con un delineado duradero y elegante.' },
]

export default () => {
  return (
    <div id="home">
      <Navigation />
      <header className="full-height">
        <div className="header-content">
          <div className="container">
            <div className="header-content-container">
              <div>
                <h3>Revitaliza tus uñas</h3>
                <p>
                  Vibrantes, elegantes y llenas de vida. Nuestros diseños de uñas están pensados para cada ocasión, haciendo que tus manos sean siempre el centro de atención.
                </p>
                <a href="/servicios">Consulta servicios</a>
              </div>
              <figure>
                <img src="assets/images/wp-assets/jasmine-flowers.png" alt="Jasmine Flowers White" />
              </figure>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="home-gallery-strip">
          <div className="container">
            <div className="home-gallery-grid">
              <img src="assets/images/wp-assets/WhatsApp-Image-2024-09-26-at-15.02.04-1.jpeg" alt="" loading="lazy" />
              <img src="assets/images/wp-assets/WhatsApp-Image-2024-09-26-at-15.02.04-2.jpeg" alt="" loading="lazy" />
              <img src="assets/images/wp-assets/WhatsApp-Image-2024-09-26-at-15.02.04-3.jpeg" alt="" loading="lazy" />
              <img src="assets/images/wp-assets/WhatsApp-Image-2024-09-26-at-15.02.04-5.jpeg" alt="" loading="lazy" />
              <img src="assets/images/wp-assets/WhatsApp-Image-2024-09-26-at-15.02.05-2.jpeg" alt="" loading="lazy" />
              <img src="assets/images/wp-assets/WhatsApp-Image-2024-09-26-at-15.02.07-2.jpeg" alt="" loading="lazy" />
              <img src="assets/images/wp-assets/WhatsApp-Image-2024-09-26-at-15.02.08.jpeg" alt="" loading="lazy" />
              <img src="assets/images/wp-assets/WhatsApp-Image-2024-09-26-at-15.02.10-1.jpeg" alt="" loading="lazy" />
              <img src="assets/images/wp-assets/WhatsApp-Image-2024-09-26-at-15.02.12.jpeg" alt="" loading="lazy" />
              <img src="assets/images/wp-assets/WhatsApp-Image-2024-09-26-at-15.02.12-1.jpeg" alt="" loading="lazy" />
            </div>
          </div>
        </section>

        <section className="home-jasmine-divider">
          <img src="assets/images/wp-assets/jasmine-flowers.png" alt="" loading="lazy" />
        </section>

        <section className="home-presoterapia">
          <div className="container">
            <div className="home-presoterapia-grid">
              <div className="home-presoterapia-image">
                <img src="assets/images/wp-assets/presoterapiaial.webp" alt="Presoterapia" loading="lazy" />
              </div>
              <div className="home-presoterapia-content">
                <h2>Presoterapia: Belleza y bienestar en una sola sesión</h2>
                <p>
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

        <section className="home-about">
          <div className="container">
            <div className="home-about-grid">
              <div className="home-about-content">
                <h2>Sobre Salón MR</h2>
                <p className="home-about-subtitle">
                  Nuestra misión es hacerte sentir única y hermosa. Ofrecemos una amplia gama de servicios
                  que destacan tu belleza, adaptados a tus necesidades. Ven y experimenta la transformación
                  que mereces; ¡tu felicidad es nuestra prioridad!
                </p>
                <a href="/servicios" className="home-about-link">Nuestros servicios</a>
                <p className="home-about-text">
                  En nuestro salón, transformamos tu look y elevamos tu confianza. Desde manicuras perfectas
                  hasta cejas impecables, cada servicio está diseñado para resaltar tu belleza única. No
                  esperes más, regálate un momento de autocuidado y ven a descubrir todo lo que podemos
                  hacer por ti. ¡Tu mejor versión te está esperando!
                </p>
              </div>
              <div className="home-about-features">
                <div className="home-about-feature">
                  <h3>Profesionalidad</h3>
                </div>
                <div className="home-about-feature">
                  <h3>Mejor calidad</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="home-services-showcase">
          <div className="container">
            <div className="home-services-showcase-grid">
              <div className="home-service-card">
                <div className="home-service-card-image">
                  <img src="assets/images/wp-assets/WhatsApp-Image-2024-09-26-at-15.02.04-3.jpeg" alt="Micropigmentación" loading="lazy" />
                </div>
                <div className="home-service-card-content">
                  <span className="home-service-card-tag">Atención personalizada</span>
                  <h3>Micropigmentación</h3>
                  <p>
                    Técnica de maquillaje permanente que consiste en inyectar un pigmento en la capa media
                    de la piel para colorear o mejorar el aspecto facial tanto de cejas, labios o eye liner.
                    El objetivo es definir y aportar volumen, a la vez que dar un efecto de simetría a la
                    cara. Con esta técnica, se consigue un aspecto natural y definido, logrando un estado
                    perfecto en todo momento.
                  </p>
                  <a href="/servicios" className="home-service-card-link">Consultar</a>
                </div>
              </div>
              <div className="home-service-card">
                <div className="home-service-card-image">
                  <img src="assets/images/wp-assets/WhatsApp-Image-2024-09-26-at-15.03.40.jpeg" alt="Pedicura" loading="lazy" />
                </div>
                <div className="home-service-card-content">
                  <span className="home-service-card-tag">Atención personalizada</span>
                  <h3>Pedicura</h3>
                  <p>
                    La pedicura es un tratamiento estético y de cuidado personal para los pies y las uñas
                    de los pies. Incluye el recorte, limado y pulido de las uñas, así como la eliminación
                    de durezas y piel muerta. Tras la preparación y limpieza de las uñas podemos realizar
                    un mejor acabado con un esmaltado semipermanente.
                  </p>
                  <a href="/servicios" className="home-service-card-link">Consultar</a>
                </div>
              </div>
              <div className="home-service-card">
                <div className="home-service-card-image">
                  <img src="assets/images/wp-assets/WhatsApp-Image-2024-09-26-at-15.02.12.jpeg" alt="Lifting de pestañas" loading="lazy" />
                </div>
                <div className="home-service-card-content">
                  <span className="home-service-card-tag">Atención personalizada</span>
                  <h3>Lifting de pestañas</h3>
                  <p>
                    El lifting de pestaña es un tratamiento en el que se realiza una curvatura ligera en
                    las pestañas de poco rizado o incluso rectas, obtenemos un resultado de mayor volumen
                    y grosor en ellas. Tiene una duración entre 4 y 6 semanas, dependiendo del cuidado que
                    le dé la clienta.
                  </p>
                  <a href="/servicios" className="home-service-card-link">Consultar</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="home-testimonials">
          <div className="container">
            <h2 className="home-testimonials-title">Qué dicen nuestras clientes</h2>
            <p className="home-testimonials-subtitle">
              Aquí te dejamos algunos comentarios de clientas habituales que vienen a nuestro Salón a
              visitarnos periódicamente.
            </p>
            <div className="home-testimonials-grid">
              {testimonials.map((t, i) => (
                <div key={i} className="home-testimonial-card">
                  <div className="home-testimonial-image">
                    <img src={t.img} alt={t.name} loading="lazy" />
                  </div>
                  <h4 className="home-testimonial-name">{t.name}</h4>
                  <span className="home-testimonial-role">Client</span>
                  <p className="home-testimonial-text">{t.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="home-microprecios">
          <div className="container">
            <h2 className="home-microprecios-title">Precios Especiales Micropigmentación</h2>
            <div className="home-microprecios-grid">
              {microprecios.map((item, i) => (
                <div key={i} className="home-microprecios-card">
                  <h3 className="home-microprecios-name">{item.name}</h3>
                  <p className="home-microprecios-desc">{item.desc}</p>
                  <p className="home-microprecios-price">{item.price}</p>
                  <a
                    href="https://api.whatsapp.com/send?phone=+34603439373"
                    className="home-microprecios-cta"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Coge tu cita
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="home-decorative-image">
          <img src="assets/images/wp-assets/manicured-woman-hands-with-pastel-nail-polish-8JZ69ZG.jpg" alt="" loading="lazy" />
        </section>

        <section className="home-bottom-jasmine">
          <img src="assets/images/wp-assets/jasmine-flowers-white-6.png" alt="" loading="lazy" />
        </section>

        <section className="home-hours">
          <div className="container">
            <h2 className="home-hours-title">Horario de apertura</h2>
            <p className="home-hours-desc">
              De lunes a viernes en el horario informado, excepto fiestas locales y nacionales.
            </p>
            <ul className="home-hours-list">
              <li>
                <span className="home-hours-days">Lunes-Jueves-Viernes</span>
                <span className="home-hours-sep" />
                <span className="home-hours-time">10:00-18:30</span>
              </li>
              <li>
                <span className="home-hours-days">Martes-Miércoles</span>
                <span className="home-hours-sep" />
                <span className="home-hours-time">10:00-14:00 y 17:30-20:30</span>
              </li>
              <li>
                <span className="home-hours-days">Sábado-Domingo</span>
                <span className="home-hours-sep" />
                <span className="home-hours-time">Cerrado</span>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
};
