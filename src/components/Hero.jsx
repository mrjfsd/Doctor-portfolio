import { ArrowUpRight, Phone } from 'lucide-react'
import Aurora from './Aurora'

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 overflow-hidden bg-gradient-to-b from-purple-50/40 to-white">
      <div className="absolute inset-0 pointer-events-none">
        <Aurora
          colorStops={["#cae2c7", "#eecdcd", "#cac5e2"]}
          blend={0.5}
          amplitude={1.0}
          speed={1.1}
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Welcome to <span className="bg-white/60 text-primary-dark px-2 py-0.5 rounded-md">Dr. Adam Smith</span> Physiologist
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Your Path to{' '}
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                Mental Wellness
              </span>{' '}
              Starts Here
            </h1>
            <p className="text-lg text-gray-500 mb-8 max-w-lg leading-relaxed">
              Professional support for stress, anxiety, grief, and life transitions.
              Evidence-based care tailored to your unique journey.
            </p>
            <div className="flex flex-wrap gap-4 ml-4 sm:ml-6 lg:ml-0">
              <a href="#contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3.5 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-primary/25">
                Book an Appointment <ArrowUpRight size={18} />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 border-2 border-gray-200 hover:border-primary text-gray-700 hover:text-primary px-6 py-3.5 rounded-full font-semibold transition-all">
                <Phone size={18} /> Schedule a Call
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            {/* Doctor Image Container */}
            <div className="relative overflow-visible flex items-center justify-start w-full max-w-[420px] sm:max-w-[520px] md:max-w-[600px] lg:max-w-[680px] mr-auto -ml-[60px] lg:-ml-[40px] -mb-12 lg:mb-0 transition-all duration-300">

              {/* Stacked Background Typography — Desktop only */}
              <div className="hidden lg:block absolute left-[60%] lg:left-[68%] -top-[10%] z-0 flex flex-col items-start leading-[0.82] select-none pointer-events-none whitespace-nowrap antialiased">

                {/* Top Line: Dr. — solid, dark, high-contrast */}
                <span
                  className="text-6xl sm:text-7xl lg:text-8xl font-black text-gray-900 tracking-tighter drop-shadow-[0_12px_24px_rgba(0,0,0,0.25)]"
                  style={{
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale',
                  }}
                >
                  Dr.
                </span>

                {/* Bottom Line: PRAVEEN — gradient fade dark → light */}
                <span
                  className="text-3xl sm:text-4xl lg:text-5xl font-black italic uppercase mt-1 pl-[10px] tracking-widest bg-gradient-to-b from-[#6C5CE7] via-[#818CF8] to-[#C084FC]/20 bg-clip-text text-transparent drop-shadow-[0_8px_20px_rgba(108,92,231,0.35)]"
                  style={{
                    fontFamily: "'Dosis', sans-serif",
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale',
                  }}
                >
                  PRAVEEN
                </span>
              </div>

              {/* Doctor image sits over the text with shadow cast onto it */}
              <img
                src="/assests/dr-praveen.png"
                alt="Dr. Praveen"
                className="relative z-10 w-full h-auto object-contain scale-125 origin-bottom drop-shadow-[15px_10px_25px_rgba(0,0,0,0.18)] pointer-events-none select-none transform-gpu"
                style={{
                  imageRendering: 'high-quality',
                  WebkitBackfaceVisibility: 'hidden',
                  backfaceVisibility: 'hidden',
                  transform: 'translateZ(0)',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}