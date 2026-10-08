/**
 * BEC (BROTHER’S ENGINEERING & CONSTRUCTION) — ARCHITECTURAL DATA ARCHITECTURE
 * Clean, typed CMS-ready registry for projects, blueprints, specifications,
 * construction milestones, journal essays, and office locations.
 */

const BDM_DATA = {
  brand: {
    name: "Brother’s Engineering & Construction",
    shortName: "BEC",
    bengaliName: "ব্রাদার্স ইঞ্জিনিয়ারিং অ্যান্ড কনস্ট্রাকশন",
    tagline: "Building Places. Creating Legacies.",
    bengaliTagline: "স্থায়ী ঐতিহ্য ও উন্নত জীবনযাত্রার প্রতিশ্রুতি",
    headline: "We Build More Than Homes. We Build a Sense of Belonging.",
    bengaliHeadline: "আমরা শুধু ঘর বানাই না, গড়ে তুলি আপন ঠিকানা।",
    subline: "Thoughtfully planned residences. Carefully selected land. Engineering built for generations.",
    bengaliSubline: "পরিমিত পরিকল্পনার আবাসন। সতর্কতার সাথে নির্বাচিত জমি। প্রজন্ম ধরে টিকে থাকার প্রকৌশল।",
    mission: "Brother’s Engineering & Construction (BEC) creates residential spaces where architecture, ownership and everyday family life come together with purpose.",
    industry: "Architectural Real Estate Development",
    territory: "Agrabad CDA Residential Area, Chattogram, Bangladesh",
    coordinates: "22.3275° N, 91.8020° E",
    logoUrl: "assets/logo-white.png",
    heroImage: "assets/projects/shopnaloy-hero.jpg"
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
      name: "BEC Shopnaloy",
      bengaliName: "বিইসি স্বপ্নালয়",
      status: "Active Construction",
      bengaliStatus: "নির্মাণাধীন প্রকল্প",
      statusBadge: "ACTIVE PILING & SUBSTRUCTURE",
      category: "Bespoke Residential Residences",
      location: "Plot 727 · Road 14 · Agrabad CDA · Chattogram",
      bengaliLocation: "প্লট ৭২৭ · রোড ১৪ · আগ্রাবাদ সিডিএ · চট্টগ্রাম",
      heroImage: "assets/projects/shopnaloy-hero.jpg",
      twilightImage: "assets/projects/shopnaloy-twilight.jpg",
      floorPlanImage: "assets/projects/shopnaloy-plan.jpg",
      planType: "3D Isometric Unit Cutaway",
      unitSize: "1,375 Sq. Ft.",
      landSize: "3.75 Katha",
      roadWidth: "40 Feet Frontage",
      floors: "G + 8 Storeys (9 Levels)",
      totalUnits: "Only 15 Residences (2 Units / Floor)",
      landSharePerUnit: "164 Sq. Ft. Deeded Land Share",
      configuration: "3 Bed · 3 Bath · 3 Balconies",
      bookingShare: "Booking & Land Registry Share",
      features: [
        "40-foot-wide road access in peaceful Road 14 sector",
        "Direct registered Sub-Kabala land deed before construction begins",
        "Strictly two residences per floor for maximum privacy and ventilation",
        "8'x8' high-speed passenger lift with Automatic Rescue Device (ARD)",
        "Covered ground floor parking bays and dedicated standby generator",
        "Landscaped communal rooftop terrace garden with seating pergola"
      ],
      description: "A residential development conceived around space, privacy and a sense of permanence. Set along a 40-foot-wide road, Shopnaloy brings together only two residences per floor, creating a more private residential environment with generous natural light, airflow and outdoor space."
    },
    {
      id: "bdm-shopno-nebash",
      index: "02",
      name: "BEC Shopno Nebash",
      bengaliName: "বিইসি স্বপ্ন নিবাস",
      status: "Ongoing Development",
      bengaliStatus: "চলমান আবাসিক প্রকল্প",
      statusBadge: "CIVIL FRAMEWORKS & ARCHITECTURE",
      category: "Executive Family Residences",
      location: "Plot 445 · Road 11 · Agrabad CDA · Chattogram",
      bengaliLocation: "প্লট ৪৪৫ · রোড ১১ · আগ্রাবাদ সিডিএ · চট্টগ্রাম",
      heroImage: "assets/projects/shopnonebash-hero.jpg",
      twilightImage: "assets/projects/shopnonebash-twilight.jpg",
      floorPlanImage: "assets/projects/shopnonebash-plan.jpg",
      planType: "Architectural CAD Blueprint",
      unitSize: "1,750 Sq. Ft.",
      landSize: "5.00 Katha Rectangular Parcel",
      roadWidth: "30 Feet Frontage",
      floors: "G + 9 Storeys (10 Levels)",
      totalUnits: "18 Residences (2 Units / Floor)",
      landSharePerUnit: "Proportionate Deeded Land Share",
      configuration: "4 Bed · 4 Bath · 3 Balconies",
      bookingShare: "Consult BEC for Allocation",
      features: [
        "5.00 Katha prime rectangular plot with optimal North-South orientation",
        "Strictly 2 expansive executive apartments per floor for maximum privacy",
        "Engineered in consultation with Mahi Engineering Services",
        "Dual fire egress staircases in strict adherence to BNBC & CDA safety codes",
        "Dedicated utility balconies and cross-ventilated kitchen zones",
        "Direct deed registration eliminating developer speculative risk"
      ],
      description: "Conceived around generous family living on Road 11 in Agrabad CDA. Featuring two residences per floor, expansive four-bedroom layouts, and direct deeded land co-ownership."
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
      location: "Agrabad CDA Residential Area · Chattogram",
      bengaliLocation: "আগ্রাবাদ সিডিএ আ/এ · চট্টগ্রাম",
      heroImage: "assets/projects/parcel-site.jpg",
      twilightImage: "assets/projects/parcel-site.jpg",
      floorPlanImage: "assets/projects/shopnonebash-plan.jpg",
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
        "Direct joint-venture participation under BEC's transparent land-share model",
        "Pre-launch subscriber registrations now being received",
        "Full structural engineering vetting prior to financial drawdown"
      ],
      description: "In alignment with Brother’s Engineering & Construction's commitment to strictly real, verifiable developments, this upcoming signature parcel is currently undergoing land due diligence and CDA architectural review. Interested patrons may pre-register for priority allocation."
    }
  ],

  homeSpaces: [
    {
      id: "light",
      tag: "LIGHT",
      bengaliTag: "প্রাকৃতিক আলো",
      title: "Let the Day In.",
      bengaliTitle: "দিনের আলো ঘরে প্রবেশ করতে দিন",
      image: "assets/living/living.jpg",
      alt: "Generous openings and natural daylight deep in luxury living spaces",
      desc: "Generous openings and thoughtful orientation bring natural daylight deep into the living spaces, creating interiors that feel open, calm and alive.",
      bengaliDesc: "খোলামেলা জানালা ও সঠিক দিকবিন্যাস লিভিং স্পেসের গভীরে প্রাকৃতিক আলো এনে দেয়, যা ঘরকে করে তোলে শান্ত, উজ্জ্বল ও প্রাণবন্ত।"
    },
    {
      id: "air",
      tag: "AIR",
      bengaliTag: "মুক্ত বাতাস",
      title: "Let the City Breathe Out.",
      bengaliTitle: "চট্টগ্রামের সতেজ উপকূলীয় বাতাস",
      image: "assets/living/balcony.jpg",
      alt: "Deep sheltered balcony with tranquil view and natural tropical coastal airflow",
      desc: "Thoughtful planning and open aspects encourage natural airflow, bringing Chattogram's coastal breeze into the home.",
      bengaliDesc: "পরিকল্পিত বিন্যাস ও উন্মুক্ত বারান্দা ভবনে প্রাকৃতিক বাতাস চলাচলে সহায়তা করে এবং ঘরের ভেতর এনে দেয় প্রশান্তির ছোঁয়া।"
    },
    {
      id: "privacy",
      tag: "PRIVACY",
      bengaliTag: "ব্যক্তিগত গোপনীয়তা",
      title: "Space to Live Your Own Way.",
      bengaliTitle: "নিরাপদ ও নিজস্ব ব্যক্তিগত পরিসর",
      image: "assets/living/master.jpg",
      alt: "Peaceful personal bedroom sanctuary designed for quiet comfort",
      desc: "Fewer residences per floor create a quieter environment and a stronger sense of personal space.",
      bengaliDesc: "প্রতি ফ্লোরে মাত্র দুটি ফ্ল্যাট নিশ্চিত করে নিরিবিলি পরিবেশ এবং পরিবারের সদস্যদের জন্য একান্ত নিজস্ব স্বাচ্ছন্দ্য।"
    },
    {
      id: "togetherness",
      tag: "TOGETHERNESS",
      bengaliTag: "পারিবারিক বন্ধন",
      title: "The Heart of the Home.",
      bengaliTitle: "পারিবারিক আনন্দ ও অন্তরঙ্গ সময়",
      image: "assets/living/dining.jpg",
      alt: "Generous family dining hall designed for shared meals and celebrations",
      desc: "Living and dining spaces are designed around the moments that matter — family dinners, celebrations, conversations and ordinary evenings that become treasured memories.",
      bengaliDesc: "লিভিং ও ডাইনিং স্পেস সাজানো হয়েছে পরিবারের সুন্দর মুহূর্তগুলোকে ঘিরে—একসাথে রাতের খাবার, ঘরোয়া আলাপ আর অগণিত স্মৃতি।"
    }
  ],

  howWeBuild: [
    {
      step: "01",
      title: "LAND",
      subtitle: "Start with the Right Foundation.",
      bengaliTitle: "সঠিক ভিত্তি থেকে শুরু",
      desc: "We carefully evaluate location, road access, land configuration and legal documentation before development begins.",
      specs: "Rigorous Legal Vetting · Direct Deed Access"
    },
    {
      step: "02",
      title: "ARCHITECTURE",
      subtitle: "Plan for People, Not Just Floor Area.",
      bengaliTitle: "মানুষের স্বাচ্ছন্দ্যের জন্য নকশা",
      desc: "Our layouts prioritize natural light, ventilation, privacy and practical family living.",
      specs: "Strictly 2 Units / Floor · 100% Daylight"
    },
    {
      step: "03",
      title: "ENGINEERING",
      subtitle: "Design for the Years Ahead.",
      bengaliTitle: "আগামীর স্থায়িত্বের নিশ্চয়তা",
      desc: "Structural systems, materials and construction methods are selected and supervised with long-term durability in mind.",
      specs: "BNBC & CDA Compliant · Seismic Engineering"
    },
    {
      step: "04",
      title: "CONSTRUCTION",
      subtitle: "Build with Discipline.",
      bengaliTitle: "শৃঙ্খলার সাথে সুদৃঢ় নির্মাণ",
      desc: "Construction progresses through structured stages, documentation and on-site supervision — keeping the process visible and accountable.",
      specs: "On-Site Supervision · Structured Milestones"
    },
    {
      step: "05",
      title: "HANDOVER",
      subtitle: "From Our Hands to Your Home.",
      bengaliTitle: "আমাদের হাত থেকে আপনার ঠিকানায়",
      desc: "The final stage is not simply handing over a key. It is delivering a place prepared for the life that comes next.",
      specs: "Permanent Building Quality · Society Setup"
    }
  ],

  philosophy: [
    {
      number: "I",
      tag: "CAREFULLY SELECTED LAND",
      bengaliTag: "সতর্ক জমি নির্বাচন",
      title: "Places of Long-Term Value",
      bengaliTitle: "স্থায়ী মূল্যের সঠিক স্থান",
      desc: "Places chosen with long-term residential value in mind. We look beyond the plot itself — considering accessibility, surroundings, and everyday convenience.",
      bengaliDesc: "শুধুমাত্র একটি প্লট নয়—আমরা যাচাই করি যোগাযোগ ব্যবস্থা, পারিপার্শ্বিক পরিবেশ এবং পরিবারের দৈনন্দিন স্বাচ্ছন্দ্য।",
      guarantee: "Planned CDA Sectors · 30–40 Ft Road Access"
    },
    {
      number: "II",
      tag: "THOUGHTFUL ARCHITECTURE",
      bengaliTag: "পরিমিত স্থাপত্য নকশা",
      title: "Shaped Around Real Life",
      bengaliTitle: "বাস্তব জীবনের উপযোগী ফ্লোরপ্ল্যান",
      desc: "Spaces designed around light, air, privacy and family life. Clean proportions and considered layouts that age gracefully without chasing fleeting trends.",
      bengaliDesc: "আলো, বাতাস ও পারিবারিক প্রাইভেসির চমৎকার সমন্বয়। সময়ের সাথে যা তার সৌন্দর্য ও কার্যকারিতা হারায় না।",
      guarantee: "Strictly 2 Units / Floor · Dual-Aspect Daylight"
    },
    {
      number: "III",
      tag: "ENGINEERING DISCIPLINE",
      bengaliTag: "কঠোর প্রকৌশল শৃঙ্খলা",
      title: "Built for Generations",
      bengaliTitle: "প্রজন্মের পর প্রজন্ম টিকে থাকার নিশ্চয়তা",
      desc: "Structural and construction decisions made with long-term performance in mind. Supervised to withstand coastal conditions and regional seismic loads.",
      bengaliDesc: "উপকূলীয় পরিবেশ ও ভূমিকম্প সহনশীলতা মাথায় রেখে দক্ষ প্রকৌশলীদের সরাসরি তত্ত্বাবধানে প্রতিটি স্তরের নির্মাণ।",
      guarantee: "BNBC Seismic Codes · High-Yield Tested Rebar"
    },
    {
      number: "IV",
      tag: "TRANSPARENT PROCESS",
      bengaliTag: "স্বচ্ছ প্রক্রিয়া ও সরাসরি মালিকানা",
      title: "Direct Connection to Land",
      bengaliTitle: "জমির সাথে সরাসরি স্থায়ী সম্পর্ক",
      desc: "Clear information about land, construction and development. Direct registered land ownership through Sub-Kabala before construction begins.",
      bengaliDesc: "নির্মাণ শুরু হওয়ার পূর্বেই সাব-কবলা রেজিস্ট্রি। কোনো লুকানো চার্জ ছাড়া সম্পূর্ণ স্বচ্ছ ও নির্ভরযোগ্য উন্নয়ন পদ্ধতি।",
      guarantee: "Direct Sub-Kabala Deed · Zero Developer Margin"
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
const BEC_DATA = BDM_DATA;
