import React, { useState, useEffect, useRef, useId } from 'react';
import { 
  APIProvider, 
  Map, 
  AdvancedMarker, 
  Pin, 
  useMap, 
  useMapsLibrary,
  InfoWindow
} from '@vis.gl/react-google-maps';
import { 
  Car, 
  Bus, 
  Footprints, 
  Bike, 
  MapPin, 
  Navigation, 
  Clock, 
  Route as RouteIcon, 
  Building2, 
  GraduationCap, 
  Train, 
  ArrowRightLeft, 
  ExternalLink, 
  Search, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle,
  Truck,
  RotateCcw,
  Compass
} from 'lucide-react';

const WORKSHOP_COORDS = { lat: 12.9694047, lng: 77.6908959 };
const WORKSHOP_NAME = "iPixel Electronics Workshop";
const WORKSHOP_ADDRESS = "#22, 3rd A Cross, Gururaja Layout, Doddanekundi, Bengaluru 560037";
const WORKSHOP_PLACE_ID = "ChIJT02sErITrjsRZXRtN_BCNqs";

export type TravelModeKey = 'DRIVING' | 'TRANSIT' | 'WALKING' | 'BICYCLING';

export interface DestinationPreset {
  id: string;
  name: string;
  category: 'workplace' | 'school' | 'transit';
  address: string;
  coords: { lat: number; lng: number };
  tag: string;
  highlight?: string;
}

export const PRESET_DESTINATIONS: DestinationPreset[] = [
  // Workplaces & Tech Parks
  {
    id: 'bagmane-tech-park',
    name: 'Bagmane Constellation Business Park',
    category: 'workplace',
    address: 'K.R. Puram - Marathahalli Outer Ring Road, Doddanekkundi, Bengaluru',
    coords: { lat: 12.9785, lng: 77.6983 },
    tag: 'Tech Park • 2.5 km',
    highlight: 'Amazon, Samsung, Google tech campus'
  },
  {
    id: 'prestige-tech-park',
    name: 'Prestige Tech Park (Kadubeesanahalli)',
    category: 'workplace',
    address: 'Marathahalli - Sarjapur Outer Ring Road, Kadubeesanahalli, Bengaluru',
    coords: { lat: 12.9366, lng: 77.6934 },
    tag: 'Tech Hub • 4.6 km',
    highlight: 'JPMorgan, Oracle, Adobe, CISCO offices'
  },
  {
    id: 'rmz-ecospace',
    name: 'RMZ Ecospace & Bellandur Tech Corridor',
    category: 'workplace',
    address: 'Outer Ring Road, Bellandur, Bengaluru',
    coords: { lat: 12.9264, lng: 77.6841 },
    tag: 'Business Park • 6.2 km',
    highlight: 'Intel, Shell, Bosch, Accenture tech parks'
  },
  {
    id: 'itpl-whitefield',
    name: 'ITPL (International Tech Park Bangalore)',
    category: 'workplace',
    address: 'Whitefield Main Road, Pattandur Agrahara, Bengaluru',
    coords: { lat: 12.9868, lng: 77.7381 },
    tag: 'IT Capital • 6.5 km',
    highlight: 'TCS, Mu Sigma, Sharp, Xerox campus'
  },
  {
    id: 'divyasree-technopolis',
    name: 'Divyasree Technopolis (Yemalur)',
    category: 'workplace',
    address: 'Off Old Airport Road, Yemalur, Bengaluru',
    coords: { lat: 12.9463, lng: 77.6782 },
    tag: 'Tech Park • 4.8 km',
    highlight: 'Deloitte, CGI, Fujitsu tech center'
  },

  // Schools, Colleges & Educational Institutions
  {
    id: 'gopalan-school',
    name: 'Gopalan National School',
    category: 'school',
    address: 'Behind SAP Labs, Doddanekkundi, Whitefield Road, Bengaluru',
    coords: { lat: 12.9802, lng: 77.7071 },
    tag: 'School • 2.1 km',
    highlight: 'ICSE campus near Doddanekkundi'
  },
  {
    id: 'ryan-international',
    name: 'Ryan International School (Kundalahalli)',
    category: 'school',
    address: 'Near AECS Layout, Kundalahalli, Bengaluru',
    coords: { lat: 12.9654, lng: 77.7126 },
    tag: 'School • 3.2 km',
    highlight: 'Reputed CBSE / ICSE Institution'
  },
  {
    id: 'cmrit-college',
    name: 'CMR Institute of Technology (CMRIT)',
    category: 'school',
    address: 'ITPL Main Road, AECS Layout, Kundalahalli, Bengaluru',
    coords: { lat: 12.9669, lng: 77.7125 },
    tag: 'College • 3.4 km',
    highlight: 'Leading Engineering & Research Institute'
  },
  {
    id: 'vydehi-institute',
    name: 'Vydehi Institute of Medical Sciences',
    category: 'school',
    address: 'EPIP Zone, Whitefield, Bengaluru',
    coords: { lat: 12.9752, lng: 77.7291 },
    tag: 'University • 5.4 km',
    highlight: 'Medical campus & research hospital'
  },

  // Transit & Metro Hubs
  {
    id: 'kundalahalli-metro',
    name: 'Kundalahalli Metro Station (Purple Line)',
    category: 'transit',
    address: 'ITPL Main Road, Kundalahalli, Bengaluru',
    coords: { lat: 12.9678, lng: 77.7153 },
    tag: 'Metro Station • 3.5 km',
    highlight: 'Namma Metro direct connection to Central Bangalore'
  },
  {
    id: 'marathahalli-bridge',
    name: 'Marathahalli Bridge Junction & Bus Bay',
    category: 'transit',
    address: 'Marathahalli Junction, Outer Ring Road, Bengaluru',
    coords: { lat: 12.9562, lng: 77.6997 },
    tag: 'BMTC Transit Hub • 2.8 km',
    highlight: 'Major BMTC AC & Non-AC bus interchange'
  },
  {
    id: 'kr-puram-station',
    name: 'KR Puram Railway & Metro Interchange',
    category: 'transit',
    address: 'Outer Ring Road, Krishnarajapuram, Bengaluru',
    coords: { lat: 12.9982, lng: 77.6766 },
    tag: 'Rail & Metro • 5.1 km',
    highlight: 'Direct suburban train & metro terminus'
  }
];

