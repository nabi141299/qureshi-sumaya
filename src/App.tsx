/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  MapPin, 
  ChevronRight, 
  Star, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  Phone, 
  MessageCircle,
  Tv,
  Monitor,
  Wrench,
  ArrowLeft,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const TV_SERVICES = [
  { id: 'led', name: 'LED TV Repair', icon: <Monitor className="w-8 h-8 text-slate-700" />, color: 'bg-slate-50' },
  { id: 'lcd', name: 'LCD TV Repair', icon: <Tv className="w-8 h-8 text-slate-700" />, color: 'bg-slate-50' },
  { id: 'qled', name: 'QLED Specialist', icon: <Monitor className="w-8 h-8 text-uc-navy" />, color: 'bg-blue-50' },
  { id: 'oled', name: 'OLED Screen Care', icon: <Tv className="w-8 h-8 text-indigo-600" />, color: 'bg-indigo-50' },
];

const ISSUES = [
  { id: 'power', name: 'No Power' },
  { id: 'sound', name: 'Sound Issue' },
  { id: 'display', name: 'Display Crack' },
  { id: 'lines', name: 'Lines on Screen' },
  { id: 'flicker', name: 'Flickering' },
  { id: 'other', name: 'Other Issues' },
];

const LOCATIONS = [
  'Doddanakundi',
  'Gururaja Layout',
  'Whitefield',
  'Marathahalli',
  'Indiranagar',
  'Koramangala',
  'HSR Layout',
  'Other Bangalore Location'
];

