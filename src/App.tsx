import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Impact from './components/Impact';
import Campaigns from './components/Campaigns';
import Volunteer from './components/Volunteer';
import Donation from './components/Donation';
import SuccessStories from './components/SuccessStories';
import Gallery from './components/Gallery';
import WhyChooseUs from './components/WhyChooseUs';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [preselectedCampaign, setPreselectedCampaign] = useState<string | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80; // sticky header offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleCampaignSelect = (campaignTitle: string) => {
    setPreselectedCampaign(campaignTitle);
    scrollToSection('donate');
  };

  const handleDonateClick = () => {
    setPreselectedCampaign(null);
    scrollToSection('donate');
  };

  const handleVolunteerClick = () => {
    scrollToSection('volunteer');
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1F2937] font-sans antialiased selection:bg-blue-600 selection:text-white">
      {/* Sticky Header */}
      <Header
        onDonateClick={handleDonateClick}
        onVolunteerClick={handleVolunteerClick}
      />

      {/* Main Sections */}
      <main>
        {/* Home / Hero */}
        <Hero
          onDonateClick={handleDonateClick}
          onVolunteerClick={handleVolunteerClick}
        />

        {/* About us */}
        <About />

        {/* Core focus programs */}
        <Programs />

        {/* Impact numbers / counters */}
        <Impact />

        {/* Active high-priority Campaigns */}
        <Campaigns onCampaignSelect={handleCampaignSelect} />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Interactive Donation Widget */}
        <Donation
          preselectedCampaign={preselectedCampaign}
          onClearPreselectedCampaign={() => setPreselectedCampaign(null)}
        />

        {/* Volunteer Application Form */}
        <Volunteer />

        {/* Success Stories / Testimonials */}
        <SuccessStories />

        {/* Image Grid Gallery with Lightbox */}
        <Gallery />

        {/* FAQ Accordions */}
        <FAQ />

        {/* Contact Form & Office map details */}
        <Contact />
      </main>

      {/* Footer & legal links */}
      <Footer />
    </div>
  );
}
