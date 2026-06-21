import L from 'leaflet';
import { Marker } from 'react-leaflet';
import { markerStyles } from '../data/mapCategories.js';

const iconGlyphs = {
  home: 'H',
  leaf: 'L',
  sparkles: 'E',
  utensils: 'F',
  camera: 'P',
  tent: 'C',
  bike: 'B',
};

function createMarkerIcon(category, isHighlighted) {
  const style = markerStyles[category] || markerStyles.Experiences;
  const size = isHighlighted ? 42 : 34;

  return L.divIcon({
    className: '',
    html: `<div style="
      width:${size}px;
      height:${size}px;
      border-radius:9999px;
      display:flex;
      align-items:center;
      justify-content:center;
      color:white;
      font-weight:900;
      font-size:${isHighlighted ? 15 : 13}px;
      background:${style.color};
      border:3px solid white;
      box-shadow:0 14px 28px rgba(15,23,42,0.28);
      transform:${isHighlighted ? 'scale(1.08)' : 'scale(1)'};
    ">${iconGlyphs[style.icon]}</div>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
    popupAnchor: [0, -size / 2],
  });
}

export function MapMarker({ children, isHighlighted, location }) {
  return (
    <Marker icon={createMarkerIcon(location.category, isHighlighted)} position={[location.latitude, location.longitude]}>
      {children}
    </Marker>
  );
}
