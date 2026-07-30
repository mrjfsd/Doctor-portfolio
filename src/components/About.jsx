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
                    alt="Dr. Praveen Kumar R Profile"
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
                <p className="text-lg font-bold">15+ Years</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-2 whitespace-nowrap">
              Dr. Praveen Kumar R <span className="inline-block animate-bounce">👋</span>
            </h2>
            <p className="text-sm font-semibold text-primary mb-6 uppercase tracking-wider">
              MBBS, MS (ENT) — Consultant ENT &amp; Head &amp; Neck Surgeon
            </p>
            <div className="space-y-4 text-gray-500 leading-relaxed mb-6">
              <p>
                Dr. R. Praveen Kumar is a highly skilled ENT specialist in Mysuru with focused expertise in otology, rhinology, laryngology, and voice disorders. Currently practicing at Manipal Hospital Mysore, he brings over 15 years of surgical excellence.
              </p>
              <p>
                His clinical background includes specialized training and exposure at premier institutes like Kidwai Memorial Institute of Oncology and the All India Institute of Speech &amp; Hearing (AIISH), Mysore.
              </p>
            </div>
            
            <div className="mb-8 space-y-3">
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-xs text-primary font-bold">✓</span>
                </div>
                <p className="text-sm text-gray-600">
                  <strong className="text-gray-900">Qualifications:</strong> MBBS (Shree Siddhartha Medical College, Tumkur) &amp; MS (ENT) (KIMS, Hubli).
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-xs text-primary font-bold">✓</span>
                </div>
                <p className="text-sm text-gray-600">
                  <strong className="text-gray-900">Diagnostic precision:</strong> Using state-of-the-art endoscopic evaluations.
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-xs text-primary font-bold">✓</span>
                </div>
                <p className="text-sm text-gray-600">
                  <strong className="text-gray-900">Patient-focused:</strong> Combining surgical excellence with clear, direct communication.
                </p>
              </div>
            </div>

            <a href="#contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3.5 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-primary/25">
              Book a Consultation <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
