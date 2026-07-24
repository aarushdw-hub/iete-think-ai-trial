import { 
  TimelineItem, 
  ProblemStatement, 
  PrizeCard, 
  FeePlan, 
  ContactPerson, 
  FAQItem, 
  RuleChecklistItem 
} from '../types';

export const EVENT_DETAILS = {
  name: "THINK AI 3.0",
  tagline: "AI Innovation Competition",
  organizer: "IETE Student Forum (ISF)",
  department: "Department of Electronics & Computer Science Engineering (ECS)",
  institution: "Thakur College of Engineering & Technology (TCET)",
  location: "TCET Campus, Kandivali East, Mumbai",
  totalPrizePool: "₹7,000",
  eventDate: "2026-08-28T09:00:00", // Standard competition date countdown
  registrationDeadline: "2026-08-25T23:59:59",
  googleFormUrl: "https://forms.gle/think-ai-3-0-tcet-iete",
  upiId: "iete.tcet@upi",
  upiName: "IETE TCET Student Forum",
};

export const ABOUT_HIGHLIGHTS = [
  {
    title: "AI Innovation Hackfest",
    description: "An elite venue to showcase cutting-edge Artificial Intelligence, Machine Learning, and Computer Vision solutions tackling real-world domain challenges.",
    icon: "BrainCircuit",
    color: "from-sky-500 to-blue-600"
  },
  {
    title: "Build & Deploy",
    description: "Develop working prototypes, functional AI models, web/mobile frontends, or hardware-software embedded AI integrations.",
    icon: "Code2",
    color: "from-indigo-500 to-purple-600"
  },
  {
    title: "Offline Grand Presentation",
    description: "Pitch your AI models directly to esteemed industry jury panels and senior academicians at TCET Campus.",
    icon: "Presentation",
    color: "from-purple-500 to-pink-600"
  },
  {
    title: "Team Collaboration",
    description: "Compete as a solo innovator or form collaborative teams of up to 4 members to brainstorm, engineer, and win.",
    icon: "Users",
    color: "from-emerald-500 to-teal-600"
  }
];

export const TIMELINE_EVENTS: TimelineItem[] = [
  {
    id: "step-1",
    title: "Registration Begins",
    date: "August 01, 2026",
    time: "10:00 AM IST",
    description: "Online portal opens for team registration and fee payment.",
    location: "Online Portal",
    status: "completed",
    iconName: "UserPlus"
  },
  {
    id: "step-2",
    title: "Problem Statements Release",
    date: "August 10, 2026",
    time: "12:00 PM IST",
    description: "Detailed problem tracks and challenge domains officially published.",
    location: "Official Portal & WhatsApp Group",
    status: "active",
    iconName: "FileText"
  },
  {
    id: "step-3",
    title: "Abstract & Code Submission Deadline",
    date: "August 25, 2026",
    time: "11:59 PM IST",
    description: "Submit project abstract, pitch deck deck, and GitHub repository URL.",
    location: "Online Portal Submission",
    status: "upcoming",
    iconName: "UploadCloud"
  },
  {
    id: "step-4",
    title: "Presentation Day at TCET",
    date: "August 28, 2026",
    time: "09:30 AM - 04:00 PM IST",
    description: "Offline prototype demonstration and jury Q&A session at TCET Campus.",
    location: "Seminar Hall / ECS Labs, TCET",
    status: "upcoming",
    iconName: "Presentation"
  },
  {
    id: "step-5",
    title: "Winner Announcement & Valedictory",
    date: "August 28, 2026",
    time: "04:30 PM IST",
    description: "Prize distribution ceremony, certificates award, and closing address.",
    location: "Auditorium, TCET",
    status: "upcoming",
    iconName: "Trophy"
  }
];

