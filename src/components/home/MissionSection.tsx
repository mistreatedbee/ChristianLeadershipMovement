import React from 'react';
import { BookOpen, Users, Award, Globe, Book, UserCheck, Shield } from 'lucide-react';

const objectives = [
  {
    title: 'Leadership Development and Training',
    icon: BookOpen,
    description: 'Establish programs, workshops, and schools that equip emerging and established leaders in biblical leadership, character formation, and ministry excellence.'
  },
  {
    title: 'Mentorship and Discipleship Networks',
    icon: Users,
    description: 'Build mentorship platforms connecting seasoned leaders with the next generation for spiritual, moral, and practical growth.'
  },
  {
    title: 'Community Transformation Initiatives',
    icon: Award,
    description: 'Launch community-based projects that address spiritual, social, and economic needs through the application of godly leadership principles.'
  },
  {
    title: 'Global Kingdom Partnerships',
    icon: Globe,
    description: 'Create alliances with local and international ministries, educational institutions, and mission organizations to advance the cause of Christ globally.'
  },
  {
    title: 'Leadership Resources and Publications',
    icon: Book,
    description: 'Develop books, manuals, devotionals, and online content that promote biblical leadership and inspire ongoing personal development.'
  },
  {
    title: 'Empowering the Next Generation',
    icon: UserCheck,
    description: 'Focus on youth and emerging leaders through leadership academies, conferences, and mentorship movements that raise future Kingdom influencers.'
  },
  {
    title: 'Advocacy for Godly Governance and Ethics',
    icon: Shield,
    description: 'Encourage ethical leadership and moral integrity in public life and governance, guided by biblical truth.'
  }
];

export function MissionSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Vision & Scripture */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-ink mb-4">
            Our Vision
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            To raise, equip, and empower Christ-centered leaders who transform their communities and nations through servant leadership, integrity, and the power of the Holy Spirit.
          </p>
          <p className="text-md italic text-gray-500 max-w-2xl mx-auto">
            <strong>Scriptural Foundation:</strong> 2 Timothy 2:2 – "And the things that you have heard from me among many witnesses, commit these to faithful men who will be able to teach others also."
          </p>
        </div>

        {/* Strategic Objectives */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {objectives.map((obj, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-card shadow-soft hover:shadow-lg transition-shadow"
            >
              <div className="bg-gold/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <obj.icon size={28} className="text-gold" />
              </div>
              <h3 className="text-xl font-bold text-navy-ink mb-3">{obj.title}</h3>
              <p className="text-gray-600">{obj.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
