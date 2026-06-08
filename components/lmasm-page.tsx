'use client'

import { useEffect, useRef, useState } from 'react'
import { SplineScene } from '@/components/ui/splite'
import { Spotlight } from '@/components/ui/spotlight'
import { CursorSpotlight } from '@/components/ui/cursor-spotlight'

export default function LMASMPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const slides = [
    {
      bg: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1600&q=80',
      title: 'Bienvenidos a LMASM',
      desc: 'Especialistas en decoración y cortinas a medida',
    },
    {
      bg: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1600&q=80',
      title: 'Diseños exclusivos',
      desc: 'Creamos ambientes únicos para tu hogar',
    },
    {
      bg: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1600&q=80',
      title: 'Calidad garantizada',
      desc: 'Materiales de primera calidad para tus cortinas',
    },
  ]

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length)
    }, 5000)
  }

  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    startInterval()
  }

  useEffect(() => {
    startInterval()
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [])

  return (
    <>
      {/* Google Fonts & Font Awesome */}
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />

      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Montserrat', sans-serif; line-height: 1.6; color: #4a4a4a; background-color: #faf8f5; }
        .container { width: 90%; max-width: 1200px; margin: 0 auto; }
        header { background-color: #ffffff; box-shadow: 0 2px 10px rgba(0,0,0,0.1); position: fixed; width: 100%; top: 0; z-index: 1000; }
        .header-container { display: flex; justify-content: space-between; align-items: center; padding: 15px 0; }
        .logo-container { display: flex; justify-content: center; flex: 1; }
        .social-icons { display: flex; gap: 15px; }
        .social-icons a { color: #4a4a4a; font-size: 24px; transition: color 0.3s ease; text-decoration: none; }
        .social-icons a:hover { color: #3498db; }

        /* ── HERO with 3D scene ── */
        .hero { height: 95vh; display: flex; align-items: center; justify-content: center; position: relative; margin-top: 90px; overflow: hidden; }
        .hero-3d-card {
          width: 96%; height: 90%;
          background: rgba(0,0,0,0.92);
          border-radius: 12px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
          display: flex;
        }
        .hero-left {
          flex: 1; padding: 60px 48px;
          display: flex; flex-direction: column; justify-content: center;
          position: relative; z-index: 10;
        }
        .hero-left h1 {
          font-size: clamp(2rem, 4vw, 3.5rem);
          font-weight: 700;
          background: linear-gradient(to bottom, #f0f0f0, #aaa);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text; line-height: 1.2;
        }
        .hero-left p { margin-top: 16px; color: #ccc; max-width: 420px; font-size: 1rem; line-height: 1.7; }
        .hero-cta-btn {
          display: inline-flex; align-items: center; gap: 10px;
          background: linear-gradient(135deg, #e67e22, #f39c12);
          color: white; text-decoration: none;
          padding: 14px 36px; border-radius: 40px;
          font-size: 1rem; font-weight: 700;
          box-shadow: 0 8px 24px rgba(0,0,0,0.35);
          margin-top: 28px; transition: transform .2s, box-shadow .2s;
          width: fit-content;
        }
        .hero-cta-btn:hover { transform: translateY(-3px); box-shadow: 0 14px 40px rgba(0,0,0,0.45); }
        .hero-right { flex: 1; position: relative; min-height: 400px; }

        /* Promo banner */
        .promo-banner {
          background: linear-gradient(90deg, #1a252f, #2c3e50, #1a252f);
          color: #f0d060; padding: 11px 0; overflow: hidden; white-space: nowrap;
          position: fixed; top: 90px; left: 0; width: 100%;
          z-index: 998; border-bottom: 2px solid #f0d060;
        }
        .promo-track {
          display: inline-flex; gap: 70px;
          font-size: 14px; font-weight: 700; letter-spacing: 0.4px;
        }
        .promo-track span { flex-shrink: 0; }

        /* Products */
        section { padding: 80px 0; }
        .section-title { text-align: center; font-size: 32px; font-weight: 700; margin-bottom: 50px; color: #2c3e50; }
        .products-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; }
        .product-card { background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 5px 15px rgba(0,0,0,0.1); transition: transform 0.3s ease; }
        .product-card:hover { transform: translateY(-10px); }
        .product-image { height: 350px; overflow: hidden; }
        .product-image img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease; }
        .product-card:hover .product-image img { transform: scale(1.1); }
        .product-content { padding: 20px; }
        .product-title { font-size: 20px; font-weight: 600; margin-bottom: 10px; color: #2c3e50; }

        /* Services */
        .services-banner { background-color: #e9e1d3; padding: 60px 0; }
        .services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 30px; text-align: center; }
        .service-card { background-color: #ffffff; border-radius: 8px; padding: 30px 20px; box-shadow: 0 5px 15px rgba(0,0,0,0.05); transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .service-card:hover { transform: translateY(-10px); box-shadow: 0 15px 30px rgba(0,0,0,0.1); }
        .service-icon { width: 80px; height: 80px; margin: 0 auto 20px; background: #d2c5a8; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 32px; color: #4a4a4a; }
        .service-title { font-size: 20px; font-weight: 600; margin-bottom: 15px; color: #2c3e50; }
        .service-description { color: #7f8c8d; }

        /* Location */
        .location-container { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; }
        .map-container { height: 400px; border-radius: 8px; overflow: hidden; }
        .map-container iframe { width: 100%; height: 100%; border: 0; }
        .location-info { padding: 20px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.1); }
        .location-info h3 { font-size: 24px; font-weight: 600; margin-bottom: 20px; color: #2c3e50; }
        .info-item { margin-bottom: 15px; display: flex; align-items: flex-start; }
        .info-item i { margin-right: 15px; color: #d2c5a8; font-size: 20px; margin-top: 2px; }
        .schedule-table { width: 100%; margin-top: 20px; border-collapse: collapse; }
        .schedule-table th, .schedule-table td { padding: 10px; text-align: left; border-bottom: 1px solid #eee; }
        .schedule-table th { font-weight: 600; color: #2c3e50; }

        /* Footer */
        footer { background-color: #000000; color: white; padding: 50px 0 20px; }
        .footer-container { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 30px; margin-bottom: 30px; }
        .footer-column h3 { font-size: 18px; font-weight: 600; margin-bottom: 20px; }
        .footer-links { list-style: none; }
        .footer-links li { margin-bottom: 10px; }
        .footer-links a { color: #ecf0f1; text-decoration: none; transition: color 0.3s ease; }
        .footer-links a:hover { color: #d2c5a8; }
        .footer-logo { text-align: center; margin-bottom: 20px; font-size: 24px; font-weight: 700; color: #d2c5a8; }
        .copyright { text-align: center; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1); }

        /* Btn */
        .btn { display: inline-block; background-color: #d2c5a8; color: #4a4a4a; padding: 12px 30px; border: none; border-radius: 4px; cursor: pointer; font-weight: 500; transition: background-color 0.3s ease; text-decoration: none; margin: 5px; font-family: 'Montserrat', sans-serif; }
        .btn:hover { background-color: #c4b393; }

        @media (max-width: 768px) {
          .hero { height: 70vh; margin-top: 120px; }
          .hero-3d-card { flex-direction: column; }
          .hero-left { padding: 30px 24px; }
          .hero-right { min-height: 260px; }
          .location-container { grid-template-columns: 1fr; }
          .section-title { font-size: 26px; }
        }
      `}</style>

      {/* Header */}
      <header>
        <div className="container header-container">
          <div className="social-icons">
            <a href="https://www.facebook.com/lmasm.decoracion.1" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook" />
            </a>
            <a href="https://www.instagram.com/lmasmdeco/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram" />
            </a>
            <a href="https://wa.me/5493541222572" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp" />
            </a>
          </div>
          <div className="logo-container">
            <div style={{ fontSize: '22px', fontWeight: 700, color: '#2c3e50', letterSpacing: '1px' }}>
              LMASM Decoración
            </div>
          </div>
          <div className="social-icons" style={{ visibility: 'hidden' }}>
            <a href="#"><i className="fab fa-facebook" /></a>
            <a href="#"><i className="fab fa-instagram" /></a>
          </div>
        </div>
      </header>

      {/* Promo Banner */}
      <div className="promo-banner">
        <div className="promo-track">
          <span>🎉 60% OFF pagando al contado o por transferencia</span>
          <span>✂️ Cortinas a medida — Roller · Verticales · Confección</span>
          <span>🚀 Cotizá en 2 minutos y comprá desde casa</span>
          <span>📦 Fabricación en 72hs · 7 días · 25-30 días según tipo</span>
          <span>🎉 60% OFF pagando al contado o por transferencia</span>
          <span>✂️ Cortinas a medida — Roller · Verticales · Confección</span>
          <span>🚀 Cotizá en 2 minutos y comprá desde casa</span>
          <span>📦 Fabricación en 72hs · 7 días · 25-30 días según tipo</span>
        </div>
      </div>

      {/* ── HERO SECTION with 3D Spline Curtain ── */}
      <section id="home" className="hero">
        <div className="hero-3d-card">
          {/* Static spotlight */}
          <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#d2c5a8" />
          {/* Cursor-following spotlight */}
          <CursorSpotlight size={350} />

          {/* Left: copy */}
          <div className="hero-left">
            <h1>
              Cortinas a Medida<br />en 3D
            </h1>
            <p>
              Explorá nuestra colección de cortinas con una experiencia interactiva en 3D.
              Diseños exclusivos para cada ambiente, fabricados con materiales de primera calidad.
            </p>
            <a href="#cotizador" className="hero-cta-btn">
              <i className="fas fa-calculator" /> Cotizá Ya
            </a>
          </div>

          {/* Right: 3D Spline scene */}
          <div className="hero-right">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products">
        <div className="container">
          <h2 className="section-title">Nuestros Productos</h2>
          <div className="products-grid">
            <div className="product-card">
              <div className="product-image">
                <img
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80"
                  alt="Cortinas Confección"
                />
              </div>
              <div className="product-content">
                <h3 className="product-title">Cortinas Confección</h3>
                <p>Diseños exclusivos y personalizados para cada ambiente. Amplia variedad de telas y estilos.</p>
              </div>
            </div>
            <div className="product-card">
              <div className="product-image">
                <img
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80"
                  alt="Cortinas Verticales"
                />
              </div>
              <div className="product-content">
                <h3 className="product-title">Cortinas Verticales</h3>
                <p>Solución práctica y elegante para grandes ventanales. Control de luz y privacidad.</p>
              </div>
            </div>
            <div className="product-card">
              <div className="product-image">
                <img
                  src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&q=80"
                  alt="Cortinas Roller"
                />
              </div>
              <div className="product-content">
                <h3 className="product-title">Cortinas Roller</h3>
                <p>Sistema práctico y minimalista para cualquier ambiente. Disponibles en distintas opacidades.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Banner */}
      <section className="services-banner">
        <div className="container">
          <h2 className="section-title">Nuestros Servicios</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon"><i className="fas fa-handshake" /></div>
              <h3 className="service-title">Atención Personalizada</h3>
              <p className="service-description">Asesoramiento profesional para las mejores opciones de tu hogar.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><i className="fas fa-tools" /></div>
              <h3 className="service-title">Instalación Profesional</h3>
              <p className="service-description">Equipo de instaladores expertos que garantizan un trabajo impecable.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><i className="fas fa-award" /></div>
              <h3 className="service-title">25 Años de Experiencia</h3>
              <p className="service-description">Más de dos décadas brindando soluciones de decoración de alta calidad.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location">
        <div className="container">
          <h2 className="section-title">Dónde Encontrarnos</h2>
          <div className="location-container">
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.6766883515!2d-64.50387492428868!3d-31.40001997500633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d66c3c0d2d34b%3A0x4c4e4f8f7b1a3f0c!2sAv.%20San%20Mart%C3%ADn%201680%2C%20Villa%20Carlos%20Paz%2C%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1698765432109!5m2!1ses!2sar"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="location-info">
              <h3>Información de Contacto</h3>
              <div className="info-item">
                <i className="fas fa-map-marker-alt" />
                <div>
                  <p><strong>Dirección:</strong></p>
                  <p>Av. San Martín 1680, Villa Carlos Paz</p>
                </div>
              </div>
              <div className="info-item">
                <i className="fas fa-phone" />
                <div>
                  <p><strong>Teléfono:</strong></p>
                  <p>+5493541222572</p>
                </div>
              </div>
              <div className="info-item">
                <i className="fas fa-envelope" />
                <div>
                  <p><strong>Email:</strong></p>
                  <p>lmasmdeco@hotmail.com</p>
                </div>
              </div>
              <div className="info-item">
                <i className="fas fa-clock" />
                <div>
                  <p><strong>Horarios:</strong></p>
                  <table className="schedule-table">
                    <tbody>
                      <tr><th>Día</th><th>Horario</th></tr>
                      <tr><td>Lunes a Viernes</td><td>9:30–13:30 / 17:00–19:30</td></tr>
                      <tr><td>Sábados</td><td>10:30–13:00</td></tr>
                      <tr><td>Domingos</td><td>Cerrado</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-logo">LMASM Decoración</div>
          <div className="footer-container">
            <div className="footer-column">
              <h3>LMASM Decoración</h3>
              <p>Especialistas en cortinas y decoración desde 2000.</p>
            </div>
            <div className="footer-column">
              <h3>Enlaces Rápidos</h3>
              <ul className="footer-links">
                <li><a href="#home">Inicio</a></li>
                <li><a href="#products">Productos</a></li>
                <li><a href="#location">Ubicación</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Síguenos</h3>
              <div className="social-icons">
                <a href="https://www.facebook.com/lmasm.decoracion.1" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook" />
                </a>
                <a href="https://www.instagram.com/lmasmdeco/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram" />
                </a>
                <a href="https://wa.me/5493541222572" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-whatsapp" />
                </a>
              </div>
            </div>
          </div>
          <div className="copyright">
            <p>&copy; 2025 LMASM Decoración. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
