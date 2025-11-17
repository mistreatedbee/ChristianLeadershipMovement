import React from 'react';
import { Users, FileText, BookOpen, Calendar, TrendingUp, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
export function AdminDashboardHome() {
  const stats = [{
    icon: Users,
    label: 'Total Users',
    value: '1,234',
    change: '+12%',
    color: 'bg-blue-500'
  }, {
    icon: FileText,
    label: 'Pending Applications',
    value: '45',
    change: '+5',
    color: 'bg-amber-500'
  }, {
    icon: BookOpen,
    label: 'Active Courses',
    value: '12',
    change: '+2',
    color: 'bg-green-500'
  }, {
    icon: Calendar,
    label: 'Upcoming Events',
    value: '8',
    change: '+3',
    color: 'bg-purple-500'
  }, {
    icon: Award,
    label: 'Certificates Issued',
    value: '567',
    change: '+89',
    color: 'bg-gold'
  }, {
    icon: TrendingUp,
    label: 'Completion Rate',
    value: '78%',
    change: '+4%',
    color: 'bg-pink-500'
  }];
  const recentApplications = [{
    id: 1,
    name: 'Sarah Johnson',
    program: 'Christian Leadership Movement',
    date: '2 hours ago',
    status: 'pending'
  }, {
    id: 2,
    name: 'Michael Chen',
    program: 'Bible School',
    date: '5 hours ago',
    status: 'pending'
  }, {
    id: 3,
    name: 'Emma Williams',
    program: 'Youth Ministry Training',
    date: '1 day ago',
    status: 'pending'
  }];
  const quickActions = [{
    title: 'Review Applications',
    description: '45 applications awaiting review',
    link: '/admin/applications',
    color: 'bg-amber-500'
  }, {
    title: 'Manage Users',
    description: 'Add or edit user accounts',
    link: '/admin/users',
    color: 'bg-blue-500'
  }, {
    title: 'Create Event',
    description: 'Schedule a new event',
    link: '/admin/events',
    color: 'bg-green-500'
  }, {
    title: 'Issue Certificates',
    description: 'Generate and send certificates',
    link: '/admin/certificates',
    color: 'bg-gold'
  }];
  return <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-navy-ink mb-2">
          Admin Dashboard
        </h1>
        <p className="text-gray-600">
          Overview of system activity and key metrics
        </p>
      </div>
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map(stat => <div key={stat.label} className="bg-white p-6 rounded-card shadow-soft">
            <div className="flex items-start justify-between mb-4">
              <div className={`${stat.color} w-12 h-12 rounded-card flex items-center justify-center`}>
                <stat.icon className="text-white" size={24} />
              </div>
              <span className="text-green-600 text-sm font-medium">
                {stat.change}
              </span>
            </div>
            <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
            <p className="text-2xl font-bold text-navy-ink">{stat.value}</p>
          </div>)}
      </div>
      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-card shadow-soft">
        <h2 className="text-xl font-bold text-navy-ink mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map(action => <Link key={action.title} to={action.link} className="p-4 border border-gray-200 rounded-card hover:shadow-md transition-shadow">
              <div className={`${action.color} w-10 h-10 rounded-card flex items-center justify-center mb-3`}>
                <span className="text-white text-xl">→</span>
              </div>
              <h3 className="font-bold text-navy-ink mb-1">{action.title}</h3>
              <p className="text-sm text-gray-600">{action.description}</p>
            </Link>)}
        </div>
      </div>
      {/* Recent Applications */}
      <div className="bg-white p-6 rounded-card shadow-soft">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-navy-ink">
            Recent Applications
          </h2>
          <Link to="/admin/applications" className="text-gold hover:underline text-sm font-medium">
            View All
          </Link>
        </div>
        <div className="space-y-3">
          {recentApplications.map(app => <div key={app.id} className="flex items-center justify-between p-4 bg-muted-gray rounded-card">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-white font-bold">
                  {app.name.charAt(0)}
                </div>
                <div>
                  <p className="font-medium text-navy-ink">{app.name}</p>
                  <p className="text-sm text-gray-600">{app.program}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">{app.date}</p>
                <span className="inline-block px-2 py-1 bg-amber-100 text-amber-800 text-xs rounded-full mt-1">
                  {app.status}
                </span>
              </div>
            </div>)}
        </div>
      </div>
    </div>;
}