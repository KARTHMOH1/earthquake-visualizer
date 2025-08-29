import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useEffect, useState } from 'react';

export default function MapView() {
  const [earthquakes, setEarthquakes] = useState([]);

  useEffect(() => {
    fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson')
      .then(res => res.json())
      .then(data => setEarthquakes(data.features));
  }, []);

  return (
    <MapContainer center={[20, 0]} zoom={2} className="h-screen w-full">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {earthquakes.map(eq => {
        const [lon, lat] = eq.geometry.coordinates;
        return (
          <Marker key={eq.id} position={[lat, lon]}>
            <Popup>
              <strong>{eq.properties.place}</strong><br />
              Magnitude: {eq.properties.mag}
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}