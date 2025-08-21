'use client';

import { useEffect, useRef } from 'react';

export default function LeafletMap({ 
  address = "20 Faubourg Notre Dame, Passage Romain Laureri, 83210 Solliès-Pont, France",
  lat = 43.1897,
  lng = 6.0378,
  zoom = 15 
}) {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    // Dynamically import Leaflet to avoid SSR issues
    const initMap = async () => {
      const L = (await import('leaflet')).default;
      
      // Fix for default markers in Leaflet with Next.js
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      });

      if (mapRef.current && !mapInstanceRef.current) {
        // Initialize map
        mapInstanceRef.current = L.map(mapRef.current).setView([lat, lng], zoom);

        // Add tile layer with clean, minimal style
        L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          subdomains: 'abcd',
          maxZoom: 20
        }).addTo(mapInstanceRef.current);

        // Custom marker icon with refined design
        const customIcon = L.divIcon({
          html: `
            <div style="
              background: linear-gradient(135deg, #0E7A5F 0%, #0A5D47 100%);
              width: 32px;
              height: 32px;
              border-radius: 50% 50% 50% 0;
              transform: rotate(-45deg);
              border: 2px solid white;
              box-shadow: 0 4px 12px rgba(14, 122, 95, 0.4), 0 2px 4px rgba(0,0,0,0.1);
              display: flex;
              align-items: center;
              justify-content: center;
              position: relative;
            ">
              <div style="
                width: 8px;
                height: 8px;
                background-color: white;
                border-radius: 50%;
                transform: rotate(45deg);
              "></div>
            </div>
          `,
          className: 'custom-marker',
          iconSize: [32, 32],
          iconAnchor: [16, 32],
          popupAnchor: [0, -32]
        });

        // Add marker
        const marker = L.marker([lat, lng], { icon: customIcon }).addTo(mapInstanceRef.current);
        
        // Add refined popup
        marker.bindPopup(`
          <div style="
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; 
            padding: 16px; 
            min-width: 280px;
            border-radius: 8px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          ">
            <div style="
              display: flex;
              align-items: center;
              margin-bottom: 12px;
              padding-bottom: 12px;
              border-bottom: 1px solid #f0f0f0;
            ">
              <div style="
                width: 40px;
                height: 40px;
                background: linear-gradient(135deg, #0E7A5F 0%, #0A5D47 100%);
                border-radius: 8px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 12px;
              ">
                <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <div>
                <strong style="color: #1a1a1a; font-size: 16px; font-weight: 600;">
                  Cabinet d'Avocat
                </strong>
                <div style="color: #0E7A5F; font-size: 13px; font-weight: 500; margin-top: 2px;">
                  Cécile BRUN
                </div>
              </div>
            </div>
            <div style="color: #666; font-size: 14px; line-height: 1.5; margin-bottom: 12px;">
              ${address.replace(/,/g, '<br>')}
            </div>
            <div style="display: flex; gap: 8px;">
              <a href="tel:+33494135380" style="
                background: #0E7A5F;
                color: white;
                text-decoration: none;
                padding: 8px 12px;
                border-radius: 6px;
                font-size: 13px;
                font-weight: 500;
                display: inline-flex;
                align-items: center;
                gap: 6px;
                transition: background 0.2s;
              " onmouseover="this.style.background='#0A5D47'" onmouseout="this.style.background='#0E7A5F'">
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                Appeler
              </a>
              <a href="https://www.google.com/maps/dir/?api=1&destination=20+Faubourg+Notre+Dame,+Passage+Romain+Laureri,+83210+Solliès-Pont,+France" target="_blank" style="
                background: #f8f9fa;
                color: #0E7A5F;
                text-decoration: none;
                padding: 8px 12px;
                border-radius: 6px;
                font-size: 13px;
                font-weight: 500;
                display: inline-flex;
                align-items: center;
                gap: 6px;
                border: 1px solid #e9ecef;
                transition: all 0.2s;
              " onmouseover="this.style.background='#e9ecef'" onmouseout="this.style.background='#f8f9fa'">
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21.71 11.29l-9-9a.996.996 0 00-1.41 0l-9 9a1.003 1.003 0 000 1.42l9 9c.39.39 1.02.39 1.41 0l9-9a.996.996 0 000-1.42zM14 14.5V12h-4v3H8v-4c0-.55.45-1 1-1h5V7.5l3.5 3.5-3.5 3.5z"/>
                </svg>
                Itinéraire
              </a>
            </div>
          </div>
        `, {
          maxWidth: 320,
          className: 'custom-popup'
        });

        // Enhanced map styling
        const mapContainer = mapInstanceRef.current.getContainer();
        mapContainer.style.borderRadius = '12px';
        mapContainer.style.overflow = 'hidden';
        mapContainer.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.1)';
        
        // Disable zoom on scroll for better UX
        mapInstanceRef.current.scrollWheelZoom.disable();
        
        // Add custom CSS for popup styling
        const style = document.createElement('style');
        style.textContent = `
          .custom-popup .leaflet-popup-content-wrapper {
            border-radius: 12px !important;
            box-shadow: 0 8px 32px rgba(0,0,0,0.12) !important;
            border: none !important;
            padding: 0 !important;
          }
          .custom-popup .leaflet-popup-content {
            margin: 0 !important;
            border-radius: 12px !important;
          }
          .custom-popup .leaflet-popup-tip {
            background: white !important;
            border: none !important;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1) !important;
          }
          .leaflet-control-zoom {
            border: none !important;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1) !important;
          }
          .leaflet-control-zoom a {
            background: white !important;
            color: #0E7A5F !important;
            border: none !important;
            border-radius: 6px !important;
            margin: 2px !important;
            font-weight: 600 !important;
            transition: all 0.2s ease !important;
          }
          .leaflet-control-zoom a:hover {
            background: #f8f9fa !important;
            color: #0A5D47 !important;
          }
          .leaflet-control-attribution {
            background: rgba(255,255,255,0.8) !important;
            backdrop-filter: blur(10px) !important;
            border-radius: 6px !important;
            font-size: 11px !important;
            padding: 4px 8px !important;
            margin: 8px !important;
          }
        `;
        document.head.appendChild(style);
      }
    };

    initMap();

    // Cleanup
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [lat, lng, zoom, address]);

  return (
    <>
      {/* Load Leaflet CSS */}
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
        integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
        crossOrigin=""
      />
      <div 
        ref={mapRef} 
        className="w-full h-full min-h-[400px] rounded-lg"
        style={{ zIndex: 1 }}
      />
    </>
  );
}
