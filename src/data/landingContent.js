export const features = [
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

export const steps = [
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

export const plans = [
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

export const faqs = [
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
