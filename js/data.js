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
      image: "assets/living/living.jpg",
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
      image: "assets/living/balcony.jpg",
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
      image: "assets/living/dining.jpg",
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
      image: "assets/living/master.jpg",
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
      tag: "SPATIAL PURITY",
      bengaliTag: "পরিমিত স্থাপত্য",
      title: "Architectural Honesty",
      bengaliTitle: "পরিমিত স্থাপত্য ও সঠিক পরিকল্পনা",
      desc: "No cosmetic facades concealing poor spatial logic. We design homes whose aesthetic dignity is a direct outcome of abundant interior natural light, dual-aspect cross-ventilation, and uncompromised family privacy.",
      bengaliDesc: "বাহ্যিক চটকদার নকশার আড়ালে ত্রুটিপূর্ণ ফ্লোরপ্ল্যান নয়। প্রতিটি অ্যাপার্টমেন্টের সৌন্দর্য তার অভ্যন্তরের পর্যাপ্ত আলো-বাতাস এবং পরিবারের নিবিড় স্বাচ্ছন্দ্যের প্রতীক।",
      guarantee: "Strictly 2 Units / Floor · 100% Daylight"
    },
    {
      number: "II",
      tag: "CAPITAL PROTECTION",
      bengaliTag: "সরাসরি মালিকানা",
      title: "Direct Equity Ownership",
      bengaliTitle: "প্রকৃত মালিকানা ও ৪০% সাশ্রয়",
      desc: "Traditional developers inflate apartment prices by 40% to 60% for speculative profits and marketing overhead. BDM delivers registered Sub-Kabala land deeds upfront, allowing you to build at audited contractor procurement cost.",
      bengaliDesc: "প্রচলিত ডেভেলপারদের অতিরিক্ত মুনাফা ও বিপণন খরচের বোঝা থেকে মুক্তি। নির্মাণকাজ শুরুর পূর্বেই সরাসরি ভূমির সাব-কবলা রেজিস্ট্রি এবং প্রকৃত নির্মাণ খরচে কাজ।",
      guarantee: "Direct Sub-Kabala Deed · 40% Cost Savings"
    },
    {
      number: "III",
      tag: "ENGINEERING DISCIPLINE",
      bengaliTag: "কাঠামোগত স্থায়িত্ব",
      title: "Generational Resilience",
      bengaliTitle: "ভূমিকম্প সহনশীল উপকূলীয় প্রকৌশল",
      desc: "Chattogram's coastal soil demands engineering uncompromisingness. Supervised in partnership with Mahi Engineering Services, our structures feature deep subterranean piling and high-tensile 72.5 grade TMT rebar.",
      bengaliDesc: "চট্টগ্রামের উপকূলীয় মাটির জন্য প্রয়োজন নিখুঁত প্রকৌশল। মাহি ইঞ্জিনিয়ারিং সার্ভিসেসের তত্ত্বাবধানে গভীর পাইলিং এবং ৭২.৫ গ্রেডের প্রিমিয়াম রড ব্যবহার।",
      guarantee: "BNBC Seismic Zone 2 · 72.5 Grade TMT Rebar"
    },
    {
      number: "IV",
      tag: "CIVIC DIGNITY",
      bengaliTag: "মার্জিত সমাজ",
      title: "Community Tranquility",
      bengaliTitle: "মার্জিত ও শান্তিপূর্ণ পারিবারিক পরিবেশ",
      desc: "We exclusively develop for families who cherish peace and permanence. By capping our developments at 15 to 18 total residences per building, we foster a safe, close-knit, dignified residential community.",
      bengaliDesc: "আমরা তৈরি করি শান্তিময় পারিবারিক আবাসন। বহুতল ভিড় এড়িয়ে প্রতিটি ভবনে মাত্র ১৫ থেকে ১৮টি পরিবার নিয়ে একটি নিরাপদ, রুচিশীল ও মার্জিত সমাজ।",
      guarantee: "Max 15–18 Exclusive Resident Families"
    }
  ],

  amenities: [
    {
      id: "lift",
      icon: "elevator",
      tag: "VERTICAL TRANSPORT",
      bengaliTag: "আধুনিক লিফট",
      title: "High-Speed 8'x8' ARD Lift",
      bengaliTitle: "উন্নত ও নিরাপদ ৮'×৮' লিফট",
      image: "assets/amenities/lift.jpg",
      alt: "Modern luxury passenger elevator and marble lobby",
      desc: "Spacious passenger elevator equipped with Automatic Rescue Device (ARD) and emergency battery backup to prevent entrapment during grid interruptions.",
      bengaliDesc: "স্বয়ংক্রিয় রেসকিউ ডিভাইস (ARD) এবং সার্বক্ষণিক ব্যাটারি ব্যাকআপযুক্ত সুপরিসর প্যাসেঞ্জার লিফট।"
    },
    {
      id: "parking",
      icon: "directions_car",
      tag: "GROUND REALM",
      bengaliTag: "গ্রাউন্ড পার্কিং",
      title: "Covered Ground Parking",
      bengaliTitle: "নিরাপদ গ্রাউন্ড পার্কিং বে",
      image: "assets/amenities/parking.jpg",
      alt: "Covered well-lit residential parking garage bays",
      desc: "Generous individual parking bays with smooth vehicular turning radiuses, non-skid surface flooring, drainage curbs, and 24/7 security guard post.",
      bengaliDesc: "প্রতিটি গাড়ির জন্য পর্যাপ্ত জায়গা, সহজে গাড়ি ঘোরানোর প্রশস্ত স্পেস এবং সার্বক্ষণিক সিকিউরিটি পোস্ট।"
    },
    {
      id: "rooftop",
      icon: "park",
      tag: "COMMUNAL SKYLINE",
      bengaliTag: "মনোরম ছাদ বাগান",
      title: "Landscaped Rooftop (ছাদ বাগান)",
      bengaliTitle: "সবুজ ছাদ বাগান ও ওয়াকওয়ে",
      image: "assets/amenities/rooftop.jpg",
      alt: "Landscaped rooftop terrace with pergolas and seating area",
      desc: "Communal rooftop terrace sanctuary featuring shaded pergolas, lush tropical planters, walking pavers, and unhindered Chattogram skyline vistas.",
      bengaliDesc: "বসার জন্য শেডযুক্ত পারগোলা, বাহারি গাছের টব ও শিশুদের নিরাপদে ঘুরে বেড়ানোর জন্য উন্মুক্ত মনোরম ছাদ।"
    },
    {
      id: "prayer-hall",
      icon: "mosque",
      tag: "SPIRITUAL & COMMUNITY",
      bengaliTag: "নামাজের স্থান",
      title: "Prayer Enclave & Community Space",
      bengaliTitle: "শান্তিময় নামাজের স্থান ও কমিউনিটি স্পেস",
      image: "assets/amenities/prayer.jpg",
      alt: "Serene prayer enclave and quiet community meeting space",
      desc: "A peaceful, air-conditioned prayer enclave on the ground level, paired with a versatile multi-purpose community room for building society assemblies.",
      bengaliDesc: "নিচতলায় শান্তিময় নামাজের জায়গা এবং ফ্ল্যাট মালিকদের সাধারণ সভা ও ঘরোয়া আয়োজনের জন্য কমিউনিটি রুম।"
    },
    {
      id: "reservoirs",
      icon: "water_drop",
      tag: "WATER INFRASTRUCTURE",
      bengaliTag: "পানির নিশ্চয়তা",
      title: "Dual Concrete Reservoirs",
      bengaliTitle: "দ্বিগুণ ধারণক্ষমতার ওয়াটার রিজার্ভার",
      image: "assets/amenities/reservoirs.jpg",
      alt: "Engineered reinforced concrete water reservoirs and commercial pump system",
      desc: "Massive underground water reservoir combined with reinforced overhead rooftop tanks and dual commercial booster pumps ensuring 24/7 unhindered water pressure.",
      bengaliDesc: "বিশাল আন্ডারগ্রাউন্ড ও রুফটপ ওভারহেড ওয়াটার ট্যাংক এবং উচ্চমানের ডাবল পাম্প, যা দেবে ২৪ ঘণ্টা পানির নিশ্চয়তা।"
    },
    {
      id: "security-power",
      icon: "security",
      tag: "SAFETY & CONTINUITY",
      bengaliTag: "সার্বক্ষণিক নিরাপত্তা",
      title: "24/7 CCTV & Standby Generator",
      bengaliTitle: "২৪ ঘণ্টা সিসিটিভি ও পাওয়ার ব্যাকআপ",
      image: "assets/amenities/security.jpg",
      alt: "High-definition security surveillance camera and soundproof backup generator",
      desc: "HD security surveillance covering boundary perimeter, entry gate, lift lobbies, and parking bays, paired with an automatic soundproof standby generator.",
      bengaliDesc: "প্রধান গেট, লিফট ও পার্কিং জোনে ফুল এইচডি সিসিটিভি ক্যামেরা এবং লোডশেডিংয়ে স্বয়ংক্রিয় সাউন্ডপ্রুফ জেনারেটর।"
    }
  ]
};

// Freeze data to guarantee immutability
Object.freeze(BDM_DATA);
