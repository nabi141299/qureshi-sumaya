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
  ShieldCheck,
  Truck,
  Cpu,
  Columns2,
  Image as ImageIcon,
  Copy,
  AlertTriangle,
  Menu,
  X,
  Cable,
  Clock,
  Navigation,
  PlusCircle,
  MinusCircle,
  Maximize,
  Square,
  RotateCw,
  Sparkles,
  Calendar,
  Check,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

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

const INSTALLATION_TYPES = [
  { 
    title: 'Installation', 
    desc: 'Request for Installation', 
    icon: <PlusCircle className="w-8 h-8" /> 
  },
  { 
    title: 'Uninstallation', 
    desc: 'Request for Uninstallation', 
    icon: <MinusCircle className="w-8 h-8" /> 
  },
];

const WALL_MOUNT_TYPES = [
  { 
    title: 'Fixed Wall Mount', 
    desc: 'Request for Fixed Wall Mount', 
    icon: <Square className="w-8 h-8" /> 
  },
  { 
    title: 'Rotation Wall Mount', 
    desc: 'Request for Rotation Wall Mount', 
    icon: <RotateCw className="w-8 h-8" /> 
  },
  { 
    title: 'Special Wall Mount', 
    desc: 'Request for Special Wall Mount', 
    icon: <Sparkles className="w-8 h-8" /> 
  },
];

