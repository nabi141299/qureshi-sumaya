/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Tv, 
  Smartphone, 
  Laptop, 
  Tablet, 
  Monitor, 
  Layers, 
  Settings, 
  Hammer, 
  MapPin, 
  ChevronDown, 
  Star, 
  ArrowRight,
  MessageCircle,
  Phone,
  PlayCircle,
  ArrowLeft,
  Zap,
  Volume2,
  HelpCircle,
  MonitorPlay,
  MonitorOff,
  Sun,
  AlignJustify,
  Columns2,
  Image as ImageIcon,
  Copy,
  AlertTriangle,
  Menu,
  X,
  Cable,
  Clock,
  Navigation
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow, useAdvancedMarkerRef } from '@vis.gl/react-google-maps';

const API_KEY =
  process.env.GOOGLE_MAPS_PLATFORM_KEY ||
  (import.meta as any).env?.VITE_GOOGLE_MAPS_PLATFORM_KEY ||
  (globalThis as any).GOOGLE_MAPS_PLATFORM_KEY ||
  '';
const hasValidKey = Boolean(API_KEY) && API_KEY !== 'YOUR_API_KEY';

const SHOP_LOCATION = { lat: 12.9716, lng: 77.6944 };
const SHOP_ADDRESS = "iPixel Electronics, #22, Ground Floor, 3rd A Cross, Doddanekundi, Bangalore, Karnataka 560037";

const CATEGORIES = [
  { id: 'tv', name: 'TV', icon: <Tv className="w-4 h-4" /> },
  { id: 'mobile', name: 'Mobile', icon: <Smartphone className="w-4 h-4" /> },
  { id: 'laptop', name: 'Laptop', icon: <Laptop className="w-4 h-4" /> },
  { id: 'tablet', name: 'Tablet', icon: <Tablet className="w-4 h-4" /> },
];

const TV_SERVICES = [
  { name: 'LED TV Repair', icon: <Tv className="w-6 h-6" /> },
  { name: 'LCD TV Repair', icon: <Monitor className="w-6 h-6" /> },
  { name: 'QLED TV Repair', icon: <Tv className="w-6 h-6" /> },
  { name: 'OLED TV Repair', icon: <Tv className="w-6 h-6" /> },
  { name: 'Screen Repair', icon: <PlayCircle className="w-6 h-6" /> },
  { name: 'Screen Replacement', icon: <Layers className="w-6 h-6" /> },
  { name: 'Installation', icon: <Settings className="w-6 h-6" /> },
  { name: 'Wall Mount', icon: <Hammer className="w-6 h-6" /> },
];

const MOBILE_SERVICES = [
  { name: 'Flex Bonding', icon: <Cable className="w-6 h-6" /> },
];

const LAPTOP_SERVICES = [
  { name: 'Flex Bonding', icon: <Cable className="w-6 h-6" /> },
];

const TABLET_SERVICES = [
  { name: 'Flex Bonding', icon: <Cable className="w-6 h-6" /> },
];

const DIAGNOSIS_ISSUES = [
  { 
    title: 'Power Issues', 
    desc: 'Select this if you are facing power issues', 
    icon: <Zap className="w-8 h-8" /> 
  },
  { 
    title: 'Sound Issues', 
    desc: 'Select this if you are facing sound issues', 
    icon: <Volume2 className="w-8 h-8" /> 
  },
  { 
    title: 'Display Issues', 
    desc: 'Select this if you are facing display issues', 
    icon: <MonitorPlay className="w-8 h-8" /> 
  },
  { 
    title: 'Not Sure', 
    desc: 'Select this if you are facing not sure', 
    icon: <HelpCircle className="w-8 h-8" /> 
  },
];

