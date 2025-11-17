import React from 'react';
import { EventCard } from '../ui/EventCard';
import { Button } from '../ui/Button';
export function UpcomingEventsSection() {
  const events = [{
    id: 1,
    title: 'Leadership Conference 2023',
    date: 'Oct 15-17',
    time: '9:00 AM - 5:00 PM',
    location: 'Pretoria Conference Center',
    isOnline: false,
    capacity: 200,
    registered: 145,
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Join us for three days of inspiring sessions, workshops, and networking opportunities focused on Christian leadership.'
  }, {
    id: 2,
    title: 'Bible Study Workshop',
    date: 'Nov 5',
    time: '6:30 PM - 8:30 PM',
    location: 'Online via Zoom',
    isOnline: true,
    capacity: 100,
    registered: 65,
    image: 'https://images.unsplash.com/photo-1600618528240-fb9fc964b853?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Learn effective Bible study methods and how to lead small group discussions.'
  }, {
    id: 3,
    title: 'Youth Ministry Training',
    date: 'Nov 12',
    time: '10:00 AM - 3:00 PM',
    location: 'Cape Town Community Hall',
    isOnline: false,
    capacity: 50,
    registered: 48,
    image: 'https://images.unsplash.com/photo-1531547255897-f400dc1b7de2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: "Specialized training for youth leaders and volunteers to effectively minister to today's youth."
  }];
  return <section className="py-16 bg-muted-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-ink mb-4">
            Upcoming Events
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join us for these transformative gatherings designed to equip and
            inspire Christian leaders.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map(event => <EventCard key={event.id} {...event} />)}
        </div>
        <div className="mt-12 text-center">
          <Button href="/events" variant="secondary" size="lg">
            View All Events
          </Button>
        </div>
      </div>
    </section>;
}