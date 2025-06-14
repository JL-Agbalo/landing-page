function Container({ children, className = "" }) {
  return (
    <div className={`mx-auto max-w-7xl px-5 sm:px-8 md:px-14 lg:px-5 ${className}`}>
      {children}
    </div>
  )
}

export default Container