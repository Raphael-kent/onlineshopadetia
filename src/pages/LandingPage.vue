<template>
 <main class="page">
  <div class="container">
   <section class="hero">
    <span class="badge">Toko Skul</span>
    <h1>Slmt Dtg di Toko Online SMK Yadika Soreang</h1>
    <p class="tagline">Blnj gmpng, skul snng.</p>
    <RouterLink to="/product" class="btn">Lht Prdk</RouterLink>
   </section>

   <section class="features">
    <h2>Knpa Blnj di Sini?</h2>
    <div class="cards">
     <article class="card">
      <span class="emoji">🛍️</span>
      <h3>Blnj Gmpng</h3>
      <p>Cari barang yg km butuh, pesan cepet.</p>
     </article>
     <article class="card">
      <span class="emoji">📦</span>
      <h3>Antar ke Skul</h3>
      <p>Barang diantar lgsg ke skul.</p>
     </article>
     <article class="card">
      <span class="emoji">🔒</span>
      <h3>Trx Aman</h3>
      <p>Bayar aman, gmpng dicek.</p>
     </article>
     <article class="card">
      <span class="emoji">🎓</span>
      <h3>Kbtuhn Lengkap</h3>
      <p>Srgm, topi, tas, alat tulis ada.</p>
     </article>
    </div>
   </section>

   <section class="promo">
    <h2>Lht Promo Kami</h2>
    <video controls width="480" muted loop>
     <source src="/video/promo-toko.mp4" type="video/mp4" />
     Browser km gk bisa buka video.
    </video>
   </section>
  </div>
 </main>
</template>
<style scoped>
.hero {
 padding: 56px 32px;
 text-align: center;
 background: var(--bg-soft);
}
.badge {
 display: inline-block;
 margin-bottom: 16px;
 padding: 6px 14px;
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
 outline: none;
}
</style>
