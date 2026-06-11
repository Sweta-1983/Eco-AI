import { AiTripSearch } from './components/AiTripSearch.jsx';
import { FeaturedDestinations } from './components/FeaturedDestinations.jsx';
import { FeaturedExperiences } from './components/FeaturedExperiences.jsx';
import { FinalCta } from './components/FinalCta.jsx';
import { ImpactSection } from './components/ImpactSection.jsx';
import { LandingHero } from './components/LandingHero.jsx';
import { Testimonials } from './components/Testimonials.jsx';
import { WhyEcoStay } from './components/WhyEcoStay.jsx';

export default function LandingPage() {
  return (
    <>
      <LandingHero />
      <AiTripSearch />
      <FeaturedDestinations />
      <FeaturedExperiences />
      <WhyEcoStay />
      <ImpactSection />
      <Testimonials />
      <FinalCta />
    </>
  );
}
