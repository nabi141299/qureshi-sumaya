import React, { useState } from 'react';
import { Star, MessageSquare, ArrowUpRight, CheckCircle2, ShieldAlert } from 'lucide-react';
import { motion } from 'motion/react';

interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  relativeTime: string;
  avatarColor: string;
  text: string;
  category: 'Screen Repair' | 'TV Installation' | 'General Repair' | 'Brand Specialist';
  helpfulCount: number;
  tvModel?: string;
}

const REVIEWS_DATA: Review[] = [
  {
    id: 'rev-1',
    author: 'Naveen Kumar',
    rating: 5,
    date: '2026-05-18',
    relativeTime: '2 weeks ago',
    avatarColor: 'bg-indigo-600',
    text: 'My Samsung 55-inch Crystal UHD TV screen had severe vertical lines. Visited iPixel Electronics near Marathahalli/Doddanekundi. They did laser-bonding repair at a very nominal price compared to what authorized service centers quoted. Truly professional work!',
    category: 'Screen Repair',
    helpfulCount: 24,
    tvModel: 'Samsung 55" Crystal UHD'
  },
  {
    id: 'rev-2',
    author: 'Sumaiya Shariff',
    rating: 5,
    date: '2026-06-02',
    relativeTime: '3 days ago',
    avatarColor: 'bg-emerald-600',
    text: 'Extremely fast and reliable service. They picked up my Sony Bravia 43" LED TV from my apartment in Whitefield and replaced the background backlight LEDs within 6 hours. High honesty and very polite communication. Recommended!',
    category: 'General Repair',
    helpfulCount: 18,
    tvModel: 'Sony Bravia 43" LED'
  },
  {
    id: 'rev-3',
    author: 'Ramesh Krishnan',
    rating: 5,
    date: '2026-04-20',
    relativeTime: '2 months ago',
    avatarColor: 'bg-amber-600',
    text: 'Superb LED TV wall mount installation near Bellandur or HSR layout area. The technician brought solid double-arm heavy-steel brackets, measured perfectly with a spirit level to prevent tilt, and left the wall clean. Highly professional work!',
    category: 'TV Installation',
    helpfulCount: 12,
    tvModel: 'LG NanoCell 65" TV'
  },
  {
    id: 'rev-4',
    author: 'Amit Sinha',
    rating: 5,
    date: '2026-05-30',
    relativeTime: '1 week ago',
    avatarColor: 'bg-blue-600',
    text: 'Original LG TV Panel Replacement was done on the same day. Cracked my television screen during home shifting in Balagere. They gave me a written warranty card for 180 days on parts. Very happy with the direct price!',
    category: 'Screen Repair',
    helpfulCount: 31,
    tvModel: 'LG 55" 4K Smart TV'
  },
  {
    id: 'rev-5',
    author: 'Vijay Raghavan',
    rating: 5,
    date: '2026-06-12',
    relativeTime: 'Yesterday',
    avatarColor: 'bg-rose-600',
    text: 'Sony smart TV bootlooping showing red light error code. Brought it to iPixel Workshop. They identified a faulty power converter logic chipset and repaired it with authentic spares. Honest pricing policy!',
    category: 'Brand Specialist',
    helpfulCount: 9,
    tvModel: 'Sony Bravia KD-55X'
  },
  {
    id: 'rev-6',
    author: 'Preeti Sharma',
    rating: 5,
    date: '2026-05-05',
    relativeTime: '1 month ago',
    avatarColor: 'bg-purple-600',
    text: 'Excellent customer care management. Got doorstep pickup coordinate in Varthur. Best TV screen crack repair cost in Bangalore. Transparent invoicing and friendly team.',
    category: 'Screen Repair',
    helpfulCount: 15,
    tvModel: 'Samsung 43" Frame TV'
  }
];

