import React, { useState } from 'react';
import { Plus, Edit, Trash2, Users, Clock, BookOpen } from 'lucide-react';
import { Button } from '../../components/ui/Button';
export function CourseManagementPage() {
  const courses = [{
    id: 1,
    title: 'Christian Leadership Movement',
    description: 'Comprehensive leadership training program',
    duration: '12 weeks',
    enrolled: 145,
    capacity: 200,
    status: 'Active',
    startDate: '2024-04-01'
  }, {
    id: 2,
    title: 'Bible School',
    description: 'In-depth biblical studies and theology',
    duration: '24 weeks',
    enrolled: 89,
    capacity: 100,
    status: 'Active',
    startDate: '2024-03-15'
  }, {
    id: 3,
    title: 'Youth Ministry Training',
    description: 'Specialized training for youth leaders',
    duration: '8 weeks',
    enrolled: 56,
    capacity: 75,
    status: 'Upcoming',
    startDate: '2024-05-01'
  }];
  return <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-navy-ink mb-2">
            Course Management
          </h1>
          <p className="text-gray-600">
            Create and manage educational programs
          </p>
        </div>
        <Button variant="primary">
          <Plus size={20} className="mr-2" />
          Create Course
        </Button>
      </div>
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-card shadow-soft">
          <div className="flex items-center justify-between mb-2">
            <BookOpen className="text-blue-500" size={32} />
          </div>
          <p className="text-gray-600 text-sm">Total Courses</p>
          <p className="text-2xl font-bold text-navy-ink">12</p>
        </div>
        <div className="bg-white p-6 rounded-card shadow-soft">
          <div className="flex items-center justify-between mb-2">
            <Users className="text-green-500" size={32} />
          </div>
          <p className="text-gray-600 text-sm">Total Students</p>
          <p className="text-2xl font-bold text-navy-ink">1,234</p>
        </div>
        <div className="bg-white p-6 rounded-card shadow-soft">
          <div className="flex items-center justify-between mb-2">
            <Clock className="text-amber-500" size={32} />
          </div>
          <p className="text-gray-600 text-sm">Active Courses</p>
          <p className="text-2xl font-bold text-navy-ink">8</p>
        </div>
      </div>
      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map(course => <div key={course.id} className="bg-white rounded-card shadow-soft overflow-hidden">
            <div className="h-32 bg-gradient-to-r from-brand-dark-blue to-navy-ink"></div>
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-bold text-navy-ink">
                  {course.title}
                </h3>
                <span className={`px-2 py-1 text-xs rounded-full ${course.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                  {course.status}
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-4">{course.description}</p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <Clock size={16} className="mr-2" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Users size={16} className="mr-2" />
                  <span>
                    {course.enrolled} / {course.capacity} students
                  </span>
                </div>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full mb-4">
                <div className="h-full bg-gold rounded-full" style={{
              width: `${course.enrolled / course.capacity * 100}%`
            }}></div>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Edit size={16} className="mr-1" />
                  Edit
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Trash2 size={16} className="mr-1" />
                  Delete
                </Button>
              </div>
            </div>
          </div>)}
      </div>
    </div>;
}