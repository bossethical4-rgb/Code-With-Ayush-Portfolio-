/* =========================================================
   CODE WITH AYUSH — MAIN JAVASCRIPT
   Edit this file to change language text, typing roles,
   contact email and interactive behaviour.
   ========================================================= */

/* 1. YOUR PERSONAL DETAILS
   इन values को अपनी असली जानकारी से बदलें।
   Email contact form के mailto action में इस्तेमाल होगा।
*/
const SITE_CONFIG = {
  email: "YOUR_EMAIL@example.com", // उदाहरण: ayush@gmail.com
  typingSpeed: 85,
  deletingSpeed: 45,
  pauseAfterWord: 1300
};

/* 2. ENGLISH + HINDI WEBSITE TEXT
   किसी text को बदलना हो तो इसी object में English और Hindi बदलें।
*/
const translations = {
  en: {
    navHome:"Home", navAbout:"About", navSkills:"Skills", navProjects:"Projects",
    navJourney:"Journey", navServices:"Services", navContact:"Contact",
    heroEyebrow:"AVAILABLE FOR LEARNING & COLLABORATION", hello:"Hello, I'm",
    rolePrefix:"I'M A", heroHeadline:'Turning ideas into <span>digital experiences.</span>',
    heroDescription:"I’m passionate about programming, web development, computer education and cybersecurity. I enjoy learning new technologies and building meaningful digital solutions.",
    exploreWork:"Explore My Work", downloadResume:"Download Resume ↓", findMe:"FIND ME ON",
    visualCaption:"CURIOUS MIND. BUILDER'S SPIRIT.", scroll:"SCROLL TO EXPLORE ↓",
    aboutEyebrow:"GET TO KNOW ME", aboutTitle:'A little about <span>myself.</span>',
    aboutLead:"Technology is more than a tool to me — it’s a space to create, teach, explore and keep growing.",
    aboutText:"I’m Ayush, a technology enthusiast focused on programming, web development and computer education. I enjoy breaking down concepts, building practical projects and exploring how digital systems work. I’m also learning cybersecurity step by step, with a focus on strong fundamentals and responsible practice.",
    factOneTitle:"Build with purpose", factOneText:"Creating useful, accessible digital experiences.",
    factTwoTitle:"Learn by doing", factTwoText:"Turning concepts into hands-on projects.",
    factThreeTitle:"Share knowledge", factThreeText:"Making computer and coding concepts easier to understand.",
    skillsEyebrow:"TOOLS & TECHNOLOGIES", skillsTitle:"Skills I'm <span>building.</span>",
    skillsSubtitle:"A growing toolkit — learning, practising and improving every day.",
    programming:"Programming", programmingText:"Core concepts and problem-solving foundations.",
    webDevelopment:"Web Development", webText:"Building responsive and user-friendly web experiences.",
    cybersecurity:"Cybersecurity Learning", cyberText:"Exploring security concepts through ethical, legal practice.",
    learningNote:"These are learning and practice areas, not claims of certification or professional expertise.",
    projectsEyebrow:"SELECTED WORK", projectsTitle:"Things I've <span>worked on.</span>",
    projectsSubtitle:"A few projects that reflect my learning and practical approach.",
    feeDescription:"A learning project concept for organising student records and fee information.",
    bankDescription:"A programming project exploring basic banking operations and record handling.",
    portfolioDescription:"A personal space to present skills, projects, learning and contact details.",
    cyberProjectDescription:"Future hands-on projects focused on security fundamentals and safe lab practice.",
    githubLink:"GitHub ↗", projectPdf:"Project PDF ↗", shareProject:"Share ↗", comingSoon:"COMING SOON",
    projectEditNote:"Add your real GitHub repository URLs and project screenshots before publishing.",
    journeyEyebrow:"ALWAYS IN PROGRESS", journeyTitle:"My learning <span>journey.</span>",
    journeySubtitle:"A roadmap of topics I'm exploring. Every step is a chance to grow.",
    journeyOne:"Programming Fundamentals", journeyOneText:"Logic, syntax and problem-solving.",
    journeyTwo:"Web Development", journeyTwoText:"HTML, CSS, JavaScript and responsive interfaces.",
    journeyThree:"Software Development", journeyThreeText:"Building projects and understanding development workflows.",
    journeyFour:"Computer Networking", journeyFourText:"Learning networks, protocols and internet fundamentals.",
    journeyFive:"Cybersecurity Fundamentals", journeyFiveText:"Security awareness, defensive concepts and ethical labs.",
    journeySix:"Continuous Learning", journeySixText:"Staying curious, practising and sharing knowledge.",
    ongoing:"ONGOING", exploring:"EXPLORING",
    servicesEyebrow:"HOW I CAN HELP", servicesTitle:"What I can <span>offer.</span>",
    serviceOne:"Website Development", serviceOneText:"Clean, responsive website experiences for personal and learning projects.",
    serviceTwo:"Personal Portfolio Design", serviceTwoText:"A professional online presence to showcase your work and skills.",
    serviceThree:"Coding Education", serviceThreeText:"Beginner-friendly guidance in programming and computer concepts.",
    serviceFour:"Programming Fundamentals", serviceFourText:"Support with basic logic, syntax and practice exercises.",
    serviceFive:"Basic Computer Education", serviceFiveText:"Clear introductions to everyday computer skills and tools.",
    serviceNote:"Update this section to match the services you currently provide.",
    contactEyebrow:"LET'S TALK", contactTitle:'Have a project in <span>mind?</span>',
    contactSubtitle:"Have a question, idea or learning opportunity? Send a message.",
    contactLead:"Good things start with a conversation.",
    contactText:"I’m open to meaningful conversations about coding, web development, computer education and learning opportunities.",
    emailLabel:"EMAIL", socialLabel:"SOCIAL LINKS", contactHint:"Replace the placeholder links with your real profiles.",
    nameLabel:"Your Name", visitorEmailLabel:"Your Email", subjectLabel:"Subject", messageLabel:"Message",
    sendMessage:"Send Message",
    formNote:"This form uses your device's email app. Add your real email address in script.js.",
    footerRole:"Developer · Educator · Cybersecurity Learner", rights:"All Rights Reserved.", footerDisclaimer:"Disclaimer: This portfolio is for educational and informational purposes. Project links and documents are shared by their owner.",
    formSuccess:"Your email app should open with your message. Please send it from there.",
    formMissingEmail:"Please add your real email address in script.js before using the contact form."
  },
  hi: {
    navHome:"होम", navAbout:"परिचय", navSkills:"स्किल्स", navProjects:"प्रोजेक्ट्स",
    navJourney:"सीखने का सफर", navServices:"सेवाएँ", navContact:"संपर्क",
    heroEyebrow:"सीखने और साथ काम करने के लिए उपलब्ध", hello:"नमस्ते, मैं हूँ",
    rolePrefix:"मैं हूँ", heroHeadline:'विचारों को <span>डिजिटल अनुभवों</span> में बदलता हूँ।',
    heroDescription:"मुझे प्रोग्रामिंग, वेब डेवलपमेंट, कंप्यूटर शिक्षा और साइबर सिक्योरिटी में रुचि है। मैं नई तकनीकें सीखना और उपयोगी डिजिटल समाधान बनाना पसंद करता हूँ।",
    exploreWork:"मेरे काम देखें", downloadResume:"रिज़्यूमे डाउनलोड करें ↓", findMe:"यहाँ जुड़ें",
    visualCaption:"जिज्ञासु सोच · कुछ बनाने का जुनून", scroll:"आगे देखने के लिए स्क्रॉल करें ↓",
    aboutEyebrow:"मेरे बारे में जानें", aboutTitle:'मेरे बारे में <span>कुछ बातें।</span>',
    aboutLead:"मेरे लिए तकनीक सिर्फ एक टूल नहीं — यह बनाने, सिखाने, खोजने और लगातार आगे बढ़ने का माध्यम है।",
    aboutText:"मैं आयुष हूँ और प्रोग्रामिंग, वेब डेवलपमेंट तथा कंप्यूटर शिक्षा पर ध्यान देने वाला टेक्नोलॉजी प्रेमी हूँ। मुझे कठिन कॉन्सेप्ट को आसान बनाना, प्रैक्टिकल प्रोजेक्ट बनाना और डिजिटल सिस्टम को समझना पसंद है। मैं मजबूत बुनियादी ज्ञान और जिम्मेदार अभ्यास के साथ साइबर सिक्योरिटी भी सीख रहा हूँ।",
    factOneTitle:"उद्देश्य के साथ निर्माण", factOneText:"उपयोगी और आसान डिजिटल अनुभव बनाना।",
    factTwoTitle:"अभ्यास से सीखना", factTwoText:"कॉन्सेप्ट को प्रैक्टिकल प्रोजेक्ट में बदलना।",
    factThreeTitle:"ज्ञान साझा करना", factThreeText:"कंप्यूटर और कोडिंग को आसान तरीके से समझाना।",
    skillsEyebrow:"टूल्स और टेक्नोलॉजी", skillsTitle:'जिन स्किल्स को <span>निखार रहा हूँ।</span>',
    skillsSubtitle:"लगातार सीखना, अभ्यास करना और बेहतर बनना।",
    programming:"प्रोग्रामिंग", programmingText:"बुनियादी कॉन्सेप्ट और समस्या हल करने की क्षमता।",
    webDevelopment:"वेब डेवलपमेंट", webText:"रिस्पॉन्सिव और यूज़र-फ्रेंडली वेबसाइट बनाना।",
    cybersecurity:"साइबर सिक्योरिटी की पढ़ाई", cyberText:"नैतिक और कानूनी तरीके से सुरक्षा के कॉन्सेप्ट सीखना।",
    learningNote:"ये सीखने और अभ्यास के क्षेत्र हैं; इन्हें प्रमाणपत्र या पेशेवर विशेषज्ञता का दावा न समझें।",
    projectsEyebrow:"चुने हुए काम", projectsTitle:'वे प्रोजेक्ट जिन पर <span>काम किया है।</span>',
    projectsSubtitle:"कुछ प्रोजेक्ट जो मेरी सीख और प्रैक्टिकल सोच दिखाते हैं।",
    feeDescription:"स्टूडेंट रिकॉर्ड और फीस जानकारी व्यवस्थित करने का एक लर्निंग प्रोजेक्ट।",
    bankDescription:"बैंकिंग के बुनियादी कार्यों और रिकॉर्ड मैनेजमेंट को समझने वाला प्रोग्रामिंग प्रोजेक्ट।",
    portfolioDescription:"स्किल्स, प्रोजेक्ट्स, सीखने के सफर और संपर्क जानकारी दिखाने वाली व्यक्तिगत वेबसाइट।",
    cyberProjectDescription:"सुरक्षा की बुनियादी बातों और सुरक्षित लैब अभ्यास पर आधारित भविष्य के प्रोजेक्ट।",
    githubLink:"GitHub ↗", projectPdf:"प्रोजेक्ट PDF ↗", shareProject:"शेयर करें ↗", comingSoon:"जल्द आ रहा है",
    projectEditNote:"पब्लिश करने से पहले अपने असली GitHub लिंक और प्रोजेक्ट स्क्रीनशॉट जोड़ें।",
    journeyEyebrow:"सीखना जारी है", journeyTitle:'मेरा सीखने का <span>सफर।</span>',
    journeySubtitle:"वे विषय जिन्हें मैं सीख रहा हूँ। हर कदम आगे बढ़ने का मौका है।",
    journeyOne:"प्रोग्रामिंग की बुनियाद", journeyOneText:"लॉजिक, सिंटैक्स और समस्या हल करना।",
    journeyTwo:"वेब डेवलपमेंट", journeyTwoText:"HTML, CSS, JavaScript और रिस्पॉन्सिव इंटरफेस।",
    journeyThree:"सॉफ्टवेयर डेवलपमेंट", journeyThreeText:"प्रोजेक्ट बनाना और डेवलपमेंट प्रक्रिया समझना।",
    journeyFour:"कंप्यूटर नेटवर्किंग", journeyFourText:"नेटवर्क, प्रोटोकॉल और इंटरनेट की बुनियाद।",
    journeyFive:"साइबर सिक्योरिटी की बुनियाद", journeyFiveText:"सुरक्षा जागरूकता, बचाव के कॉन्सेप्ट और एथिकल लैब।",
    journeySix:"लगातार सीखना", journeySixText:"जिज्ञासु रहना, अभ्यास करना और ज्ञान साझा करना।",
    ongoing:"जारी है", exploring:"सीख रहा हूँ",
    servicesEyebrow:"मैं कैसे मदद कर सकता हूँ", servicesTitle:'मैं क्या <span>सेवाएँ दे सकता हूँ।</span>',
    serviceOne:"वेबसाइट डेवलपमेंट", serviceOneText:"व्यक्तिगत और लर्निंग प्रोजेक्ट के लिए साफ-सुथरी रिस्पॉन्सिव वेबसाइट।",
    serviceTwo:"पर्सनल पोर्टफोलियो डिज़ाइन", serviceTwoText:"अपने काम और स्किल्स दिखाने के लिए प्रोफेशनल ऑनलाइन पहचान।",
    serviceThree:"कोडिंग शिक्षा", serviceThreeText:"शुरुआती विद्यार्थियों के लिए प्रोग्रामिंग और कंप्यूटर कॉन्सेप्ट।",
    serviceFour:"प्रोग्रामिंग की बुनियाद", serviceFourText:"लॉजिक, सिंटैक्स और अभ्यास में सहायता।",
    serviceFive:"बेसिक कंप्यूटर शिक्षा", serviceFiveText:"रोज़मर्रा के कंप्यूटर कौशल और टूल्स की आसान जानकारी।",
    serviceNote:"यहाँ वही सेवाएँ रखें जो आप वास्तव में देते हैं।",
    contactEyebrow:"बात करते हैं", contactTitle:'क्या आपके पास कोई <span>आइडिया है?</span>',
    contactSubtitle:"कोई सवाल, विचार या सीखने का अवसर है? संदेश भेजें।",
    contactLead:"अच्छी शुरुआत एक बातचीत से होती है।",
    contactText:"कोडिंग, वेब डेवलपमेंट, कंप्यूटर शिक्षा और सीखने के अवसरों पर सार्थक बातचीत के लिए संपर्क करें।",
    emailLabel:"ईमेल", socialLabel:"सोशल लिंक", contactHint:"डेमो लिंक की जगह अपने असली प्रोफाइल लिंक डालें।",
    nameLabel:"आपका नाम", visitorEmailLabel:"आपका ईमेल", subjectLabel:"विषय", messageLabel:"संदेश",
    sendMessage:"संदेश भेजें",
    formNote:"यह फॉर्म आपके डिवाइस का ईमेल ऐप खोलेगा। script.js में अपना असली ईमेल डालें।",
    footerRole:"डेवलपर · शिक्षक · साइबर सिक्योरिटी लर्नर", rights:"सर्वाधिकार सुरक्षित।", footerDisclaimer:"अस्वीकरण: यह पोर्टफोलियो शैक्षिक और जानकारी के उद्देश्य से है। प्रोजेक्ट लिंक और दस्तावेज़ इनके स्वामी द्वारा साझा किए गए हैं।",
    formSuccess:"आपका ईमेल ऐप संदेश के साथ खुलना चाहिए। वहाँ से ईमेल भेजें।",
    formMissingEmail:"कॉन्टैक्ट फॉर्म इस्तेमाल करने से पहले script.js में अपना असली ईमेल डालें।"
  }
};

