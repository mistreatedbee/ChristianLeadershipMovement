import React from 'react';
import { Settings, Shield, Bell, Database, Globe } from 'lucide-react';
import { Button } from '../../components/ui/Button';
export function AdminSettingsPage() {
  return <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-navy-ink mb-2">Settings</h1>
        <p className="text-gray-600">
          Manage system configuration and preferences
        </p>
      </div>
      {/* Settings Sections */}
      <div className="grid grid-cols-1 gap-6">
        {/* General Settings */}
        <div className="bg-white rounded-card shadow-soft p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Settings className="text-blue-500" size={24} />
            <h2 className="text-xl font-bold text-navy-ink">
              General Settings
            </h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-navy-ink mb-2">
                Organization Name
              </label>
              <input type="text" defaultValue="Christian Leadership Movement" className="w-full px-4 py-2 border border-gray-300 rounded-card focus:outline-none focus:ring-2 focus:ring-gold" />
            </div>
            <div>
              <label className="block text-sm font-medium text-navy-ink mb-2">
                Contact Email
              </label>
              <input type="email" defaultValue="info@clmsa.org" className="w-full px-4 py-2 border border-gray-300 rounded-card focus:outline-none focus:ring-2 focus:ring-gold" />
            </div>
            <div>
              <label className="block text-sm font-medium text-navy-ink mb-2">
                Phone Number
              </label>
              <input type="tel" defaultValue="+27 12 345 6789" className="w-full px-4 py-2 border border-gray-300 rounded-card focus:outline-none focus:ring-2 focus:ring-gold" />
            </div>
          </div>
        </div>
        {/* Role Management */}
        <div className="bg-white rounded-card shadow-soft p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Shield className="text-gold" size={24} />
            <h2 className="text-xl font-bold text-navy-ink">Role Management</h2>
          </div>
          <div className="space-y-3">
            {['National Admin', 'Provincial Admin', 'Regional Admin', 'Local Admin'].map(role => <div key={role} className="flex items-center justify-between p-4 bg-muted-gray rounded-card">
                <div>
                  <p className="font-medium text-navy-ink">{role}</p>
                  <p className="text-sm text-gray-600">
                    Manage permissions and access levels
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  Configure
                </Button>
              </div>)}
          </div>
        </div>
        {/* Notification Settings */}
        <div className="bg-white rounded-card shadow-soft p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Bell className="text-purple-500" size={24} />
            <h2 className="text-xl font-bold text-navy-ink">
              Notification Settings
            </h2>
          </div>
          <div className="space-y-3">
            <label className="flex items-center justify-between p-4 bg-muted-gray rounded-card">
              <span className="text-navy-ink">
                Email notifications for new applications
              </span>
              <input type="checkbox" defaultChecked className="w-5 h-5" />
            </label>
            <label className="flex items-center justify-between p-4 bg-muted-gray rounded-card">
              <span className="text-navy-ink">
                SMS alerts for urgent matters
              </span>
              <input type="checkbox" defaultChecked className="w-5 h-5" />
            </label>
            <label className="flex items-center justify-between p-4 bg-muted-gray rounded-card">
              <span className="text-navy-ink">Weekly summary reports</span>
              <input type="checkbox" className="w-5 h-5" />
            </label>
          </div>
        </div>
        {/* System Settings */}
        <div className="bg-white rounded-card shadow-soft p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Database className="text-green-500" size={24} />
            <h2 className="text-xl font-bold text-navy-ink">System Settings</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-navy-ink mb-2">
                Application Approval Workflow
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-card focus:outline-none focus:ring-2 focus:ring-gold">
                <option>Single Approval</option>
                <option>Two-Stage Approval</option>
                <option>Three-Stage Approval</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-navy-ink mb-2">
                Certificate Template
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-card focus:outline-none focus:ring-2 focus:ring-gold">
                <option>Template A</option>
                <option>Template B</option>
                <option>Template C</option>
              </select>
            </div>
          </div>
        </div>
        {/* Regional Settings */}
        <div className="bg-white rounded-card shadow-soft p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Globe className="text-amber-500" size={24} />
            <h2 className="text-xl font-bold text-navy-ink">
              Regional Settings
            </h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-navy-ink mb-2">
                Default Language
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-card focus:outline-none focus:ring-2 focus:ring-gold">
                <option>English</option>
                <option>Afrikaans</option>
                <option>Zulu</option>
                <option>Xhosa</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-navy-ink mb-2">
                Time Zone
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-card focus:outline-none focus:ring-2 focus:ring-gold">
                <option>South Africa Standard Time (SAST)</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      {/* Save Button */}
      <div className="flex justify-end">
        <Button variant="primary" size="lg">
          Save All Changes
        </Button>
      </div>
    </div>;
}