export default function CommentCard({ name, position, comment, imageSource }) {
  return (
    <div className='p-8 bg-[hsl(219,30%,18%)] '>
      <p className='mb-8 text-xl md:text-lg lg:text-2xl'>{comment}</p>

      <div className='flex gap-2 '>
        <div className='max-w-[40px] content-center aspect-square'>
          <img className='rounded-full' src={imageSource} alt="" />
        </div>

        <div>
          <p className=''>{name}</p>
          <p className='text-xs text-neutral-400'>{position}</p>
        </div>
      </div>
    </div>
  )
}