import { useState } from 'react'
import { ChevronLeft, ChevronRight, Play, Eye } from 'lucide-react'
import droneShot1 from './1000001842.jpg'
import droneShot2 from './1000001843.png'
import candidShot1 from './1000001844.png'
import candidShot2 from './alif-ngoylung-jg-6ARMiaPM-unsplash.jpg'
import candidShot3 from './1000001842.jpg'
import ledWall1 from './1000001843.png'
import ledWall2 from './1000001844.png'

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const portfolioItems = [
    {
      id: 1,
      image: droneShot1,
      category: 'drone',
      title: 'Royal Wedding Aerial View',
      description: 'Stunning aerial coverage of a grand Indian wedding celebration'
    },
    {
      id: 2,
      image: candidShot1,
      category: 'candid',
      title: 'Sacred Moments',
      description: 'Capturing the emotional depth of traditional ceremonies'
    },
    {
      id: 3,
      image: ledWall1,
      category: 'led',
      title: 'LED Wall Spectacle',
      description: 'Dynamic visual displays enhancing the wedding ambiance'
    },
    {
      id: 4,
      image: droneShot2,
      category: 'drone',
      title: 'Cinematic Wedding Film',
      description: 'Professional drone cinematography for wedding films'
    },
    {
      id: 5,
      image: candidShot2,
      category: 'candid',
      title: 'Joyful Celebrations',
      description: 'Natural moments of happiness and celebration'
    },
    {
      id: 6,
      image: candidShot3,
      category: 'candid',
      title: 'Intimate Portraits',
      description: 'Beautiful couple portraits with emotional depth'
    },
    {
      id: 7,
      image: ledWall2,
      category: 'led',
      title: 'Wedding Reception Setup',
      description: 'Professional LED wall setup for grand receptions'
    }
  ]

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'drone', name: 'Drone Shots' },
    { id: 'candid', name: 'Candid Photography' },
    { id: 'led', name: 'LED Wall Setup' }
  ]

  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredItems.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length)
  }

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-cinzel">
            Our Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of stunning wedding photography and videography. 
            Each image tells a unique story of love, tradition, and celebration.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id)
                setCurrentImageIndex(0)
              }}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeCategory === category.id
                  ? 'bg-yellow-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-yellow-100 shadow-md'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Featured Image Carousel */}
        <div className="relative mb-12 max-w-4xl mx-auto">
          <div className="relative h-96 md:h-[500px] rounded-xl overflow-hidden shadow-2xl">
            <img
              src={filteredItems[currentImageIndex]?.image}
              alt={filteredItems[currentImageIndex]?.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold mb-2">
                {filteredItems[currentImageIndex]?.title}
              </h3>
              <p className="text-gray-200">
                {filteredItems[currentImageIndex]?.description}
              </p>
            </div>
            <button className="absolute top-6 right-6 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors">
              <Play className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 max-w-6xl mx-auto">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setCurrentImageIndex(index)}
              className={`relative h-24 md:h-32 rounded-lg overflow-hidden cursor-pointer transition-all ${
                index === currentImageIndex
                  ? 'ring-4 ring-yellow-400 shadow-lg'
                  : 'hover:shadow-md hover:scale-105'
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors"></div>
              {index === currentImageIndex && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-white" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            View Full Gallery
          </button>
        </div>
      </div>
    </section>
  )
}

export default Portfolio

