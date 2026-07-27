import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import '../App.css'

const features = [
  {
    icon: '☁️',
    title: 'Plataforma en la nube',
    description:
      'Gestiona precios e inventario desde cualquier lugar. Sin instalaciones ni servidores propios.',
    accent: 'cyan',
  },
  {
    icon: '📷',
    title: 'Escaneo instantáneo',
    description:
      'Tus empleados y clientes escanean códigos de barras o QR y ven el precio actualizado al momento.',
    accent: 'pink',
  },
  {
    icon: '🏪',
    title: 'Multi-sucursal',
    description:
      'Administra varias tiendas desde un solo panel. Precios centralizados o personalizados por local.',
    accent: 'yellow',
  },
  {
    icon: '👥',
    title: 'Equipos y permisos',
    description:
      'Invita a tu equipo con roles definidos: administrador, cajero o consulta. Control total del acceso.',
    accent: 'green',
  },
  {
    icon: '📊',
    title: 'Reportes y analítica',
    description:
      'Consultas más frecuentes, productos escaneados y rendimiento por sucursal en tiempo real.',
    accent: 'cyan',
  },
  {
    icon: '🔗',
    title: 'API e integraciones',
    description:
      'Conecta Easy Price con tu ERP, POS o sistema de inventario existente mediante nuestra API REST.',
    accent: 'pink',
  },
]

const steps = [
  {
    number: '01',
    title: 'Crea tu cuenta',
    text: 'Regístrate gratis en minutos. Sin tarjeta de crédito para empezar.',
  },
  {
    number: '02',
    title: 'Carga tu inventario',
    text: 'Importa productos por CSV o sincroniza con tu sistema actual.',
  },
  {
    number: '03',
    title: 'Escanea y vende',
    text: 'Usa la app móvil para cargar productos y tus clientes empiecen a consultar precios al instante.',
  },
]

const plans = [
  {
    name: 'Starter',
    price: '0',
    period: '/mes',
    description: 'Perfecto para probar la plataforma en un solo local.',
    features: [
      '1 sucursal',
      'Hasta 500 productos',
      '2 usuarios',
      'Escaneo básico',
      'Soporte por email',
    ],
    cta: 'Comenzar gratis',
    ctaLink: '/registro',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '60',
    period: '/mes',
    description: 'Plan de pago para negocios en crecimiento con varias sucursales.',
    features: [
      'Hasta 5 sucursales',
      'Productos ilimitados',
      '10 usuarios',
      'Reportes avanzados',
      'App móvil incluida',
      'Soporte prioritario',
    ],
    cta: 'Contratar Pro',
    ctaLink: '/login',
    highlighted: true,
  },
  {
    name: 'Business',
    price: '89',
    period: '/mes',
    description: 'Plan de pago para cadenas y operaciones a escala.',
    features: [
      'Sucursales ilimitadas',
      'Usuarios ilimitados',
      'API e integraciones',
      'SLA garantizado',
      'Onboarding dedicado',
      'Personalización de marca',
    ],
    cta: 'Contactar ventas',
    ctaLink: '/login',
    highlighted: false,
  },
]

const faqs = [
  {
    q: '¿Necesito instalar algo en mi tienda?',
    a: 'No. Easy Price es 100% en la nube. Solo necesitas crear tu cuenta, cargar productos y usar la app desde cualquier dispositivo.',
  },
  {
    q: '¿Puedo cancelar en cualquier momento?',
    a: 'Sí. No hay contratos de permanencia. Puedes cambiar de plan o cancelar cuando quieras desde tu panel.',
  },
  {
    q: '¿Funciona con mi sistema de inventario actual?',
    a: 'En planes Pro y Business puedes importar por CSV o conectar vía API con la mayoría de ERPs y sistemas POS.',
  },
  {
    q: '¿Hay prueba gratuita?',
    a: 'El plan Starter incluye una versión de prueba de 15 días sin tarjeta de crédito. Los planes Pro y Business son de pago mensual.',
  },
]

function Doodle({ className, children }) {
  return <span className={`doodle ${className}`} aria-hidden="true">{children}</span>
}