interface ModeSummary {
  mode: TravelModeKey;
  label: string;
  icon: React.ReactNode;
  durationText: string;
  durationMinutes: number;
  distanceKm: number;
  color: string;
  activeColor: string;
}

interface CommuteDirectionsMapProps {
  apiKey?: string;
  className?: string;
  onBookPickup?: () => void;
}

// Inner map child that hooks into @vis.gl/react-google-maps useMap() and useMapsLibrary('routes')
const RoutesRenderer: React.FC<{
  originCoords: { lat: number; lng: number };
  originTitle: string;
  destinationCoords: { lat: number; lng: number };
  destinationTitle: string;
  travelMode: TravelModeKey;
  onRoutesCalculated: (mode: TravelModeKey, distanceMeters: number, durationMillis: number, legs: any[]) => void;
  onError: (err: any) => void;
}> = ({
  originCoords,
  originTitle,
  destinationCoords,
  destinationTitle,
  travelMode,
  onRoutesCalculated,
  onError
}) => {
  const map = useMap();
  const routesLib = useMapsLibrary('routes');
  const polylinesRef = useRef<google.maps.Polyline[]>([]);

  useEffect(() => {
    if (!routesLib || !map) return;

    // Clean previous polylines
    polylinesRef.current.forEach((p) => p.setMap(null));
    polylinesRef.current = [];

    const request: any = {
      origin: originCoords,
      destination: destinationCoords,
      travelMode: travelMode,
      fields: ['path', 'distanceMeters', 'durationMillis', 'viewport', 'legs']
    };

    let isCancelled = false;

    ((routesLib as any).Route).computeRoutes(request)
      .then(({ routes }: { routes: any[] }) => {
        if (isCancelled) return;
        if (!routes || routes.length === 0) {
          onError(new Error('No route found for this mode.'));
          return;
        }

        const primaryRoute = routes[0];
        
        // Mode color mapping
        const modeColorMap: Record<TravelModeKey, string> = {
          DRIVING: '#2563eb', // Blue
          TRANSIT: '#059669', // Emerald
          WALKING: '#7c3aed', // Purple
          BICYCLING: '#d97706' // Amber
        };

        const strokeColor = modeColorMap[travelMode] || '#2563eb';

        // Render polylines using native createPolylines()
        if (typeof primaryRoute.createPolylines === 'function') {
          const newPolylines = primaryRoute.createPolylines();
          newPolylines.forEach((p: google.maps.Polyline) => {
            p.setOptions({
              strokeColor: strokeColor,
              strokeWeight: 6,
              strokeOpacity: 0.85
            });
            p.setMap(map);
          });
          polylinesRef.current = newPolylines;
        }

        // Fit map bounds
        if (primaryRoute.viewport) {
          map.fitBounds(primaryRoute.viewport, {
            top: 50,
            bottom: 50,
            left: 50,
            right: 50
          });
        }

        onRoutesCalculated(
          travelMode,
          primaryRoute.distanceMeters ?? 0,
          primaryRoute.durationMillis ?? 0,
          primaryRoute.legs ?? []
        );
      })
      .catch((err: any) => {
        if (isCancelled) return;
        console.error('Error computing routes:', err);
        // Quota check
        const errMsg = String(err?.message || err);
        if (
          errMsg.includes('429') || 
          errMsg.includes('RESOURCE_EXHAUSTED') || 
          errMsg.includes('OVER_QUERY_LIMIT')
        ) {
          window.dispatchEvent(new CustomEvent('gmp-quota-exceeded'));
        }
        onError(err);
      });

    return () => {
      isCancelled = true;
      polylinesRef.current.forEach((p) => p.setMap(null));
      polylinesRef.current = [];
    };
  }, [routesLib, map, originCoords.lat, originCoords.lng, destinationCoords.lat, destinationCoords.lng, travelMode]);

  return (
    <>
      {/* Origin Marker */}
      <AdvancedMarker position={originCoords} title={originTitle}>
        <div className="flex flex-col items-center">
          <div className="bg-blue-600 text-white p-2 rounded-full shadow-lg ring-4 ring-blue-100 flex items-center justify-center animate-bounce">
            <Compass className="w-4 h-4" />
          </div>
          <span className="bg-slate-900/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-full mt-1 shadow-md whitespace-nowrap">
            {originTitle.length > 20 ? `${originTitle.slice(0, 18)}...` : originTitle}
          </span>
        </div>
      </AdvancedMarker>

      {/* Destination Marker */}
      <AdvancedMarker position={destinationCoords} title={destinationTitle}>
        <div className="flex flex-col items-center">
          <div className="bg-red-600 text-white p-2 rounded-full shadow-lg ring-4 ring-red-100 flex items-center justify-center">
            <MapPin className="w-4 h-4 fill-white" />
          </div>
          <span className="bg-slate-900/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-full mt-1 shadow-md whitespace-nowrap">
            {destinationTitle.length > 20 ? `${destinationTitle.slice(0, 18)}...` : destinationTitle}
          </span>
        </div>
      </AdvancedMarker>
    </>
  );
};