/* 3. LANGUAGE SWITCHER
   Button दबाने पर English और Hindi content बदलता है।
*/
let currentLanguage = "en";
const languageToggle = document.getElementById("languageToggle");
function setLanguage(language) {
  if (!translations[language]) return;
  currentLanguage = language;
  document.documentElement.lang = language === "hi" ? "hi" : "en";
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const translatedText = translations[language][element.dataset.i18n];
    if (translatedText !== undefined) element.innerHTML = translatedText;
  });
  if (languageToggle) {
    languageToggle.textContent = language === "en" ? "हिंदी" : "English";
    languageToggle.setAttribute("aria-label", language === "en" ? "Switch to Hindi" : "Switch to English");
  }
  renderProjectActions();
}
if (languageToggle) languageToggle.addEventListener("click", () => setLanguage(currentLanguage === "en" ? "hi" : "en"));

/* 4. TYPING ANIMATION
   नीचे roleList में job titles बदलकर नए roles जोड़ सकते हैं।
*/
const typingText = document.getElementById("typingText");
const roleList = {
  en: ["Web Developer", "Coding Instructor", "Cybersecurity Learner"],
  hi: ["वेब डेवलपर", "कोडिंग प्रशिक्षक", "साइबर सिक्योरिटी लर्नर"]
};
let roleIndex = 0;
let characterIndex = 0;
let deleting = false;
let typingTimer;

