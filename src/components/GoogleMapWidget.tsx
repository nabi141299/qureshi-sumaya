import React from 'react';
import { MapPin, Navigation, ExternalLink, Phone, Clock, ShieldCheck } from 'lucide-react';

interface GoogleMapWidgetProps {
  title?: string;
  className?: string;
  compact?: boolean;
}

export const GoogleMapWidget: React.FC<GoogleMapWidgetProps> = ({
  title = "Our Google Maps Location",
  className = "",
  compact = false
}) => {
  const shopName = "iPixel Electronics";
  const address = "ipixel electronics, #22, 3rd A Cross Rd, gururaja layout, doddanekundi, Doddanekkundi, Bengaluru, Karnataka 560037";
  const encodedAddress = encodeURIComponent("ipixel electronics 3rd A Cross Rd doddanekundi Bengaluru Karnataka 560037");
  
  // Standard embed query for Google Maps
  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  
  const googleMapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
  const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;

  return (
    <div className={`bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden ${className}`}>
      {/* Header bar */}
      <div className="p-5 sm:p-6 bg-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-red-500/20 border border-red-500/30 flex items-center justify-center shrink-0">
            <MapPin className="w-5 h-5 text-red-400 fill-red-400/20" />
          </div>
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-400 block">
              Verified Business Location
            </span>
            <h3 className="text-lg font-black tracking-tight text-white">
              {title}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
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
            href={googleMapsSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 border border-slate-700 active:scale-95"
          >
            <span>Open Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Map Iframe Container */}
      <div className="relative w-full bg-slate-100 min-h-[320px] sm:min-h-[400px]">
        <iframe
          title="iPixel Electronics Google Maps Location"
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
        <div className="p-5 sm:p-6 bg-slate-50 border-t border-gray-100 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-semibold">
          <div className="flex items-start gap-3 md:col-span-2">
            <div className="w-8 h-8 rounded-xl bg-white border border-gray-200 flex items-center justify-center shrink-0 mt-0.5">
              <MapPin className="w-4 h-4 text-red-500" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider font-bold text-gray-400 block mb-0.5">Store Address</span>
              <p className="text-gray-900 font-bold leading-relaxed">
                {address}
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-2 border-t md:border-t-0 md:border-l border-gray-200 pt-3 md:pt-0 md:pl-4">
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
              <span>Doorstep Pickup &amp; Drop Available</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
