<template>
 <main class="page">
  <div class="container">
   <section class="hero">
    <span class="badge">Onlineshop Sekolah</span>
    <h1>Selamat Datang di Onlineshop SMK Yadika Soreang</h1>
    <p class="tagline">Belanja gampang, sekolah senang.</p>
    <RouterLink to="/product" class="btn">Lihat Produk</RouterLink>
   </section>

   <section class="features">
    <h2>Kenapa Belanja di Sini?</h2>
    <div class="cards">
     <article class="card">
      <span class="emoji">🛍️</span>
      <h3>Belanja Mudah</h3>
      <p>Cari dan pesan kebutuhan sekolah dengan cepat.</p>
     </article>
     <article class="card">
      <span class="emoji">📦</span>
      <h3>Antar ke Sekolah</h3>
      <p>Barang bisa diantar langsung ke kelas atau sekolah.</p>
     </article>
     <article class="card">
      <span class="emoji">🔒</span>
      <h3>Transaksi Aman</h3>
      <p>Pembayaran dicatat rapi dan mudah dikonfirmasi.</p>
     </article>
     <article class="card">
      <span class="emoji">🎓</span>
      <h3>Kebutuhan Lengkap</h3>
      <p>Seragam, topi, tas, dan alat tulis tersedia.</p>
     </article>
    </div>
   </section>

   <section class="promo">
    <h2>Lihat Promo Kami</h2>
    <video controls width="480" muted loop>
     <source src="/video/promo-toko.mp4" type="video/mp4" />
     Browser kamu tidak mendukung pemutaran video.
    </video>
   </section>
  </div>
 </main>
</template>
<style scoped>
.hero {
 padding: 56px 32px;
 text-align: center;
 border-radius: var(--radius);
 background: linear-gradient(135deg, #e0e7ff 0%, #fce7f3 100%);
}
.badge {
 display: inline-block;
 margin-bottom: 16px;
 padding: 6px 14px;
 border-radius: 999px;
 background: var(--accent-soft);
 color: var(--accent);
 font-size: 0.85rem;
 font-weight: 600;
}
h1 { margin-bottom: 12px; }
.tagline {
 font-size: 1.15rem;
 margin-bottom: 28px;
}
.features {
 margin-top: 56px;
 text-align: center;
}
.features h2 { margin-bottom: 24px; }
.cards {
 display: flex;
 gap: 20px;
 flex-wrap: wrap;
 justify-content: center;
}
.card {
 flex: 1 1 220px;
 max-width: 260px;
 padding: 24px 18px;
 background: #fff;
 border: 1px solid var(--border);
 border-radius: var(--radius);
 box-shadow: var(--shadow);
 transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.card:hover {
 transform: translateY(-6px);
 box-shadow: var(--shadow-hover);
}
.emoji {
 display: block;
 font-size: 2.2rem;
 margin-bottom: 10px;
}
.card h3 { margin-bottom: 6px; }
.card p { font-size: 0.95rem; }
.promo {
 margin-top: 56px;
 text-align: center;
}
.promo h2 { margin-bottom: 24px; }
video {
 max-width: 100%;
 height: auto;
 border-radius: var(--radius);
 box-shadow: var(--shadow);
 outline: none;
}
</style>
