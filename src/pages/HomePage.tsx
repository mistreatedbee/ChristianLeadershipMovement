import React from 'react';
import { TopNav } from '../components/layout/TopNav';
import { Footer } from '../components/layout/Footer';
import { HeroSection } from '../components/home/HeroSection';
import { MissionSection } from '../components/home/MissionSection';
import { ProgramsSection } from '../components/home/ProgramsSection';
import { UpcomingEventsSection } from '../components/home/UpcomingEventsSection';
import { GallerySection } from '../components/home/GallerySection';
import { PartnersSection } from '../components/home/PartnersSection';
import { CtaSection } from '../components/home/CtaSection';
export function HomePage() {
  return <div className="min-h-screen flex flex-col">
      <TopNav />
      <main className="flex-grow">
        <HeroSection />
        <MissionSection />
        <ProgramsSection />
        <UpcomingEventsSection />
        <GallerySection />
        <PartnersSection />
        <CtaSection />
      </main>
      <Footer />
    </div>;
}