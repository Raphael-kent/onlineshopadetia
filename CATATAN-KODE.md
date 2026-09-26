# CATATAN-KODE.md

Catatan singkat untuk memahami bagian-bagian kode di proyek `onlineshop-vue`
yang mungkin tidak ada di LKPD. Tujuannya supaya bisa dijelaskan sendiri kalau
ditanya guru, tanpa mengubah tampilan website.

---

## 1. Cara mencari CSS ("kok class-nya ga ketemu?")

Setiap `class` yang dipakai di template pasti berasal dari salah satu dari dua
tempat:

1. **Utility class Tailwind** — ditulis langsung di dalam `class="..."`.
   Contoh: `bg-white`, `flex`, `p-4`, `rounded-xl`, `text-center`, `gap-6`.
   Class ini **tidak ada** di file mana pun karena sudah "disediakan" oleh
   Tailwind. Ciri khasnya: hanya terdiri dari satu kata kecil (bukan pakai
   strip panjang seperti `.btn-pill`).
2. **Class buatan sendiri** — ditulis di dalam blok `<style scoped>`
   **di file yang sama**. Contoh: `.navbar`, `.card`, `.btn-pill`, `.hero`,
   `.promo`, `.avatar`. Kalau mau cari, buka file `.vue` itu lalu cari di
   bagian `<style scoped>`.

Jawaban kalau ditanya "class `kategori` di mana?": Proyek ini tidak punya
fitur/menu kategori, jadi memang tidak ada class `kategori`. Semua nama yang
dipakai di template selalu ketemu — kalau bukan Tailwind, ada di
`<style scoped>` file yang sama.

---

## 2. Menu aktif di Navbar

File: `src/components/Navbar.vue`

```html
<RouterLink to="/product" class="link" active-class="aktif">Product</RouterLink>
```

- `active-class="aktif"` = kalau sedang berada di halaman itu, link otomatis
  diberi class `aktif`.
- Di `<style scoped>` ada `.link.aktif` yang membuat menu halaman yang sedang
  dibuka berwarna penuh (seperti pil aktif).
- `exact-active-class` dipakai khusus link ke `/` supaya hanya aktif persis di
  halaman Landing (bukan semua halaman yang diawali `/`).

Fungsinya: **menampilkan menu mana yang sedang dibuka**. Ini fitur tambahan,
tidak ada di LKPD, tapi berguna dan mudah dijelaskan.

---

## 3. Zoom / preview gambar produk

File: `src/components/ProductCard.vue`

Fitur: klik gambar produk → gambar muncul membesar di tengah layar (seperti
zoom di Tokopedia/Shopee).

### 3a. `Teleport to="body"`
```html
<Teleport to="body"> ... overlay ... </Teleport>
```
Overlay biasa ditulis di dalam komponen (masih di dalam kartu). Dengan
`Teleport`, elemennya "dipindahkan" ke akhir `<body>` browser. Hasilnya sama
dengan menaruh overlay di paling akhir halaman, sehingga selalu tampil paling
atas dan tidak terpotong. Ini pola Vue yang lebih rapi daripada LKPD (LKPD
cukup pakai `<div v-if>` biasa).

### 3b. Menutup dengan tombol Escape
```js
onMounted(() => window.addEventListener('keydown', tanganiEscape))
onBeforeUnmount(() => window.removeEventListener('keydown', tanganiEscape))
```
Saat komponen dibuat (`onMounted`) dia "mendengarkan" tombol yang ditekan di
seluruh halaman. Kalau tombolnya `Escape`, zoom ditutup (`tanganiEscape`).
`onBeforeUnmount` = mendengarkan ulang sebelum komponen hilang, supaya tidak
terjadi "kebocoran" memori.

### 3c. Kunci scroll (body overflow)
```js
document.body.style.overflow = 'hidden'   // saat zoom dibuka
document.body.style.overflow = ''         // saat zoom ditutup
```
Saat zoom terbuka, halaman di belakang tidak bisa di-scroll. Kode `''` = kembali
normal.

---

## 4. Fallback foto (kalau foto gagal dimuat)

File: `ProductCard.vue`, `TeamCard.vue`, `AboutPage.vue`

```html
<img ... @error="gambarGagal = true" />
```

- `@error` dijalankan kalau browser GAGAL memuat gambar (misal nama file salah
  atau file tidak ada).
