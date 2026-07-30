import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    avatar: 'SJ',
    color: 'bg-red-400',
    rating: 4.8,
    country: '🇮🇳',
    role: 'Patient (Ear Surgery)',
    text: 'Dr. Praveen Kumar R has been instrumental in my recovery. His explanation of the tympanoplasty surgery and post-op care made me feel heard and safe from day one.',
  },
  {
    name: 'Michael Chen',
    avatar: 'MC',
    color: 'bg-blue-400',
    rating: 4.9,
    country: '🇮🇳',
    role: 'Patient (Sinusitis)',
    text: 'After years of struggling with nasal blockage, Dr. Praveen performed FESS. I can finally breathe easily. He is an exceptionally skilled rhinology surgeon.',
  },
  {
    name: 'Emma Williams',
    avatar: 'EW',
    color: 'bg-green-400',
    rating: 4.7,
    country: '🇮🇳',
    role: 'Patient (Voice Disorder)',
    text: 'The microlaryngeal surgery performed by Dr. Praveen for my vocal cord cyst was completely successful. My voice has fully recovered. Exceptional care!',
  },
  {
    name: 'James Rodriguez',
    avatar: 'JR',
    color: 'bg-yellow-400',
    rating: 4.9,
    country: '🇮🇳',
    role: 'Patient (General ENT)',
    text: 'Dr. Praveen creates a supportive environment. His diagnostic precision using nasal endoscopy is outstanding, and his treatment plans are direct and effective.',
  },
  {
    name: 'Lisa Thompson',
    avatar: 'LT',
    color: 'bg-purple-400',
    rating: 4.8,
    country: '🇮🇳',
    role: 'Patient (Ear Infection)',
    text: 'I was hesitant about clinical evaluations for my hearing issues, but Dr. Praveen explained the diagnostic process clearly and handled my treatment with extreme care.',
  },
  {
    name: 'David Kim',
    avatar: 'DK',
    color: 'bg-pink-400',
    rating: 4.6,
    country: '🇮🇳',
    role: 'Patient (Tonsillectomy)',
    text: 'Dr. Praveen understands patient concerns perfectly. His expertise and surgical execution at Manipal Hospital Mysore gave us complete peace of mind.',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-4 max-w-2xl mx-auto">
          What Patients Say About Dr. Praveen Kumar R
        </h2>
        <p className="text-gray-500 text-center mb-12 max-w-lg mx-auto">
          Hear from those who have experienced transformative care and compassionate support.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-bg-light rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 ${t.color} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                  {t.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{t.name}</h4>
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <span>{t.country}</span>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1.5 mb-3">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} fill={j < Math.floor(t.rating) ? 'currentColor' : 'none'} strokeWidth={j < Math.floor(t.rating) ? 0 : 1.5} />
                  ))}
                </div>
                <span className="text-sm font-semibold text-gray-700">{t.rating}</span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">{t.text}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-10">
          {[...Array(4)].map((_, i) => (
            <button key={i} className={`w-2.5 h-2.5 rounded-full transition-all ${i === 0 ? 'bg-primary w-8' : 'bg-gray-300 hover:bg-gray-400'}`} />
          ))}
        </div>
      </div>
    </section>
  )
}
