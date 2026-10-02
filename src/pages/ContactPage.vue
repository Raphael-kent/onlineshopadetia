<script setup>
import { ref } from 'vue'

const nama = ref('')
const email = ref('')
const pesan = ref('')

function kirimPesan() {
 alert(`Terima kasih, ${nama.value || 'teman'}! Pesanmu sudah dikirim.`)
}
</script>
<template>
 <main class="page">
  <section class="page-header">
   <div class="container">
    <h1>Hubungi Kami</h1>
   </div>
  </section>

  <div class="container">
   <section class="layout">
    <div class="info">
     <h2>Info Kontak</h2>
     <div class="item">
      <span>📍</span>
      <div>
       <strong>Alamat</strong>
       <p>SMK Yadika soreang</p>
      </div>
     </div>
     <div class="item">
      <span>📞</span>
      <div>
       <strong>Telepon</strong>
       <p>(+62)</p>
      </div>
     </div>
     <div class="item">
      <span>✉️</span>
      <div>
       <strong>Email</strong>
       <p>smk-yadika@soreang.sch.id </p>
      </div>
     </div>
    </div>

    <form class="form" @submit.prevent="kirimPesan">
     <h2>Kirim Pesan</h2>
     <label for="nama">Nama</label>
     <input id="nama" v-model="nama" type="text" placeholder="Nama kamu" />
     <label for="email">Email</label>
     <input id="email" v-model="email" type="email" placeholder="email@contoh.com" />
     <label for="pesan">Pesan</label>
     <textarea id="pesan" v-model="pesan" rows="5" placeholder="Tulis pesan..."></textarea>
      <button type="submit" class="btn btn-block">Kirim</button>
    </form>
   </section>
  </div>
 </main>
</template>
<style scoped>
.page {
 padding: 0 0 80px;
}
.page-header {
  background: var(--bg-soft);
  color: var(--text);
  text-align: center;
  padding: 48px 20px;
  border-bottom: 1px solid var(--border);
}
.page-header h1 {
  color: var(--text);
  font-size: clamp(1.8rem, 4vw, 2.4rem);
}
.layout {
  display: flex;
  gap: 40px;
  align-items: flex-start;
  margin-top: 64px;
}
.info {
  flex: 1;
  padding: 28px;
  background: #fff;
  border: 1px solid var(--border);
  border-radius: var(--radius);
}
.info h2 { margin-bottom: 8px; }
.item {
  display: flex;
  gap: 14px;
  margin-top: 22px;
}
.item > span { font-size: 1.5rem; }
.item strong { display: block; }
.item p { margin-top: 2px; }
.form {
  flex: 1;
  padding: 28px;
  background: #fff;
  border: 1px solid var(--border);
  border-radius: var(--radius);
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
  padding: 12px 14px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  font-family: inherit;
  font-size: 0.95rem;
  background: var(--bg-soft);
}
input:focus,
textarea:focus {
  outline: none;
  border-color: var(--accent);
  background: #fff;
}
textarea {
  resize: vertical;
}
.btn-block {
  margin-top: 20px;
}
@media (max-width: 768px) {
 .layout { flex-direction: column; gap: 24px; }
}
</style>
