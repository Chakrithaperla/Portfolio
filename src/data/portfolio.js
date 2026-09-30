export const portfolioData = {
  personal: {
    name: "PERLA CHAKRITHA",
    shortName: "Perla Chakritha",
    initials: "PC.",
    role: "Software Engineering Student | Full-Stack Developer",
    badge: "SOFTWARE ENGINEERING STUDENT",
    heroHeadline: "Hi, I'm",
    heroSubtitle: "I build modern full-stack applications and explore the intersection of software engineering, product development, and AI.",
    shortIntro: "Software engineering student pursuing B.Tech in Computer Science with a focus on Software Product Engineering. Experienced in building full-stack applications using React.js, Node.js, Express.js, and MongoDB, with experience in authentication, REST APIs, dashboards, and databases. Seeking opportunities to contribute to real-world software products.",
    aboutHeading: "Building with curiosity. Growing through code.",
    aboutDescription: "I’m a software engineering student pursuing B.Tech in Computer Science with a focus on Software Product Engineering. I enjoy building full-stack applications, working with APIs and databases, and continuously improving my problem-solving and development skills.",
    github: "https://github.com/Chakrithaperla",
    linkedin: "https://www.linkedin.com/in/perla-chakritha-b4504b380",
    email: "perlachakritha@gmail.com",
    phone: "+91 8500123526",
    phoneClean: "+918500123526",
    location: "India",
    // Replace with your photo path (e.g., '/profile.jpg' in the public folder)
    profileImage: "/profile.jpg",
  },
  
  aboutFeatures: [
    {
      number: "01",
      title: "FULL-STACK DEVELOPMENT",
      description: "Building responsive, modern frontend interfaces paired with resilient backend services using the MERN and React ecosystem.",
      accent: "from-purple-500 to-indigo-500",
      glowColor: "rgba(124, 58, 237, 0.4)",
    },
    {
      number: "02",
      title: "BACKEND & APIs",
      description: "Designing robust RESTful API architectures, JWT-based secure authentication, and optimized database models with MongoDB and PostgreSQL.",
      accent: "from-indigo-500 to-blue-500",
      glowColor: "rgba(59, 130, 246, 0.4)",
    },
    {
      number: "03",
      title: "PRODUCT ENGINEERING",
      description: "Focusing on end-to-end software product lifecycles, user flows, automated subscription mechanics, and real-world system resilience.",
      accent: "from-cyan-400 to-neon-lime",
      glowColor: "rgba(217, 255, 114, 0.4)",
    },
  ],

  skillCategories: [
    {
      name: "Languages",
      skills: ["Python", "Java", "JavaScript"]
    },
    {
      name: "Frontend",
      skills: ["HTML", "CSS", "React", "React Router", "Recharts"]
    },
    {
      name: "Backend",
      skills: ["Node.js", "Express.js", "REST APIs", "Axios"]
    },
    {
      name: "Databases",
      skills: ["MongoDB", "Mongoose", "NoSQL"]
    },
    {
      name: "Authentication & Tools",
      skills: ["JWT", "Bcrypt", "NextAuth.js", "Git", "GitHub", "VS Code", "Nodemailer"]
    }
  ],

  projects: [
    {
      id: "routemate",
      number: "01",
      title: "RouteMate",
      category: "Capstone Project / Full-Stack Travel Social Platform",
      tagline: "Full-Stack Travel Social Platform",
      description: "Developed a full-stack travel social platform for planning and sharing travel experiences.",
      features: [
        "Authenticated user workflows",
        "Travel content functionality",
        "REST APIs",
        "MongoDB persistence",
        "AI-powered integration"
      ],
      techStack: [
        "React.js",
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "JWT",
        "REST APIs",
        "OpenRouter API"
      ],
      contributions: [
        "Frontend and backend development",
        "JWT-based authentication",
        "REST API workflows",
        "MongoDB integration using Mongoose",
        "OpenRouter API integration"
      ],
      github: "https://github.com/Chakrithaperla/RouteMate",
      live: null,
      featured: true,
      badge: "Capstone Project"
    },
    {
      id: "pharmaeasy",
      number: "02",
      title: "PharmaEasy",
      category: "Pharmacy Subscription / Auto-Refill System",
      tagline: "Automated Medicine Auto-Refill & Subscription Platform",
      description: "Developed a subscription and auto-refill system for recurring medicine orders with automated scheduling, payment workflows, notifications, and dashboard management.",
      features: [
        "Automated medicine refill scheduling",
        "Subscription lifecycle management",
        "Payment-method workflows & validation",
        "Real-time notifications & delivery address management",
        "Comprehensive dashboard management"
      ],
      techStack: [
        "React.js",
        "Next.js",
        "PostgreSQL",
        "Prisma",
        "REST APIs",
        "Node.js"
      ],
      contributions: [
        "Subscription UI",
        "Authentication",
        "Subscription CRUD workflows",
        "Validation",
        "Delivery address management",
        "Payment-method management",
        "REST APIs",
        "Prisma database models for users and subscriptions"
      ],
      github: null,
      live: "https://pharma-easy-refill-system.vercel.app/",
      featured: true,
      badge: "Production Deployment"
    }
  ],

  education: {
    timeline: [
      {
        year: "2025 — 2029",
        degree: "B.Tech in Computer Science",
        specialization: "Software Product Engineering",
        institution: "Kalasalingam University",
        program: "Kalvium's UG Program in CSE (Software Product Engineering)",
        status: "Current",
        description: "Intensive industry-aligned software engineering curriculum emphasizing production codebases, real-world software product engineering, system design, and full-stack web architectures."
      }
    ],
    academics: [
      {
        level: "HSC / 12th",
        score: "86%",
        accent: "from-purple-500 to-indigo-500"
      },
      {
        level: "SSLC / 10th",
        score: "89.83%",
        accent: "from-blue-500 to-neon-lime"
      }
    ]
  },

  beyondCode: [
    {
      id: 1,
      text: "Participated in coding challenges and problem-solving assignments focused on real-world use cases.",
      iconName: "Code2",
      badge: "Problem Solving"
    },
    {
      id: 2,
      text: "Built and maintained multiple academic projects using JavaScript, Node.js, Express.js, and MongoDB, sharing them through GitHub repositories.",
      iconName: "GitBranch",
      badge: "Open Source & Academic"
    },
    {
      id: 3,
      text: "Actively involved in collaborative peer learning, code reviews, and team-based project development at Kalvium.",
      iconName: "Users",
      badge: "Collaboration & Peer Review"
    },
    {
      id: 4,
      text: "Exploring backend development, learning system design fundamentals, and improving problem-solving skills through coding practice.",
      iconName: "Layers",
      badge: "Continuous Learning"
    }
  ]
};
