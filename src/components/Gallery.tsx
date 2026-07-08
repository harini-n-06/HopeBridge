import React, { useState, MouseEvent } from 'react';
import { GalleryItem } from '../types';
import { Eye, X, ArrowLeft, ArrowRight, Compass } from 'lucide-react';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'Education' | 'Medical' | 'Food' | 'Tree' | 'Volunteers'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories: Array<'all' | 'Education' | 'Medical' | 'Food' | 'Tree' | 'Volunteers'> = [
    'all',
    'Education',
    'Medical',
    'Food',
    'Tree',
    'Volunteers'
  ];

  const galleryItems: GalleryItem[] = [
    {
      id: 'g1',
      title: 'Free Distribution of Bookbags & Digital Kits',
      category: 'Education',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'g2',
      title: 'Rural Pediatric Diagnosis Checkup Camp',
      category: 'Medical',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'g3',
      title: 'Nutrition Pack Delivery for Underprivileged Families',
      category: 'Food',
      image: 'https://images.unsplash.com/photo-1594708767771-a7502209ff51?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'g4',
      title: 'Community Afforestation & Sapling Plantation Drive',
      category: 'Tree',
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c3a9?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'g5',
      title: 'Volunteer Leadership Summit on Slum Literacy',
      category: 'Volunteers',
      image: 'https://images.unsplash.com/photo-1559027615-cd44874e96e4?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'g6',
      title: 'Scholarship Distribution to Rural College Aspirants',
      category: 'Education',
      image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'g7',
      title: 'Volunteer Doctors Host Comprehensive Health Camp',
      category: 'Medical',
      image: 'https://images.unsplash.com/photo-1504813184591-015570107fd5?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'g8',
      title: 'Clean Water Purifier Plant Installation',
      category: 'Tree',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80'
    }
  ];

  // Filter items
  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  const openLightbox = (id: string) => {
    const idx = galleryItems.findIndex((item) => item.id === id);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = (e: MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === 0 ? galleryItems.length - 1 : lightboxIndex - 1);
    }
  };

  const handleNext = (e: MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === galleryItems.length - 1 ? 0 : lightboxIndex + 1);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-sm font-extrabold text-blue-600 uppercase tracking-widest">Visual Work</h2>
          <p className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Gallery & Ground Activities
          </p>
          <p className="mt-4 text-lg text-slate-600">
            A pictorial log of our on-the-ground volunteer campaigns. Click any image for a zoomable high-resolution viewer.
          </p>
          <div className="h-1 w-20 bg-emerald-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12" id="gallery-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 sm:px-6 py-2.5 rounded-full text-xs font-bold tracking-wide uppercase border transition-all ${
                activeCategory === cat
                  ? 'bg-blue-600 border-transparent text-white shadow-lg shadow-blue-500/10'
                  : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300'
              }`}
            >
              {cat === 'all' ? 'View All' : cat}
            </button>
          ))}
        </div>

        {/* Gallery Cards Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="gallery-items-grid">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item.id)}
              className="group relative rounded-3xl overflow-hidden shadow-md hover:shadow-xl border border-slate-100 bg-white cursor-pointer transition-all hover:-translate-y-1"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay layer */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white text-blue-600 flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <Eye className="w-6 h-6" />
                  </div>
                </div>
              </div>

              {/* Title Card Info */}
              <div className="p-5 text-left">
                <span className="text-[10px] font-extrabold text-blue-600 uppercase tracking-widest block mb-1">
                  {item.category}
                </span>
                <h4 className="text-sm font-bold text-slate-800 line-clamp-1 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Overlay Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/95 backdrop-blur-sm animate-fade-in text-white">
          <div className="relative max-w-4xl w-full flex flex-col items-center">
            
            {/* Close trigger */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white/80 hover:text-white transition-all z-25 hidden sm:block"
              aria-label="Previous image"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white/80 hover:text-white transition-all z-25 hidden sm:block"
              aria-label="Next image"
            >
              <ArrowRight className="w-6 h-6" />
            </button>

            {/* Large Image Frame */}
            <div className="bg-slate-900 border border-slate-800 p-2 rounded-3xl overflow-hidden max-h-[70vh] w-full flex justify-center items-center">
              <img
                src={galleryItems[lightboxIndex].image}
                alt={galleryItems[lightboxIndex].title}
                className="max-h-[68vh] max-w-full object-contain rounded-2xl"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Image Details Caption */}
            <div className="mt-4 text-center max-w-2xl space-y-1 px-4">
              <span className="text-xs font-extrabold text-emerald-400 uppercase tracking-widest block">
                {galleryItems[lightboxIndex].category} Division Campaign
              </span>
              <p className="text-base font-bold text-slate-100">{galleryItems[lightboxIndex].title}</p>
              <p className="text-xs text-slate-400 font-medium pt-1">
                Image {lightboxIndex + 1} of {galleryItems.length}
              </p>
            </div>

            {/* Small Mobile Nav helpers */}
            <div className="flex gap-4 mt-6 sm:hidden">
              <button
                onClick={handlePrev}
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white/80"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white/80"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
