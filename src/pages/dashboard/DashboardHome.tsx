import React from 'react';
import { BookOpen, Calendar, Award, TrendingUp } from 'lucide-react';
import { Button } from '../../components/ui/Button';
export function DashboardHome() {
  const stats = [{
    icon: BookOpen,
    label: 'Active Courses',
    value: '3',
    color: 'bg-blue-500'
  }, {
    icon: Calendar,
    label: 'Upcoming Events',
    value: '2',
    color: 'bg-green-500'
  }, {
    icon: Award,
    label: 'Certificates',
    value: '5',
    color: 'bg-gold'
  }, {
    icon: TrendingUp,
    label: 'Progress',
    value: '75%',
    color: 'bg-purple-500'
  }];
  const recentActivity = [{
    id: 1,
    type: 'course',
    title: 'Completed Module 3 - Leadership Principles',
    date: '2 hours ago'
  }, {
    id: 2,
    type: 'event',
    title: 'Registered for Leadership Conference',
    date: '1 day ago'
  }, {
    id: 3,
    type: 'certificate',
    title: 'Earned Certificate - Bible Study Methods',
    date: '3 days ago'
  }];
  return <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-navy-ink mb-2">
          Welcome Back, John!
        </h1>
        <p className="text-gray-600">
          Here's what's happening with your learning journey
        </p>
      </div>
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map(stat => <div key={stat.label} className="bg-white p-6 rounded-card shadow-soft">
            <div className={`${stat.color} w-12 h-12 rounded-card flex items-center justify-center mb-4`}>
              <stat.icon className="text-white" size={24} />
            </div>
            <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
            <p className="text-2xl font-bold text-navy-ink">{stat.value}</p>
          </div>)}
      </div>
      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-card shadow-soft">
        <h2 className="text-xl font-bold text-navy-ink mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button href="/dashboard/courses" variant="primary" className="w-full">
            Continue Learning
          </Button>
          <Button href="/dashboard/events" variant="secondary" className="w-full">
            Browse Events
          </Button>
          <Button href="/dashboard/applications" variant="outline" className="w-full">
            View Applications
          </Button>
        </div>
      </div>
      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-card shadow-soft">
        <h2 className="text-xl font-bold text-navy-ink mb-4">
          Recent Activity
        </h2>
        <div className="space-y-4">
          {recentActivity.map(activity => <div key={activity.id} className="flex items-start space-x-4 p-4 bg-muted-gray rounded-card">
              <div className="w-2 h-2 bg-gold rounded-full mt-2"></div>
              <div className="flex-1">
                <p className="font-medium text-navy-ink">{activity.title}</p>
                <p className="text-sm text-gray-600">{activity.date}</p>
              </div>
            </div>)}
        </div>
      </div>
    </div>;
}