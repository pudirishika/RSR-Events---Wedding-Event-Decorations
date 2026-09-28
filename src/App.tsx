/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { GallerySection } from './components/GallerySection';
import { VideoSection } from './components/VideoSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { WeComeToYou } from './components/WeComeToYou';
import { AboutSection } from './components/AboutSection';
import { EnquirySection } from './components/EnquirySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { OwnerGuideModal } from './components/OwnerGuideModal';

export default function App() {
  const [selectedServiceForEnquiry, setSelectedServiceForEnquiry] = useState<string | undefined>();
  const [selectedDecorForEnquiry, setSelectedDecorForEnquiry] = useState<string | undefined>();
  const [galleryCategoryFilter, setGalleryCategoryFilter] = useState<string | undefined>();
  const [isOwnerGuideOpen, setIsOwnerGuideOpen] = useState(false);

  // Smooth scroll to Enquiry form with pre-selected service
  const handleSelectService = (serviceTitle: string) => {
    setSelectedServiceForEnquiry(serviceTitle);
    const enquiryElem = document.getElementById('enquiry');
    if (enquiryElem) {
      enquiryElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Smooth scroll to Enquiry form with pre-selected decor from gallery
  const handleSelectDecor = (decorTitle: string) => {
    setSelectedDecorForEnquiry(decorTitle);
    const enquiryElem = document.getElementById('enquiry');
    if (enquiryElem) {
      enquiryElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll to gallery with category
  const handleFilterGalleryByCategory = (category: string) => {
    setGalleryCategoryFilter(category);
    const galleryElem = document.getElementById('gallery');
    if (galleryElem) {
      galleryElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToGallery = () => {
    const galleryElem = document.getElementById('gallery');
    if (galleryElem) {
      galleryElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 font-sans selection:bg-amber-100 selection:text-amber-900 pb-14 sm:pb-0">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenOwnerGuide={() => setIsOwnerGuideOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreGallery={scrollToGallery}
          onContactClick={scrollToContact}
        />

        {/* Services Section with 10 event service cards */}
        <ServicesSection
          onSelectServiceForEnquiry={handleSelectService}
          onFilterGalleryByCategory={handleFilterGalleryByCategory}
        />

        {/* Gallery Section with Lightbox */}
        <GallerySection
          onSelectDecorForEnquiry={handleSelectDecor}
          activeCategoryOverride={galleryCategoryFilter}
          onOpenOwnerGuide={() => setIsOwnerGuideOpen(true)}
        />

        {/* Video Gallery Section */}
        <VideoSection />

        {/* Special Highlighted Section: We Come Wherever Your Function Is */}
        <WeComeToYou onDiscussLocation={scrollToContact} />

        {/* Why Choose RSR Events Section */}
        <WhyChooseUs />

        {/* About RSR Events Section */}
        <AboutSection />

        {/* Event Enquiry Form Section */}
        <EnquirySection
          initialService={selectedServiceForEnquiry}
          initialDecor={selectedDecorForEnquiry}
        />

        {/* Prominent Contact Us Section */}
        <ContactSection onOpenOwnerGuide={() => setIsOwnerGuideOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenOwnerGuide={() => setIsOwnerGuideOpen(true)} />

      {/* Floating WhatsApp and Mobile Quick Action Buttons */}
      <FloatingActions />

      {/* Owner Editing Guide Modal */}
      <OwnerGuideModal
        isOpen={isOwnerGuideOpen}
        onClose={() => setIsOwnerGuideOpen(false)}
      />
    </div>
  );
}
