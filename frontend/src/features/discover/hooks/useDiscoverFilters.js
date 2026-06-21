import { useMemo, useState } from 'react';
import { destinations } from '../data/destinations.js';
import { experiences } from '../data/experiences.js';
import { hiddenGems } from '../data/hiddenGems.js';
import { stays } from '../data/stays.js';

const initialFilters = {
  budget: 20000,
  travelType: 'All',
  destination: 'All',
  rating: 0,
  ecoScore: 0,
  safetyScore: 0,
  category: 'All',
};

const collectionMap = {
  All: [...destinations, ...stays, ...experiences, ...hiddenGems],
  Stays: stays,
  Experiences: experiences,
  'Hidden Gems': hiddenGems,
};

const getItemBudget = (item) => item.budget || item.price || 0;
const getItemType = (item) => item.travelType || item.type;

export function useDiscoverFilters() {
  const [activeTab, setActiveTab] = useState('All');
  const [filters, setFilters] = useState(initialFilters);
  const [query, setQuery] = useState('');

  const updateFilter = (key, value) => {
    setFilters((current) => ({ ...current, [key]: value }));
  };

  const resetFilters = () => {
    setActiveTab('All');
    setFilters(initialFilters);
    setQuery('');
  };

  const visibleItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return collectionMap[activeTab].filter((item) => {
      const searchText = [item.name, item.title, item.destination, item.region, item.description, item.badge, item.type, item.travelType]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();

      const matchesQuery = !normalizedQuery || searchText.includes(normalizedQuery);
      const matchesBudget = getItemBudget(item) <= filters.budget;
      const matchesTravelType = filters.travelType === 'All' || getItemType(item) === filters.travelType;
      const matchesDestination = filters.destination === 'All' || item.destination === filters.destination || item.name === filters.destination;
      const matchesRating = !item.rating || item.rating >= Number(filters.rating);
      const matchesEcoScore = !item.ecoScore || item.ecoScore >= Number(filters.ecoScore);
      const matchesSafetyScore = !item.safetyScore || item.safetyScore >= Number(filters.safetyScore);
      const matchesCategory = filters.category === 'All' || item.category === filters.category;

      return matchesQuery && matchesBudget && matchesTravelType && matchesDestination && matchesRating && matchesEcoScore && matchesSafetyScore && matchesCategory;
    });
  }, [activeTab, filters, query]);

  return {
    activeTab,
    destinations,
    experiences,
    filters,
    hiddenGems,
    query,
    resetFilters,
    setActiveTab,
    setQuery,
    stays,
    updateFilter,
    visibleItems,
  };
}
