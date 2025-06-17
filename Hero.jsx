import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import heroVideo from './Song-02.mp4'

const Hero = () => {
  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-end h-full pr-16">
        <div className="text-right text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 font-cinzel">
            Pose<span className="text-yellow-400">ಅಡ್ಡಾ</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            Capture moments. Create magic.
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-end">
            <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3">
              View Our Work
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-gray-900 hover:bg-yellow-600 hover:text-white px-8 py-3"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Showreel
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

