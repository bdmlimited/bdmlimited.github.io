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

    // Update Hero
    document.getElementById('hero-headline').textContent = "আমরা এমন স্থান নির্মাণ করি যা সময়ের সাথে অমলিন থাকে।";
    document.getElementById('hero-subtext').textContent = "চট্টগ্রামের আগ্রাবাদ সিডিএ আবাসিক এলাকায় পরিকল্পিত আবাসন। দীর্ঘস্থায়ী স্থাপত্য মর্যাদা, ভূমিকম্প সহনশীল প্রকৌশল এবং ভূমির সরাসরি সাব-কবলা রেজিস্ট্রি শেয়ার।";
    document.getElementById('hero-cta-explore').textContent = "প্রকল্পসমূহ দেখুন";
    document.getElementById('hero-cta-enquire').textContent = "যোগাযোগ করুন";
    document.getElementById('hero-eyebrow').textContent = "প্রকৃত ভূমির রেজিস্ট্রি শেয়ার আবাসন · বাংলাদেশ";
    
    // Update Intro
    document.getElementById('intro-title').innerHTML = "শুধু অট্টালিকা নয়।<br>আমরা তৈরি করি স্থায়ী ঠিকানা।";
    document.getElementById('intro-desc-1').textContent = "বিডিএম লিমিটেড প্রতিষ্ঠিত হয়েছে এক আপসহীন প্রত্যয়ে: বাংলাদেশে আবাসন হতে হবে স্থায়ী, প্রাকৃতিক বাতাস ও আলোসমৃদ্ধ এবং সম্পূর্ণ আর্থিক সততায় মোড়া।";
    document.getElementById('card-legal-title').textContent = "জমির সাব-কবলা রেজিস্ট্রি";
    document.getElementById('card-legal-desc').textContent = "নির্মাণ কাজ শুরুর পূর্বেই ক্রেতার নামে সরাসরি ভূমির অংশ সাব-কবলা দলিল সম্পাদন।";
    document.getElementById('card-cost-title').textContent = "৪০% নির্মাণ খরচ সাশ্রয়";
    document.getElementById('card-cost-desc').textContent = "ডেভেলপারের কাল্পনিক অতিরিক্ত মুনাফা ব্যতীত সরাসরি প্রকৃত খরচে ফ্ল্যাট নির্মাণের সুযোগ।";
  } else {
    btnEn.classList.add('active');
    btnBn.classList.remove('active');

    // Restore English
    document.getElementById('hero-headline').textContent = "WE SHAPE PLACES THAT OUTLIVE TRENDS.";
    document.getElementById('hero-subtext').textContent = "Thoughtfully planned residential living in Agrabad CDA, Chattogram. Delivering lasting architectural dignity, earthquake-resistant engineering, and authentic deeded land share ownership.";
    document.getElementById('hero-cta-explore').textContent = "EXPLORE OUR PROJECTS";
    document.getElementById('hero-cta-enquire').textContent = "MAKE AN ENQUIRY";
    document.getElementById('hero-eyebrow').textContent = "AUTHENTIC LAND SHARE REAL ESTATE · BANGLADESH";

    // Restore Intro
    document.getElementById('intro-title').innerHTML = "MORE THAN BUILDINGS.<br>WE CREATE ADDRESSES.";
    document.getElementById('intro-desc-1').textContent = "BDM Limited was founded on an unapologetic architectural conviction: homes in Bangladesh should be built with permanence, authentic spatial utility, and complete financial honesty.";
    document.getElementById('card-legal-title').textContent = "জমির সাব-কবলা রেজিস্ট্রি";
    document.getElementById('card-legal-desc').textContent = "Direct deed registration in the buyer's name prior to superstructure mobilization.";
    document.getElementById('card-cost-title').textContent = "৪০% নির্মাণ খরচ সাশ্রয়";
    document.getElementById('card-cost-desc').textContent = "Cost-to-build construction with zero developer speculative margin or hidden surcharge.";
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
