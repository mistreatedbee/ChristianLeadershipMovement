import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Button } from '../../components/ui/Button';
import { User, Mail, Lock, Phone, Eye, EyeOff } from 'lucide-react';
interface RegisterFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
}
export function RegisterPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: {
      errors
    }
  } = useForm<RegisterFormData>();
  const password = watch('password');
  const onSubmit = (data: RegisterFormData) => {
    console.log('Register data:', data);
    // TODO: Implement actual registration
    navigate('/login');
  };
  return <div className="min-h-screen bg-muted-gray flex items-center justify-center py-12 px-4">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-card shadow-soft p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-navy-ink mb-2">
              Create Your Account
            </h1>
            <p className="text-gray-600">
              Join the Christian Leadership Movement
            </p>
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
                })} className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-card focus:outline-none focus:ring-2 focus:ring-gold" placeholder="John" />
                </div>
                {errors.firstName && <p className="text-red-500 text-sm mt-1">
                    {errors.firstName.message}
                  </p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-navy-ink mb-2">
                  Last Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input type="text" {...register('lastName', {
                  required: 'Last name is required'
                })} className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-card focus:outline-none focus:ring-2 focus:ring-gold" placeholder="Doe" />
                </div>
                {errors.lastName && <p className="text-red-500 text-sm mt-1">
                    {errors.lastName.message}
                  </p>}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-navy-ink mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input type="email" {...register('email', {
                required: 'Email is required'
              })} className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-card focus:outline-none focus:ring-2 focus:ring-gold" placeholder="your@email.com" />
              </div>
              {errors.email && <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-navy-ink mb-2">
                Phone Number
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input type="tel" {...register('phone', {
                required: 'Phone number is required'
              })} className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-card focus:outline-none focus:ring-2 focus:ring-gold" placeholder="+27 12 345 6789" />
              </div>
              {errors.phone && <p className="text-red-500 text-sm mt-1">
                  {errors.phone.message}
                </p>}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-navy-ink mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input type={showPassword ? 'text' : 'password'} {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 8,
                    message: 'Password must be at least 8 characters'
                  }
                })} className="w-full pl-10 pr-12 py-2 border border-gray-300 rounded-card focus:outline-none focus:ring-2 focus:ring-gold" placeholder="••••••••" />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                {errors.password && <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-navy-ink mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input type={showConfirmPassword ? 'text' : 'password'} {...register('confirmPassword', {
                  required: 'Please confirm your password',
                  validate: value => value === password || 'Passwords do not match'
                })} className="w-full pl-10 pr-12 py-2 border border-gray-300 rounded-card focus:outline-none focus:ring-2 focus:ring-gold" placeholder="••••••••" />
                  <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">
                    {errors.confirmPassword.message}
                  </p>}
              </div>
            </div>
            <div>
              <label className="flex items-start">
                <input type="checkbox" {...register('agreeToTerms', {
                required: 'You must agree to the terms'
              })} className="mr-2 mt-1" />
                <span className="text-sm text-gray-600">
                  I agree to the{' '}
                  <Link to="/terms-of-service" className="text-gold hover:underline">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link to="/privacy-policy" className="text-gold hover:underline">
                    Privacy Policy
                  </Link>
                </span>
              </label>
              {errors.agreeToTerms && <p className="text-red-500 text-sm mt-1">
                  {errors.agreeToTerms.message}
                </p>}
            </div>
            <Button type="submit" variant="primary" className="w-full">
              Create Account
            </Button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="text-gold hover:underline font-medium">
                Sign in here
              </Link>
            </p>
          </div>
          <div className="mt-6">
            <Link to="/" className="text-sm text-gray-600 hover:text-gold flex items-center justify-center">
              ← Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>;
}