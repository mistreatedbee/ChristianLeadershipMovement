import React from 'react';
import { Button } from '../ui/Button';

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#1B1C5F] via-[#2C2E78] to-[#1B1C5F] text-white py-20 overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-[-100px] left-[-100px] w-72 h-72 bg-yellow-500 opacity-10 rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-[-150px] right-[-150px] w-96 h-96 bg-blue-500 opacity-10 rounded-full animate-pulse-slow"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Text content */}
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight opacity-0 animate-fade-in-up">
              Growing Christ-centered leaders across South Africa
            </h1>
            <p className="text-lg md:text-xl text-gray-300 opacity-0 animate-fade-in-up delay-200">
              Developing servant leaders who transform communities through faith and action.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up delay-400">
              <Button href="/apply" variant="primary" size="lg">
                Apply Now — Join the Movement
              </Button>
              <Button href="/about" variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>

          {/* Logo/Image */}
          <div className="md:w-1/2 relative flex justify-center">
            <div className="relative w-full max-w-md rounded-xl overflow-hidden shadow-xl">
              <img
                src="/assets/images/hero.jpeg"
                alt="CLM Logo"
                className="w-full h-full object-contain animate-fade-in-up"
              />
              {/* Glow behind logo */}
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400 to-blue-500 opacity-20 rounded-xl blur-3xl animate-pulse-slow"></div>
              
            </div>
          </div>
        </div>
      </div>

      {/* Tailwind animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 1s ease forwards;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-400 {
          animation-delay: 0.4s;
        }

        @keyframes pulseSlow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.1;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.2;
          }
        }

        .animate-pulse-slow {
          animation: pulseSlow 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
