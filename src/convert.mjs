import fs from 'fs';

function htmlToJsx(html) {
  let bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  let content = bodyMatch ? bodyMatch[1] : html;

  content = content
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/class=/g, 'className=')
    .replace(/for=/g, 'htmlFor=')
    .replace(/viewbox=/g, 'viewBox=')
    .replace(/<br>/g, '<br />')
    .replace(/<hr>/g, '<hr />')
    .replace(/<\/path>/g, '') // remove closing path tags
    .replace(/<img(.*?)>/g, (match) => {
      if (!match.endsWith('/>')) return match.replace(/>$/, ' />');
      return match;
    })
    .replace(/<input(.*?)>/g, (match) => {
      if (!match.endsWith('/>')) return match.replace(/>$/, ' />');
      return match;
    })
    .replace(/<path([^>]+)>/g, (match) => {
      // Don't modify if it's already self closed
      if (!match.endsWith('/>')) return match.replace(/>$/, ' />');
      return match;
    })
    .replace(/style="([^"]*)"/g, (match, p1) => {
      const styleObj = p1.split(';').filter(s => s.trim()).reduce((acc, rule) => {
        const [key, value] = rule.split(':').map(s => s.trim());
        if (!key || !value) return acc;
        const camelKey = key.replace(/-([a-z])/g, g => g[1].toUpperCase());
        acc.push(`${camelKey}: \`${value}\``);
        return acc;
      }, []);
      return `style={{${styleObj.join(', ')}}}`;
    });

  const svgProps = ['stroke-width', 'stroke-linecap', 'stroke-linejoin', 'fill-rule', 'clip-rule', 'stroke-miterlimit', 'stroke-dasharray', 'stroke-dashoffset'];
  svgProps.forEach(prop => {
    const camel = prop.replace(/-([a-z])/g, g => g[1].toUpperCase());
    content = content.replace(new RegExp(prop + '=', 'g'), camel + '=');
  });

  // Add framer motion to sections
  content = content.replace(/<section([^>]*)>/g, 
    '<motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true, margin: "-50px" }} $1>');
  content = content.replace(/<\/section>/g, '</motion.section>');

  // Specific Personalization Replace
  content = content
    .replace(/CURATOR.EXE/g, 'LALIT.DEV')
    .replace(/CRAFT &amp; CODE/g, 'LALIT SINGH')
    .replace(/hello@digitalcurator.tech/g, 'lalit.builds@gmail.com')
    .replace(/Lumina Engine/g, 'EduConnect')
    .replace(/Protocol Zero/g, 'HSTA Web')
    .replace(/Oasis UI Kit/g, 'Care Platform')
    .replace(/\/in\/craftandcode/g, 'linkedin.com/in/lalitsingh69')
    .replace(/github.com\/curator/g, 'github.com/Geltrax69');

  return content;
}

const files = [
  { in: 'stitch-home.html', out: 'HomeStitch' },
  { in: 'stitch-work.html', out: 'WorkStitch' },
  { in: 'stitch-skills.html', out: 'SkillsStitch' },
  { in: 'stitch-contact.html', out: 'ContactStitch' }
];

files.forEach(file => {
  if (!fs.existsSync(file.in)) return;
  const html = fs.readFileSync(file.in, 'utf8');
  let jsxContent = htmlToJsx(html);

  // Link conversions for internal navbar
  jsxContent = jsxContent
    .replace(/>Home<\/a>/g, ' href="/">Home</a>')
    .replace(/>Work<\/a>/g, ' href="/work">Work</a>')
    .replace(/>Skills<\/a>/g, ' href="/skills">Skills</a>')
    .replace(/>About<\/a>/g, ' href="/about">About</a>')
    .replace(/>Contact<\/a>/g, ' href="/contact">Contact</a>')
    .replace(/>Get in Touch<\/button>/g, ' onClick={() => window.location.href="/contact"}>Get in Touch</button>');

  const fileContent = `
import React from 'react';
import { motion } from 'framer-motion';

const ${file.out} = () => {
  return (
    <>
      ${jsxContent}
    </>
  );
};

export default ${file.out};
`;

  fs.writeFileSync(`${file.out}.jsx`, fileContent);
  console.log(`Created ${file.out}.jsx`);
});
