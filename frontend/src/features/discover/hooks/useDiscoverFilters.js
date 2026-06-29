import { useEffect, useMemo, useState } from 'react';
import toast from 'react-hot-toast';
import { apiClient, getApiErrorMessage } from '../../../services';
import { destinations } from '../data/destinations.js';
import { experiences } from '../data/experiences.js';
import { hiddenGems } from '../data/hiddenGems.js';

const initialFilters = {
  budget: 20000,
  travelType: 'All',
  destination: 'All',
  rating: 0,
  ecoScore: 0,
  safetyScore: 0,
  category: 'All',
};

const getItemBudget = (item) => item.budget || item.price || 0;
const getItemType = (item) => item.travelType || item.type;

const normalizeStay = (stay) => ({
  ...stay,
  name: stay.title,
  destination: stay.location,
  price: stay.pricePerNight,
  communityScore: stay.communityImpactScore,
  type: stay.category,
  category: 'Stays',
});

export function useDiscoverFilters() {
  const [activeTab, setActiveTab] = useState('All');
  const [filters, setFilters] = useState(initialFilters);
  const [isLoadingStays, setIsLoadingStays] = useState(true);
  const [query, setQuery] = useState('');
  const [stays, setStays] = useState([]);
  const [staysError, setStaysError] = useState('');

  useEffect(() => {
    let isMounted = true;

    async function fetchStays() {
      try {
        setIsLoadingStays(true);
        setStaysError('');
        const response = await apiClient.get('/stays');
        const apiStays = Array.isArray(response.data?.data) ? response.data.data.map(normalizeStay) : [];

        if (isMounted) {
          setStays(apiStays);
        }
      } catch (error) {
        const message = getApiErrorMessage(error);

        if (isMounted) {
          setStays([]);
          setStaysError(message);
          toast.error(message);
        }
      } finally {
        if (isMounted) {
          setIsLoadingStays(false);
        }
      }
    }

    fetchStays();

    return () => {
      isMounted = false;
    };
  }, []);

  const collectionMap = useMemo(
    () => ({
      All: [...destinations, ...stays, ...experiences, ...hiddenGems],
      Stays: stays,
      Experiences: experiences,
      'Hidden Gems': hiddenGems,
    }),
    [stays],
  );

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
    isLoadingStays,
    query,
    resetFilters,
    setActiveTab,
    setQuery,
    stays,
    staysError,
    updateFilter,
    visibleItems,
  };
}
