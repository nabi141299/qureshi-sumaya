export interface LocationTestimonial {
  id: string;
  customerName: string;
  subArea: string;
  rating: number;
  date: string;
  reviewText: string;
  ownerResponse: string;
  tvModel: string;
  serviceType: string;
}

export interface LocationData {
  slug: string;
  name: string;
  pincode: string;
  tagline: string;
  landmarks: string[];
  subLocations: string[];
  doorstepTime: string;
  highlights: string[];
  testimonials: LocationTestimonial[];
  geo: {
    latitude: number;
    longitude: number;
  };
  schemaData: any;
}

function createLocationTestimonials(locationName: string, landmark: string, subArea: string): LocationTestimonial[] {
  return [
    {
      id: `${locationName.toLowerCase().replace(/\s+/g, '-')}-rev-1`,
      customerName: 'Anand R.',
      subArea: `${subArea}, ${locationName}`,
      rating: 5,
      date: '2 days ago',
      tvModel: 'Sony Bravia 55" 4K Smart LED',
      serviceType: 'Display Panel Screen Replacement',
      reviewText: `Quick TV panel repair service in ${locationName}! My 55-inch screen was damaged near ${landmark}. Technicians dispatched with nominal fee, replaced the original panel, and returned it with a 180-day warranty card. Highly recommended!`,
      ownerResponse: `Thank you for choosing ipixel electronics for your LED TV screen replacement in ${locationName}! We are delighted that our doorstep pick-up and repair service near ${landmark} met your expectations. Enjoy your 4K display!`
    },
    {
      id: `${locationName.toLowerCase().replace(/\s+/g, '-')}-rev-2`,
      customerName: 'Priya Sharma',
      subArea: `Near ${landmark}, ${locationName}`,
      rating: 5,
      date: '1 week ago',
      tvModel: 'Samsung Crystal 43" UHD',
      serviceType: 'Backlight LED Strip Fix',
      reviewText: `Best LED screen backlight replacement near ${locationName}. Audio was working fine but display was totally pitch dark. Called ipixel electronics, technician arrived within promised time, changed original LED backlight bars at my apartment. Very honest pricing!`,
      ownerResponse: `Thank you Priya for your review! We pride ourselves on rapid doorstep technician visits in ${locationName} and transparent pricing for Samsung TV backlight repair.`
    },
    {
      id: `${locationName.toLowerCase().replace(/\s+/g, '-')}-rev-3`,
      customerName: 'Karthik V.',
      subArea: `${locationName} Tech Area`,
      rating: 5,
      date: '2 weeks ago',
      tvModel: 'LG 65" Nanocell AI ThinQ',
      serviceType: 'TV Wall Mounting & Heavy Duty Installation',
      reviewText: `Prompt TV wall mounting and installation service in ${locationName}. The technician brought heavy-duty swivel brackets, aligned the 65-inch TV perfectly, and concealed all wiring cleanly. Excellent service!`,
      ownerResponse: `Thank you Karthik for trusting ipixel electronics for your 65-inch LG TV wall mounting in ${locationName}! Glad we could provide a clean, safe installation.`
    }
  ];
}

