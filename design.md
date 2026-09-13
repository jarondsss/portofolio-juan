# Design Spec — Portofolio "Deep Terminal"

> Konsep: terminal/CLI retro-futuristik yang tenggelam di bawah laut digital. Bukan template dashboard generik, bukan gradient ungu-pink ala AI slop. Ini terminal gelap, presisi, dengan kehidupan halus di baliknya — ikan piksel yang berenang pelan di kedalaman layar seolah portofolio ini adalah akuarium data.

---

## 1. Prinsip Desain (Non-Negotiable)

Supaya tidak jatuh ke "AI slop", pegang aturan ini:

- **Tidak ada gradient ungu-ke-pink-ke-biru.** Palet dibatasi ketat: hitam + satu keluarga biru + satu aksen terang.
- **Tidak ada rounded-xl + shadow-lg + glassmorphism generik.** Sudut tegas atau sangat kecil (0–4px). Tidak ada blur kaca.
- **Tidak ada font Inter/Poppins default.** Pakai monospace sebagai identitas utama, bukan pelengkap.
- **Tidak ada ikon emoji atau ilustrasi flat generik.** Semua visual = piksel (bitmap 1-bit / 2-bit style), digambar sendiri sebagai SVG/canvas, bukan stock asset.
- **Motion harus punya alasan.** Ikan berenang bukan dekorasi acak — dia jadi indikator "sistem hidup", muncul di sela-sela teks seperti proses background.
- **Diam itu mewah.** Banyak ruang kosong (dark space), teks sedikit tapi padat makna. High-end = restraint, bukan ramai.

---

## 2. Palet Warna

| Token | Hex | Fungsi |
|---|---|---|
| `--bg-void` | `#05070A` | Background utama, hitam kebiruan pekat (bukan `#000` murni) |
| `--bg-panel` | `#0B0F14` | Panel/card, sedikit lebih terang dari void |
| `--line` | `#141B22` | Border/divider tipis |
| `--blue-deep` | `#0A2A4A` | Biru laut dalam — untuk area gelap dekoratif |
| `--blue-core` | `#1E63C8` | Biru utama — untuk elemen interaktif, ikan |
| `--blue-glow` | `#3FA9F5` | Biru terang — hover state, kursor, highlight |
| `--cyan-signal` | `#7FE6D8` | Aksen langka — untuk 1-2 titik fokus penting saja (mis. status "online") |
| `--text-primary` | `#D7E4EE` | Teks utama, bukan putih murni |
| `--text-dim` | `#5C7185` | Teks sekunder, komentar, meta info |
| `--text-ghost` | `#2B3742` | Watermark, ASCII dekoratif nyaris tak terlihat |

Aturan: **maksimal satu warna terang (`--blue-glow` atau `--cyan-signal`) aktif dalam satu viewport pada satu waktu.** Ini yang bikin kesan mahal — bukan warna-warni, tapi satu titik cahaya di kegelapan.

---

## 3. Tipografi

- **Monospace utama:** `JetBrains Mono` atau `Berkeley Mono` / fallback `IBM Plex Mono`. Dipakai untuk SEMUA teks, bukan cuma kode.
- **Skala tegas, bukan interpolasi mulus:**
  - Prompt/label: 12px, `--text-dim`, uppercase, letter-spacing 0.08em
  - Body: 15px, `--text-primary`, line-height 1.6
  - Command/heading besar: 32–48px, `--text-primary`, weight 500 (jangan bold penuh — terlalu berat)
- **Kursor blok berkedip** (`█`) dipakai literal sebagai elemen desain di akhir judul, bukan cuma di input field.
- Teks disusun **seperti transcript terminal**: setiap section dibuka dengan prompt palsu, contoh:
  ```
  guest@portfolio:~$ whoami
  ```
  lalu jawabannya di baris berikutnya sebagai konten section (bio, project, dsb).

---

## 4. Layout & Struktur Halaman

Semua section dibungkus sebagai "command output" dari satu terminal window besar yang full-viewport, bukan card-card terpisah.

```
┌──────────────────────────────────────────────┐
│ ● ● ●   deep-terminal — zsh                   │  ← title bar palsu, minimalis, garis tipis
├──────────────────────────────────────────────┤
│                                                │
│  guest@portfolio:~$ whoami                    │
│  > [Nama] — [Role]                            │
│                                                │
│      ⠀⠀⠀   <fish pixel berenang di sini>      │
│                                                │
│  guest@portfolio:~$ cat projects.log           │
│  > [daftar proyek, format list bertingkat]     │
│                                                │
│  guest@portfolio:~$ ping contact               │
│  > [kontak, dengan efek "connecting..."]       │
│                                                │
└──────────────────────────────────────────────┘
```

Detail:
- **Title bar** meniru window terminal (3 dot kecil kiri atas, monokrom — bukan merah-kuning-hijau khas macOS, pakai gradasi abu-biru redup supaya tetap on-brand).
- **Scroll = scroll perintah baru** ketik-mengetik (typewriter effect halus, ~30–40ms per karakter, sekali saja saat elemen masuk viewport, jangan diulang tiap scroll).
- **Section project** ditulis seperti log file: `[timestamp-palsu] project_name — stack — deskripsi satu baris`, klik untuk expand jadi detail (accordion tanpa animasi slide dramatis, cukup fade + height transition 150ms).
- **Footer** = "system status" bar tipis: uptime palsu (durasi sejak page load), lokasi (opsional), link sosial sebagai `[GH]` `[LI]` `[X]` bracket-style, bukan ikon brand berwarna.

