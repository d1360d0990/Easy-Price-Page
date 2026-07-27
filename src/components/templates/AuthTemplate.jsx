import Logo from '../atoms/Logo'
import BackLink from '../molecules/BackLink'

export default function AuthTemplate({ children, pageClass = '', contentClass = '', logoClass = '' }) {
  return (
    <div className={`login-page ${pageClass}`.trim()}>
      <BackLink />
      <div className={`login-page__content ${contentClass}`.trim()}>
        <Logo className={`login-page__logo ${logoClass}`.trim()} />
        {children}
      </div>
    </div>
  )
}
