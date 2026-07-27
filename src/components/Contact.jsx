import { ArrowUpRight } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-bg-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-12">
          Get in touch with me
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
          <div className="flex flex-wrap gap-6">
            <label className="flex items-center gap-2.5 cursor-pointer group">
              <input type="checkbox" className="w-5 h-5 rounded-md border-2 border-gray-300 text-primary focus:ring-primary/30 accent-primary" />
              <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors">I'm a Patient</span>
            </label>
            <label className="flex items-center gap-2.5 cursor-pointer group">
              <input type="checkbox" className="w-5 h-5 rounded-md border-2 border-gray-300 text-primary focus:ring-primary/30 accent-primary" />
              <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors">I'm a Life Sciences Researcher</span>
            </label>
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
