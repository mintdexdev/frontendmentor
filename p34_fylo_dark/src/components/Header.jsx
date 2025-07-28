import { Logo, Container } from './index.js'

function Header() {
  return (
    <header>
      <Container>
        <nav className='flex justify-between pt-10'>
          <div className='w-20'>
            <Logo />
          </div>
          <ul className='flex gap-4 sm:gap-10 text-neutral-300'>
            <li className='hover:text-gray-600'><a href="/features">Features</a></li>
            <li className='hover:text-gray-600'><a href="/team">Team</a></li>
            <li className='hover:text-gray-600'> <a href="/signin">Sign in</a></li>
          </ul>

        </nav>
      </Container>
    </header>
  )
}

export default Header