const TV_SIZES = [
  { label: 'Under 30"', value: 'under_30' },
  { label: 'Under 50"', value: 'under_50' },
  { label: '55"', value: '55' },
  { label: '65"', value: '65' },
  { label: '75"', value: '75' },
  { label: 'Above 75"', value: 'above_75' },
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

const SCREEN_BRANDS = [
  { name: 'BOE', desc: 'Replacement screens from BOE' },
  { name: 'CSOT', desc: 'Replacement screens from CSOT' },
  { name: 'LG', desc: 'Replacement screens from LG' },
  { name: 'Samsung', desc: 'Replacement screens from Samsung' },
  { name: 'CHOT', desc: 'Replacement screens from CHOT' },
  { name: 'Innolux', desc: 'Replacement screens from Innolux' },
];

export default function App() {
  const [activeCategory, setActiveCategory] = useState('tv');
  const [view, setView] = useState<'home' | 'diagnosis' | 'screen-issue' | 'installation-type' | 'tv-size-selection' | 'screen-brands' | 'wall-mount-selection' | 'appointment-booking'>('home');
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedInstallationType, setSelectedInstallationType] = useState<string | null>(null);
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedService, setExpandedService] = useState<string | null>(null);

  // Appointment states
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');

  const getNextThreeDays = () => {
    const days = [];
    for (let i = 0; i < 3; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      days.push({
        fullDate: date.toISOString().split('T')[0],
        dayName: date.toLocaleDateString('en-US', { weekday: 'short' }),
        dateNum: date.getDate(),
        month: date.toLocaleDateString('en-US', { month: 'short' }),
      });
    }
    return days;
  };

  const timeSlots = [
    '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', 
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM'
  ];

  const handleShareWhatsApp = () => {
    const message = `*New Appointment Request*%0A%0A*Name:* ${userName}%0A*Phone:* ${userPhone}%0A*Service:* ${selectedService || 'General Repair'}%0A*Date:* ${selectedDate}%0A*Time:* ${selectedTime}`;
    window.open(`https://wa.me/919513134313?text=${message}`, '_blank');
  };

  const handleShareEmail = () => {
    const subject = `New Appointment Request - ${userName}`;
    const body = `New Appointment Request\n\nName: ${userName}\nPhone: ${userPhone}\nService: ${selectedService || 'General Repair'}\nDate: ${selectedDate}\nTime: ${selectedTime}`;
    window.open(`mailto:help@ipixelelectronics.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');
  };

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
    } else if (serviceName === 'Installation') {
      setSelectedService(serviceName);
      setView('installation-type');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (serviceName === 'Screen Replacement') {
      setSelectedService(serviceName);
      setView('screen-brands');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (serviceName === 'Wall Mount') {
      setSelectedService(serviceName);
      setView('wall-mount-selection');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
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
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black">Electronics</span>
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
                      />
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        onMouseEnter={() => setIsServicesOpen(true)}
                        className="absolute top-full left-0 mt-2 w-[320px] bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 py-4 z-20"
                      >
                        <button 
                          onClick={() => { handleServiceClick('LED TV Repair'); setIsServicesOpen(false); }}
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
                          onClick={() => { handleServiceClick('Screen Repair'); setIsServicesOpen(false); }}
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
                          onClick={() => { handleServiceClick('Screen Replacement'); setIsServicesOpen(false); }}
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
                          onClick={() => { handleServiceClick('Wall Mount'); setIsServicesOpen(false); }}
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
                      onClick={() => { handleServiceClick('LED TV Repair'); setIsMobileMenuOpen(false); }}
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
                      onClick={() => { handleServiceClick('Screen Repair'); setIsMobileMenuOpen(false); }}
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
                      onClick={() => { handleServiceClick('Screen Replacement'); setIsMobileMenuOpen(false); }}
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
                      onClick={() => { handleServiceClick('Wall Mount'); setIsMobileMenuOpen(false); }}
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
                    <button 
                      onClick={() => { setView('appointment-booking'); setIsMobileMenuOpen(false); }}
                      className="flex items-center gap-4 p-4 bg-black text-white rounded-2xl text-left"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-bold">Book Appointment</div>
                        <div className="text-xs text-white/60">Schedule a visit</div>
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
            <h1 className="text-[16px] sm:text-[20px] lg:text-[22px] font-bold mb-4 sm:mb-6 lg:mb-8 max-w-md leading-tight tracking-tight">
              Expert TV Service: Precision Screen Repair & Panel Replacement
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Service Selector */}
              <div className="lg:col-span-5 bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-gray-100 p-6 sm:p-8 lg:p-10">
                <h2 className="text-xl font-bold mb-6 tracking-tight">What are you looking for?</h2>
                
                {/* Category Tabs */}
                <div className="grid grid-cols-4 gap-1.5 sm:gap-2 mb-6">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`flex items-center gap-1 sm:gap-1.5 px-1 sm:px-3 py-2.5 rounded-xl text-[10px] sm:text-[12px] font-bold transition-all duration-300 justify-center ${
                        activeCategory === cat.id
                          ? 'bg-black text-white shadow-lg shadow-black/10 scale-[1.02]'
                          : 'bg-white text-gray-400 border border-gray-100 hover:bg-gray-50'
                      }`}
                    >
                      <span className={activeCategory === cat.id ? 'text-white' : 'text-gray-300'}>
                        {React.cloneElement(cat.icon as React.ReactElement, { className: 'w-3.5 h-3.5 sm:w-4 h-4' })}
                      </span>
                      {cat.name}
                    </button>
                  ))}
                </div>

                {/* Service Grid */}
                <div className={`${activeCategory === 'tv' ? 'grid grid-cols-3 gap-y-6 gap-x-2 sm:gap-y-8 sm:gap-x-4' : 'flex flex-col gap-4'} mb-8`}>
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
                          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-[1rem] sm:rounded-[1.25rem] bg-[#f8f9fa] flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-gray-100 transition-all duration-300">
                            <div className="text-gray-800 group-hover:scale-110 transition-transform duration-300 scale-90 sm:scale-100">
                              {service.icon}
                            </div>
                          </div>
                          <span className="text-[10px] sm:text-[12px] font-bold text-gray-500 leading-tight group-hover:text-black transition-colors">
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

                {/* Book Appointment Button */}
                <button 
                  onClick={() => setView('appointment-booking')}
                  className="w-full py-4 bg-black text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-gray-800 transition-all shadow-lg shadow-black/10 mb-8"
                >
                  <Calendar className="w-5 h-5" />
                  Book Appointment
                </button>

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

              {/* Right Column: Key Benefits & Trust */}
              <div className="lg:col-span-7 grid grid-cols-2 gap-3 sm:gap-6">
                <div className="bg-white rounded-2xl sm:rounded-[2rem] p-3 sm:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all">
                  <div className="flex flex-row sm:flex-col items-center gap-2 sm:gap-0 mb-2 sm:mb-6">
                    <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                      <ShieldCheck className="w-4 h-4 sm:w-6 sm:h-6" />
                    </div>
                    <h3 className="text-[13px] sm:text-lg font-bold leading-tight">180 Days Warranty</h3>
                  </div>
                  <p className="hidden sm:block text-xs sm:text-sm text-gray-500 leading-relaxed">Genuine parts and professional service backed by our comprehensive long-term warranty.</p>
                </div>

                <div className="bg-white rounded-2xl sm:rounded-[2rem] p-3 sm:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all">
                  <div className="flex flex-row sm:flex-col items-center gap-2 sm:gap-0 mb-2 sm:mb-6">
                    <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 flex-shrink-0">
                      <Zap className="w-4 h-4 sm:w-6 sm:h-6" />
                    </div>
                    <h3 className="text-[13px] sm:text-lg font-bold leading-tight">Same Day Repair</h3>
                  </div>
                  <p className="hidden sm:block text-xs sm:text-sm text-gray-500 leading-relaxed">Most screen and panel issues resolved within 24 hours at our advanced service center.</p>
                </div>

                <div className="bg-white rounded-2xl sm:rounded-[2rem] p-3 sm:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all">
                  <div className="flex flex-row sm:flex-col items-center gap-2 sm:gap-0 mb-2 sm:mb-6">
                    <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600 flex-shrink-0">
                      <Truck className="w-4 h-4 sm:w-6 sm:h-6" />
                    </div>
                    <h3 className="text-[13px] sm:text-lg font-bold leading-tight">Free Pickup & Drop</h3>
                  </div>
                  <p className="hidden sm:block text-xs sm:text-sm text-gray-500 leading-relaxed">Hassle-free service with doorstep pickup and delivery across Bangalore city.</p>
                </div>

                <div className="bg-white rounded-2xl sm:rounded-[2rem] p-3 sm:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all">
                  <div className="flex flex-row sm:flex-col items-center gap-2 sm:gap-0 mb-2 sm:mb-6">
                    <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600 flex-shrink-0">
                      <Cpu className="w-4 h-4 sm:w-6 sm:h-6" />
                    </div>
                    <h3 className="text-[13px] sm:text-lg font-bold leading-tight">Advanced Bonding</h3>
                  </div>
                  <p className="hidden sm:block text-xs sm:text-sm text-gray-500 leading-relaxed">In-house state-of-the-art COF bonding machine for factory-quality panel repairs.</p>
                </div>

                <div className="col-span-2 bg-black rounded-[2.5rem] p-8 sm:p-10 text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-4">Need an Instant Quote?</h3>
                    <p className="text-gray-400 mb-8 max-w-md">Share your TV model and issue details on WhatsApp for a quick estimate from our experts.</p>
                    <a 
                      href="https://wa.me/919876543210" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-8 py-4 bg-[#25d366] text-white rounded-2xl font-bold hover:scale-105 active:scale-95 transition-all"
                    >
                      <MessageCircle className="w-6 h-6 fill-current" />
                      Chat on WhatsApp
                    </a>
                  </div>
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
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
              
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
                {[
                  { color: 'bg-blue-50', text: 'upto 10% Off on Screen Replacement' },
                  { color: 'bg-green-50', text: 'Free Pickup & Delivery in Bangalore' },
                  { color: 'bg-purple-50', text: 'Up to 180 days warranty on all repairs' }
                ].map((offer, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ y: -10 }}
                    className={`${offer.color} h-28 sm:h-56 rounded-2xl sm:rounded-[2.5rem] p-4 sm:p-10 flex flex-col justify-center sm:justify-end border border-white/50 shadow-sm transition-all cursor-pointer`}
                  >
                    <div className="flex flex-row sm:flex-col items-center gap-3 sm:gap-0">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-lg sm:rounded-xl mb-0 sm:mb-4 flex items-center justify-center shadow-sm flex-shrink-0">
                        <Star className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                      </div>
                      <h4 className="text-xs sm:text-xl font-bold text-gray-800 leading-tight">{offer.text}</h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          </motion.main>
        ) : view === 'wall-mount-selection' ? (
          <motion.main 
            key="wall-mount-selection"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="max-w-7xl mx-auto px-6 py-16"
          >
            <div className="flex items-start gap-6 mb-12">
              <button 
                onClick={() => setView('home')}
                className="p-3 hover:bg-gray-100 rounded-full transition-colors mt-1"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <div>
                <h1 className="text-4xl font-bold tracking-tight mb-2">Wall Mount Service</h1>
                <p className="text-gray-500 font-medium">Select the type of wall mount you need</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
              {WALL_MOUNT_TYPES.map((type, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-[1.25rem] sm:rounded-[2rem] p-3.5 sm:p-10 border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] flex flex-col items-center text-center group transition-all"
                >
                  <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-[#f8f9fa] flex items-center justify-center mb-3 sm:mb-8 group-hover:bg-gray-100 transition-colors">
                    <div className="text-gray-800 scale-90 sm:scale-110">
                      {type.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-sm sm:text-2xl font-bold tracking-tight mb-1 sm:mb-2">{type.title}</h3>
                  <p className="text-gray-400 text-[10px] sm:text-sm font-medium mb-4 sm:mb-8 leading-relaxed">
                    {type.desc}
                  </p>
                  
                  <a 
                    href={`https://wa.me/919513134313?text=I%20want%20to%20consult%20about%20${encodeURIComponent(type.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 py-2.5 sm:px-6 sm:py-3 bg-[#f0fff4] text-[#16a34a] rounded-full text-[10px] sm:text-sm font-bold hover:bg-[#dcfce7] transition-all border border-[#bbf7d0] w-full"
                  >
                    <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 fill-[#25d366] text-[#25d366]" />
                    WhatsApp
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.main>
        ) : view === 'screen-brands' ? (
          <motion.main 
            key="screen-brands"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="max-w-7xl mx-auto px-6 py-16"
          >
            <div className="flex items-start gap-6 mb-12">
              <button 
                onClick={() => setView('home')}
                className="p-3 hover:bg-gray-100 rounded-full transition-colors mt-1"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <div>
                <h1 className="text-4xl font-bold tracking-tight mb-2">Screen Replacement</h1>
                <p className="text-gray-500 font-medium">Select your preferred panel brand</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {SCREEN_BRANDS.map((brand, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-[1.5rem] sm:rounded-[2rem] p-5 sm:p-10 border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] flex flex-col items-center text-center group transition-all"
                >
                  <div className="flex flex-row sm:flex-col items-center gap-4 sm:gap-0 w-full sm:w-auto mb-4 sm:mb-8">
                    <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-[#f8f9fa] flex items-center justify-center group-hover:bg-gray-100 transition-colors flex-shrink-0">
                      <Layers className="w-6 h-6 sm:w-10 sm:h-10 text-gray-400 group-hover:text-black transition-colors" />
                    </div>
                    <h3 className="text-sm sm:text-xl font-bold tracking-tight text-left sm:text-center">{brand.name}</h3>
                  </div>
                  
                  <p className="hidden sm:block text-gray-400 text-sm font-medium mb-10 leading-relaxed max-w-[200px]">
                    {brand.desc}
                  </p>
                  
                  <div className="flex flex-col gap-2 sm:gap-3 w-full">
                    <a 
                      href={`https://wa.me/919513134313?text=I%20want%20to%20consult%20about%20${encodeURIComponent(brand.name)}%20screen%20replacement`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 bg-[#f0fff4] text-[#16a34a] rounded-full text-[10px] sm:text-sm font-bold hover:bg-[#dcfce7] transition-all border border-[#bbf7d0] w-full"
                    >
                      <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 fill-[#25d366] text-[#25d366]" />
                      WhatsApp
                    </a>
                    <a 
                      href="tel:+919513134313"
                      className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 bg-blue-50 text-blue-600 rounded-full text-[10px] sm:text-sm font-bold hover:bg-blue-100 transition-all border border-blue-100 w-full"
                    >
                      <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                      Call Now
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
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
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {DIAGNOSIS_ISSUES.map((issue, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-[1.5rem] sm:rounded-[2rem] p-5 sm:p-10 border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] flex flex-col items-center sm:items-center text-center sm:text-center group transition-all"
                >
                  <div className="flex flex-row sm:flex-col items-center gap-4 sm:gap-0 w-full sm:w-auto mb-4 sm:mb-8">
                    <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-[#f8f9fa] flex items-center justify-center group-hover:bg-gray-100 transition-colors flex-shrink-0">
                      <div className="text-gray-800 scale-90 sm:scale-110">
                        {issue.icon}
                      </div>
                    </div>
                    <h3 className="text-sm sm:text-xl font-bold tracking-tight text-left sm:text-center">{issue.title}</h3>
                  </div>
                  
                  <p className="hidden sm:block text-gray-400 text-sm font-medium mb-10 leading-relaxed max-w-[200px]">
                    {issue.desc}
                  </p>
                  
                  <div className="flex flex-col gap-2 sm:gap-3 w-full">
                    <a 
                      href={`https://wa.me/919513134313?text=I%20am%20facing%20${encodeURIComponent(issue.title)}%20with%20my%20${encodeURIComponent(selectedService || 'TV')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 bg-[#f0fff4] text-[#16a34a] rounded-full text-[10px] sm:text-sm font-bold hover:bg-[#dcfce7] transition-all border border-[#bbf7d0] w-full"
                    >
                      <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 fill-[#25d366] text-[#25d366]" />
                      WhatsApp
                    </a>
                    <a 
                      href="tel:+919513134313"
                      className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 bg-blue-50 text-blue-600 rounded-full text-[10px] sm:text-sm font-bold hover:bg-blue-100 transition-all border border-blue-100 w-full"
                    >
                      <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                      Call Now
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.main>
        ) : view === 'installation-type' ? (
          <motion.main 
            key="installation-type"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="max-w-7xl mx-auto px-6 py-16"
          >
            {/* Installation Type Header */}
            <div className="flex items-start gap-6 mb-12">
              <button 
                onClick={() => setView('home')}
                className="p-3 hover:bg-gray-100 rounded-full transition-colors mt-1"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <div>
                <h1 className="text-4xl font-bold tracking-tight mb-2">Installation Service</h1>
                <p className="text-gray-500 font-medium">Select the type of service you need</p>
              </div>
            </div>

            {/* Installation Type Grid */}
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4 sm:gap-8 max-w-4xl">
              {INSTALLATION_TYPES.map((type, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-[1.25rem] sm:rounded-[2rem] p-3.5 sm:p-10 border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] flex flex-col items-center text-center group transition-all"
                >
                  <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-[#f8f9fa] flex items-center justify-center mb-3 sm:mb-8 group-hover:bg-gray-100 transition-colors">
                    <div className="text-gray-800 scale-90 sm:scale-110">
                      {type.icon}
                    </div>
                  </div>
                  <h3 className="text-sm sm:text-2xl font-bold mb-1 sm:mb-2 tracking-tight">{type.title}</h3>
                  <p className="text-gray-400 text-[10px] sm:text-sm font-medium mb-4 sm:mb-8 leading-relaxed max-w-[240px]">
                    {type.desc}
                  </p>
                  
                  <button 
                    onClick={() => {
                      setSelectedInstallationType(type.title);
                      setView('tv-size-selection');
                    }}
                    className="flex items-center justify-center gap-1.5 sm:gap-3 px-3 sm:px-8 py-2.5 sm:py-4 bg-[#25d366] text-white rounded-xl sm:rounded-2xl text-[10px] sm:text-sm font-bold hover:bg-[#20ba56] transition-all shadow-lg shadow-[#25d366]/20 w-full"
                  >
                    <ArrowRight className="w-3 h-3 sm:w-5 sm:h-5" />
                    Select Size
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.main>
        ) : view === 'tv-size-selection' ? (
          <motion.main 
            key="tv-size-selection"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="max-w-7xl mx-auto px-6 py-16"
          >
            {/* TV Size Header */}
            <div className="flex items-start gap-6 mb-12">
              <button 
                onClick={() => setView('installation-type')}
                className="p-3 hover:bg-gray-100 rounded-full transition-colors mt-1"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <div>
                <h1 className="text-4xl font-bold tracking-tight mb-2">Select TV Size</h1>
                <p className="text-gray-500 font-medium">Choose your TV size for {selectedInstallationType}</p>
              </div>
            </div>

            {/* TV Size Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
              {TV_SIZES.map((size, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-[1.25rem] sm:rounded-[2rem] p-3.5 sm:p-10 border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] flex flex-col items-center sm:items-center text-center sm:text-center group transition-all"
                >
                  <div className="flex flex-row sm:flex-col items-center gap-3 sm:gap-0 w-full sm:w-auto mb-2 sm:mb-6">
                    <div className="w-10 h-10 sm:w-20 sm:h-20 rounded-full bg-[#f8f9fa] flex items-center justify-center group-hover:bg-gray-100 transition-colors flex-shrink-0">
                      <div className="text-gray-800 scale-75 sm:scale-110">
                        <Maximize className="w-8 h-8" />
                      </div>
                    </div>
                    <h3 className="text-xs sm:text-2xl font-bold tracking-tight text-left sm:text-center">{size.label}</h3>
                  </div>
                  
                  <div className="flex flex-col gap-1.5 sm:gap-3 w-full">
                    <a 
                      href={`https://wa.me/919513134313?text=I%20want%20to%20request%20${encodeURIComponent(selectedInstallationType || '')}%20service%20for%20a%20${encodeURIComponent(size.label)}%20TV`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2 sm:py-2.5 bg-[#f0fff4] text-[#16a34a] rounded-full text-[10px] sm:text-sm font-bold hover:bg-[#dcfce7] transition-all border border-[#bbf7d0] w-full"
                    >
                      <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 fill-[#25d366] text-[#25d366]" />
                      WhatsApp
                    </a>
                    <a 
                      href="tel:+919513134313"
                      className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2 sm:py-2.5 bg-blue-50 text-blue-600 rounded-full text-[10px] sm:text-sm font-bold hover:bg-blue-100 transition-all border border-blue-100 w-full"
                    >
                      <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                      Call Now
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.main>
        ) : view === 'appointment-booking' ? (
          <motion.main 
            key="appointment-booking"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-3xl mx-auto px-6 py-12"
          >
            <div className="flex items-center gap-4 mb-8">
              <button 
                onClick={() => setView('home')}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <h1 className="text-3xl font-bold tracking-tight">Book Appointment</h1>
            </div>

            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
              {/* Date Selection */}
              <div className="mb-8">
                <label className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4 block">Select Date (Next 3 Days)</label>
                <div className="grid grid-cols-3 gap-4">
                  {getNextThreeDays().map((day) => (
                    <button
                      key={day.fullDate}
                      onClick={() => setSelectedDate(day.fullDate)}
                      className={`flex flex-col items-center p-4 rounded-2xl border-2 transition-all ${
                        selectedDate === day.fullDate 
                          ? 'border-black bg-black text-white' 
                          : 'border-gray-100 hover:border-gray-200 text-gray-600'
                      }`}
                    >
                      <span className="text-xs font-bold uppercase mb-1">{day.dayName}</span>
                      <span className="text-2xl font-bold">{day.dateNum}</span>
                      <span className="text-xs font-medium opacity-60">{day.month}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Selection */}
              <div className="mb-8">
                <label className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4 block">Select Time Slot</label>
                <div className="grid grid-cols-3 gap-3">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`py-3 rounded-xl border-2 text-sm font-bold transition-all ${
                        selectedTime === time 
                          ? 'border-black bg-black text-white' 
                          : 'border-gray-100 hover:border-gray-200 text-gray-600'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <div>
                  <label className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2 block">Your Name</label>
                  <input 
                    type="text" 
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full p-4 bg-gray-50 rounded-2xl border border-transparent focus:border-black focus:bg-white outline-none transition-all font-medium"
                  />
                </div>
                <div>
                  <label className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2 block">Phone Number</label>
                  <input 
                    type="tel" 
                    value={userPhone}
                    onChange={(e) => setUserPhone(e.target.value)}
                    placeholder="Enter your phone number"
                    className="w-full p-4 bg-gray-50 rounded-2xl border border-transparent focus:border-black focus:bg-white outline-none transition-all font-medium"
                  />
                </div>
              </div>

              {/* Share Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button 
                  onClick={handleShareWhatsApp}
                  disabled={!selectedDate || !selectedTime || !userName || !userPhone}
                  className="flex items-center justify-center gap-3 py-4 bg-[#25d366] text-white rounded-2xl font-bold hover:bg-[#22c35e] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-green-500/20"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  Share on WhatsApp
                </button>
                <button 
                  onClick={handleShareEmail}
                  disabled={!selectedDate || !selectedTime || !userName || !userPhone}
                  className="flex items-center justify-center gap-3 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-500/20"
                >
                  <HelpCircle className="w-5 h-5" />
                  Share via Email
                </button>
              </div>
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
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {SCREEN_ISSUES.map((issue, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-[1.5rem] sm:rounded-[2rem] p-5 sm:p-10 border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] flex flex-col items-center sm:items-center text-center sm:text-center group transition-all"
                >
                  <div className="flex flex-row sm:flex-col items-center gap-4 sm:gap-0 w-full sm:w-auto mb-4 sm:mb-8">
                    <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-[#f8f9fa] flex items-center justify-center group-hover:bg-gray-100 transition-colors flex-shrink-0">
                      <div className="text-gray-800 scale-90 sm:scale-110">
                        {issue.icon}
                      </div>
                    </div>
                    <h3 className="text-sm sm:text-xl font-bold tracking-tight text-left sm:text-center">{issue.title}</h3>
                  </div>
                  
                  <p className="hidden sm:block text-gray-400 text-sm font-medium mb-10 leading-relaxed max-w-[200px]">
                    {issue.desc}
                  </p>
                  
                  <div className="flex flex-col gap-2 sm:gap-3 w-full">
                    <a 
                      href={`https://wa.me/919513134313?text=I%20am%20facing%20${encodeURIComponent(issue.title)}%20with%20my%20${encodeURIComponent(selectedService || 'TV')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 bg-[#f0fff4] text-[#16a34a] rounded-full text-[10px] sm:text-sm font-bold hover:bg-[#dcfce7] transition-all border border-[#bbf7d0] w-full"
                    >
                      <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 fill-[#25d366] text-[#25d366]" />
                      WhatsApp
                    </a>
                    <a 
                      href="tel:+919513134313"
                      className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 bg-blue-50 text-blue-600 rounded-full text-[10px] sm:text-sm font-bold hover:bg-blue-100 transition-all border border-blue-100 w-full"
                    >
                      <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                      Call Now
                    </a>
                  </div>
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
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-black">Electronics</span>
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
  );
}
