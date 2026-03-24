const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('public/resume_lalit_singh.pdf');
pdf(dataBuffer).then(function(data) {
    fs.writeFileSync('resume_text.txt', data.text);
});