- Kalau gagal, `gambarGagal`/`fotoGagal`/`fotoTokoGagal` berubah jadi `true`,
  lalu template menampilkan **cadangan**: kotak warna (produk), lingkaran
  inisial (tim), atau tulisan placeholder (foto toko).

Bagian kodenya memang kondisional (`v-if="gambar && !gambarGagal"` ... `v-else`),
tapi intinya sederhana: foto normal → tampil foto; foto rusak → tampil cadangan.

---

## 5. Prop `warna` (kotak warna pengganti foto)

File: `src/components/ProductCard.vue`

```html
<div :class="gambar ? '' : warna" ...>{{ nama }}</div>
```

- Tiap produk punya data `warna` (contoh: `bg-indigo-950`).
- Selama foto belum dipasang (`gambar` masih `''`), kartu menampilkan kotak
  berwarna berisi nama produk.
- Begitu foto diisi, `gambar` pasti ada → class warna dihilangkan dan foto
  tampil menggantikannya.

Ini memberi tampilan tetap rapi walau fotonya belum di-upload.

---

## 6. CSS Variables `var(--...)`

File: `src/assets/main.css` (bagian `:root`) + dipakai di semua file

```css
:root {
  --accent: #a8762e;
  --radius: 14px;
  --shadow: 0 1px 2px ..., 0 8px 24px ...;
}
```

- Variabel CSS "menyimpan" warna / ukuran / bayangan di satu tempat.
- Contoh pemakaian: `border-radius: var(--radius); background: var(--accent);`
- Untungnya: kalau mau ganti tema warna, cukup ubah **sekali** di `:root`,
  semua halaman ikut berubah. Nilainya sama dengan menulis `#a8762e`
  langsung, hanya lebih rapi.

Ini tidak diajarkan di LKPD Bagian 1, tapi hanya "penyimpanan nilai", bukan
logika rumit. Kalau ingin lebih polos, nilainya bisa diganti jadi angka/warna
langsung — tampilan 100% sama.

---

## 7. `prefers-reduced-motion` (aksesibilitas)

File: `src/assets/main.css` (di paling bawah)

```css
@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; }
}
```

Jika pengguna mengaktifkan pengaturan "kurangi animasi/gerakan" di
sistem/HP-nya, semua animasi & transisi dimatikan. Ini bentuk kepedulian
terhadap pengguna yang mudah mual/dizzy. Di penggunaan normal tidak terasa.

---

## 8. Video di Landing Page

File: `src/pages/LandingPage.vue`

```html
<video controls muted loop class="promo"> ... </video>
```

- `controls` = menampilkan tombol play/pause/volume (inilah yang diminta LKPD).
- `muted` = suara dibisukan. Diperlukan supaya browser mengizinkan video
  tampil (sebagian browser memblokir video bersuara otomatis).
- `loop` = mengulang terus.
- Tombol `autoplay` / `playsinline` **sudah dihapus** supaya video tidak
  langsung main sendiri dan lebih sesuai LKPD (pengguna harus klik play dulu).

---

## 9. Form Contact

File: `src/pages/ContactPage.vue`

```js
const nama = ref('')
const email = ref('')
const pesan = ref('')

function kirimPesan() {
  alert(`Terima kasih, ${nama.value || 'teman'}! Pesanmu sudah dikirim.`)
}
```

- `ref('')` membuat "lemari penyimpanan" nilai input di Vue.
- `v-model` menghubungkan isian input dengan ref tersebut.
- `@submit.prevent="kirimPesan"` menjalankan fungsi saat tombol Kirim diklik
  (`.prevent` = mencegah halaman reload).
- `kirimPesan()` hanya menampilkan `alert`. LKPD bilang form "cukup tampilan
  saja", tapi kita mempertahankan alert ini karena kamu memilih merahnya.
  Kalau mau lebih sederhana, fungsi ini bisa dihapus dan tombol diubah jadi
  `type="button"`.

---

## 10. Paket yang dipasang tapi tidak dipakai

File: `package.json`, `vite.config.js`

- `@tailwindcss/vite` (Tailwind versi 4) terpasang, tapi yang benar-benar
  dipakai proyek ini adalah Tailwind versi 3 lewat `postcss.config.js`.
  = "stok ganda" yang tidak mengganggu tampilan. Bisa dihapus:
  `npm uninstall @tailwindcss/vite`.
- `vite-plugin-vue-devtools` hanya alat bantu saat development (tampilan
  khusus Vue developer). Tidak memengaruhi hasil akhir website.