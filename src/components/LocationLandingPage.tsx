import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Tv, 
  Layers, 
  MessageCircle, 
  Phone, 
  ShieldCheck, 
  Zap, 
  MapPin, 
  Truck, 
  Clock, 
  CheckCircle2, 
  AlertTriangle,
  ChevronRight,
  HelpCircle,
  Award,
  Navigation,
  Sparkles,
  Cable,
  Cpu,
  MonitorPlay
} from 'lucide-react';
import { getLocationBySlug, LOCATIONS_DATA, LocationData } from '../data/locations';
import { GoogleMapWidget } from './GoogleMapWidget';

interface LocationLandingPageProps {
  locationSlug?: string;
  setView: (view: any) => void;
  onSelectLocation?: (slug: string) => void;
}

export const LocationLandingPage: React.FC<LocationLandingPageProps> = ({ 
  locationSlug, 
  setView,
  onSelectLocation 
}) => {
  const location: LocationData = getLocationBySlug(locationSlug);

  // Dynamic document title and JSON-LD Schema injection
  useEffect(() => {
    // 1. Update Document Title
    const originalTitle = document.title;
    document.title = `Expert LED TV Repair & Screen Replacement in ${location.name}, Bangalore | iPixel Electronics`;

    // 2. Inject Localized Schema.org Structured Data
    const scriptId = 'schema-org-location-jsonld';
    let scriptElem = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (!scriptElem) {
      scriptElem = document.createElement('script');
      scriptElem.id = scriptId;
      scriptElem.type = 'application/ld+json';
      document.head.appendChild(scriptElem);
    }

    scriptElem.textContent = JSON.stringify(location.schemaData, null, 2);

    return () => {
      document.title = originalTitle;
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [location]);

  const whatsappMessage = encodeURIComponent(
    `Hi iPixel Electronics! I need TV repair service in ${location.name}. My TV model/issue is:`
  );

  return (
    <motion.main
      key={`location-${location.slug}`}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12"
    >
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-gray-500 font-medium mb-8 overflow-x-auto pb-2">
        <button 
          onClick={() => setView('home')} 
          className="hover:text-black transition-colors shrink-0"
        >
          Home
        </button>
        <ChevronRight className="w-3.5 h-3.5 shrink-0 text-gray-400" />
        <span className="text-gray-400 shrink-0">Service Areas</span>
        <ChevronRight className="w-3.5 h-3.5 shrink-0 text-gray-400" />
        <span className="text-black font-bold shrink-0 bg-blue-50 text-blue-700 px-2.5 py-1 rounded-md">
          {location.name}
        </span>
      </nav>

      {/* Top Banner Call & WhatsApp Action Header */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 mb-10 border border-slate-800 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-emerald-500/15 border border-emerald-500/30 px-3 py-1 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
                Bangalore Doorstep Service • Pincode {location.pincode}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Expert TV Repair &amp; Screen Replacement in <span className="text-blue-400 underline decoration-blue-500/40">{location.name}</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed">
              {location.tagline}. Serving <strong className="text-white">{location.landmarks.join(', ')}</strong> with fast doorstep technicians in {location.name}, nominal pick-up &amp; drop fee, and 100% genuine replacement panels backed by a 180-day warranty.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-1 text-xs text-slate-300 font-semibold">
              <span className="flex items-center gap-1.5 bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">
                <Clock className="w-4 h-4 text-blue-400" />
                {location.doorstepTime}
              </span>
              <span className="flex items-center gap-1.5 bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">
                <Truck className="w-4 h-4 text-emerald-400" />
                Nominal Pick-up &amp; Drop Fee
              </span>
              <span className="flex items-center gap-1.5 bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">
                <ShieldCheck className="w-4 h-4 text-purple-400" />
                180-Day Written Warranty
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full sm:w-auto shrink-0">
            <a
              href="tel:+919513134313"
              className="px-6 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm rounded-2xl flex items-center justify-center gap-2.5 transition-all shadow-xl shadow-blue-600/30 active:scale-95"
            >
              <Phone className="w-4 h-4 fill-white text-blue-600" />
              <span>Call +91 95131 34313</span>
            </a>
            <a
              href={`https://wa.me/919513134313?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 bg-[#25d366] hover:bg-[#20bd5a] text-white font-bold text-sm rounded-2xl flex items-center justify-center gap-2.5 transition-all shadow-xl shadow-green-500/20 active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-white text-[#25d366]" />
              <span>WhatsApp {location.name} Tech</span>
            </a>
            <button
              onClick={() => setView('appointment-booking')}
              className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs rounded-2xl flex items-center justify-center gap-2 border border-slate-700 transition-all active:scale-95"
            >
              <Zap className="w-4 h-4 text-amber-400" />
              <span>Book Appointment Online</span>
            </button>
          </div>
        </div>
      </div>

      {/* Highlights Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
        {location.highlights.map((highlight, idx) => (
          <div 
            key={idx} 
            className="p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-3"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm">
              0{idx + 1}
            </div>
            <p className="text-xs font-bold text-gray-800 leading-relaxed">
              {highlight}
            </p>
            <div className="flex items-center gap-1.5 text-[11px] font-bold text-blue-600">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Verified Service</span>
            </div>
          </div>
        ))}
      </div>

      {/* Common TV Problems Fixed in Location */}
      <section className="mb-16">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-widest inline-block mb-2">
              Common TV Issues
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
              TV Repairs Handled Daily in {location.name}
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm font-medium mt-1">
              Our technicians carry advanced diagnostic toolkits directly to your doorstep.
            </p>
          </div>

          <a
            href={`https://wa.me/919513134313?text=${encodeURIComponent(`Hi iPixel! I need a quote for my TV issue in ${location.name}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 bg-black text-white text-xs font-bold rounded-xl flex items-center gap-2 hover:bg-gray-800 transition-all shrink-0"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400 fill-emerald-400" />
            <span>Get Instant WhatsApp Diagnosis</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm space-y-3 hover:border-blue-200 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-gray-900">Cracked Screen Panel Replacement in {location.name}</h3>
            <p className="text-xs text-gray-500 font-medium leading-relaxed">
              Accidental physical impact or internal glass fracture in {location.name} homes. We replace display panels with 100% original OEM screens at nominal cost.
            </p>
            <div className="pt-2 border-t border-gray-50 flex items-center justify-between text-xs font-bold text-blue-600">
              <span>Original Panel Replacement</span>
              <span>180-Day Warranty</span>
            </div>
          </div>

          <div className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm space-y-3 hover:border-blue-200 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <MonitorPlay className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-gray-900">Black Screen &amp; Backlight Repair in {location.name}</h3>
            <p className="text-xs text-gray-500 font-medium leading-relaxed">
              TV turns on, audio plays fine, but screen remains dark in {location.name}. We replace full LED backlight strips with high-lumens original LED bars.
            </p>
            <div className="pt-2 border-t border-gray-50 flex items-center justify-between text-xs font-bold text-amber-600">
              <span>Same-Day Backlight Fix</span>
              <span>Long-Life LEDs</span>
            </div>
          </div>

          <div className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm space-y-3 hover:border-blue-200 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <Cable className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-gray-900">Vertical / Horizontal Line Bonding in {location.name}</h3>
            <p className="text-xs text-gray-500 font-medium leading-relaxed">
              Flickering lines or double image issues in {location.name}. Repaired using our high-precision laser COF bonding machine at a fraction of panel cost.
            </p>
            <div className="pt-2 border-t border-gray-50 flex items-center justify-between text-xs font-bold text-purple-600">
              <span>Laser COF Flex Bonding</span>
              <span>Chip-Level Repair</span>
            </div>
          </div>

          <div className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm space-y-3 hover:border-blue-200 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-gray-900">Motherboard &amp; Power Board Fix in {location.name}</h3>
            <p className="text-xs text-gray-500 font-medium leading-relaxed">
              TV stuck on logo or red light blinking in {location.name}. We fix motherboards and power boards at component level with authentic spares.
            </p>
            <div className="pt-2 border-t border-gray-50 flex items-center justify-between text-xs font-bold text-blue-600">
              <span>Original PCB Spares</span>
              <span>Component Testing</span>
            </div>
          </div>

          <div className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm space-y-3 hover:border-blue-200 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Tv className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-gray-900">Wall Mounting &amp; Installation in {location.name}</h3>
            <p className="text-xs text-gray-500 font-medium leading-relaxed">
              Heavy-duty fixed or swivel wall brackets for 32" to 85" Smart TVs. Safe installation on concrete or brick walls in {location.name} apartments.
            </p>
            <div className="pt-2 border-t border-gray-50 flex items-center justify-between text-xs font-bold text-emerald-600">
              <span>Heavy Duty Brackets</span>
              <span>Clean Wiring</span>
            </div>
          </div>

          <div className="p-6 bg-slate-900 text-white rounded-3xl border border-slate-800 flex flex-col justify-between space-y-4">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-400 block mb-1">
                Sub-Locations Served in {location.name}
              </span>
              <h3 className="text-lg font-bold text-white mb-2">Nearby Neighborhoods Covered</h3>
              <div className="flex flex-wrap gap-1.5">
                {location.subLocations.map((sub, i) => (
                  <span key={i} className="text-xs font-medium bg-slate-800 text-slate-300 px-2.5 py-1 rounded-lg border border-slate-700">
                    {sub}
                  </span>
                ))}
              </div>
            </div>
            <a
              href="tel:+919513134313"
              className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-all shadow-md active:scale-95"
            >
              <Phone className="w-3.5 h-3.5 fill-white text-blue-600" />
              <span>Request Doorstep Visit Now</span>
            </a>
          </div>
        </div>
      </section>

      {/* Multi-Location Switcher Grid */}
      <section className="mb-16 bg-slate-50 rounded-3xl p-6 sm:p-8 border border-gray-200/80">
        <div className="mb-6">
          <span className="text-xs font-mono font-bold text-purple-600 bg-purple-50 px-3 py-1 rounded-full uppercase tracking-widest inline-block mb-2">
            Multi-Location Coverage
          </span>
          <h2 className="text-2xl font-black text-gray-900 tracking-tight">
            TV Repair Service Locations Across Bangalore
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm font-medium mt-1">
            Click any area below to view local service highlights, doorstep delivery speed, and specific technicians.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {Object.values(LOCATIONS_DATA).map((loc) => {
            const isCurrent = loc.slug === location.slug;
            return (
              <button
                key={loc.slug}
                onClick={() => {
                  if (onSelectLocation) {
                    onSelectLocation(loc.slug);
                  } else {
                    setView('location');
                  }
                }}
                className={`p-3.5 rounded-2xl text-left transition-all border flex items-center justify-between gap-2 ${
                  isCurrent 
                    ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-blue-500/50' 
                    : 'bg-white text-gray-800 border-gray-200 hover:border-gray-400 hover:bg-gray-50'
                }`}
              >
                <div className="truncate">
                  <div className="text-xs font-bold truncate">{loc.name}</div>
                  <div className={`text-[10px] truncate ${isCurrent ? 'text-slate-300 font-medium' : 'text-gray-500'}`}>
                    Pincode {loc.pincode}
                  </div>
                </div>
                <MapPin className={`w-4 h-4 shrink-0 ${isCurrent ? 'text-red-400 fill-red-400' : 'text-gray-400'}`} />
              </button>
            );
          })}
        </div>
      </section>

      {/* Embedded Store Map & Directions Widget */}
      <section className="mb-16">
        <div className="mb-6">
          <span className="text-xs font-mono font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-widest inline-block mb-2">
            Store Hub &amp; Google Map
          </span>
          <h2 className="text-2xl font-black text-gray-900 tracking-tight">
            Main Workshop Location Serving {location.name}
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm font-medium mt-1">
            Located in Doddanekundi, Bengaluru for fast dispatch to {location.name} ({location.doorstepTime}).
          </p>
        </div>

        <GoogleMapWidget title={`Doddanekundi Main Workshop Serving ${location.name}`} />
      </section>

      {/* Localized FAQs */}
      <section className="mb-12 bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm">
        <div className="mb-6">
          <h2 className="text-2xl font-black text-gray-900 tracking-tight flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-blue-600" />
            Frequently Asked Questions - {location.name} TV Repair
          </h2>
        </div>

        <div className="space-y-4">
          <div className="p-4 bg-slate-50 rounded-2xl border border-gray-200/60">
            <h3 className="text-sm font-bold text-gray-900 mb-1">
              How quickly can a technician reach my home in {location.name}?
            </h3>
            <p className="text-xs text-gray-600 font-medium leading-relaxed">
              Our technicians operate directly out of our Doddanekundi hub. Expected arrival time for {location.name} is <strong>{location.doorstepTime}</strong>.
            </p>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-gray-200/60">
            <h3 className="text-sm font-bold text-gray-900 mb-1">
              Do you provide pick-up and drop for large 55"+ TVs in {location.name}?
            </h3>
            <p className="text-xs text-gray-600 font-medium leading-relaxed">
              Yes! For complex panel replacement or laser COF bonding that requires clean-room equipment, we offer a safe doorstep pick-up and drop-off facility across {location.name} for a nominal fee.
            </p>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-gray-200/60">
            <h3 className="text-sm font-bold text-gray-900 mb-1">
              What warranty do I get on TV repairs in {location.name}?
            </h3>
            <p className="text-xs text-gray-600 font-medium leading-relaxed">
              All original replacement panels, LED backlight bars, and motherboard repairs come with an official <strong>180-day written warranty</strong>.
            </p>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-gray-200/60">
            <h3 className="text-sm font-bold text-gray-900 mb-1">
              Can I get an upfront price quote before booking?
            </h3>
            <p className="text-xs text-gray-600 font-medium leading-relaxed">
              Yes! Simply send us a video or photo of your TV display issue on WhatsApp (+91 95131 34313), and our chief technician will provide an instant estimate.
            </p>
          </div>
        </div>
      </section>
    </motion.main>
  );
};
