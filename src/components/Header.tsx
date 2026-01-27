interface HeaderProps {
  mobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
}

export default function Header({ mobileMenuOpen, setMobileMenuOpen }: HeaderProps) {
  const closeMenu = () => setMobileMenuOpen(false)

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-lg z-50 border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center" aria-label="Main navigation">
        <div className="text-2xl font-bold tracking-wider">
          PRNT<span className="text-accent">FRM</span>
        </div>
        <button
          className="md:hidden text-gray-100 text-2xl focus:outline-none focus:ring-2 focus:ring-accent rounded"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
        <ul
          className={`${
            mobileMenuOpen ? 'flex' : 'hidden'
          } md:flex absolute md:static top-full left-0 right-0 md:flex-row flex-col bg-gray-800 md:bg-transparent md:gap-8 gap-4 p-4 md:p-0 border-b md:border-0 border-gray-700`}
          role="list"
        >
          <li>
            <a
              href="#about"
              className="text-gray-400 hover:text-accent transition-colors font-medium"
              onClick={closeMenu}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#products"
              className="text-gray-400 hover:text-accent transition-colors font-medium"
              onClick={closeMenu}
            >
              Products
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-gray-400 hover:text-accent transition-colors font-medium"
              onClick={closeMenu}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

