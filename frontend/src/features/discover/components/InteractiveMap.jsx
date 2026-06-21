import { useEffect, useMemo, useState } from 'react';
import { motion as Motion } from 'framer-motion';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import { MapPinned } from 'lucide-react';
import { cn } from '../../../utils/cn.js';
import { FullscreenButton } from './FullscreenButton.jsx';
import { LocationDetailsDrawer } from './LocationDetailsDrawer.jsx';
import { MapControls } from './MapControls.jsx';
import { MapLegend } from './MapLegend.jsx';
import { MapMarker } from './MapMarker.jsx';
import { MarkerPopup } from './MarkerPopup.jsx';

const indiaCenter = [22.9734, 78.6569];

function MapCamera({ highlightedLocation, locations }) {
  const map = useMap();

  useEffect(() => {
    if (highlightedLocation) {
      map.flyTo([highlightedLocation.latitude, highlightedLocation.longitude], 10, { duration: 1.1 });
      return;
    }

    if (locations.length > 1) {
      const bounds = locations.map((location) => [location.latitude, location.longitude]);
      map.flyToBounds(bounds, { duration: 1, padding: [48, 48], maxZoom: 8 });
      return;
    }

    map.flyTo(indiaCenter, 5, { duration: 1 });
  }, [highlightedLocation, locations, map]);

  return null;
}

function PopupCloser({ setClosePopup }) {
  const map = useMap();

  useEffect(() => {
    setClosePopup(() => () => map.closePopup());
  }, [map, setClosePopup]);

  return null;
}

export function InteractiveMap({ highlightedLocation, locations }) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [closePopup, setClosePopup] = useState(() => () => {});

  const highlightedId = highlightedLocation?.id;
  const mapKey = useMemo(() => (isFullscreen ? 'fullscreen-map' : 'inline-map'), [isFullscreen]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsFullscreen(false);
        setSelectedLocation(null);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <>
      <Motion.section
        className={cn(
          'relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-xl shadow-slate-200/60 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none',
          isFullscreen && 'fixed inset-0 z-[70] rounded-none border-0 p-0',
        )}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {!isFullscreen && (
          <div className="mb-3 flex flex-col gap-2 px-1 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-600">Interactive map</p>
              <h2 className="font-display text-2xl font-bold text-slate-950 dark:text-white">Explore sustainable stays and local experiences</h2>
            </div>
            <p className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 dark:text-slate-300">
              <MapPinned size={16} />
              {locations.length} visible locations
            </p>
          </div>
        )}

        <div className={cn('relative overflow-hidden rounded-[1.5rem]', isFullscreen ? 'h-screen rounded-none' : 'h-[350px] md:h-[460px] xl:h-[560px]')}>
          <MapContainer key={mapKey} center={indiaCenter} zoom={5} zoomControl={false} scrollWheelZoom className="h-full w-full">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MapCamera highlightedLocation={highlightedLocation} locations={locations} />
            <PopupCloser setClosePopup={setClosePopup} />
            <MapControls />
            {locations.map((location) => (
              <MapMarker isHighlighted={location.id === highlightedId} key={location.id} location={location}>
                <MarkerPopup
                  location={location}
                  onClose={closePopup}
                  onViewDetails={(nextLocation) => {
                    setSelectedLocation(nextLocation);
                    closePopup();
                  }}
                />
              </MapMarker>
            ))}
          </MapContainer>
          <FullscreenButton isFullscreen={isFullscreen} onToggle={() => setIsFullscreen((current) => !current)} />
          <MapLegend />
        </div>
      </Motion.section>

      <LocationDetailsDrawer location={selectedLocation} onClose={() => setSelectedLocation(null)} />
    </>
  );
}
