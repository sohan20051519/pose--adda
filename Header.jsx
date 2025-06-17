import { useState } from 'react'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-gray-800">
              Pose<span className="text-yellow-600">ಅಡ್ಡಾ</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-yellow-600 transition-colors">Home</a>
            <a href="#services" className="text-gray-700 hover:text-yellow-600 transition-colors">Services</a>
            <a href="#portfolio" className="text-gray-700 hover:text-yellow-600 transition-colors">Portfolio</a>
            <a href="#about" className="text-gray-700 hover:text-yellow-600 transition-colors">About</a>
            <a href="#contact" className="text-gray-700 hover:text-yellow-600 transition-colors">Contact</a>
          </nav>

          {/* Contact Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>Call</span>
            </Button>
            <Button size="sm" className="flex items-center space-x-2 bg-green-600 hover:bg-green-700">
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 mt-4">
              <a href="#home" className="text-gray-700 hover:text-yellow-600 transition-colors">Home</a>
              <a href="#services" className="text-gray-700 hover:text-yellow-600 transition-colors">Services</a>
              <a href="#portfolio" className="text-gray-700 hover:text-yellow-600 transition-colors">Portfolio</a>
              <a href="#about" className="text-gray-700 hover:text-yellow-600 transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-yellow-600 transition-colors">Contact</a>
            </nav>
            <div className="flex flex-col space-y-2 mt-4">
              <Button variant="outline" size="sm" className="flex items-center justify-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>Call</span>
              </Button>
              <Button size="sm" className="flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700">
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header

