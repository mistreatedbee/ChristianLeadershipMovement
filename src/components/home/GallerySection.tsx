import React from 'react';

export function GallerySection() {
  const galleryImages = [
    { id: 1, src: '/assets/images/gallery1.jpeg', alt: 'CLM Program Event 1' },
    { id: 2, src: '/assets/images/gallery2.jpeg', alt: 'Bible School Workshop' },
    { id: 3, src: '/assets/images/gallery3.jpeg', alt: 'Leadership Training' },
    { id: 4, src: '/assets/images/gallery4.jpeg', alt: 'Community Outreach' },
    { id: 5, src: '/assets/images/gallery5.jpeg', alt: 'Youth Leadership Conference' },
    { id: 6, src: '/assets/images/gallery6.jpeg', alt: 'Ministry Event' },
  ];

  return (
    <section className="py-16 bg-brand-dark-blue text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Gallery
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            A glimpse into our programs, events, and leadership initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((img) => (
            <div
              key={img.id}
              className="overflow-hidden rounded-card border border-white/10 shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
