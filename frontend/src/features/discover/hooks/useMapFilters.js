import { useMemo } from 'react';
import { mapLocations } from '../data/locations.js';

const categoryGroups = {
  All: null,
  Destinations: null,
  Stays: ['Verified Homestays'],
  Experiences: ['Experiences', 'Local Food', 'Photography Spots', 'Camping', 'Cycling'],
  'Hidden Gems': ['Hidden Gems'],
};

const getSearchText = (location) =>
  [location.name, location.category, location.destination, location.travelType, location.description].filter(Boolean).join(' ').toLowerCase();

export function useMapFilters({ activeTab, filters, query }) {
  const filteredLocations = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const activeCategories = categoryGroups[activeTab];
    const filterCategories = categoryGroups[filters.category];

    return mapLocations.filter((location) => {
      const matchesQuery = !normalizedQuery || getSearchText(location).includes(normalizedQuery);
      const matchesActiveTab = !activeCategories || activeCategories.includes(location.category);
      const matchesCategory = !filterCategories || filterCategories.includes(location.category);
      const matchesBudget = location.price <= filters.budget;
      const matchesTravelType = filters.travelType === 'All' || location.travelType === filters.travelType;
      const matchesDestination = filters.destination === 'All' || location.destination === filters.destination;
      const matchesRating = location.rating >= Number(filters.rating);
      const matchesEcoScore = location.ecoScore >= Number(filters.ecoScore);
      const matchesSafetyScore = location.safetyScore >= Number(filters.safetyScore);

      return matchesQuery && matchesActiveTab && matchesCategory && matchesBudget && matchesTravelType && matchesDestination && matchesRating && matchesEcoScore && matchesSafetyScore;
    });
  }, [activeTab, filters, query]);

  const highlightedLocation = useMemo(() => {
    if (!query.trim()) {
      return filteredLocations[0] || null;
    }

    const normalizedQuery = query.trim().toLowerCase();
    return filteredLocations.find((location) => getSearchText(location).includes(normalizedQuery)) || filteredLocations[0] || null;
  }, [filteredLocations, query]);

  return {
    filteredLocations,
    highlightedLocation,
  };
}
