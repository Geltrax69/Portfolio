const fs = require('fs');

// 1. Strip inner navbars from pages
const pages = ['src/pages/Home.jsx', 'src/pages/Work.jsx', 'src/pages/Skills.jsx', 'src/pages/Contact.jsx'];

pages.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');
  // Both <nav ...> ... </nav> and <header> <nav ...> ... </nav> </header>
  content = content.replace(/<nav[\s\S]*?<\/nav>/g, '');
  content = content.replace(/<header[\s\S]*?<\/header>/g, '');
  fs.writeFileSync(filePath, content);
});

// 2. Update App.jsx to include global Navbar
let appContent = fs.readFileSync('src/App.jsx', 'utf8');
if (!appContent.includes('import Navbar')) {
    appContent = appContent.replace("import Contact from './pages/Contact';", "import Contact from './pages/Contact';\nimport Navbar from './components/Navbar';");
    appContent = appContent.replace('<main className="flex-1 relative">', '<Navbar />\n      <main className="flex-1 relative pt-20">');
    fs.writeFileSync('src/App.jsx', appContent);
}

// 3. Fix material symbols url in index.html to be completely reliable
let indexHtml = fs.readFileSync('index.html', 'utf8');
indexHtml = indexHtml.replace(
    '<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />', 
    '<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" rel="stylesheet" />'
);
fs.writeFileSync('index.html', indexHtml);

console.log('Navbars consolidated successfully!');
