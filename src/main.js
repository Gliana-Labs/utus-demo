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

const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
const render = (items) =>
  (document.getElementById('menu').innerHTML = items
    .map(
      (m) => `<li class="${m.out ? 'out' : ''}">${m.photo ? `<img src="${esc(m.photo)}" alt="">` : ''}<span class="name">${esc(m.name)}</span><span class="note">${esc(m.note)}${m.out ? ' · habis' : ''}</span><span class="price">${rupiah(m.price)}</span></li>`,
    )
    .join(''));

render(MENU);

// Utus Data: a "menu" collection made from the dashboard template (nama, harga, deskripsi, foto, habis)
// replaces the built-in list — change a price in the dashboard and this page shows it, no redeploy.
fetch('/_utus/data/menu')
  .then((r) => (r.ok ? r.json() : null))
  .then((d) => {
    if (!d?.rows?.length) return;
    render(d.rows.map((r) => ({ name: r.nama, price: r.harga ?? 0, note: r.deskripsi ?? '', photo: r.foto, out: r.habis })));
    document.getElementById('menu-title').textContent = 'Menu hari ini · dari Utus Data';
  })
  .catch(() => {});

// Stamped at build time by Vite, so each deploy shows when it was built.
document.getElementById('built').textContent = `build ${new Date(__BUILD_TIME__).toLocaleString('id-ID')}`;
