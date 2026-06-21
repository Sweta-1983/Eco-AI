import { useMemo, useState } from 'react';
import { motion as Motion } from 'framer-motion';
import { SlidersHorizontal } from 'lucide-react';
import { PageContainer } from '../../../components/layout';
import { CategoryTabs } from '../components/CategoryTabs.jsx';
import { DestinationCard } from '../components/DestinationCard.jsx';
import { DiscoverHero } from '../components/DiscoverHero.jsx';
import { EmptyState } from '../components/EmptyState.jsx';
import { ExperienceCard } from '../components/ExperienceCard.jsx';
import { FilterSidebar } from '../components/FilterSidebar.jsx';
import { HiddenGemCard } from '../components/HiddenGemCard.jsx';
import { RecommendationCard } from '../components/RecommendationCard.jsx';
import { SectionHeading } from '../components/SectionHeading.jsx';
import { StayCard } from '../components/StayCard.jsx';
import { recommendedTrips } from '../data/recommendations.js';
import { useDiscoverFilters } from '../hooks/useDiscoverFilters.js';

function Grid({ children }) {
  return <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{children}</div>;
}

export default function DiscoverPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { activeTab, filters, query, resetFilters, setActiveTab, setQuery, updateFilter, visibleItems } = useDiscoverFilters();

  const groupedItems = useMemo(
    () => ({
      destinations: visibleItems.filter((item) => item.category === 'Destinations'),
      stays: visibleItems.filter((item) => item.category === 'Stays'),
      experiences: visibleItems.filter((item) => item.category === 'Experiences'),
      hiddenGems: visibleItems.filter((item) => item.category === 'Hidden Gems'),
    }),
    [visibleItems],
  );

  const hasResults = visibleItems.length > 0;
  const showDestinations = activeTab === 'All' && groupedItems.destinations.length > 0;
  const showStays = ['All', 'Stays'].includes(activeTab) && groupedItems.stays.length > 0;
  const showExperiences = ['All', 'Experiences'].includes(activeTab) && groupedItems.experiences.length > 0;
  const showHiddenGems = ['All', 'Hidden Gems'].includes(activeTab) && groupedItems.hiddenGems.length > 0;

  const sidebarProps = {
    filters,
    resetFilters,
    updateFilter,
  };

  return (
    <PageContainer className="max-w-none space-y-8 pb-12">
      <DiscoverHero onSearchChange={setQuery} searchValue={query} />

      <div className="flex items-center justify-between gap-3 lg:hidden">
        <p className="text-sm font-bold text-slate-600 dark:text-slate-300">{visibleItems.length} curated results</p>
        <button
          className="inline-flex h-10 items-center gap-2 rounded-full border border-slate-200 bg-white px-4 text-sm font-bold text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
          onClick={() => setIsFilterOpen(true)}
          type="button"
        >
          <SlidersHorizontal size={17} />
          Filters
        </button>
      </div>

      <div className="grid gap-6 lg:grid-cols-[18rem_minmax(0,1fr)]">
        <FilterSidebar className="sticky top-6 hidden max-h-[calc(100vh-3rem)] overflow-y-auto lg:block" {...sidebarProps} />

        <div className="min-w-0 space-y-8">
          <CategoryTabs activeTab={activeTab} onChange={setActiveTab} />

          {!hasResults && <EmptyState onReset={resetFilters} />}

          {showDestinations && (
            <section>
              <SectionHeading
                eyebrow="Featured destinations"
                title="Verified places for slower, smarter travel"
                description="Six high-signal Indian destinations with sustainability, safety, and local context ready for planning."
              />
              <Grid>
                {groupedItems.destinations.map((destination, index) => (
                  <DestinationCard destination={destination} index={index} key={destination.id} />
                ))}
              </Grid>
            </section>
          )}

          {showStays && (
            <section>
              <SectionHeading
                eyebrow="Verified stays"
                title="Homestays with trust and impact signals"
                description="Compare price, rating, eco score, and community contribution before you choose a base."
              />
              <Grid>
                {groupedItems.stays.map((stay, index) => (
                  <StayCard index={index} key={stay.id} stay={stay} />
                ))}
              </Grid>
            </section>
          )}

          {showExperiences && (
            <section>
              <SectionHeading
                eyebrow="Experiences"
                title="Local activities with verified context"
                description="Food tours, walks, cycling, farm stays, culture routes, and treks led by local experts."
              />
              <Grid>
                {groupedItems.experiences.map((experience, index) => (
                  <ExperienceCard experience={experience} index={index} key={experience.id} />
                ))}
              </Grid>
            </section>
          )}

          {showHiddenGems && (
            <section>
              <SectionHeading
                eyebrow="Hidden gems"
                title="Less-crowded places worth protecting"
                description="Community-recommended routes and nature spots with crowd, season, safety, and eco signals."
              />
              <Grid>
                {groupedItems.hiddenGems.map((gem, index) => (
                  <HiddenGemCard gem={gem} index={index} key={gem.id} />
                ))}
              </Grid>
            </section>
          )}

          {hasResults && (
            <section>
              <SectionHeading
                eyebrow="Recommended for you"
                title="Trips that match your current intent"
                description="Mock match scores based on budget, family fit, verified hosts, ratings, and nearby experiences."
              />
              <div className="grid gap-4 xl:grid-cols-3">
                {recommendedTrips.map((recommendation, index) => (
                  <RecommendationCard index={index} key={recommendation.id} recommendation={recommendation} />
                ))}
              </div>
            </section>
          )}
        </div>
      </div>

      {isFilterOpen && (
        <Motion.div className="fixed inset-0 z-50 bg-slate-950/50 backdrop-blur-sm lg:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <button className="absolute inset-0 h-full w-full cursor-default" onClick={() => setIsFilterOpen(false)} type="button" aria-label="Close filters" />
          <Motion.div
            className="absolute bottom-0 left-0 right-0 max-h-[86vh] overflow-y-auto rounded-t-[2rem] bg-white p-4 dark:bg-slate-950"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', damping: 28, stiffness: 240 }}
          >
            <FilterSidebar className="border-0 shadow-none" onClose={() => setIsFilterOpen(false)} {...sidebarProps} />
          </Motion.div>
        </Motion.div>
      )}
    </PageContainer>
  );
}
