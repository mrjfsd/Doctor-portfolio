import { ArrowUpRight, Phone } from 'lucide-react'
import Aurora from './Aurora'

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 overflow-hidden lg:bg-gradient-to-b lg:from-purple-50/40 lg:to-white" style={{ isolation: 'isolate' }}>
      {/* Mobile Background with Live-Editable CSS Variables */}
      <div
        id="mobile-bg-container"
        className="block lg:hidden absolute inset-0 -z-10 pointer-events-none overflow-hidden select-none"
        style={{
          '--blue-wash-opacity': 0.4,
          '--grid-opacity': 0.1,
          background: 'linear-gradient(rgb(241 239 243) 0%, rgb(249 249 249 / 40%) 50%, rgb(232 232 245) 100%)',
        }}
      >
        {/* SVG Grid Overlay — opacity controlled by --grid-opacity CSS variable */}
        <svg
          className="absolute inset-0 w-full h-full stroke-indigo-600"
          style={{ opacity: 'var(--grid-opacity)' }}
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <pattern id="mobile-hero-grid-subtle" width="28" height="28" patternUnits="userSpaceOnUse">
              <path d="M 28 0 L 0 0 0 28" fill="none" strokeWidth="1.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#mobile-hero-grid-subtle)" />
        </svg>

        {/* Seamless Bottom Fade-Out — blends grid into the next section */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, rgba(225,225,241,0) 0%, #ffffff 100%)',
          }}
        />
      </div>

      {/* Ambient Aurora background — Desktop only */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
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
            <div className="flex items-center gap-1.5 bg-primary/10 text-primary text-[13px] sm:text-sm font-semibold px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-full mb-6 w-fit whitespace-nowrap overflow-hidden">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full animate-pulse flex-shrink-0" />
              <span>Welcome to</span>
              <span className="bg-white/60 text-primary-dark px-1.5 sm:px-2 py-0.5 rounded-md font-bold flex-shrink-0">Dr. Praveen Kumar R</span>
              <span>ENT Surgeon</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Expert Care in{' '}
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                ENT, Voice Disorders
              </span>{' '}
              &amp; Head &amp; Neck Surgery
            </h1>
            <p className="text-lg text-gray-500 mb-5 max-w-lg leading-relaxed">
              Delivering surgical precision, advanced endoscopic evaluation, and compassionate patient care in Mysuru with over 15 years of experience.
            </p>
            {/* Hero Action Buttons Container */}
            <div className="flex flex-wrap gap-3 mt-4 sm:mt-5 lg:ml-0">

              {/* Primary CTA Button */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3.5 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                Book an Appointment <ArrowUpRight size={18} />
              </a>

              {/* Translucent Glass Secondary CTA Button */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold transition-all duration-300 bg-white/45 backdrop-blur-md border border-white/70 text-slate-800 hover:bg-white/60 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  boxShadow: 'inset 0 1px 1.5px 0 rgba(255,255,255,0.8), inset 0 -1px 1.5px 0 rgba(0,0,0,0.04), 0 8px 20px -4px rgba(79,70,229,0.06)',
                }}
              >
                <Phone size={18} className="text-indigo-600" /> Book a Discovery Call
              </a>

            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            {/* Doctor Image Container */}
            <div className="relative overflow-visible flex items-center justify-start w-full max-w-[420px] sm:max-w-[520px] md:max-w-[600px] lg:max-w-[680px] mr-auto -ml-[60px] lg:-ml-[40px] -mb-12 lg:mb-0 transition-all duration-300">

              {/* Stacked Background Typography (Dr. / PRAVEEN) with Gradient Fade & Crisp Shadows */}
              <div className="absolute left-[60%] lg:left-[68%] -top-[10%] z-0 flex flex-col items-start leading-[0.82] select-none pointer-events-none whitespace-nowrap antialiased">

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