---

## 5. Piksel Ikan — Konsep & Perilaku

Ini elemen signature. Aturan ketat supaya tetap elegan, bukan norak:

### 5.1 Gaya Visual
- Ikan digambar sebagai **grid piksel kecil** (misal 12×6 atau 16×8 blok), gaya sprite 8-bit/16-bit era, bukan SVG organik halus.
- Warna ikan: siluet `--blue-core`, dengan 1–2 piksel mata memakai `--cyan-signal` (satu-satunya penggunaan aksen terang selain hover state).
- Jangan detail berlebihan — 2–3 varian bentuk ikan cukup (kecil, sedang, "boss fish" langka yang jarang muncul sebagai easter egg).

### 5.2 Perilaku Animasi
- **Berenang horizontal perlahan**, arah kiri-kanan bergantian, kecepatan lambat (jangan bikin ramai/distracting) — sekitar 20–40px/detik.
- **Gerakan sirip/ekor**: goyangan 2-frame sprite sheet (frame A/B bergantian tiap 200–300ms) untuk kesan hidup tanpa smooth-interpolation modern (harus terasa "chunky", sesuai gaya pixel).
- **Kedalaman (parallax):** beberapa ikan di layer belakang (opacity 30–40%, lebih kecil, lebih lambat) dan satu-dua di layer depan (opacity penuh, sedikit lebih besar) → efek akuarium 3 dimensi.
- **Ikan bereaksi ke kursor**: saat mouse mendekat, ikan terdekat menjauh sedikit (subtle avoidance, radius ~80px, easing lembut) — ini touch interaktif yang bikin "wah" tanpa berlebihan.
- **Frekuensi**: jangan penuhi layar. 3–6 ikan total dalam satu viewport, populasi bertambah saat scroll ke section baru (ikan baru "berenang masuk" dari tepi layar sekali per section).
- **Gelembung sesekali** (titik piksel kecil naik lurus lalu fade) sebagai detail tambahan, muncul jarang (~1 per 8–10 detik), jangan konstan.

### 5.3 Implementasi Teknis (saran)
- Render di `<canvas>` satu layer full-screen, `position: fixed`, `z-index` di bawah konten teks, `pointer-events: none` kecuali saat deteksi cursor-avoidance (pakai posisi mouse global, canvas tetap non-blocking).
- Sprite ikan sebagai array koordinat piksel (bukan file gambar) → digambar via `fillRect` per piksel, supaya scaling tetap tajam (image-rendering: pixelated bila pakai bitmap).
- State ikan: `{x, y, direction, speed, layer, frame}` disimpan di array, update via `requestAnimationFrame`.
- Hormati `prefers-reduced-motion`: jika aktif, ikan diam di posisi acak tanpa animasi swim, hanya kedip mata pelan.

---

## 6. Micro-interactions

- **Hover pada link/tombol**: teks berubah warna ke `--blue-glow`, garis bawah muncul sebagai underline putus-putus (dashed) khas terminal, bukan solid smooth.
- **Cursor kustom** (opsional, desktop only): blok kecil `--blue-core` yang mengikuti mouse dengan sedikit delay (lag 60–80ms), meniru cursor terminal.
- **Loading state** antar section: teks "loading..." dengan dot beranimasi 3-titik ala CLI (`.`, `..`, `...`), bukan spinner.
- **Easter egg**: ketik perintah asli di "prompt" interaktif (mis. `help`, `sudo hire-me`, `cat resume.pdf`) memicu respons custom di terminal.

---

## 7. Yang Harus Dihindari (checklist anti-AI-slop)

- [ ] Tidak ada drop shadow besar dengan blur > 20px
- [ ] Tidak ada gradient multi-warna di background
- [ ] Tidak ada font sans-serif generik sebagai font utama
- [ ] Tidak ada card dengan border-radius besar + shadow floating khas dashboard SaaS
- [ ] Tidak ada stock illustration / ikon flat 3D
- [ ] Tidak ada animasi bounce/spring berlebihan di setiap elemen
- [ ] Tidak ada terlalu banyak warna aksen sekaligus
- [ ] Semua visual (termasuk ikan) buatan sendiri, bukan dari asset generator

---

## 8. Tone Kata-kata (Copywriting)

- Singkat, teknikal, sedikit dingin — seperti output sistem, bukan brosur marketing.
- Hindari kata seperti "passionate", "creative individual", "let's build something amazing together" — terlalu generik/AI-ish.
- Contoh gaya yang pas:
  ```
  guest@portfolio:~$ whoami
  > engineer. builds things that ship. debugs at 2am by choice.
  ```

---

## 9. Referensi Mood (arah, bukan template)

- Terminal emulator estetik (Alacritty, WezTerm dengan tema gelap kustom)
- Deep-sea bioluminescence — cahaya kecil di kegelapan pekat, bukan terang benderang
- Sprite art era 16-bit (bukan pixel art kasar 8-bit yang terlalu retro-kartun)
