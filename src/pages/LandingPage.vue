<script setup>
const fitur = [
 { id: 1, emoji: '', judul: 'kualitas terpercaya', deskripsi: 'bahan berkualitas yang terpilih' },
 { id: 2, emoji: '', judul: 'harga terpercaya', deskripsi: 'harga yang terjangkau dan fair' },
 { id: 3, emoji: '', judul: 'payment terpercaya', deskripsi: 'metode pembayaran yang aman dan terpercaya' },
]
</script>
<template>
 <main class="page landing">
  <section class="hero">
   <div class="container">
    <h1>Belanja Perlengkapan &amp; Terpercaya</h1>
    <p class="subtitle"> semua perlengkapan sekolah ada  &mdash; seperti tas dan lain lain </p>
    <RouterLink to="/product" class="btn-pill">Lihat Produk</RouterLink>
   </div>
  </section>

  <section class="fitur">
   <div class="container">
    <div class="cards">
     <article
      v-for="item in fitur"
      :key="item.id"
      class="card"
     >
      <span class="emoji">{{ item.emoji }}</span>
      <h3>{{ item.judul }}</h3>
      <p>{{ item.deskripsi }}</p>
     </article>
    </div>
   </div>
  </section>

  <section class="video-promo">
   <div class="container">
    <h2></h2>
    <video controls muted loop class="promo">
     <source src="/video/vid.mp4" type="video/mp4" />
     Maaf, browser kamu tidak mendukung video.
    </video>
   </div>
  </section>
 </main>
</template>
<style scoped>
.landing {
 padding: 0;
}
.hero {
 background: var(--gradient-hero);
 color: #fff;
 text-align: center;
 padding: 100px 20px;
}
.hero h1 {
 color: #fff;
 font-size: clamp(1.9rem, 5vw, 3rem);
 max-width: 760px;
 margin: 0 auto 16px;
}
.subtitle {
 color: rgba(255, 255, 255, 0.92);
 font-size: clamp(1rem, 2.5vw, 1.2rem);
 max-width: 520px;
 margin: 0 auto 36px;
}
.fitur {
 padding: 64px 0 80px;
}
.cards {
 display: flex;
 gap: 24px;
 flex-wrap: wrap;
 justify-content: center;
}
.card {
 flex: 1 1 240px;
 max-width: 320px;
 padding: 32px 24px;
 background: #fff;
 border-radius: var(--radius);
 box-shadow: var(--shadow);
 text-align: center;
 transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.card:hover {
 transform: translateY(-4px);
 box-shadow: var(--shadow-hover);
}
.emoji {
 display: block;
 font-size: 2.4rem;
 margin-bottom: 12px;
}
.card h3 {
 margin-bottom: 6px;
 font-size: 1.15rem;
}
.card p {
 font-size: 0.95rem;
}
.video-promo {
 padding: 24px 0 64px;
 text-align: center;
}
.video-promo h2 {
 margin-bottom: 20px;
}
.promo {
 display: block;
 width: 100%;
 max-width: 720px;
 margin: 0 auto;
 border-radius: var(--radius);
 box-shadow: var(--shadow);
 background: #000;
}
@media (max-width: 640px) {
 .hero { padding: 72px 20px; }
 .fitur { padding: 48px 0 64px; }
}
</style>
