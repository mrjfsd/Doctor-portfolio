import { ArrowUpRight, ArrowRight, Heart, Users } from 'lucide-react'

const services = [
  {
    id: '01',
    title: 'Family Physiology',
    icon: Heart,
    description: 'Comprehensive family therapy and relationship counseling.',
    subLink: 'Explore',
  },
  {
    id: '02',
    title: 'Consultations',
    icon: Users,
    description: 'One-on-one sessions for personalized care.',
    subLink: 'Explore',
    highlighted: true,
  },
]

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="sticky top-28">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
                What Kind of Service I Provide
              </h2>
              <p className="text-gray-500 mb-8 max-w-md">
                Professional physiological services tailored to your needs. Evidence-based 
                approaches for lasting wellness.
              </p>
              <div className="relative w-48 h-48 mx-auto lg:mx-0">
                <svg className="absolute inset-0 w-full h-full animate-spin-slow" viewBox="0 0 200 200" style={{ animation: 'spin 20s linear infinite' }}>
                  <defs>
                    <path id="circlePath" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
                  </defs>
                  <text fontSize="9" fill="#7C3AED" fontWeight="600" letterSpacing="2">
                    <textPath href="#circlePath" startOffset="0%">
                      What Kind of Service I Provide
                    </textPath>
                    <textPath href="#circlePath" startOffset="50%">
                      + What Kind of Service I Provide
                    </textPath>
                  </text>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <a href="#" className="w-16 h-16 bg-primary hover:bg-primary-dark text-white rounded-full flex items-center justify-center font-semibold text-sm transition-all hover:shadow-lg hover:shadow-primary/25">
                    View All
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            {services.map((service) => (
              <div
                key={service.id}
                className={`group flex items-center gap-5 p-5 sm:p-6 rounded-2xl transition-all cursor-pointer ${
                  service.highlighted
                    ? 'bg-primary text-white shadow-lg shadow-primary/20'
                    : 'bg-white hover:bg-primary/5 border border-gray-100'
                }`}
              >
                <div className={`shrink-0 w-14 h-14 rounded-xl flex items-center justify-center transition-colors ${
                  service.highlighted ? 'bg-white/20' : 'bg-primary/10 group-hover:bg-primary/20'
                }`}>
                  <service.icon size={24} className={service.highlighted ? 'text-white' : 'text-primary'} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className={`text-xs font-semibold ${service.highlighted ? 'text-white/70' : 'text-gray-400'}`}>
                      {service.id}/
                    </span>
                    <h3 className={`font-bold text-lg ${service.highlighted ? 'text-white' : 'text-gray-900'}`}>
                      {service.title}
                    </h3>
                  </div>
                  <p className={`text-sm ${service.highlighted ? 'text-white/80' : 'text-gray-400'}`}>
                    {service.description}
                  </p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className={`text-sm font-semibold hidden sm:inline ${service.highlighted ? 'text-white/80' : 'text-gray-400'}`}>
                    {service.subLink}
                  </span>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    service.highlighted
                      ? 'bg-white/20 text-white'
                      : 'border-2 border-gray-200 text-gray-400 group-hover:border-primary group-hover:text-primary'
                  }`}>
                    {service.highlighted ? <ArrowRight size={16} /> : <ArrowUpRight size={16} />}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
