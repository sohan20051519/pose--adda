import { Camera, Video, Plane, Zap, Heart, Users } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: <Plane className="w-8 h-8" />,
      title: "Drone Videography",
      description: "Breathtaking aerial shots that capture the grandeur of your celebration from unique perspectives.",
      features: ["4K Ultra HD", "Cinematic Angles", "Professional Pilots"]
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Candid Photography",
      description: "Natural, unposed moments that tell the authentic story of your special day.",
      features: ["Emotional Moments", "Natural Lighting", "Storytelling Style"]
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Cinematic Wedding Films",
      description: "Hollywood-style wedding films that transform your memories into cinematic masterpieces.",
      features: ["Professional Editing", "Color Grading", "Music Synchronization"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "LED Wall + Spot Mixing",
      description: "Dynamic visual displays and professional lighting to enhance your venue's ambiance.",
      features: ["Custom Graphics", "Live Streaming", "Professional Setup"]
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Pre-Wedding Shoots",
      description: "Romantic and creative pre-wedding photography sessions in stunning locations.",
      features: ["Location Scouting", "Costume Guidance", "Multiple Looks"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Event Coverage",
      description: "Complete coverage of all wedding events from engagement to reception.",
      features: ["Multi-Day Coverage", "Team Coordination", "Quick Delivery"]
    }
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-cinzel">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From intimate moments to grand celebrations, we offer comprehensive wedding photography 
            and videography services that capture every precious detail of your special day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 group hover:transform hover:scale-105 transition-transform"
            >
              <div className="text-yellow-600 mb-4 group-hover:text-yellow-700 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-gray-500 flex items-center">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Get Custom Quote
          </button>
        </div>
      </div>
    </section>
  )
}

export default Services

