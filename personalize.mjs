import fs from 'fs';

// 1. Personalize Home.jsx
let home = fs.readFileSync('src/pages/Home.jsx', 'utf8');
home = home.replace('A high-performance real-time data visualization engine built for low-latency network monitoring.', 'Engineered a full-stack, multi-tenant school platform used across admin workflows with robust architecture.');
home = home.replace('Secure decentralized identity layer for enterprise-grade authentication systems.', 'Govt Project: Delivered a role-based digital platform for a sports association.');
home = home.replace('An editorial-first design system component library focused on high-density typography.', 'CareConnect: Cross-platform mobile app (Flutter) letting families book verified caregivers.');
home = home.replace('Automated DevOps pipeline optimizer using machine learning to predict resource allocation spikes.', 'Built scalable backend architectures using AWS, Node.js, and integrating Stripe payments.');
home = home.replace('Rust', 'Next.js');
home = home.replace('WebGPU', 'TypeScript');
home = home.replace('System Design', 'Full-stack Platform');
home = home.replace('CloudFlow', 'API Architecture');
fs.writeFileSync('src/pages/Home.jsx', home);


// 2. Personalize ContactStitch.jsx (which serves /about and /contact)
let about = fs.readFileSync('src/pages/Contact.jsx', 'utf8');
about = about.replace('Currently pursuing my BTech... specialize in the intersection of backend scalability and refined user interfaces.', 'Pursuing B.Tech in CSE at LPU, Punjab. I bridge the gap between technical rigor (C++, Java, Golang) and elegant solutions (React, Flutter).');

// Timeline 2024
about = about.replace('The Final Manifest', 'HSTA & CareConnect');
about = about.replace('Developing an AI-driven editorial platform for independent researchers. Focusing on semantic search and minimalist data visualization.', 'Delivered a government sports project (HSTA) and built CareConnect, a Flutter application for caregiver bookings with Stripe & AWS.');
about = about.replace('Research Paper Publication: "Humanizing Data Structures through Aesthetic UI Layers"', 'MERN Stack Development Certification from CipherSchools.');

// Timeline 2023
about = about.replace('Architectural Shift', 'Full Stack Evolution');
about = about.replace('Internship at a leading tech firm. Transitioned from front-end focuses to robust backend systems architecture and cloud deployments.', 'Engineered a vast School Management platform resolving critical frontend-backend boundaries and implementing Firebase Push Notifications.');
about = about.replace('Full-stack Developer @ Nexus Labs. Engineered a scalable microservices dashboard.', 'Secured 15th rank in Code-A-thon & 12th in Binary-Bits Hackathon.');

// Timeline 2022
about = about.replace('The Code as Craft', 'Core Algorithms & Java');
about = about.replace('Deep dive into C++ and Java performance tuning. Realized that efficient code is a prerequisite for elegant user interfaces.', 'Completed Core Java Bootcamp (Zero to Hero) on Udemy. Focused heavily on Data Structures, C++ STL, and problem solving.');
about = about.replace('Top 5% in National Competitive Coding Hackathon. Optimized Dijkstra\'s for real-time traffic flux.', 'Consistently maintained a high GPA while establishing strong structural knowledge in algorithms.');

// Resume Viewer Integration
about = about.replace(`import React from 'react';\nimport { motion }`, `import React, { useState } from 'react';\nimport { motion } \nimport ResumeViewer from '../components/ResumeViewer';`);
about = about.replace(`const ContactStitch = () => {\n  return (`, `const ContactStitch = () => {\n  const [isResumeOpen, setIsResumeOpen] = useState(false);\n  return (\n    <> <ResumeViewer isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} /> `);

// Adjust the end tag
about = about.replace(`</motion.section>\n    </>\n  );`, `</motion.section>\n    </>\n    </>\n  );`);

// Update "Download Resume" button
about = about.replace(
  `<button className="bg-primary text-white px-12 py-5 rounded-full font-headline font-bold text-lg hover:scale-105 transition-transform flex items-center gap-4">
                            Download Resume`, 
  `<button onClick={() => setIsResumeOpen(true)} className="bg-primary text-white px-12 py-5 rounded-full font-headline font-bold text-lg hover:scale-105 transition-transform flex items-center gap-4">
                            View Resume`
);
about = about.replace('href="mailto:hello@digitalcurator.tech"', 'href="mailto:lalit.builds@gmail.com"');
about = about.replace('hello@digitalcurator.tech', 'lalit.builds@gmail.com');
about = about.replace('github.com/curator', 'github.com/Geltrax69');
about = about.replace('/in/craftandcode', 'linkedin.com/in/lalitsingh69');

fs.writeFileSync('src/pages/Contact.jsx', about);

// Update hrefs everywhere to real targets instead of #
let navPages = ['src/pages/Home.jsx', 'src/pages/Work.jsx', 'src/pages/Skills.jsx', 'src/pages/Contact.jsx'];
navPages.forEach(p => {
  let text = fs.readFileSync(p, 'utf8');
  text = text.replace(/<a([^>]*)href="#"([^>]*)>Github<\/a>/g, `<a$1href="https://github.com/Geltrax69" target="_blank" rel="noreferrer"$2>Github</a>`);
  text = text.replace(/<a([^>]*)href="#"([^>]*)>LinkedIn<\/a>/g, `<a$1href="https://linkedin.com/in/lalitsingh69" target="_blank" rel="noreferrer"$2>LinkedIn</a>`);
  fs.writeFileSync(p, text);
});

console.log('Personalization complete!');