const SCREEN_ISSUES = [
  { 
    title: 'Blank Screen', 
    desc: 'My screen has blank screen', 
    icon: <MonitorOff className="w-8 h-8" /> 
  },
  { 
    title: 'White Screen', 
    desc: 'My screen has white screen', 
    icon: <Sun className="w-8 h-8" /> 
  },
  { 
    title: 'Horizontal Lines', 
    desc: 'My screen has horizontal lines', 
    icon: <AlignJustify className="w-8 h-8" /> 
  },
  { 
    title: 'Vertical Lines/Bars', 
    desc: 'My screen has vertical lines/bars', 
    icon: <Columns2 className="w-8 h-8" /> 
  },
  { 
    title: 'Negative Image', 
    desc: 'My screen has negative image', 
    icon: <ImageIcon className="w-8 h-8" /> 
  },
  { 
    title: 'Double Image', 
    desc: 'My screen has double image', 
    icon: <Copy className="w-8 h-8" /> 
  },
  { 
    title: 'Physical Damage', 
    desc: 'My screen has physical damage', 
    icon: <AlertTriangle className="w-8 h-8" /> 
  },
];

function LocationSection() {
  const [markerRef, marker] = useAdvancedMarkerRef();
  const [infoWindowOpen, setInfoWindowOpen] = useState(true);

  return (
    <section className="mt-32">
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-1/3">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Visit Our Shop</h2>
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-black" />
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-1">Address</h4>
                <p className="text-gray-900 font-medium leading-relaxed">
                  {SHOP_ADDRESS}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-black" />
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-1">Opening Hours</h4>
                <p className="text-gray-900 font-medium">Monday - Sunday: 10:00 AM - 9:00 PM</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-black" />
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-1">Contact</h4>
                <p className="text-gray-900 font-medium">+91 95131 34313</p>
              </div>
            </div>

            <a 
              href={`https://www.google.com/maps/dir/?api=1&destination=${SHOP_LOCATION.lat},${SHOP_LOCATION.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-2xl text-sm font-bold hover:bg-gray-900 transition-all shadow-xl shadow-black/10 group"
            >
              <Navigation className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              Get Directions
            </a>
          </div>
        </div>

        <div className="lg:w-2/3 h-[500px] rounded-[3rem] overflow-hidden border border-gray-100 shadow-2xl shadow-black/5">
          <Map
            defaultCenter={SHOP_LOCATION}
            defaultZoom={15}
            mapId="DEMO_MAP_ID"
            internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
            style={{ width: '100%', height: '100%' }}
          >
            <AdvancedMarker
              ref={markerRef}
              position={SHOP_LOCATION}
              onClick={() => setInfoWindowOpen(true)}
            >
              <Pin background="#ff4d4d" glyphColor="#fff" borderColor="#ff4d4d" />
            </AdvancedMarker>

            {infoWindowOpen && (
              <InfoWindow
                anchor={marker}
                onCloseClick={() => setInfoWindowOpen(false)}
              >
                <div className="p-2 max-w-[200px]">
                  <h4 className="font-bold text-sm mb-1">iPixel Electronics</h4>
                  <p className="text-xs text-gray-500 leading-tight">Professional TV Repair Services</p>
                </div>
              </InfoWindow>
            )}
          </Map>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [activeCategory, setActiveCategory] = useState('tv');
  const [view, setView] = useState<'home' | 'diagnosis' | 'screen-issue'>('home');
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedService, setExpandedService] = useState<string | null>(null);

  if (!hasValidKey) {
    return (
      <div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'100vh',fontFamily:'sans-serif', padding: '20px'}}>
        <div style={{textAlign:'center',maxWidth:520, background: 'white', padding: '40px', borderRadius: '32px', boxShadow: '0 20px 50px rgba(0,0,0,0.05)'}}>
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="grid grid-cols-2 gap-0.5 w-9 h-9">
              <div className="bg-[#ff4d4d] rounded-[3px]"></div>
              <div className="bg-[#4caf50] rounded-[3px]"></div>
              <div className="bg-[#2196f3] rounded-[3px]"></div>
              <div className="bg-[#ffeb3b] rounded-[3px]"></div>
            </div>
            <div className="flex flex-col leading-none text-left">
              <span className="text-xl font-bold tracking-tight">iPixel</span>
              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-gray-400">Electronics</span>
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-4">Google Maps API Key Required</h2>
          <p className="text-gray-500 mb-8 leading-relaxed">To display our shop location on the map, please add your Google Maps API key.</p>
          
          <div style={{textAlign:'left', background: '#f8f9fa', padding: '24px', borderRadius: '20px', marginBottom: '32px'}}>
            <p className="font-bold mb-4 text-sm">Follow these steps:</p>
            <ul style={{lineHeight:'1.8', fontSize: '14px'}} className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center shrink-0 text-[10px] font-bold">1</span>
                <span>Get an API Key from the <a href="https://console.cloud.google.com/google/maps-apis/credentials" target="_blank" rel="noopener" className="text-blue-600 font-bold hover:underline">Google Cloud Console</a></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center shrink-0 text-[10px] font-bold">2</span>
                <span>Open <strong>Settings</strong> (⚙️ gear icon, top-right)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center shrink-0 text-[10px] font-bold">3</span>
                <span>Select <strong>Secrets</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center shrink-0 text-[10px] font-bold">4</span>
                <span>Add <code>GOOGLE_MAPS_PLATFORM_KEY</code> and paste your key</span>
              </li>
            </ul>
          </div>
          
          <p className="text-xs text-gray-400">The app will rebuild automatically after you add the secret.</p>
        </div>
      </div>
    );
  }

  const handleServiceClick = (serviceName: string) => {
    if (serviceName === 'Flex Bonding') {
      setExpandedService(expandedService === serviceName ? null : serviceName);
      return;
    }
    const diagnosisServices = ['LED TV Repair', 'LCD TV Repair', 'QLED TV Repair', 'OLED TV Repair'];
    if (diagnosisServices.includes(serviceName)) {
      setSelectedService(serviceName);
      setView('diagnosis');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (serviceName === 'Screen Repair') {
      setSelectedService(serviceName);
      setView('screen-issue');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <APIProvider apiKey={API_KEY} version="weekly">
      <div className="min-h-screen bg-[#fcfcfc] text-[#1a1a1a] font-sans selection:bg-black selection:text-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-16">
            {/* Logo */}
            <div 
              className="flex items-center gap-3 cursor-pointer" 
              onClick={() => setView('home')}
            >
              <div className="grid grid-cols-2 gap-0.5 w-9 h-9">
                <div className="bg-[#ff4d4d] rounded-[3px]"></div>
                <div className="bg-[#4caf50] rounded-[3px]"></div>
                <div className="bg-[#2196f3] rounded-[3px]"></div>
                <div className="bg-[#ffeb3b] rounded-[3px]"></div>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-xl font-bold tracking-tight">iPixel</span>
                <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-gray-400">Electronics</span>
              </div>
            </div>

            {/* Nav */}
            <nav className="hidden md:flex items-center gap-10">
              <div className="relative">
                <button 
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  onMouseEnter={() => setIsServicesOpen(true)}
                  className="flex items-center gap-1.5 text-[15px] font-semibold text-gray-500 hover:text-black transition-colors"
                >
                  Services <ChevronDown className={`w-4 h-4 opacity-50 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {isServicesOpen && (
                    <>
                      <div 
                        className="fixed inset-0 z-10" 
                        onClick={() => setIsServicesOpen(false)}
                        onMouseEnter={() => setIsServicesOpen(false)}
                      />
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        onMouseEnter={() => setIsServicesOpen(true)}
                        className="absolute top-full left-0 mt-2 w-[320px] bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 py-4 z-20"
                      >
                        <button 
                          onClick={() => { setView('home'); setIsServicesOpen(false); }}
                          className="w-full flex items-center gap-5 px-6 py-3.5 hover:bg-gray-50 transition-colors group text-left"
                        >
                          <div className="w-12 h-12 rounded-2xl bg-[#eef4ff] flex items-center justify-center shrink-0">
                            <Tv className="w-6 h-6 text-[#3b82f6]" />
                          </div>
                          <div>
                            <div className="text-[16px] font-bold text-[#334155] leading-tight">TV Repair</div>
                            <div className="text-[14px] font-medium text-[#94a3b8] mt-0.5">Expert TV diagnostics</div>
                          </div>
                        </button>

                        <button 
                          onClick={() => { setView('home'); setIsServicesOpen(false); }}
                          className="w-full flex items-center gap-5 px-6 py-3.5 hover:bg-gray-50 transition-colors group text-left"
                        >
                          <div className="w-12 h-12 rounded-2xl bg-[#fff7ed] flex items-center justify-center shrink-0">
                            <MonitorPlay className="w-6 h-6 text-[#f97316]" />
                          </div>
                          <div>
                            <div className="text-[16px] font-bold text-[#334155] leading-tight">Screen Repair</div>
                            <div className="text-[14px] font-medium text-[#94a3b8] mt-0.5">Fix display issues</div>
                          </div>
                        </button>

                        <button 
                          onClick={() => { setView('home'); setIsServicesOpen(false); }}
                          className="w-full flex items-center gap-5 px-6 py-3.5 hover:bg-gray-50 transition-colors group text-left"
                        >
                          <div className="w-12 h-12 rounded-2xl bg-[#f5f3ff] flex items-center justify-center shrink-0">
                            <Layers className="w-6 h-6 text-[#8b5cf6]" />
                          </div>
                          <div>
                            <div className="text-[16px] font-bold text-[#334155] leading-tight">Screen Replacement</div>
                            <div className="text-[14px] font-medium text-[#94a3b8] mt-0.5">New panels for all brands</div>
                          </div>
                        </button>

                        <button 
                          onClick={() => { setView('home'); setIsServicesOpen(false); }}
                          className="w-full flex items-center gap-5 px-6 py-3.5 hover:bg-gray-50 transition-colors group text-left"
                        >
                          <div className="w-12 h-12 rounded-2xl bg-[#f8f9fa] flex items-center justify-center shrink-0">
                            <Hammer className="w-6 h-6 text-[#475569]" />
                          </div>
                          <div>
                            <div className="text-[16px] font-bold text-[#334155] leading-tight">TV Wall Mount</div>
                            <div className="text-[14px] font-medium text-[#94a3b8] mt-0.5">Installation services</div>
                          </div>
                        </button>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>

              <div className="relative">
                <button 
                  onClick={() => setIsSupportOpen(!isSupportOpen)}
                  onMouseEnter={() => setIsSupportOpen(true)}
                  className="flex items-center gap-1.5 text-[15px] font-semibold text-gray-500 hover:text-black transition-colors"
                >
                  Support <ChevronDown className={`w-4 h-4 opacity-50 transition-transform ${isSupportOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {isSupportOpen && (
                    <>
                      <div 
                        className="fixed inset-0 z-10" 
                        onClick={() => setIsSupportOpen(false)}
                        onMouseEnter={() => setIsSupportOpen(false)}
                      />
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        onMouseEnter={() => setIsSupportOpen(true)}
                        className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 py-3 z-20"
                      >
                        <a 
                          href="https://wa.me/919513134313"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-4 px-5 py-3 hover:bg-gray-50 transition-colors group"
                        >
                          <div className="w-12 h-12 rounded-2xl bg-[#e8fcf0] flex items-center justify-center">
                            <MessageCircle className="w-6 h-6 text-[#25d366] fill-[#25d366]" />
                          </div>
                          <div>
                            <div className="text-[15px] font-bold text-gray-900">WhatsApp Support</div>
                            <div className="text-[13px] font-medium text-gray-400">Chat with us instantly</div>
                          </div>
                        </a>

                        <a 
                          href="tel:+919513134313"
                          className="flex items-center gap-4 px-5 py-3 hover:bg-gray-50 transition-colors group"
                        >
                          <div className="w-12 h-12 rounded-2xl bg-[#eef4ff] flex items-center justify-center">
                            <Phone className="w-6 h-6 text-[#3b82f6]" />
                          </div>
                          <div>
                            <div className="text-[15px] font-bold text-gray-900">Call Us</div>
                            <div className="text-[13px] font-medium text-gray-400">+91 95131 34313</div>
                          </div>
                        </a>

                        <a 
                          href="mailto:help@ipixelelectronics.com"
                          className="flex items-center gap-4 px-5 py-3 hover:bg-gray-50 transition-colors group"
                        >
                          <div className="w-12 h-12 rounded-2xl bg-[#f5f3ff] flex items-center justify-center">
                            <HelpCircle className="w-6 h-6 text-[#8b5cf6]" />
                          </div>
                          <div>
                            <div className="text-[15px] font-bold text-gray-900">General Help</div>
                            <div className="text-[13px] font-medium text-gray-400">help@ipixelelectronics.com</div>
                          </div>
                        </a>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>
            </nav>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-xl transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="px-6 py-8 flex flex-col gap-8">
                <div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Services</div>
                  <div className="grid grid-cols-1 gap-3">
                    <button 
                      onClick={() => { setView('home'); setIsMobileMenuOpen(false); }}
                      className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl text-left"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#eef4ff] flex items-center justify-center">
                        <Tv className="w-5 h-5 text-[#3b82f6]" />
                      </div>
                      <div>
                        <div className="text-sm font-bold">TV Repair</div>
                        <div className="text-xs text-gray-400">Expert TV diagnostics</div>
                      </div>
                    </button>
                    <button 
                      onClick={() => { setView('home'); setIsMobileMenuOpen(false); }}
                      className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl text-left"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#fff7ed] flex items-center justify-center">
                        <MonitorPlay className="w-5 h-5 text-[#f97316]" />
                      </div>
                      <div>
                        <div className="text-sm font-bold">Screen Repair</div>
                        <div className="text-xs text-gray-400">Fix display issues</div>
                      </div>
                    </button>
                    <button 
                      onClick={() => { setView('home'); setIsMobileMenuOpen(false); }}
                      className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl text-left"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#f5f3ff] flex items-center justify-center">
                        <Layers className="w-5 h-5 text-[#8b5cf6]" />
                      </div>
                      <div>
                        <div className="text-sm font-bold">Screen Replacement</div>
                        <div className="text-xs text-gray-400">New panels for all brands</div>
                      </div>
                    </button>
                    <button 
                      onClick={() => { setView('home'); setIsMobileMenuOpen(false); }}
                      className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl text-left"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#f8f9fa] flex items-center justify-center">
                        <Hammer className="w-5 h-5 text-gray-500" />
                      </div>
                      <div>
                        <div className="text-sm font-bold">TV Wall Mount</div>
                        <div className="text-xs text-gray-400">Installation services</div>
                      </div>
                    </button>
                  </div>
                </div>

                <div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Support</div>
                  <div className="grid grid-cols-1 gap-3">
                    <a 
                      href="https://wa.me/919513134313"
                      className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#e8fcf0] flex items-center justify-center">
                        <MessageCircle className="w-5 h-5 text-[#25d366] fill-[#25d366]" />
                      </div>
                      <div>
                        <div className="text-sm font-bold">WhatsApp Support</div>
                        <div className="text-xs text-gray-400">Chat with us instantly</div>
                      </div>
                    </a>
                    <a 
                      href="tel:+919513134313"
                      className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#eef4ff] flex items-center justify-center">
                        <Phone className="w-5 h-5 text-[#3b82f6]" />
                      </div>
                      <div>
                        <div className="text-sm font-bold">Call Us</div>
                        <div className="text-xs text-gray-400">+91 95131 34313</div>
                      </div>
                    </a>
                    <a 
                      href="mailto:help@ipixelelectronics.com"
                      className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#f5f3ff] flex items-center justify-center">
                        <HelpCircle className="w-5 h-5 text-[#8b5cf6]" />
                      </div>
                      <div>
                        <div className="text-sm font-bold">General Help</div>
                        <div className="text-xs text-gray-400">help@ipixelelectronics.com</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <AnimatePresence mode="wait">
        {view === 'home' ? (
          <motion.main 
            key="home"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="max-w-7xl mx-auto px-6 py-4 lg:py-8"
          >
            <h1 className="text-[24px] sm:text-[32px] lg:text-[40px] font-bold mb-4 sm:mb-6 lg:mb-8 max-w-4xl leading-tight tracking-tight">
              Expert TV Service: Precision Screen Repair & Panel Replacement
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Left Column: Service Selector */}
              <div className="lg:col-span-4 bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-gray-100 p-6 sm:p-8 lg:p-10">
                <h2 className="text-xl font-bold mb-6 tracking-tight">What are you looking for?</h2>
                
                {/* Category Tabs */}
                <div className="flex gap-2 mb-6">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-[12px] font-bold transition-all duration-300 flex-1 justify-center ${
                        activeCategory === cat.id
                          ? 'bg-black text-white shadow-lg shadow-black/10 scale-[1.02]'
                          : 'bg-white text-gray-400 border border-gray-100 hover:bg-gray-50'
                      }`}
                    >
                      <span className={activeCategory === cat.id ? 'text-white' : 'text-gray-300'}>
                        {cat.icon}
                      </span>
                      {cat.name}
                    </button>
                  ))}
                </div>

                {/* Service Grid */}
                <div className={`${activeCategory === 'tv' ? 'grid grid-cols-3 gap-y-8 gap-x-4' : 'flex flex-col gap-4'} mb-8`}>
                  {(activeCategory === 'tv' ? TV_SERVICES : 
                    activeCategory === 'mobile' ? MOBILE_SERVICES :
                    activeCategory === 'laptop' ? LAPTOP_SERVICES :
                    TABLET_SERVICES).map((service, i) => (
                    <div key={i} className={activeCategory === 'tv' ? '' : 'w-full'}>
                      {activeCategory === 'tv' ? (
                        <button 
                          onClick={() => handleServiceClick(service.name)}
                          className="flex flex-col items-center text-center group transition-transform active:scale-95 w-full"
                        >
                          <div className="w-14 h-14 rounded-[1.25rem] bg-[#f8f9fa] flex items-center justify-center mb-4 group-hover:bg-gray-100 transition-all duration-300">
                            <div className="text-gray-800 group-hover:scale-110 transition-transform duration-300">
                              {service.icon}
                            </div>
                          </div>
                          <span className="text-[12px] font-bold text-gray-500 leading-tight group-hover:text-black transition-colors">
                            {service.name}
                          </span>
                        </button>
                      ) : (
                        <div className="flex flex-col gap-3">
                          <button 
                            onClick={() => handleServiceClick(service.name)}
                            className={`w-full bg-[#f8f9fa] rounded-[2rem] p-5 border transition-all duration-300 ${
                              expandedService === service.name ? 'border-black shadow-md' : 'border-gray-100/50 shadow-sm'
                            }`}
                          >
                            <div className="flex items-center gap-4">
                              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm transition-colors ${
                                expandedService === service.name ? 'bg-black text-white' : 'bg-white text-black'
                              }`}>
                                {service.icon}
                              </div>
                              <div className="text-left">
                                <h3 className="text-[15px] font-bold text-gray-900 leading-tight">{service.name}</h3>
                                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Advanced Repair</p>
                              </div>
                            </div>
                          </button>

                          <AnimatePresence>
                            {expandedService === service.name && (
                              <motion.div 
                                initial={{ opacity: 0, height: 0, y: -10 }}
                                animate={{ opacity: 1, height: 'auto', y: 0 }}
                                exit={{ opacity: 0, height: 0, y: -10 }}
                                className="overflow-hidden"
                              >
                                <div className="grid grid-cols-2 gap-3 pt-1">
                                  <a 
                                    href="https://wa.me/919876543210" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 py-3.5 bg-[#25d366] text-white rounded-2xl text-[12px] font-bold shadow-lg shadow-[#25d366]/20 hover:scale-[1.02] active:scale-95 transition-all"
                                  >
                                    <MessageCircle className="w-4 h-4 fill-current" />
                                    WhatsApp
                                  </a>
                                  <a 
                                    href="tel:+919876543210"
                                    className="flex items-center justify-center gap-2 py-3.5 bg-black text-white rounded-2xl text-[12px] font-bold shadow-lg shadow-black/10 hover:scale-[1.02] active:scale-95 transition-all"
                                  >
                                    <Phone className="w-4 h-4" />
                                    Call Now
                                  </a>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Footer Search */}
                <div className="pt-6 border-t border-gray-50">
                  <p className="text-[14px] font-bold text-gray-900 mb-3">Can't find what you need?</p>
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Type your issue..."
                        className="w-full px-5 py-4 bg-[#f8f9fa] border border-gray-100 rounded-2xl text-[14px] font-medium outline-none focus:bg-white focus:border-gray-200 focus:ring-4 focus:ring-gray-50 transition-all"
                      />
                    </div>
                    <button className="w-14 h-14 bg-[#25d366] rounded-2xl flex items-center justify-center text-white shadow-xl shadow-[#25d366]/30 hover:scale-110 active:scale-95 transition-all">
                      <MessageCircle className="w-7 h-7 fill-current" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column: Feature Display */}
              <div className="lg:col-span-8 relative rounded-[3rem] overflow-hidden group shadow-2xl shadow-black/5">
                <img
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200"
                  alt="Advanced Bonding Technology"
                  className="w-full h-full object-cover min-h-[400px] lg:min-h-[600px] group-hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                
                <div className="absolute bottom-16 left-16 right-16 text-white">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <h3 className="text-4xl font-bold mb-6 tracking-tight">Advanced Bonding Technology</h3>
                    <p className="text-gray-300 max-w-xl text-lg leading-relaxed font-medium opacity-90">
                      Our in-house state-of-the-art bonding machine ensures factory-quality display repairs and panel replacements.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Trust Section */}
            <div className="mt-8 flex items-center gap-5">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shadow-sm">
                <Star className="w-6 h-6 text-black fill-current" />
              </div>
              <div>
                <div className="text-2xl font-black leading-none tracking-tight">5.0</div>
                <div className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.15em] mt-1">Service Rating</div>
              </div>
            </div>

            {/* Why Choose Section */}
            <div className="mt-12 max-w-2xl">
              <h2 className="text-2xl font-bold mb-4 tracking-tight">Why Choose iPixel Electronics?</h2>
              <p className="text-gray-500 text-[15px] leading-relaxed font-medium">
                At iPixel, we provide reliable solutions backed by a warranty of up to 180 days. By utilizing our in-house bonding machine, we eliminate the middleman—allowing us to deliver high-quality results at an affordable price.
              </p>
            </div>

            {/* Offers Section */}
            <section className="mt-32">
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-3xl font-bold tracking-tight">Offers & discounts</h2>
                <button className="flex items-center gap-2.5 text-[15px] font-bold text-gray-900 hover:gap-4 transition-all group">
                  View All <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { color: 'bg-blue-50', text: 'upto 10% Off on Screen Replacement' },
                  { color: 'bg-green-50', text: 'Free Pickup & Delivery in Bangalore' },
                  { color: 'bg-purple-50', text: 'Up to 180 days warranty on all repairs' }
                ].map((offer, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ y: -10 }}
                    className={`${offer.color} h-56 rounded-[2.5rem] p-10 flex flex-col justify-end border border-white/50 shadow-sm transition-all cursor-pointer`}
                  >
                    <div className="w-10 h-10 bg-white rounded-xl mb-4 flex items-center justify-center shadow-sm">
                      <Star className="w-5 h-5 text-black" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 leading-tight">{offer.text}</h4>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Location Section */}
            <LocationSection />
          </motion.main>
        ) : view === 'diagnosis' ? (
          <motion.main 
            key="diagnosis"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="max-w-7xl mx-auto px-6 py-16"
          >
            {/* Diagnosis Header */}
            <div className="flex items-start gap-6 mb-12">
              <button 
                onClick={() => setView('home')}
                className="p-3 hover:bg-gray-100 rounded-full transition-colors mt-1"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <div>
                <h1 className="text-4xl font-bold tracking-tight mb-2">Diagnosis</h1>
                <p className="text-gray-500 font-medium">Select the issue for your {selectedService}</p>
              </div>
            </div>

            {/* Diagnosis Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {DIAGNOSIS_ISSUES.map((issue, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-[2rem] p-10 border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] flex flex-col items-center text-center group transition-all"
                >
                  <div className="w-20 h-20 rounded-full bg-[#f8f9fa] flex items-center justify-center mb-8 group-hover:bg-gray-100 transition-colors">
                    <div className="text-gray-800 scale-110">
                      {issue.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 tracking-tight">{issue.title}</h3>
                  <p className="text-gray-400 text-sm font-medium mb-10 leading-relaxed max-w-[200px]">
                    {issue.desc}
                  </p>
                  
                  <a 
                    href={`https://wa.me/919513134313?text=I%20am%20facing%20${encodeURIComponent(issue.title)}%20with%20my%20${encodeURIComponent(selectedService || 'TV')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-[#f0fff4] text-[#16a34a] rounded-full text-sm font-bold hover:bg-[#dcfce7] transition-all border border-[#bbf7d0]"
                  >
                    <MessageCircle className="w-4 h-4 fill-[#25d366] text-[#25d366]" />
                    Consult on WhatsApp
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.main>
        ) : (
          <motion.main 
            key="screen-issue"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="max-w-7xl mx-auto px-6 py-16"
          >
            {/* Screen Issue Header */}
            <div className="flex items-start gap-6 mb-12">
              <button 
                onClick={() => setView('home')}
                className="p-3 hover:bg-gray-100 rounded-full transition-colors mt-1"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <div>
                <h1 className="text-4xl font-bold tracking-tight mb-2">Screen Issue</h1>
                <p className="text-gray-500 font-medium">Select the specific issue with your screen</p>
              </div>
            </div>

            {/* Screen Issue Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {SCREEN_ISSUES.map((issue, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-[2rem] p-10 border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] flex flex-col items-center text-center group transition-all"
                >
                  <div className="w-20 h-20 rounded-full bg-[#f8f9fa] flex items-center justify-center mb-8 group-hover:bg-gray-100 transition-colors">
                    <div className="text-gray-800 scale-110">
                      {issue.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 tracking-tight">{issue.title}</h3>
                  <p className="text-gray-400 text-sm font-medium mb-10 leading-relaxed max-w-[200px]">
                    {issue.desc}
                  </p>
                  
                  <a 
                    href={`https://wa.me/919513134313?text=I%20am%20facing%20${encodeURIComponent(issue.title)}%20with%20my%20${encodeURIComponent(selectedService || 'TV')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-[#f0fff4] text-[#16a34a] rounded-full text-sm font-bold hover:bg-[#dcfce7] transition-all border border-[#bbf7d0]"
                  >
                    <MessageCircle className="w-4 h-4 fill-[#25d366] text-[#25d366]" />
                    Consult on WhatsApp
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.main>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="grid grid-cols-2 gap-0.5 w-8 h-8">
                  <div className="bg-[#ff4d4d] rounded-[2px]"></div>
                  <div className="bg-[#4caf50] rounded-[2px]"></div>
                  <div className="bg-[#2196f3] rounded-[2px]"></div>
                  <div className="bg-[#ffeb3b] rounded-[2px]"></div>
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-lg font-bold tracking-tight">iPixel</span>
                  <span className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-gray-400">Electronics</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                iPixel Electronics is a leading TV repair service provider in Bangalore, specializing in screen repair and panel replacement for all major brands.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-6">Support</h4>
              <ul className="flex flex-col gap-4">
                <li>
                  <a href="https://wa.me/919513134313" className="text-gray-500 hover:text-black transition-colors text-sm font-medium">WhatsApp Support</a>
                </li>
                <li>
                  <a href="tel:+919513134313" className="text-gray-500 hover:text-black transition-colors text-sm font-medium">Call Us</a>
                </li>
                <li>
                  <a href="mailto:help@ipixelelectronics.com" className="text-gray-500 hover:text-black transition-colors text-sm font-medium">General Help</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-6">Services</h4>
              <ul className="flex flex-col gap-4">
                <li><button onClick={() => setView('home')} className="text-gray-500 hover:text-black transition-colors text-sm font-medium">LED TV Repair</button></li>
                <li><button onClick={() => setView('home')} className="text-gray-500 hover:text-black transition-colors text-sm font-medium">Screen Repair</button></li>
                <li><button onClick={() => setView('home')} className="text-gray-500 hover:text-black transition-colors text-sm font-medium">Panel Replacement</button></li>
              </ul>
            </div>
          </div>
          <div className="mt-20 pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-xs">© 2026 iPixel Electronics. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="text-gray-400 hover:text-black transition-colors text-xs">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-black transition-colors text-xs">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Footer Space */}
      <div className="h-20" />

      {/* Floating Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
        {/* Call Button */}
        <motion.a
          href="tel:+919513134313"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-gray-900 transition-colors"
          title="Call Us"
        >
          <Phone className="w-6 h-6" />
        </motion.a>

        {/* WhatsApp Button */}
        <motion.a
          href="https://wa.me/919513134313"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-[#20ba56] transition-colors"
          title="WhatsApp Us"
        >
          <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />
        </motion.a>
      </div>
    </div>
    </APIProvider>
  );
}
