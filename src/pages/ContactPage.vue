<template>
 <main class="page">
  <div class="container">
   <section class="head">
     <h1>Kontak Kami</h1>
     <p>Hubungi kami klo ada tanya.</p>
   </section>
   <section class="layout">
    <div class="info">
     <h2>Info Kontak</h2>
     <div class="item">
      <span>📍</span>
      <div>
       <strong>Alamat</strong>
       <p>SMK Yadika Soreang, Jalan Raya Soreang No. 12</p>
      </div>
     </div>
     <div class="item">
      <span>📞</span>
      <div>
       <strong>Telepon</strong>
       <p>(022) 1234567</p>
      </div>
     </div>
     <div class="item">
      <span>✉️</span>
      <div>
       <strong>Email</strong>
       <p><a href="mailto:onlineshop@sekolah.com">onlineshop@sekolah.com</a></p>
      </div>
     </div>
    </div>
    <form class="form" @submit.prevent>
      <h2>Krm Pesan</h2>
     <label for="nama">Nama</label>
     <input id="nama" type="text" placeholder="Nama kamu" />
     <label for="email">Email</label>
     <input id="email" type="email" placeholder="email@contoh.com" />
     <label for="pesan">Pesan</label>
     <textarea id="pesan" rows="5" placeholder="Tulis pesanmu di sini..."></textarea>
     <button type="submit" class="btn">Kirim</button>
    </form>
   </section>
  </div>
 </main>
</template>
<style scoped>
.head { margin-bottom: 32px; }
.layout {
 display: flex;
 gap: 40px;
 align-items: flex-start;
}
.info {
 flex: 1;
 padding: 28px;
 background: var(--bg-soft);
 border: 1px solid var(--border);
}
.item {
 display: flex;
 gap: 14px;
 margin-top: 18px;
}
.item > span { font-size: 1.5rem; }
.item p { margin-top: 2px; }
.form {
 flex: 1.2;
 padding: 28px;
 background: #fff;
}
.form h2 { margin-bottom: 8px; }
label {
 display: block;
 margin: 14px 0 6px;
 font-weight: 600;
 font-size: 0.9rem;
}
input,
textarea {
 width: 100%;
 padding: 10px 14px;
 border: 1px solid var(--border);
 border-radius: 6px;
 font-family: inherit;
 font-size: 0.95rem;
}
input:focus,
textarea:focus {
 outline: none;
 border-color: var(--accent);
}
.form .btn {
 width: 100%;
 margin-top: 18px;
 justify-content: center;
}
@media (max-width: 768px) {
 .layout { flex-direction: column; }
}
</style>
