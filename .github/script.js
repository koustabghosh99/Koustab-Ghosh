/* =========================================================
   NAVIGATION (hamburger + page switching)
========================================================= */
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navPanel = document.getElementById('navPanel');
const navClose = document.getElementById('navClose');
const navOverlay = document.getElementById('navOverlay');

function openNav(){
  hamburgerBtn.classList.add('open');
  navPanel.classList.add('open');
  navOverlay.classList.add('show');
}
function closeNav(){
  hamburgerBtn.classList.remove('open');
  navPanel.classList.remove('open');
  navOverlay.classList.remove('show');
}
hamburgerBtn.addEventListener('click', () => {
  navPanel.classList.contains('open') ? closeNav() : openNav();
});
navClose.addEventListener('click', closeNav);
navOverlay.addEventListener('click', closeNav);

const pages = document.querySelectorAll('.page');
function goToPage(name){
  pages.forEach(p => p.classList.toggle('active', p.dataset.page === name));
  window.scrollTo({top:0, behavior:'smooth'});
  closeNav();
}
document.querySelectorAll('[data-nav]').forEach(el => {
  el.addEventListener('click', () => goToPage(el.dataset.nav));
});
goToPage('home'); // default page

/* =========================================================
   TYPEWRITER / "KEYBOARD" ANIMATION FOR HERO ROLE LINE
========================================================= */
const roles = [
  "Student | Business Analytics",
  "Technology & Web Development",
  "Creative Arts & Design",
  "MUN Delegate & Debater"
];
const twEl = document.getElementById('typewriter');
let roleIndex = 0, charIndex = 0, deleting = false;