function typeRole() {
  const words = roleList[currentLanguage];
  const currentWord = words[roleIndex % words.length];

  if (!deleting) {
    characterIndex++;
    typingText.textContent = currentWord.slice(0, characterIndex);
    if (characterIndex >= currentWord.length) {
      deleting = true;
      typingTimer = setTimeout(typeRole, SITE_CONFIG.pauseAfterWord);
      return;
    }
  } else {
    characterIndex--;
    typingText.textContent = currentWord.slice(0, characterIndex);
    if (characterIndex <= 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % words.length;
    }
  }
  typingTimer = setTimeout(typeRole, deleting ? SITE_CONFIG.deletingSpeed : SITE_CONFIG.typingSpeed);
}
if (typingText) typeRole();

/* 5. MOBILE NAVIGATION
   Mobile screen पर hamburger menu open/close करता है।
*/
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
function closeMenu() {
  if (navLinks) navLinks.classList.remove("open");
  if (menuToggle) menuToggle.setAttribute("aria-expanded", "false");
  document.body.classList.remove("menu-open");
}
if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("menu-open", isOpen);
  });
  navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
}

/* 6. CONTACT DETAILS
   HTML में placeholder email भी इसी setting से update होगा।
*/
const emailLink = document.getElementById("emailLink");
if (emailLink) { emailLink.textContent = SITE_CONFIG.email; emailLink.href = `mailto:${SITE_CONFIG.email}`; }

