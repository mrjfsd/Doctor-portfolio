import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'

const USER_TYPE_OPTIONS = [
  { id: 'patient',    label: "I'm a Patient" },
  { id: 'researcher', label: "I'm a Life Sciences Researcher" },
]

export default function Contact() {
  const [selectedOption, setSelectedOption] = useState('patient')

  return (
    <section id="contact" className="py-16 sm:py-24 bg-bg-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="font-extrabold text-gray-900 text-center mb-12 flex items-center justify-center gap-2"
          style={{
            fontFamily: "'Fredoka', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
            lineHeight: 1.3,
            whiteSpace: 'nowrap',
          }}
        >
          <span className="whitespace-nowrap">Get in touch</span>
          <span
            className="bg-[#FF5338] text-white px-3.5 py-1 rounded-xl shadow-sm whitespace-nowrap"
            style={{ display: 'inline-flex', alignItems: 'center', verticalAlign: 'middle' }}
          >
            with me
          </span>
        </h2>
        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div>
            <select className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-white text-gray-700 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all appearance-none">
              <option value="">What is your concern?</option>
              <option value="anxiety">Anxiety & Stress</option>
              <option value="depression">Depression</option>
              <option value="relationships">Relationship Issues</option>
              <option value="trauma">Trauma & Grief</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <input type="text" placeholder="Full name" className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-white text-gray-700 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" />
            <input type="email" placeholder="Email" className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-white text-gray-700 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" />
          </div>

          {/* Responsive Single-Line Radio Options */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3 w-full">
            {USER_TYPE_OPTIONS.map((option) => (
              <label
                key={option.id}
                className={`flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-2 sm:py-2.5 rounded-xl border cursor-pointer transition-all duration-200 bg-white select-none min-w-0 ${
                  selectedOption === option.id
                    ? 'border-slate-900 shadow-sm'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <input
                  type="radio"
                  name="userType"
                  value={option.id}
                  checked={selectedOption === option.id}
                  onChange={() => setSelectedOption(option.id)}
                  className="sr-only"
                />
                {/* Radio circle indicator — flex-shrink-0 so icon is never crushed */}
                <span
                  className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border flex-shrink-0 flex items-center justify-center transition-all ${
                    selectedOption === option.id
                      ? 'border-slate-900 bg-slate-900'
                      : 'border-slate-300 bg-white'
                  }`}
                >
                  {selectedOption === option.id && (
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  )}
                </span>
                {/* Label text — no wrapping, truncate if still too tight */}
                <span className="text-[11px] xs:text-xs sm:text-sm font-medium text-slate-800 whitespace-nowrap truncate">
                  {option.label}
                </span>
              </label>
            ))}
          </div>

          <div>
            <textarea rows={5} placeholder="Type here..." className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-white text-gray-700 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none" />
          </div>
          <button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white px-6 py-3.5 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-primary/25 inline-flex items-center justify-center gap-2">
            Book an Appointment <ArrowUpRight size={18} />
          </button>
        </form>
      </div>
    </section>
  )
}
