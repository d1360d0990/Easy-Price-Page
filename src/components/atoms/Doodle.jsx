export default function Doodle({ className, children }) {
  return (
    <span className={`doodle ${className}`} aria-hidden="true">
      {children}
    </span>
  )
}
