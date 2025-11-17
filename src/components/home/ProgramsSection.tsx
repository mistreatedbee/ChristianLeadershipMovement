import React from 'react';
import { Button } from '../ui/Button';
export function ProgramsSection() {
  const programs = [{
    id: 1,
    title: 'Christian Leadership Movement',
    description: 'Our flagship program developing servant leaders with a biblical foundation and practical skills.',
    image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '/programs/clm'
  }, {
    id: 2,
    title: 'Bible School',
    description: 'In-depth biblical studies and theological training for ministry leaders and teachers.',
    image: 'https://images.unsplash.com/photo-1585858229735-cd08d8cb510d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '/programs/bible-school'
  }, {
    id: 3,
    title: 'Short Courses',
    description: 'Specialized training in specific leadership areas and biblical topics.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '/programs/short-courses'
  }];
  return <section className="py-16 bg-muted-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-ink mb-4">
            Our Programs
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Transformative educational experiences designed to equip and empower
            Christian leaders.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map(program => <div key={program.id} className="bg-white rounded-card overflow-hidden shadow-soft hover:shadow-lg transition-all">
              <div className="h-48 overflow-hidden">
                <img src={program.image} alt={program.title} className="w-full h-full object-cover transition-transform hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy-ink mb-2">
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <Button href={program.link} variant="primary">
                  Learn More
                </Button>
              </div>
            </div>)}
        </div>
        <div className="mt-12 text-center">
          <Button href="/programs" variant="secondary" size="lg">
            View All Programs
          </Button>
        </div>
      </div>
    </section>;
}