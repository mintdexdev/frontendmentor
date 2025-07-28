import { useSelector } from 'react-redux'

export default function BackgroundImage({ backgroundImageList }) {
  const currentViewport = useSelector(state => state.screenSlice.viewportSize)

  return (
    <div className='w-screen h-screen fixed z-[-999]'>
      {backgroundImageList.filter(item => item.atViewport === currentViewport).map(item => (
        <img
          className='w-full h-full object-cover'
          key={item.atViewport}
          src={item.imageSource}
          alt=""
          aria-hidden="true"
        />
      ))}
    </div>
  )
}