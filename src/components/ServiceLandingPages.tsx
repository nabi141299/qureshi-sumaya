import React from 'react';
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
  Maximize, 
  AlertTriangle,
  Award,
  Clock,
  HelpCircle
} from 'lucide-react';

interface ServicePageProps {
  setView: (view: any) => void;
}

// ----------------------------------------------------
// PAGE 1: TV Screen Repair & Panel Replacement
// ----------------------------------------------------
export const ScreenRepairPage: React.FC<ServicePageProps> = ({ setView }) => {
  return (
    <motion.main 
      key="screen-repair"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      className="max-w-6xl mx-auto px-4 sm:px-6 py-12"
    >
      {/* Back Button & Navigation */}
      <div className="flex items-center gap-4 mb-10">
        <button 
          onClick={() => setView('home')}
          className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 hover:text-black hover:bg-gray-100 transition-all active:scale-95"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <span className="text-xs font-mono text-gray-400 bg-gray-100 px-3 py-1 rounded-full uppercase tracking-widest">
          Premium Repair Service
        </span>
      </div>

      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
        <div className="lg:col-span-7 space-y-6">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-gray-900 leading-none">
            LED TV Screen Replacement &amp; Original Panel Repair Bangalore
          </h1>
          <p className="text-lg text-gray-600 font-medium leading-relaxed">
            Fast, professional, and authorized-grade services for cracked, blinking, or lined screens. We utilize 100% genuine replacement panels back by full certified warranties.
          </p>
          
          <div className="p-4 bg-orange-50 border border-orange-100 rounded-2xl flex gap-3 text-orange-800 text-sm">
            <AlertTriangle className="w-5 h-5 shrink-0 text-orange-600 mt-0.5" />
            <div>
              <p className="font-bold">Affordable LCD Screen Crack Repair Cost</p>
              <p className="text-xs text-orange-700 font-medium mt-0.5">
                We offer the most transparent, nominal TV screen replacement charges in Bangalore. Skip intermediate dealer markups and get direct technician rates!
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => setView('appointment-booking')}
              className="px-8 py-4 bg-black text-white rounded-2xl font-bold hover:bg-gray-900 transition-all shadow-xl shadow-black/10 flex items-center gap-2 active:scale-95"
            >
              <Zap className="w-5 h-5" />
              Book Screen Repair
            </button>
            <a 
              href="https://wa.me/919513134313?text=Hi%20iPixel%20Electronics!%20I%20need%20a%20price%20quote%20for%20my%20TV%20Screen%20Replacement"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#25d366] text-white rounded-2xl font-bold hover:bg-[#22c35e] transition-all shadow-lg shadow-green-500/10 flex items-center gap-2 active:scale-95"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              Get Instant Price Estimate
            </a>
          </div>
        </div>
        
        <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-[2.5rem] border border-gray-100 shadow-[0_15px_50px_rgba(0,0,0,0.03)] space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 leading-tight">Authentic OEM Panels</h3>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-wider font-mono">Genuine Parts Only</p>
            </div>
          </div>

          <div className="space-y-4 pt-2 border-t border-gray-50">
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-green-50 text-[#16a34a] flex items-center justify-center shrink-0 mt-0.5 font-bold">✓</div>
              <p className="text-sm font-medium text-gray-600"><strong>Flawless Resolution:</strong> Replacement panels preserve original color gamuts, viewing angles, and refresh rates.</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-green-50 text-[#16a34a] flex items-center justify-center shrink-0 mt-0.5 font-bold">✓</div>
              <p className="text-sm font-medium text-gray-600"><strong>Anti-Glare Coatings:</strong> High reliability against pixel burns and standard atmospheric degradation.</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-green-50 text-[#16a34a] flex items-center justify-center shrink-0 mt-0.5 font-bold">✓</div>
              <p className="text-sm font-medium text-gray-600"><strong>Certified Warranty:</strong> Rest easy with up to 3 to 12 months comprehensive backing on screen panels.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Screen Issue Deep-dive Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-black text-gray-900 mb-8 tracking-tight">
          Common Screen Defects We Fix Safely
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-gray-50 shadow-sm hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-4">
              <Maximize className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Cracked or Smashed Glass</h3>
            <p className="text-sm text-gray-500 font-medium leading-relaxed">
              Caused by external force impacts. Requires a complete premium glass and outer layer panel rebuild using high-grade TV panel machinery.
            </p>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-gray-50 shadow-sm hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
              <Tv className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Vertical / Horizontal Lines</h3>
            <p className="text-sm text-gray-500 font-medium leading-relaxed">
              Typically represents a failure of critical driver ICs or gate COF (Chip on Film) bonding. We repair these using high-precision laser bonding technology.
            </p>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-gray-50 shadow-sm hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-4">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">No Display / Blinking Light</h3>
            <p className="text-sm text-gray-500 font-medium leading-relaxed">
              Sound is audible but screen stays completely black. Usually caused by failed LED backlights or internal power inverter board failure.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Matrix */}
      <section className="bg-white rounded-[2.5rem] border border-gray-100 p-8 sm:p-12 shadow-[0_15px_50px_rgba(0,0,0,0.02)] mb-16">
        <div className="max-w-2xl">
          <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full mb-3 inline-block">Transparent Charges</span>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight leading-none mb-4">
            Estimated Panel Replacement &amp; Repair Charges
          </h2>
          <p className="text-sm text-gray-500 font-medium mb-8">
            Please find typical charges for high quality screen restorations. Charges are always finalized after a standard physical review of your TV's exact panel model.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100 font-mono text-xs text-gray-400 uppercase tracking-wider">
                <th className="pb-4 pt-1 font-bold">TV Size &amp; Type</th>
                <th className="pb-4 pt-1 font-bold">Standard Bonding Repair</th>
                <th className="pb-4 pt-1 font-bold">Original Panel Replacement</th>
                <th className="pb-4 pt-1 font-bold">Turnaround</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 text-sm text-gray-600">
              <tr>
                <td className="py-4 font-bold text-gray-900">32-inch LED / LCD TV</td>
                <td className="py-4 font-medium">₹1,200 - ₹2,200</td>
                <td className="py-4 font-medium text-blue-600 font-semibold">Get Direct Invoice Rates</td>
                <td className="py-4 font-medium text-gray-400">Same Day Repair</td>
              </tr>
              <tr>
                <td className="py-4 font-bold text-gray-900">43-inch LED / Smart TV</td>
                <td className="py-4 font-medium">₹1,800 - ₹2,900</td>
                <td className="py-4 font-medium text-blue-600 font-semibold">Get Direct Invoice Rates</td>
                <td className="py-4 font-medium text-gray-400 font-semibold">24-48 Hours Max</td>
              </tr>
              <tr>
                <td className="py-4 font-bold text-gray-900">55-inch 4K UHD Smart TV</td>
                <td className="py-4 font-medium">₹2,800 - ₹4,500</td>
                <td className="py-4 font-medium text-blue-600 font-semibold">Get Direct Invoice Rates</td>
                <td className="py-4 font-medium text-gray-400 font-semibold">24-48 Hours Max</td>
              </tr>
              <tr>
                <td className="py-4 font-bold text-gray-900">65-inch &amp; Above High-End QLED / OLED</td>
                <td className="py-4 font-medium">₹3,900 - ₹7,000</td>
                <td className="py-4 font-medium text-blue-600 font-semibold">Request Custom Quote</td>
                <td className="py-4 font-medium text-gray-400">Specialist Order</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400 font-medium">
            *All prices are exclusive of brand part procurement fees. For exact pricing, share your TV backend label photo on WhatsApp.
          </p>
          <a 
            href="tel:+919513134313" 
            className="flex items-center gap-2 text-sm font-bold text-black hover:underline"
          >
            <Phone className="w-4 h-4" />
            Talk directly to TV Specialist Now
          </a>
        </div>
      </section>

      {/* Hassle-Free Doorstep Drop alert */}
      <div className="p-8 bg-blue-50 border border-blue-100 rounded-3xl flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between mb-12">
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-blue-900">Doorstep TV Pick &amp; Drop Facility Bangalore</h3>
          <p className="text-sm text-blue-700 font-medium">
            Can't drop off the TV yourself? We provide reliable, secure pickup and direct logistics with nominal charges across all prime areas.
          </p>
        </div>
        <button 
          onClick={() => setView('appointment-booking')}
          className="px-6 py-3.5 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all font-mono text-xs uppercase tracking-wider shrink-0"
        >
          Book Pickup Now
        </button>
      </div>
    </motion.main>
  );
};

// ----------------------------------------------------
// PAGE 2: TV Installation & Wall Mounting
// ----------------------------------------------------
export const TvInstallationPage: React.FC<ServicePageProps> = ({ setView }) => {
  return (
    <motion.main 
      key="tv-installation"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      className="max-w-6xl mx-auto px-4 sm:px-6 py-12"
    >
      {/* Back Button & Navigation */}
      <div className="flex items-center gap-4 mb-10">
        <button 
          onClick={() => setView('home')}
          className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 hover:text-black hover:bg-gray-100 transition-all active:scale-95"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <span className="text-xs font-mono text-gray-400 bg-gray-100 px-3 py-1 rounded-full uppercase tracking-widest">
          Mounting &amp; Setup Specialists
        </span>
      </div>

      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
        <div className="lg:col-span-7 space-y-6">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-gray-900 leading-none">
            Expert LED TV Installation &amp; Wall Mounting Services Bangalore
          </h1>
          <p className="text-lg text-gray-600 font-medium leading-relaxed">
            Searching for reliable &quot;TV wall mount service near me&quot;? Get perfectly aligned, heavy-duty brackets installed by certified professionals for any screen size or drywall type.
          </p>

          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => setView('appointment-booking')}
              className="px-8 py-4 bg-black text-white rounded-2xl font-bold hover:bg-gray-900 transition-all shadow-xl shadow-black/10 flex items-center gap-2 active:scale-95"
            >
              <Clock className="w-5 h-5" />
              Book Installation Now
            </button>
            <a 
              href="https://wa.me/919513134313?text=Hi%20iPixel%20Electronics!%20I%20need%20to%20get%20a%20new%20TV%20mounted%20and%20installed."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#25d366] text-white rounded-2xl font-bold hover:bg-[#22c35e] transition-all shadow-lg shadow-green-500/10 flex items-center gap-2 active:scale-95"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              WhatsApp our Technician
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-[2.5rem] border border-gray-100 shadow-[0_15px_50px_rgba(0,0,0,0.03)] space-y-6">
          <h3 className="text-xl font-bold text-gray-900">Why Use iPixel Mounting?</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✓</span>
              <div>
                <p className="font-bold text-sm text-gray-900">Professional Spirit Level Alignment</p>
                <p className="text-xs text-gray-500 font-medium">To avoid even micro-tilt lines, ensuring optimal viewing comfort.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✓</span>
              <div>
                <p className="font-bold text-sm text-gray-900">Premium Grade Heavy Brackets</p>
                <p className="text-xs text-gray-500 font-medium">Supporting up to 80kg load limits with robust high-tensile steel anchors.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✓</span>
              <div>
                <p className="font-bold text-sm text-gray-900">Cable Management Guidance</p>
                <p className="text-xs text-gray-500 font-medium">Ensures beautifully concealed wires for a minimal, clean luxury aesthetic.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bracket selection matrix */}
      <h2 className="text-2xl font-black text-gray-900 tracking-tight mb-8">
        We Offer Mounting for All Bracket Configurations
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
          <div className="w-12 h-12 rounded-2xl bg-gray-50 text-gray-800 flex items-center justify-center mb-6">
            <Maximize className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold mb-2">Fixed Flush Wall Mounts</h3>
          <p className="text-sm text-gray-500 font-medium mb-4 leading-relaxed">
            Mounts your TV very securely and matches closely to the wall. Extremely clean layout, ideal for home theaters or media panels where direct line of sight is preferred.
          </p>
          <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50/50 px-2 py-1 rounded">Best for Ultra-Thin screens</span>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
          <div className="w-12 h-12 rounded-2xl bg-gray-50 text-gray-800 flex items-center justify-center mb-6">
            <Tv className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold mb-2">Tilt Action Brackets</h3>
          <p className="text-sm text-gray-500 font-medium mb-4 leading-relaxed">
            Allows smooth vertical angle adjustments up to 15 degrees. Excellent for mounting TVs at a higher elevation (e.g. above fireplace mantels) to eliminate painful neck strain.
          </p>
          <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50/50 px-2 py-1 rounded">Prevents ceiling light reflections &amp; glare</span>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
          <div className="w-12 h-12 rounded-2xl bg-gray-50 text-gray-800 flex items-center justify-center mb-6">
            <Layers className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold mb-2">Double Arm Full-Motion Swivel</h3>
          <p className="text-sm text-gray-500 font-medium mb-4 leading-relaxed">
            Premium articulating arm allows extending, turning, pivoting, and rotating. Allows you to view your TV perfectly across different angles in living and dining halls.
          </p>
          <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50/50 px-2 py-1 rounded">Flexible rotation across long corridors</span>
        </div>
      </div>

      {/* Installation FAQ */}
      <section className="bg-gray-50 py-12 px-8 sm:px-12 rounded-[2.5rem] mb-12 border border-gray-100">
        <h2 className="text-2xl font-black text-gray-900 tracking-tight mb-8">Mounting &amp; Setting FAQ</h2>
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-base text-gray-900 mb-1">What and where are your typical television installation service regions?</h4>
            <p className="text-sm text-gray-500 font-medium leading-relaxed">
              We service all areas of Bangalore, including Doddanakundi, Marathahalli, Whitefield, Indiranagar, HSR Layout, Koramangala, Bellandur, and Outer Ring Road. Same-day technician visits can be booked online!
            </p>
          </div>
          <div className="pt-4 border-t border-gray-200/60">
            <h4 className="font-bold text-base text-gray-900 mb-1">Do we need to buy screw anchors and heavy steel mounting brackets prior?</h4>
            <p className="text-sm text-gray-500 font-medium leading-relaxed">
              No. Our expert team brings high quality durable metal mounts, spirit indicators, heavy wall plugs, and specialized drills suitable for solid concrete walls, bricks, or custom wood frameworks.
            </p>
          </div>
        </div>
      </section>
    </motion.main>
  );
};