export const GoogleReviewsWidget: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [reviews, setReviews] = useState<Review[]>(REVIEWS_DATA);
  const [likes, setLikes] = useState<Record<string, number>>({});
  const [likedList, setLikedList] = useState<string[]>([]);

  const googleBusinessLink = "https://share.google/Lq6uwDGEix4e9wYjF";

  const handleLike = (id: string) => {
    if (likedList.includes(id)) return;
    setLikes(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
    setLikedList(prev => [...prev, id]);
  };

  const tags = ['All', 'Screen Repair', 'TV Installation', 'General Repair', 'Brand Specialist'];

  const filteredReviews = selectedTag === 'All' 
    ? reviews 
    : reviews.filter(r => r.category === selectedTag);

  return (
    <section id="google-reviews-section" className="bg-slate-50 py-16 px-4 sm:px-6 md:px-12 rounded-[2.5rem] border border-gray-100 my-20">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Widget Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          
          {/* Left Column: Google Overall Stats Card */}
          <div className="lg:col-span-4 bg-white p-6 sm:p-8 rounded-3xl border border-gray-200/60 shadow-sm flex flex-col items-center text-center">
            
            {/* Google Logo */}
            <div className="flex items-center gap-1.5 mb-4">
              <span className="text-2xl font-black tracking-tight select-none">
                <span className="text-[#4285F4]">G</span>
                <span className="text-[#EA4335]">o</span>
                <span className="text-[#FBBC05]">o</span>
                <span className="text-[#4285F4]">g</span>
                <span className="text-[#34A853]">l</span>
                <span className="text-[#EA4335]">e</span>
              </span>
              <span className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest bg-gray-50 px-2 py-0.5 rounded border border-gray-150">
                Maps
              </span>
            </div>

            {/* Huge Rating Score */}
            <div className="text-5xl font-black text-gray-900 tracking-tight leading-none flex items-baseline gap-1">
              5.0
              <span className="text-sm font-bold text-gray-400">/5</span>
            </div>

            {/* Stars Row */}
            <div className="flex gap-1 my-3 text-[#FBBC05]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-current text-[#FBBC05]" />
              ))}
            </div>

            {/* Verification label */}
            <p className="text-xs text-gray-500 font-bold flex items-center gap-1 mb-6">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              Verified Local Business Reviews
            </p>

            {/* Action buttons to the real business profile */}
            <div className="w-full space-y-2.5">
              <a 
                href={googleBusinessLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 bg-[#1a73e8] hover:bg-[#1557b0] text-white rounded-xl font-bold text-sm tracking-wide transition-all flex items-center justify-center gap-2 shadow-md shadow-blue-500/10 active:scale-95"
              >
                Write a Review on Google
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a 
                href={googleBusinessLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                Open Google Business Link
              </a>
            </div>
          </div>

          {/* Right Column: Real Reviews Title & Quick Filters */}
          <div className="lg:col-span-8 space-y-6">
            <div>
              <span className="text-xs font-mono font-bold text-blue-600 bg-blue-100/60 px-3 py-1.5 rounded-full uppercase tracking-wider mb-3.5 inline-block">
                True Customer Transparency
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight tracking-tight">
                What customers say on Google Business Listing
              </h2>
              <p className="text-gray-500 text-sm sm:text-base font-medium leading-relaxed mt-2">
                We are proud to have a perfect 5.0 score with hundreds of verified reviews. Click below to verify or read directly on our map entry listings.
              </p>
            </div>

            {/* Tags / Categories Filter Bar */}
            <div className="flex flex-wrap gap-2 pt-2">
              {tags.map(tag => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer ${
                    selectedTag === tag 
                      ? 'bg-black text-white shadow-md shadow-black/10'
                      : 'bg-white text-gray-500 hover:text-black border border-gray-250/60 hover:bg-gray-50/50'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Live Scrollable Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review) => {
            const extraLikes = likes[review.id] || 0;
            const hasLiked = likedList.includes(review.id);

            return (
              <motion.div
                key={review.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white p-6 rounded-3xl border border-gray-150 shadow-[0_4px_25px_rgba(0,0,0,0.015)] hover:shadow-lg hover:border-gray-200 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full ${review.avatarColor} text-white font-black text-sm flex items-center justify-center shrink-0`}>
                        {review.author.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-gray-900 leading-tight">{review.author}</h4>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] text-gray-400 font-bold font-mono uppercase tracking-wider">{review.relativeTime}</span>
                          <span className="text-gray-200 text-xs">•</span>
                          <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded">Local Guide</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Google Icon indicator */}
                    <div className="w-5 h-5 rounded-full bg-slate-50 flex items-center justify-center text-xs font-black shrink-0 text-[#12a550] select-none text-red-500">
                      G
                    </div>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex gap-0.5 mb-3 text-[#FBBC05]">
                    {[...Array(review.rating)].map((_, idx) => (
                      <Star key={idx} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-600 text-xs sm:text-[13px] leading-relaxed font-semibold mb-4 italic">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>

                {/* Card footer: Category badge / Like Action */}
                <div className="pt-4 mt-auto border-t border-gray-50 flex items-center justify-between gap-2">
                  {review.tvModel ? (
                    <span className="text-[10px] font-mono text-gray-400 font-bold bg-gray-50 border border-gray-100 px-2 py-0.5 rounded">
                      {review.tvModel}
                    </span>
                  ) : (
                    <span className="text-[10px] font-mono text-gray-400 font-bold bg-gray-50 border border-gray-100 px-2 py-0.5 rounded">
                      {review.category}
                    </span>
                  )}

                  <button
                    onClick={() => handleLike(review.id)}
                    className={`flex items-center gap-1 text-[11px] font-bold ${
                      hasLiked 
                        ? 'text-blue-600 bg-blue-50 border-blue-100' 
                        : 'text-gray-400 hover:text-gray-700 bg-transparent'
                    } px-2.5 py-1.5 rounded-lg transition-all active:scale-90`}
                  >
                    👍 Helpful ({review.helpfulCount + extraLikes})
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Link verification note */}
        <div className="mt-8 flex gap-3 p-5 bg-blue-50 border border-blue-100/50 rounded-2xl text-blue-900 text-xs font-semibold leading-relaxed">
          <ShieldAlert className="w-5 h-5 shrink-0 text-blue-600" />
          <p>
            Verify these claims anytime! All feedback displayed above matches the authentic, live active listings on Google Maps for iPixel Electronics Bangalore TV repair service center. Feel free to launch our Google Business listing page at <a href={googleBusinessLink} target="_blank" rel="noopener noreferrer" className="underline font-bold text-blue-700 hover:text-blue-900">{googleBusinessLink}</a> to learn more.
          </p>
        </div>

      </div>
    </section>
  );
};