export const CommuteDirectionsMap: React.FC<CommuteDirectionsMapProps> = ({
  apiKey,
  className = "",
  onBookPickup
}) => {
  const gmpKey = apiKey || ((import.meta as any).env?.VITE_GOOGLE_MAPS_API_KEY as string) || "";
  
  // Selection states
  const [selectedPreset, setSelectedPreset] = useState<DestinationPreset>(PRESET_DESTINATIONS[0]);
  const [activeCategory, setActiveCategory] = useState<'all' | 'workplace' | 'school' | 'transit'>('all');
  const [directionReversed, setDirectionReversed] = useState<boolean>(false); // false: workshop -> destination, true: destination -> workshop
  const [activeTravelMode, setActiveTravelMode] = useState<TravelModeKey>('DRIVING');
  
  // Custom destination input
  const [customSearchQuery, setCustomSearchQuery] = useState('');
  const [isCustomActive, setIsCustomActive] = useState(false);
  const [customDestination, setCustomDestination] = useState<{
    name: string;
    address: string;
    coords: { lat: number; lng: number };
  } | null>(null);

  // Computed results state
  const [loadingRoute, setLoadingRoute] = useState<boolean>(false);
  const [routeError, setRouteError] = useState<string | null>(null);
  const [routeData, setRouteData] = useState<{
    distanceMeters: number;
    durationMillis: number;
    legs: any[];
  } | null>(null);

  // Multi-modal estimates cache
  const [estimatesCache, setEstimatesCache] = useState<Partial<Record<TravelModeKey, { distanceKm: number; durationMinutes: number }>>>({});

  // Active Origin and Destination
  const currentDestination = isCustomActive && customDestination ? {
    name: customDestination.name,
    address: customDestination.address,
    coords: customDestination.coords
  } : {
    name: selectedPreset.name,
    address: selectedPreset.address,
    coords: selectedPreset.coords
  };

  const originCoords = directionReversed ? currentDestination.coords : WORKSHOP_COORDS;
  const originTitle = directionReversed ? currentDestination.name : WORKSHOP_NAME;
  const destinationCoords = directionReversed ? WORKSHOP_COORDS : currentDestination.coords;
  const destinationTitle = directionReversed ? WORKSHOP_NAME : currentDestination.name;

  // Clear cache when endpoints change
  useEffect(() => {
    setLoadingRoute(true);
    setRouteError(null);
    setEstimatesCache({});
  }, [selectedPreset.id, isCustomActive, customDestination, directionReversed]);

  const handleRoutesCalculated = (
    mode: TravelModeKey, 
    distanceMeters: number, 
    durationMillis: number, 
    legs: any[]
  ) => {
    setLoadingRoute(false);
    setRouteError(null);
    setRouteData({
      distanceMeters,
      durationMillis,
      legs
    });

    const distKm = parseFloat((distanceMeters / 1000).toFixed(1));
    const durMin = Math.round(durationMillis / 60000);

    setEstimatesCache((prev) => ({
      ...prev,
      [mode]: {
        distanceKm: distKm,
        durationMinutes: durMin
      }
    }));
  };

  const handleRouteError = (err: any) => {
    setLoadingRoute(false);
    setRouteError(err?.message || 'Unable to compute directions for this route.');
  };

  // Switch to custom destination
  const handleApplyCustomSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customSearchQuery.trim()) return;

    // Quick address matching for popular localities in Bengaluru
    const query = customSearchQuery.trim().toLowerCase();
    
    // Fallback coordinates near the queried neighborhood if geocoder is not directly invoked
    let matchedCoords = { lat: 12.9716, lng: 77.6412 }; // Default central East Bangalore
    if (query.includes('whitefield') || query.includes('itpl')) {
      matchedCoords = { lat: 12.9698, lng: 77.7499 };
    } else if (query.includes('bellandur') || query.includes('ecospace')) {
      matchedCoords = { lat: 12.9264, lng: 77.6841 };
    } else if (query.includes('marathahalli')) {
      matchedCoords = { lat: 12.9562, lng: 77.6997 };
    } else if (query.includes('indiranagar')) {
      matchedCoords = { lat: 12.9719, lng: 77.6412 };
    } else if (query.includes('hsr') || query.includes('layout')) {
      matchedCoords = { lat: 12.9121, lng: 77.6446 };
    } else if (query.includes('sarjapur')) {
      matchedCoords = { lat: 12.9103, lng: 77.6853 };
    } else if (query.includes('kundalahalli')) {
      matchedCoords = { lat: 12.9654, lng: 77.7126 };
    } else if (query.includes('hebbal') || query.includes('manyata')) {
      matchedCoords = { lat: 13.0475, lng: 77.6200 };
    } else if (query.includes('electronic city')) {
      matchedCoords = { lat: 12.8452, lng: 77.6602 };
    }

    setCustomDestination({
      name: customSearchQuery.trim(),
      address: `${customSearchQuery.trim()}, Bengaluru, Karnataka`,
      coords: matchedCoords
    });
    setIsCustomActive(true);
  };

  // Browser Geolocation for user's immediate location
  const handleUseCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setCustomDestination({
          name: "My Current Live Location",
          address: "Current GPS Coordinates in Bengaluru",
          coords: {
            lat: pos.coords.latitude,
            lng: pos.coords.longitude
          }
        });
        setIsCustomActive(true);
        setDirectionReversed(true); // Default from current location to workshop
      },
      (err) => {
        console.warn("Geolocation denied or unavailable:", err);
      },
      { timeout: 10000, enableHighAccuracy: true }
    );
  };

  // Google Maps external deep link for full live navigation
  const externalMapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${originCoords.lat},${originCoords.lng}&destination=${destinationCoords.lat},${destinationCoords.lng}&travelmode=${activeTravelMode.toLowerCase()}`;

  // Filtered preset list
  const filteredPresets = PRESET_DESTINATIONS.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  // Mode descriptors
  const MODES: Array<{
    key: TravelModeKey;
    label: string;
    icon: React.ReactNode;
    color: string;
    activeBg: string;
    activeText: string;
    badge: string;
  }> = [
    {
      key: 'DRIVING',
      label: 'Driving / Cab / Bike',
      icon: <Car className="w-4 h-4" />,
      color: '#2563eb',
      activeBg: 'bg-blue-600',
      activeText: 'text-blue-600',
      badge: 'Fastest Route'
    },
    {
      key: 'TRANSIT',
      label: 'BMTC Bus / Metro',
      icon: <Bus className="w-4 h-4" />,
      color: '#059669',
      activeBg: 'bg-emerald-600',
      activeText: 'text-emerald-600',
      badge: 'Public Transport'
    },
    {
      key: 'BICYCLING',
      label: 'Cycling',
      icon: <Bike className="w-4 h-4" />,
      color: '#d97706',
      activeBg: 'bg-amber-600',
      activeText: 'text-amber-600',
      badge: 'Eco Commute'
    },
    {
      key: 'WALKING',
      label: 'Walking',
      icon: <Footprints className="w-4 h-4" />,
      color: '#7c3aed',
      activeBg: 'bg-purple-600',
      activeText: 'text-purple-600',
      badge: 'Pedestrian'
    }
  ];

  return (
    <div className={`bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden ${className}`}>
      {/* Top Header Banner */}
      <div className="p-6 bg-slate-900 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-800">
              <RouteIcon className="w-3.5 h-3.5" /> Interactive Commute &amp; Directions
            </span>
            <span className="text-[11px] font-bold text-blue-300 bg-blue-950/60 px-2.5 py-0.5 rounded-full border border-blue-800">
              Doddanekundi 8-KM Hub
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white">
            Travel Times &amp; Directions to Workplaces &amp; Schools
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
            Check live estimated travel times for driving, public transit, walking, or cycling between <strong>iPixel Electronics</strong> and major IT tech parks, universities, or schools in East Bengaluru.
          </p>
        </div>

        {/* Direction Reversal Toggle */}
        <div className="flex items-center gap-2 self-stretch md:self-auto">
          <button
            onClick={() => setDirectionReversed(!directionReversed)}
            className="flex-1 md:flex-none px-3.5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 border border-slate-700 shadow-sm active:scale-95 cursor-pointer"
            title="Swap Origin and Destination"
          >
            <ArrowRightLeft className="w-3.5 h-3.5 text-blue-400" />
            <span>
              {directionReversed ? 'Coming from Destination' : 'Departing from iPixel'}
            </span>
          </button>

          <a
            href={externalMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-sm active:scale-95 shrink-0"
          >
            <span>Live GPS</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Main Grid: Controls Sidebar & Interactive Map */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        
        {/* Left Column: Preset Destination Selection & Custom Input (5 cols) */}
        <div className="lg:col-span-5 p-5 sm:p-6 bg-slate-50 border-r border-gray-100 flex flex-col justify-between max-h-[700px] overflow-y-auto">
          <div className="space-y-4">
            
            {/* Origin & Destination Route Summary Pill */}
            <div className="p-3.5 bg-white rounded-2xl border border-gray-200/80 shadow-xs space-y-2.5">
              <div className="flex items-center gap-2.5 text-xs">
                <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-[11px] shrink-0">
                  A
                </div>
                <div className="truncate">
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Origin</span>
                  <span className="font-bold text-gray-900 truncate block">{originTitle}</span>
                </div>
              </div>
              <div className="border-l-2 border-dashed border-gray-200 ml-3 h-2" />
              <div className="flex items-center gap-2.5 text-xs">
                <div className="w-6 h-6 rounded-full bg-red-100 text-red-700 flex items-center justify-center font-bold text-[11px] shrink-0">
                  B
                </div>
                <div className="truncate">
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Destination</span>
                  <span className="font-bold text-gray-900 truncate block">{destinationTitle}</span>
                </div>
              </div>
            </div>

            {/* Custom Location Search & GPS Button */}
            <div>
              <form onSubmit={handleApplyCustomSearch} className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={customSearchQuery}
                    onChange={(e) => setCustomSearchQuery(e.target.value)}
                    placeholder="Search your workplace, school, or locality..."
                    className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                  />
                </div>
                <button
                  type="submit"
                  className="px-3.5 py-2 bg-slate-900 hover:bg-black text-white text-xs font-bold rounded-xl transition-all shadow-xs cursor-pointer shrink-0"
                >
                  Locate
                </button>
              </form>

              <div className="flex items-center justify-between mt-2 text-[11px]">
                <button
                  onClick={handleUseCurrentLocation}
                  className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <Navigation className="w-3 h-3" />
                  <span>Use My Current GPS Location</span>
                </button>

                {isCustomActive && (
                  <button
                    onClick={() => {
                      setIsCustomActive(false);
                      setCustomSearchQuery('');
                      setCustomDestination(null);
                    }}
                    className="text-gray-500 hover:text-gray-700 underline font-medium cursor-pointer"
                  >
                    Reset to Presets
                  </button>
                )}
              </div>
            </div>

            {/* Category Filter Pills */}
            <div>
              <span className="text-[11px] uppercase tracking-wider font-bold text-gray-400 block mb-2">
                Important Destinations Nearby
              </span>
              <div className="grid grid-cols-4 gap-1.5 p-1 bg-gray-200/60 rounded-xl">
                {[
                  { id: 'all', label: 'All' },
                  { id: 'workplace', label: 'Tech Parks', icon: <Building2 className="w-3 h-3" /> },
                  { id: 'school', label: 'Schools', icon: <GraduationCap className="w-3 h-3" /> },
                  { id: 'transit', label: 'Metro', icon: <Train className="w-3 h-3" /> },
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveCategory(cat.id as any);
                      setIsCustomActive(false);
                    }}
                    className={`py-1.5 px-2 text-[11px] font-bold rounded-lg transition-all flex items-center justify-center gap-1 cursor-pointer ${
                      activeCategory === cat.id && !isCustomActive
                        ? 'bg-white text-slate-900 shadow-xs'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {cat.icon}
                    <span>{cat.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* List of Destination Cards */}
            <div className="space-y-2 overflow-y-auto max-h-[280px] pr-1">
              {filteredPresets.map((preset) => {
                const isSelected = !isCustomActive && selectedPreset.id === preset.id;
                return (
                  <div
                    key={preset.id}
                    onClick={() => {
                      setSelectedPreset(preset);
                      setIsCustomActive(false);
                    }}
                    className={`p-3 rounded-2xl border transition-all cursor-pointer text-left ${
                      isSelected
                        ? 'bg-blue-50/80 border-blue-500 ring-2 ring-blue-500/20 shadow-xs'
                        : 'bg-white border-gray-200/80 hover:border-gray-300 hover:bg-gray-50/80'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                          preset.category === 'workplace' 
                            ? 'bg-blue-100 text-blue-700' 
                            : preset.category === 'school' 
                              ? 'bg-purple-100 text-purple-700'
                              : 'bg-emerald-100 text-emerald-700'
                        }`}>
                          {preset.category === 'workplace' && <Building2 className="w-3.5 h-3.5" />}
                          {preset.category === 'school' && <GraduationCap className="w-3.5 h-3.5" />}
                          {preset.category === 'transit' && <Train className="w-3.5 h-3.5" />}
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-gray-900 line-clamp-1">
                            {preset.name}
                          </h4>
                          <span className="text-[10px] text-gray-500 line-clamp-1">
                            {preset.address}
                          </span>
                        </div>
                      </div>

                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 whitespace-nowrap ${
                        isSelected 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {preset.tag}
                      </span>
                    </div>

                    {preset.highlight && (
                      <p className="text-[10px] text-gray-500 font-medium mt-1.5 pl-9">
                        ★ {preset.highlight}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Doorstep Service Radius CTA */}
          <div className="mt-4 pt-3.5 border-t border-gray-200">
            <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-200 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <Truck className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-black text-emerald-950 block">
                    Free Pickup &amp; Drop Across 8 KM Radius
                  </span>
                  <span className="text-[10px] text-emerald-700 block">
                    We collect &amp; install directly at your home or office!
                  </span>
                </div>
              </div>
              {onBookPickup && (
                <button
                  onClick={onBookPickup}
                  className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-bold rounded-xl transition-all shadow-xs shrink-0 cursor-pointer"
                >
                  Book Pickup
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Travel Mode Selector, Live Map & Route Details (7 cols) */}
        <div className="lg:col-span-7 flex flex-col bg-white">
          
          {/* Multi-Modal Travel Time Comparison Bar */}
          <div className="p-4 bg-slate-100/70 border-b border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                Select Commute Mode &amp; Compare Estimated Times:
              </span>
              {loadingRoute && (
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-blue-600 animate-pulse">
                  <Clock className="w-3 h-3" /> Calculating Route...
                </span>
              )}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {MODES.map((mode) => {
                const isActive = activeTravelMode === mode.key;
                const cached = estimatesCache[mode.key];

                return (
                  <button
                    key={mode.key}
                    onClick={() => setActiveTravelMode(mode.key)}
                    className={`p-3 rounded-2xl border transition-all text-left flex flex-col justify-between cursor-pointer ${
                      isActive
                        ? 'bg-white border-blue-600 ring-2 ring-blue-500/20 shadow-md'
                        : 'bg-white/80 border-gray-200 hover:border-gray-300 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className={`p-1.5 rounded-lg ${isActive ? mode.activeBg + ' text-white' : 'bg-gray-100 text-gray-700'}`}>
                        {mode.icon}
                      </div>
                      <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-md bg-gray-100 text-gray-500">
                        {mode.key === 'DRIVING' ? 'Car/Cab' : mode.key === 'TRANSIT' ? 'BMTC' : mode.key === 'BICYCLING' ? 'Bike' : 'Walk'}
                      </span>
                    </div>

                    <div className="mt-2">
                      <div className="flex items-baseline gap-1">
                        <span className={`text-base font-black ${isActive ? mode.activeText : 'text-gray-900'}`}>
                          {cached ? `${cached.durationMinutes}m` : isActive && routeData ? `${Math.round(routeData.durationMillis / 60000)}m` : '--'}
                        </span>
                        <span className="text-[10px] text-gray-400 font-bold">
                          {cached ? `${cached.distanceKm} km` : isActive && routeData ? `${(routeData.distanceMeters / 1000).toFixed(1)} km` : ''}
                        </span>
                      </div>
                      <span className="text-[10px] text-gray-500 font-medium block truncate">
                        {mode.label}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interactive Google Map Canvas */}
          <div className="relative w-full h-[380px] sm:h-[450px] bg-slate-100">
            <APIProvider apiKey={gmpKey}>
              <Map
                defaultCenter={WORKSHOP_COORDS}
                defaultZoom={13}
                gestureHandling="greedy"
                fullscreenControl={true}
                streetViewControl={false}
                mapTypeControl={false}
                mapId="DEMO_MAP_ID"
                className="w-full h-full"
                internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
              >
                <RoutesRenderer
                  originCoords={originCoords}
                  originTitle={originTitle}
                  destinationCoords={destinationCoords}
                  destinationTitle={destinationTitle}
                  travelMode={activeTravelMode}
                  onRoutesCalculated={handleRoutesCalculated}
                  onError={handleRouteError}
                />
              </Map>
            </APIProvider>

            {/* Error Notification Pill on Map if any */}
            {routeError && (
              <div className="absolute top-4 left-4 right-4 bg-red-900/90 text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-2 backdrop-blur-sm">
                <AlertCircle className="w-4 h-4 text-red-300 shrink-0" />
                <span>{routeError}</span>
              </div>
            )}

            {/* Map Floating Summary Badge */}
            {routeData && (
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-gray-200 flex items-center gap-4 text-xs">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span className="font-bold text-gray-900">
                    {Math.round(routeData.durationMillis / 60000)} mins
                  </span>
                </div>
                <div className="w-px h-4 bg-gray-200" />
                <div className="flex items-center gap-2">
                  <RouteIcon className="w-4 h-4 text-emerald-600" />
                  <span className="font-bold text-gray-900">
                    {(routeData.distanceMeters / 1000).toFixed(1)} km
                  </span>
                </div>
                <div className="w-px h-4 bg-gray-200" />
                <a
                  href={externalMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-blue-600 hover:text-blue-700 underline text-[11px]"
                >
                  Start Turn-by-Turn GPS
                </a>
              </div>
            )}
          </div>

          {/* Quick Route Highlights Footer */}
          <div className="p-4 bg-slate-50 border-t border-gray-200 text-xs text-gray-600 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                Accurate traffic-aware calculations via <strong>Google Maps Routes API</strong>.
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-semibold text-gray-700">Workshop Address:</span>
              <span className="text-gray-500 font-mono text-[11px]">
                Gururaja Layout, Doddanekundi
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
