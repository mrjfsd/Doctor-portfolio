import { ThumbsUp } from 'lucide-react'

const timeline = [
  {
    period: '2020 - Present',
    title: 'Medical Officer',
    institution: 'Sylhet M. A. G. Osmani Medical College',
  },
  {
    period: '2015 - 2020',
    title: 'Physiologist',
    institution: 'Womens Medical College, Sylhet',
  },
  {
    period: '2011 - 2014',
    title: 'Head of Physiologist',
    institution: 'Jalalabad Ragib & Rabeya Medical, Sylhet',
  },
  {
    period: '2010 - Present',
    title: 'Physiologist',
    institution: 'Popular Diagnostic Center, Sylhet',
  },
]

export default function SkillsExperience() {
  return (
    <section className="py-16 sm:py-24 bg-secondary/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Skills & Experience
            </h2>
            <p className="text-gray-600 mb-8 max-w-md leading-relaxed">
              Over a decade of clinical experience in leading medical institutions. 
              Dedicated to providing exceptional physiological care and treatment.
            </p>
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 mx-auto lg:mx-0">
              <div className="w-full h-full bg-primary/10 rounded-full flex items-center justify-center">
                <div className="w-40 h-40 sm:w-48 sm:h-48 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full flex items-center justify-center">
                  <ThumbsUp size={48} className="text-primary" />
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-0">
            {timeline.map((item, index) => (
              <div key={index} className="relative pl-8 pb-8 last:pb-0 group">
                {index < timeline.length - 1 && (
                  <div className="absolute left-[7px] top-3 bottom-0 w-0.5 bg-primary/20 group-hover:bg-primary/40 transition-colors" />
                )}
                <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-primary bg-white group-hover:bg-primary transition-colors z-10" />
                <span className="text-sm font-bold text-primary mb-1 block">{item.period}</span>
                <h3 className="font-bold text-lg text-gray-900">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.institution}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
