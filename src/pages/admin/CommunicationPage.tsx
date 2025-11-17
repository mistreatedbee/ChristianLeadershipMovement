import React, { useState } from 'react';
import { Mail, MessageSquare, Send, Users, Filter } from 'lucide-react';
import { Button } from '../../components/ui/Button';
export function CommunicationPage() {
  const [messageType, setMessageType] = useState('email');
  return <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-navy-ink mb-2">
          Communication Tools
        </h1>
        <p className="text-gray-600">
          Send messages and notifications to users
        </p>
      </div>
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-card shadow-soft">
          <div className="flex items-center justify-between mb-2">
            <Mail className="text-blue-500" size={32} />
          </div>
          <p className="text-gray-600 text-sm">Emails Sent</p>
          <p className="text-2xl font-bold text-navy-ink">1,234</p>
        </div>
        <div className="bg-white p-6 rounded-card shadow-soft">
          <div className="flex items-center justify-between mb-2">
            <MessageSquare className="text-green-500" size={32} />
          </div>
          <p className="text-gray-600 text-sm">SMS Sent</p>
          <p className="text-2xl font-bold text-navy-ink">567</p>
        </div>
        <div className="bg-white p-6 rounded-card shadow-soft">
          <div className="flex items-center justify-between mb-2">
            <Users className="text-purple-500" size={32} />
          </div>
          <p className="text-gray-600 text-sm">Active Recipients</p>
          <p className="text-2xl font-bold text-navy-ink">890</p>
        </div>
      </div>
      {/* Message Composer */}
      <div className="bg-white rounded-card shadow-soft p-6">
        <h2 className="text-xl font-bold text-navy-ink mb-4">
          Compose Message
        </h2>
        <div className="space-y-4">
          {/* Message Type */}
          <div>
            <label className="block text-sm font-medium text-navy-ink mb-2">
              Message Type
            </label>
            <div className="flex space-x-4">
              <button onClick={() => setMessageType('email')} className={`flex-1 p-3 rounded-card border-2 transition-colors ${messageType === 'email' ? 'border-gold bg-gold/10' : 'border-gray-200 hover:border-gray-300'}`}>
                <Mail className="mx-auto mb-2" size={24} />
                <span className="text-sm font-medium">Email</span>
              </button>
              <button onClick={() => setMessageType('sms')} className={`flex-1 p-3 rounded-card border-2 transition-colors ${messageType === 'sms' ? 'border-gold bg-gold/10' : 'border-gray-200 hover:border-gray-300'}`}>
                <MessageSquare className="mx-auto mb-2" size={24} />
                <span className="text-sm font-medium">SMS</span>
              </button>
            </div>
          </div>
          {/* Recipients */}
          <div>
            <label className="block text-sm font-medium text-navy-ink mb-2">
              Recipients
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-card focus:outline-none focus:ring-2 focus:ring-gold">
              <option>All Users</option>
              <option>Students Only</option>
              <option>Admins Only</option>
              <option>Specific Course Participants</option>
              <option>Event Registrants</option>
            </select>
          </div>
          {/* Subject (Email only) */}
          {messageType === 'email' && <div>
              <label className="block text-sm font-medium text-navy-ink mb-2">
                Subject
              </label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-card focus:outline-none focus:ring-2 focus:ring-gold" placeholder="Enter email subject..." />
            </div>}
          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-navy-ink mb-2">
              Message
            </label>
            <textarea rows={8} className="w-full px-4 py-2 border border-gray-300 rounded-card focus:outline-none focus:ring-2 focus:ring-gold" placeholder={messageType === 'email' ? 'Compose your email...' : 'Type your SMS message (max 160 characters)...'} />
          </div>
          {/* Actions */}
          <div className="flex justify-end space-x-4">
            <Button variant="outline">Save Draft</Button>
            <Button variant="primary">
              <Send size={20} className="mr-2" />
              Send Message
            </Button>
          </div>
        </div>
      </div>
      {/* Recent Messages */}
      <div className="bg-white rounded-card shadow-soft p-6">
        <h2 className="text-xl font-bold text-navy-ink mb-4">
          Recent Messages
        </h2>
        <div className="space-y-3">
          {[{
          id: 1,
          type: 'email',
          subject: 'Welcome to CLM',
          recipients: 45,
          date: '2 hours ago'
        }, {
          id: 2,
          type: 'sms',
          subject: 'Event Reminder',
          recipients: 120,
          date: '1 day ago'
        }, {
          id: 3,
          type: 'email',
          subject: 'Course Update',
          recipients: 78,
          date: '3 days ago'
        }].map(message => <div key={message.id} className="flex items-center justify-between p-4 bg-muted-gray rounded-card">
              <div className="flex items-center space-x-4">
                {message.type === 'email' ? <Mail className="text-blue-500" size={24} /> : <MessageSquare className="text-green-500" size={24} />}
                <div>
                  <p className="font-medium text-navy-ink">{message.subject}</p>
                  <p className="text-sm text-gray-600">
                    {message.recipients} recipients • {message.date}
                  </p>
                </div>
              </div>
              <Button variant="outline" size="sm">
                View
              </Button>
            </div>)}
        </div>
      </div>
    </div>;
}