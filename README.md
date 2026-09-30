# SmashZone - Landing Page Preview

Website mini landing page untuk arena badminton **SmashZone** (Solusilokal.id).

## Cara Menjalankan Preview

### Cara 1: Menggunakan File Batch (Paling Mudah)
Cukup klik dua kali (double click) file:
👉 **`start_preview.bat`**

Browser akan otomatis membuka `http://localhost:5173/`.

---

### Cara 2: Melalui Terminal / Command Prompt
Buka terminal di folder ini, lalu jalankan:
```bash
npm run dev
```
Buka URL yang ditampilkan (biasanya [http://localhost:5173/](http://localhost:5173/)) di browser Anda.

---

### Cara Membangun Versi Produksi (Build)
Untuk membuat file HTML/CSS/JS siap pakai (deployment):
```bash
npm run build
```
File hasil build akan berada di dalam folder `dist/`.

---

## Struktur File
- [`src/App.tsx`](file:///c:/Users/U%20S%20E%20R/Downloads/Tugas%20Magang%20Solusilokal.Id/Mini%20Website/lapangan%20badminton/src/App.tsx) : Komponen utama landing page React.
- [`src/index.css`](file:///c:/Users/U%20S%20E%20R/Downloads/Tugas%20Magang%20Solusilokal.Id/Mini%20Website/lapangan%20badminton/src/index.css) : Styling Tailwind CSS & custom styling.
- [`start_preview.bat`](file:///c:/Users/U%20S%20E%20R/Downloads/Tugas%20Magang%20Solusilokal.Id/Mini%20Website/lapangan%20badminton/start_preview.bat) : Skrip 1-klik untuk menjalankan server preview.
- [`smashzone_landing_page.tsx`](file:///c:/Users/U%20S%20E%20R/Downloads/Tugas%20Magang%20Solusilokal.Id/Mini%20Website/lapangan%20badminton/smashzone_landing_page.tsx) : Kode file asli Anda.
