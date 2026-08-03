export interface LocationData {
  slug: string;
  name: string;
  pincode: string;
  tagline: string;
  landmarks: string[];
  subLocations: string[];
  doorstepTime: string;
  highlights: string[];
  geo: {
    latitude: number;
    longitude: number;
  };
  schemaData: {
    '@context': string;
    '@type': string;
    name: string;
    description: string;
    telephone: string;
    priceRange: string;
    image: string;
    url: string;
    address: {
      '@type': string;
      streetAddress: string;
      addressLocality: string;
      addressRegion: string;
      postalCode: string;
      addressCountry: string;
    };
    geo: {
      '@type': string;
      latitude: string;
      longitude: string;
    };
    openingHoursSpecification: Array<{
      '@type': string;
      dayOfWeek: string[];
      opens: string;
      closes: string;
    }>;
    areaServed: Array<{
      '@type': string;
      name: string;
    }>;
    hasOfferCatalog: {
      '@type': string;
      name: string;
      itemListElement: Array<{
        '@type': string;
        itemOffered: {
          '@type': string;
          name: string;
          description: string;
        };
      }>;
    };
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
    geo: { latitude: 12.9784, longitude: 77.6408 },
    schemaData: {
      '@context': 'https://schema.org',
      '@type': 'ElectronicsRepairShop',
      name: 'iPixel Electronics TV Repair Service Indiranagar',
      description: 'Authorized-grade doorstep LED, OLED, QLED TV repair and screen replacement service in Indiranagar, Bangalore. Nominal pick-up & drop fee and 180-day warranty.',
      telephone: '+91-9513134313',
      priceRange: '₹₹',
      image: 'https://ais-dev-h3c47zq6ntmeiebybvog57-740976971301.asia-southeast1.run.app/icon.png',
      url: 'https://ais-dev-h3c47zq6ntmeiebybvog57-740976971301.asia-southeast1.run.app/?view=location&slug=indiranagar',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '#22, 3rd A Cross Rd, Gururaja Layout, Doddanekundi',
        addressLocality: 'Indiranagar, Bengaluru',
        addressRegion: 'Karnataka',
        postalCode: '560038',
        addressCountry: 'IN'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '12.9784',
        longitude: '77.6408'
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '09:30',
          closes: '21:00'
        }
      ],
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Indiranagar, Bengaluru' },
        { '@type': 'AdministrativeArea', name: 'HAL 2nd Stage, Bengaluru' },
        { '@type': 'AdministrativeArea', name: 'CMH Road, Bengaluru' }
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'TV Repair Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'LED TV Screen Replacement',
              description: 'Cracked screen, vertical line & panel replacement in Indiranagar'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'TV Backlight LED Repair',
              description: 'Fix black screen with sound working in Indiranagar'
            }
          }
        ]
      }
    }
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
    geo: { latitude: 12.9698, longitude: 77.7499 },
    schemaData: {
      '@context': 'https://schema.org',
      '@type': 'ElectronicsRepairShop',
      name: 'iPixel Electronics TV Repair Service Whitefield',
      description: 'Professional TV repair service in Whitefield, Bangalore. Doorstep screen replacement, motherboard fix, and backlight repair for all TV brands.',
      telephone: '+91-9513134313',
      priceRange: '₹₹',
      image: 'https://ais-dev-h3c47zq6ntmeiebybvog57-740976971301.asia-southeast1.run.app/icon.png',
      url: 'https://ais-dev-h3c47zq6ntmeiebybvog57-740976971301.asia-southeast1.run.app/?view=location&slug=whitefield',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '#22, 3rd A Cross Rd, Gururaja Layout, Doddanekundi',
        addressLocality: 'Whitefield, Bengaluru',
        addressRegion: 'Karnataka',
        postalCode: '560066',
        addressCountry: 'IN'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '12.9698',
        longitude: '77.7499'
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '09:30',
          closes: '21:00'
        }
      ],
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Whitefield, Bengaluru' },
        { '@type': 'AdministrativeArea', name: 'ITPL, Bengaluru' },
        { '@type': 'AdministrativeArea', name: 'EPIP Zone, Bengaluru' }
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'TV Repair Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Smart TV Motherboard Repair',
              description: 'Fix TV power fault and restart issues in Whitefield'
            }
          }
        ]
      }
    }
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
    geo: { latitude: 12.9654, longitude: 77.7183 },
    schemaData: {
      '@context': 'https://schema.org',
      '@type': 'ElectronicsRepairShop',
      name: 'iPixel Electronics TV Repair Service Brookfield',
      description: 'Quick doorstep TV repair service in Brookfield & AECS Layout, Bangalore. Expert panel replacement, backlight repair, and wall mounting.',
      telephone: '+91-9513134313',
      priceRange: '₹₹',
      image: 'https://ais-dev-h3c47zq6ntmeiebybvog57-740976971301.asia-southeast1.run.app/icon.png',
      url: 'https://ais-dev-h3c47zq6ntmeiebybvog57-740976971301.asia-southeast1.run.app/?view=location&slug=brookfield',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '#22, 3rd A Cross Rd, Gururaja Layout, Doddanekundi',
        addressLocality: 'Brookfield, Bengaluru',
        addressRegion: 'Karnataka',
        postalCode: '560037',
        addressCountry: 'IN'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '12.9654',
        longitude: '77.7183'
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '09:30',
          closes: '21:00'
        }
      ],
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Brookfield, Bengaluru' },
        { '@type': 'AdministrativeArea', name: 'AECS Layout, Bengaluru' }
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'TV Repair Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'LED TV Backlight Repair',
              description: 'Fix dark or dim LED TV screen in Brookfield'
            }
          }
        ]
      }
    }
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
    geo: { latitude: 12.9680, longitude: 77.7127 },
    schemaData: {
      '@context': 'https://schema.org',
      '@type': 'ElectronicsRepairShop',
      name: 'iPixel Electronics TV Repair Service Kundalahalli',
      description: 'Fast TV repair & screen replacement at Kundalahalli Gate and Spice Garden, Bengaluru. Same-day doorstep technician visit.',
      telephone: '+91-9513134313',
      priceRange: '₹₹',
      image: 'https://ais-dev-h3c47zq6ntmeiebybvog57-740976971301.asia-southeast1.run.app/icon.png',
      url: 'https://ais-dev-h3c47zq6ntmeiebybvog57-740976971301.asia-southeast1.run.app/?view=location&slug=kundalahalli',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '#22, 3rd A Cross Rd, Gururaja Layout, Doddanekundi',
        addressLocality: 'Kundalahalli, Bengaluru',
        addressRegion: 'Karnataka',
        postalCode: '560037',
        addressCountry: 'IN'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '12.9680',
        longitude: '77.7127'
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '09:30',
          closes: '21:00'
        }
      ],
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Kundalahalli, Bengaluru' },
        { '@type': 'AdministrativeArea', name: 'Spice Garden, Bengaluru' }
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'TV Repair Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'TV Screen Crack Repair',
              description: 'Authentic panel replacement at nominal costs in Kundalahalli'
            }
          }
        ]
      }
    }
  },

  balagere: {
    slug: 'balagere',
    name: 'Balagere',
    pincode: '560087',
    tagline: 'Trusted Doorstep TV Repair in Balagere Road & Varthur Link Area',
    landmarks: ['Sobha Dream Acres', 'Candeur Landmark', 'Balagere Main Road', 'Panathur Link Road'],
    subLocations: ['Sobha Dream Acres Towers', 'Candeur Landmark', 'Balagere Village', 'Vaswani Pinnacle'],
    doorstepTime: '25-35 Mins Scheduled Visit',
    highlights: [
      'Dedicated TV repair service for large residential townships like Sobha Dream Acres',
      'Nominal fee doorstep pick-up & delivery for heavy 65"+ 4K Smart TVs',
      'COF flex bonding repair for vertical line & flickering issues',
      'Certified 180-day warranty on all original spare parts'
    ],
    geo: { latitude: 12.9372, longitude: 77.7282 },
    schemaData: {
      '@context': 'https://schema.org',
      '@type': 'ElectronicsRepairShop',
      name: 'iPixel Electronics TV Repair Service Balagere',
      description: 'Doorstep TV repair service for Balagere, Sobha Dream Acres, and Panathur Link Road, Bangalore. Backlight LED replacement and screen repairs.',
      telephone: '+91-9513134313',
      priceRange: '₹₹',
      image: 'https://ais-dev-h3c47zq6ntmeiebybvog57-740976971301.asia-southeast1.run.app/icon.png',
      url: 'https://ais-dev-h3c47zq6ntmeiebybvog57-740976971301.asia-southeast1.run.app/?view=location&slug=balagere',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '#22, 3rd A Cross Rd, Gururaja Layout, Doddanekundi',
        addressLocality: 'Balagere, Bengaluru',
        addressRegion: 'Karnataka',
        postalCode: '560087',
        addressCountry: 'IN'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '12.9372',
        longitude: '77.7282'
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '09:30',
          closes: '21:00'
        }
      ],
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Balagere, Bengaluru' },
        { '@type': 'AdministrativeArea', name: 'Sobha Dream Acres, Bengaluru' }
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'TV Repair Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Smart TV Backlight Repair',
              description: 'Fix dark TV screen with sound in Balagere'
            }
          }
        ]
      }
    }
  },

  bellandur: {
    slug: 'bellandur',
    name: 'Bellandur',
    pincode: '560103',
    tagline: 'Expert TV Repair & Screen Service in Bellandur & Outer Ring Road',
    landmarks: ['EcoSpace', 'RMZ Ecoworld', 'Adarsh Palm Retreat', 'Central Mall Bellandur', 'Green Glen Layout'],
    subLocations: ['Green Glen Layout', 'Adarsh Palm Retreat', 'Bellandur Lake Road', 'EcoSpace Corridor'],
    doorstepTime: '25-35 Mins Doorstep Arrival',
    highlights: [
      'Serving all major tech hubs & luxury apartments in Bellandur',
      'Safe nominal fee pick-up and drop for complex display repairs',
      '100% Genuine OEM parts for LG OLED, Samsung QLED & Sony Bravia',
      'Transparent diagnostic quote before starting any work'
    ],
    geo: { latitude: 12.9279, longitude: 77.6743 },
    schemaData: {
      '@context': 'https://schema.org',
      '@type': 'ElectronicsRepairShop',
      name: 'iPixel Electronics TV Repair Service Bellandur',
      description: 'Fast doorstep LED & Smart TV repair in Bellandur & Green Glen Layout, Bangalore. Certified panel replacement, COF bonding, motherboard repair.',
      telephone: '+91-9513134313',
      priceRange: '₹₹',
      image: 'https://ais-dev-h3c47zq6ntmeiebybvog57-740976971301.asia-southeast1.run.app/icon.png',
      url: 'https://ais-dev-h3c47zq6ntmeiebybvog57-740976971301.asia-southeast1.run.app/?view=location&slug=bellandur',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '#22, 3rd A Cross Rd, Gururaja Layout, Doddanekundi',
        addressLocality: 'Bellandur, Bengaluru',
        addressRegion: 'Karnataka',
        postalCode: '560103',
        addressCountry: 'IN'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '12.9279',
        longitude: '77.6743'
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '09:30',
          closes: '21:00'
        }
      ],
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Bellandur, Bengaluru' },
        { '@type': 'AdministrativeArea', name: 'Green Glen Layout, Bengaluru' }
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'TV Repair Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'TV Motherboard & Power Board Fix',
              description: 'Fix dead TV, no power supply issues in Bellandur'
            }
          }
        ]
      }
    }
  },

  marathahalli: {
    slug: 'marathahalli',
    name: 'Marathahalli',
    pincode: '560037',
    tagline: 'Leading LED TV Repair & Screen Replacement Hub Marathahalli',
    landmarks: ['Marathahalli Bridge', 'Kalamandir Junction', 'Outer Ring Road', 'Munnekollal', 'Spice Garden'],
    subLocations: ['Marathahalli Bridge', 'Munnekollal', 'Aswath Nagar', 'Tulasi Theatre Road', 'Silver Springs Layout'],
    doorstepTime: '10-20 Mins Immediate Service',
    highlights: [
      'Located directly adjacent to Marathahalli - Fastest 15-min technician arrival',
      'Nominal fee doorstep pick-up & drop across Outer Ring Road corridor',
      'High-precision laser flex bonding machine for vertical line repairs',
      'Best price guarantee on TV screen crack replacement in Bangalore'
    ],
    geo: { latitude: 12.9592, longitude: 77.6974 },
    schemaData: {
      '@context': 'https://schema.org',
      '@type': 'ElectronicsRepairShop',
      name: 'iPixel Electronics TV Repair Service Marathahalli',
      description: 'Authorized-grade LED TV repair service center in Marathahalli, Bangalore. Fastest doorstep visits, panel replacement & backlight fix.',
      telephone: '+91-9513134313',
      priceRange: '₹₹',
      image: 'https://ais-dev-h3c47zq6ntmeiebybvog57-740976971301.asia-southeast1.run.app/icon.png',
      url: 'https://ais-dev-h3c47zq6ntmeiebybvog57-740976971301.asia-southeast1.run.app/?view=location&slug=marathahalli',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '#22, 3rd A Cross Rd, Gururaja Layout, Doddanekundi',
        addressLocality: 'Marathahalli, Bengaluru',
        addressRegion: 'Karnataka',
        postalCode: '560037',
        addressCountry: 'IN'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '12.9592',
        longitude: '77.6974'
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '09:30',
          closes: '21:00'
        }
      ],
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Marathahalli, Bengaluru' },
        { '@type': 'AdministrativeArea', name: 'Munnekollal, Bengaluru' }
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'TV Repair Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'TV Screen Crack Replacement',
              description: 'Authentic 4K Smart TV screen replacement in Marathahalli'
            }
          }
        ]
      }
    }
  },

  doddanekundi: {
    slug: 'doddanekundi',
    name: 'Doddanekundi',
    pincode: '560037',
    tagline: 'Main Workshop & Walk-in TV Repair Center in Doddanekundi, Bangalore',
    landmarks: ['Gururaja Layout', 'Ferns City', 'Bagmane Constellation Business Park', 'Outer Ring Road Doddanekundi'],
    subLocations: ['Gururaja Layout', 'Ferns City', 'Karthik Nagar', 'Outer Ring Road Service Road'],
    doorstepTime: '10 Mins Instant Walk-in / Doorstep',
    highlights: [
      'Direct main workshop location - Drop in or request immediate 10-min doorstep visit',
      'State-of-the-art clean room for panel bonding & backlight LED strip replacements',
      'Nominal fee pickup & drop for all surrounding apartment societies',
      '180-day warranty on original parts directly from workshop technicians'
    ],
    geo: { latitude: 12.9719, longitude: 77.6966 },
    schemaData: {
      '@context': 'https://schema.org',
      '@type': 'ElectronicsRepairShop',
      name: 'iPixel Electronics TV Repair Service Doddanekundi Main Workshop',
      description: 'Main workshop location for iPixel Electronics. Premium LED TV repair, COF bonding, screen replacement & backlight repair in Doddanekundi, Bengaluru.',
      telephone: '+91-9513134313',
      priceRange: '₹₹',
      image: 'https://ais-dev-h3c47zq6ntmeiebybvog57-740976971301.asia-southeast1.run.app/icon.png',
      url: 'https://ais-dev-h3c47zq6ntmeiebybvog57-740976971301.asia-southeast1.run.app/?view=location&slug=doddanekundi',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '#22, 3rd A Cross Rd, Gururaja Layout, Doddanekundi',
        addressLocality: 'Doddanekundi, Bengaluru',
        addressRegion: 'Karnataka',
        postalCode: '560037',
        addressCountry: 'IN'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '12.9719',
        longitude: '77.6966'
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '09:30',
          closes: '21:00'
        }
      ],
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Doddanekundi, Bengaluru' },
        { '@type': 'AdministrativeArea', name: 'Ferns City, Bengaluru' }
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'TV Repair Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Main Workshop Walk-in TV Repair',
              description: 'Direct repair & diagnostic at our Doddanekundi service center'
            }
          }
        ]
      }
    }
  },

  'cv-raman-nagar': {
    slug: 'cv-raman-nagar',
    name: 'C V Raman Nagar',
    pincode: '560093',
    tagline: 'Trusted Doorstep TV Repair Service in C V Raman Nagar & Kaggadasapura',
    landmarks: ['Bagmane Tech Park', 'Kaggadasapura Main Road', 'DRDO Complex', 'Bennigana Halli', 'Byappanahalli'],
    subLocations: ['Kaggadasapura', 'DRDO Township', 'Nagavarapalya', 'Varsova Layout', 'Abbaiah Reddy Layout'],
    doorstepTime: '20-30 Mins Doorstep Service',
    highlights: [
      'Serving C V Raman Nagar & Kaggadasapura residential areas',
      'Nominal fee safe transport pick-up & drop for LED TV screen replacement',
      'Authentic Sony, Samsung, LG & Mi display panels with warranty',
      'Instant price estimates via WhatsApp audio/photo inspection'
    ],
    geo: { latitude: 12.9847, longitude: 77.6627 },
    schemaData: {
      '@context': 'https://schema.org',
      '@type': 'ElectronicsRepairShop',
      name: 'iPixel Electronics TV Repair Service C V Raman Nagar',
      description: 'Doorstep TV repair service in C V Raman Nagar & Kaggadasapura, Bangalore. Expert backlight replacement, motherboard fix, and screen replacement.',
      telephone: '+91-9513134313',
      priceRange: '₹₹',
      image: 'https://ais-dev-h3c47zq6ntmeiebybvog57-740976971301.asia-southeast1.run.app/icon.png',
      url: 'https://ais-dev-h3c47zq6ntmeiebybvog57-740976971301.asia-southeast1.run.app/?view=location&slug=cv-raman-nagar',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '#22, 3rd A Cross Rd, Gururaja Layout, Doddanekundi',
        addressLocality: 'C V Raman Nagar, Bengaluru',
        addressRegion: 'Karnataka',
        postalCode: '560093',
        addressCountry: 'IN'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '12.9847',
        longitude: '77.6627'
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '09:30',
          closes: '21:00'
        }
      ],
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'C V Raman Nagar, Bengaluru' },
        { '@type': 'AdministrativeArea', name: 'Kaggadasapura, Bengaluru' }
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'TV Repair Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Smart TV Screen Repair',
              description: 'Fix cracked screen & display lines in C V Raman Nagar'
            }
          }
        ]
      }
    }
  },

  islampur: {
    slug: 'islampur',
    name: 'Islampur Bangalore',
    pincode: '560037',
    tagline: 'Fast Local TV Repair & Screen Service in Islampur & HAL Area',
    landmarks: ['HAL Old Airport Road', 'Marathahalli Service Road', 'Islampur Village', 'Vimanapura'],
    subLocations: ['Islampur Main Road', 'HAL Area', 'Vimanapura', 'Murugeshpalya Border'],
    doorstepTime: '15-25 Mins Express Arrival',
    highlights: [
      'Quick response doorstep technician visit in Islampur & HAL Airport vicinity',
      'Nominal fee pick-up & drop with padded transport boxes',
      'Fix black screens, vertical lines, double images & power issues',
      'Original spare parts backed by 180-day written guarantee'
    ],
    geo: { latitude: 12.9550, longitude: 77.6820 },
    schemaData: {
      '@context': 'https://schema.org',
      '@type': 'ElectronicsRepairShop',
      name: 'iPixel Electronics TV Repair Service Islampur Bangalore',
      description: 'Fast doorstep LED & Smart TV repair service in Islampur, Bangalore. Backlight replacement, screen crack fix, motherboard repair.',
      telephone: '+91-9513134313',
      priceRange: '₹₹',
      image: 'https://ais-dev-h3c47zq6ntmeiebybvog57-740976971301.asia-southeast1.run.app/icon.png',
      url: 'https://ais-dev-h3c47zq6ntmeiebybvog57-740976971301.asia-southeast1.run.app/?view=location&slug=islampur',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '#22, 3rd A Cross Rd, Gururaja Layout, Doddanekundi',
        addressLocality: 'Islampur, Bengaluru',
        addressRegion: 'Karnataka',
        postalCode: '560037',
        addressCountry: 'IN'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '12.9550',
        longitude: '77.6820'
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '09:30',
          closes: '21:00'
        }
      ],
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Islampur, Bengaluru' },
        { '@type': 'AdministrativeArea', name: 'HAL Old Airport Road, Bengaluru' }
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'TV Repair Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'TV Backlight LED Repair',
              description: 'Fix no display sound working in Islampur Bangalore'
            }
          }
        ]
      }
    }
  },

  varthur: {
    slug: 'varthur',
    name: 'Varthur',
    pincode: '560087',
    tagline: 'Expert Doorstep TV Repair & Screen Service in Varthur & Gunjur Hub',
    landmarks: ['Varthur Lake', 'Varthur Main Road', 'Gunjur Junction', 'KK English High School', 'State Bank of India Varthur'],
    subLocations: ['Varthur Town', 'Varthur Kodi', 'Gunjur', 'Sorahunase', 'Valepura'],
    doorstepTime: '25-35 Mins Doorstep Arrival',
    highlights: [
      'Comprehensive TV repair service for all Varthur & Gunjur apartments',
      'Nominal fee pick-up & drop service for large 50"+ 4K LED TVs',
      'High honesty & transparent invoicing with 180-day certified warranty',
      'Expert COF bonding for display line distortion repairs'
    ],
    geo: { latitude: 12.9389, longitude: 77.7410 },
    schemaData: {
      '@context': 'https://schema.org',
      '@type': 'ElectronicsRepairShop',
      name: 'iPixel Electronics TV Repair Service Varthur',
      description: 'Authorized doorstep LED & Smart TV repair in Varthur & Gunjur, Bangalore. Screen panel replacement, backlight repair, motherboard fix.',
      telephone: '+91-9513134313',
      priceRange: '₹₹',
      image: 'https://ais-dev-h3c47zq6ntmeiebybvog57-740976971301.asia-southeast1.run.app/icon.png',
      url: 'https://ais-dev-h3c47zq6ntmeiebybvog57-740976971301.asia-southeast1.run.app/?view=location&slug=varthur',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '#22, 3rd A Cross Rd, Gururaja Layout, Doddanekundi',
        addressLocality: 'Varthur, Bengaluru',
        addressRegion: 'Karnataka',
        postalCode: '560087',
        addressCountry: 'IN'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '12.9389',
        longitude: '77.7410'
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '09:30',
          closes: '21:00'
        }
      ],
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Varthur, Bengaluru' },
        { '@type': 'AdministrativeArea', name: 'Gunjur, Bengaluru' }
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'TV Repair Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Smart TV Screen Replacement',
              description: 'Cracked panel & backlight repair in Varthur'
            }
          }
        ]
      }
    }
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
    geo: { latitude: 12.9515, longitude: 77.6698 },
    schemaData: {
      '@context': 'https://schema.org',
      '@type': 'ElectronicsRepairShop',
      name: 'iPixel Electronics TV Repair Service Yemalur',
      description: 'Doorstep LED, OLED, QLED TV repair in Yemalur & Windtunnel Road, Bangalore. Genuine screen panels, backlight LED replacement, COF bonding.',
      telephone: '+91-9513134313',
      priceRange: '₹₹',
      image: 'https://ais-dev-h3c47zq6ntmeiebybvog57-740976971301.asia-southeast1.run.app/icon.png',
      url: 'https://ais-dev-h3c47zq6ntmeiebybvog57-740976971301.asia-southeast1.run.app/?view=location&slug=yemalur',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '#22, 3rd A Cross Rd, Gururaja Layout, Doddanekundi',
        addressLocality: 'Yemalur, Bengaluru',
        addressRegion: 'Karnataka',
        postalCode: '560037',
        addressCountry: 'IN'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '12.9515',
        longitude: '77.6698'
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '09:30',
          closes: '21:00'
        }
      ],
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Yemalur, Bengaluru' },
        { '@type': 'AdministrativeArea', name: 'Windtunnel Road, Bengaluru' }
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'TV Repair Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'OLED & QLED TV Repair',
              description: 'Expert premium screen & panel fix in Yemalur'
            }
          }
        ]
      }
    }
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

  // Loose keyword matching
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

  return LOCATIONS_DATA.marathahalli;
}
