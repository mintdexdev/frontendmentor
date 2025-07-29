export default function Container({ children }) {
  return (
    <div className='max-w-[1920px] mx-auto px-[clamp(24px,20.3077px+1.0256vw,40px)]'>{children}</div>
  )
}