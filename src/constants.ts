/**
 * Portfolio Data for Eng. Roshdy Ahmed
 */

export const personalInfo = {
  name: { ar: "رشدي أحمد عبد الرحمن حسن", en: "Roshdy Ahmed Abdel Rahman Hassan" },
  title: { ar: "مهندس مدني أول & مدير مشاريع", en: "Senior Civil Engineer & Project Manager" },
  location: { ar: "المدينة المنورة، المملكة العربية السعودية", en: "Madinah, Saudi Arabia" },
  experience: "17+",
  email: "roshdyhassan1988@gmail.com",
  phoneNumbers: ["00966569617221", "00966570209320"],
  summary: {
    ar: "مهندس مدني ذو خبرة تمتد لأكثر من 17 عاماً في إدارة المشاريع الهندسية والإشراف على تنفيذها، مع سجل حافل في تحقيق الأهداف ضمن الجداول الزمنية المحددة والميزانيات المخصصة. أتمتع بمهارات قيادية قوية وقدرة على التواصل الفعّال.",
    en: "Civil Engineer with over 17 years of experience in engineering project management and site supervision, with a proven track record of achieving goals within timelines and budgets. Strong leadership and communication skills."
  },
};

export const stats = [
  { label: { ar: "سنة خبرة", en: "Years of Experience" }, value: "17+" },
  { label: { ar: "مشروع مكتمل", en: "Completed Projects" }, value: "50+" },
  { label: { ar: "شهادات دولية", en: "Global Certs" }, value: "12+" },
  { label: { ar: "فرق عمل", en: "Work Teams" }, value: "20+" },
];

export const experience = [
  {
    company: { ar: "شركة الفناري للمقاولات العامة", en: "Al-Fanari General Contracting" },
    role: { ar: "مدير مشروع", en: "Project Manager" },
    period: { ar: "مارس 2019 – حتى الآن", en: "March 2019 – Present" },
    location: { ar: "جازان / المدينة المنورة، السعودية", en: "Jazan / Madinah, KSA" },
    highlights: {
      ar: [
        "تأهيل وتطوير مباني ومرافق البلديات التابعة لأمانة منطقة المدينة المنورة",
        "مشروع تصريف مياه الأمطار بقرية ديحمة",
        "مشروع إنشاء مراكز صحية (نموذج V) - جازان",
        "تطوير واجهات إسكانات خادم الحرمين الشريفين"
      ],
      en: [
        "Renovation and development of municipality buildings for Madinah Region",
        "Stormwater drainage project in Deihmah village",
        "Construction of health centers (Model V) - Jazan",
        "Façade development for King Abdullah Housing projects"
      ]
    }
  },
  {
    company: { ar: "شركة الشوربجي للمقاولات العامة", en: "Al-Shorbagy General Contracting" },
    role: { ar: "مدير مشروع", en: "Project Manager" },
    period: { ar: "يناير 2017 – مارس 2019", en: "Jan 2017 – March 2019" },
    location: { ar: "دمياط، مصر", en: "Damietta, Egypt" },
    highlights: {
      ar: [
        "مشروع إنشاء مدينة دمياط للأثاث في مدينة شطا",
        "الإشراف على الهيئة الهندسية للقوات المسلحة"
      ],
      en: [
        "Construction of Damietta Furniture City in Shata",
        "Supervision for the Armed Forces Engineering Authority"
      ]
    }
  },
  {
    company: { ar: "شركة البناؤون للمقاولات العامة", en: "Builders General Contracting" },
    role: { ar: "مهندس موقع", en: "Site Engineer" },
    period: { ar: "ديسمبر 2015 – أكتوبر 2016", en: "Dec 2015 – Oct 2016" },
    location: { ar: "دمياط، مصر", en: "Damietta, Egypt" },
    highlights: {
      ar: [
        "إنشاء محطة خدمة وتموين سيارات (وطنية)"
      ],
      en: [
        "Construction of gas and service station (Wataniya)"
      ]
    }
  }
];

export const certifications = [
  { title: { ar: "PMP - إدارة المشاريع الاحترافية", en: "PMP - Project Management Professional" }, date: "2025", issuer: "PMI" },
  { title: { ar: "دبلومة BIM & Project Management", en: "BIM & Project Management Diploma" }, date: "2023", issuer: "Expert Engineers" },
  { title: { ar: "شهادة Revit Structure", en: "Revit Structure Certificate" }, date: "2023", issuer: "Autodesk" },
  { title: { ar: "دبلومة التصميم الإنشائي", en: "Structural Design Diploma" }, date: "2018-2019", issuer: "iLearn Academy" },
  { title: { ar: "اعتماد الهيئة السعودية للمهندسين", en: "Saudi Council of Engineers Membership" }, date: "Continuous", issuer: "SCE" }
];

