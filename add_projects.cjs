const fs = require('fs');

// --- 1. Update Work.jsx ---
let work = fs.readFileSync('src/pages/Work.jsx', 'utf8');

// Replace Project 1
work = work.replace('AETHER ENGINE', 'EduConnect');
work = work.replace('A high-performance rendering pipeline built for real-time generative architectural visualizations. Leveraging low-level memory management for extreme precision.', 'School Management Platform supporting admin workflows, events, and secure multi-tenant roles.');
work = work.replace('>Rust<', '>Next.js<');
work = work.replace('>WebGPU<', '>React<');

// Replace Project 2
work = work.replace('NEURAL SENTINEL', 'HSTA Web');
work = work.replace('Anomalous pattern detection in distributed systems using deep learning models.', 'Govt Sports Federation platform for digital registrations, referee tools, and PDF generation.');
work = work.replace('>Python<', '>React<');
work = work.replace('>TensorFlow<', '>AWS<');

// Replace Project 3
work = work.replace('FRAMEWORK.OS', 'CareConnect');
work = work.replace('A proprietary design system and component library focused on editorial typography and accessibility.', 'Cross-platform mobile app in Flutter letting families book verified caregivers.');
work = work.replace('>React<', '>Flutter<');
work = work.replace('>Tailwind<', '>Firebase<');

// Replace Project 4
work = work.replace('PULSE CLUSTER', 'Notes.io');
work = work.replace('Microservices orchestrator designed for ultra-low latency data synchronization across global nodes.', 'Curated exam PDFs for students. Features secure Razorpay checkout and instant unlocking. <a href="https://notes.lalitsingh.me" target="_blank" class="text-primary hover:underline ml-2">View Live</a>');
work = work.replace('>Go<', '>Node.js<');
work = work.replace('>Docker<', '>Razorpay<');

// Replace Project 5
work = work.replace('KERNEL.SH', 'QUizz');
work = work.replace('A custom-built lightweight kernel for embedded hardware optimization and real-time scheduling.', 'Build and run live quizzes securely. Create, host, join, and monitor results in real-time. <a href="https://quizz-5yle.onrender.com" target="_blank" class="text-primary hover:underline ml-2">View Live</a>');
work = work.replace('>C++<', '>React<');
work = work.replace('>ASM<', '>Node.js<');

fs.writeFileSync('src/pages/Work.jsx', work);


// --- 2. Update Home.jsx similarly ---
let home = fs.readFileSync('src/pages/Home.jsx', 'utf8');
home = home.replace('API Architecture', 'Notes.io');
home = home.replace('Built scalable backend architectures using AWS, Node.js, and integrating Stripe payments.', 'Curated exam PDFs for students. Secure checkout with Razorpay. <a href="https://notes.lalitsingh.me" target="_blank" class="text-primary hover:underline block mt-2">View Site</a>');
// Ensure EduConnect, HSTA and Care Connect are correct in Home too
fs.writeFileSync('src/pages/Home.jsx', home);


// --- 3. Update Contact.jsx with Credentials Section ---
let contact = fs.readFileSync('src/pages/Contact.jsx', 'utf8');

const credentialsSection = `
<motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true, margin: "-50px" }} className="px-8 max-w-screen-2xl mx-auto mb-24 md:mb-48">
    <div className="mb-12">
        <h2 className="font-headline font-black text-4xl md:text-6xl tracking-tighter text-on-surface">
            Resume & <span className="text-primary italic">Credentials</span>
        </h2>
        <p className="text-xl text-secondary mt-4">Verified certificates and full curriculum vitae details directly accessible.</p>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="bg-surface-container rounded-2xl overflow-hidden shadow-lg border border-outline-variant/20 h-[80vh]">
            <iframe src="/resume_lalit_singh.pdf" className="w-full h-full border-none" title="Resume"></iframe>
        </div>
        <div className="flex flex-col gap-8 h-[80vh]">
            <div className="bg-surface-container rounded-2xl overflow-hidden shadow-lg border border-outline-variant/20 flex-1 relative">
               <iframe src="https://drive.google.com/file/d/1k4QCRI3jZECrOQmCstJc6YiEjvPNYhIt/preview" className="w-full h-full border-none" title="Certificate 1"></iframe>
            </div>
            <div className="bg-surface-container rounded-2xl overflow-hidden shadow-lg border border-outline-variant/20 flex-1 relative">
               <iframe src="https://drive.google.com/file/d/1uRLO1jRIhToFPJJT-L_GR6HsSybYGrO2/preview" className="w-full h-full border-none" title="Certificate 2"></iframe>
            </div>
        </div>
    </div>
</motion.section>
`;

if (!contact.includes('Resume & <span')) {
    // Insert just before the contact form section
    contact = contact.replace('<motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true, margin: "-50px" }}  className="bg-on-surface', credentialsSection + '\n<motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true, margin: "-50px" }}  className="bg-on-surface');
    
    // Convert 'class=' to 'className=' carefully in my exact string injection if there is any mistake (already checked but just in case)
    fs.writeFileSync('src/pages/Contact.jsx', contact);
}

console.log('Update Complete!');
