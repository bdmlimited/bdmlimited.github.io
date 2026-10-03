/**
 * BDM LIMITED — INTERACTIVE APPLICATION LOGIC
 * Manages dynamic rendering, scroll transitions, blueprint modals,
 * bilingual toggling, interactive cartography, and contact workflows.
 */

let currentLanguage = 'en';
let currentModalProject = null;

document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initMobileDrawer();
  renderProjectsList();
  renderTimelineStages();
  renderAmenities();
  renderPhilosophy();
  renderJournal();
  initSmoothScroll();
});

/* ==========================================================================
   1. NAVIGATION SCROLL & HEADER TRANSITIONS
   ========================================================================== */
function initNavbarScroll() {
  const header = document.getElementById('site-header');
  if (!header) return;

  const handleScroll = () => {
    const scrollPos = window.scrollY || window.pageYOffset;
    const heroHeight = document.getElementById('hero')?.offsetHeight || 600;

    if (scrollPos > heroHeight - 100) {
      header.classList.remove('hero-transparent');
      header.classList.add('scrolled');
    } else {
      header.classList.add('hero-transparent');
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check
}

/* ==========================================================================
   2. MOBILE ARCHITECTURAL DRAWER
   ========================================================================== */
function initMobileDrawer() {
  const toggleBtn = document.getElementById('menu-toggle');
  const closeBtn = document.getElementById('drawer-close');
  const drawer = document.getElementById('mobile-drawer');

  if (toggleBtn && drawer) {
    toggleBtn.addEventListener('click', () => {
      drawer.classList.add('open');
      drawer.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
  }

  if (closeBtn && drawer) {
    closeBtn.addEventListener('click', closeMobileDrawer);
  }
}

function closeMobileDrawer() {
  const drawer = document.getElementById('mobile-drawer');
  if (drawer) {
    drawer.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

/* ==========================================================================
   3. DYNAMIC RENDERING: PROJECTS LIST
   ========================================================================== */
function renderProjectsList() {
  const container = document.getElementById('projects-list-container');
  if (!container || !BDM_DATA || !BDM_DATA.projects) return;

  container.innerHTML = BDM_DATA.projects.map((proj) => {
    const statusClass = proj.id === 'bdm-shopnaloy' ? 'active' : (proj.id === 'bdm-shopno-nebash' ? 'ongoing' : 'upcoming');
    const isEn = currentLanguage === 'en';
    const name = isEn ? proj.name : proj.bengaliName;
    const location = isEn ? proj.location : proj.bengaliLocation;
    const status = isEn ? proj.status : proj.bengaliStatus;

    return `
      <article class="project-row" onclick="openProjectModal('${proj.id}')" tabindex="0" role="button" aria-label="View ${name} details">
        <span class="project-row-num">${proj.index}</span>
        
        <div class="project-row-title-box">
          <h3 class="project-row-title">${name}</h3>
          <span class="label-caps" style="color: var(--color-champagne);">${proj.category}</span>
        </div>

        <div class="project-row-loc">
          <span class="body-sm font-body">${location}</span>
        </div>

        <div class="project-row-specs">
          <span class="label-numeric font-body" style="font-weight: 600;">${proj.unitSize}</span>
          <span class="label-caps" style="color: var(--color-charcoal-dim); font-size: 0.625rem;">${proj.roadWidth}</span>
        </div>

        <div style="display: flex; justify-content: flex-end; align-items: center; gap: 0.75rem;">
          <span class="status-badge ${statusClass}">${status}</span>
          <span class="material-symbols-outlined btn-arrow-icon" style="color: var(--color-champagne);">arrow_forward</span>
        </div>
      </article>
    `;
  }).join('');
}

/* ==========================================================================
   4. DYNAMIC RENDERING: "HOW WE BUILD" TIMELINE
   ========================================================================== */
function renderTimelineStages() {
  const container = document.getElementById('timeline-container');
  if (!container || !BDM_DATA || !BDM_DATA.howWeBuild) return;

  container.innerHTML = BDM_DATA.howWeBuild.map((stage) => {
    return `
      <div class="timeline-stage-card">
        <div>
          <span class="timeline-stage-num">${stage.step}</span>
          <h3 class="timeline-stage-title">${stage.title}</h3>
          <p class="timeline-stage-sub">${stage.subtitle}</p>
          <p class="timeline-stage-desc">${stage.desc}</p>
        </div>
        <div class="timeline-stage-spec">
          ${stage.specs}
        </div>
      </div>
    `;
  }).join('');
}

/* ==========================================================================
   5. DYNAMIC RENDERING: AMENITIES SPECIFICATIONS
   ========================================================================== */
function renderAmenities() {
  const container = document.getElementById('amenities-container');
  if (!container || !BDM_DATA || !BDM_DATA.amenities) return;

  container.innerHTML = BDM_DATA.amenities.map((item) => {
    return `
      <div class="amenity-card">
        <span class="material-symbols-outlined amenity-icon-wrapper">${item.icon}</span>
        <h3 class="amenity-title">${item.title}</h3>
        <p class="amenity-desc">${item.desc}</p>
      </div>
    `;
  }).join('');
}

/* ==========================================================================
   6. DYNAMIC RENDERING: BDM PHILOSOPHY
   ========================================================================== */
function renderPhilosophy() {
  const container = document.getElementById('philosophy-container');
  if (!container || !BDM_DATA || !BDM_DATA.philosophy) return;

  container.innerHTML = BDM_DATA.philosophy.map((item) => {
    return `
      <div class="philosophy-card">
        <span class="philosophy-num">${item.number}</span>
        <h3 class="philosophy-title">${item.title}</h3>
        <p class="philosophy-desc">${item.desc}</p>
      </div>
    `;
  }).join('');
}

/* ==========================================================================
   7. DYNAMIC RENDERING: JOURNAL ESSAYS
   ========================================================================== */
function renderJournal() {
  const container = document.getElementById('journal-container');
  if (!container || !BDM_DATA || !BDM_DATA.journal) return;

  container.innerHTML = BDM_DATA.journal.map((art) => {
    return `
      <article class="journal-card">
        <div>
          <div class="journal-meta">
            <span>${art.date}</span>
            <span>${art.readTime}</span>
          </div>
          <span class="label-caps" style="color: var(--color-charcoal-dim); display: block; margin: 0.75rem 0 0.5rem 0;">${art.category}</span>
          <h3 class="journal-title">${art.title}</h3>
          <p class="journal-excerpt" style="margin-top: 1rem;">${art.excerpt}</p>
        </div>
        <a href="#contact" class="btn btn-secondary btn-sm" onclick="requestBrochure('${art.title}')" style="align-self: flex-start;">
          <span>READ PAPER</span>
          <span class="material-symbols-outlined btn-arrow-icon" style="font-size: 14px;">arrow_forward</span>
        </a>
      </article>
    `;
  }).join('');
}

/* ==========================================================================
   8. PROJECT DETAIL MODAL & BLUEPRINT VIEWER
   ========================================================================== */
function openProjectModal(projectId) {
  const proj = BDM_DATA.projects.find(p => p.id === projectId);
  if (!proj) return;

  currentModalProject = proj;

  // Set modal headers and texts
  document.getElementById('modal-project-index').textContent = `${proj.index} · ${proj.category.toUpperCase()}`;
  document.getElementById('modal-project-title').textContent = proj.name;
  document.getElementById('modal-project-desc').textContent = proj.description;

  // Set specs grid
  const specsContainer = document.getElementById('modal-specs-grid');
  specsContainer.innerHTML = `
    <div class="spec-cell">
      <span class="spec-cell-label">LOCATION</span>
      <span class="spec-cell-val">${proj.location}</span>
    </div>
    <div class="spec-cell">
      <span class="spec-cell-label">FRONT ROAD ACCESS</span>
      <span class="spec-cell-val">${proj.roadWidth}</span>
    </div>
    <div class="spec-cell">
      <span class="spec-cell-label">BUILDING HEIGHT</span>
      <span class="spec-cell-val">${proj.floors}</span>
    </div>
    <div class="spec-cell">
      <span class="spec-cell-label">APARTMENT SIZE</span>
      <span class="spec-cell-val" style="color: var(--color-champagne);">${proj.unitSize}</span>
    </div>
    <div class="spec-cell">
      <span class="spec-cell-label">LAND PARCEL</span>
      <span class="spec-cell-val">${proj.landSize}</span>
    </div>
    <div class="spec-cell">
      <span class="spec-cell-label">TOTAL RESIDENCES</span>
      <span class="spec-cell-val">${proj.totalUnits}</span>
    </div>
    <div class="spec-cell">
      <span class="spec-cell-label">LAND SHARE / UNIT</span>
      <span class="spec-cell-val" style="color: var(--color-champagne);">${proj.landSharePerUnit}</span>
    </div>
    <div class="spec-cell">
      <span class="spec-cell-label">CONFIGURATION</span>
      <span class="spec-cell-val">${proj.configuration}</span>
    </div>
    <div class="spec-cell">
      <span class="spec-cell-label">BOOKING DEED SHARE</span>
      <span class="spec-cell-val">${proj.bookingShare}</span>
    </div>
  `;

  // Default to render view
  switchModalTab('render');

  // Open modal
  const modal = document.getElementById('project-modal');
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function switchModalTab(tabKey) {
  if (!currentModalProject) return;

  const renderBtn = document.getElementById('tab-btn-render');
  const planBtn = document.getElementById('tab-btn-plan');
  const twilightBtn = document.getElementById('tab-btn-twilight');
  const displayImg = document.getElementById('modal-display-img');
  const displayBadge = document.getElementById('modal-display-badge');

  [renderBtn, planBtn, twilightBtn].forEach(btn => btn.classList.remove('active'));

  if (tabKey === 'render') {
    renderBtn.classList.add('active');
    displayImg.src = currentModalProject.heroImage;
    displayBadge.textContent = "DAYTIME ARCHITECTURAL FACADE";
  } else if (tabKey === 'plan') {
    planBtn.classList.add('active');
    displayImg.src = currentModalProject.floorPlanImage;
    displayBadge.textContent = currentModalProject.planType.toUpperCase();
  } else if (tabKey === 'twilight') {
    twilightBtn.classList.add('active');
    displayImg.src = currentModalProject.twilightImage;
    displayBadge.textContent = "TWILIGHT ELEVATION PERSPECTIVE";
  }
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  if (modal) {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  currentModalProject = null;
}

function closeProjectModalOnBackdrop(e) {
  if (e.target.id === 'project-modal') {
    closeProjectModal();
  }
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeProjectModal();
    closeMobileDrawer();
  }
});

function enquireFromModal() {
  if (!currentModalProject) return;
  const projectSelect = document.getElementById('patron-project');
  if (projectSelect) {
    for (let i = 0; i < projectSelect.options.length; i++) {
      if (projectSelect.options[i].text.includes(currentModalProject.name)) {
        projectSelect.selectedIndex = i;
        break;
      }
    }
  }
  closeProjectModal();
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
}

function requestBrochure(projectName) {
  const projectSelect = document.getElementById('patron-project');
  if (projectSelect) {
    for (let i = 0; i < projectSelect.options.length; i++) {
      if (projectSelect.options[i].text.includes(projectName)) {
        projectSelect.selectedIndex = i;
        break;
      }
    }
  }
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
}

/* ==========================================================================
   9. INTERACTIVE CARTOGRAPHY (AGRABAD CDA)
   ========================================================================== */
function selectMapLocation(locKey) {
  const pinShopnaloy = document.getElementById('pin-shopnaloy');
  const pinNebash = document.getElementById('pin-nebash');
  const pinHq = document.getElementById('pin-hq');

  [pinShopnaloy, pinNebash, pinHq].forEach(pin => pin?.classList.remove('active'));

  const tagElem = document.getElementById('map-info-tag');
  const titleElem = document.getElementById('map-info-title');
  const descElem = document.getElementById('map-info-desc');
  const roadElem = document.getElementById('map-info-road');
  const statusElem = document.getElementById('map-info-status');
  const btnElem = document.getElementById('map-info-btn');

  if (locKey === 'shopnaloy') {
    pinShopnaloy.classList.add('active');
    tagElem.textContent = "FLAGSHIP SECTOR";
    titleElem.textContent = "BDM SHOPNALOY (PLOT 727)";
    descElem.textContent = "Located on a generous 40-foot wide road in Road 14, Agrabad CDA. Only minutes from Agrabad Access Road, Badamtoli Mor, leading educational institutions, and healthcare centers.";
    roadElem.textContent = "40 Feet Broad Road";
    statusElem.textContent = "CDA Approved & Deeded";
    btnElem.onclick = () => openProjectModal('bdm-shopnaloy');
    btnElem.innerHTML = `<span>VIEW FULL PROJECT BLUEPRINT</span><span class="material-symbols-outlined btn-arrow-icon">arrow_forward</span>`;
  } else if (locKey === 'nebash') {
    pinNebash.classList.add('active');
    tagElem.textContent = "COMPANION DEVELOPMENT";
    titleElem.textContent = "BDM SHOPNO NEBASH (PLOT 445)";
    descElem.textContent = "Positioned on a 30-foot road in Road 11, Agrabad CDA. A quiet, green rectangular 5 Katha parcel with optimal north-south solar exposure and 4-bedroom executive units.";
    roadElem.textContent = "30 Feet Wide Road";
    statusElem.textContent = "Civil Works Ongoing";
    btnElem.onclick = () => openProjectModal('bdm-shopno-nebash');
    btnElem.innerHTML = `<span>VIEW CAD FLOOR PLAN</span><span class="material-symbols-outlined btn-arrow-icon">arrow_forward</span>`;
  } else if (locKey === 'hq') {
    pinHq.classList.add('active');
    tagElem.textContent = "CENTRAL ADMINISTRATION";
    titleElem.textContent = "BDM LIMITED CORPORATE OFFICES";
    descElem.textContent = "Two strategically positioned corporate coordination suites in Halishahar (Nayabazar Port Connecting Rd) and Pahartali (Eidgah Al Helal Bhaban) serving our patrons.";
    roadElem.textContent = "Port Connecting Road";
    statusElem.textContent = "Physical Site Available";
    btnElem.onclick = () => {
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    };
    btnElem.innerHTML = `<span>CONTACT HEADQUARTERS</span><span class="material-symbols-outlined btn-arrow-icon">call</span>`;
  }
}

/* ==========================================================================
   10. BILINGUAL SWITCHER (EN / বাংলা)
   ========================================================================== */
function setLanguage(lang) {
  currentLanguage = lang;

  const btnEn = document.getElementById('btn-lang-en');
  const btnBn = document.getElementById('btn-lang-bn');

  if (lang === 'bn') {
    btnBn.classList.add('active');
    btnEn.classList.remove('active');

    // Update Hero (Sales Persuasion)
    document.getElementById('hero-headline').innerHTML = "আগ্রাবাদ সিডিএ-তে নিজের জমির স্থায়ী ঠিকানা।<br>ফ্ল্যাট নির্মাণে ৪০% নিশ্চিত সাশ্রয়।";
    document.getElementById('hero-subtext').textContent = "নির্মাণকাজ শুরুর পূর্বেই আপনার নামে ভূমির সরাসরি সাব-কবলা রেজিস্ট্রি। সিডিএ অনুমোদিত, ভূমিকম্প সহনশীল এবং প্রতি ফ্লোরে মাত্র ২টি ফ্ল্যাট। ডেভেলপার কোম্পানির কোনো অতিরিক্ত লাভ বা গোপন চার্জ নেই।";
    document.getElementById('hero-cta-explore').textContent = "স্বপ্নালয় প্রকল্প দেখুন (১৩৭৫ বর্গফুট)";
    document.getElementById('hero-cta-enquire').textContent = "হোয়াটসঅ্যাপে মূল্য তালিকা নিন";
    document.getElementById('hero-eyebrow').textContent = "চট্টগ্রামের শীর্ষ ল্যান্ড-শেয়ার ডেভেলপার · আগ্রাবাদ সিডিএ";
    
    // Update Intro
    document.getElementById('intro-title').innerHTML = "ডেভেলপারকে ৪০% অতিরিক্ত মুনাফা কেন দেবেন?<br>যখন আপনি নিজেই হতে পারেন জমির রেজিস্ট্রিকৃত মালিক।";
    document.getElementById('intro-desc-1').textContent = "চট্টগ্রামের প্রচলিত রিয়েল এস্টেটে ফ্ল্যাটের মূল্যের সাথে ৪০% থেকে ৬০% অতিরিক্ত মুনাফা, বিজ্ঞাপন ও সুদের বোঝা যুক্ত থাকে। বিডিএম লিমিটেড আপনাকে দিচ্ছে সরাসরি ল্যান্ড-শেয়ার কো-ওনারশিপের মাধ্যমে প্রকৃত নির্মাণ খরচে বিলাসবহুল ফ্ল্যাট গড়ার সুযোগ।";
    document.getElementById('card-legal-title').textContent = "জমির সরাসরি সাব-কবলা রেজিস্ট্রি";
    document.getElementById('card-legal-desc').textContent = "নির্মাণ কাজ শুরুর পূর্বেই ক্রেতার নামে সরাসরি ভূমির অংশ সাব-কবলা দলিল সম্পাদন ও নামজারি।";
    document.getElementById('card-cost-title').textContent = "৪০% নির্মাণ খরচ সাশ্রয়";
    document.getElementById('card-cost-desc').textContent = "প্রকৃত রড, সিমেন্ট ও পাইলিং খরচে কাজ—কোনো অবাস্তব ডেভেলপার প্রিমিয়াম ছাড়া।";
  } else {
    btnEn.classList.add('active');
    btnBn.classList.remove('active');

    // Restore English (Sales Persuasion)
    document.getElementById('hero-headline').innerHTML = "OWN PRIME LAND IN AGRABAD CDA.<br>SAVE 40% ON YOUR DREAM RESIDENCE.";
    document.getElementById('hero-subtext').textContent = "Direct Sub-Kabala land deed registered in your name before construction starts. CDA-approved, earthquake-engineered homes with strictly 2 units per floor. Zero developer speculative markup.";
    document.getElementById('hero-cta-explore').textContent = "VIEW SHOPNALOY (1,375 SQ FT)";
    document.getElementById('hero-cta-enquire').textContent = "WHATSAPP FOR PRICE SHEET";
    document.getElementById('hero-eyebrow').textContent = "CHATTOGRAM'S PREMIER LAND-SHARE DEVELOPER · AGRABAD CDA";

    // Restore Intro
    document.getElementById('intro-title').innerHTML = "WHY PAY 40% DEVELOPER MARKUPS<br>WHEN YOU CAN OWN THE LAND DIRECTLY?";
    document.getElementById('intro-desc-1').textContent = "In traditional Chittagong real estate, developers inflate apartment prices by up to 60% for speculative margins, aggressive advertising, and financing interest. At BDM Limited, you bypass developer markups entirely through direct land-share co-ownership.";
    document.getElementById('card-legal-title').textContent = "100% LEGAL SECURITY";
    document.getElementById('card-legal-desc').textContent = "Direct Sub-Kabala deed registered in your name before any construction begins.";
    document.getElementById('card-cost-title').textContent = "GUARANTEED FINANCIAL SAVING";
    document.getElementById('card-cost-desc').textContent = "Fund construction at actual procurement rate with zero developer speculative profit.";
  }

  // Re-render project list with updated language
  renderProjectsList();
}

/* ==========================================================================
   11. ENQUIRY FORM WORKFLOW
   ========================================================================== */
function handleEnquirySubmit(e) {
  e.preventDefault();
  
  const name = document.getElementById('patron-name').value.trim();
  const phone = document.getElementById('patron-phone').value.trim();
  const project = document.getElementById('patron-project').value;
  const notes = document.getElementById('patron-notes').value.trim();

  if (!name || !phone) {
    alert("Please provide both your name and phone number.");
    return;
  }

  // Visual success feedback
  const formPane = document.querySelector('.enquiry-form-pane');
  if (formPane) {
    formPane.innerHTML = `
      <div style="padding: 2rem 0; display: flex; flex-direction: column; gap: 1rem; text-align: left;">
        <span class="material-symbols-outlined" style="color: var(--color-champagne); font-size: 40px;">verified</span>
        <h3 class="headline-md" style="color: var(--color-ivory);">ধন্যবাদ, ${name}!</h3>
        <p class="body-md" style="color: rgba(244,240,232,0.85); line-height: 1.7;">
          আপনার অনুরোধটি নথিভুক্ত করা হয়েছে (${project})। আমাদের আগ্রাবাদ সিডিএ টিম অতিশীঘ্রই আপনার সাথে <strong>${phone}</strong> নম্বরে যোগাযোগ করবেন।
        </p>
        <p class="body-sm" style="color: var(--color-champagne);">
          জরুরী প্রয়োজনে সরাসরি কল করুন: <strong>+880 1749-349299</strong>
        </p>
        <button class="btn btn-secondary" style="border-color: rgba(255,255,255,0.3); color: var(--color-ivory); margin-top: 1rem; align-self: flex-start;" onclick="window.location.reload()">
          <span>SEND ANOTHER ENQUIRY</span>
        </button>
      </div>
    `;
  }
}

/* ==========================================================================
   12. SMOOTH SCROLL FOR ANCHORS
   ========================================================================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || !targetId) return;

      const targetElem = document.querySelector(targetId);
      if (targetElem) {
        e.preventDefault();
        targetElem.scrollIntoView({ behavior: 'smooth' });
        closeMobileDrawer();
      }
    });
  });
}