function makeSchema(slug: string, name: string, pincode: string, desc: string, lat: number, lng: number) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TelevisionRepairService',
    '@id': `https://ipixelelectronics.com/?view=location&slug=${slug}#business`,
    name: `ipixel electronics - TV Repair ${name}`,
    alternateName: 'Pixel Electronic',
    image: [
      'https://ipixelelectronics.com/images/storefront.jpg',
      'https://ipixelelectronics.com/images/logo.png'
    ],
    url: `https://ipixelelectronics.com/?view=location&slug=${slug}`,
    telephone: '+919513134313',
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '#22, 3rd A Cross, Gururaja Layout, Doddanekundi',
      addressLocality: `${name}, Bengaluru`,
      addressRegion: 'Karnataka',
      postalCode: pincode,
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: lat,
      longitude: lng
    },
    hasMap: 'https://maps.google.com/maps?cid=12337121828717556837',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '09:30',
        closes: '21:00'
      }
    ],
    areaServed: [
      { '@type': 'City', name: 'Bengaluru', sameAs: 'https://en.wikipedia.org/wiki/Bangalore' },
      { '@type': 'Place', name: name },
      { '@type': 'Place', name: 'Doddanekkundi' },
      { '@type': 'Place', name: 'Marathahalli' },
      { '@type': 'Place', name: 'Whitefield' }
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'TV Repair & Display Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Smart TV Screen & Display Panel Replacement',
            description: `Expert display panel and open-cell screen replacement in ${name} for LED, OLED, and QLED TVs with 180 days warranty.`
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'TV Backlight Repair & LED Strip Replacement',
            description: `Fixing black/dark screen issues, dim displays, and backlight failure in ${name}.`
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Display Line Repair (Advanced COF Bonding)',
            description: `In-house bonding machine repair for horizontal/vertical lines and screen flickering in ${name}.`
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: `Doorstep TV Repair Service in ${name}`,
            description: `In-home inspection, pickup, and doorstep repair service across ${name}, Bangalore.`
          }
        }
      ]
    }
  };
}

