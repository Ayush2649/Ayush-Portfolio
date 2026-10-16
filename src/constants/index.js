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

// Verified authentic projects
export const authenticProjects = [
    {
        id: "statup",
        title: "StatUp — AI Startup Insights Platform",
        category: "Full Stack & Machine Learning",
        tagline: "Real-time analytics and predictive intelligence for startup ecosystems.",
        summary: "An intelligent platform analyzing market metrics, funding trends, and ecosystem health with semantic classification.",
        tags: ["React", "Node.js", "AI Analytics", "Tailwind CSS"],
        imgPath: "/images/statup.png",
        githubUrl: "https://github.com/Ayush2649",
        featured: true,
    },
    {
        id: "arrhythmia",
        title: "Automated Arrhythmia Detection with Explainable 1D CNN",
        category: "Deep Learning & Healthcare AI",
        tagline: "Clinical-grade ECG interpretation using hybrid 1D CNN–LSTM with Grad-CAM.",
        summary: "Developed an explainable deep learning pipeline for automated cardiac arrhythmia classification from raw ECG signals with heatmaps for clinical validation.",
        tags: ["Python", "PyTorch", "1D CNN-LSTM", "Grad-CAM", "Jupyter"],
        imgPath: "/images/arrthmiya.png",
        githubUrl: "https://github.com/Ayush2649/Improving-Clinical-Usability-of-Automated-Arrhythmia-Detection-with-an-Explainable-1D-CNN",
        featured: true,
    },
    {
        id: "ryde",
        title: "Ryde — On-Demand Ride Platform",
        category: "Full Stack MERN & Distributed Systems",
        tagline: "Uber-scale ride hailing with live telemetry and Google Maps integration.",
        summary: "Engineered a full-featured mobility platform with real-time driver tracking, WebSocket-based ride matching, JWT security, and responsive UI.",
        tags: ["React", "Express.js", "MongoDB", "WebSockets", "Google Maps API"],
        imgPath: "/images/project1.png",
        githubUrl: "https://github.com/Ayush2649/Ryde",
        featured: true,
    },
    {
        id: "netflix-gpt",
        title: "Netflix-GPT — AI Content Recommendation Engine",
        category: "Frontend & Applied AI",
        tagline: "Cinematic streaming UI augmented with natural language movie search.",
        summary: "Combined TMDB API with OpenAI GPT completion for conversational movie discovery, multilingual support, and responsive media trays.",
        tags: ["React", "Redux Toolkit", "OpenAI API", "Tailwind CSS"],
        imgPath: "/images/project2.png",
        githubUrl: "https://github.com/Ayush2649/Netflix-GPT",
        featured: false,
    },
    {
        id: "smart-faq",
        title: "Smart FAQ System using LangChain & FAISS",
        category: "Generative AI & Semantic Retrieval",
        tagline: "Interactive retrieval-augmented generation engine with HuggingFace embeddings.",
        summary: "Constructed an intelligent FAQ querying system utilizing LangChain, vector store FAISS, and custom knowledge base ingestion for contextual question answering.",
        tags: ["LangChain", "FAISS", "HuggingFace", "Python", "RL Knowledge Base"],
        imgPath: "/images/project3.png",
        githubUrl: "https://github.com/Ayush2649/-Smart-FAQ-System-using-LangChain-with-Reinforcement-Learning-Knowledge-Base-",
        featured: false,
    },
];