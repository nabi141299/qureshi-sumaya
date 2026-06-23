import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  BookOpen, 
  Search, 
  HelpCircle, 
  Settings, 
  ShieldCheck, 
  Zap, 
  Clock, 
  AlertTriangle, 
  MessageCircle, 
  Phone,
  CornerDownRight,
  Cpu,
  Tv,
  Layers,
  Wrench
} from 'lucide-react';

interface GuideProps {
  setView: (view: any) => void;
  selectedGuideId?: string;
  setSelectedGuideId?: (id: string | undefined) => void;
}

export interface TechGuide {
  id: string;
  title: string;
  slug: string;
  category: 'screen' | 'power' | 'backlight' | 'advanced';
  categoryLabel: string;
  targetKeyword: string;
  symptoms: string;
  rootCause: string;
  solution: string;
  timeframe: string;
  priceEst: string;
  whatsappMessage: string;
}

export const TECHNICAL_GUIDES: TechGuide[] = [
  // 1. High-Intent "Screen & Panel" Issues
  {
    id: 'sony-double-image',
    title: 'Sony Bravia LED TV Double Image Problem Repair',
    slug: 'sony-bravia-led-tv-double-image-problem-repair-bengaluru',
    category: 'screen',
    categoryLabel: 'Screen & Panel Issues',
    targetKeyword: 'Sony Bravia LED TV double image problem repair Bengaluru',
    symptoms: 'Screen content duplicates vertically, vibrates slightly, or displays ghost lines overlaying the primary image.',
    rootCause: 'Imbalance or failure in the Gate COF (Chip on Film) signals or failure of clock lines (CKV1, CKV2, CKVB) coming from the T-CON board. Often triggered by micro-moisture entering bottom panel border.',
    solution: 'High-precision laser isolation of shorted gate lines on the panel or replacement of the damaged side COF IC using our automated panel bonding machinery.',
    timeframe: '24 Hours Max',
    priceEst: '₹1,800 - ₹3,500 (depending on screen size)',
    whatsappMessage: 'Hi iPixel! I need a repair quote for Sony Bravia LED TV double image problem repair Bengaluru.'
  },
  {
    id: 'samsung-qled-vertical-lines',
    title: 'Samsung QLED TV Vertical Lines on Screen Fix',
    slug: 'samsung-qled-tv-vertical-lines-on-screen-fix',
    category: 'screen',
    categoryLabel: 'Screen & Panel Issues',
    targetKeyword: 'Samsung QLED TV vertical lines on screen fix',
    symptoms: 'One or multiple thin, colored vertical lines stretching from the absolute top to the bottom of the screen.',
    rootCause: 'Data driver COF detachment from the glass substrate or failure of the source driver ICs. Typically due to heat stress or minor liquid contact during screen cleaning.',
    solution: 'Re-bonding the disconnected COF tab using premium ACP (Anisotropic Conductive Film) and our high-accuracy tab bonding machine.',
    timeframe: '1 - 2 Days',
    priceEst: '₹2,500 - ₹4,800',
    whatsappMessage: 'Hi iPixel! I need a fix for Samsung QLED TV vertical lines on screen.'
  },
  {
    id: 'lg-blue-tint',
    title: 'LG LED TV Blue Screen Tint Problem Repair Price',
    slug: 'lg-led-tv-blue-screen-tint-problem-repair-price',
    category: 'screen',
    categoryLabel: 'Screen & Panel Issues',
    targetKeyword: 'LG LED TV blue screen tint problem repair price',
    symptoms: 'The overall picture displays a harsh, cold bluish/purple tint, making whites look dark blue and colors distorted.',
    rootCause: 'The phosphorus coating on the internal LED backlight beads degrades over time under heat, exposing the raw blue LED light emitter beneath.',
    solution: 'Complete replacement of the entire LED backlight strips with original LG OEM high-index LED arrays.',
    timeframe: '3 to 6 Hours',
    priceEst: '₹1,500 - ₹3,200 (includes genuine original strips)',
    whatsappMessage: 'Hi iPixel! What is the LG LED TV blue screen tint problem repair price?'
  },
  {
    id: 'mi-blinking-display',
    title: 'Mi TV Display Blinking Issue Fix Near Me',
    slug: 'mi-tv-display-blinking-issue-fix-near-me',
    category: 'screen',
    categoryLabel: 'Screen & Panel Issues',
    targetKeyword: 'Mi TV display blinking issue fix near me',
    symptoms: 'The screen rapidly flashes on and off, or brightness fluctuates constantly while the sound remains steady.',
    rootCause: 'Fluctuating feedback loop in the LED driver circuit on the motherboard or a failing backlight strip drawing uneven current.',
    solution: 'Replacing faulty backlight strips or repairing feedback resistor networks on the Mi TV power controller card.',
    timeframe: 'Same Day Service',
    priceEst: '₹1,200 - ₹2,500',
    whatsappMessage: 'Hi iPixel! My Mi TV display is blinking. Need a fix near me.'
  },
  {
    id: 'oneplus-horizontal-bars',
    title: 'OnePlus TV Horizontal Bars on Screen Replacement',
    slug: 'oneplus-tv-horizontal-bars-on-screen-replacement-bangalore',
    category: 'screen',
    categoryLabel: 'Screen & Panel Issues',
    targetKeyword: 'OnePlus TV horizontal bars on screen replacement Bangalore',
    symptoms: 'Dark or colored horizontal bars flicker across the screen, blocking partial or full view of the display.',
    rootCause: 'Internal row driver failure or corrosion on the FFC ribbon cables connecting the T-CON board to the panel.',
    solution: 'Replacing corroded flat cables or applying laser-reconditioning on row drivers. If the internal glass path is damaged, premium panel replacement is handled directly.',
    timeframe: '24 to 48 Hours',
    priceEst: '₹1,800 - ₹3,900',
    whatsappMessage: 'Hi iPixel! I need OnePlus TV horizontal bars on screen replacement Bangalore.'
  },
  {
    id: 'samsung-half-black',
    title: 'Samsung LED TV Half Screen Black Picture Fix',
    slug: 'samsung-led-tv-half-screen-black-picture-fix',
    category: 'screen',
    categoryLabel: 'Screen & Panel Issues',
    targetKeyword: 'Samsung LED TV half screen black picture fix',
    symptoms: 'Exactly one vertical half (left or right) of the screen is completely black, while the other half functions perfectly.',
    rootCause: 'Failed side COF chip or loss of gate voltage signals (VGH/VGL) on one of the side driver boards.',
    solution: 'Bypassing missing voltages to the unpowered panel half or replacing the specific faulty driver board component.',
    timeframe: '24 Hours Max',
    priceEst: '₹2,200 - ₹4,500',
    whatsappMessage: 'Hi iPixel! I need a Samsung LED TV half screen black picture fix.'
  },
  {
    id: 'sony-slow-motion',
    title: 'Sony TV Slow Motion Display Problem Repair',
    slug: 'sony-tv-slow-motion-display-problem-repair',
    category: 'screen',
    categoryLabel: 'Screen & Panel Issues',
    targetKeyword: 'Sony TV slow motion display problem repair',
    symptoms: 'The display appears extremely laggy, with moving objects leaving ghosting trails on the screen, looking like slow motion.',
    rootCause: 'Slow charging of liquid crystal pixels due to inadequate or faulty gate-drive bias voltages (typically VGH or CKV clock line failures).',
    solution: 'Re-biasing the gate voltage values or repairing T-CON signal paths.',
    timeframe: '24 Hours Max',
    priceEst: '₹1,800 - ₹3,200',
    whatsappMessage: 'Hi iPixel! I need help with Sony TV slow motion display problem repair.'
  },
  {
    id: 'realme-flickering-issue',
    title: 'Realme Smart TV Screen Flickering Issue Service',
    slug: 'realme-smart-tv-screen-flickering-issue-service',
    category: 'screen',
    categoryLabel: 'Screen & Panel Issues',
    targetKeyword: 'Realme Smart TV screen flickering issue service',
    symptoms: 'Random vertical shaking, jumping picture, or quick brightness strobing on Realme Android TVs.',
    rootCause: 'Noisy power supply filtering capacitors or faulty backlight dimming feedback loops.',
    solution: 'Replacing secondary filter capacitors on the power rail or stabilizing the backlight inverter controller IC.',
    timeframe: 'Same Day Service',
    priceEst: '₹1,100 - ₹2,400',
    whatsappMessage: 'Hi iPixel! I need Realme Smart TV screen flickering issue service.'
  },

  // 2. Power & Motherboard Failures
  {
    id: 'sony-red-light-6',
    title: 'Sony Bravia Red Light Blinking 6 Times Repair',
    slug: 'sony-bravia-red-light-blinking-6-times-repair-service-bangalore',
    category: 'power',
    categoryLabel: 'Power & Motherboard',
    targetKeyword: 'Sony Bravia red light blinking 6 times repair service Bangalore',
    symptoms: 'TV does not turn on. The front standby LED continuously flashes red in a sequence of 6 blinks, pauses, and repeats.',
    rootCause: 'Backlight system error (Inverter board failure, bad LED strips, or unbalanced voltage detection by the main motherboard protection circuit).',
    solution: 'Component-level power board repair or full LED backlight string replacement to restore correct voltage feedback balance.',
    timeframe: 'Same Day Service',
    priceEst: '₹1,500 - ₹3,500',
    whatsappMessage: 'Hi iPixel! I need Sony Bravia red light blinking 6 times repair service Bangalore.'
  },
  {
    id: 'mi-stuck-logo',
    title: 'Mi TV Stuck on Logo Boot Loop Fix',
    slug: 'mi-tv-stuck-on-logo-boot-loop-fix',
    category: 'power',
    categoryLabel: 'Power & Motherboard',
    targetKeyword: 'Mi TV stuck on logo boot loop fix',
    symptoms: 'The TV powers on, shows the "Mi" or "PatchWall" logo, then restarts repeatedly or hangs on the logo indefinitely.',
    rootCause: 'Corrupted eMMC flash storage firmware or failing Android system partition. Often happens after sudden power outages.',
    solution: 'Flashing original Mi authorized firmware via ISP eMMC programmer, or factory recovery reset at chip level.',
    timeframe: 'Same Day Service',
    priceEst: '₹1,200 - ₹2,500',
    whatsappMessage: 'Hi iPixel! I need Mi TV stuck on logo boot loop fix.'
  },
  {
    id: 'samsung-dead-motherboard',
    title: 'Samsung LED TV No Power Dead Motherboard Repair',
    slug: 'samsung-led-tv-no-power-dead-motherboard-repair',
    category: 'power',
    categoryLabel: 'Power & Motherboard',
    targetKeyword: 'Samsung LED TV no power dead motherboard repair',
    symptoms: 'No standby light, no screen display, and zero response when pressing power buttons on remote or TV controller.',
    rootCause: 'Surge-induced primary circuit fuse blowout, or blown power management IC (PMIC) on the Samsung motherboard.',
    solution: 'Replacing power ICs, Schottky diodes, and secondary filter capacitors on primary boards. Avoids expensive full board replacement!',
    timeframe: 'Same Day Service',
    priceEst: '₹1,500 - ₹3,800',
    whatsappMessage: 'Hi iPixel! I need Samsung LED TV no power dead motherboard repair.'
  },
  {
    id: 'lg-clicking-sound',
    title: "LG TV Clicking Sound But Won't Turn On Fix",
    slug: 'lg-tv-clicking-sound-but-wont-turn-on-fix',
    category: 'power',
    categoryLabel: 'Power & Motherboard',
    targetKeyword: "LG TV clicking sound but won't turn on fix",
    symptoms: 'A rapid clicking or ticking sound is heard from behind the TV, but the screen remains completely dead.',
    rootCause: 'Faulty relays or overloaded standby circuit on the power supply board, failing to boot secondary power rails.',
    solution: 'Replacing secondary switching transistors and power relays on the power card.',
    timeframe: '4 to 6 Hours',
    priceEst: '₹1,200 - ₹2,800',
    whatsappMessage: "Hi iPixel! My LG TV is clicking but won't turn on. Need a fix."
  },
  {
    id: 'toshiba-red-light',
    title: 'Toshiba LED TV Red Light On But No Display Repair',
    slug: 'toshiba-led-tv-red-light-on-but-no-display-repair',
    category: 'power',
    categoryLabel: 'Power & Motherboard',
    targetKeyword: 'Toshiba LED TV red light on but no display repair',
    symptoms: 'The red indicator stays constant or turns green when powered, but there is zero picture output.',
    rootCause: 'Corrupted SPI Flash ROM or failure in secondary logic voltage rails powering the main processor chip.',
    solution: 'Reprogramming or replacing SPI Flash ROM with authorized Toshiba microcode.',
    timeframe: '24 Hours Max',
    priceEst: '₹1,400 - ₹2,900',
    whatsappMessage: 'Hi iPixel! I need Toshiba LED TV red light on but no display repair.'
  },
  {
    id: 'oneplus-auto-off',
    title: 'OnePlus TV Automatically Turning Off and On Fix',
    slug: 'oneplus-tv-automatically-turning-off-and-on-problem',
    category: 'power',
    categoryLabel: 'Power & Motherboard',
    targetKeyword: 'OnePlus TV automatically turning off and on problem',
    symptoms: 'TV automatically shuts down or restarts at random intervals (5 minutes to 1 hour after starting).',
    rootCause: 'Overheating of main processor SoC due to degraded thermal pads, or failing voltage regulators.',
    solution: 'Applying premium silicon thermal pads, checking power standby tracks, and replacing faulty micro-regulators.',
    timeframe: 'Same Day Service',
    priceEst: '₹1,600 - ₹3,400',
    whatsappMessage: 'Hi iPixel! I need a fix for OnePlus TV automatically turning off and on problem.'
  },
  {
    id: 'panasonic-power-board',
    title: 'Panasonic TV Power Board Circuit Repair',
    slug: 'panasonic-tv-power-board-circuit-repair-bangalore',
    category: 'power',
    categoryLabel: 'Power & Motherboard',
    targetKeyword: 'Panasonic TV power board circuit repair Bangalore',
    symptoms: 'Standby light flashes red slowly, or TV trips home electricity breaker switches upon plugin.',
    rootCause: 'Shorted MOSFETs in primary AC-DC rectification stage or cracked solder joints on main inductors.',
    solution: 'Desoldering faulty primary switching MOSFETs and installing original Panasonic specification parts.',
    timeframe: '4 to 8 Hours',
    priceEst: '₹1,400 - ₹3,200',
    whatsappMessage: 'Hi iPixel! I need Panasonic TV power board circuit repair Bangalore.'
  },

  // 3. Backlight & Sound-But-No-Picture Issues
  {
    id: 'lg-sound-no-picture',
    title: 'LG TV Sound Working But No Picture Display Fix',
    slug: 'lg-tv-sound-working-but-no-picture-display-fix-bangalore',
    category: 'backlight',
    categoryLabel: 'Backlight & Audio',
    targetKeyword: 'LG TV sound working but no picture display fix Bangalore',
    symptoms: 'You can hear the audio/news clearly, and remote buttons make beep sounds, but the screen is completely black.',
    rootCause: 'Blown series LEDs in the backlight string, causing the protection circuit to turn off all backlight illumination.',
    solution: 'Replacing all LED backlight strips with original LG factory components. We do not replace single LEDs, ensuring lifetime longevity.',
    timeframe: '3 to 5 Hours',
    priceEst: '₹1,400 - ₹3,200',
    whatsappMessage: 'Hi iPixel! I need LG TV sound working but no picture display fix Bangalore.'
  },
  {
    id: 'samsung-dark-patches',
    title: 'Samsung LED TV Dark Patches on Screen Repair',
    slug: 'samsung-led-tv-dark-patches-on-screen-repair',
    category: 'backlight',
    categoryLabel: 'Backlight & Audio',
    targetKeyword: 'Samsung LED TV dark patches on screen repair',
    symptoms: 'Certain large sections of the screen look noticeably darker or cloudy compared to the rest.',
    rootCause: 'Partial failure of LED clusters in specific backlight array zones or burned internal optical diffuser sheets.',
    solution: 'Replacing local dimming LED bars and realigning premium diffuser layers in a clean dust-free room.',
    timeframe: 'Same Day Service',
    priceEst: '₹1,500 - ₹3,500',
    whatsappMessage: 'Hi iPixel! I need Samsung LED TV dark patches on screen repair.'
  },
  {
    id: 'mi-half-dim',
    title: 'Mi TV Half Screen Dim Backlight Replacement',
    slug: 'mi-tv-half-screen-dim-backlight-replacement',
    category: 'backlight',
    categoryLabel: 'Backlight & Audio',
    targetKeyword: 'Mi TV half screen dim backlight replacement',
    symptoms: 'Exactly the upper, lower, or lateral half of the screen is dark, while the other parts remain brightly illuminated.',
    rootCause: 'One of the secondary dual-channel backlight power circuits has failed or one set of series LEDs is open-circuited.',
    solution: 'Swapping all edge-lit or direct-lit LED arrays with original spare stocks and adjusting backlight current parameter in service menu.',
    timeframe: 'Same Day Service',
    priceEst: '₹1,300 - ₹2,900',
    whatsappMessage: 'Hi iPixel! I need Mi TV half screen dim backlight replacement.'
  },
  {
    id: 'sony-xperia-black-screen',
    title: 'Sony Xperia TV Screen Completely Black But Audio Playing',
    slug: 'sony-xperia-tv-screen-completely-black-but-audio-playing',
    category: 'backlight',
    categoryLabel: 'Backlight & Audio',
    targetKeyword: 'Sony Xperia TV screen completely black but audio playing',
    symptoms: 'No picture or logo displays, but Android boot sounds and TV speaker output works fine. (Targeting Sony Android / Google TV ecosystem)',
    rootCause: 'Inverter protection circuit tripped due to a single LED element breakdown or bad power supply drive transistors.',
    solution: 'Replacing the backlight drive board or installing original high-CRI LED backlight arrays.',
    timeframe: 'Same Day Service',
    priceEst: '₹1,600 - ₹3,800',
    whatsappMessage: 'Hi iPixel! My Sony TV is completely black but audio is playing.'
  },
  {
    id: 'vu-no-display-backlight',
    title: 'Vu Smart TV No Display Backlight Strip Replacement Price',
    slug: 'vu-smart-tv-no-display-backlight-strip-replacement-price',
    category: 'backlight',
    categoryLabel: 'Backlight & Audio',
    targetKeyword: 'Vu Smart TV no display backlight strip replacement price',
    symptoms: 'VU Smart TV starts up, shows logo for a split second, then goes black. Audio continues playing.',
    rootCause: 'Backlight strip degradation caused by running the TV constantly at 100% backlight brightness values.',
    solution: 'Removing LCD matrix glass and substituting the full backlight string with direct-lit high-power LED strips.',
    timeframe: 'Same Day Service',
    priceEst: '₹1,300 - ₹2,600',
    whatsappMessage: 'Hi iPixel! What is the Vu Smart TV no display backlight strip replacement price?'
  },

  // 4. Advanced Component & Panel Repair (COF/T-CON)
  {
    id: 'sony-tcon-overheating',
    title: 'Sony Bravia T-CON Board Overheating Problem Fix',
    slug: 'sony-bravia-t-con-board-overheating-problem-fix-bangalore',
    category: 'advanced',
    categoryLabel: 'Advanced Component',
    targetKeyword: 'Sony Bravia T-CON board overheating problem fix Bangalore',
    symptoms: 'TV displays a white screen, solarized colors, or shuts down after playing perfectly for 10-15 minutes.',
    rootCause: 'The T-CON (Timer Control) ASIC chip overheats due to internal failure or insufficient thermal coupling with the TV chassis.',
    solution: 'Thermal re-conditioning, replacing the T-CON board gamma correction IC (AS15-F), or installing a fully renewed T-CON board.',
    timeframe: 'Same Day Service',
    priceEst: '₹1,500 - ₹3,200',
    whatsappMessage: 'Hi iPixel! I need Sony Bravia T-CON board overheating problem fix Bangalore.'
  },
  {
    id: 'samsung-cof-bonding',
    title: 'Samsung LED TV COF Bonding Machine Repair',
    slug: 'samsung-led-tv-cof-bonding-machine-repair-service',
    category: 'advanced',
    categoryLabel: 'Advanced Component',
    targetKeyword: 'Samsung LED TV COF bonding machine repair service',
    symptoms: 'Flickering colored bands, sliding bars, or half-screen display distortion on Samsung panels.',
    rootCause: 'Microscopic degradation of anisotropic conductive connection lines on the Chip-on-Film tabs.',
    solution: 'Utilizing our automatic high-precision COF bonding machine with microscope cameras to bind brand-new COF tabs onto the glass substrate.',
    timeframe: '24 Hours Max',
    priceEst: '₹2,500 - ₹4,900',
    whatsappMessage: 'Hi iPixel! I need Samsung LED TV COF bonding machine repair service.'
  },
  {
    id: 'lg-ghost-image',
    title: 'LG TV Ghost Image Problem T-CON IC Replacement',
    slug: 'lg-tv-ghost-image-problem-t-con-ic-replacement',
    category: 'advanced',
    categoryLabel: 'Advanced Component',
    targetKeyword: 'LG TV ghost image problem T-CON IC replacement',
    symptoms: 'Moving graphics leave static silhouettes on screen or screen colors look negative and over-saturated.',
    rootCause: 'Failure of Gamma Correction IC on the T-CON card, supply wrong reference voltages to the subpixels.',
    solution: 'Desoldering and replacing the faulty Gamma IC chip with our hot-air SMD rework stations.',
    timeframe: 'Same Day Service',
    priceEst: '₹1,300 - ₹2,900',
    whatsappMessage: 'Hi iPixel! I need LG TV ghost image problem T-CON IC replacement.'
  },
  {
    id: 'mi-panel-bypass',
    title: 'Mi TV Panel Bypass Method for Horizontal Lines Repair',
    slug: 'mi-tv-panel-bypass-method-for-horizontal-lines-repair',
    category: 'advanced',
    categoryLabel: 'Advanced Component',
    targetKeyword: 'Mi TV panel bypass method for horizontal lines repair',
    symptoms: 'Colored or grey horizontal line clusters continuously flash across Mi TV screens.',
    rootCause: 'Short circuits inside the internal layer of the screen glass.',
    solution: 'Carefully isolating the shorted high-frequency clock clock lines using specialized high-grade insulation film tape on the source board flat cables (The Bypass Method). Saves 100% of the screen panel cost!',
    timeframe: '2 Hours Max',
    priceEst: '₹1,200 - ₹2,200',
    whatsappMessage: 'Hi iPixel! I want to request Mi TV panel bypass method for horizontal lines repair.'
  },
  {
    id: 'oneplus-mapping-distortion',
    title: 'OnePlus TV Mapping Distortion Screen Fix',
    slug: 'oneplus-tv-mapping-distortion-screen-fix',
    category: 'advanced',
    categoryLabel: 'Advanced Component',
    targetKeyword: 'OnePlus TV mapping distortion screen fix',
    symptoms: 'Screen display is pixelated, showing mosaic-like noise patterns or wrong mapping color channels.',
    rootCause: 'Firmware corruption inside the T-CON control processor or faulty LVDS signal cables.',
    solution: 'Replacing high-frequency gold-plated LVDS flat cables and re-flashing the T-CON EEPROM module.',
    timeframe: 'Same Day Service',
    priceEst: '₹1,400 - ₹2,900',
    whatsappMessage: 'Hi iPixel! I need OnePlus TV mapping distortion screen fix.'
  }
];

