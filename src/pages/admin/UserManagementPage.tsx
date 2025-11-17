import React, { useState } from 'react';
import { Search, Filter, Plus, Edit, Trash2, Mail, Shield } from 'lucide-react';
import { Button } from '../../components/ui/Button';
export function UserManagementPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('all');
  const users = [{
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Student',
    status: 'Active',
    joinDate: '2024-01-15',
    province: 'Gauteng'
  }, {
    id: 2,
    name: 'Sarah Johnson',
    email: 'sarah.j@example.com',
    role: 'Local Admin',
    status: 'Active',
    joinDate: '2023-11-20',
    province: 'Western Cape'
  }, {
    id: 3,
    name: 'Michael Chen',
    email: 'michael.c@example.com',
    role: 'Student',
    status: 'Inactive',
    joinDate: '2024-02-01',
    province: 'KwaZulu-Natal'
  }, {
    id: 4,
    name: 'Emma Williams',
    email: 'emma.w@example.com',
    role: 'Regional Admin',
    status: 'Active',
    joinDate: '2023-09-10',
    province: 'Gauteng'
  }];
  return <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-navy-ink mb-2">
            User Management
          </h1>
          <p className="text-gray-600">Manage user accounts and permissions</p>
        </div>
        <Button variant="primary">
          <Plus size={20} className="mr-2" />
          Add User
        </Button>
      </div>
      {/* Filters */}
      <div className="bg-white p-6 rounded-card shadow-soft">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input type="text" placeholder="Search users..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-card focus:outline-none focus:ring-2 focus:ring-gold" />
          </div>
          <select value={filterRole} onChange={e => setFilterRole(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-card focus:outline-none focus:ring-2 focus:ring-gold">
            <option value="all">All Roles</option>
            <option value="student">Student</option>
            <option value="local">Local Admin</option>
            <option value="regional">Regional Admin</option>
            <option value="provincial">Provincial Admin</option>
            <option value="national">National Admin</option>
          </select>
          <Button variant="outline">
            <Filter size={20} className="mr-2" />
            More Filters
          </Button>
        </div>
      </div>
      {/* Users Table */}
      <div className="bg-white rounded-card shadow-soft overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted-gray">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-navy-ink">
                  User
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-navy-ink">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-navy-ink">
                  Province
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-navy-ink">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-navy-ink">
                  Join Date
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-navy-ink">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {users.map(user => <tr key={user.id} className="hover:bg-muted-gray/50">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-white font-bold mr-3">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-navy-ink">{user.name}</p>
                        <p className="text-sm text-gray-600">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                      <Shield size={14} className="mr-1" />
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{user.province}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-sm rounded-full ${user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{user.joinDate}</td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-card">
                        <Edit size={18} />
                      </button>
                      <button className="p-2 text-green-600 hover:bg-green-50 rounded-card">
                        <Mail size={18} />
                      </button>
                      <button className="p-2 text-red-600 hover:bg-red-50 rounded-card">
                        <Trash2 size={18} />
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