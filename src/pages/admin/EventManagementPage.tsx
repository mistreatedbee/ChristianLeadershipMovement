import React from 'react';
import { Plus, Edit, Trash2, MapPin, Calendar, Users } from 'lucide-react';
import { Button } from '../../components/ui/Button';
export function EventManagementPage() {
  const events = [{
    id: 1,
    title: 'Leadership Conference 2024',
    date: '2024-10-15',
    time: '9:00 AM - 5:00 PM',
    location: 'Pretoria Conference Center',
    capacity: 200,
    registered: 145,
    status: 'Upcoming',
    isOnline: false
  }, {
    id: 2,
    title: 'Bible Study Workshop',
    date: '2024-11-05',
    time: '6:30 PM - 8:30 PM',
    location: 'Online via Zoom',
    capacity: 100,
    registered: 65,
    status: 'Upcoming',
    isOnline: true
  }, {
    id: 3,
    title: 'Youth Ministry Training',
    date: '2024-11-12',
    time: '10:00 AM - 3:00 PM',
    location: 'Cape Town Community Hall',
    capacity: 50,
    registered: 48,
    status: 'Almost Full',
    isOnline: false
  }];
  return <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-navy-ink mb-2">
            Event Management
          </h1>
          <p className="text-gray-600">Schedule and manage events</p>
        </div>
        <Button variant="primary">
          <Plus size={20} className="mr-2" />
          Create Event
        </Button>
      </div>
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-card shadow-soft">
          <p className="text-gray-600 text-sm mb-1">Total Events</p>
          <p className="text-2xl font-bold text-navy-ink">24</p>
        </div>
        <div className="bg-white p-4 rounded-card shadow-soft">
          <p className="text-gray-600 text-sm mb-1">Upcoming</p>
          <p className="text-2xl font-bold text-navy-ink">8</p>
        </div>
        <div className="bg-white p-4 rounded-card shadow-soft">
          <p className="text-gray-600 text-sm mb-1">Total Attendees</p>
          <p className="text-2xl font-bold text-navy-ink">2,345</p>
        </div>
        <div className="bg-white p-4 rounded-card shadow-soft">
          <p className="text-gray-600 text-sm mb-1">This Month</p>
          <p className="text-2xl font-bold text-navy-ink">3</p>
        </div>
      </div>
      {/* Events List */}
      <div className="space-y-4">
        {events.map(event => <div key={event.id} className="bg-white rounded-card shadow-soft p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-xl font-bold text-navy-ink">
                    {event.title}
                  </h3>
                  {event.isOnline && <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                      Online
                    </span>}
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                    {event.status}
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar size={16} className="mr-2" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin size={16} className="mr-2" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users size={16} className="mr-2" />
                    <span className="text-sm">
                      {event.registered} / {event.capacity} registered
                    </span>
                  </div>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div className={`h-full rounded-full ${event.registered / event.capacity * 100 >= 80 ? 'bg-red-500' : 'bg-green-500'}`} style={{
                width: `${event.registered / event.capacity * 100}%`
              }}></div>
                </div>
              </div>
              <div className="flex space-x-2 ml-4">
                <Button variant="outline" size="sm">
                  <Edit size={16} />
                </Button>
                <Button variant="outline" size="sm">
                  <Trash2 size={16} />
                </Button>
              </div>
            </div>
          </div>)}
      </div>
    </div>;
}