export const PRIZES: PrizeCard[] = [
  {
    rank: "1st Position",
    title: "Gold Winner",
    amount: 4000,
    currency: "₹",
    badgeText: "CHAMPION",
    gradient: "from-amber-400 via-amber-500 to-yellow-600",
    borderGlow: "rgba(245, 158, 11, 0.5)",
    iconColor: "text-amber-400",
    trophyType: "gold",
    benefits: [
      "₹4,000 Cash Prize",
      "Gold Winner Trophy & Shield",
      "Merit Certificate with Distinction",
      "AICTE Activity Points (10 Points)",
      "Direct Internship Referral Opportunities",
      "Featured on TCET & IETE Official Handles"
    ]
  },
  {
    rank: "2nd Position",
    title: "Silver Runner-Up",
    amount: 2000,
    currency: "₹",
    badgeText: "RUNNER UP",
    gradient: "from-slate-300 via-slate-400 to-slate-500",
    borderGlow: "rgba(203, 213, 225, 0.5)",
    iconColor: "text-slate-200",
    trophyType: "silver",
    benefits: [
      "₹2,000 Cash Prize",
      "Silver Runner-Up Trophy",
      "Merit Certificate of Excellence",
      "AICTE Activity Points (10 Points)",
      "Mentorship & Project Incubation Support",
      "Special Recognition Certificate"
    ]
  },
  {
    rank: "3rd Position",
    title: "Bronze Winner",
    amount: 1000,
    currency: "₹",
    badgeText: "2ND RUNNER UP",
    gradient: "from-amber-700 via-amber-800 to-amber-900",
    borderGlow: "rgba(180, 83, 9, 0.5)",
    iconColor: "text-amber-600",
    trophyType: "bronze",
    benefits: [
      "₹1,000 Cash Prize",
      "Bronze Trophy & Badge",
      "Merit Certificate of Achievement",
      "AICTE Activity Points (10 Points)",
      "Technical Portfolio Endorsement",
      "Participation Goodies"
    ]
  }
];

export const FEE_PLANS: FeePlan[] = [
  {
    category: "IETE Member (Solo)",
    teamSize: "1 Person",
    price: 80,
    perPersonRate: "₹80 / member",
    isIete: true,
    features: [
      "Exclusive IETE Discount",
      "Access to all AI Tracks",
      "Official AICTE Points Certificate",
      "1-on-1 Mentorship slot",
      "Refreshments on Presentation Day"
    ]
  },
  {
    category: "IETE Member Team (2-4 Members)",
    teamSize: "2 to 4 Members",
    price: 150,
    perPersonRate: "Starting ₹37.5 / member",
    isIete: true,
    popular: true,
    features: [
      "Best Value for IETE Members",
      "Up to 4 team members included",
      "Participation Certificates for all members",
      "AICTE Activity Points for all members",
      "Access to Jury Review & Feedback",
      "Offline Presentation pass at TCET"
    ]
  },
  {
    category: "Non-IETE (Solo)",
    teamSize: "1 Person",
    price: 100,
    perPersonRate: "₹100 / member",
    isIete: false,
    features: [
      "Open to all Engineering & Diploma students",
      "Access to all AI Tracks",
      "Official AICTE Points Certificate",
      "Certificate of Participation",
      "Refreshments on Presentation Day"
    ]
  },
  {
    category: "Non-IETE Team (2-4 Members)",
    teamSize: "2 to 4 Members",
    price: 200,
    perPersonRate: "Starting ₹50 / member",
    isIete: false,
    features: [
      "Ideal for Cross-College & Dept Teams",
      "Up to 4 team members included",
      "Individual Participation Certificates",
      "AICTE Activity Points for all members",
      "Offline Presentation pass at TCET",
      "Networking with Industry Judges"
    ]
  }
];

export const WHY_PARTICIPATE_REASONS = [
  {
    title: "₹7,000 Cash Prize Pool",
    desc: "Substantial rewards for top 3 podium teams with trophies and merit shields.",
    icon: "Coins",
    highlight: "₹7000 Pool"
  },
  {
    title: "Official AICTE Points",
    desc: "Earn valid AICTE Activity Points essential for engineering degree fulfillment.",
    icon: "Award",
    highlight: "10 Points"
  },
  {
    title: "Verified Certificates",
    desc: "Get hardcopy and digital certificates issued by IETE Student Forum & TCET.",
    icon: "FileCheck",
    highlight: "IETE Verified"
  },
  {
    title: "Industry Exposure",
    desc: "Present your project in front of veteran AI engineers, startup founders, and professors.",
    icon: "Globe2",
    highlight: "Expert Jury"
  },
  {
    title: "Networking & Peer Learning",
    desc: "Connect with tech-minded coders across TCET and top colleges in Mumbai.",
    icon: "Network",
    highlight: "200+ Developers"
  },
  {
    title: "CV & Portfolio Booster",
    desc: "Add a prestigious national-level hackathon win / participation to your resume.",
    icon: "Sparkles",
    highlight: "Resume Edge"
  }
];

