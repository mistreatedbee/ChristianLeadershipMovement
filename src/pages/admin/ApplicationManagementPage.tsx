import React, { useState } from 'react';
import { Search, Filter, CheckCircle, XCircle, Eye, Clock } from 'lucide-react';
import { Button } from '../../components/ui/Button';
export function ApplicationManagementPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const applications = [{
    id: 1,
    applicantName: 'Sarah Johnson',
    email: 'sarah.j@example.com',
    program: 'Christian Leadership Movement',
    submittedDate: '2024-03-15',
    status: 'pending',
    priority: 'high'
  }, {
    id: 2,
    applicantName: 'Michael Chen',
    email: 'michael.c@example.com',
    program: 'Bible School',
    submittedDate: '2024-03-14',
    status: 'pending',
    priority: 'medium'
  }, {
    id: 3,
    applicantName: 'Emma Williams',
    email: 'emma.w@example.com',
    program: 'Youth Ministry Training',
    submittedDate: '2024-03-13',
    status: 'approved',
    priority: 'low'
  }, {
    id: 4,
    applicantName: 'David Brown',
    email: 'david.b@example.com',
    program: 'Christian Leadership Movement',
    submittedDate: '2024-03-12',
    status: 'rejected',
    priority: 'medium'
  }];
  const getStatusBadge = (status: string) => {
    const styles = {
      pending: 'bg-amber-100 text-amber-800',
      approved: 'bg-green-100 text-green-800',
      rejected: 'bg-red-100 text-red-800'
    };
    return <span className={`px-2 py-1 text-sm rounded-full ${styles[status as keyof typeof styles]}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>;
  };
  const getPriorityBadge = (priority: string) => {
    const styles = {
      high: 'bg-red-100 text-red-800',
      medium: 'bg-amber-100 text-amber-800',
      low: 'bg-blue-100 text-blue-800'
    };
    return <span className={`px-2 py-1 text-xs rounded-full ${styles[priority as keyof typeof styles]}`}>
        {priority.charAt(0).toUpperCase() + priority.slice(1)}
      </span>;
  };
  return <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-navy-ink mb-2">
          Application Management
        </h1>
        <p className="text-gray-600">Review and process program applications</p>
      </div>
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-card shadow-soft">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Pending</p>
              <p className="text-2xl font-bold text-navy-ink">45</p>
            </div>
            <Clock className="text-amber-500" size={32} />
          </div>
        </div>
        <div className="bg-white p-4 rounded-card shadow-soft">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Approved</p>
              <p className="text-2xl font-bold text-navy-ink">123</p>
            </div>
            <CheckCircle className="text-green-500" size={32} />
          </div>
        </div>
        <div className="bg-white p-4 rounded-card shadow-soft">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Rejected</p>
              <p className="text-2xl font-bold text-navy-ink">12</p>
            </div>
            <XCircle className="text-red-500" size={32} />
          </div>
        </div>
        <div className="bg-white p-4 rounded-card shadow-soft">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total</p>
              <p className="text-2xl font-bold text-navy-ink">180</p>
            </div>
            <Eye className="text-blue-500" size={32} />
          </div>
        </div>
      </div>
      {/* Filters */}
      <div className="bg-white p-6 rounded-card shadow-soft">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input type="text" placeholder="Search applications..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-card focus:outline-none focus:ring-2 focus:ring-gold" />
          </div>
          <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-card focus:outline-none focus:ring-2 focus:ring-gold">
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
          <Button variant="outline">
            <Filter size={20} className="mr-2" />
            More Filters
          </Button>
        </div>
      </div>
      {/* Applications Table */}
      <div className="bg-white rounded-card shadow-soft overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted-gray">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-navy-ink">
                  Applicant
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-navy-ink">
                  Program
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-navy-ink">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-navy-ink">
                  Priority
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-navy-ink">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-navy-ink">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {applications.map(app => <tr key={app.id} className="hover:bg-muted-gray/50">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-white font-bold mr-3">
                        {app.applicantName.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-navy-ink">
                          {app.applicantName}
                        </p>
                        <p className="text-sm text-gray-600">{app.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{app.program}</td>
                  <td className="px-6 py-4 text-gray-600">
                    {app.submittedDate}
                  </td>
                  <td className="px-6 py-4">
                    {getPriorityBadge(app.priority)}
                  </td>
                  <td className="px-6 py-4">{getStatusBadge(app.status)}</td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-card">
                        <Eye size={18} />
                      </button>
                      {app.status === 'pending' && <>
                          <button className="p-2 text-green-600 hover:bg-green-50 rounded-card">
                            <CheckCircle size={18} />
                          </button>
                          <button className="p-2 text-red-600 hover:bg-red-50 rounded-card">
                            <XCircle size={18} />
                          </button>
                        </>}
                    </div>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>;
}