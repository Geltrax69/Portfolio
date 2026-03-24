const fs = require('fs');

let skills = fs.readFileSync('src/pages/Skills.jsx', 'utf8');

// Target 1
skills = skills.replace(
    '<span className="font-label text-xs font-bold tracking-widest text-primary uppercase">2023 — Present</span>\n<h3 className="font-headline text-3xl font-bold tracking-tight text-on-surface mt-2">Senior Software Engineer</h3>\n<p className="font-body text-secondary mb-4 italic">Innovate Solutions Group</p>\n<p className="text-on-surface-variant leading-relaxed max-w-2xl">Led the architectural migration of legacy systems to a microservices framework, resulting in a 40% reduction in latency and improved developer velocity.</p>',
    `<span className="font-label text-xs font-bold tracking-widest text-primary uppercase">2022 — Present</span>
<h3 className="font-headline text-3xl font-bold tracking-tight text-on-surface mt-2">B.Tech Computer Science</h3>
<p className="font-body text-secondary mb-4 italic">Lovely Professional University</p>
<p className="text-on-surface-variant leading-relaxed max-w-2xl">Currently pursuing my undergraduate degree with a strong focus on core architecture and scalable software systems.</p>`
);

// Target 2
skills = skills.replace(
    '<span className="font-label text-xs font-bold tracking-widest text-secondary uppercase">2021 — 2023</span>\n<h3 className="font-headline text-3xl font-bold tracking-tight text-on-surface mt-2">Full Stack Developer</h3>\n<p className="font-body text-secondary mb-4 italic">Craft &amp; Code Agency</p>\n<p className="text-on-surface-variant leading-relaxed max-w-2xl">Curated bespoke digital portfolios and e-commerce platforms for high-end boutique brands. Focused on smooth interaction design and accessibility.</p>',
    `<span className="font-label text-xs font-bold tracking-widest text-secondary uppercase">2023 — 2025</span>
<h3 className="font-headline text-3xl font-bold tracking-tight text-on-surface mt-2">Specializations &amp; Certifications</h3>
<p className="font-body text-secondary mb-4 italic">MERN Stack &amp; Core Java</p>
<p className="text-on-surface-variant leading-relaxed max-w-2xl">Achieved advanced certification in MERN Stack Development from CipherSchools and completed the rigorous Core Java Bootcamp on Udemy.</p>`
);

// Target 3
skills = skills.replace(
    '<span className="font-label text-xs font-bold tracking-widest text-secondary uppercase">2018 — 2021</span>\n<h3 className="font-headline text-3xl font-bold tracking-tight text-on-surface mt-2">B.Sc. Computer Science</h3>\n<p className="font-body text-secondary mb-4 italic">Technical University of Design</p>\n<p className="text-on-surface-variant leading-relaxed max-w-2xl">Specialized in human-computer interaction and systems design. Graduated with honors, focusing thesis on tactile digital interfaces.</p>',
    `<span className="font-label text-xs font-bold tracking-widest text-secondary uppercase">2023 — 2024</span>
<h3 className="font-headline text-3xl font-bold tracking-tight text-on-surface mt-2">Competitive Programming / Hackathons</h3>
<p className="font-body text-secondary mb-4 italic">Code-A-thon &amp; Binary-Bits</p>
<p className="text-on-surface-variant leading-relaxed max-w-2xl">Demonstrated strong technical rigour by securing the 15th rank in Code-A-thon (Dec '23) and 12th rank in the Binary-Bits Hackathon (Oct '24).</p>`
);

// Update calls to action in Skills.jsx
skills = skills.replace(
    '<button className="bg-primary hover:bg-primary-container text-on-primary px-10 py-5 rounded-full font-headline font-bold text-lg tracking-tight transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_40px_60px_rgba(0,0,0,0.2)]">\n                                Initiate Collaboration\n                            </button>',
    '<a href="/contact" className="inline-block bg-primary hover:bg-primary-container text-on-primary px-10 py-5 rounded-full font-headline font-bold text-lg tracking-tight transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_40px_60px_rgba(0,0,0,0.2)]">\n                                Initiate Collaboration\n                            </a>'
);
skills = skills.replace(
    '<button className="bg-transparent border border-surface-variant/30 text-surface/80 hover:text-surface px-10 py-5 rounded-full font-headline font-bold text-lg tracking-tight transition-all duration-300">\n                                View My Work\n                            </button>',
    '<a href="/work" className="inline-block bg-transparent border border-surface-variant/30 text-surface/80 hover:text-surface px-10 py-5 rounded-full font-headline font-bold text-lg tracking-tight transition-all duration-300">\n                                View My Work\n                            </a>'
);

fs.writeFileSync('src/pages/Skills.jsx', skills);
console.log('Successfully personalized Skills journey.');