export const skills = {
  ar: [
    "إدارة المشاريع الهندسية",
    "PMP & Project Control",
    "Autodesk Revit Structure",
    "Primavera P6",
    "AutoCAD 2D",
    "التصميم الإنشائي (SAP/SAFE)",
    "إدارة فرق العمل",
    "مراجعة المخططات الهندسية",
    "مراقبة الجودة والسلامة"
  ],
  en: [
    "Engineering Project Management",
    "PMP & Project Control",
    "Autodesk Revit Structure",
    "Primavera P6",
    "AutoCAD 2D",
    "Structural Design (SAP/SAFE)",
    "Team Leadership",
    "Engineering Drawing Review",
    "Quality & Safety Control"
  ]
};

export const uiStrings = {
  ar: {
    home: "الرئيسية",
    about: "عني",
    experience: "الخبرة",
    certs: "الشهادات",
    contact: "تواصل معي",
    consult: "تواصل معنا",
    viewProjects: "استكشف المشاريع",
    startProject: "ابدأ مشروعك الآن",
    vision: "الرؤية الهندسية المتكاملة",
    philosophyTitle: "الفلسفة الهندسية",
    philosophySub: "دمج الدقة الفنية بالبناء الرصين",
    philosophyText: "أؤمن أن كل مشروع هو تحدٍ هندسي فريد يتطلب توازناً دقيقاً بين الابتكار الإنشائي والعملانية الاقتصادية. خلال مسيرتي الممتدة لأكثر من 17 عاماً، كان هدفي دائماً بناء منشآت تتحدى الزمن وتخدم المجتمعات بكفاءة.",
    tags: ["دقة إحصائية", "إدارة رشيدة", "معايير دولية"],
    expTitle: "الخبرات المهنية",
    expSub: "سجل حافل بالانجازات في هندسة التشييد",
    certTitle: "الاعتمادات الدولية",
    certSub: "شهادات الخبرة & التحصيل العلمي",
    skillsTitle: "المهارات التقنية",
    skillsSub: "كفاءات هندسية",
    pmpTitle: "منهجية PMP العالمية",
    pmpQuote: "الالتزام بمعايير PMI ليس مجرد إجراء، بل هو ثقافة عمل تضمن تقليل المخاطر وتعظيم قيمة المشروع للمستثمر.",
    contactTitle: "تواصل معنا",
    contactSub: "دعنا نبني مستقبلاً مستداماً",
    email: "البريد الإلكتروني",
    call: "اتصال مباشر",
    location: "الموقع الرسمي",
    digital: "الاستفسارات الرقمية",
    chatTitle: "مساعدك الهندسي",
    chatPlaceholder: "اسألني عن خدماتنا...",
    chatWelcome: "مرحباً! أنا المساعد الرقمي للمهندس رشدي. كيف يمكنني مساعدتك في مشروعك القادم؟",
  },
  en: {
    home: "Home",
    about: "About",
    experience: "Experience",
    certs: "Certifications",
    contact: "Contact",
    consult: "Contact Us",
    viewProjects: "View Projects",
    startProject: "Start Your Project",
    vision: "Integrated Engineering Vision",
    philosophyTitle: "Engineering Philosophy",
    philosophySub: "Merging Precision with Solid Construction",
    philosophyText: "I believe every project is a unique engineering challenge requiring a delicate balance between structural innovation and economic practicality. Throughout my 17-year career, my goal has always been to build structures that stand the test of time.",
    tags: ["Statistical Precision", "Lean Management", "Global Standards"],
    expTitle: "Professional Experience",
    expSub: "A Proven Track Record in Construction Engineering",
    certTitle: "Global Accreditations",
    certSub: "Certificates of Experience & Education",
    skillsTitle: "Technical Skills",
    skillsSub: "Engineering Competencies",
    pmpTitle: "Global PMP Methodology",
    pmpQuote: "Adherence to PMI standards is not just a procedure; it is a work culture that ensures risk reduction and maximizing project value.",
    contactTitle: "Get in Touch",
    contactSub: "Let's Build a Sustainable Future",
    email: "Email Address",
    call: "Direct Call",
    location: "Official Location",
    digital: "Digital Inquiries",
    chatTitle: "Engineering Assistant",
    chatPlaceholder: "Ask me about our services...",
    chatWelcome: "Hello! I am Eng. Roshdy's digital assistant. How can I help you with your next project?",
  }
};
