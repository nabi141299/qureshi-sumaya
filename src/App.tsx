/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageCircle, 
  Tv, 
  CheckCircle, 
  MapPin, 
  Clock, 
  Menu, 
  X, 
  ChevronRight,
  ShieldCheck,
  Wrench,
  Monitor
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const TV_TYPES = [
  { id: 'led', name: 'LED TV', icon: <Monitor className="w-6 h-6" />, description: 'Standard high-definition display repair' },
  { id: 'lcd', name: 'LCD TV', icon: <Tv className="w-6 h-6" />, description: 'Classic liquid crystal display service' },
  { id: 'qled', name: 'QLED TV', icon: <Monitor className="w-6 h-6 text-blue-400" />, description: 'Quantum dot display panel replacement' },
  { id: 'oled', name: 'OLED TV', icon: <Tv className="w-6 h-6 text-indigo-400" />, description: 'Organic LED premium panel repair' },
];

const SERVICES = [
  { title: 'Panel Replacement', description: 'Cracked or damaged screen? We provide genuine panel replacements for all major brands.' },
  { title: 'Display Issues', description: 'Fixing lines on screen, black spots, or flickering displays with precision.' },
  { title: 'Motherboard Repair', description: 'Expert diagnosis and repair of TV motherboards and power supply units.' },
  { title: 'Backlight Service', description: 'Restoring brightness and clarity to dim or dark TV screens.' },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedTv, setSelectedTv] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const phoneNumber = "9513134313";
  const whatsappLink = `https://wa.me/91${phoneNumber}`;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-600/20">
              <Tv className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white uppercase">ipixel <span className="text-blue-500">electronics</span></span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium hover:text-blue-400 transition-colors">Services</a>
            <a href="#book" className="text-sm font-medium hover:text-blue-400 transition-colors">Book Repair</a>
            <a href="#about" className="text-sm font-medium hover:text-blue-400 transition-colors">About</a>
            <a 
              href={`tel:${phoneNumber}`}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-600/20"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-slate-400 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-slate-950 pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-center">
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-2xl font-semibold">Services</a>
              <a href="#book" onClick={() => setIsMenuOpen(false)} className="text-2xl font-semibold">Book Repair</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-2xl font-semibold">About</a>
              <a 
                href={`tel:${phoneNumber}`}
                className="flex items-center justify-center gap-3 bg-blue-600 text-white py-4 rounded-2xl text-xl font-bold"
              >
                <Phone /> Call 9513134313
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
                <ShieldCheck className="w-4 h-4" />
                Certified Technicians
              </span>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
                Expert TV Repair & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Panel Replacement</span>
              </h1>
              <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl">
                Specializing in all types of display and panel replacements with professional precision. We offer a <span className="text-white font-semibold">180-day warranty</span> on all repairs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#book"
                  className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-105 shadow-xl shadow-blue-600/20 flex items-center justify-center gap-2"
                >
                  Book a Repair
                  <ChevronRight className="w-5 h-5" />
                </a>
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-105 shadow-xl shadow-emerald-600/20 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Selection (Interactive) */}
      <section id="book" className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">Book a Repair</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Select your TV type to get started with our expert diagnostic service.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TV_TYPES.map((type) => (
              <motion.div
                key={type.id}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedTv(type.id)}
                className={`cursor-pointer p-8 rounded-3xl border-2 transition-all duration-300 ${
                  selectedTv === type.id 
                    ? 'bg-blue-600/10 border-blue-500 shadow-2xl shadow-blue-500/20' 
                    : 'bg-slate-900 border-white/5 hover:border-white/20'
                }`}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors ${
                  selectedTv === type.id ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400'
                }`}>
                  {type.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{type.name}</h3>
                <p className="text-sm text-slate-400">{type.description}</p>
                {selectedTv === type.id && (
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="mt-4 flex items-center gap-2 text-blue-400 text-sm font-bold"
                  >
                    <CheckCircle className="w-4 h-4" />
                    Selected
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {selectedTv && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center"
            >
              <h4 className="text-2xl font-bold mb-2">Great Choice!</h4>
              <p className="mb-6 opacity-90">Our experts are ready to fix your {TV_TYPES.find(t => t.id === selectedTv)?.name}.</p>
              <a 
                href={`tel:${phoneNumber}`}
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-slate-100 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call for Instant Quote
              </a>
            </motion.div>
          )}
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">Our Specializations</h2>
              <p className="text-slate-400">From basic display issues to complex panel replacements, we handle everything with professional care.</p>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 text-blue-400 font-bold">
                <Wrench className="w-5 h-5" />
                Genuine Parts
              </div>
              <div className="flex items-center gap-2 text-blue-400 font-bold">
                <ShieldCheck className="w-5 h-5" />
                Warranty Included
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service, index) => (
              <div 
                key={index}
                className="group p-8 rounded-3xl bg-slate-900 border border-white/5 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-24 bg-slate-900/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden bg-slate-800 border border-white/10 relative z-10">
                <img 
                  src="https://picsum.photos/seed/electronics/800/800" 
                  alt="TV Repair Workshop" 
                  className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="p-6 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-white/10">
                    <p className="text-white font-bold text-lg mb-1">10+ Years Experience</p>
                    <p className="text-slate-400 text-sm">Serving thousands of happy customers in the region.</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-600/20 rounded-full blur-3xl" />
            </div>

            <div>
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8">Precision in Every Pixel</h2>
              <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                <p>
                  At <span className="text-white font-semibold">ipixel electronics</span>, we understand that your TV is the centerpiece of your home entertainment. Our mission is to restore your viewing experience with unmatched precision and care.
                </p>
                <p>
                  We specialize in all types of display and panel replacements, from standard LED units to high-end OLED and QLED panels. Our technicians are trained to handle the most delicate components with professional expertise.
                </p>
                <ul className="space-y-4 pt-4">
                  {[
                    'Genuine OEM Panel Replacements',
                    'Advanced Diagnostic Equipment',
                    '180-Day Comprehensive Warranty',
                    'Doorstep Pickup & Delivery Available'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white font-medium">
                      <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-500">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[3rem] p-8 lg:p-20 relative overflow-hidden shadow-2xl shadow-blue-600/20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="text-4xl lg:text-6xl font-extrabold text-white mb-8">Ready to Fix Your TV?</h2>
              <p className="text-xl text-blue-100 mb-12">Don't settle for a broken screen. Get a professional repair today and enjoy your favorite shows again.</p>
              
              <div className="flex flex-col items-center gap-8">
                <div className="flex flex-col items-center">
                  <span className="text-blue-200 text-sm font-bold uppercase tracking-widest mb-2">Call us directly</span>
                  <a 
                    href={`tel:${phoneNumber}`}
                    className="text-4xl lg:text-6xl font-black text-white hover:scale-105 transition-transform"
                  >
                    {phoneNumber}
                  </a>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                  <a 
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-bold text-xl flex items-center gap-3 hover:bg-slate-100 transition-all hover:scale-105 shadow-xl"
                  >
                    <MessageCircle className="w-6 h-6" />
                    WhatsApp Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 pt-20 pb-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <Tv className="text-white w-5 h-5" />
                </div>
                <span className="text-xl font-bold tracking-tight text-white uppercase">ipixel <span className="text-blue-500">electronics</span></span>
              </div>
              <p className="text-slate-400 max-w-sm mb-8">
                Bangalore's trusted destination for premium TV repair and panel replacement services. Professional precision for every pixel.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Contact Info</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-slate-400">
                  <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                  <span>+91 9513134313</span>
                </li>
                <li className="flex items-start gap-3 text-slate-400">
                  <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                  <span>Bangalore, Karnataka, India</span>
                </li>
                <li className="flex items-start gap-3 text-slate-400">
                  <Clock className="w-5 h-5 text-blue-500 shrink-0" />
                  <div>
                    <p>Mon - Sat: 10:00 AM - 8:00 PM</p>
                    <p>Sun: 11:00 AM - 4:00 PM</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-slate-400">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-blue-400 transition-colors">Services</a></li>
                <li><a href="#book" className="hover:text-blue-400 transition-colors">Book Repair</a></li>
                <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
            <p>© 2026 ipixel electronics. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-slate-300">Privacy Policy</a>
              <a href="#" className="hover:text-slate-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
