import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/auth/LoginPage';
import { RegisterPage } from './pages/auth/RegisterPage';
import { DashboardLayout } from './components/dashboard/DashboardLayout';
import { DashboardHome } from './pages/dashboard/DashboardHome';
import { ProfilePage } from './pages/dashboard/ProfilePage';
import { ApplicationsPage } from './pages/dashboard/ApplicationsPage';
import { AdminDashboardLayout } from './components/admin/AdminDashboardLayout';
import { AdminDashboardHome } from './pages/admin/AdminDashboardHome';
import { UserManagementPage } from './pages/admin/UserManagementPage';
import { ApplicationManagementPage } from './pages/admin/ApplicationManagementPage';
import { CourseManagementPage } from './pages/admin/CourseManagementPage';
import { EventManagementPage } from './pages/admin/EventManagementPage';
import { CertificateManagementPage } from './pages/admin/CertificateManagementPage';
import { AnalyticsPage } from './pages/admin/AnalyticsPage';
import { CommunicationPage } from './pages/admin/CommunicationPage';
import { AdminSettingsPage } from './pages/admin/AdminSettingsPage';
export function App() {
  return <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="applications" element={<ApplicationsPage />} />
        </Route>
        <Route path="/admin" element={<AdminDashboardLayout />}>
          <Route index element={<AdminDashboardHome />} />
          <Route path="users" element={<UserManagementPage />} />
          <Route path="applications" element={<ApplicationManagementPage />} />
          <Route path="courses" element={<CourseManagementPage />} />
          <Route path="events" element={<EventManagementPage />} />
          <Route path="certificates" element={<CertificateManagementPage />} />
          <Route path="analytics" element={<AnalyticsPage />} />
          <Route path="communication" element={<CommunicationPage />} />
          <Route path="settings" element={<AdminSettingsPage />} />
        </Route>
      </Routes>
    </Router>;
}