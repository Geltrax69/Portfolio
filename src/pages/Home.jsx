
import React from 'react';
import { motion } from 'framer-motion';

const HomeStitch = () => {
  return (
    <>
      


<main className="pt-32">

<motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true, margin: "-50px" }}  className="max-w-7xl mx-auto px-8 mb-32 grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
<div className="md:col-span-8">
<span className="font-label text-sm uppercase tracking-[0.3em] text-primary mb-6 block">BTech Computer Science Student</span>
<h1 className="font-headline text-6xl md:text-8xl font-black tracking-tighter text-on-surface leading-[0.9] mb-8">
                    Designing <span className="text-primary italic">Systems</span>,<br/>Architecting <span className="relative">Code<span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/20 hand-drawn-accent"></span></span>
</h1>
<p className="text-xl md:text-2xl text-secondary max-w-2xl font-body leading-relaxed">
                    Bridging the gap between technical rigor and intentional design. I build high-performance software with a curator's eye for detail.
                </p>
</div>
<div className="md:col-span-4 relative group">
<div className="aspect-[4/5] bg-surface-container-highest rounded-xl overflow-hidden editorial-shadow transform transition-transform duration-700 group-hover:scale-[1.02]">
<img alt="Professional portrait" className="w-full h-full object-cover object-[center_10%] opacity-90 group-hover:opacity-100 transition-opacity duration-500" src="/front.png"/>
</div>
<div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/5 hand-drawn-accent -z-10 blur-xl"></div>
</div>
</motion.section>

<motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true, margin: "-50px" }}  className="bg-surface-container-low py-24 mb-32">
<div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-16">
<div className="space-y-4">
<span className="font-label text-xs uppercase tracking-widest text-secondary">Expertise</span>
<h3 className="font-headline text-2xl font-bold tracking-tight">Full-Stack Craft</h3>
<p className="text-secondary leading-relaxed">Specializing in distributed systems and emotive user interfaces that prioritize human interaction.</p>
</div>
<div className="space-y-4">
<span className="font-label text-xs uppercase tracking-widest text-secondary">Philosophy</span>
<h3 className="font-headline text-2xl font-bold tracking-tight">Intentional Code</h3>
<p className="text-secondary leading-relaxed">Every line of code should serve a purpose, maintaining a balance between efficiency and maintainability.</p>
</div>
<div className="space-y-4">
<span className="font-label text-xs uppercase tracking-widest text-secondary">Current Focus</span>
<h3 className="font-headline text-2xl font-bold tracking-tight">Systemic Scalability</h3>
<p className="text-secondary leading-relaxed">Exploring the intersection of cloud-native architecture and high-fidelity front-end experiences.</p>
</div>
</div>
</motion.section>

<motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true, margin: "-50px" }}  className="max-w-7xl mx-auto px-8 mb-32">
<div className="flex justify-between items-end mb-16">
<div>
<h2 className="font-headline text-5xl font-black tracking-tighter mb-4">Latest Builds</h2>
<p className="text-secondary font-label uppercase tracking-widest text-sm">Selected Project Showcase / 2024 - present</p>
</div>
<a className="group flex items-center gap-2 font-label text-sm uppercase tracking-widest text-primary" >
                    View Archive 
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-8">

<div className="md:col-span-8 group cursor-pointer" onClick={() => window.open("https://www.educonnect.me/", "_blank")}>
<div className="relative overflow-hidden rounded-xl bg-surface-container-low aspect-video mb-6">
<img alt="Data Visualization Project" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" data-alt="Sleek abstract data visualization interface with neon glowing nodes and dark minimalist aesthetic on a large screen" src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2000&auto=format&fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-on-surface/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>
<div className="-mt-12 ml-8 relative z-10 bg-surface p-8 rounded-xl editorial-shadow max-w-md border border-outline-variant/10">
<div className="flex gap-2 mb-4">
<span className="px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full font-label text-[10px] uppercase tracking-widest">Next.js</span>
<span className="px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full font-label text-[10px] uppercase tracking-widest">TypeScript</span>
</div>
<h3 className="font-headline text-3xl font-bold tracking-tight mb-2">EduConnect</h3>
<p className="text-secondary text-sm leading-relaxed mb-4">Engineered a full-stack, multi-tenant school platform used across admin workflows with robust architecture.</p>
<span className="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform">arrow_right_alt</span>
</div>
</div>

<div className="md:col-span-4 group cursor-pointer mt-12 md:mt-24" onClick={() => window.open("https://hsta.in/", "_blank")}>
<div className="relative overflow-hidden rounded-xl bg-surface-container-low aspect-[4/5] mb-6">
<img alt="Code editor snippet" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" data-alt="Close-up of clean dark-themed code editor showing React components with syntax highlighting and soft ambient workspace lighting" src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2000&auto=format&fit=crop"/>
</div>
<div className="px-2">
<div className="flex gap-2 mb-3">
<span className="font-label text-[10px] uppercase tracking-[0.2em] text-primary">Full-stack Platform</span>
</div>
<h3 className="font-headline text-2xl font-bold tracking-tight mb-2">HSTA Web</h3>
<p className="text-secondary text-sm leading-relaxed">Govt Project: Delivered a role-based digital platform for a sports association.</p>
</div>
</div>

