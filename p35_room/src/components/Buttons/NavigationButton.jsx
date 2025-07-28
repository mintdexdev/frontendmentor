export default function NavigationButton({ children, className = '', ...props }) {
  return (
    <button
      className={`p-[clamp(1rem,4vw,2rem)] bg-black hover:bg-neutral-800 ${className}`}
      {...props}
      type='button'
    >
      {children}
    </button >
  )
}