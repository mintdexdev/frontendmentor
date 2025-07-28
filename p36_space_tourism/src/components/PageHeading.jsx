export default function PageHeading({ textNumber, textHeading }) {
  return (
    <h1 className='text-preset-5 text-center'>
      <span className='mr-4 font-bold  text-neutral-500'>{textNumber}</span>
      {textHeading}
    </h1>
  )
}