<div className="md:col-span-5 group cursor-pointer">
<div className="relative overflow-hidden rounded-xl bg-surface-container-low aspect-[3/2] mb-6">
<img alt="UI design draft" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" data-alt="Minimalist UI design layout spread across multiple clean tablet devices on a light wooden desk with organic shadows" src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=2000&auto=format&fit=crop"/>
</div>
<div className="px-2">
<h3 className="font-headline text-2xl font-bold tracking-tight mb-2">Care Platform</h3>
<p className="text-secondary text-sm leading-relaxed">CareConnect: Cross-platform mobile app (Flutter) letting families book verified caregivers.</p>
</div>
</div>

<div className="md:col-span-7 group cursor-pointer md:pl-12">
<div className="relative overflow-hidden rounded-xl bg-surface-container-low aspect-video mb-6">
<img alt="Cloud Architecture" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" data-alt="Abstract cinematic view of glowing network connections and blue particles suggesting global cloud infrastructure and connectivity" src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2000&auto=format&fit=crop"/>
</div>
<div className="-mt-12 mr-8 relative z-10 bg-surface p-8 rounded-xl editorial-shadow max-w-md float-right border border-outline-variant/10">
<h3 className="font-headline text-3xl font-bold tracking-tight mb-2">Notes.io</h3>
<p className="text-secondary text-sm leading-relaxed">Curated exam PDFs for students. Secure checkout with Razorpay. <a href="https://notes.lalitsingh.me" target="_blank" class="text-primary hover:underline block mt-2">View Site</a></p>
<div className="mt-4 flex gap-4">
<span className="material-symbols-outlined text-secondary" style={{fontVariationSettings: `'FILL' 1`}}>cloud</span>
<span className="material-symbols-outlined text-secondary" style={{fontVariationSettings: `'FILL' 1`}}>hub</span>
</div>
</div>
</div>
</div>
</motion.section>

<motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true, margin: "-50px" }}  className="max-w-7xl mx-auto px-8 py-24 border-t border-outline-variant/15 flex flex-col md:flex-row gap-12 items-center">
<h3 className="font-headline text-xl font-bold uppercase tracking-widest whitespace-nowrap">Technical Stack</h3>
<div className="flex flex-wrap gap-3 justify-center md:justify-start">
<span className="px-6 py-2 bg-surface-container-highest text-on-surface rounded-full font-label text-xs uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-colors cursor-default">C++ / Java</span>
<span className="px-6 py-2 bg-surface-container-highest text-on-surface rounded-full font-label text-xs uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-colors cursor-default">Python / FastAPI</span>
<span className="px-6 py-2 bg-surface-container-highest text-on-surface rounded-full font-label text-xs uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-colors cursor-default">TypeScript / React</span>
<span className="px-6 py-2 bg-surface-container-highest text-on-surface rounded-full font-label text-xs uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-colors cursor-default">AWS / Docker</span>
<span className="px-6 py-2 bg-surface-container-highest text-on-surface rounded-full font-label text-xs uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-colors cursor-default">PostgreSQL</span>
<span className="px-6 py-2 bg-surface-container-highest text-on-surface rounded-full font-label text-xs uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-colors cursor-default">Distributed Systems</span>
</div>
</motion.section>

<motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true, margin: "-50px" }}  className="max-w-7xl mx-auto px-8 mb-32">
<div className="bg-primary-container p-16 md:p-32 rounded-xl text-on-primary-container relative overflow-hidden group">
<div className="relative z-10 text-center space-y-8">
<h2 className="font-headline text-5xl md:text-7xl font-black tracking-tighter leading-none">Ready to start the next<br/>big iteration?</h2>
<p className="text-on-primary-container/80 max-w-xl mx-auto text-lg">Currently available for select freelance collaborations and innovative engineering roles.</p>
<button className="px-12 py-5 bg-background text-on-background rounded-full font-headline font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-all duration-300 editorial-shadow">
                        Let's Talk
                    </button>
</div>

<div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-3xl hand-drawn-accent group-hover:scale-150 transition-transform duration-1000"></div>
<div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 blur-3xl hand-drawn-accent group-hover:-translate-x-12 transition-transform duration-1000"></div>
</div>
</motion.section>
</main>

<footer className="w-full border-t border-[#ddc0bd]/15 bg-[#fcf9ef] dark:bg-[#1c1c16]">
<div className="flex flex-col md:flex-row justify-between items-center py-12 px-8 max-w-7xl mx-auto gap-6">
<div className="flex flex-col gap-2">
<span className="font-epilogue font-bold text-[#1c1c16] text-xl">LALIT.DEV</span>
<p className="font-space-grotesk text-sm uppercase tracking-widest text-[#5f5e5e]">© 2024 Crafted with Intent.</p>
</div>
<div className="flex gap-8">
<a className="font-space-grotesk text-sm uppercase tracking-widest text-[#5f5e5e] hover:text-[#9d3732] transition-colors duration-300" href="https://github.com/Geltrax69" target="_blank" rel="noreferrer">Github</a>
<a className="font-space-grotesk text-sm uppercase tracking-widest text-[#5f5e5e] hover:text-[#9d3732] transition-colors duration-300" href="https://linkedin.com/in/lalitsingh69" target="_blank" rel="noreferrer">LinkedIn</a>
<a className="font-space-grotesk text-sm uppercase tracking-widest text-[#5f5e5e] hover:text-[#9d3732] transition-colors duration-300" >Source Code</a>
</div>
<div className="flex items-center gap-4">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="font-space-grotesk text-xs uppercase tracking-[0.2em] text-[#5f5e5e]">Available for new roles</span>
</div>
</div>
</footer>

    </>
  );
};

export default HomeStitch;
