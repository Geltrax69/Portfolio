const fs = require('fs');

// --- 1. Fix Home.jsx ---
let home = fs.readFileSync('src/pages/Home.jsx', 'utf8');

// Portrait crop adjustment
home = home.replace(
  '<img alt="Professional portrait" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500" src="/front.png"/>',
  '<img alt="Professional portrait" className="w-full h-full object-cover object-[center_10%] opacity-90 group-hover:opacity-100 transition-opacity duration-500" src="/front.png"/>'
);
if(!home.includes('object-[center_10%]')) {
    // try fallbacks if it was already updated slightly
    home = home.replace(
      'object-cover opacity-90',
      'object-cover object-[center_10%] opacity-90'
    );
}

// 2023-2024 to 2024 - present
home = home.replace(
  'Selected Project Showcase / 2023-2024',
  'Selected Project Showcase / 2024 - present'
);

// Care Platform image
home = home.replace(
  'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=2000&auto=format&fit=crop'
);

fs.writeFileSync('src/pages/Home.jsx', home);


// --- 2. Fix Work.jsx ---
let work = fs.readFileSync('src/pages/Work.jsx', 'utf8');

// The care connect image in Work.jsx was set via update_images.cjs earlier
// Let's replace whatever it was with this new caregiving image
work = work.replace(
  'https://images.unsplash.com/photo-1576091160550-2173ff9e5e3c?q=80&w=2000&auto=format&fit=crop', // This was the broken one used in update_images maybe
  'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=2000&auto=format&fit=crop'
);
// Or if it was the money one
work = work.replace(
    'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=2000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=2000&auto=format&fit=crop'
);

fs.writeFileSync('src/pages/Work.jsx', work);

console.log('Fixes applied successfully!');
