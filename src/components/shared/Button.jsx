function Button({ children, className = "", onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-full outline-none cursor-pointer relative overflow-hidden border dark:bg-violet-600 border-transparent ${className}`}
    >
      {children}
    </button>
  )
}

export default Button