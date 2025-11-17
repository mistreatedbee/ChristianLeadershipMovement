import React from 'react';
import { Clock, CheckCircle, XCircle, FileText } from 'lucide-react';
import { Button } from '../../components/ui/Button';
export function ApplicationsPage() {
  const applications = [{
    id: 1,
    program: 'Christian Leadership Movement',
    submittedDate: '2024-01-15',
    status: 'approved',
    reviewDate: '2024-01-20',
    notes: 'Congratulations! Your application has been approved.'
  }, {
    id: 2,
    program: 'Bible School',
    submittedDate: '2024-02-01',
    status: 'pending',
    reviewDate: null,
    notes: 'Your application is currently under review.'
  }, {
    id: 3,
    program: 'Youth Ministry Training',
    submittedDate: '2024-01-10',
    status: 'rejected',
    reviewDate: '2024-01-18',
    notes: 'Unfortunately, we cannot accept your application at this time. Please reapply next cycle.'
  }];
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return <CheckCircle className="text-green-500" size={24} />;
      case 'pending':
        return <Clock className="text-amber-500" size={24} />;
      case 'rejected':
        return <XCircle className="text-red-500" size={24} />;
      default:
        return <FileText className="text-gray-500" size={24} />;
    }
  };
  const getStatusBadge = (status: string) => {
    const styles = {
      approved: 'bg-green-100 text-green-800',
      pending: 'bg-amber-100 text-amber-800',
      rejected: 'bg-red-100 text-red-800'
    };
    return <span className={`px-3 py-1 rounded-full text-sm font-medium ${styles[status as keyof typeof styles]}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>;
  };
  return <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-navy-ink mb-2">
            My Applications
          </h1>
          <p className="text-gray-600">
            Track the status of your program applications
          </p>
        </div>
        <Button href="/apply" variant="primary">
          New Application
        </Button>
      </div>
      <div className="space-y-4">
        {applications.map(application => <div key={application.id} className="bg-white p-6 rounded-card shadow-soft">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start space-x-4">
                {getStatusIcon(application.status)}
                <div>
                  <h3 className="text-xl font-bold text-navy-ink mb-1">
                    {application.program}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Submitted on{' '}
                    {new Date(application.submittedDate).toLocaleDateString()}
                  </p>
                </div>
              </div>
              {getStatusBadge(application.status)}
            </div>
            <div className="bg-muted-gray p-4 rounded-card mb-4">
              <p className="text-gray-700">{application.notes}</p>
            </div>
            {application.reviewDate && <p className="text-sm text-gray-600 mb-4">
                Reviewed on{' '}
                {new Date(application.reviewDate).toLocaleDateString()}
              </p>}
            <div className="flex space-x-3">
              <Button variant="outline" size="sm">
                View Details
              </Button>
              {application.status === 'approved' && <Button variant="primary" size="sm">
                  Accept Offer
                </Button>}
            </div>
          </div>)}
      </div>
    </div>;
}