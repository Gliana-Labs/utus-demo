import './style.css';

const MENU = [
  { name: 'Lapis legit', price: 85000, note: 'per loyang kecil' },
  { name: 'Klepon', price: 25000, note: 'per lusin' },
  { name: 'Kue lumpur', price: 30000, note: 'per lusin' },
  { name: 'Dadar gulung', price: 28000, note: 'per lusin' },
  { name: 'Bolu pandan', price: 55000, note: 'per loyang' },
  { name: 'Nagasari', price: 26000, note: 'per lusin' },
];

const rupiah = (n) => `Rp${n.toLocaleString('id-ID')}`;

document.getElementById('menu').innerHTML = MENU.map(
  (m) => `<li><span class="name">${m.name}</span><span class="note">${m.note}</span><span class="price">${rupiah(m.price)}</span></li>`,
).join('');

// Stamped at build time by Vite, so each deploy shows when it was built.
document.getElementById('built').textContent = `build ${new Date(__BUILD_TIME__).toLocaleString('id-ID')}`;
