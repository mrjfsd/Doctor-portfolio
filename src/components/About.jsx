import { ArrowUpRight, Star, Users } from 'lucide-react'

export default function About() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex justify-center relative">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
              <div className="w-full h-full bg-bg-beige rounded-full flex items-center justify-center">
                <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden shadow-inner">
                  <img
                    src="/assests/Dr-profile.png"
                    alt="Dr. Adam Smith Profile"
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = '/assests/Dr-profile.jpg';
                    }}
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg px-4 py-3 animate-float">
                <p className="text-xs text-gray-400 mb-1">Trusted by Patient</p>
                <div className="flex items-center gap-1 text-yellow-400 mb-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {['bg-red-400', 'bg-blue-400', 'bg-green-400', 'bg-yellow-400'].map((c, i) => (
                      <div key={i} className={`w-6 h-6 ${c} rounded-full border-2 border-white`} />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-gray-700">200+</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary text-white rounded-2xl shadow-lg px-4 py-3 animate-float" style={{ animationDelay: '1.5s' }}>
                <p className="text-xs opacity-80">Experience</p>
                <p className="text-lg font-bold">10+ Years</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
              Dr. Adam Smith <span className="inline-block animate-bounce">👋</span>
            </h2>
            <div className="space-y-4 text-gray-500 leading-relaxed mb-8">
              <p>
                Dr. Adam Smith is a licensed physiologist with over a decade of experience 
                helping individuals navigate life's challenges. Specializing in cognitive 
                behavioral therapy and mindfulness-based approaches, he provides a safe, 
                judgment-free space for healing and growth.
              </p>
              <p>
                His approach combines evidence-based treatments with genuine compassion, 
                empowering patients to build resilience, develop coping strategies, and 
                achieve lasting mental wellness.
              </p>
            </div>
            <a href="#" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3.5 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-primary/25">
              Learn More <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