/* Contact form: backend के बिना visitor के email app में draft बनाता है */
const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

if (contactForm && formNote) contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (SITE_CONFIG.email === "YOUR_EMAIL@example.com") {
    formNote.textContent = translations[currentLanguage].formMissingEmail;
    formNote.style.color = "#f0b35b";
    return;
  }

  const name = document.getElementById("visitorName").value.trim();
  const visitorEmail = document.getElementById("visitorEmail").value.trim();
  const subject = document.getElementById("visitorSubject").value.trim();
  const message = document.getElementById("visitorMessage").value.trim();

  // encodeURIComponent special characters को mailto URL में सुरक्षित रखता है
  const body = `Name: ${name}\nEmail: ${visitorEmail}\n\n${message}`;
  const mailtoURL = `mailto:${SITE_CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoURL;

  formNote.textContent = translations[currentLanguage].formSuccess;
  formNote.style.color = "#d4af37";
});

/* 7. SCROLL REVEAL
   Sections screen पर आने पर धीरे-धीरे दिखाई देते हैं।
*/
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll(".reveal").forEach(element => revealObserver.observe(element));
} else {
  document.querySelectorAll(".reveal").forEach(element => element.classList.add("is-visible"));
}

/* 8. BACK TO TOP BUTTON */
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (backToTop) backToTop.classList.toggle("visible", window.scrollY > 500);
});
if (backToTop) backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

/* 9. ACTIVE NAVIGATION LINK */
const pageSections = document.querySelectorAll("main section[id]");
if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelectorAll(".nav-links a").forEach(link => {
          link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      }
    });
  }, { rootMargin: "-35% 0px -55% 0px" });
  pageSections.forEach(section => sectionObserver.observe(section));
}

/* 10. AUTOMATIC FOOTER YEAR */
const yearElement = document.getElementById("year");
if (yearElement) yearElement.textContent = new Date().getFullYear();

/* PROJECT LINKS + PDF + SHARE
   Add public project URLs and public PDF URLs below. */
const PROJECTS = [
  { url: "", pdf: "" }, // Student Fee Management System
  { url: "https://polytechnic-sample-paper.vercel.app/", pdf: "" }, // Banking Management System
  { url: "", pdf: "" }  // Personal Portfolio Website
];
function renderProjectActions() {
  document.querySelectorAll("[data-project-actions]").forEach(container => {
    const project = PROJECTS[Number(container.dataset.projectActions)] || {};
    const labels = translations[currentLanguage];
    container.replaceChildren();
    if (project.url) {
      const link = document.createElement("a"); link.className = "text-link"; link.href = project.url;
      link.target = "_blank"; link.rel = "noopener noreferrer"; link.textContent = labels.githubLink; container.appendChild(link);
    }
    if (project.pdf) {
      const pdf = document.createElement("a"); pdf.className = "text-link"; pdf.href = project.pdf;
      pdf.target = "_blank"; pdf.rel = "noopener noreferrer"; pdf.textContent = labels.projectPdf; container.appendChild(pdf);
    }
    if (project.url || project.pdf) {
      const share = document.createElement("button"); share.type = "button"; share.className = "project-share"; share.textContent = labels.shareProject;
      share.addEventListener("click", async () => {
        const card = container.closest(".project-card");
        const title = card?.querySelector("h3")?.textContent || "My Project";
        const details = `${title}\nProject: ${project.url || "Not added"}\nPDF: ${project.pdf || "Not added"}`;
        try {
          if (navigator.share) await navigator.share({ title, text: details, url: project.url || project.pdf || location.href });
          else if (navigator.clipboard?.writeText) { await navigator.clipboard.writeText(details); share.textContent = currentLanguage === "hi" ? "कॉपी हो गया ✓" : "Copied ✓"; }
          else window.prompt("Copy project details:", details);
        } catch (error) { if (error.name !== "AbortError") console.error("Share failed:", error); }
      });
      container.appendChild(share);
    } else {
      const note = document.createElement("span"); note.className = "project-link-note";
      note.textContent = currentLanguage === "hi" ? "script.js में लिंक जोड़ें" : "Add links in script.js"; container.appendChild(note);
    }
  });
}
renderProjectActions();

/* 11. REDUCED MOTION SUPPORT
   जिन users ने device में reduced motion चुना है, typing animation धीमी/बंद रखें।
*/
if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  clearTimeout(typingTimer);
  if (typingText) typingText.textContent = roleList.en[0];
}
