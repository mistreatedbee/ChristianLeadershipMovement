import React from 'react';
import { Award, Download, Send, Search, Filter } from 'lucide-react';
import { Button } from '../../components/ui/Button';
export function CertificateManagementPage() {
  const certificates = [{
    id: 1,
    studentName: 'John Doe',
    courseName: 'Christian Leadership Movement',
    completionDate: '2024-02-15',
    certificateNumber: 'CLM-2024-001',
    status: 'Issued'
  }, {
    id: 2,
    studentName: 'Sarah Johnson',
    courseName: 'Bible School',
    completionDate: '2024-02-20',
    certificateNumber: 'BS-2024-045',
    status: 'Issued'
  }, {
    id: 3,
    studentName: 'Michael Chen',
    courseName: 'Youth Ministry Training',
    completionDate: '2024-03-01',
    certificateNumber: 'YMT-2024-012',
    status: 'Pending'
  }];
  return <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-navy-ink mb-2">
            Certificate Management
          </h1>
          <p className="text-gray-600">
            Generate and manage course certificates
          </p>
        </div>
        <Button variant="primary">
          <Award size={20} className="mr-2" />
          Generate Certificates
        </Button>
      </div>
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-card shadow-soft">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Issued</p>
              <p className="text-2xl font-bold text-navy-ink">567</p>
            </div>
            <Award className="text-gold" size={32} />
          </div>
        </div>
        <div className="bg-white p-4 rounded-card shadow-soft">
          <p className="text-gray-600 text-sm">This Month</p>
          <p className="text-2xl font-bold text-navy-ink">45</p>
        </div>
        <div className="bg-white p-4 rounded-card shadow-soft">
          <p className="text-gray-600 text-sm">Pending</p>
          <p className="text-2xl font-bold text-navy-ink">12</p>
        </div>
        <div className="bg-white p-4 rounded-card shadow-soft">
          <p className="text-gray-600 text-sm">Downloaded</p>
          <p className="text-2xl font-bold text-navy-ink">523</p>
        </div>
      </div>
      {/* Filters */}
      <div className="bg-white p-6 rounded-card shadow-soft">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input type="text" placeholder="Search certificates..." className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-card focus:outline-none focus:ring-2 focus:ring-gold" />
          </div>
          <select className="px-4 py-2 border border-gray-300 rounded-card focus:outline-none focus:ring-2 focus:ring-gold">
            <option>All Courses</option>
            <option>Christian Leadership Movement</option>
            <option>Bible School</option>
            <option>Youth Ministry Training</option>
          </select>
          <Button variant="outline">
            <Filter size={20} className="mr-2" />
            More Filters
          </Button>
        </div>
      </div>
      {/* Certificates Table */}
      <div className="bg-white rounded-card shadow-soft overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted-gray">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-navy-ink">
                  Student
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-navy-ink">
                  Course
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-navy-ink">
                  Certificate #
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-navy-ink">
                  Completion Date
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
              {certificates.map(cert => <tr key={cert.id} className="hover:bg-muted-gray/50">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-white font-bold mr-3">
                        {cert.studentName.charAt(0)}
                      </div>
                      <span className="font-medium text-navy-ink">
                        {cert.studentName}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{cert.courseName}</td>
                  <td className="px-6 py-4 text-gray-600 font-mono text-sm">
                    {cert.certificateNumber}
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    {cert.completionDate}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-sm rounded-full ${cert.status === 'Issued' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'}`}>
                      {cert.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-card">
                        <Download size={18} />
                      </button>
                      <button className="p-2 text-green-600 hover:bg-green-50 rounded-card">
                        <Send size={18} />
                      </button>
                    </div>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>;
}