export const TechnicalGuides: React.FC<GuideProps> = ({ setView, selectedGuideId, setSelectedGuideId }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Diagnostics' },
    { id: 'screen', label: 'Screen & Panel' },
    { id: 'power', label: 'Power & Mainboard' },
    { id: 'backlight', label: 'Backlight/Sound' },
    { id: 'advanced', label: 'COF & T-CON' }
  ];

  const filteredGuides = TECHNICAL_GUIDES.filter(guide => {
    const matchesSearch = 
      guide.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      guide.targetKeyword.toLowerCase().includes(searchTerm.toLowerCase()) ||
      guide.symptoms.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || guide.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const selectedGuide = TECHNICAL_GUIDES.find(g => g.id === selectedGuideId);

  // Handle going back or closing detailed guide view
  const handleBack = () => {
    if (selectedGuideId && setSelectedGuideId) {
      setSelectedGuideId(undefined);
    } else {
      setView('home');
    }
  };

  const handleSelectGuide = (id: string) => {
    if (setSelectedGuideId) {
      setSelectedGuideId(id);
    }
  };

  return (
    <motion.main
      key="technical-guides"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      className="max-w-6xl mx-auto px-4 sm:px-6 py-12"
    >
      {/* Back Button */}
      <div className="flex items-center gap-4 mb-8">
        <button 
          onClick={handleBack}
          className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 hover:text-black hover:bg-gray-100 transition-all active:scale-95 cursor-pointer"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <span className="text-xs font-mono text-gray-400 bg-gray-100 px-3 py-1 rounded-full uppercase tracking-widest font-bold">
          {selectedGuide ? 'Diagnostic Report' : 'TV Repair Knowledge Base'}
        </span>
      </div>

      {selectedGuide ? (
        // ============================================
        // DETAILED SINGLE BLOG POST / GUIDE VIEW
        // ============================================
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-8 bg-white p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-sm">
            <div>
              <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-3">
                {selectedGuide.categoryLabel}
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight">
                {selectedGuide.title}
              </h1>
              <p className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest mt-2 border-l-2 border-red-500 pl-3">
                Targeted Fix: {selectedGuide.targetKeyword}
              </p>
            </div>

            {/* Diagnostic Details Grid */}
            <div className="space-y-6 pt-4 border-t border-gray-100">
              
              {/* Symptoms */}
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-500" />
                  Common Symptoms &amp; Fault Manifestation
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed font-semibold">
                  {selectedGuide.symptoms}
                </p>
              </div>

              {/* Root Cause */}
              <div className="space-y-2 pt-4 border-t border-gray-50">
                <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-indigo-500" />
                  Root Cause Analysis (Technical)
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed font-semibold">
                  {selectedGuide.rootCause}
                </p>
              </div>

              {/* solution */}
              <div className="space-y-2 pt-4 border-t border-gray-50">
                <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-emerald-500" />
                  iPixel Professional Repair Method
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed font-semibold">
                  {selectedGuide.solution}
                </p>
              </div>
            </div>

            {/* Trust and Safety Banner */}
            <div className="p-5 bg-emerald-50 border border-emerald-100/60 rounded-2xl flex gap-3 text-emerald-800 text-xs">
              <ShieldCheck className="w-5 h-5 shrink-0 text-emerald-600" />
              <div>
                <p className="font-bold">Original Spare Parts Warranted</p>
                <p className="font-medium text-emerald-700/90 mt-0.5">
                  All component-level chips, flat flex cables, backlight panels, and boards swapped during this procedure are backed by a certified written warranty from iPixel Electronics.
                </p>
              </div>
            </div>

          </div>

          {/* Quick Quote / Call-to-action sidebar */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            
            {/* Price & Turnaround Info Card */}
            <div className="bg-black text-white p-8 rounded-3xl space-y-6 shadow-xl">
              <h3 className="text-lg font-bold font-mono tracking-wide uppercase border-b border-gray-800 pb-3">
                Estimated Charges
              </h3>

              <div className="space-y-4">
                <div>
                  <p className="text-xs text-gray-400 font-mono font-bold uppercase tracking-widest">Typical Repair Cost</p>
                  <p className="text-2xl font-black text-white mt-1">{selectedGuide.priceEst}</p>
                </div>

                <div>
                  <p className="text-xs text-gray-400 font-mono font-bold uppercase tracking-widest">Turnaround Time</p>
                  <p className="text-lg font-bold text-blue-400 flex items-center gap-2 mt-1">
                    <Clock className="w-5 h-5" />
                    {selectedGuide.timeframe}
                  </p>
                </div>
              </div>

              {/* Interactive buttons */}
              <div className="space-y-3 pt-4 border-t border-gray-800">
                <a
                  href={`https://wa.me/919513134313?text=${encodeURIComponent(selectedGuide.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-[#25d366] hover:bg-[#22c35e] text-white rounded-xl font-bold text-sm tracking-wide transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  Request Price Quote
                </a>
                <button
                  onClick={() => setView('appointment-booking')}
                  className="w-full py-3.5 bg-white hover:bg-gray-100 text-black rounded-xl font-bold text-sm tracking-wide transition-all active:scale-95"
                >
                  Book Doorstep Visit
                </button>
              </div>
            </div>

            {/* Other relevant issues sidebar list */}
            <div className="bg-white border border-gray-100 p-6 rounded-3xl shadow-sm">
              <h4 className="text-xs font-bold font-mono text-gray-400 uppercase tracking-widest mb-4">
                Other Troubleshooting Guides
              </h4>
              <div className="space-y-3 max-h-80 overflow-y-auto">
                {TECHNICAL_GUIDES.filter(g => g.id !== selectedGuide.id).slice(0, 5).map(g => (
                  <button
                    key={g.id}
                    onClick={() => handleSelectGuide(g.id)}
                    className="w-full text-left p-3 hover:bg-slate-50 rounded-xl transition-all border border-transparent hover:border-gray-100 flex items-start gap-2 group cursor-pointer"
                  >
                    <CornerDownRight className="w-4 h-4 text-gray-300 mt-0.5 group-hover:text-blue-500 shrink-0" />
                    <span className="text-xs font-bold text-gray-700 group-hover:text-black line-clamp-2">
                      {g.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>
      ) : (
        // ============================================
        // INDEX / LIST VIEW OF ALL GUIDES
        // ============================================
        <div className="space-y-10">
          
          {/* Header & Description */}
          <div className="max-w-2xl">
            <h1 className="text-4xl font-black text-gray-900 tracking-tight leading-none mb-4">
              Bangalore TV Troubleshooting Guides
            </h1>
            <p className="text-gray-500 text-sm font-medium leading-relaxed">
              Explore professional diagnoses, repair workflows, and estimated prices for standard LED, QLED, OLED, and Smart TV defects across Sony, Samsung, LG, Mi, OnePlus, and more.
            </p>
          </div>

          {/* Search and Quick Filters */}
          <div className="flex flex-col md:flex-row gap-4 items-stretch justify-between">
            {/* Search Input */}
            <div className="relative max-w-md w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input 
                type="text"
                placeholder="Search screen, power, blinking issues..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-white border border-gray-250/70 focus:border-black rounded-xl text-sm font-semibold outline-none transition-all"
              />
            </div>

            {/* Quick Filter tabs */}
            <div className="flex gap-2 overflow-x-auto pb-1 max-w-full">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-black text-white'
                      : 'bg-white text-gray-500 border border-gray-200 hover:text-black'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Guides grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGuides.map(guide => (
              <div 
                key={guide.id}
                onClick={() => handleSelectGuide(guide.id)}
                className="bg-white p-6 rounded-3xl border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.01)] hover:shadow-lg hover:border-gray-200 transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="flex justify-between items-start gap-2 mb-4">
                    <span className="text-[10px] font-mono font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {guide.categoryLabel}
                    </span>
                    <span className="text-xs text-gray-300 font-mono font-bold group-hover:text-blue-500 transition-colors">
                      Read Guide →
                    </span>
                  </div>

                  <h3 className="text-base font-black text-gray-900 group-hover:text-blue-600 transition-colors leading-snug mb-3">
                    {guide.title}
                  </h3>

                  <p className="text-xs text-gray-500 font-semibold line-clamp-3 leading-relaxed mb-4">
                    {guide.symptoms}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-50/70 flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-1.5 text-[11px] text-gray-400 font-bold">
                    <Clock className="w-3.5 h-3.5" />
                    {guide.timeframe}
                  </div>
                  <div className="text-[11px] text-gray-900 font-black font-mono">
                    Est: {guide.priceEst.split(' ')[0]}
                  </div>
                </div>
              </div>
            ))}

            {filteredGuides.length === 0 && (
              <div className="col-span-full bg-white p-12 text-center rounded-3xl border border-gray-150 space-y-3">
                <HelpCircle className="w-12 h-12 text-gray-300 mx-auto" />
                <h4 className="font-bold text-gray-900">No matching guides found</h4>
                <p className="text-sm text-gray-500">Try modifying your search or select a different category filter tabs.</p>
              </div>
            )}
          </div>

          {/* Need help footer section */}
          <div className="p-8 bg-blue-50 border border-blue-100 rounded-3xl flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
            <div>
              <h3 className="text-lg font-black text-blue-950">Not sure which issue affects your Television?</h3>
              <p className="text-sm text-blue-700 font-medium">
                Our specialists provide completely transparent, rapid remote diagnosis on WhatsApp or can schedule a same-day visit in Bangalore.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <a
                href="https://wa.me/919513134313?text=Hi%20iPixel%20Electronics!%20I%20have%20an%20unlisted%20issue%20with%20my%20TV"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-[#25d366] text-white font-bold text-xs font-mono uppercase tracking-widest rounded-xl hover:bg-[#22c35e] transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                Chat Specialist
              </a>
              <button
                onClick={() => setView('appointment-booking')}
                className="px-5 py-3 bg-black text-white font-bold text-xs font-mono uppercase tracking-widest rounded-xl hover:bg-gray-900 transition-all"
              >
                Book Inspection
              </button>
            </div>
          </div>

        </div>
      )}
    </motion.main>
  );
};
