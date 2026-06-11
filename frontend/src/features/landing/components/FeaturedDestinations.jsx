import { destinations } from '../landingData.js';
import { DestinationCard } from './DestinationCard.jsx';
import { SectionHeader } from './SectionHeader.jsx';

export function FeaturedDestinations() {
  return (
    <section className="bg-earth-50 py-24 dark:bg-slate-950" id="discover">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Featured destinations"
          title="Verified places for slower, smarter travel"
          description="Explore high-signal destinations where homestays, experiences, safety context, and sustainability signals come together."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {destinations.map((destination, index) => (
            <DestinationCard destination={destination} index={index} key={destination.name} />
          ))}
        </div>
      </div>
    </section>
  );
}