function typeLoop(){
  const current = roles[roleIndex];
  if(!deleting){
    charIndex++;
    twEl.textContent = current.slice(0, charIndex);
    if(charIndex === current.length){
      deleting = true;
      setTimeout(typeLoop, 1400);
      return;
    }
  } else {
    charIndex--;
    twEl.textContent = current.slice(0, charIndex);
    if(charIndex === 0){
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }
  setTimeout(typeLoop, deleting ? 40 : 75);
}
typeLoop();

/* =========================================================
   DATA — edit these arrays to add new projects / certificates
========================================================= */
const projects = {
  creative: [
    {
      img: "assets/img/kg-logo.png",
      title: "KG — Personal Brand Identity",
      desc: "My own personal logo — the KG monogram built around a mountain-summit motif, representing ambition across analysis, debate, creativity and impact."
    },
    {
      img: "assets/projects/waldnest.jpg",
      title: "WaldNest — Sustainable Packaging Brand",
      desc: "A brand and logo concept for a sustainable packaging company, designed for the Logopreneur 2.0 competition (finalist entry).",
      fullText: `WaldNest is a sustainable-packaging startup concept I created for Logopreneur 2.0 — replacing single-use plastic with home-compostable, plant-fibre materials engineered for e-commerce and retail.

The Problem: Over 150 million tonnes of plastic packaging enter landfills and oceans every year, and most "eco" alternatives still rely on fossil-based liners.

Our Solution: Packaging grown from agricultural waste and plant fibre — strong enough for shipping, and fully compostable within 90 days.

The Model: B2B supply for e-commerce, D2C brands, and retail — priced to compete with conventional corrugate and mailers.

Mission: To make sustainable packaging the default choice — not the premium one — by building materials that return to the earth as naturally as they came from it.

Name origin: "WaldNest" combines "Wald" (forest, in German) with "Nest" — a shelter shaped by nature.`
    },
    {
      img: "assets/projects/waldnest-slides/slide-2.jpg",
      title: "WaldNest — The Story Behind the Mark",
      desc: "Every element of the WaldNest logo was chosen deliberately, from the woven-nest brown strands to the growing branch. Click to read the full breakdown.",
      fullText: `Every element of the WaldNest logo was chosen to carry the brand's purpose — nothing is decorative.

The Nest: Interwoven brown strands form a woven nest — representing shelter, care, and the natural fibres our packaging is made from.

The Cube: A green package sits cradled at the centre, standing in for the product itself — safe, protected, and central to the brand.

The Growing Branch: Fresh leaves sprouting upward signal renewal and biodegradability — packaging that grows from, and returns to, nature.

Green & Brown Palette: Green speaks to growth and eco-consciousness; earthy brown grounds the brand in raw, natural materials.

Word-mark: An organic, textured typeface avoids a sterile corporate feel — reinforcing craft and authenticity.`,
      link: { href: "assets/projects/WaldNest_Pitch_Deck.pptx", label: "Download full pitch deck (.pptx)" }
    }
  ],
  technical: [
    {
      img: "assets/img/kg-logo.png",
      title: "Personal Portfolio Website",
      desc: "Designed and developed this personal website from scratch to showcase my CV, projects, achievements, certificates, skills and creative work. Built with HTML, CSS and JavaScript."
    }
  ]
};

const writing = [
  {
    img: "assets/writing/ai-leadership-article.jpg",
    title: "AI-Augmented Leadership and Managerial Decision-Making",
    desc: "A magazine article on how AI supports — but never replaces — human leaders in business decision-making. Click to read the full piece.",
    fullText: `AI technology, which was once a concept only imagined in science fiction, is now an essential part of modern business. It enables companies to gain insight and make more informed decisions. However, it must be noted that while AI can assist leaders, it cannot replace them. The future sees humans and artificial intelligence functioning together in tandem, with both making an organization more successful.

Leaders today are faced with the need to make increasingly complex choices. Markets evolve, customer demands are fickle, and international happenings can have unforeseen consequences on business operations. Although experience and intuition can guide executives through such challenges, there is a clear need for external support. This is where AI comes in, for it serves as an invaluable tool in analyzing the vast amounts of data generated in today's fast-paced digital age. It is not all-encompassing, as it does not dictate what decisions must be made, but rather, it aids in clarifying the situation so that an executive can make a choice with greater confidence.

One way in which AI assists is by interpreting data in a manner that makes it more accessible to the average person. From determining customer behavior, to finances, to supply chains, and even social media interactions, AI can provide insight into virtually any aspect of business. As such, it can enable managers and executives to spend their time on more nuanced concerns that require a human touch, such as how to effectively address the needs of their stakeholders and how to operate their organization in a way that is beneficial to all involved.

A critical aspect of AI software is its ability to predict future events. By analyzing trends, companies can begin to prepare for what lies ahead. In doing so, they can mitigate risks and optimize opportunities, ensuring that their processes are as efficient as possible. It can be reasonably argued that this is a moral obligation on the part of leaders, for it enables them to operate in a manner that prevents wastage of resources, as well as protects the people who depend on the company.

Even in areas that pertain specifically to people, such as staffing and employee engagement, AI plays a major role. Not only can recruitment technologies help find the best fit for a prospective job, but engagement tools can also identify and address any issues within a team. That being said, it must be noted that the most important human qualities, such as empathy and fairness, cannot be replaced by technology. As such, while a computer program can identify the problems within an organization, it is up to the executives to fix them, for they would understand the nuances of human interactions better than any software.

In the same way, it must be noted that although AI can facilitate and even personalize customer relationships, it cannot replace the personal touch of a human being. Chatbots enable around-the-clock communication with clients, while recommendation and sentiment analysis tools attempt to learn their likes and dislikes. While it is undeniable that such measures do not provide the same level of care as a human would, it is also true that the ability to connect on a personal level is a uniquely human quality. Thus, if companies truly wish to engage with their stakeholders, they must understand that personalization technologies are only useful insofar as they serve to replace actual human interaction. As such, they must put in place measures to ensure that their clients are treated with dignity and respect.

It must also be noted that AI is not always objective, as it learns from the information that it is provided with. If there are issues with the latter, the former will also be compromised, which means that the recommendations that it provides may be based on misinformation or even outright prejudice. As such, it falls upon human leaders to ensure that the information that they rely on is accurate, and that they remain skeptical of any tools that claim to be objective when it comes to people.

Ultimately, there are many areas in which AI is beneficial to executives that hope to improve their operations. From managing internal affairs to engaging with external stakeholders, computers serve as an invaluable tool in facilitating decision-making. However, it is crucial to understand that AI cannot replace certain human qualities, such as emotional intelligence, morality, and creativity. After all, when a person is feeling down, few would turn to a computer-generated message for reassurance. Similarly, no algorithm can create a vision that inspires people to action.

Artificial intelligence is expected to continue assisting leaders in improving their decision-making processes in the years to come. New developments, such as AI tools that generate, summarize, or even simulate scenarios, will further empower executives to improve their options on the matter. However, it must be noted that no matter how sophisticated such software becomes, it will only enhance an individual's natural talents. As such, there is a need for companies to invest in human qualities that will allow them to benefit from such technologies, such as curiosity, ethics, and digital literacy. It must also be noted that in order to maximize the benefits of AI, leaders cannot rely on it blindly, as no amount of data can compensate for genuine human care and encouragement.

In the future, the best leaders will be those who work in concert with artificial intelligence to make decisions that reflect the highest human ideals, such as wisdom, morality, and compassion. As such, the future belongs to those who seek to balance human and technological capabilities to operate organizations that are truly worthy of the people that they serve and the communities that they operate within.`
  }
];

const certificates = {
  creative: [
    { img:"assets/certs/logopreneur.jpg", title:"Logopreneur 2.0 — Finalist", desc:"Pratyagra: The Entrepreneurship Club, IEM Kolkata · 18 Aug 2026 · for the WaldNest brand & logo" },
    { img:"assets/certs/painting-1.jpeg", title:"Ankan Shree — Part I (Painting)", desc:"Suro Bharati Sangeet Kala Kendra · Session 2018–19 · Grade A+" },
    { img:"assets/certs/painting-2.jpeg", title:"Ankan Shree — Part II (Painting)", desc:"Suro Bharati Sangeet Kala Kendra · Session 2019–20 · Grade A+" },
    { img:"assets/certs/painting-3.jpeg", title:"Ankan Shree — Final (Painting)", desc:"Suro Bharati Sangeet Kala Kendra · Session 2020–21 · 3rd Year" }
  ],
  participation: [
    { img:"assets/certs/arthsamriddhi.jpeg", title:"ArthSamriddhi — Smart Investing Lecture", desc:"Finance Club, BBA Dept, IEM Kolkata · 6 Aug 2026" },
    { img:"assets/certs/econflix.jpg", title:"ECONFLIX Workshop", desc:"Econspire — The Economic Club, IEM Kolkata · 10 Aug 2026" },
    { img:"assets/certs/durnibar.jpg", title:"\"Communicate Better in the New World\"", desc:"Durnibar — The Literary Club of IEM · 21 Aug 2026" }
  ],
  technical: [
    { img:"assets/certs/it-diploma.jpeg", title:"Diploma in Information Technology", desc:"IAS Yuva Computer Sakharta Mission · 92% · Grade A+ · Dec 2025" }
  ],
  debate: [
    { img:"assets/certs/mun-bolivia.jpg", title:"IntraMUN 2026 — UNHRC Delegate", desc:"IEM Model United Nations · Represented Bolivia · 9 Aug 2026" }
  ]
};

/* =========================================================
   RENDER CARDS
========================================================= */
function renderCards(containerId, items){
  const el = document.getElementById(containerId);
  if(!el) return;
  el.innerHTML = "";
  if(!items || items.length === 0){
    el.innerHTML = '<div class="empty-note">More coming soon.</div>';
    return;
  }
  items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${item.img}" alt="${item.title}">
      <div class="card-body">
        <h4>${item.title}</h4>
        <p>${item.desc}</p>
      </div>`;
    card.addEventListener('click', () => openModal(item));
    el.appendChild(card);
  });
}

renderCards('grid-creative-work', projects.creative);
renderCards('grid-technical-work', projects.technical);
renderCards('grid-writing', writing);
renderCards('grid-cert-creative', certificates.creative);
renderCards('grid-cert-participation', certificates.participation);
renderCards('grid-cert-technical', certificates.technical);
renderCards('grid-cert-debate', certificates.debate);

/* =========================================================
   POPUP MODAL
========================================================= */
const modalOverlay = document.getElementById('modalOverlay');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalClose = document.getElementById('modalClose');

function openModal(item){
  modalImg.src = item.img;
  modalImg.alt = item.title;
  modalTitle.textContent = item.title;
  if(item.fullText){
    modalDesc.innerHTML = item.fullText
      .split(/\n\s*\n/)
      .map(para => `<p>${para.trim()}</p>`)
      .join('');
  } else {
    modalDesc.innerHTML = `<p>${item.desc}</p>`;
  }
  if(item.link){
    modalDesc.innerHTML += `<p><a href="${item.link.href}" target="_blank" rel="noopener" class="modal-link">${item.link.label} ↗</a></p>`;
  }
  modalOverlay.classList.add('show');
}
function closeModal(){
  modalOverlay.classList.remove('show');
}
modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', e => {
  if(e.target === modalOverlay) closeModal();
});
document.addEventListener('keydown', e => {
  if(e.key === 'Escape') closeModal();
});
