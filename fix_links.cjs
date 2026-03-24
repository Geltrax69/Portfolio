const fs = require('fs');
let home = fs.readFileSync('src/pages/Home.jsx', 'utf8');

// Fix Care Platform image which was completely 404ing / empty
home = home.replace(
  'https://images.unsplash.com/photo-1576091160550-2173ff9e5e3c?q=80&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=2000&auto=format&fit=crop'
);

// Add EduConnect redirect link
home = home.replace(
  '<div className="md:col-span-8 group cursor-pointer">',
  '<div className="md:col-span-8 group cursor-pointer" onClick={() => window.open("https://www.educonnect.me/", "_blank")}>'
);

// Add HSTA redirect link
home = home.replace(
  '<div className="md:col-span-4 group cursor-pointer mt-12 md:mt-24">',
  '<div className="md:col-span-4 group cursor-pointer mt-12 md:mt-24" onClick={() => window.open("https://hsta.in/", "_blank")}>'
);

// Ensure it applies properly to the DOM nodes
fs.writeFileSync('src/pages/Home.jsx', home);
console.log('Home page successfully updated with links and image patch!');
