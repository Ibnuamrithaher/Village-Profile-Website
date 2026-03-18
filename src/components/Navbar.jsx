import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Beranda', path: '/' },
    { name: 'Profil Desa', path: '/about' },
    { name: 'Layanan', path: '/services' },
    { name: 'Kontak', path: '/contact' },
  ]

  const logoUrl = "https://petung-dongko.trenggalekkab.go.id/assets/files/logo/logo%201.jpg"

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'py-3 glass shadow-lg' : 'py-5 bg-transparent'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 no-underline group">
          <div className="w-10 h-10 rounded-lg overflow-hidden border border-white/20 shadow-md group-hover:scale-105 transition-transform">
            <img src={logoUrl} alt="Logo Desa Petung" className="w-full h-full object-cover" />
          </div>
          <span className="text-xl font-bold tracking-tight text-[hsl(var(--foreground))]">
            Desa<span className="gradient-text">Petung</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`relative text-sm font-semibold transition-colors hover:text-blue-500 ${
                location.pathname === link.path ? 'text-blue-500' : 'text-[hsl(var(--foreground))] opacity-80'
              }`}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div 
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500"
                />
              )}
            </Link>
          ))}
          <Link to="/contact" className="btn btn-primary text-sm px-5 py-2">Pusat Layanan</Link>
        </nav>

        {/* Mobile menu toggle */}
        <button 
          className="md:hidden p-2 text-[hsl(var(--foreground))]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass border-b border-white/10 p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`text-lg font-medium ${location.pathname === link.path ? 'text-blue-500' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="btn btn-primary w-full mt-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pusat Layanan
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
