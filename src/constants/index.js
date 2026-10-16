export const personalInfo = {
    name: "Ayush Sahu",
    role: "Software Engineer & AI Engineer",
    subRole: "Full-Stack Architectures · Deep Learning Systems",
    location: "Mumbai, India",
    coordinates: "19.0760° N, 72.8777° E",
    email: "ayushsahu1430@gmail.com",
    availability: "Available for Software & AI Engineering Roles",
    manifesto: [
        {
            id: "01",
            heading: "Full-Stack Engineering",
            text: "Architecting scalable MERN platforms, real-time microservices, and high-throughput systems engineered for reliability and sub-second latency.",
        },
        {
            id: "02",
            heading: "Applied AI & Deep Learning",
            text: "Developing clinical 1D CNN-LSTM diagnostic models with Grad-CAM explainability, alongside context-aware LangChain and FAISS retrieval pipelines.",
        },
    ],
};

export const navLinks = [
    { name: "About", link: "#about" },
    { name: "Work", link: "#work" },
    { name: "Experience", link: "#experience" },
    { name: "Skills", link: "#skills" },
    { name: "Contact", link: "#contact" },
];

export const heroTags = [
    {
        id: "tag-1",
        label: "Systems & Architecture",
        detail: "MERN · Node.js · Microservices",
        side: "left",
    },
    {
        id: "tag-2",
        label: "Real-Time Telemetry",
        detail: "WebSockets · High-Throughput APIs",
        side: "left",
    },
    {
        id: "tag-3",
        label: "Applied Deep Learning",
        detail: "1D CNN-LSTM · Explainable Grad-CAM",
        side: "right",
    },
    {
        id: "tag-4",
        label: "Semantic AI Pipelines",
        detail: "LangChain · FAISS · Vector Search",
        side: "right",
    },
];

export const socialLinks = [
    {
        name: "GitHub",
        url: "https://github.com/Ayush2649",
        handle: "Ayush2649",
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ayush-sahu1430/",
        handle: "ayush-sahu1430",
    },
    {
        name: "LeetCode",
        url: "https://leetcode.com/u/ayush___4911/",
        handle: "ayush___4911",
    },
    {
        name: "Email",
        url: "mailto:ayushsahu1430@gmail.com",
        handle: "ayushsahu1430@gmail.com",
    },
];

