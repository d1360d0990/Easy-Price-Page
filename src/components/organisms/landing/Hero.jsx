import Doodle from '../../atoms/Doodle'
import Logo from '../../atoms/Logo'
import Stat from '../../atoms/Stat'
import PhoneMockup from '../../molecules/PhoneMockup'

export default function Hero() {
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
          </div>
          <div className="hero__stats">
            <Stat value="500+" label="negocios activos" />
            <Stat value="2M+" label="escaneos al mes" />
            <Stat value="99.9%" label="uptime" />
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__logo-ring">
            <Logo alt="Easy Price logo" className="hero__logo" />
          </div>
          <PhoneMockup />
        </div>
      </div>
    </section>
  )
}
