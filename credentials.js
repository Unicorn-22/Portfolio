// ============================================================
//  credentials.js — ONE file for everything you've earned.
//  Three separate lists: AWARDS, BADGES, CERTIFICATES.
//  To add something new: copy an entry, change the fields, save.
//  Images live in assets/awards/, assets/badges/, assets/certificates/
//  Certificate categories: "AI & GenAI", "Internships", "Events", "Training"
// ============================================================

const AWARDS = [
  {
    image: "assets/awards/best-student-member-award.jpg",
    title: "Best Student Member Award",
    org: "The Institution of Engineers (India), Erode Local Center",
    date: "September 19, 2026",
    note: "Presented at the 59th Engineer's Day Celebrations, commemorating the 166th birth anniversary of Bharat Ratna Dr. M. Visvesvaraya."
  },
  {
    image: "assets/awards/thanga-mangai-gold-award.png",
    title: "Gold — Thanga Mangai Awards 2026",
    org: "Silambam",
    date: "2026",
    note: "Gold award for Silambam, presented in loving memory of Ms. Ranjeetha Parijatha, Bangalore."
  },
  {
    image: "assets/awards/kongu-nexovate-bluff-the-brain.png",
    title: "3rd Prize — Bluff the Brain",
    org: "NEXOVATE'25, Kongu Engineering College",
    date: "March 1, 2025",
    note: "Prize-winning entry at an inter-college technical event."
  }
];

const BADGES = [
  {
    image: "assets/badges/microsoft-responsible-ai-github-copilot.png",
    title: "Responsible AI with GitHub Copilot",
    org: "Microsoft",
    date: "July 26, 2026"
  },
  {
    image: "assets/badges/microsoft-intro-genai-agents.png",
    title: "Introduction to Generative AI and Agents",
    org: "Microsoft",
    date: "June 17, 2026"
  }
];

const CERTIFICATES = [
  { category: "AI & GenAI", image: "assets/certificates/anthropic-ai-fluency.png", title: "AI Fluency: Framework & Foundations", org: "Anthropic", date: "" },
  { category: "AI & GenAI", image: "assets/certificates/anthropic-claude-platform-101.png", title: "Claude Platform 101", org: "Anthropic", date: "" },
  { category: "AI & GenAI", image: "assets/certificates/guvi-google-ai-studio.jpg", title: "Build & Deploy Apps with Google AI Studio & Multilingual AI Speech App with Vibe Coding", org: "GUVI / HCL", date: "February 22, 2026" },
  { category: "AI & GenAI", image: "assets/certificates/freeacademy-local-rag.png", title: "Local RAG Beginners", org: "FreeAcademy.ai", date: "September 28, 2026" },
  { category: "AI & GenAI", image: "assets/certificates/aws-prompt-engineering.png", title: "Foundations of Prompt Engineering", org: "AWS Training & Certification", date: "August 10, 2026" },
  { category: "AI & GenAI", image: "assets/certificates/google-gemini-certified.png", title: "Gemini Certified Student", org: "Google for Education", date: "Issued 04/08/2026 · Valid through 04/08/2029" },
  { category: "AI & GenAI", image: "assets/certificates/csh-ai-agents-workshop.jpg", title: "CSH AI Agents Workshop", org: "Career Spike Hub", date: "September 6, 2026" },
  { category: "AI & GenAI", image: "assets/certificates/novitech-ai-masterclass.png", title: "30-Day MasterClass in Artificial Intelligence", org: "NoviTech R&D Private Limited", date: "June 22 – July 25, 2026" },

  { category: "Training", image: "assets/certificates/msme-java-programming.jpg", title: "Java Programming", org: "MSME Technology Development Centre (PPDC)", date: "June 3 – July 3, 2026" },

  { category: "Internships", image: "assets/certificates/novitech-ai-internship.png", title: "Internship — Artificial Intelligence", org: "NoviTech R&D Private Limited", date: "June 22 – July 22, 2026" },
  { category: "Internships", image: "assets/certificates/novitech-ml-internship.png", title: "Internship — Machine Learning", org: "NoviTech R&D Private Limited", date: "July 23 – August 23, 2026" },
  { category: "Training", image: "assets/certificates/india-space-lab-internship.png", title: "Summer Internship & Technical Training Program", org: "India Space Lab", date: "June 17 – July 6, 2026" },

  { category: "Events", image: "assets/certificates/icaser-2026-paper.jpg", title: "Paper Presentation — AI-Based Interview Practice System", org: "ICASER 2026, Al-Ameen Engineering College", date: "April 13, 2026" },
  { category: "Events", image: "assets/certificates/nandha-hackmatrix-2026.png", title: "HACKMATRIX 2026 — 24-Hour National Hackathon", org: "Nandha College of Technology", date: "September 24–25, 2026" } 
];
