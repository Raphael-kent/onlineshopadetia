<script setup>
import TeamCard from '../components/TeamCard.vue'
const tim = [
 { id: 1, nama: 'Andi', jabatan: 'Ketua' },
 { id: 2, nama: 'Budi', jabatan: 'Programmer' },
 { id: 3, nama: 'Citra', jabatan: 'Designer' },
 { id: 4, nama: 'Dina', jabatan: 'Bendahara' },
]
</script>
<template>
 <main class="page">
  <div class="container">
   <section class="banner">
      <h1>Tntg Kami</h1>
      <p>Yuk kenalan sma toko online skul kami.</p>
   </section>

   <section class="cerita">
    <div class="teks">
     <h2>Crta Kami</h2>
     <p>Toko online ini dibuat siswa PPLG SMK Yadika Soreang, biar belanja makin gampang.</p>
     <p>Kami kerjakan bareng-bareng, biar teman-teman nyaman &amp; aman belanjanya.</p>
    </div>
    <div class="gambar">
     <span class="emoji">🏫</span>
     <p>Kami Krja di Sini</p>
    </div>
   </section>

   <section class="tim">
    <h2>Tim Kami</h2>
    <div class="anggota">
     <TeamCard
      v-for="orang in tim"
      :key="orang.id"
      :nama="orang.nama"
      :jabatan="orang.jabatan"
     />
    </div>
   </section>
  </div>
 </main>
</template>
<style scoped>
.banner {
 padding: 48px 24px;
 text-align: center;
 background: var(--bg-soft);
}
.banner p { margin-top: 4px; }
.cerita {
 display: flex;
 align-items: center;
 gap: 40px;
 margin-top: 56px;
}
.teks { flex: 1; }
.teks p { margin-top: 10px; }
.gambar {
 flex: 1;
 padding: 56px 24px;
 display: grid;
 place-items: center;
 background: var(--bg-soft);
}
.gambar .emoji { font-size: 4rem; }
.tim {
 margin-top: 56px;
 text-align: center;
}
.tim h2 { margin-bottom: 24px; }
.anggota {
 display: flex;
 gap: 20px;
 flex-wrap: wrap;
 justify-content: center;
}
.anggota :deep(.team-card) {
 flex: 1 1 200px;
 max-width: 240px;
}
@media (max-width: 768px) {
 .cerita { flex-direction: column; }
}
</style>
