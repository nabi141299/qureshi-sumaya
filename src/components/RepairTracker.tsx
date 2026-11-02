import React, { useState } from 'react';
import { 
  Search, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  ArrowRight, 
  Phone, 
  MessageCircle, 
  Printer, 
  Wrench, 
  Cpu, 
  ShieldCheck, 
  ClipboardCheck, 
  Tv, 
  Calendar, 
  User, 
  Check, 
  HelpCircle,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export interface RepairStage {
  id: string;
  label: string;
  shortDesc: string;
  icon: React.ComponentType<{ className?: string }>;
  status: 'completed' | 'in-progress' | 'pending';
  timestamp?: string;
  notes?: string;
}

export interface RepairTicket {
  ticketNumber: string;
  customerName: string;
  customerPhoneMasked: string;
  area: string;
  tvBrand: string;
  tvModel: string;
  screenSize: string;
  reportedIssue: string;
  diagnosedProblem: string;
  assignedTechnician: string;
  technicianSpecialty: string;
  dateReceived: string;
  estimatedCompletion: string;
  currentStageIndex: number; // 0 to 5
  statusBadge: string;
  badgeColor: 'emerald' | 'blue' | 'amber' | 'purple';
  quoteAmount: string;
  warrantyPeriod: string;
  stages: {
    label: string;
    description: string;
    date: string;
    completed: boolean;
    current?: boolean;
  }[];
  updates: {
    time: string;
    author: string;
    message: string;
  }[];
}

export const SAMPLE_TICKETS: Record<string, RepairTicket> = {
  'IPX-7821': {
    ticketNumber: 'IPX-7821',
    customerName: 'Vikram R.',
    customerPhoneMasked: '+91 9845X-XXX21',
    area: 'Kaikondrahalli, Sarjapur Road',
    tvBrand: 'Samsung',
    tvModel: 'QA55Q60BAK 55" 4K QLED Smart TV',
    screenSize: '55 Inch',
    reportedIssue: 'Horizontal colored lines across screen, flickering lower half',
    diagnosedProblem: 'Faulty COF (Chip-On-Film) flex IC bonding due to heat deterioration. Panel glass itself is crack-free and 100% salvageable.',
    assignedTechnician: 'Ramesh K.',
    technicianSpecialty: 'Master COF Laser Bonding Engineer (12+ yrs exp)',
    dateReceived: 'Today, 10:15 AM',
    estimatedCompletion: 'Today, 6:30 PM (Doorstep Dispatch)',
    currentStageIndex: 3, // Hardware Repair in progress
    statusBadge: 'Hardware Repair & Laser Bonding',
    badgeColor: 'blue',
    quoteAmount: '₹3,450 (Saved ₹18,000+ vs brand panel replacement)',
    warrantyPeriod: '90 Days Comprehensive Repair Warranty',
    stages: [
      {
        label: 'Ticket Created & Device Intake',
        description: 'Unit received at Doddanekundi repair hub; initial photo inspection & serial number logged.',
        date: 'Today, 10:15 AM',
        completed: true
      },
      {
        label: 'Deep Diagnostic & Voltage Inspection',
        description: 'T-Con board VGH/VGL test points passed; microscope audit confirmed source COF driver de-lamination.',
        date: 'Today, 11:30 AM',
        completed: true
      },
      {
        label: 'Precision Parts Allocation',
        description: 'Original Samsung Novatek COF flex IC & ACF anisotropic conductive tape retrieved from inventory.',
        date: 'Today, 1:15 PM',
        completed: true
      },
      {
        label: 'Microscope Laser Bonding Repair',
        description: 'Active bonding on 4K precision ACF bonding press machine under 200x digital microscope.',
        date: 'In Progress (Expected finish in 45 mins)',
        completed: false,
        current: true
      },
      {
        label: 'Quality Assurance & Burn-In Testing',
        description: 'Continuous 3-hour 4K HDR color cycling, thermal imaging, and vibration check.',
        date: 'Estimated 4:30 PM',
        completed: false
      },
      {
        label: 'Ready for Doorstep Delivery / Pickup',
        description: 'Safe packaging in anti-static protective foam crate and technician dispatch.',
        date: 'Estimated 6:30 PM',
        completed: false
      }
    ],
    updates: [
      {
        time: 'Today, 1:45 PM',
        author: 'Ramesh K. (Master Tech)',
        message: 'Panel mounted on pneumatic laser alignment jig. ACF tape aligned within 2-micron tolerance. Pressing cycle running.'
      },
      {
        time: 'Today, 11:35 AM',
        author: 'Diagnostic Team',
        message: 'Great news: LCD glass substrate is pristine. Complete panel replacement avoided; COF re-bonding will fully resolve the horizontal scan lines.'
      },
      {
        time: 'Today, 10:15 AM',
        author: 'Front Desk Hub',
        message: 'Device checked in with remote and power cable. Intake job sheet generated.'
      }
    ]
  },
  'IPX-6402': {
    ticketNumber: 'IPX-6402',
    customerName: 'Ananya S.',
    customerPhoneMasked: '+91 9731X-XXX02',
    area: 'Whitefield, Bengaluru',
    tvBrand: 'Sony Bravia',
    tvModel: 'KD-65X80K 65" 4K Ultra HD LED TV',
    screenSize: '65 Inch',
    reportedIssue: 'Sound is working, but screen is pitch black / no picture visible',
    diagnosedProblem: 'LED Backlight array failure (short circuit in channel 2 array). Power supply board & logic board are completely healthy.',
    assignedTechnician: 'Suresh Babu',
    technicianSpecialty: 'LED Backlight & SMPS Power Board Specialist',
    dateReceived: 'Yesterday, 4:40 PM',
    estimatedCompletion: 'Tomorrow, 11:00 AM',
    currentStageIndex: 1, // Deep Diagnostic Complete
    statusBadge: 'Diagnostic Complete - Awaiting Part Approval',
    badgeColor: 'amber',
    quoteAmount: '₹3,200 (Full Original Sony Aluminum LED Strip Replacement)',
    warrantyPeriod: '180 Days Backlight Replacement Warranty',
    stages: [
      {
        label: 'Ticket Created & Device Intake',
        description: 'TV safely picked up from Whitefield apartment; inspected and logged.',
        date: 'Yesterday, 4:40 PM',
        completed: true
      },
      {
        label: 'Deep Diagnostic & Voltage Inspection',
        description: 'Flashlight test revealed faint image on panel; LED driver voltage spiking due to open LED string.',
        date: 'Today, 9:20 AM',
        completed: true,
        current: true
      },
      {
        label: 'Precision Parts Allocation',
        description: 'OEM high-efficiency aluminum core LED backlight strips reserved in warehouse.',
        date: 'Pending approval',
        completed: false
      },
      {
        label: 'Hardware Repair & Strip Replacement',
        description: 'Diffuser sheet disassembly in clean room and mounting of thermal-taped aluminum strips.',
        date: 'Scheduled for this afternoon',
        completed: false
      },
      {
        label: 'Quality Assurance & Burn-In Testing',
        description: 'White balance uniformity and peak nit brightness measurement.',
        date: 'Tomorrow, 9:00 AM',
        completed: false
      },
      {
        label: 'Ready for Doorstep Delivery / Pickup',
        description: 'Safe transport back to Whitefield address with demonstration.',
        date: 'Tomorrow, 11:00 AM',
        completed: false
      }
    ],
    updates: [
      {
        time: 'Today, 9:45 AM',
        author: 'Suresh Babu (Tech)',
        message: 'Confirmed LED array failure. Original Sony replacement kit will include thermal conductive heatsink backing for prolonged lifespan.'
      },
      {
        time: 'Yesterday, 5:10 PM',
        author: 'Intake Desk',
        message: 'TV delivered to workshop by logistics team. Safety check passed.'
      }
    ]
  },
  'IPX-9104': {
    ticketNumber: 'IPX-9104',
    customerName: 'Karthik N.',
    customerPhoneMasked: '+91 9900X-XXX04',
    area: 'Indiranagar, Bengaluru',
    tvBrand: 'LG',
    tvModel: 'OLED55C2PSC 55" Cinema OLED TV',
    screenSize: '55 Inch',
    reportedIssue: 'TV not turning on after lightning storm, red power LED blinking 3 times',
    diagnosedProblem: 'Power supply board primary surge MOSFET failed. Repaired with surge-rated components; OLED panel & mainboard fully protected.',
    assignedTechnician: 'Naveen Kumar',
    technicianSpecialty: 'Circuit Board & SMPS Micro-soldering Expert',
    dateReceived: 'Yesterday, 11:00 AM',
    estimatedCompletion: 'Ready Now for Pickup / Home Delivery',
    currentStageIndex: 5, // Ready for pickup
    statusBadge: 'Repairs Completed - Ready for Delivery',
    badgeColor: 'emerald',
    quoteAmount: '₹2,650 (Component-level SMPS repair)',
    warrantyPeriod: '90 Days Circuit Repair Warranty',
    stages: [
      {
        label: 'Ticket Created & Device Intake',
        description: 'Unit checked in at Indiranagar express collection desk.',
        date: 'Yesterday, 11:00 AM',
        completed: true
      },
      {
        label: 'Deep Diagnostic & Voltage Inspection',
        description: 'SMPS secondary 12V and 24V rails inactive; blown bridge rectifier & fuse detected.',
        date: 'Yesterday, 12:30 PM',
        completed: true
      },
      {
        label: 'Precision Parts Allocation',
        description: 'High-surge industrial grade Japanese capacitors and Vishay MOSFET installed.',
        date: 'Yesterday, 2:15 PM',
        completed: true
      },
      {
        label: 'Hardware Repair & Board Soldering',
        description: 'Micro-soldering executed and conformal coating applied for moisture protection.',
        date: 'Yesterday, 4:45 PM',
        completed: true
      },
      {
        label: 'Quality Assurance & Burn-In Testing',
        description: 'Tested across 180V–270V fluctuations for 4 continuous hours. Passed with 0 errors.',
        date: 'Today, 10:00 AM',
        completed: true
      },
      {
        label: 'Ready for Doorstep Delivery / Pickup',
        description: 'Packed and verified. Ready for customer pickup or doorstep drop.',
        date: 'Ready for Pickup / Out for Delivery',
        completed: true,
        current: true
      }
    ],
    updates: [
      {
        time: 'Today, 10:15 AM',
        author: 'Quality Inspector',
        message: 'Final QA completed! OLED self-lit pixel uniformity is pristine. All 4 HDMI ports and eARC audio verified. Job marked ready.'
      },
      {
        time: 'Yesterday, 5:00 PM',
        author: 'Naveen Kumar (Tech)',
        message: 'SMPS board revived and tested under load. Standby red light stabilized.'
      }
    ]
  },
  'IPX-5510': {
    ticketNumber: 'IPX-5510',
    customerName: 'Pooja Hegde',
    customerPhoneMasked: '+91 9611X-XXX10',
    area: 'Bellandur, Outer Ring Road',
    tvBrand: 'Xiaomi Mi TV',
    tvModel: 'Mi TV 4X 43" 4K HDR Android TV',
    screenSize: '43 Inch',
    reportedIssue: 'Stuck on "Mi" boot logo loop, restarts continuously',
    diagnosedProblem: 'Corrupted eMMC NAND flash memory partition from incomplete Android OTA update.',
    assignedTechnician: 'Vinay M.',
    technicianSpecialty: 'Firmware & eMMC Flash Programming Specialist',
    dateReceived: 'Today, 9:00 AM',
    estimatedCompletion: 'Today, 4:00 PM',
    currentStageIndex: 4, // Quality assurance
    statusBadge: 'Testing & Android Calibration',
    badgeColor: 'purple',
    quoteAmount: '₹1,850 (NAND flash re-write & clean Android TV ROM)',
    warrantyPeriod: '90 Days Software & Logic Board Guarantee',
    stages: [
      {
        label: 'Ticket Created & Device Intake',
        description: 'Customer walk-in at Doddanekundi center.',
        date: 'Today, 9:00 AM',
        completed: true
      },
      {
        label: 'Deep Diagnostic & Voltage Inspection',
        description: 'Hardware voltage rails normal; UART console showed boot loop at Android kernel init.',
        date: 'Today, 10:00 AM',
        completed: true
      },
      {
        label: 'Precision Parts Allocation',
        description: 'Official Xiaomi verified firmware signed image loaded.',
        date: 'Today, 10:45 AM',
        completed: true
      },
      {
        label: 'Hardware Repair & Board Programming',
        description: 'Direct ISP eMMC re-flashing using RT809H high-speed programmer.',
        date: 'Today, 12:15 PM',
        completed: true
      },
      {
        label: 'Quality Assurance & Burn-In Testing',
        description: 'App installation, Wi-Fi 5GHz streaming, and Bluetooth remote pairing test.',
        date: 'In Progress (Finishing soon)',
        completed: false,
        current: true
      },
      {
        label: 'Ready for Doorstep Delivery / Pickup',
        description: 'Handover packaging ready with updated firmware documentation.',
        date: 'Estimated 4:00 PM',
        completed: false
      }
    ],
    updates: [
      {
        time: 'Today, 12:45 PM',
        author: 'Vinay M. (Tech)',
        message: 'Boot loop resolved! TV booted into Android TV 11. Testing YouTube 4K HDR and Netflix playback.'
      },
      {
        time: 'Today, 10:15 AM',
        author: 'Vinay M. (Tech)',
        message: 'Main board eMMC health evaluated: 92% life remaining. Re-flashed partition table without hardware replacement.'
      }
    ]
  }
};

export const RepairTracker: React.FC = () => {
  const [searchInput, setSearchInput] = useState('');
  const [activeTicketId, setActiveTicketId] = useState<string>('IPX-7821');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  const activeTicket = SAMPLE_TICKETS[activeTicketId] || null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanInput = searchInput.trim().toUpperCase();
    if (!cleanInput) {
      setErrorMessage('Please enter a ticket number (e.g. IPX-7821)');
      return;
    }

    if (SAMPLE_TICKETS[cleanInput]) {
      setActiveTicketId(cleanInput);
      setErrorMessage(null);
    } else {
      setErrorMessage(`No record found for ticket "${cleanInput}". Please check the ID on your receipt or try one of the demo tickets below.`);
    }
  };

  const selectDemoTicket = (id: string) => {
    setActiveTicketId(id);
    setSearchInput(id);
    setErrorMessage(null);
  };

  const handleCopyTicket = () => {
    if (!activeTicket) return;
    navigator.clipboard.writeText(activeTicket.ticketNumber);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="repair-tracker" className="py-12 scroll-mt-24">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-8 px-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5 text-blue-600 animate-spin" style={{ animationDuration: '4s' }} />
          <span>Real-Time Job Sheet Tracking</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight">
          Track Your TV Repair Status
        </h2>
        <p className="mt-2 text-sm sm:text-base text-gray-600 font-medium leading-relaxed">
          Enter your <strong className="text-gray-900">iPixel Ticket Number</strong> from your SMS receipt or job card to check live bench diagnostic findings, laser bonding progress, and estimated delivery times.
        </p>
      </div>

      {/* Search Input Box */}
      <div className="max-w-2xl mx-auto px-4 mb-6">
        <form onSubmit={handleSearch} className="relative">
          <div className="relative flex items-center bg-white rounded-2xl border-2 border-gray-200 shadow-lg shadow-gray-100 hover:border-blue-500 focus-within:border-blue-600 focus-within:ring-4 focus-within:ring-blue-100 transition-all p-1.5">
            <div className="pl-4 pr-2 text-gray-400">
              <Search className="w-5 h-5 text-gray-500" />
            </div>
            <input
              type="text"
              value={searchInput}
              onChange={(e) => {
                setSearchInput(e.target.value);
                if (errorMessage) setErrorMessage(null);
              }}
              placeholder="Enter Ticket ID (e.g. IPX-7821, IPX-6402)..."
              className="w-full py-3 pr-4 text-gray-900 text-base font-semibold placeholder:text-gray-400 focus:outline-none uppercase font-mono tracking-wide"
            />
            <button
              type="submit"
              className="shrink-0 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold px-6 py-3 rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-md shadow-blue-500/20"
            >
              <span>Track</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>

        {/* Demo Ticket Quick Select Pills */}
        <div className="mt-3 flex flex-wrap items-center gap-2 justify-center text-xs">
          <span className="font-semibold text-gray-500">Demo Tickets:</span>
          {Object.keys(SAMPLE_TICKETS).map((id) => {
            const ticket = SAMPLE_TICKETS[id];
            const isActive = activeTicketId === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => selectDemoTicket(id)}
                className={`px-3 py-1.5 rounded-lg font-mono font-bold transition-all flex items-center gap-1.5 cursor-pointer border ${
                  isActive
                    ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-gray-400 hover:bg-gray-50'
                }`}
              >
                <span>{id}</span>
                <span className={`text-[10px] font-sans font-semibold px-1.5 py-0.5 rounded ${
                  isActive ? 'bg-blue-700 text-white' : 'bg-gray-100 text-gray-600'
                }`}>
                  {ticket.tvBrand}
                </span>
              </button>
            );
          })}
        </div>

        {/* Error Notification */}
        <AnimatePresence>
          {errorMessage && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              className="mt-4 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm font-medium flex items-start gap-3"
            >
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="flex-1">
                <p>{errorMessage}</p>
                <div className="mt-2 flex items-center gap-3">
                  <a
                    href="tel:+919513134313"
                    className="font-bold text-amber-800 underline hover:text-black flex items-center gap-1"
                  >
                    <Phone className="w-3.5 h-3.5" /> Call Support (+91 95131 34313)
                  </a>
                  <span className="text-amber-400">•</span>
                  <button
                    onClick={() => selectDemoTicket('IPX-7821')}
                    className="font-bold text-blue-700 underline hover:text-blue-900"
                  >
                    Load Sample Ticket
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Main Status Display Area */}
      {activeTicket && (
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden transition-all">
            {/* Top Banner Card */}
            <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-blue-950 text-white p-6 sm:p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-700/60">
                <div>
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 font-mono text-xs font-bold tracking-wider">
                      TICKET #{activeTicket.ticketNumber}
                    </span>
                    <button
                      onClick={handleCopyTicket}
                      title="Copy ticket number"
                      className="text-[11px] font-mono text-slate-400 hover:text-white flex items-center gap-1 bg-white/5 hover:bg-white/10 px-2 py-1 rounded transition-colors"
                    >
                      {isCopied ? <Check className="w-3 h-3 text-emerald-400" /> : <ClipboardCheck className="w-3 h-3" />}
                      <span>{isCopied ? 'Copied' : 'Copy'}</span>
                    </button>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 border border-emerald-400/30 text-emerald-300">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                      <span>{activeTicket.statusBadge}</span>
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    {activeTicket.tvModel}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                    Customer: <span className="text-white font-bold">{activeTicket.customerName}</span> ({activeTicket.area}) • Registered: {activeTicket.dateReceived}
                  </p>
                </div>

                {/* Estimated Completion Badge */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 shrink-0 text-left md:text-right min-w-[220px]">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-300 block font-bold">
                    Estimated Delivery / Pickup
                  </span>
                  <div className="text-base sm:text-lg font-bold text-white mt-1 flex items-center md:justify-end gap-1.5">
                    <Clock className="w-4 h-4 text-blue-400" />
                    <span>{activeTicket.estimatedCompletion}</span>
                  </div>
                  <div className="mt-2 text-[11px] text-emerald-300 font-semibold flex items-center md:justify-end gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{activeTicket.warrantyPeriod}</span>
                  </div>
                </div>
              </div>

              {/* Quick Specs Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-5 text-xs">
                <div>
                  <span className="text-slate-400 block font-medium">Assigned Lead Tech</span>
                  <span className="text-white font-bold text-sm block mt-0.5">{activeTicket.assignedTechnician}</span>
                  <span className="text-[10px] text-slate-400 line-clamp-1">{activeTicket.technicianSpecialty}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Screen Diagnostic</span>
                  <span className="text-white font-bold text-sm block mt-0.5">{activeTicket.screenSize} Display</span>
                  <span className="text-[10px] text-emerald-400 font-medium">Panel Glass 100% OK</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Quote Estimate</span>
                  <span className="text-white font-bold text-sm block mt-0.5">{activeTicket.quoteAmount.split('(')[0]}</span>
                  <span className="text-[10px] text-slate-300">All parts &amp; labor included</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Assistance Helpline</span>
                  <a href="tel:+919513134313" className="text-blue-300 hover:text-white font-bold text-sm block mt-0.5 font-mono">
                    +91 95131 34313
                  </a>
                  <span className="text-[10px] text-emerald-400">Chief tech on duty</span>
                </div>
              </div>
            </div>

            {/* Stepper Pipeline Visualizer */}
            <div className="p-6 sm:p-8 border-b border-gray-100 bg-gray-50/50">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-gray-400">
                    Stage {activeTicket.currentStageIndex + 1} of 6
                  </span>
                  <h4 className="text-lg font-black text-gray-900 tracking-tight">
                    Live Workshop Repair Pipeline
                  </h4>
                </div>
                <div className="hidden sm:flex items-center gap-2">
                  <span className="text-xs font-bold text-gray-600">Overall Progress:</span>
                  <span className="text-xs font-mono font-black text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100">
                    {Math.round(((activeTicket.currentStageIndex + (activeTicket.currentStageIndex === 5 ? 1 : 0.6)) / 6) * 100)}%
                  </span>
                </div>
              </div>

              {/* Progress Bar Line */}
              <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden mb-8">
                <div 
                  className="bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500 h-full transition-all duration-700 ease-out rounded-full"
                  style={{ width: `${Math.round(((activeTicket.currentStageIndex + (activeTicket.currentStageIndex === 5 ? 1 : 0.6)) / 6) * 100)}%` }}
                />
              </div>

              {/* Step Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {activeTicket.stages.map((stage, idx) => {
                  const isPast = idx < activeTicket.currentStageIndex || stage.completed;
                  const isCurrent = idx === activeTicket.currentStageIndex && !stage.completed;
                  const isFuture = idx > activeTicket.currentStageIndex;

                  return (
                    <div
                      key={idx}
                      className={`p-4 rounded-2xl border transition-all flex flex-col justify-between ${
                        isCurrent
                          ? 'bg-blue-50/70 border-blue-400 ring-2 ring-blue-500/20 shadow-sm'
                          : isPast
                          ? 'bg-white border-emerald-200/80 shadow-xs'
                          : 'bg-white/60 border-gray-200/60 opacity-60'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-black font-mono ${
                            isPast
                              ? 'bg-emerald-500 text-white'
                              : isCurrent
                              ? 'bg-blue-600 text-white animate-pulse'
                              : 'bg-gray-100 text-gray-500'
                          }`}>
                            {isPast ? <Check className="w-3.5 h-3.5" /> : idx + 1}
                          </span>
                          <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                            isPast
                              ? 'bg-emerald-50 text-emerald-700'
                              : isCurrent
                              ? 'bg-blue-600 text-white font-semibold'
                              : 'text-gray-400'
                          }`}>
                            {isPast ? 'Completed' : isCurrent ? 'In Progress' : 'Queued'}
                          </span>
                        </div>
                        <h5 className={`text-sm font-bold tracking-tight mb-1 ${isCurrent ? 'text-blue-950 font-black' : 'text-gray-900'}`}>
                          {stage.label}
                        </h5>
                        <p className="text-xs text-gray-600 leading-relaxed font-medium">
                          {stage.description}
                        </p>
                      </div>
                      <div className="mt-3 pt-2.5 border-t border-gray-100 flex items-center justify-between text-[11px] font-mono text-gray-400">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{stage.date}</span>
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Diagnostic Details & Technician Log */}
            <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column: Issue & Diagnostic Summary */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-2">
                    <Tv className="w-4 h-4 text-blue-600" />
                    <span>Technical Findings &amp; Root Cause</span>
                  </h4>
                  <div className="space-y-3">
                    <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block mb-1">
                        Reported Symptoms by Customer
                      </span>
                      <p className="text-xs sm:text-sm text-gray-800 font-semibold">
                        "{activeTicket.reportedIssue}"
                      </p>
                    </div>

                    <div className="p-4 bg-blue-50/60 rounded-2xl border border-blue-100">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 block mb-1 flex items-center gap-1.5">
                        <Cpu className="w-3.5 h-3.5" />
                        Bench Diagnostic by Chief Tech
                      </span>
                      <p className="text-xs sm:text-sm text-blue-950 font-semibold leading-relaxed">
                        {activeTicket.diagnosedProblem}
                      </p>
                    </div>

                    <div className="p-4 bg-emerald-50/60 rounded-2xl border border-emerald-100 flex items-start gap-3">
                      <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-bold text-emerald-950 block">
                          Savings &amp; Warranty Advantage
                        </span>
                        <p className="text-xs text-emerald-800 font-medium leading-relaxed mt-0.5">
                          {activeTicket.quoteAmount}. Includes free pickup, doorstep return delivery, and {activeTicket.warrantyPeriod}.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={`https://wa.me/919513134313?text=Hi%20iPixel%20Electronics!%20I%20am%20tracking%20repair%20ticket%20${activeTicket.ticketNumber}%20(${activeTicket.tvBrand}%20${activeTicket.tvModel}).%20Please%20provide%20a%20live%20technician%20update.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-[#25d366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-md transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>WhatsApp Technician</span>
                  </a>

                  <a
                    href="tel:+919513134313"
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-black text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition-all cursor-pointer"
                  >
                    <Phone className="w-4 h-4 text-blue-400" />
                    <span>Call Workshop (+91 95131 34313)</span>
                  </a>

                  <button
                    onClick={handlePrint}
                    className="inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-xs sm:text-sm px-4 py-3 rounded-xl transition-all cursor-pointer"
                    title="Print or Save Job Sheet"
                  >
                    <Printer className="w-4 h-4" />
                    <span className="hidden sm:inline">Print Job Sheet</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Live Technician Activity Logs */}
              <div className="lg:col-span-5 bg-gray-50 rounded-2xl p-5 border border-gray-100">
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-200/80">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-700 flex items-center gap-1.5">
                    <Wrench className="w-3.5 h-3.5 text-blue-600" />
                    <span>Technician Bench Log</span>
                  </h4>
                  <span className="text-[10px] font-mono text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Live Verified
                  </span>
                </div>

                <div className="space-y-4">
                  {activeTicket.updates.map((update, idx) => (
                    <div key={idx} className="relative pl-5 border-l-2 border-blue-300">
                      <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-blue-600 ring-2 ring-white" />
                      <div className="flex items-center justify-between text-[11px] font-mono text-gray-400 mb-1">
                        <span className="font-bold text-gray-800">{update.author}</span>
                        <span>{update.time}</span>
                      </div>
                      <p className="text-xs text-gray-600 font-medium leading-relaxed">
                        {update.message}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Pickup & Service Address Card */}
                <div className="mt-6 pt-4 border-t border-gray-200 text-xs">
                  <span className="text-[10px] font-mono font-bold uppercase text-gray-400 block mb-1">
                    Servicing Hub &amp; Workshop
                  </span>
                  <p className="font-bold text-gray-800">iPixel Electronics Service Center</p>
                  <p className="text-gray-500 text-[11px] mt-0.5">
                    No 58, 2nd Cross, Thimma Reddy Layout, Sanjeev Nagar, Doddanekundi, Bengaluru 560037
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
