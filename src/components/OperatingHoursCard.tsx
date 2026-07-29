import React from 'react';
import { Clock } from 'lucide-react';

interface OperatingHoursProps {
  title?: string;
  columnHeader?: string;
  className?: string;
}

export const OperatingHoursCard: React.FC<OperatingHoursProps> = ({
  title = "Operating Hours",
  columnHeader = "Hours",
  className = ""
}) => {
  const schedule = [
    { day: "Monday", hours: "9:30 AM - 9:00 PM" },
    { day: "Tuesday", hours: "9:30 AM - 9:00 PM" },
    { day: "Wednesday", hours: "9:30 AM - 9:00 PM" },
    { day: "Thursday", hours: "9:30 AM - 9:00 PM" },
    { day: "Friday", hours: "9:30 AM - 9:00 PM" },
    { day: "Saturday", hours: "9:30 AM - 9:00 PM" },
    { day: "Sunday", hours: "9:30 AM - 9:00 PM" },
  ];

  return (
    <div className={`bg-white rounded-2xl border border-[#F1E8E1] shadow-sm overflow-hidden max-w-md w-full font-sans ${className}`}>
      {/* Header bar with warm tint */}
      <div className="bg-[#FFF8F5] px-5 py-3.5 border-b border-[#F5ECE5] flex items-center gap-3">
        <div className="w-7 h-7 rounded-full border border-gray-400 flex items-center justify-center shrink-0 bg-white/80">
          <Clock className="w-4 h-4 text-gray-700" />
        </div>
        <h3 className="text-base font-bold text-[#1E293B] tracking-tight">
          {title}
        </h3>
      </div>

      {/* Table content */}
      <div className="divide-y divide-gray-100">
        {/* Table Column Headers */}
        <div className="grid grid-cols-2 px-6 py-3 bg-white text-sm font-bold text-[#1E293B]">
          <div>Day</div>
          <div className="text-right sm:text-left sm:pl-12">{columnHeader}</div>
        </div>

        {/* Rows */}
        {schedule.map((item) => (
          <div 
            key={item.day}
            className="grid grid-cols-2 px-6 py-3.5 text-sm transition-colors hover:bg-slate-50/60 items-center"
          >
            <div className="font-semibold text-[#1E293B]">
              {item.day}
            </div>
            <div className="text-right sm:text-left sm:pl-12 font-medium text-[#3B82F6] sm:text-[#334155]">
              {item.hours}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
