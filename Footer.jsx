import { useState } from 'react'
import { Instagram, Facebook, Twitter, Youtube, Mail, Phone, MapPin, Globe, Heart, Camera } from 'lucide-react'

const Footer = () => {
  const [language, setLanguage] = useState('en')

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'kn' : 'en')
  }

  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, href: "https://instagram.com/pose.adda", label: "Instagram" },
    { icon: <Facebook className="w-5 h-5" />, href: "https://facebook.com/poseadda", label: "Facebook" },
    { icon: <Youtube className="w-5 h-5" />, href: "https://youtube.com/poseadda", label: "YouTube" },
    { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com/poseadda", label: "Twitter" }
  ]

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" }
  ]

  const services = [
    "Drone Videography",
    "Candid Photography",
    "Cinematic Films",
    "LED Wall Setup",
    "Pre-Wedding Shoots",
    "Event Coverage"
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Camera className="w-8 h-8 text-yellow-400" />
              <h3 className="text-2xl font-bold">
                Pose<span className="text-yellow-400">ಅಡ್ಡಾ</span>
              </h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {language === 'en' 
                ? "Capturing moments, creating magic. We specialize in cinematic wedding photography and videography across Karnataka and South India."
                : "ಕ್ಷಣಗಳನ್ನು ಸೆರೆಹಿಡಿಯುವುದು, ಮ್ಯಾಜಿಕ್ ಸೃಷ್ಟಿಸುವುದು. ನಾವು ಕರ್ನಾಟಕ ಮತ್ತು ದಕ್ಷಿಣ ಭಾರತದಾದ್ಯಂತ ಸಿನಿಮಾಟಿಕ್ ವೆಡ್ಡಿಂಗ್ ಫೋಟೋಗ್ರಫಿ ಮತ್ತು ವಿಡಿಯೋಗ್ರಫಿಯಲ್ಲಿ ಪರಿಣತಿ ಹೊಂದಿದ್ದೇವೆ."
              }
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-yellow-600 p-3 rounded-full transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">
              {language === 'en' ? 'Quick Links' : 'ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು'}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-yellow-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">
              {language === 'en' ? 'Our Services' : 'ನಮ್ಮ ಸೇವೆಗಳು'}
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-300 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">
              {language === 'en' ? 'Contact Info' : 'ಸಂಪರ್ಕ ಮಾಹಿತಿ'}
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    Bangalore, Karnataka
                  </p>
                  <p className="text-gray-400 text-xs">
                    {language === 'en' ? 'Serving across South India' : 'ದಕ್ಷಿಣ ಭಾರತದಾದ್ಯಂತ ಸೇವೆ ಸಲ್ಲಿಸುತ್ತಿದ್ದೇವೆ'}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-400" />
                <p className="text-gray-300 text-sm">+91 9972363271</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-400" />
                <p className="text-gray-300 text-sm">hello@poseadda.com</p>
              </div>
            </div>

            {/* Language Toggle */}
            <div className="mt-6">
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm">
                  {language === 'en' ? 'ಕನ್ನಡ' : 'English'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © {currentYear} Poseಅಡ್ಡಾ. 
                {language === 'en' 
                  ? ' All rights reserved.' 
                  : ' ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.'
                }
              </p>
            </div>
            
            <div className="flex items-center space-x-1 text-gray-400 text-sm">
              <span>
                {language === 'en' ? 'Made with' : 'ಪ್ರೀತಿಯಿಂದ ಮಾಡಲಾಗಿದೆ'}
              </span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>
                {language === 'en' ? 'in Karnataka' : 'ಕರ್ನಾಟಕದಲ್ಲಿ'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

