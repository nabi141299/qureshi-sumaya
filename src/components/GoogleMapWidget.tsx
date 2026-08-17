import React from 'react';
import { MapPin, Navigation, ExternalLink, Phone, Clock, ShieldCheck, Calendar, MessageCircle, CheckCircle2 } from 'lucide-react';

export interface LocationConfig {
  title: string;
  address1: string;
  address2: string;
  coords: {
    lat: number;
    lng: number;
  };
  placeId: string;
  actions: Array<{
    label: string;
    defaultUrl: string;
  }>;
}

export const LOCATOR_CONFIGURATION = {
  locations: [
    {
      title: "ipixel electronics",
      address1: "ipixel electronics",
      address2: "#22, 3rd A Cross Rd, gururaja layout, doddanekundi, Doddanekkundi, Bengaluru, Karnataka 560037, India",
      coords: { lat: 12.969404720579337, lng: 77.69089590489348 },
      placeId: "ChIJT02sErITrjsRZXRtN_BCNqs",
      actions: [
        { label: "Book appointment", defaultUrl: "https://ipixelelectronics.com//?view=appointment-booking" }
      ]
    }
  ],
  mapOptions: {
    center: { lat: 12.969404720579337, lng: 77.69089590489348 },
    fullscreenControl: true,
    mapTypeControl: false,
    streetViewControl: true,
    zoom: 16,
    zoomControl: true,
    maxZoom: 18,
    mapId: ""
  },
  capabilities: { input: false, autocomplete: false, directions: true, distanceMatrix: false, details: true, actions: true }
};

interface GoogleMapWidgetProps {
  title?: string;
  className?: string;
  compact?: boolean;
  onBookAppointment?: () => void;
}

export const GoogleMapWidget: React.FC<GoogleMapWidgetProps> = ({
  title = "Our Google Maps Location & Store Locator",
  className = "",
  compact = false,
  onBookAppointment
}) => {
  const shopName = "ipixel electronics";
  const address = "#22, 3rd A Cross Rd, gururaja layout, doddanekundi, Doddanekkundi, Bengaluru, Karnataka 560037, India";
  const placeId = "ChIJT02sErITrjsRZXRtN_BCNqs";
  const lat = 12.969404720579337;
  const lng = 77.69089590489348;
  
  // Direct Google Maps embed query with coordinates and shop title
  const mapEmbedUrl = `https://maps.google.com/maps?q=${lat},${lng}+(${encodeURIComponent(shopName)})&t=&z=16&ie=UTF8&iwloc=&output=embed`;
  
  // Official Google Maps Place ID and Directions deep links
  const googleMapsPlaceUrl = `https://www.google.com/maps/place/?q=place_id:${placeId}`;
  const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&destination_place_id=${placeId}`;

  return (
    <div className={`bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden ${className}`}>
      {/* Header bar */}
      <div className="p-5 sm:p-6 bg-slate-900 text-white flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-2xl bg-red-500/20 border border-red-500/30 flex items-center justify-center shrink-0">
            <MapPin className="w-5 h-5 text-red-400 fill-red-400/20" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-400">
                Verified Google Business
              </span>
              <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-full border border-amber-400/20">
                ★ 4.9 Rating
              </span>
            </div>
            <h3 className="text-lg font-black tracking-tight text-white mt-0.5">
              {title}
            </h3>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
          {onBookAppointment ? (
            <button
              onClick={onBookAppointment}
              className="flex-1 sm:flex-none px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-md active:scale-95 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </button>
          ) : (
            <a
              href="https://ipixelelectronics.com//?view=appointment-booking"
              className="flex-1 sm:flex-none px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-md active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </a>
          )}
          <a
            href={googleMapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-md active:scale-95"
          >
            <Navigation className="w-3.5 h-3.5 fill-white" />
            <span>Get Directions</span>
          </a>
          <a
            href={googleMapsPlaceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 border border-slate-700 active:scale-95"
          >
            <span>Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Map Iframe Container */}
      <div className="relative w-full bg-slate-100 min-h-[340px] sm:min-h-[420px]">
        <iframe
          title="iPixel Electronics Google Maps Locator"
          src={mapEmbedUrl}
          width="100%"
          height="100%"
          className="absolute inset-0 w-full h-full border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Address & Quick Info Banner */}
      {!compact && (
        <div className="p-5 sm:p-6 bg-slate-50 border-t border-gray-100 grid grid-cols-1 md:grid-cols-3 gap-5 text-xs font-semibold">
          <div className="flex items-start gap-3.5 md:col-span-2">
            <div className="w-9 h-9 rounded-xl bg-white border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
              <MapPin className="w-4 h-4 text-red-500" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider font-bold text-gray-400 block mb-0.5">Workshop Location (Doddanekundi)</span>
              <p className="text-gray-900 font-bold leading-relaxed text-[13px]">
                {address}
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Place ID: {placeId}
                </span>
                <span className="text-[11px] text-gray-500 font-mono">
                  ({lat.toFixed(5)}, {lng.toFixed(5)})
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-2.5 border-t md:border-t-0 md:border-l border-gray-200 pt-3.5 md:pt-0 md:pl-5">
            <div className="flex items-center gap-2 text-gray-700">
              <Clock className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Open Daily: <strong>9:30 AM - 9:00 PM</strong></span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Helpline: <a href="tel:+919513134313" className="font-mono font-bold text-blue-600 hover:underline">+91 95131 34313</a></span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <ShieldCheck className="w-4 h-4 text-purple-600 shrink-0" />
              <span>Doorstep Pickup &amp; Drop (Within 8 KM)</span>
            </div>
            <div className="pt-1 flex items-center gap-2">
              <a
                href="https://wa.me/919513134313?text=Hi%20iPixel%20Electronics%2C%20I%20want%20to%20inquire%20about%20TV%20repair%20and%20service%20location."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 bg-[#25d366] hover:bg-[#20ba56] text-white text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-sm active:scale-95"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white" />
                <span>Chat with Workshop</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
