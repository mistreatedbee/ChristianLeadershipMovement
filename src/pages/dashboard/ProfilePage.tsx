import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../../components/ui/Button';
import { User, Mail, Phone, MapPin, Calendar } from 'lucide-react';
interface ProfileFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  address: string;
  city: string;
  province: string;
  postalCode: string;
  bio: string;
}
export function ProfilePage() {
  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm<ProfileFormData>({
    defaultValues: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phone: '+27 12 345 6789',
      dateOfBirth: '1990-01-01',
      address: '123 Main Street',
      city: 'Pretoria',
      province: 'Gauteng',
      postalCode: '0001',
      bio: 'Passionate about Christian leadership and community development.'
    }
  });
  const onSubmit = (data: ProfileFormData) => {
    console.log('Profile update:', data);
    // TODO: Implement actual profile update
  };
  return <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-navy-ink mb-2">My Profile</h1>
        <p className="text-gray-600">Manage your personal information</p>
      </div>
      <div className="bg-white rounded-card shadow-soft p-6">
        <div className="flex items-center space-x-6 mb-8 pb-6 border-b">
          <div className="w-24 h-24 rounded-full bg-gold flex items-center justify-center text-white text-3xl font-bold">
            JD
          </div>
          <div>
            <h2 className="text-2xl font-bold text-navy-ink">John Doe</h2>
            <p className="text-gray-600">Student</p>
            <Button variant="outline" size="sm" className="mt-2">
              Change Photo
            </Button>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-navy-ink mb-2">
                First Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input type="text" {...register('firstName', {
                required: 'First name is required'
              })} className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-card focus:outline-none focus:ring-2 focus:ring-gold" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-navy-ink mb-2">
                Last Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input type="text" {...register('lastName', {
                required: 'Last name is required'
              })} className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-card focus:outline-none focus:ring-2 focus:ring-gold" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-navy-ink mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input type="email" {...register('email', {
                required: 'Email is required'
              })} className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-card focus:outline-none focus:ring-2 focus:ring-gold" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-navy-ink mb-2">
                Phone
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input type="tel" {...register('phone', {
                required: 'Phone is required'
              })} className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-card focus:outline-none focus:ring-2 focus:ring-gold" />
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-navy-ink mb-2">
              Date of Birth
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input type="date" {...register('dateOfBirth')} className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-card focus:outline-none focus:ring-2 focus:ring-gold" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-navy-ink mb-2">
              Address
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
              <input type="text" {...register('address')} className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-card focus:outline-none focus:ring-2 focus:ring-gold" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-navy-ink mb-2">
                City
              </label>
              <input type="text" {...register('city')} className="w-full px-4 py-2 border border-gray-300 rounded-card focus:outline-none focus:ring-2 focus:ring-gold" />
            </div>
            <div>
              <label className="block text-sm font-medium text-navy-ink mb-2">
                Province
              </label>
              <select {...register('province')} className="w-full px-4 py-2 border border-gray-300 rounded-card focus:outline-none focus:ring-2 focus:ring-gold">
                <option value="Gauteng">Gauteng</option>
                <option value="Western Cape">Western Cape</option>
                <option value="KwaZulu-Natal">KwaZulu-Natal</option>
                <option value="Eastern Cape">Eastern Cape</option>
                <option value="Free State">Free State</option>
                <option value="Limpopo">Limpopo</option>
                <option value="Mpumalanga">Mpumalanga</option>
                <option value="Northern Cape">Northern Cape</option>
                <option value="North West">North West</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-navy-ink mb-2">
                Postal Code
              </label>
              <input type="text" {...register('postalCode')} className="w-full px-4 py-2 border border-gray-300 rounded-card focus:outline-none focus:ring-2 focus:ring-gold" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-navy-ink mb-2">
              Bio
            </label>
            <textarea {...register('bio')} rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-card focus:outline-none focus:ring-2 focus:ring-gold" placeholder="Tell us about yourself..." />
          </div>
          <div className="flex justify-end space-x-4">
            <Button type="button" variant="outline">
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              Save Changes
            </Button>
          </div>
        </form>
      </div>
    </div>;
}