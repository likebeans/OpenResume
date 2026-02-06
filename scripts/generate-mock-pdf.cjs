const fs = require('fs');

// Minimal valid PDF with "Mock Resume - 余非凡" text
const content = 'BT /F1 24 Tf 100 700 Td (Mock Resume - Yu Feifan) Tj ET';
const contentLength = content.length;

const objects = [];
objects.push('1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj');
objects.push('2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj');
objects.push('3 0 obj\n<< /Type /Page /MediaBox [0 0 595 842] /Parent 2 0 R /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>\nendobj');
objects.push('4 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj');
objects.push(`5 0 obj\n<< /Length ${contentLength} >>\nstream\n${content}\nendstream\nendobj`);

let body = '%PDF-1.4\n';
const offsets = [];
for (let i = 0; i < objects.length; i++) {
  offsets.push(body.length);
  body += objects[i] + '\n';
}

const xrefOffset = body.length;
let xref = 'xref\n';
xref += `0 ${objects.length + 1}\n`;
xref += '0000000000 65535 f \n';
for (const offset of offsets) {
  xref += String(offset).padStart(10, '0') + ' 00000 n \n';
}

const trailer = `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;

const pdf = body + xref + trailer;
fs.writeFileSync('public/resume.pdf', pdf);
console.log('Mock PDF created at public/resume.pdf');
