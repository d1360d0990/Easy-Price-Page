import defaultLogo from '../../assets/logo.png'

export default function Logo({ src = defaultLogo, alt = 'Easy Price', className, ...props }) {
  return <img src={src} alt={alt} className={className} {...props} />
}