export const LOCATIONS_DATA: Record<string, LocationData> = {
  indiranagar: {
    slug: 'indiranagar',
    name: 'Indiranagar',
    pincode: '560038',
    tagline: 'Premium Doorstep LED & Smart TV Repair in Indiranagar, Bangalore',
    landmarks: ['100 Feet Road', '12th Main', 'CMH Road', 'Indiranagar Metro Station', 'HAL 2nd Stage'],
    subLocations: ['100ft Road', '12th Main', 'Defense Colony', 'HAL 2nd Stage', 'Appareddy Palya'],
    doorstepTime: '25-35 Mins Rapid Technician Dispatch',
    highlights: [
      'Same-day doorstep repair service in Indiranagar & 100ft Road',
      'Nominal fee pick-up & drop for 55"+ panel screen repairs',
      '100% Genuine Sony, Samsung, LG & Mi replacement parts with 180-day warranty',
      'Laser COF bonding & motherboard chip-level repair'
    ],
    testimonials: createLocationTestimonials('Indiranagar', '100 Feet Road', 'Defense Colony'),
    geo: { latitude: 12.9784, longitude: 77.6408 },
    schemaData: makeSchema('indiranagar', 'Indiranagar', '560038', 'Doorstep LED TV Repair in Indiranagar', 12.9784, 77.6408)
  },

  whitefield: {
    slug: 'whitefield',
    name: 'Whitefield',
    pincode: '560066',
    tagline: 'Expert Doorstep TV Repair & Screen Replacement in Whitefield Tech Hub',
    landmarks: ['ITPL', 'Phoenix Marketcity', 'Forum Value Mall', 'EPIP Zone', 'Hope Farm Junction'],
    subLocations: ['ITPL Back Gate', 'EPIP Zone', 'Pattandur Agrahara', 'Channasandra', 'Immadahalli'],
    doorstepTime: '20-30 Mins Fast Doorstep Service',
    highlights: [
      'Express doorstep technician visits for Whitefield tech park residents',
      'Nominal fee safe pick-up & drop for curved and OLED TVs',
      'Advanced flex cable bonding & vertical line removal',
      'Transparent upfront quotes & 6-month warranty on original panels'
    ],
    testimonials: createLocationTestimonials('Whitefield', 'EPIP Zone near ITPL', 'Hope Farm'),
    geo: { latitude: 12.9698, longitude: 77.7499 },
    schemaData: makeSchema('whitefield', 'Whitefield', '560066', 'TV Repair & Screen Replacement in Whitefield', 12.9698, 77.7499)
  },

  brookfield: {
    slug: 'brookfield',
    name: 'Brookfield',
    pincode: '560037',
    tagline: 'Reliable Smart TV Repair & Screen Fix in Brookfield & ITPL Main Road',
    landmarks: ['AECS Layout', 'ITPL Main Road', 'Vydehi Hospital', 'BEML Layout', 'CMRIT Campus'],
    subLocations: ['AECS Layout Blocks A-E', 'ITPL Road', 'BEML Layout', 'Brooke Bond Gate'],
    doorstepTime: '15-25 Mins Immediate Dispatch',
    highlights: [
      'Ultra-fast service in Brookfield & AECS Layout due to close proximity to shop',
      'Nominal fee doorstep pick-up & drop with padded protective casing',
      'Original Sony Bravia, Samsung Crystal & LG WebOS display panels',
      'Instant WhatsApp estimate with transparent price guarantee'
    ],
    testimonials: createLocationTestimonials('Brookfield', 'ITPL Main Road', 'BEML Layout'),
    geo: { latitude: 12.9654, longitude: 77.7183 },
    schemaData: makeSchema('brookfield', 'Brookfield', '560037', 'TV Repair Service in Brookfield', 12.9654, 77.7183)
  },

  kundalahalli: {
    slug: 'kundalahalli',
    name: 'Kundalahalli',
    pincode: '560037',
    tagline: 'Top-Rated LED TV Repair & Screen Service in Kundalahalli & Gate Area',
    landmarks: ['Kundalahalli Gate', 'Spice Garden', 'Brookefield Signal', 'Divyasree Techno Park'],
    subLocations: ['Kundalahalli Gate', 'Spice Garden', 'Green Glen', 'BEML Layout Kundalahalli'],
    doorstepTime: '15-20 Mins Express Arrival',
    highlights: [
      'Direct technician arrival in Spice Garden & Kundalahalli Gate within 20 mins',
      'Specialized in Mi 4K, OnePlus Y Series & Samsung Crystal display repairs',
      'Nominal fee safe pick-up & drop facility for apartment complexes',
      'No hidden charges - pay only after satisfactory repair test'
    ],
    testimonials: createLocationTestimonials('Kundalahalli', 'Kundalahalli Gate', 'Spice Garden'),
    geo: { latitude: 12.9680, longitude: 77.7127 },
    schemaData: makeSchema('kundalahalli', 'Kundalahalli', '560037', 'TV Repair at Kundalahalli Gate', 12.9680, 77.7127)
  },

  balagere: {
    slug: 'balagere',
    name: 'Balagere',
    pincode: '560087',
    tagline: 'Specialized TV Repair for Sobha Dream Acres & Balagere Area',
    landmarks: ['Sobha Dream Acres', 'Varthur-Balagere Road', 'Gunjur Link Road', 'Panathur Road'],
    subLocations: ['Sobha Dream Acres Oasis', 'Balagere Village', 'Sobha Forest Edge', 'Panathur Railway Bridge'],
    doorstepTime: '15-25 Mins Doorstep Arrival',
    highlights: [
      'Dedicated TV repair partner for Sobha Dream Acres & surrounding mega-townships',
      'Nominal fee safe transport for 55", 65" and 75" large screens',
      'Original backlight replacement and COF bonding line fixes',
      'Available 7 days a week from 9:30 AM to 9:00 PM'
    ],
    testimonials: createLocationTestimonials('Balagere', 'Sobha Dream Acres', 'Panathur Road'),
    geo: { latitude: 12.9382, longitude: 77.7341 },
    schemaData: makeSchema('balagere', 'Balagere', '560087', 'TV Repair in Balagere & Sobha Dream Acres', 12.9382, 77.7341)
  },

  bellandur: {
    slug: 'bellandur',
    name: 'Bellandur',
    pincode: '560103',
    tagline: 'Fast Doorstep TV Repair in Bellandur & Outer Ring Road Tech Corridor',
    landmarks: ['EcoSpace Tech Park', 'Green Glen Layout', 'Bellandur Flyover', 'Central Mall Bellandur'],
    subLocations: ['Green Glen Layout', 'EcoSpace IT Park', 'Sun City Apartments', 'Adugodi Layout'],
    doorstepTime: '20-30 Mins Doorstep Service',
    highlights: [
      'Same-day doorstep visits across Green Glen Layout & Bellandur ORR',
      'Nominal fee pick-up & drop for complex panel bonded repairs',
      '100% Genuine screen panels for Sony, Samsung, LG, TCL & Vu',
      '6 months warranty on all screen replacements & power supply repairs'
    ],
    testimonials: createLocationTestimonials('Bellandur', 'Green Glen Layout', 'EcoSpace IT Park'),
    geo: { latitude: 12.9260, longitude: 77.6762 },
    schemaData: makeSchema('bellandur', 'Bellandur', '560103', 'TV Repair & Screen Replacement in Bellandur', 12.9260, 77.6762)
  },

  marathahalli: {
    slug: 'marathahalli',
    name: 'Marathahalli',
    pincode: '560037',
    tagline: 'Leading LED TV Repair & Screen Replacement Center in Marathahalli',
    landmarks: ['Marathahalli Bridge', 'Kalamandir Junction', 'Outer Ring Road', 'Multiplex Signal', 'Spice Garden Link'],
    subLocations: ['Marathahalli Village', 'Munnekollal', 'Sanjay Nagar', 'Kalamandir ORR', 'Ashwath Nagar'],
    doorstepTime: '10-20 Mins Express Dispatch',
    highlights: [
      'Nearest service hub - 10-20 mins technician arrival in Marathahalli',
      'Nominal fee pick-up & drop with protective bubble wrapping',
      'In-house high precision laser COF bonding machine for display line repair',
      'Free diagnosis & upfront estimate before repair work starts'
    ],
    testimonials: createLocationTestimonials('Marathahalli', 'Kalamandir Junction', 'Munnekollal'),
    geo: { latitude: 12.9592, longitude: 77.6974 },
    schemaData: makeSchema('marathahalli', 'Marathahalli', '560037', 'TV Repair Center in Marathahalli', 12.9592, 77.6974)
  },

  doddanekundi: {
    slug: 'doddanekundi',
    name: 'Doddanekundi',
    pincode: '560037',
    tagline: 'Main Workshop & Express Doorstep TV Repair in Doddanekundi',
    landmarks: ['iPixel Electronics Workshop', 'Gururaja Layout', 'Ferns City', 'Soul Space Arena Mall', 'Bagmane Tech Park'],
    subLocations: ['Gururaja Layout', 'Ferns City', 'Kartik Nagar', 'Mahadevapura Link', 'Doddanekundi Lake'],
    doorstepTime: '5-15 Mins Instant Visit (Workshop Hub)',
    highlights: [
      'Our primary service workshop location - walk-in or 10-minute doorstep visit',
      'Free walk-in inspection & live testing in our workshop',
      'Direct component pricing with no middleman margins',
      'All major 4K Smart TV screens, backlight strips, and motherboards in stock'
    ],
    testimonials: createLocationTestimonials('Doddanekundi', 'Gururaja Layout near Workshop', 'Ferns City'),
    geo: { latitude: 12.9719, longitude: 77.6966 },
    schemaData: makeSchema('doddanekundi', 'Doddanekundi', '560037', 'Main TV Repair Workshop in Doddanekundi', 12.9719, 77.6966)
  },

  'cv-raman-nagar': {
    slug: 'cv-raman-nagar',
    name: 'C V Raman Nagar',
    pincode: '560093',
    tagline: 'Trusted Smart TV Repair & Screen Service in C V Raman Nagar & Kaggadasapura',
    landmarks: ['DRDO Township', 'Bagmane Tech Park', 'Kaggadasapura Main Road', 'Byappanahalli Metro'],
    subLocations: ['DRDO Phase 1 & 2', 'Nagavarapalya', 'Varsoova Layout', 'Kaggadasapura Link'],
    doorstepTime: '20-30 Mins Doorstep Service',
    highlights: [
      'Serving DRDO Township, Bagmane Tech Park & Kaggadasapura residents',
      'Nominal fee pick-up & drop with official job sheet receipt',
      'Original backlight replacement and motherboard chip repair',
      '180-day written warranty on original panel spares'
    ],
    testimonials: createLocationTestimonials('C V Raman Nagar', 'DRDO Township', 'Kaggadasapura Main Road'),
    geo: { latitude: 12.9854, longitude: 77.6638 },
    schemaData: makeSchema('cv-raman-nagar', 'C V Raman Nagar', '560093', 'TV Repair in C V Raman Nagar', 12.9854, 77.6638)
  },

  islampur: {
    slug: 'islampur',
    name: 'Islampur',
    pincode: '560037',
    tagline: 'Doorstep TV Repair & Screen Replacement in Islampur & HAL Airport Area',
    landmarks: ['HAL Airport Road', 'HAL Old Airport Gate', 'Yemalur Cross', 'Marathahalli Link'],
    subLocations: ['Islampur Village', 'HAL Colony', 'Yemalur Cross Road', 'Airport Road'],
    doorstepTime: '15-20 Mins Quick Arrival',
    highlights: [
      'Fast doorstep service for Islampur & HAL Colony residents',
      'Nominal fee safe transport for panel replacement',
      'Specialized in Sony Bravia, Mi TV & LG Smart TV repairs',
      'Genuine parts with 6 months warranty'
    ],
    testimonials: createLocationTestimonials('Islampur', 'HAL Airport Road', 'Yemalur Cross'),
    geo: { latitude: 12.9548, longitude: 77.6812 },
    schemaData: makeSchema('islampur', 'Islampur', '560037', 'TV Repair Service in Islampur', 12.9548, 77.6812)
  },

  varthur: {
    slug: 'varthur',
    name: 'Varthur',
    pincode: '560087',
    tagline: 'Expert TV Repair & Panel Replacement in Varthur & Sarjapur Road Link',
    landmarks: ['Varthur Lake', 'Varthur Main Bazar', 'Gunjur Junction', 'Prestige Lakeside Habitat'],
    subLocations: ['Varthur Lake Road', 'K K School Road', 'Prestige Lakeside Habitat', 'Sorahunase'],
    doorstepTime: '20-30 Mins Doorstep Visit',
    highlights: [
      'Direct doorstep visits to Prestige Lakeside Habitat & Varthur gated communities',
      'Nominal fee pick-up & drop for 50"+ curved and flat LED screens',
      'Original LED backlight bar replacements with high heat sink longevity',
      'Transparent estimates on WhatsApp before work begins'
    ],
    testimonials: createLocationTestimonials('Varthur', 'Prestige Lakeside Habitat', 'Varthur Lake Road'),
    geo: { latitude: 12.9389, longitude: 77.7476 },
    schemaData: makeSchema('varthur', 'Varthur', '560087', 'TV Repair Service in Varthur', 12.9389, 77.7476)
  },

  yemalur: {
    slug: 'yemalur',
    name: 'Yemalur',
    pincode: '560037',
    tagline: 'Professional Doorstep TV Repair in Yemalur, Windtunnel Road & Bellandur Lake',
    landmarks: ['Epsilon Villas', 'Divyasree Elan', 'Windtunnel Road', 'Kariyammana Agrahara', 'Old Airport Road Link'],
    subLocations: ['Epsilon Villas', 'Yemalur Village', 'Kariyammana Agrahara', 'Windtunnel Road'],
    doorstepTime: '20-30 Mins Doorstep Service',
    highlights: [
      'Serving premium gated villas & apartments in Yemalur & Windtunnel Road',
      'Nominal fee safe pick-up & drop with dedicated transport',
      'Original Sony OLED, Samsung QLED & LG Nanocell panel repairs',
      '6-month warranty on all replaced components and backlight strips'
    ],
    testimonials: createLocationTestimonials('Yemalur', 'Epsilon Villas', 'Windtunnel Road'),
    geo: { latitude: 12.9515, longitude: 77.6698 },
    schemaData: makeSchema('yemalur', 'Yemalur', '560037', 'TV Repair Service in Yemalur', 12.9515, 77.6698)
  },

  mahadevapura: {
    slug: 'mahadevapura',
    name: 'Mahadevapura',
    pincode: '560048',
    tagline: 'Doorstep LED TV Repair & Wall Mounting in Mahadevapura & Bagmane Tech Park',
    landmarks: ['Bagmane Constellation Park', 'Phoenix Marketcity', 'Singayyanapalya Metro', 'Outer Ring Road'],
    subLocations: ['Singayyanapalya', 'Garudacharpalya', 'ORR Service Road', 'LNS Layout'],
    doorstepTime: '10-15 Mins Immediate Dispatch',
    highlights: [
      'Superfast technician dispatch across Mahadevapura & Bagmane Constellation Park',
      'Nominal pick-up & drop fee for 4K Smart TV screen replacement',
      'Original Sony, Samsung, LG, Mi, OnePlus display panels',
      '180-day written warranty on panel replacements'
    ],
    testimonials: createLocationTestimonials('Mahadevapura', 'Bagmane Constellation Park', 'Singayyanapalya'),
    geo: { latitude: 12.9881, longitude: 77.6898 },
    schemaData: makeSchema('mahadevapura', 'Mahadevapura', '560048', 'TV Repair Service in Mahadevapura', 12.9881, 77.6898)
  },

  hoodi: {
    slug: 'hoodi',
    name: 'Hoodi',
    pincode: '560048',
    tagline: 'Reliable Smart TV Screen Replacement & Backlight Fix in Hoodi Circle',
    landmarks: ['Hoodi Circle', 'Hoodi Halt Railway Station', 'Rajapalya', 'AECS Layout Extension'],
    subLocations: ['Hoodi Circle', 'Rajapalya', 'Seetharampalya', 'Hoodi Main Road'],
    doorstepTime: '15-20 Mins Express Visit',
    highlights: [
      'Express doorstep technician visits around Hoodi Circle & Rajapalya',
      'Laser COF bonding machine for vertical line removal',
      'Nominal fee safe transport with padded TV crates',
      'Upfront transparent quotation & 6-month warranty'
    ],
    testimonials: createLocationTestimonials('Hoodi', 'Hoodi Circle', 'Rajapalya'),
    geo: { latitude: 12.9912, longitude: 77.7163 },
    schemaData: makeSchema('hoodi', 'Hoodi', '560048', 'TV Repair Service in Hoodi', 12.9912, 77.7163)
  },

  'hsr-layout': {
    slug: 'hsr-layout',
    name: 'HSR Layout',
    pincode: '560102',
    tagline: 'Top Quality Doorstep TV Repair in HSR Layout Sectors 1-7',
    landmarks: ['27th Main Road', 'Agara Lake', 'BDA Complex HSR', 'Silk Board Junction'],
    subLocations: ['Sector 1', 'Sector 2', 'Sector 3', '27th Main Road', 'Sector 7'],
    doorstepTime: '25-35 Mins Rapid Visit',
    highlights: [
      'Doorstep technician coverage across all 7 Sectors of HSR Layout',
      'Nominal fee pick-up & drop for 55"+ panel screen repairs',
      'Original backlight replacement and motherboard chip-level fixes',
      '180-day warranty card with genuine replacement parts'
    ],
    testimonials: createLocationTestimonials('HSR Layout', '27th Main Road', 'Sector 2'),
    geo: { latitude: 12.9121, longitude: 77.6445 },
    schemaData: makeSchema('hsr-layout', 'HSR Layout', '560102', 'TV Repair in HSR Layout', 12.9121, 77.6445)
  },

  kadubeesanahalli: {
    slug: 'kadubeesanahalli',
    name: 'Kadubeesanahalli',
    pincode: '560103',
    tagline: 'Expert TV Repair & Wall Mounting in Kadubeesanahalli & Cessna Business Park',
    landmarks: ['JPMorgan Chase ORR', 'Embassy TechVillage', 'Cessna Business Park', 'Kadubeesanahalli Underpass'],
    subLocations: ['ORR IT Corridor', 'Cessna Tech Park', 'Panathur Road Link'],
    doorstepTime: '15-20 Mins Express Doorstep',
    highlights: [
      'Technician arrival in Embassy TechVillage & Cessna Park in 20 mins',
      'Nominal pick-up & drop fee with dedicated shockproof vehicle',
      'Original OLED, QLED & LED display panels',
      'Free diagnostic estimate before repair'
    ],
    testimonials: createLocationTestimonials('Kadubeesanahalli', 'Embassy TechVillage', 'Panathur Road'),
    geo: { latitude: 12.9351, longitude: 77.6942 },
    schemaData: makeSchema('kadubeesanahalli', 'Kadubeesanahalli', '560103', 'TV Repair in Kadubeesanahalli', 12.9351, 77.6942)
  },

  itpl: {
    slug: 'itpl',
    name: 'ITPL',
    pincode: '560066',
    tagline: 'Authorized-Grade TV Repair Service for ITPL & Pattandur Agrahara',
    landmarks: ['ITPL Main Building', 'Park Square Mall', 'Pattandur Agrahara Metro', 'Vydehi Campus'],
    subLocations: ['ITPL Campus', 'Ascendas Park', 'Pattandur Agrahara', 'Whitefield Main Road'],
    doorstepTime: '20-25 Mins Technician Visit',
    highlights: [
      'Serving ITPL tech workers and residential apartments nearby',
      'Nominal fee safe transport for screen panel replacement',
      'Original LED backlight strips and motherboard repairs',
      '180-day written warranty'
    ],
    testimonials: createLocationTestimonials('ITPL', 'Park Square Mall', 'Pattandur Agrahara'),
    geo: { latitude: 12.9868, longitude: 77.7381 },
    schemaData: makeSchema('itpl', 'ITPL', '560066', 'TV Repair Service ITPL Whitefield', 12.9868, 77.7381)
  },

  kaggadasapura: {
    slug: 'kaggadasapura',
    name: 'Kaggadasapura',
    pincode: '560093',
    tagline: 'Fast Smart TV Repair & Screen Service in Kaggadasapura & Vignan Nagar',
    landmarks: ['DRDO Township', 'Malleshpalya', 'Vignan Nagar Main Road', 'Kaggadasapura Lake'],
    subLocations: ['Abbaiah Reddy Layout', 'Malleshpalya', 'Vignan Nagar', 'Ghostani Road'],
    doorstepTime: '20-25 Mins Rapid Visit',
    highlights: [
      'Prompt technician visits across Kaggadasapura & Vignan Nagar',
      'Nominal pick-up & drop fee for 4K panel bonding',
      '100% genuine spares for Sony, Samsung, LG, Mi, Vu',
      '6 months written warranty'
    ],
    testimonials: createLocationTestimonials('Kaggadasapura', 'Kaggadasapura Main Road', 'Vignan Nagar'),
    geo: { latitude: 12.9811, longitude: 77.6789 },
    schemaData: makeSchema('kaggadasapura', 'Kaggadasapura', '560093', 'TV Repair in Kaggadasapura', 12.9811, 77.6789)
  },

  'aecs-layout': {
    slug: 'aecs-layout',
    name: 'AECS Layout',
    pincode: '560037',
    tagline: 'Express Doorstep TV Repair in AECS Layout Blocks A to E',
    landmarks: ['AECS Layout A-E Blocks', 'CMRIT College', 'Kundalahalli Colony', 'ITPL Main Road'],
    subLocations: ['A Block', 'B Block', 'C Block', 'D Block', 'E Block'],
    doorstepTime: '10-15 Mins Immediate Dispatch',
    highlights: [
      'Immediate 10-15 min dispatch to AECS Layout due to proximity to Doddanekundi shop',
      'Original panel screen replacements & backlight strip fixes',
      'Nominal fee pick-up & drop with padded transport',
      'Transparent upfront price guarantee'
    ],
    testimonials: createLocationTestimonials('AECS Layout', 'AECS Layout C Block', 'CMRIT Road'),
    geo: { latitude: 12.9642, longitude: 77.7135 },
    schemaData: makeSchema('aecs-layout', 'AECS Layout', '560037', 'TV Repair Service AECS Layout', 12.9642, 77.7135)
  },

  gunjur: {
    slug: 'gunjur',
    name: 'Gunjur',
    pincode: '560087',
    tagline: 'Reliable TV Repair & Installation in Gunjur Village & Sarjapur Link',
    landmarks: ['Gunjur Palya', 'Varthur-Sarjapur Main Road', 'Krupanidhi College', 'Gunjur Lake'],
    subLocations: ['Gunjur Village', 'Gunjur Palya', 'Sarjapur Link', 'Krupanidhi Campus'],
    doorstepTime: '25-30 Mins Doorstep Visit',
    highlights: [
      'Doorstep visits across Gunjur & Sarjapur link road townships',
      'Nominal pick-up & drop fee for screen panel bonding',
      'Original backlight replacement and motherboard repairs',
      '180-day written warranty card'
    ],
    testimonials: createLocationTestimonials('Gunjur', 'Gunjur Palya', 'Sarjapur Link'),
    geo: { latitude: 12.9214, longitude: 77.7391 },
    schemaData: makeSchema('gunjur', 'Gunjur', '560087', 'TV Repair Service in Gunjur', 12.9214, 77.7391)
  }
};