export const PROBLEM_STATEMENTS: ProblemStatement[] = [
  {
    id: "ps-1",
    title: "Generative AI for Healthcare & Diagnostics",
    category: "Generative AI & HealthTech",
    description: "Develop AI models to analyze medical imagery, synthesize patient report summaries, or construct intelligent assistant bots for localized medical guidance.",
    difficulty: "Advanced",
    technologies: ["PyTorch", "LLMs/Gemini", "OpenCV", "FastAPI", "React"],
    deliverables: ["Working Web App", "AI Pipeline Notebook", "PPT Pitch"]
  },
  {
    id: "ps-2",
    title: "Smart Campus & Intelligent Traffic / Infrastructure",
    category: "IoT & Smart Cities",
    description: "Build computer vision & IoT powered smart monitoring systems for campus safety, automated parking, smart energy optimization, or real-time traffic flow control.",
    difficulty: "Intermediate",
    technologies: ["YOLOv8", "OpenCV", "TensorFlow Lite", "MQTT", "Node.js"],
    deliverables: ["Hardware/Simulated Prototype", "Detection Demo", "PPT Pitch"]
  },
  {
    id: "ps-3",
    title: "AI-Powered Fraud Detection & FinTech Security",
    category: "FinTech & Cybersecurity",
    description: "Create machine learning pipelines capable of detecting anomalous financial transactions, deepfake document forgery, or automated phishing defense.",
    difficulty: "Intermediate",
    technologies: ["Scikit-Learn", "XGBoost", "Python", "Flask", "TailwindCSS"],
    deliverables: ["Trained Model Endpoint", "Dashboard UI", "Evaluation Metrics"]
  },
  {
    id: "ps-4",
    title: "Adaptive Learning & Accessibility for Differently Abled",
    category: "EdTech & Assistive AI",
    description: "Design AI tools providing real-time sign language translation, audio-tactile screen readers, or personalized adaptive learning curves for neurodivergent students.",
    difficulty: "All Levels",
    technologies: ["MediaPipe", "Speech Recognition", "Web APIs", "React"],
    deliverables: ["Functional Accessible UI", "Live Demo Video", "PPT Pitch"]
  },
  {
    id: "ps-5",
    title: "Open Innovation Track (Any AI Solution)",
    category: "Open Innovation",
    description: "Have an original AI idea? Build any innovative application in NLP, Computer Vision, Robotics, Multi-modal AI, or Sustainability powered by AI.",
    difficulty: "All Levels",
    technologies: ["Open Choice AI Stack", "Python/JS", "Cloud APIs"],
    deliverables: ["Working Prototype", "GitHub Repo", "PPT Pitch"]
  }
];

export const CONTACT_PERSONS: ContactPerson[] = [
  {
    role: "Student Chairperson",
    name: "Arya Singh",
    title: "Chairperson, IETE Student Forum (ISF)",
    phone: "+91 98765 43210",
    email: "chairperson.iete@tcetmumbai.in",
    whatsapp: "https://wa.me/919876543210?text=Hi%20Arya,%20I%20have%20a%20query%20regarding%20Think%20AI%203.0"
  },
  {
    role: "Vice Chairperson",
    name: "Rohan Varma",
    title: "Vice Chairperson, IETE Student Forum (ISF)",
    phone: "+91 98200 12345",
    email: "vicechairperson.iete@tcetmumbai.in",
    whatsapp: "https://wa.me/919820012345?text=Hi%20Rohan,%20I%20have%20a%20query%20regarding%20Think%20AI%203.0"
  },
  {
    role: "Faculty Coordinator",
    name: "Dr. Payal Shah",
    title: "Associate Professor, Dept. of ECS, TCET",
    phone: "+91 98190 00000",
    email: "payal.shah@tcetmumbai.in",
    whatsapp: "https://wa.me/919819000000"
  },
  {
    role: "ISF Technical Lead",
    name: "Devanshi Mehta",
    title: "Technical Head, ISF TCET",
    phone: "+91 97690 11223",
    email: "techhead.iete@tcetmumbai.in",
    whatsapp: "https://wa.me/919769011223"
  }
];

