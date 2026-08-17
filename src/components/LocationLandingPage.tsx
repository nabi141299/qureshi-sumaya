import React, { useEffect, useState } from 'react';
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
  ChevronRight,
  HelpCircle,
  Award,
  Cable,
  Cpu,
  MonitorPlay,
  Star,
  UserCheck,
  BadgeCheck,
  ExternalLink,
  Building2,
  ThumbsUp,
  MessageSquareQuote,
  PenTool
} from 'lucide-react';
import { getLocationBySlug, LOCATIONS_DATA, LocationData, LocationTestimonial } from '../data/locations';
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
  const [showAddReviewModal, setShowAddReviewModal] = useState(false);
  const [newReviewName, setNewReviewName] = useState('');
  const [newReviewArea, setNewReviewArea] = useState('');
  const [newReviewText, setNewReviewText] = useState('');
  const [newReviewRating, setNewReviewRating] = useState(5);
  const [submittedReview, setSubmittedReview] = useState(false);

  // Dynamic document title and JSON-LD Schema injection
  useEffect(() => {
    const originalTitle = document.title;
    document.title = `Expert LED TV Repair & Screen Replacement in ${location.name}, Bangalore | iPixel Electronics`;

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

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewName.trim() || !newReviewText.trim()) return;
    setSubmittedReview(true);
    setTimeout(() => {
      setSubmittedReview(false);
      setShowAddReviewModal(false);
      setNewReviewName('');
      setNewReviewArea('');
      setNewReviewText('');
    }, 2500);
  };

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

      {/* Hyper-Local Citations & Directory Trust Section */}
      <section className="mb-16 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl relative overflow-hidden">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-8">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider">
              <BadgeCheck className="w-4 h-4 text-blue-400" />
              Verified Local Citations &amp; Directory Trust
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Hyper-Local NAP Consistency &amp; Verified Business Badges
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-medium">
              ipixel electronics maintains 100% Name, Address &amp; Phone (NAP) accuracy across top Indian local directories and maps.
            </p>
          </div>

          <a 
            href="https://maps.google.com/maps?cid=12337121828717556837" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-5 py-3 bg-white text-slate-900 font-bold text-xs rounded-xl flex items-center gap-2 hover:bg-slate-100 transition-all shrink-0 shadow-lg"
          >
            <MapPin className="w-4 h-4 text-red-600" />
            <span>Open Google Maps Business Profile</span>
            <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
          </a>
        </div>

        {/* Directory Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-2">
          <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700/80 flex flex-col items-center text-center space-y-2">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs">
              G
            </div>
            <div className="text-xs font-bold text-white">Google Business</div>
            <div className="flex items-center gap-1 text-amber-400 text-xs font-bold">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span>4.9 / 5.0</span>
            </div>
            <span className="text-[10px] text-slate-400 font-mono">Verified CID</span>
          </div>

          <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700/80 flex flex-col items-center text-center space-y-2">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xs">
              JD
            </div>
            <div className="text-xs font-bold text-white">Justdial</div>
            <div className="text-emerald-400 text-[11px] font-bold flex items-center gap-1">
              <BadgeCheck className="w-3.5 h-3.5" />
              Verified Partner
            </div>
            <span className="text-[10px] text-slate-400 font-mono">Top Rated Shop</span>
          </div>

          <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700/80 flex flex-col items-center text-center space-y-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
              S
            </div>
            <div className="text-xs font-bold text-white">Sulekha</div>
            <div className="text-emerald-400 text-[11px] font-bold flex items-center gap-1">
              <BadgeCheck className="w-3.5 h-3.5" />
              Certified Expert
            </div>
            <span className="text-[10px] text-slate-400 font-mono">100% Background Checked</span>
          </div>

          <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700/80 flex flex-col items-center text-center space-y-2">
            <div className="w-10 h-10 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center font-bold text-xs">
              IM
            </div>
            <div className="text-xs font-bold text-white">IndiaMART</div>
            <div className="text-emerald-400 text-[11px] font-bold flex items-center gap-1">
              <BadgeCheck className="w-3.5 h-3.5" />
              Star Supplier
            </div>
            <span className="text-[10px] text-slate-400 font-mono">TrustSEAL Verified</span>
          </div>

          <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700/80 flex flex-col items-center text-center space-y-2 col-span-2 sm:col-span-1">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-xs">
              FB
            </div>
            <div className="text-xs font-bold text-white">Facebook Local</div>
            <div className="text-emerald-400 text-[11px] font-bold flex items-center gap-1">
              <BadgeCheck className="w-3.5 h-3.5" />
              Official Page
            </div>
            <span className="text-[10px] text-slate-400 font-mono">ipixelelectronics</span>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-300 font-medium">
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-blue-400 shrink-0" />
            <span><strong>Shop Address:</strong> #22, 3rd A Cross, Gururaja Layout, Doddanekundi, Bengaluru 560037</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
            <span><strong>Call / WhatsApp:</strong> +91 95131 34313</span>
          </div>
        </div>
      </section>

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

      {/* Neighborhood-Specific Customer Reviews & Owner Responses Section */}
      <section className="mb-16 bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-mono font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-full uppercase tracking-widest inline-block mb-2">
              Neighborhood Reviews
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
              Customer Feedback &amp; Owner Responses in {location.name}
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm font-medium mt-1">
              Verified local resident reviews with explicit neighborhood keywords and official shop replies.
            </p>
          </div>

          <button
            onClick={() => setShowAddReviewModal(true)}
            className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl flex items-center gap-2 transition-all shadow-md active:scale-95 shrink-0"
          >
            <PenTool className="w-4 h-4" />
            <span>Write a Review for {location.name}</span>
          </button>
        </div>

        {/* Reviews Cards List */}
        <div className="space-y-6">
          {location.testimonials.map((test) => (
            <div 
              key={test.id}
              className="p-6 bg-slate-50/80 rounded-2xl border border-gray-200 space-y-4 hover:bg-slate-50 transition-all"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-sm flex items-center justify-center">
                    {test.customerName.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900 flex items-center gap-2">
                      <span>{test.customerName}</span>
                      <span className="text-[10px] font-mono bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full flex items-center gap-1 font-semibold">
                        <UserCheck className="w-3 h-3" />
                        Verified Resident
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 font-medium">
                      {test.subArea} • <span className="text-gray-400">{test.date}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center text-amber-400">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-gray-700 bg-white px-2.5 py-1 rounded-lg border border-gray-200">
                    {test.tvModel}
                  </span>
                </div>
              </div>

              <div className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed bg-white p-4 rounded-xl border border-gray-200/60">
                <MessageSquareQuote className="w-5 h-5 text-blue-500 mb-1 inline-block mr-1 opacity-75" />
                "{test.reviewText}"
              </div>

              {/* Owner Official Response Box */}
              <div className="p-4 bg-blue-50/70 rounded-xl border border-blue-200/70 space-y-1.5 ml-2 sm:ml-6">
                <div className="flex items-center gap-2 text-xs font-bold text-blue-900">
                  <BadgeCheck className="w-4 h-4 text-blue-600" />
                  <span>Official Response from iPixel Electronics Owner</span>
                </div>
                <p className="text-xs text-blue-800 font-medium leading-relaxed">
                  "{test.ownerResponse}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Review Modal Form */}
      {showAddReviewModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl space-y-5 relative">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900">Write a Review for {location.name}</h3>
                <p className="text-xs text-gray-500">Share your TV repair experience with nearby neighbors</p>
              </div>
              <button 
                onClick={() => setShowAddReviewModal(false)}
                className="text-gray-400 hover:text-black font-bold text-sm p-1"
              >
                ✕
              </button>
            </div>

            {submittedReview ? (
              <div className="p-6 bg-emerald-50 text-emerald-800 rounded-2xl border border-emerald-200 text-center space-y-2">
                <ThumbsUp className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-base">Thank You for Your Review!</h4>
                <p className="text-xs font-medium">Your feedback with neighborhood details has been recorded and will appear shortly with owner response.</p>
              </div>
            ) : (
              <form onSubmit={handleReviewSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={newReviewName}
                    onChange={(e) => setNewReviewName(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Sub-Neighborhood / Landmark</label>
                  <input
                    type="text"
                    placeholder={`e.g. Near ${location.landmarks[0] || location.name}`}
                    value={newReviewArea}
                    onChange={(e) => setNewReviewArea(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Star Rating</label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setNewReviewRating(star)}
                        className="p-1 text-amber-400 hover:scale-110 transition-transform"
                      >
                        <Star className={`w-6 h-6 ${star <= newReviewRating ? 'fill-amber-400' : 'text-gray-300'}`} />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Your Review</label>
                  <textarea
                    required
                    rows={3}
                    placeholder={`Describe your TV repair, panel replacement, or wall mounting experience in ${location.name}...`}
                    value={newReviewText}
                    onChange={(e) => setNewReviewText(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="flex items-center justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowAddReviewModal(false)}
                    className="px-4 py-2.5 text-xs font-bold text-gray-600 hover:bg-gray-100 rounded-xl"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md"
                  >
                    Submit Local Review
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Multi-Location Switcher Grid for 20 Active Areas */}
      <section className="mb-16 bg-slate-50 rounded-3xl p-6 sm:p-8 border border-gray-200/80">
        <div className="mb-6">
          <span className="text-xs font-mono font-bold text-purple-600 bg-purple-50 px-3 py-1 rounded-full uppercase tracking-widest inline-block mb-2">
            20 Active Service Areas
          </span>
          <h2 className="text-2xl font-black text-gray-900 tracking-tight">
            TV Repair Service Locations Across 8 km Radius
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm font-medium mt-1">
            Click any neighborhood below to view dynamic local service highlights, doorstep delivery speed, and technician availability.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
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
                className={`p-3 rounded-2xl text-left transition-all border flex items-center justify-between gap-2 ${
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
                <MapPin className={`w-3.5 h-3.5 shrink-0 ${isCurrent ? 'text-red-400 fill-red-400' : 'text-gray-400'}`} />
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

        <GoogleMapWidget 
          title={`Doddanekundi Main Workshop Serving ${location.name}`} 
          onBookAppointment={() => setView('appointment-booking')} 
        />
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