export default function App() {
  const [step, setStep] = useState(1);
  const [booking, setBooking] = useState({
    type: '',
    issue: '',
    location: ''
  });
  const [showBooking, setShowBooking] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const phoneNumber = "9513134313";
  const whatsappLink = `https://wa.me/91${phoneNumber}`;

  const handleNext = (field: string, value: string) => {
    setBooking(prev => ({ ...prev, [field]: value }));
    setStep(prev => prev + 1);
  };

  const resetBooking = () => {
    setStep(1);
    setBooking({ type: '', issue: '', location: '' });
    setShowBooking(false);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-uc-navy rounded flex items-center justify-center">
                <Tv className="text-white w-5 h-5" />
              </div>
              <span className="text-lg font-bold tracking-tight text-uc-navy">iPixel <span className="text-slate-400 font-medium">Electronics</span></span>
            </div>
            <div className="hidden md:flex items-center gap-2 text-sm text-slate-500 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100">
              <MapPin className="w-4 h-4 text-uc-navy" />
              <span>Bangalore</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <a href={`tel:${phoneNumber}`} className="hidden sm:flex items-center gap-2 text-sm font-semibold text-uc-navy">
              <Phone className="w-4 h-4" />
              {phoneNumber}
            </a>
            <button 
              onClick={() => setShowBooking(true)}
              className="bg-uc-navy text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg shadow-uc-navy/10 hover:bg-uc-navy/90 transition-all"
            >
              Book Now
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Professional TV Repair <br />
              <span className="text-uc-navy">at Home in 60 Minutes.</span>
            </h1>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10">
              Trusted by thousands in Doddanakundi. Specialized service for LED, LCD, QLED, and OLED TVs.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <div className="flex items-center bg-white border-2 border-slate-100 rounded-2xl p-2 shadow-xl shadow-slate-200/50 focus-within:border-uc-navy transition-all">
                <Search className="w-6 h-6 text-slate-400 ml-4" />
                <input 
                  type="text" 
                  placeholder="Search for TV Repair (LED, LCD, QLED, OLED)" 
                  className="flex-1 px-4 py-3 outline-none text-lg placeholder:text-slate-400"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button 
                  onClick={() => setShowBooking(true)}
                  className="hidden sm:block bg-uc-navy text-white px-8 py-3 rounded-xl font-bold"
                >
                  Search
                </button>
              </div>
              <div className="mt-4 flex items-center justify-center gap-6 text-sm font-medium text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-slate-900">4.8/5</span> Average Rating
                </div>
                <div className="w-1 h-1 bg-slate-200 rounded-full" />
                <div>500+ Repairs Completed this month</div>
              </div>
            </div>
          </motion.div>

          {/* Hero Image / Illustration */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative w-full max-w-4xl aspect-[21/9] rounded-3xl overflow-hidden bg-slate-100 border border-slate-200"
          >
            <img 
              src="https://picsum.photos/seed/technician/1200/600" 
              alt="Professional Technician" 
              className="w-full h-full object-cover opacity-80"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Service Selection Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Our Specialized Services</h2>
            <p className="text-slate-500">Select your TV technology for expert care</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {TV_SERVICES.map((service) => (
              <motion.button
                key={service.id}
                whileHover={{ y: -4 }}
                onClick={() => {
                  setBooking(prev => ({ ...prev, type: service.id }));
                  setStep(2);
                  setShowBooking(true);
                }}
                className="flex flex-col items-center p-6 sm:p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group"
              >
                <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <span className="font-bold text-slate-900">{service.name}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8 text-uc-navy" />
              </div>
              <h3 className="text-xl font-bold mb-3">Professional Technicians</h3>
              <p className="text-slate-500">Every technician is background-verified and expert-trained.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-6">
                <Wrench className="w-8 h-8 text-uc-green" />
              </div>
              <h3 className="text-xl font-bold mb-3">Transparent Pricing</h3>
              <p className="text-slate-500">Upfront quotes with no hidden charges. Pay only for what you see.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">90-Day Warranty</h3>
              <p className="text-slate-500">We stand by our work. All repairs come with a 90-day service guarantee.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Banner */}
      <section className="bg-uc-navy py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-white text-xl sm:text-2xl font-bold mb-4">
            Serving: Doddanakundi, Gururaja Layout, and all of Bangalore.
          </h2>
          <p className="text-blue-200">Get your TV fixed today by the best in the city.</p>
        </div>
      </section>

      {/* Floating WhatsApp */}
      <a 
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-uc-green text-white p-4 rounded-full shadow-2xl shadow-uc-green/40 hover:scale-110 transition-transform flex items-center gap-2 group"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-bold">WhatsApp Us</span>
      </a>

      {/* Booking Modal */}
      <AnimatePresence>
        {showBooking && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={resetBooking}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {step > 1 && (
                    <button onClick={() => setStep(step - 1)} className="p-1 hover:bg-slate-100 rounded-lg">
                      <ArrowLeft className="w-5 h-5 text-slate-500" />
                    </button>
                  )}
                  <h3 className="font-bold text-lg">Book TV Service</h3>
                </div>
                <button onClick={resetBooking} className="p-1 hover:bg-slate-100 rounded-lg">
                  <X className="w-5 h-5 text-slate-500" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                {/* Progress Bar */}
                <div className="flex gap-2 mb-8">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className={`h-1.5 flex-1 rounded-full transition-colors ${i <= step ? 'bg-uc-navy' : 'bg-slate-100'}`} />
                  ))}
                </div>

                {step === 1 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                    <h4 className="text-xl font-bold mb-6">What type of TV do you have?</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {TV_SERVICES.map((s) => (
                        <button 
                          key={s.id}
                          onClick={() => handleNext('type', s.name)}
                          className="p-4 border border-slate-100 rounded-xl hover:border-uc-navy hover:bg-slate-50 transition-all text-left"
                        >
                          <div className="mb-2">{s.icon}</div>
                          <span className="font-bold text-sm">{s.name}</span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                    <h4 className="text-xl font-bold mb-6">What is the issue?</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {ISSUES.map((i) => (
                        <button 
                          key={i.id}
                          onClick={() => handleNext('issue', i.name)}
                          className="p-4 border border-slate-100 rounded-xl hover:border-uc-navy hover:bg-slate-50 transition-all text-left font-semibold text-sm"
                        >
                          {i.name}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                    <h4 className="text-xl font-bold mb-6">Select your location in Bangalore</h4>
                    <div className="space-y-2 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                      {LOCATIONS.map((l) => (
                        <button 
                          key={l}
                          onClick={() => handleNext('location', l)}
                          className="w-full p-4 border border-slate-100 rounded-xl hover:border-uc-navy hover:bg-slate-50 transition-all text-left font-semibold flex items-center justify-between group"
                        >
                          {l}
                          <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-uc-navy" />
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="text-center">
                    <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10 text-uc-green" />
                    </div>
                    <h4 className="text-2xl font-bold mb-2">Almost there!</h4>
                    <p className="text-slate-500 mb-8">
                      You've selected a <span className="text-slate-900 font-bold">{booking.type}</span> repair for <span className="text-slate-900 font-bold">{booking.issue}</span> in <span className="text-slate-900 font-bold">{booking.location}</span>.
                    </p>
                    <div className="space-y-3">
                      <a 
                        href={`tel:${phoneNumber}`}
                        className="block w-full bg-uc-navy text-white py-4 rounded-xl font-bold text-lg shadow-xl shadow-uc-navy/20"
                      >
                        Call to Confirm
                      </a>
                      <a 
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-uc-green text-white py-4 rounded-xl font-bold text-lg shadow-xl shadow-uc-green/20"
                      >
                        Confirm on WhatsApp
                      </a>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <Tv className="text-uc-navy w-5 h-5" />
                </div>
                <span className="text-xl font-bold tracking-tight">iPixel Electronics</span>
              </div>
              <p className="text-slate-400 mb-6">
                Professional TV repair services at your doorstep. Quality service, transparent pricing, and expert care.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-6">Service Areas</h4>
              <ul className="space-y-3 text-slate-400">
                <li>Doddanakundi</li>
                <li>Gururaja Layout</li>
                <li>Whitefield</li>
                <li>Marathahalli</li>
                <li>Indiranagar</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6">Contact Us</h4>
              <ul className="space-y-4 text-slate-400">
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-uc-green" />
                  {phoneNumber}
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-uc-green" />
                  Bangalore, Karnataka
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-uc-green" />
                  Mon - Sat: 10 AM - 8 PM
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
            <p>© 2026 iPixel Electronics. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