// Verified authentic project records organized for editorial showcase
export const projectsData = {
    flagship: [
        {
            id: "satat",
            number: "01",
            title: "SATAT",
            subtitle: "Personal Wellness & Productivity Operating System",
            category: "Full-Stack System · Multi-Model AI",
            role: "Founder & Lead Engineer",
            status: "Live in Production",
            description: "A personal operating system connecting productivity, fitness, nutrition, and context-aware AI.",
            bullets: [
                "Built a Next.js and TypeScript application connecting tasks, workout tracking, nutrition, and AI assistance.",
                "Developed a two-stage meal-analysis pipeline using Gemini vision, a deterministic food database, and DeepSeek estimation.",
                "Built Orbit, an AI companion that uses task, workout, and nutrition context to provide relevant assistance.",
                "Implemented a NextAuth-to-Firebase custom-token bridge and granular Firestore security rules."
            ],
            stack: [
                "Next.js 14",
                "TypeScript",
                "Tailwind CSS",
                "Firebase / Firestore",
                "Gemini 2.0",
                "Groq SDK",
                "DeepSeek",
                "Radix UI",
                "Web Push",
                "Vitest"
            ],
            links: {
                live: "https://daily-os-opal-kappa.vercel.app/",
                github: "https://github.com/Ayush2649/SATAT"
            },
            badge: "Founder & Lead Engineer",
            accentColor: "#3A6351"
        },
        {
            id: "solution-library",
            number: "02",
            title: "Solution Library",
            subtitle: "Enterprise Reusable Solution & Knowledge Platform",
            category: "Enterprise System · Knowledge Architecture",
            company: "Contentstack",
            role: "Software Engineering Intern",
            status: "Internal Production",
            description: "A centralized internal engineering platform engineered to streamline the creation, taxonomy, discovery, and automated reuse of production-grade architectural solutions across teams.",
            bullets: [
                "Eliminated repetitive boilerplate development by establishing a discoverable, version-controlled library of verified engineering solutions.",
                "Designed structured solution schemas enabling cross-stack discovery and rapid technical onboarding across developer pods.",
                "Delivered a verified 30%+ engineering productivity improvement across participating development groups.",
                "Integrated automated taxonomy and intelligent retrieval to surface relevant architectural blueprints during sprint scoping."
            ],
            stack: [
                "React",
                "AWS Lambda",
                "Contentstack APIs",
                "REST Architecture",
                "Microservices",
                "Design Systems"
            ],
            metric: "30%+ Productivity Gain",
            badge: "Contentstack · Enterprise",
            isInternal: true,
            accentColor: "#141413"
        },
        {
            id: "arrhythmia",
            number: "03",
            title: "Explainable Arrhythmia Detection",
            subtitle: "Clinical-Grade 1D CNN–LSTM with Grad-CAM Visual Explainability",
            category: "Deep Learning Research · Healthcare AI",
            role: "Lead Researcher & Engineer",
            status: "Open Source Research",
            description: "An interpretable deep learning diagnostic system designed to automate cardiac arrhythmia detection from raw time-series ECG telemetry with transparent clinical heatmaps.",
            bullets: [
                "Engineered a hybrid 1D CNN–LSTM architecture capturing both localized morphological anomalies and temporal cardiac sequence dependencies.",
                "Trained and evaluated on the benchmark MIT-BIH Arrhythmia Database across standardized AAMI cardiac beat categories.",
                "Integrated 1D Grad-CAM (Gradient-weighted Class Activation Mapping) to highlight exact P-Q-R-S-T wave segments driving predictions.",
                "Evaluated comprehensively across precision, recall, F1-score, and accuracy, documenting morphological edge-case boundaries."
            ],
            stack: [
                "Python",
                "PyTorch",
                "1D CNN-LSTM",
                "Grad-CAM",
                "MIT-BIH Database",
                "NumPy",
                "Matplotlib"
            ],
            links: {
                github: "https://github.com/Ayush2649/Improving-Clinical-Usability-of-Automated-Arrhythmia-Detection-with-an-Explainable-1D-CNN"
            },
            badge: "Deep Learning Research",
            image: "/images/arrthmiya.png",
            accentColor: "#D95338"
        }
    ],
    additional: [
        {
            id: "cs-to-cs",
            number: "04",
            title: "CS-to-CS Migration Tool",
            company: "Contentstack",
            category: "Infrastructure & Data Tooling",
            description: "High-throughput data migration pipeline facilitating reliable, automated content transfer across isolated stacks and geographic cloud regions.",
            bullets: [
                "Automated migration of content assets and complex nested content models between disparate Contentstack cloud regions.",
                "Engineered robust schema mapping and validation logic ensuring 100% transfer integrity across multi-tiered taxonomies.",
                "Successfully executed migrations across 20+ enterprise stacks encompassing 20,000+ production content entries with zero data corruption."
            ],
            stack: ["Node.js", "Contentstack Management API", "REST APIs", "Async Queues", "JSON Schema Validation"],
            metric: "20+ Stacks · 20,000+ Entries",
            isInternal: true
        },
        {
            id: "sap-smartedit",
            number: "05",
            title: "SAP SmartEdit Connector",
            company: "Contentstack",
            category: "Enterprise Integration Engine",
            description: "Automated extraction, transformation, validation, and loading (ETL) pipeline migrating enterprise commerce content into headless CMS architectures.",
            bullets: [
                "Engineered bidirectional ETL workflows extracting structured components from SAP SmartEdit and transforming them for headless schemas.",
                "Established reusable migration pipelines reducing manual content onboarding from days to automated script runs.",
                "Validated and executed 7+ production migration workflows transforming 10,000+ mission-critical commerce entries."
            ],
            stack: ["Node.js", "ETL Pipelines", "Contentstack APIs", "Data Transformation", "Enterprise Integration"],
            metric: "7+ Workflows · 10,000+ Entries",
            isInternal: true
        }
    ]
};

// Preserved for backwards compatibility
export const authenticProjects = projectsData.flagship;