function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="navbar__brand">
        <img src={logo} alt="Easy Price" className="navbar__logo" />
        <span className="navbar__name">Easy Price</span>
      </Link>
      <nav className="navbar__links">
        <a href="#features">Producto</a>
        <a href="#how-it-works">Cómo funciona</a>
        <a href="#pricing">Precios</a>
        <a href="#faq">FAQ</a>
      </nav>
      <div className="navbar__actions">
        <Link to="/login" className="btn btn--ghost btn--sm">
          Iniciar sesión
        </Link>
        <a href="#pricing" className="btn btn--primary btn--sm">
          Probar gratis
        </a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero__blobs" aria-hidden="true">
        <div className="blob blob--pink" />
        <div className="blob blob--green" />
        <div className="blob blob--cyan" />
      </div>

      <Doodle className="doodle--star doodle--1">★</Doodle>
      <Doodle className="doodle--plus doodle--2">+</Doodle>
      <Doodle className="doodle--star doodle--3">★</Doodle>
      <Doodle className="doodle--plus doodle--4">+</Doodle>
      <Doodle className="doodle--dot doodle--5">●</Doodle>
      <Doodle className="doodle--star doodle--6">★</Doodle>

      <div className="hero__content">
        <div className="hero__text">
          <h1 className="hero__title">
            Precios inteligentes
            <br />
            <span className="hero__title-accent">para tu negocio.</span>
          </h1>
          <p className="hero__subtitle">
            Easy Price es la plataforma en la nube que conecta tu inventario con
            escaneo de códigos de barras y QR. Gestiona precios, equipos y
            sucursales desde un solo lugar.
          </p>
          <div className="hero__actions">
            <a href="#pricing" className="btn btn--primary">
              Comenzar gratis
            </a>
            <a href="#how-it-works" className="btn btn--outline">
              Ver demo
            </a>
          </div>
          <div className="hero__stats">
            <div className="stat">
              <strong>500+</strong>
              <span>negocios activos</span>
            </div>
            <div className="stat">
              <strong>2M+</strong>
              <span>escaneos al mes</span>
            </div>
            <div className="stat">
              <strong>99.9%</strong>
              <span>uptime</span>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__logo-ring">
            <img src={logo} alt="Easy Price logo" className="hero__logo" />
          </div>
          <div className="phone-mockup">
            <div className="phone-mockup__screen">
              <div className="scan-frame">
                <div className="scan-line" />
                <div className="barcode-preview">
                  {[...Array(18)].map((_, i) => (
                    <div
                      key={i}
                      className="barcode-preview__bar"
                      style={{ width: `${2 + (i % 5) * 3}px` }}
                    />
                  ))}
                </div>
              </div>
              <div className="price-tag">
                <span className="price-tag__label">Precio en la nube</span>
                <span className="price-tag__value">$ 1.299</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TrustBar() {
  return (
    <section className="trust-bar" aria-label="Confianza">
      <p className="trust-bar__label">Empresas que confían en Easy Price</p>
      <div className="trust-bar__logos">
        <span>RetailMax</span>
        <span>SuperNova</span>
        <span>MiniMarket</span>
        <span>ShopFlow</span>
        <span>PriceHub</span>
      </div>
    </section>
  )
}

function Features() {
  return (
    <section id="features" className="features">
      <div className="section-header">
        <span className="section-label">Producto</span>
        <h2>Todo lo que tu negocio necesita en un solo lugar</h2>
        <p>
          Desde la gestión de inventario hasta el escaneo en tienda, Easy Price
          centraliza la operación de precios de tu comercio.
        </p>
      </div>
      <div className="features__grid features__grid--6">
        {features.map((feature) => (
          <article key={feature.title} className={`feature-card feature-card--${feature.accent}`}>
            <span className="feature-card__icon">{feature.icon}</span>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function HowItWorks() {
  return (
    <section id="how-it-works" className="how-it-works">
      <div className="section-header">
        <span className="section-label">Cómo funciona</span>
        <h2>Activa tu negocio en 3 pasos</h2>
        <p>Sin configuraciones complejas. Empieza hoy y escanea mañana.</p>
      </div>
      <div className="steps">
        {steps.map((step) => (
          <div key={step.number} className="step">
            <span className="step__number">{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Pricing() {
  return (
    <section id="pricing" className="pricing">
      <div className="section-header">
        <span className="section-label">Precios</span>
        <h2>Planes simples, sin sorpresas</h2>
        <p>Elige el plan que se adapte a tu negocio. Escala cuando lo necesites.</p>
      </div>
      <div className="pricing__grid">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={`pricing-card${plan.highlighted ? ' pricing-card--highlighted' : ''}`}
          >
            {plan.highlighted && <span className="pricing-card__badge">Más popular</span>}
            <h3 className="pricing-card__name">{plan.name}</h3>
            <div className="pricing-card__price">
              <span className="pricing-card__currency">U$S</span>
              <span className="pricing-card__amount">{plan.price}</span>
              <span className="pricing-card__period">{plan.period}</span>
            </div>
            <p className="pricing-card__desc">{plan.description}</p>
            <ul className="pricing-card__features">
              {plan.features.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link
              to={plan.ctaLink}
              className={`btn ${plan.highlighted ? 'btn--primary' : 'btn--outline'} pricing-card__cta`}
            >
              {plan.cta}
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}

function FAQ() {
  return (
    <section id="faq" className="faq">
      <div className="section-header">
        <span className="section-label">FAQ</span>
        <h2>Preguntas frecuentes</h2>
      </div>
      <div className="faq__list">
        {faqs.map((item) => (
          <details key={item.q} className="faq__item">
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section className="download">
      <div className="download__card">
        <img src={logo} alt="" className="download__logo" aria-hidden="true" />
        <h2>Empieza a gestionar precios de forma inteligente</h2>
        <p>
          Únete a cientos de comercios que ya simplificaron sus consultas de
          precio. Prueba gratis hoy — sin tarjeta de crédito.
        </p>
        <div className="download__actions">
          <Link to="/registro" className="btn btn--primary">
            Crear cuenta comercio
          </Link>
          <a href="#pricing" className="btn btn--outline">
            Comparar planes
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__brand">
        <img src={logo} alt="Easy Price" className="footer__logo" />
        <span>Easy Price</span>
      </div>
      <nav className="footer__links">
        <a href="#features">Producto</a>
        <a href="#pricing">Precios</a>
        <a href="#faq">FAQ</a>
        <Link to="/login">Iniciar sesión</Link>
      </nav>
      <p className="footer__copy">
        © {new Date().getFullYear()} Easy Price - Microtech Solutions. Todos los derechos reservados.
      </p>
    </footer>
  )
}

function Landing() {
  return (
    <div className="landing">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Features />
        <HowItWorks />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

export default Landing