/**
 * Normalizes input slugs like "Indiranagar", "c v raman nagar", "islampur bangalore", etc.
 * to match valid location keys in LOCATIONS_DATA.
 */
export function getLocationBySlug(slug?: string): LocationData {
  if (!slug) return LOCATIONS_DATA.marathahalli;

  const normalized = slug.toLowerCase().trim()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');

  if (LOCATIONS_DATA[normalized]) {
    return LOCATIONS_DATA[normalized];
  }

  // Loose keyword matching for all 20 areas
  if (normalized.includes('indira')) return LOCATIONS_DATA.indiranagar;
  if (normalized.includes('whitefield')) return LOCATIONS_DATA.whitefield;
  if (normalized.includes('brookfield') || normalized.includes('brookefield')) return LOCATIONS_DATA.brookfield;
  if (normalized.includes('kundala')) return LOCATIONS_DATA.kundalahalli;
  if (normalized.includes('balagere')) return LOCATIONS_DATA.balagere;
  if (normalized.includes('bellandur')) return LOCATIONS_DATA.bellandur;
  if (normalized.includes('marathahalli')) return LOCATIONS_DATA.marathahalli;
  if (normalized.includes('doddanekundi') || normalized.includes('doddane')) return LOCATIONS_DATA.doddanekundi;
  if (normalized.includes('raman') || normalized.includes('cv-raman')) return LOCATIONS_DATA['cv-raman-nagar'];
  if (normalized.includes('islampur')) return LOCATIONS_DATA.islampur;
  if (normalized.includes('varthur')) return LOCATIONS_DATA.varthur;
  if (normalized.includes('yemalur')) return LOCATIONS_DATA.yemalur;
  if (normalized.includes('mahadeva')) return LOCATIONS_DATA.mahadevapura;
  if (normalized.includes('hoodi')) return LOCATIONS_DATA.hoodi;
  if (normalized.includes('hsr')) return LOCATIONS_DATA['hsr-layout'];
  if (normalized.includes('kadubees') || normalized.includes('kadubisan')) return LOCATIONS_DATA.kadubeesanahalli;
  if (normalized.includes('itpl')) return LOCATIONS_DATA.itpl;
  if (normalized.includes('kaggadasa')) return LOCATIONS_DATA.kaggadasapura;
  if (normalized.includes('aecs')) return LOCATIONS_DATA['aecs-layout'];
  if (normalized.includes('gunjur')) return LOCATIONS_DATA.gunjur;

  return LOCATIONS_DATA.marathahalli;
}
