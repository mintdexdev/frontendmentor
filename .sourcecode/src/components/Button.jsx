const OpenButton = ({ children, ...props }) => (
  <button
    className='opacity-0 group-hover:opacity-100 py-2 px-5 rounded-full text-[1.25rem] bg-black/40 border border-white/40 backdrop-blur-xs shadow-lg shadow-black/60 duration-300 ease-out   hover:bg-neutral-900 hover:shadow-md hover:[font-variation-settings:"GRAD"_150] active:scale-95 active:[font-variation-settings:"GRAD"_-150] '
    {...props}
    type="button"
  >
    {children}
  </button>
)
export default OpenButton