import { Container, Logo } from './'
import { iconHamburger } from '../assets'

function Header({ currentDevice }) {
  const navList = ["About", "Carrers", "Events", "Products", "Support"];
  return (
    <header className='absolute top-0 left-0 right-0 z-10'>
      <Container>
        <nav className='flex justify-between py-10'>
          <div>
            < Logo />
          </div>
          {currentDevice === 'desktop' ?
            <ul className='flex gap-8'>
              {navList.map(item => (
                <li className='text-white 2xl:text-xl hover:text-neutral-400 duration-200'
                  key={item}
                >
                  <a href="#all-creations">{item}</a>
                </li>
              ))}
            </ul> :
            <img src={iconHamburger} alt="" />
          }
        </nav>
      </Container>
    </header>
  )
}

export default Header