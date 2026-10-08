/**
 * BEC (BROTHER’S ENGINEERING & CONSTRUCTION) — CORE DATA ARCHITECTURE
 * Structured data registry for services, design-to-build workflows,
 * projects, process milestones, interiors, trust pillars, and corporate offices.
 */

const BDM_DATA = {
  brand: {
    name: "Brother’s Engineering & Construction",
    shortName: "BEC",
    bengaliName: "ব্রাদার্স ইঞ্জিনিয়ারিং অ্যান্ড কনস্ট্রাকশন",
    tagline: "Engineered to Build. Designed to Last.",
    bengaliTagline: "স্থায়িত্বের জন্য প্রকৌশল। দীর্ঘায়ুর জন্য নকশা।",
    subline: "From Concept to Completion. Your Vision. Our Engineering. One Complete Build.",
    bengaliSubline: "পরিকল্পনা থেকে সমাপ্তি। আপনার স্বপ্ন, আমাদের প্রকৌশল।",
    centralIdea: "From an Idea to a Finished Space.",
    bengaliCentralIdea: "একটি ধারণা থেকে একটি পরিপূর্ণ স্থাপনা।",
    headline: "We Design. We Build. We Deliver.",
    bengaliHeadline: "আমরা নকশা করি। আমরা নির্মাণ করি। আমরা পৌঁছে দেই।",
    experienceHeadline: "A new name in the market. 15+ years of practical industry experience behind the people who lead it.",
    bengaliExperienceHeadline: "বাজারে নতুন নাম, কিন্তু নেতৃত্বের পেছনে রয়েছে ১৫+ বছরের বাস্তব নির্মাণ অভিজ্ঞতা।",
    experienceYears: "15+",
    experienceStatement: "15+ years of industry experience within our leadership and project expertise.",
    bengaliExperienceStatement: "আমাদের নেতৃত্ব এবং প্রকল্প অভিজ্ঞতায় রয়েছে ১৫+ বছরের শিল্প জ্ঞান।",
    industry: "Full-Service Engineering, Construction & Interior Firm",
    territory: "Chattogram, Bangladesh",
    logoUrl: "assets/logo-white.png",
    heroImage: "assets/projects/shopnaloy-hero.jpg"
  },

  hotlines: [
    { label: "Primary & WhatsApp", number: "+880 1749-349299", raw: "+8801749349299", whatsapp: true },
    { label: "Engineering Desk", number: "+880 1828-178962", raw: "+8801828178962", whatsapp: false },
    { label: "Project Consultation", number: "+880 1815-366393", raw: "+8801815366393", whatsapp: false }
  ],

  offices: [
    {
      id: "nayabazar",
      title: "Corporate Office 01 (Nayabazar / Halishahar)",
      bengaliTitle: "প্রধান কার্যালয় ০১ (নয়াবাজার / হালিশহর)",
      address: "2574, Haji Achi Mia Bari (2nd Floor), Port Connecting Road, Nayabazar Bishwaroad, Halishahar, Chattogram",
      bengaliAddress: "২৫৭৪, হাজী আছি মিঞা বাড়ি (২য় তলা), পোর্ট কানেক্টিং রোড, নয়াবাজার বিশ্বরোড, হালিশহর, চট্টগ্রাম",
      coords: "22.3385° N, 91.7915° E",
      category: "Headquarters & Project Planning"
    },
    {
      id: "eidgah",
      title: "Corporate Office 02 (Eidgah / Pahartali)",
      bengaliTitle: "কার্যালয় ০২ (ঈদগাহ / পাহাড়তলী)",
      address: "2813 / C, Al Helal Bhaban, Eidgah Kacha Rasta Matha, Halishahar Road, Pahartali, Chattogram",
      bengaliAddress: "২৮১৩ / সি, আল হেলাল ভবন, ঈদগাহ কাঁচা রাস্তা মাথা, হালিশহর রোড, পাহাড়তলী, চট্টগ্রাম",
      coords: "22.3491° N, 91.8029° E",
      category: "Engineering Supervision & Client Relations"
    }
  ],

  services: [
    {
      number: "01",
      title: "BUILDING CONSTRUCTION",
      bengaliTitle: "ভবন নির্মাণ",
      icon: "apartment",
      desc: "From foundations to finishing, we manage construction with attention to structural quality, workmanship, materials and execution.",
      bengaliDesc: "ভিত্তি থেকে ফিনিশিং—কাঠামোগত গুণমান, কারিগরি দক্ষতা, মানসম্পন্ন উপাদান ও সময়ানুবর্তিতার সাথে আমরা প্রতিটি নির্মাণ পরিচালনা করি।",
      scope: "Residential buildings, commercial spaces and purpose-built projects.",
      bengaliScope: "আবাসিক ভবন, বাণিজ্যিক স্থাপনা এবং বিশেষায়িত নির্মাণ প্রকল্প।"
    },
    {
      number: "02",
      title: "ARCHITECTURAL DESIGN",
      bengaliTitle: "স্থাপত্য নকশা",
      icon: "architecture",
      desc: "Good construction starts with good planning. We develop practical architectural concepts that balance aesthetics, functionality, site conditions, budget and the way people will actually use the space.",
      bengaliDesc: "পরিকল্পিত নির্মাণের মূল ভিত্তি সঠিক স্থাপত্য নকশা। সৌন্দর্য, কার্যকারিতা, সাইটের অবস্থা ও বাজেটের নিখুঁত সমন্বয়ে আমরা বাস্তবসম্মত ডিজাইন তৈরি করি।",
      scope: "Spatial planning, exterior facade design, 3D visualizations and municipal approvals.",
      bengaliScope: "স্পেস প্ল্যানিং, বাহ্যিক ফাসাদ ডিজাইন, থ্রিডি ভিজ্যুয়ালাইজেশন ও অনুমোদন।"
    },
    {
      number: "03",
      title: "STRUCTURAL ENGINEERING",
      bengaliTitle: "কাঠামোগত প্রকৌশল",
      icon: "engineering",
      desc: "Behind every beautiful building is an engineering system designed to perform. Our approach considers structural integrity, durability, safety and appropriate engineering solutions for each project.",
      bengaliDesc: "প্রতিটি নান্দনিক ভবনের পেছনে থাকে দক্ষ প্রকৌশল। আমরা ভবনের নিরাপত্তা, দীর্ঘস্থায়িত্ব এবং সিসমিক সহনশীলতাকে সর্বোচ্চ প্রাধান্য দিই।",
      scope: "BNBC 2020 compliance, seismic zone detailing, soil mechanics & rebar load calculations.",
      bengaliScope: "বিএনবিসি ২০২০ মানদণ্ড, সিসমিক জোন বিশ্লেষণ ও লোড ক্যালকুলেশন।"
    },
    {
      number: "04",
      title: "INTERIOR DESIGN & EXECUTION",
      bengaliTitle: "ইন্টেরিয়র ডিজাইন ও বাস্তবায়ন",
      icon: "chair",
      desc: "A building is not complete when the walls are finished. We create and execute interiors that bring together layout, lighting, materials, furniture, finishes and functionality — from residential interiors to commercial environments.",
      bengaliDesc: "দেয়াল তোলা শেষ হলেই ভবনের কাজ শেষ হয় না। লেআউট, লাইটিং, টেক্সচার ও ফার্নিচারের সঠিক মেলবন্ধনে আমরা প্রতিটি অভ্যন্তরীণ পরিসরকে প্রাণবন্ত করে তুলি।",
      scope: "Home interiors, corporate office spaces, retail showrooms & custom cabinetry.",
      bengaliScope: "আবাসিক ইন্টেরিয়র, করপোরেট অফিস, শোরুম ও কাস্টম ক্যাবিনেট্রি।"
    },
    {
      number: "05",
      title: "RENOVATION & REMODELING",
      bengaliTitle: "সংস্কার ও আধুনিকায়ন",
      icon: "construction",
      desc: "Existing space can become something completely different. We help clients renovate, remodel and modernize existing properties while respecting the structure, budget and purpose of the space.",
      bengaliDesc: "পুরোনো যেকোনো স্থানকে নতুন রূপ দেওয়া সম্ভব। ভবনের মূল কাঠামোর নিরাপত্তা বজায় রেখে বাজেট ও আধুনিক চাহিদার আলোকে আমরা সংস্কার সম্পন্ন করি।",
      scope: "Structural strengthening, facade overhauls, floorplan reconfiguration & modern MEP updates.",
      bengaliScope: "কাঠামো মজবুতকরণ, ফাসাদ আধুনিকায়ন ও ফ্লোরপ্ল্যান রূপান্তর।"
    },
    {
      number: "06",
      title: "TURNKEY PROJECTS",
      bengaliTitle: "টার্নকি নির্মাণ প্রকল্প",
      icon: "key",
      desc: "One team from concept to completion. From design coordination and material planning to construction, finishing and interior execution, BEC can manage the complete project journey.",
      bengaliDesc: "পরিকল্পনা থেকে চাবি হস্তান্তর—একটি একক দায়বদ্ধ দল। ড্রয়িং, মালামাল সংগ্রহ, সিভিল কনস্ট্রাকশন ও ইন্টেরিয়র সবকিছু এক ছাতার নিচে।",
      scope: "Single point of accountability, fixed budget controls & timely handover.",
      bengaliScope: "একটি একক জবাবদিহিতা, নিয়ন্ত্রিত বাজেট ও সময়মতো চাবি হস্তান্তর।"
    },
    {
      number: "07",
      title: "PROJECT MANAGEMENT",
      bengaliTitle: "প্রকল্প ব্যবস্থাপনা ও তদারকি",
      icon: "assignment_turned_in",
      desc: "Construction becomes easier when someone takes responsibility for keeping everything moving. We coordinate people, materials, schedules, contractors and site activities to keep projects organized and progressing.",
      bengaliDesc: "নির্মাণকাজ সহজ হয় যখন কেউ তা সঠিক নিয়মে এগিয়ে নেওয়ার সম্পূর্ণ দায়িত্ব নেয়। দক্ষ প্রকৌশলী দ্বারা সাইটের প্রতিটি ধাপ সার্বক্ষণিক তদারকি করা হয়।",
      scope: "Site supervision, procurement tracking, contractor coordination & quality inspection.",
      bengaliScope: "সাইট সুপারভিশন, প্রকিউরমেন্ট ট্র্যাকিং ও গুণগত মান যাচাই।"
    },
    {
      number: "08",
      title: "REAL ESTATE DEVELOPMENT",
      bengaliTitle: "রিয়েল এস্টেট ডেভেলপমেন্ট",
      icon: "domain",
      desc: "We also develop selected properties with a focus on practical planning, engineering quality, thoughtful architecture and long-term value.",
      bengaliDesc: "আমরা চট্টগ্রামের বাছাইকৃত স্থানে আধুনিক আবাসিক প্রকল্প গড়ে তুলি—যেখানে জমির সরাসরি অধিকার, উন্নত স্থাপত্য ও স্থায়ী মূল্য নিশ্চিত করা হয়।",
      scope: "Carefully vetted land parcels, transparent deed structures & low-density living.",
      bengaliScope: "বাছাইকৃত জমি, স্বচ্ছ সাব-কবলা রেজিস্ট্রি ও নিরিবিলি পারিবারিক পরিবেশ।"
    }
  ],

  designToBuildSteps: [
    { step: "01", name: "IDEA", desc: "Your requirement, sketch or vision." },
    { step: "02", name: "DESIGN", desc: "Architectural concepts & functional layout." },
    { step: "03", name: "ENGINEERING", desc: "Structural, MEP & foundation analysis." },
    { step: "04", name: "APPROVAL", desc: "Statutory & municipal regulatory clearances." },
    { step: "05", name: "CONSTRUCTION", desc: "Disciplined ground-to-roof civil execution." },
    { step: "06", name: "INTERIOR", desc: "Finishes, custom joinery & living spaces." },
    { step: "07", name: "HANDOVER", desc: "Finished space ready for life or business." }
  ],

  processStages: [
    {
      step: "01",
      title: "DISCOVER",
      bengaliTitle: "অনুসন্ধান ও বোঝাপড়া",
      desc: "Understand the site, requirements, budget, purpose and vision.",
      bengaliDesc: "সাইটের বাস্তব অবস্থা, ক্লায়েন্টের লক্ষ্য, বাজেট এবং ভবিষ্যতের প্রয়োজনীয়তা গভীরভাবে অনুধাবন করা।"
    },
    {
      step: "02",
      title: "DESIGN",
      bengaliTitle: "পরিকল্পনা ও নকশা প্রণয়ন",
      desc: "Develop the architectural, structural and interior direction.",
      bengaliDesc: "স্থাপত্যের নান্দনিকতা, স্ট্রাকচারাল স্থায়িত্ব এবং ইন্টেরিয়র লেআউটের সমন্বিত ব্লুপ্রিন্ট তৈরি।"
    },
    {
      step: "03",
      title: "PLAN",
      bengaliTitle: "প্রকৌশল ও বাজেট সমন্বয়",
      desc: "Coordinate engineering, materials, costs, timelines and execution.",
      bengaliDesc: "মালামালের গুণগত মান নির্ধারণ, সুনির্দিষ্ট বাজেট শিট এবং কাজের সময়সীমা বিন্যাস।"
    },
    {
      step: "04",
      title: "BUILD",
      bengaliTitle: "শৃঙ্খলাবদ্ধ সাইট নির্মাণ",
      desc: "Bring the design to life through disciplined site execution.",
      bengaliDesc: "অভিজ্ঞ প্রকৌশলীদের উপস্থিতিতে কঠোর মান নিয়ন্ত্রণে সাইটের মূল নির্মাণকাজ সম্পাদন।"
    },
    {
      step: "05",
      title: "FINISH",
      bengaliTitle: "ইন্টেরিয়র ও নিখুঁত ফিনিশিং",
      desc: "Complete interiors, finishing details and final quality checks.",
      bengaliDesc: "আলোকসজ্জা, পেইন্ট, ক্যাবিনেট্রি ও স্যানিটারি ফিটিংসের নিখুঁত ফিনিশিং ও পরীক্ষণ।"
    },
    {
      step: "06",
      title: "HANDOVER",
      bengaliTitle: "পরিপূর্ণ সমাপ্তি ও হস্তান্তর",
      desc: "Deliver a finished space ready for the life, business or purpose it was designed for.",
      bengaliDesc: "পরিবার বা ব্যবসায়ের ব্যবহারের জন্য সম্পূর্ণ প্রস্তুত অবস্থায় আনুষ্ঠানিকভাবে স্থাপনা হস্তান্তর।"
    }
  ],

  constructionFlow: [
    "SITE PREPARATION",
    "FOUNDATION",
    "STRUCTURE",
    "MASONRY",
    "MEP INFRASTRUCTURE",
    "FINISHING",
    "INTERIOR",
    "FINAL HANDOVER"
  ],

  interiorCategories: [
    { title: "HOME INTERIORS", desc: "Calm, functional living rooms, bedrooms and family sanctuaries." },
    { title: "OFFICE INTERIORS", desc: "Modern, productive corporate workspaces and conference suites." },
    { title: "RETAIL & COMMERCIAL", desc: "Customer-centric commercial interiors and distinctive display layouts." },
    { title: "KITCHEN & LIVING", desc: "Ergonomic modular kitchens with durable materials and smart storage." },
    { title: "CUSTOM SPACES", desc: "Specialized prayer enclaves, private library rooms and lounge terraces." },
    { title: "RENOVATION", desc: "Transforming tired, dated spaces into modern, functional environments." }
  ],

  whyChooseBec: [
    {
      num: "01",
      title: "EXPERIENCED LEADERSHIP",
      bengaliTitle: "অভিজ্ঞ নেতৃত্ব",
      desc: "More than 15 years of practical industry experience behind the people leading the company.",
      bengaliDesc: "কোম্পানির বর্তমান কাঠামোর পেছনের মূল নেতৃত্বের রয়েছে মাঠপর্যায়ে ১৫+ বছরের বাস্তব কাজের অভিজ্ঞতা।"
    },
    {
      num: "02",
      title: "END-TO-END CAPABILITY",
      bengaliTitle: "সম্পূর্ণ সমাধান",
      desc: "Design, engineering, construction and interior execution under one coordinated team.",
      bengaliDesc: "নকশা, প্রকৌশল, সাইট নির্মাণ ও অভ্যন্তরীণ সজ্জা—সবকিছু একটি একক সমন্বিত দলের দায়িত্বে।"
    },
    {
      num: "03",
      title: "PRACTICAL ENGINEERING",
      bengaliTitle: "বাস্তবসম্মত প্রকৌশল",
      desc: "Solutions designed around real site conditions, usability and long-term performance.",
      bengaliDesc: "কাগজের ড্রয়িং ছাড়িয়ে বাস্তব সাইটের মাটির অবস্থা, আবহাওয়া ও স্থায়িত্বের ওপর ভিত্তি করে তৈরি সমাধান।"
    },
    {
      num: "04",
      title: "CLEAR COMMUNICATION",
      bengaliTitle: "স্বচ্ছ যোগাযোগ",
      desc: "Clients should know what is happening, what comes next and what decisions are required.",
      bengaliDesc: "কাজের অগ্রগতি, ভবিষ্যৎ ধাপ এবং প্রয়োজনীয় সিদ্ধান্ত সম্পর্কে ক্লায়েন্টকে সার্বক্ষণিক অবগত রাখা।"
    },
    {
      num: "05",
      title: "ATTENTION TO DETAIL",
      bengaliTitle: "নিখুঁত যত্ন",
      desc: "From structural work to the final finish, small decisions shape the final result.",
      bengaliDesc: "মাটির নিচের পাইলিং থেকে দেয়ালের শেষ রঙের পরত—প্রতিটি ক্ষুদ্র বিষয়ে সতর্ক দৃষ্টি।"
    },
    {
      num: "06",
      title: "ACCOUNTABILITY",
      bengaliTitle: "পূর্ণ দায়বদ্ধতা",
      desc: "We aim to take responsibility for the work we commit to — not simply pass clients from one contractor to another.",
      bengaliDesc: "আমরা আমাদের কাজের জন্য সরাসরি দায়বদ্ধ থাকি—ক্লায়েন্টকে এক ঠিকাদার থেকে অন্য ঠিকাদারে ঠেলে দিই না।"
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
      statusBadge: "ACTIVE CONSTRUCTION · PILING & SUBSTRUCTURE",
      category: "Residential & Purpose-Built Development",
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
      totalUnits: "15 Residences (2 Units / Floor)",
      landSharePerUnit: "164 Sq. Ft. Registered Land Share",
      configuration: "3 Bed · 3 Bath · 3 Balconies",
      bookingShare: "Direct Consultation with BEC",
      features: [
        "40-foot-wide road access in peaceful Road 14 sector",
        "Direct registered Sub-Kabala land deed before construction begins",
        "Strictly two residences per floor for maximum cross-ventilation and privacy",
        "High-speed 8'x8' passenger lift with Automatic Rescue Device (ARD)",
        "Covered ground floor parking bays and dedicated standby generator",
        "Landscaped communal rooftop terrace garden with seating pergola"
      ],
      description: "A residential project demonstrating our commitment to practical planning, low-density living, and rigorous civil engineering. Set along a 40-foot-wide road in Agrabad CDA."
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
      bookingShare: "Consult BEC for Details",
      features: [
        "5.00 Katha prime rectangular plot with optimal North-South orientation",
        "Strictly 2 expansive executive apartments per floor for maximum privacy",
        "Engineered in consultation with Mahi Engineering Services",
        "Dual fire egress staircases in strict adherence to BNBC & CDA safety codes",
        "Dedicated utility balconies and cross-ventilated kitchen zones",
        "Direct deed registration eliminating speculative developer risk"
      ],
      description: "Conceived around generous family living on Road 11 in Agrabad CDA. Featuring two residences per floor, expansive four-bedroom layouts, and direct deeded land co-ownership."
    },
    {
      id: "bdm-future-parcel",
      index: "03",
      name: "Agrabad Signature Parcel III",
      bengaliName: "আগ্রাবাদ সিগনেচার পার্সেল ৩",
      status: "Design & Planning Phase",
      bengaliStatus: "ডিজাইন ও পরিকল্পনা পর্যায়",
      statusBadge: "UPCOMING DESIGN-TO-BUILD PROJECT",
      category: "Future Land-Share Development",
      location: "Agrabad CDA Residential Area · Chattogram",
      bengaliLocation: "আগ্রাবাদ সিডিএ আ/এ · চট্টগ্রাম",
      heroImage: "assets/projects/parcel-site.jpg",
      twilightImage: "assets/projects/parcel-site.jpg",
      floorPlanImage: "assets/projects/shopnonebash-plan.jpg",
      planType: "Master Site Schematic (Under CDA Review)",
      unitSize: "Custom Tailored Allocations",
      landSize: "Planned 6.00+ Katha Parcel",
      roadWidth: "Planned 40 Feet Road Frontage",
      floors: "G + 9 Planned",
      totalUnits: "Limited Fractional Allotments",
      landSharePerUnit: "Registered Sub-Kabala",
      features: [
        "Prime location in central Agrabad CDA residential corridor",
        "Turnkey design-to-build collaboration with prospective owners",
        "Earthquake-resistant RCC framed structural design (BNBC 2020)",
        "Integrated modern MEP infrastructure and standby power backup"
      ],
      description: "Upcoming purpose-planned residential and commercial development in Agrabad CDA, reflecting our design-to-build capabilities from raw ground to final delivery."
    }
  ]
};

// Freeze data to guarantee immutability
Object.freeze(BDM_DATA);
const BEC_DATA = BDM_DATA;
