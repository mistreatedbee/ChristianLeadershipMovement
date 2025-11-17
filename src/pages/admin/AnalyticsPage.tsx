import React from 'react';
import { TrendingUp, Users, BookOpen, Award, Calendar } from 'lucide-react';
export function AnalyticsPage() {
  const metrics = [{
    icon: Users,
    label: 'Total Users',
    value: '1,234',
    change: '+12.5%',
    trend: 'up',
    color: 'bg-blue-500'
  }, {
    icon: BookOpen,
    label: 'Course Enrollments',
    value: '456',
    change: '+8.3%',
    trend: 'up',
    color: 'bg-green-500'
  }, {
    icon: Award,
    label: 'Certificates Issued',
    value: '567',
    change: '+15.7%',
    trend: 'up',
    color: 'bg-gold'
  }, {
    icon: Calendar,
    label: 'Event Attendance',
    value: '2,345',
    change: '+5.2%',
    trend: 'up',
    color: 'bg-purple-500'
  }];
  const provinceData = [{
    province: 'Gauteng',
    users: 345,
    percentage: 28
  }, {
    province: 'Western Cape',
    users: 289,
    percentage: 23
  }, {
    province: 'KwaZulu-Natal',
    users: 234,
    percentage: 19
  }, {
    province: 'Eastern Cape',
    users: 156,
    percentage: 13
  }, {
    province: 'Other',
    users: 210,
    percentage: 17
  }];
  return <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-navy-ink mb-2">
          Analytics & Reporting
        </h1>
        <p className="text-gray-600">
          Track performance and engagement metrics
        </p>
      </div>
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map(metric => <div key={metric.label} className="bg-white p-6 rounded-card shadow-soft">
            <div className="flex items-start justify-between mb-4">
              <div className={`${metric.color} w-12 h-12 rounded-card flex items-center justify-center`}>
                <metric.icon className="text-white" size={24} />
              </div>
              <span className="text-green-600 text-sm font-medium flex items-center">
                <TrendingUp size={16} className="mr-1" />
                {metric.change}
              </span>
            </div>
            <p className="text-gray-600 text-sm mb-1">{metric.label}</p>
            <p className="text-2xl font-bold text-navy-ink">{metric.value}</p>
          </div>)}
      </div>
      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* User Growth Chart */}
        <div className="bg-white p-6 rounded-card shadow-soft">
          <h2 className="text-xl font-bold text-navy-ink mb-4">User Growth</h2>
          <div className="h-64 flex items-end justify-between space-x-2">
            {[40, 65, 55, 80, 70, 90, 85, 95, 100, 110, 105, 120].map((height, index) => <div key={index} className="flex-1 flex flex-col items-center">
                  <div className="w-full bg-gold rounded-t-card" style={{
              height: `${height}%`
            }}></div>
                  <span className="text-xs text-gray-600 mt-2">
                    {index + 1}
                  </span>
                </div>)}
          </div>
        </div>
        {/* Distribution by Province */}
        <div className="bg-white p-6 rounded-card shadow-soft">
          <h2 className="text-xl font-bold text-navy-ink mb-4">
            Users by Province
          </h2>
          <div className="space-y-4">
            {provinceData.map(data => <div key={data.province}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-600">{data.province}</span>
                  <span className="text-sm font-medium text-navy-ink">
                    {data.users}
                  </span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div className="h-full bg-gold rounded-full" style={{
                width: `${data.percentage}%`
              }}></div>
                </div>
              </div>)}
          </div>
        </div>
      </div>
      {/* Course Performance */}
      <div className="bg-white p-6 rounded-card shadow-soft">
        <h2 className="text-xl font-bold text-navy-ink mb-4">
          Course Performance
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted-gray">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-navy-ink">
                  Course
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-navy-ink">
                  Enrolled
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-navy-ink">
                  Completed
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-navy-ink">
                  Completion Rate
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-navy-ink">
                  Avg. Rating
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 text-navy-ink font-medium">
                  Christian Leadership Movement
                </td>
                <td className="px-6 py-4 text-gray-600">145</td>
                <td className="px-6 py-4 text-gray-600">112</td>
                <td className="px-6 py-4">
                  <span className="text-green-600 font-medium">77%</span>
                </td>
                <td className="px-6 py-4 text-gray-600">4.8/5.0</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-navy-ink font-medium">
                  Bible School
                </td>
                <td className="px-6 py-4 text-gray-600">89</td>
                <td className="px-6 py-4 text-gray-600">71</td>
                <td className="px-6 py-4">
                  <span className="text-green-600 font-medium">80%</span>
                </td>
                <td className="px-6 py-4 text-gray-600">4.9/5.0</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-navy-ink font-medium">
                  Youth Ministry Training
                </td>
                <td className="px-6 py-4 text-gray-600">56</td>
                <td className="px-6 py-4 text-gray-600">38</td>
                <td className="px-6 py-4">
                  <span className="text-amber-600 font-medium">68%</span>
                </td>
                <td className="px-6 py-4 text-gray-600">4.6/5.0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>;
}