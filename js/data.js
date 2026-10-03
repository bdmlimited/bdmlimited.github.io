/**
 * BDM LIMITED — ARCHITECTURAL DATA ARCHITECTURE
 * Clean, typed CMS-ready registry for projects, blueprints, specifications,
 * construction milestones, journal essays, and office locations.
 */

const BDM_DATA = {
  brand: {
    name: "BDM Limited",
    bengaliName: "বিডিএম লিমিটেড",
    tagline: "We Shape Places That Outlive Trends",
    bengaliTagline: "স্থায়ী স্থাপত্য ও উন্নত জীবনযাত্রার নিশ্চয়তা",
    industry: "Architectural Real Estate Development",
    territory: "Agrabad CDA Residential Area, Chattogram, Bangladesh",
    coordinates: "22.3275° N, 91.8020° E",
    logoUrl: "assets/logo-white.png",
    heroImage: "https://lh3.googleusercontent.com/aida/AEtjO1WhkUzRW-M_uv_oLSSma0pAy1-MUwl3PpWmINxyottfCNS2EAN6Y2vEpZhDVmcQXZ034lRFTqytDw7fzsBhzs3dVylDmjBDq9Y5Olf6idCWUscKlG9RTCFW-jc5qhOWwNyTyipTCIgSFobhfjsQvsV1sSluhtq1ISqLUK4t89jZm_9H3uR5rSV-Aq8cIk8zhy-_bM9GBxy3gJyARhGWshXtzMM6jhTDOaAHIe_6yHqNfCvczIbfY-rFEQ"
  },

  hotlines: [
    { label: "Primary & WhatsApp", number: "+880 1749-349299", raw: "+8801749349299", whatsapp: true },
    { label: "Sales Hotline 02", number: "+880 1828-178962", raw: "+8801828178962", whatsapp: false },
    { label: "Sales Hotline 03", number: "+880 1815-366393", raw: "+8801815366393", whatsapp: false }
  ],

  offices: [
    {
      id: "nayabazar",
      title: "Corporate Office 01 (Nayabazar / Halishahar)",
      bengaliTitle: "প্রধান কার্যালয় ০১ (নয়াবাজার / হালিশহর)",
      address: "2574, Haji Achi Mia Bari (2nd Floor), Port Connecting Road, Nayabazar Bishwaroad, Halishahar, Chattogram",
      bengaliAddress: "২৫৭৪, হাজী আছি মিঞা বাড়ি (২য় তলা), পোর্ট কানেক্টিং রোড, নয়াবাজার বিশ্বরোড, হালিশহর, চট্টগ্রাম",
      coords: "22.3385° N, 91.7915° E",
      category: "Headquarters & Documentation"
    },
    {
      id: "eidgah",
      title: "Corporate Office 02 (Eidgah / Pahartali)",
      bengaliTitle: "কার্যালয় ০২ (ঈদগাহ / পাহাড়তলী)",
      address: "2813 / C, Al Helal Bhaban, Eidgah Kacha Rasta Matha, Halishahar Road, Pahartali, Chattogram",
      bengaliAddress: "২৮১৩ / সি, আল হেলাল ভবন, ঈদগাহ কাঁচা রাস্তা মাথা, হালিশহর রোড, পাহাড়তলী, চট্টগ্রাম",
      coords: "22.3491° N, 91.8029° E",
      category: "Customer Relations & Engineering"
    }
  ],

  projects: [
    {
      id: "bdm-shopnaloy",
      index: "01",
      name: "BDM Shopnaloy",
      bengaliName: "বিডিএম স্বপ্নালয়",
      status: "Active Construction",
      bengaliStatus: "নির্মাণাধীন প্রকল্প",
      statusBadge: "ACTIVE PILING & SUBSTRUCTURE",
      category: "Bespoke Residential Residences",
      location: "Plot 727, Road 14, Agrabad CDA R/A, Chattogram",
      bengaliLocation: "প্লট ৭২৭, রোড ১৪, আগ্রাবাদ সিডিএ আ/এ, চট্টগ্রাম",
      coordinates: "22.3262° N, 91.8015° E",
      heroImage: "https://lh3.googleusercontent.com/aida/AEtjO1WhkUzRW-M_uv_oLSSma0pAy1-MUwl3PpWmINxyottfCNS2EAN6Y2vEpZhDVmcQXZ034lRFTqytDw7fzsBhzs3dVylDmjBDq9Y5Olf6idCWUscKlG9RTCFW-jc5qhOWwNyTyipTCIgSFobhfjsQvsV1sSluhtq1ISqLUK4t89jZm_9H3uR5rSV-Aq8cIk8zhy-_bM9GBxy3gJyARhGWshXtzMM6jhTDOaAHIe_6yHqNfCvczIbfY-rFEQ",
      twilightImage: "https://lh3.googleusercontent.com/aida/AEtjO1WXBYlYB3uiqXvhg51lmgmSR6p0Ck9VsnynIvs8V4aTdSbN-uKpFdw8PZRAgo-DsE8RhJKa5xetl5oBUp0ZMVYYuC_yHee6xLE6pwWmYC90iSuwuEoKJtgaVigafabOpPOTynNiDjk2-b2yOqWTsp1p3xt3c7aZpo68rcSGg5KkzrL1aeEowvRc-WbjTlRNUES1AJlsjFX13f0VM674ivDop9cIklu-6rjnETpfX46x4T_XkcDY-RYaE84",
      floorPlanImage: "https://lh3.googleusercontent.com/aida/AEtjO1VrWDybYI2Clw5SevjajZH2UeqcnuW8o62SBYweYe5C99mgOuk02LzmU0oq1oAMYRd9HMF4CO5ysJILpZRmPWvHdOar8XO8Btys4hN0LxUvuHOSunSEj-NfkdXdYUZhqEvyj3BXB9nJgTgq1U-W9XiCuk_bmqAccYIFjQqdl8Ox4Zca2bXN-fMZn-0LWQzMlPpQokjX0eP0mGCbFUXN0IyL5cgjGqvnbwEobipwvfvwo3O8LyKUTyiJg3s",
      planType: "3D Isometric Unit Cutaway",
      unitSize: "1,375 Sq. Ft.",
      landSize: "3.75 Katha",
      roadWidth: "40 Feet Frontage",
      floors: "G + 8 Storeys (9 Levels)",
      totalUnits: "15 Units (Strictly 2 Units / Floor)",
      landSharePerUnit: "164 Sq. Ft. Registered Land Deed",
      configuration: "3 Bed, 3 Bath, 3 Balconies, Formal Living & Dining",
      bookingShare: "5,00,000 – 10,00,000 BDT Booking Share",
      features: [
        "40 ft broad access road in tranquil Road 14 sector",
        "Direct registered sub-kabala land deed before superstructure starts",
        "Earthquake-resistant Seismic Zone 2 structural frame with 72.5 grade rebar",
        "8'x8' high-speed passenger lift with Automatic Rescue Device (ARD)",
        "Covered ground floor parking bays and dedicated standby generator",
        "Landscaped communal rooftop terrace garden with seating pergola"
      ],
      description: "BDM Shopnaloy represents a rare combination of tranquil residential seclusion and immediate connectivity in Agrabad CDA. Designed with dual-unit privacy per floor, the structure harnesses daylight through generous corner apertures while offering homeowners registered fractional land ownership."
    },
    {
      id: "bdm-shopno-nebash",
      index: "02",
      name: "BDM Shopno Nebash",
      bengaliName: "বিডিএম স্বপ্ন নিবাস",
      status: "Ongoing Development",
      bengaliStatus: "চলমান আবাসিক প্রকল্প",
      statusBadge: "CIVIL FRAMEWORKS & ARCHITECTURE",
      category: "Executive Family Residences",
      location: "Plot 445, Road 11, Agrabad CDA R/A, Chattogram",
      bengaliLocation: "প্লট ৪৪৫, রোড ১১, আগ্রাবাদ সিডিএ আ/এ, চট্টগ্রাম",
      coordinates: "22.3288° N, 91.8032° E",
      heroImage: "https://lh3.googleusercontent.com/aida/AEtjO1W3xavIoRm8aEPoFUA0q5vYpvspPvqjAwz_TDOJjL57_SBQw_yqERqJYht2YAZXsGp2rQW_Q1SsXTARGneq-2jYvC4TFRVLhRSP_Bjkfyc6lAh60B6qHiH-ffrQ-uE0SCRyoZSjF4pA19zETVMzZ6PhZLhGQevoyKJYrlIcvbwLyVwx3omoXRfQppDGNBGydgaHM8RrEv801nXDETK2zjLYgNAAefEba9jVEYWhOaOwvn6CVKsFBnlAn8E",
      twilightImage: "https://lh3.googleusercontent.com/aida/AEtjO1W3xavIoRm8aEPoFUA0q5vYpvspPvqjAwz_TDOJjL57_SBQw_yqERqJYht2YAZXsGp2rQW_Q1SsXTARGneq-2jYvC4TFRVLhRSP_Bjkfyc6lAh60B6qHiH-ffrQ-uE0SCRyoZSjF4pA19zETVMzZ6PhZLhGQevoyKJYrlIcvbwLyVwx3omoXRfQppDGNBGydgaHM8RrEv801nXDETK2zjLYgNAAefEba9jVEYWhOaOwvn6CVKsFBnlAn8E",
      floorPlanImage: "https://lh3.googleusercontent.com/aida/AEtjO1Wa1myew1Uqa54-Nghj9pLcVNBEQPJOAwOYhqh9bLupkwvv3skXSzSdJui0Wa0oES0jP39QpFILxQSOaYI7q5l0Cb--7AtguIdIqwisz_j-viOHEqGs12AeVWwVp4IBJKdKwceI69gICNfr9NTGFMp_FWFTtoGXZZVJOLOW7cyYSj56bmSLyhREDzazzB-w1DL_yycveIJdpdyzHe9Vx5B3tMFHHjStjVYDmW8_QT64bj422mlZnBGcB_s",
      planType: "Architectural CAD Blueprint (Type A & B)",
      unitSize: "1,750 Sq. Ft. (Type A & B)",
      landSize: "5.00 Katha (40' x 90' Rectangular Parcel)",
      roadWidth: "30 Feet Frontage",
      floors: "G + 9 Storeys (10 Levels)",
      totalUnits: "18 Units (2 Units / Floor)",
      landSharePerUnit: "Proportionate Deeded Share (1/18th of 5 Katha)",
      configuration: "4 Bed, 4 Bath, 3 Balconies, Drawing, Dining & Utility Area",
      bookingShare: "Consult BDM Representative for Allocation",
      features: [
        "5.00 Katha prime rectangular plot with optimal North-South orientation",
        "Strictly 2 expansive executive apartments per floor for maximum privacy",
        "Engineered in consultation with Mahi Engineering Services",
        "Dual fire egress staircases in strict adherence to BNBC & CDA safety codes",
        "Dedicated utility balconies and cross-ventilated kitchen zones",
        "Direct deed registration eliminating developer speculative risk"
      ],
      description: "Standing 10 storeys tall on Road 11 in Agrabad CDA, BDM Shopno Nebash delivers expansive 1,750 sq. ft. residences crafted for generational family comfort. Every square foot reflects engineered spatial utility with separate drawing and dining halls, ensuite master quarters, and panoramic balconies."
    },
    {
      id: "bdm-future-parcel",
      index: "03",
      name: "Agrabad Signature Parcel III",
      bengaliName: "আগ্রাবাদ সিগনেচার পার্সেল ৩",
      status: "Land Acquisition / Design Review",
      bengaliStatus: "জমি অধিগ্রহণ ও ডিজাইন পর্যালোচনা",
      statusBadge: "UPCOMING SIGNATURE DEVELOPMENT",
      category: "Future Land-Share Development",
      location: "Agrabad CDA Residential Area, Chattogram",
      bengaliLocation: "আগ্রাবাদ সিডিএ আ/এ, চট্টগ্রাম",
      coordinates: "22.3270° N, 91.8025° E",
      heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_wqjEfCjf-XBBZrO_Co8eYot222OXwwrc51lvGW2ONzMsnM0U7rSH3jcnFKoPVqqo97SXK4mbP0OT7Qne0ik338StoEk23DAC7c9LrLgu3SmLWeHgh685jYXC606Nt39A1QBwL-hd2QZjPjoIQIu7_mqRw9XsoFRAWs1JvP9ZhH2mfeKkNuOLflmJtvKkgxJc8QzUCecdG7Qaz_I7sw-Y-jfRKj7CXw7AoaZCd8ZSi87S6FgRVf1LKbDjezwSBudgTQ",
      twilightImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_wqjEfCjf-XBBZrO_Co8eYot222OXwwrc51lvGW2ONzMsnM0U7rSH3jcnFKoPVqqo97SXK4mbP0OT7Qne0ik338StoEk23DAC7c9LrLgu3SmLWeHgh685jYXC606Nt39A1QBwL-hd2QZjPjoIQIu7_mqRw9XsoFRAWs1JvP9ZhH2mfeKkNuOLflmJtvKkgxJc8QzUCecdG7Qaz_I7sw-Y-jfRKj7CXw7AoaZCd8ZSi87S6FgRVf1LKbDjezwSBudgTQ",
      floorPlanImage: "https://lh3.googleusercontent.com/aida/AEtjO1Wa1myew1Uqa54-Nghj9pLcVNBEQPJOAwOYhqh9bLupkwvv3skXSzSdJui0Wa0oES0jP39QpFILxQSOaYI7q5l0Cb--7AtguIdIqwisz_j-viOHEqGs12AeVWwVp4IBJKdKwceI69gICNfr9NTGFMp_FWFTtoGXZZVJOLOW7cyYSj56bmSLyhREDzazzB-w1DL_yycveIJdpdyzHe9Vx5B3tMFHHjStjVYDmW8_QT64bj422mlZnBGcB_s",
      planType: "Master Site Schematic (Under CDA Review)",
      unitSize: "To Be Announced",
      landSize: "Planned 6.00+ Katha Parcel",
      roadWidth: "Planned 40 Feet Road Frontage",
      floors: "G + 9 Planned",
      totalUnits: "Limited Fractional Allotments",
      landSharePerUnit: "Registered Sub-Kabala",
      configuration: "3 & 4 Bedroom Premium Configurations",
      bookingShare: "Priority Waiting List Open",
      features: [
        "Prime Agrabad CDA sector with unhindered sunlight exposure",
        "Direct joint-venture participation under BDM's 40% cost-saving model",
        "Pre-launch subscriber registrations now being received",
        "Full structural engineering vetting prior to financial drawdown"
      ],
      description: "In alignment with BDM Limited's commitment to strictly real, verifiable developments, this upcoming signature parcel is currently undergoing land due diligence and CDA architectural review. Interested patrons may pre-register for priority allocation."
    }
  ],

  homeSpaces: [
    {
      id: "living-room",
      tag: "LIGHT & AIR",
      bengaliTag: "আলো-বাতাস ও প্রশান্তি",
      title: "Sunlit Drawing & Living Hall",
      bengaliTitle: "আলো-বাতাস পূর্ণ ড্রয়িং ও লিভিং স্পেস",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      alt: "Spacious sunlit drawing hall with natural daylight and elegant warm finishes",
      desc: "Designed for authentic Bangladeshi family warmth and gracious hospitality. Generous corner windows invite abundant morning sunlight, creating an uplifting, serene sanctuary for daily family life and festive Eid gatherings.",
      bengaliDesc: "পরিবারের আন্তরিক সময় ও মেহমানদারির জন্য খোলামেলা স্পেস। বড় উইন্ডো ফ্রেমের মাধ্যমে পর্যাপ্ত আলো-বাতাস প্রবেশ করে, যা প্রতিটি দিনকে আনন্দময় ও সতেজ রাখে।"
    },
    {
      id: "balconies",
      tag: "COASTAL BREEZE",
      bengaliTag: "দক্ষিণা বাতাস ও ছায়াঘেরা বারান্দা",
      title: "Deep Sheltered Balconies",
      bengaliTitle: "প্রশস্ত বারান্দা ও সারাদিন প্রাকৃতিক বাতাস",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      alt: "Deep sheltered balcony with tranquil view and natural tropical cross-ventilation",
      desc: "Chattogram's pleasant coastal air flows naturally through three open aspects. Deep covered balconies give you a tranquil retreat for morning tea, evening breeze, or your own private green plant terrace.",
      bengaliDesc: "চট্টগ্রামের মনোরম দক্ষিণা বাতাস সহজে প্রবেশের জন্য তিন দিক খোলা রাখা হয়েছে। সকালের চা অথবা সন্ধ্যার অবসরে পরিবারের সাথে সময় কাটানোর সেরা জায়গা।"
    },
    {
      id: "dining-kitchen",
      tag: "FAMILY GATHERINGS",
      bengaliTag: "পারিবারিক ভোজন ও বন্ধন",
      title: "Generous Family Dining & Kitchen Flow",
      bengaliTitle: "সুপরিসর ডাইনিং ও পরিপাটি কিচেন জোন",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      alt: "Warm family dining space adjacent to kitchen for joyful shared meals",
      desc: "The true heart of the home. Planned centrally between drawing and kitchen zones, comfortably accommodating an 8-seater dining table with dedicated wash hand basin and cross-ventilated culinary utility.",
      bengaliDesc: "পরিবারের সবাইকে নিয়ে এক সাথে বসে খাবারের মধুর মুহূর্ত। বড় ৮ সিটের ডাইনিং টেবিল অনায়াসে রাখার স্থান, পাশে আলাদা হ্যান্ড-ওয়াশ এরিয়া এবং কিচেনের পর্যাপ্ত ভেন্টিলেশন।"
    },
    {
      id: "master-bedroom",
      tag: "QUIET SANCTUARY",
      bengaliTag: "শান্তিময় শয়নকক্ষ",
      title: "Peaceful Master Bedroom Suite",
      bengaliTitle: "শান্তিময় মাস্টার বেডরুম ও প্রাইভেট স্পেস",
      image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
      alt: "Peaceful master bedroom with floor-to-ceiling windows and ensuite bathroom",
      desc: "Your restful personal sanctuary after a long day in the city. Engineered with acoustic privacy away from reception areas, accompanied by an ensuite bath, walk-in wardrobe nook, and private fresh-air balcony.",
      bengaliDesc: "সারাদিনের ক্লান্তি শেষে পরম শান্তির ব্যক্তিগত ভুবন। ড্রয়িং স্পেস থেকে আলাদা প্রাইভেসিতে অবস্থিত, সাথে রয়েছে আধুনিক এটাচড বাথ এবং নিজস্ব মুক্ত বাতাসসমৃদ্ধ বারান্দা।"
    }
  ],

  howWeBuild: [
    {
      step: "01",
      title: "LAND",
      subtitle: "Strategic Acquisition & Clear Title",
      bengaliTitle: "নিষ্কলঙ্ক জমি নির্বাচন",
      desc: "We exclusively select rectangular, high-frontage parcels (30 to 40 ft road access) within planned CDA residential sectors. Every plot undergoes rigorous legal vetting (CS, SA, RS, BS porcha & non-encumbrance audit) before shareholder registration.",
      specs: "Direct Sub-Kabala Deed · 0% Legal Risk"
    },
    {
      step: "02",
      title: "ARCHITECTURE",
      subtitle: "Bioclimatic & Dual-Unit Rigor",
      bengaliTitle: "পরিমিত স্থাপত্য নকশা",
      desc: "Our architectural layouts reject claustrophobic multi-unit crowding. We restrict floorplates to strictly two homes per level, unlocking unobstructed dual-aspect natural lighting, cross-ventilation, and generous private balcony apertures.",
      specs: "Strictly 2 Units / Floor · 100% Cross Air"
    },
    {
      step: "03",
      title: "ENGINEERING",
      subtitle: "Seismic Zone 2 Structural Calculation",
      bengaliTitle: "ভূমিকম্প সহনশীল প্রকৌশল",
      desc: "Calculated in partnership with Mahi Engineering Services, our structures conform to BNBC codes with 72.5-grade high-tensile TMT rebar, high-cylinder-strength concrete batches, and subterranean pile foundations engineered for coastal silt strata.",
      specs: "72.5 Grade TMT Rebar · BNBC & CDA Compliant"
    },
    {
      step: "04",
      title: "CONSTRUCTION",
      subtitle: "Open-Book Procurement & On-Site Audits",
      bengaliTitle: "স্বচ্ছ নির্মাণ ও তত্ত্বাবধান",
      desc: "BDM operates on transparent monthly construction billing. Homeowners inspect batch test reports, certified cement testing, and piling logs in real time. You build at procurement cost with zero speculative markup.",
      specs: "40% Cost Savings · Live Owner Inspection"
    },
    {
      step: "05",
      title: "HANDOVER",
      subtitle: "Turnkey Possession & Society Governance",
      bengaliTitle: "চাবি হস্তান্তর ও স্থায়ী নিশ্চয়তা",
      desc: "Every residence is delivered with unencumbered deed completion, certified utility connections, generator backup, and established building society bylaws ensuring enduring capital appreciation and hassle-free living.",
      specs: "Permanent Building Warranty · Society Setup"
    }
  ],

  philosophy: [
    {
      number: "I",
      title: "ARCHITECTURAL HONESTY",
      desc: "No cosmetic facades concealing poor spatial logic. We design buildings whose external beauty is a direct consequence of interior comfort, natural ventilation, and structural dignity."
    },
    {
      number: "II",
      title: "FINANCIAL TRANSPARENCY",
      desc: "Traditional real estate developers inflate unit prices by 40% to 60% for speculative profit. BDM's direct land-share model provides deeded equity and open-book construction invoicing."
    },
    {
      number: "III",
      title: "STRUCTURAL LONGEVITY",
      desc: "Chattogram's coastal soil demands engineering uncompromisingness. From deep cast-in-situ piling to corrosion-resistant rebar, our residences are built for family generations."
    },
    {
      number: "IV",
      title: "COMMUNITY RESTRAINT",
      desc: "We build for discerning families who value quietude. By limiting developments to 15 to 18 total residences per building, we foster close-knit, dignified residential communities."
    }
  ],

  amenities: [
    { icon: "elevator", title: "High-Speed 8'x8' ARD Lift", desc: "Spacious passenger elevator equipped with Automatic Rescue Device (ARD) and emergency battery backup." },
    { icon: "directions_car", title: "Covered Ground Parking", desc: "Generous parking bays with smooth vehicular turning radiuses, drainage curbs, and security post." },
    { icon: "park", title: "Landscaped Rooftop (ছাদ বাগান)", desc: "Communal rooftop terrace with shaded pergolas, lush planters, and panoramic Chattogram skyline views." },
    { icon: "mosque", title: "Prayer Hall & Community Room", desc: "Peaceful dedicated prayer enclave and versatile community room for private society meetings." },
    { icon: "water_drop", title: "Dual Concrete Reservoirs", desc: "Massive underground water reservoir paired with overhead rooftop tanks and dual commercial booster pumps." },
    { icon: "security", title: "24/7 CCTV & Generator Backup", desc: "High-definition security perimeter, intercom systems, and automatic standby generator for uninterrupted power." }
  ],

  journal: [
    {
      id: "land-share-model",
      date: "OCTOBER 2026",
      category: "FINANCIAL ARCHITECTURE",
      title: "The Economics of Land-Share: How Direct Sub-Registry Saves 40% Capital",
      readTime: "4 MIN READ",
      excerpt: "Why the conventional developer margin model is giving way to transparent joint-venture land ownership in Chittagong's prime residential districts."
    },
    {
      id: "coastal-engineering",
      date: "SEPTEMBER 2026",
      category: "STRUCTURAL RIGOR",
      title: "Seismic Resilience in Alluvial Soil: Deep Piling Standards in Agrabad CDA",
      readTime: "6 MIN READ",
      excerpt: "An engineering briefing on soil load-bearing capacities, BNBC Seismic Zone 2 requirements, and high-tensile 72.5 grade TMT rebar."
    },
    {
      id: "spatial-privacy",
      date: "AUGUST 2026",
      category: "SPATIAL THEORY",
      title: "Light & Air: Why Dual-Unit Floorplates Outperform High-Density Towers",
      readTime: "3 MIN READ",
      excerpt: "Exploring the biophilic advantages of strictly limiting building floorplates to two residences per floor in tropical urban settings."
    }
  ]
};

// Freeze data to guarantee immutability
Object.freeze(BDM_DATA);
