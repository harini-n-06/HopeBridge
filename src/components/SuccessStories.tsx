import { Testimonial } from '../types';
import { Star, Quote, Heart } from 'lucide-react';

export default function SuccessStories() {
  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Aisha Khatun',
      role: 'Sponsorship Beneficiary (Now pursuing B.Sc)',
      quote: 'Thanks to the HopeBridge Foundation, I was able to continue my education after high school. They funded my university admission fees and provided a laptop. Now, I am the first college student in my entire family!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=250&q=80'
    },
    {
      id: '2',
      name: 'David Mark',
      role: 'Ground Volunteer (Since 2021)',
      quote: "Volunteering with HopeBridge changed my perspective on grassroots service. The absolute transparency of fund utilization on the ground is what keeps me motivated. It is an honor to lead free healthcare camps in these remote blocks.",
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80'
    },
    {
      id: '3',
      name: 'Elena Rostova',
      role: 'Monthly Sustaining Donor',
      quote: 'I trust HopeBridge completely. Every month I receive detailed impact audit sheets detailing how my contributions were split across child books and tree saplings. Highly professional team doing incredible work.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80'
    }
  ];

  return (
    <section id="success-stories" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-blue-50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-emerald-50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-extrabold text-blue-600 uppercase tracking-widest">Stories of Hope</h2>
          <p className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Success Stories & Testimonials
          </p>
          <p className="mt-4 text-lg text-slate-600">
            Real testimonies from our beneficiaries, volunteers, and monthly donors. Hear what they have to say about our mutual mission.
          </p>
          <div className="h-1 w-20 bg-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Cards Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" id="testimonials-grid">
          {testimonials.map((test) => (
            <div
              key={test.id}
              className="group relative bg-slate-50/80 hover:bg-white border border-slate-200/60 p-8 rounded-3xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1 flex flex-col justify-between text-left"
              id={`testimonial-${test.id}`}
            >
              {/* Quote icon overlay */}
              <Quote className="absolute top-6 right-8 w-12 h-12 text-slate-200/80 group-hover:text-blue-100 transition-colors pointer-events-none" />

              <div>
                {/* Rating Stars */}
                <div className="flex gap-1 mb-5" id={`stars-${test.id}`}>
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote Narrative */}
                <p className="text-slate-700 text-sm leading-relaxed italic relative z-10">
                  "{test.quote}"
                </p>
              </div>

              {/* Profile Card Footer */}
              <div className="flex items-center gap-4 mt-8 pt-5 border-t border-slate-200/60">
                <img
                  src={test.image}
                  alt={test.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md ring-2 ring-blue-100"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-extrabold text-slate-950 text-sm">{test.name}</h4>
                  <p className="text-xs text-slate-500 font-semibold mt-0.5">{test.role}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Action micro-pancake */}
        <div className="mt-14 p-5 rounded-2xl bg-slate-50 border border-slate-100 max-w-xl mx-auto flex items-center justify-center gap-2">
          <Heart className="w-4 h-4 text-orange-500 fill-orange-500 animate-pulse" />
          <p className="text-xs text-slate-600 font-bold">
            Over 5,000 lives have been enriched since 2018. Your support keeps adding more stories of hope.
          </p>
        </div>

      </div>
    </section>
  );
}