export const RULES_CHECKLIST: RuleChecklistItem[] = [
  {
    id: "rule-1",
    title: "Team Formation",
    description: "Teams can consist of 1 to 4 members. Cross-department and cross-year teams within engineering/diploma are permitted.",
    category: "eligibility",
    required: true
  },
  {
    id: "rule-2",
    title: "College ID Card Mandatory",
    description: "All participants must carry valid physical or digital college ID cards on the offline presentation day at TCET.",
    category: "eligibility",
    required: true
  },
  {
    id: "rule-3",
    title: "Original AI Implementation",
    description: "Projects must involve authentic AI/ML code or pipeline logic. Pre-built templates are allowed only for base frameworks.",
    category: "submission",
    required: true
  },
  {
    id: "rule-4",
    title: "GitHub & PPT Submission",
    description: "Final submission must include a public GitHub repository link containing code and a standard 7-slide PPT presentation.",
    category: "submission",
    required: true
  },
  {
    id: "rule-5",
    title: "Offline Presence at TCET",
    description: "At least 1 representative from the team MUST be present physically at TCET campus for the jury presentation round.",
    category: "presentation",
    required: true
  },
  {
    id: "rule-6",
    title: "Code of Conduct & Ethics",
    description: "Plagiarism, unsportsmanlike behavior, or harmful AI deployment will lead to immediate disqualification.",
    category: "conduct",
    required: true
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    category: "General",
    question: "Who is eligible to participate in Think AI 3.0?",
    answer: "Any diploma, undergraduate, or postgraduate student currently enrolled in engineering, IT, Computer Science, ECS, EXTC, or related STEM domains can participate."
  },
  {
    id: "faq-2",
    category: "Registration",
    question: "What is the difference between IETE Member and Non-IETE Member fees?",
    answer: "IETE Student Forum registered members enjoy discounted registration fees (₹80 solo / ₹150 for team). Non-IETE participants pay ₹100 solo or ₹200 for a team of 2-4 members."
  },
  {
    id: "faq-3",
    category: "Event Format",
    question: "Is Think AI 3.0 completely offline or online?",
    answer: "Project preparation and abstract submission happen online. The final presentation and jury evaluation round will take place OFFLINE at Thakur College of Engineering & Technology (TCET), Mumbai."
  },
  {
    id: "faq-4",
    category: "AICTE Points",
    question: "Will all participants receive AICTE Activity Points certificates?",
    answer: "Yes! All verified participants who submit a valid project abstract and present their solution on Presentation Day will receive official certificates carrying AICTE Activity Points."
  },
  {
    id: "faq-5",
    category: "Hardware / Software",
    question: "Can we use pre-trained models like Gemini, GPT-4, or YOLO?",
    answer: "Yes! Utilizing pre-trained foundation models or APIs is encouraged, provided you build a custom application, fine-tuning layer, unique prompt pipeline, or frontend/hardware interface around it."
  },
  {
    id: "faq-6",
    category: "Payment",
    question: "How do I confirm my entry fee payment?",
    answer: "Scan the official IETE UPI QR code on our portal, complete the transaction via GPay/PhonePe/Paytm, note down the UPI Reference/UTR Number, and upload the screenshot in the registration form."
  }
];

export const STATS = [
  { value: "₹7,000", label: "Prize Pool", icon: "Trophy" },
  { value: "10", label: "AICTE Points", icon: "Award" },
  { value: "200+", label: "Expected Coders", icon: "Users" },
  { value: "5+", label: "Problem Tracks", icon: "Sparkles" },
  { value: "3rd", label: "Edition (3.0)", icon: "Flame" }
];
