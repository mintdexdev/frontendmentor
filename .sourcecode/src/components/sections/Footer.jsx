import { Container, LiveClock } from "../index.js"

const socialList = [
  { name: 'Github', link: 'https://github.com/mintdexdev' },
  { name: 'X', link: 'https://x.com/mintdexdev' },
  { name: 'Linkedin', link: 'https://www.linkedin.com/in/mintdexdev/' },
  // { name: 'Instagram', link: '' },
  // { name: 'Youtube', link: '' },
]

const Footer = () => {
  return (
    <footer className='bg-black'>
      <Container>

        <div className="py-10 flex flex-col gap-10    sm:gap-0 sm:flex-row sm:justify-around">
          <ul>
            <p className="text-[2rem]">Menu</p>
            <hr className="mb-5" />
            <li className="text-[1.25rem] duration-300 hover:brightness-50 active:scale-95">
              <a href="#featured-projects">Featured Projects</a>
            </li>
            <li className="text-[1.25rem] duration-300 hover:brightness-50 active:scale-95">
              <a href="#all-projects">All Projects</a>
            </li>
          </ul>
          <ul>
            <p className="text-[2rem]">Social</p>
            <hr className="mb-5" />
            {socialList.map(item => (
              <li
                className="text-[1.25rem] duration-300 hover:brightness-50 active:scale-95"
                key={item.name}
              >
                <a href={item.link} target="_blank">
                  <div className="flex items-center gap-2">
                    <p className="inline-block">{item.name}</p>
                    <div className="w-fit h-fit inline-block">
                      <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 640 640"> <path fill="#ffffff" d="M354.4 83.8C359.4 71.8 371.1 64 384 64L544 64C561.7 64 576 78.3 576 96L576 256C576 268.9 568.2 280.6 556.2 285.6C544.2 290.6 530.5 287.8 521.3 278.7L464 221.3L310.6 374.6C298.1 387.1 277.8 387.1 265.3 374.6C252.8 362.1 252.8 341.8 265.3 329.3L418.7 176L361.4 118.6C352.2 109.4 349.5 95.7 354.5 83.7zM64 240C64 195.8 99.8 160 144 160L224 160C241.7 160 256 174.3 256 192C256 209.7 241.7 224 224 224L144 224C135.2 224 128 231.2 128 240L128 496C128 504.8 135.2 512 144 512L400 512C408.8 512 416 504.8 416 496L416 416C416 398.3 430.3 384 448 384C465.7 384 480 398.3 480 416L480 496C480 540.2 444.2 576 400 576L144 576C99.8 576 64 540.2 64 496L64 240z" /></svg>
                    </div>
                  </div>
                </a>

              </li>
            ))}
          </ul>
        </div>

        <LiveClock />


        <div className='w-full pt-10 flex items-end justify-center overflow-clip    md:pt-[10vh]'>
          <p className='text-[clamp(2.5rem,-0.625rem+15vw,18rem)] font-bold leading-[0.69]'>MINTDEXDEV</p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer