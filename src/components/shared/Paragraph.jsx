function Paragraph({ children, className = "" }) {
  return (
    <p className={`text-heading-3 md:text-lg ${className}`}>
      {children}
    </p>
  )
}

export default Paragraph