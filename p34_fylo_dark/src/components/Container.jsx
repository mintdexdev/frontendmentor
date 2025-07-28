export default function Container({ children }) {
  return (
    <div className='w-full max-w-[1920px] mx-auto px-[clamp(1.5rem,5vw,5rem)]'>
      {children}
    </div>
  )
}