// ----------------------------------------------------
// PAGE 3: Brand Landing Pages
// ----------------------------------------------------
interface BrandPageProps extends ServicePageProps {
  brand: 'sony' | 'samsung' | 'lg';
}

export const BrandRepairPage: React.FC<BrandPageProps> = ({ setView, brand }) => {
  const brandConfig = {
    sony: {
      name: 'Sony Bravia',
      title: 'Sony TV Repair & Original Bravia Screen Service Bangalore',
      keyword: 'Premium Sony TV panel replacement in Bangalore',
      desc: 'Expert technical diagnostics and chip-level screen restoring services for Sony Bravia LED, UHD, 4K, and high-performance OLED series TVs.',
      techHighlights: [
        'Precise T-CON Board Refurbishing on Bravia Engines',
        'OEM-Grade Sony Triluminos Panel Re-bonding',
        'Troubleshooting Bravia Red Light Blinking Codes (2x, 5x, 6x, etc.)',
        'Optical LED Backlight repair for HDR Brightness preservation'
      ],
      whatsappText: "I'm%20facing%20issues%20with%20my%20Sony%20Bravia%20TV%20and%20want%20to%20request%20diagnostic%20assistance"
    },
    samsung: {
      name: 'Samsung',
      title: 'Samsung TV Screen Replacement & Smart LED TV Repair',
      keyword: 'Authorized-grade Samsung TV screen crack repair Bangalore',
      desc: 'Complete original screen panel assembly, backlight restorations, and power board debugging for Samsung Crystal UHD, QLED, Neo QLED, and Curved TV models.',
      techHighlights: [
        'Crystal UHD Gate Driver and COF Repair',
        'QLED Quantum Dot Direct Screen Re-bonding',
        'One-Connect Box connection repairing and troubleshooting',
        'Samsung Smart Hub Bootloop & Tizen OS Reflashing'
      ],
      whatsappText: "I'm%20facing%20issues%20with%20my%20Samsung%20Smart%20TV%20and%20want%20to%20request%20diagnostic%20assistance"
    },
    lg: {
      name: 'LG LED',
      title: 'LG LED TV Repair Bangalore — NanoCell & OLED Screen Service',
      keyword: 'Original LG LED TV screen replacement Bangalore',
      desc: 'High-end IPS screen panel repair, T-CON, mainboard replacements, and backlight servicing for LG Smart LED, NanoCell, QNED, and premium OLED panels.',
      techHighlights: [
        'OLED Panel Burn-In Diagnostics & Reconditioning',
        'LG IPS Panel original factory screen bonding',
        'WebOS loading error and bootloop board level repairs',
        'LG ThinQ AI logic board repair & chip replacing'
      ],
      whatsappText: "I'm%20facing%20issues%20with%20my%20LG%20LED%20TV%20and%20want%20to%20request%20diagnostic%20assistance"
    }
  }[brand];

  return (
    <motion.main 
      key={`brand-${brand}`}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      className="max-w-6xl mx-auto px-4 sm:px-6 py-12"
    >
      {/* Back Button & Navigation */}
      <div className="flex items-center gap-4 mb-10">
        <button 
          onClick={() => setView('home')}
          className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 hover:text-black hover:bg-gray-100 transition-all active:scale-95"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <span className="text-xs font-mono text-gray-400 bg-gray-100 px-3 py-1 rounded-full uppercase tracking-widest">
          {brandConfig.name} Specialist Landing Page
        </span>
      </div>

      {/* Brand Hero Column */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
        <div className="lg:col-span-7 space-y-6">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-gray-900 leading-none">
            {brandConfig.title}
          </h1>
          <p className="text-lg text-gray-600 font-medium leading-relaxed">
            {brandConfig.desc} Our workshop has state-of-the-art diagnostic machinery configured to service premium brand panels safely and efficiently.
          </p>

          <p className="text-xs text-blue-600 font-black tracking-wide font-mono uppercase bg-blue-50 px-3.5 py-1.5 rounded-xl inline-block">
            🎯 {brandConfig.keyword}
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <button 
              onClick={() => setView('appointment-booking')}
              className="px-8 py-4 bg-black text-white rounded-2xl font-bold hover:bg-gray-900 transition-all shadow-xl shadow-black/10 flex items-center gap-2 active:scale-95"
            >
              <Award className="w-5 h-5 animate-pulse" />
              Book Certified Repair
            </button>
            <a 
              href={`https://wa.me/919513134313?text=${brandConfig.whatsappText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#25d366] text-white rounded-2xl font-bold hover:bg-[#22c35e] transition-all shadow-lg shadow-green-500/10 flex items-center gap-2 active:scale-95"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              Request Free Diagnostics
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-[2.5rem] border border-gray-100 shadow-[0_15px_50px_rgba(0,0,0,0.03)] space-y-6">
          <div>
            <h3 className="text-lg font-black text-gray-900">Advanced Brand Diagnostics</h3>
            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider font-mono">Specialized Services</p>
          </div>

          <ul className="space-y-4">
            {brandConfig.techHighlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 font-bold flex items-center justify-center shrink-0 mt-0.5 text-xs">✓</span>
                <p className="text-sm font-semibold text-gray-600">{highlight}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Brand Warranty and Trust flags */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-6 rounded-3xl border border-gray-50 flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-green-50 text-[#16a34a] flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-1">100% Original Spares</h4>
            <p className="text-xs text-gray-500 font-medium">All capacitors, inverters, power logic chips, and screen glasses are branded OEM parts.</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-gray-50 flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-1">Warranty Certificate</h4>
            <p className="text-xs text-gray-500 font-medium">Every professional component swap matches authentic guidelines and includes a written guarantee.</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-gray-50 flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-1">Super Express Same-Day</h4>
            <p className="text-xs text-gray-500 font-medium font-semibold text-orange-700">90% of backlights or circuit boards are restored within are standard 3 to 6-hour timeline.</p>
          </div>
        </div>
      </div>
    </motion.main>
  );
};
