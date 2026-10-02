<script setup>
import { ref } from 'vue'
import TeamCard from '../components/TeamCard.vue'

const fotoToko = ref('/images/yadika.jpg')
const fotoTokoGagal = ref(false)

const daftarTim = [
 { id: 1, nama: 'A', jabatan: 'A', inisial: 'A', foto: '/images/yadika.jpg' },
 { id: 2, nama: 'B', jabatan: 'B', inisial: 'B', foto: '/images/yadika.jpg' },
 { id: 3, nama: 'C', jabatan: 'C', inisial: 'C', foto: '/images/yadika.jpg' },
]
</script>
<template>
 <main class="page">
  <section class="page-header">
   <div class="container">
    <h1>Tentang Kami</h1>
   </div>
  </section>

  <div class="container">
    <section class="cerita">
     <div class="teks">
      <h2>Cerita Kami</h2>
     <p>Sekolah kami merupakan tempat belajar dan berkembang bagi siswa untuk mendapatkan ilmu, mengembangkan potensi, serta membangun karakter yang baik. Kami berkomitmen menciptakan lingkungan belajar yang nyaman, aktif, dan mendukung setiap siswa untuk meraih prestasi dan mempersiapkan masa depan.</p>
    </div>
    <div class="gambar">
     <img
      v-if="fotoToko && !fotoTokoGagal"
      :src="fotoToko"
      alt="Foto toko"
      class="foto-toko"
      @error="fotoTokoGagal = true"
     />
     <p v-else>[Foto / ilustrasi toko]</p>
    </div>
   </section>

   <section class="tim">
    <h2>Tim Kami</h2>
    <div class="anggota">
     <TeamCard
      v-for="orang in daftarTim"
      :key="orang.id"
      :nama="orang.nama"
      :jabatan="orang.jabatan"
      :inisial="orang.inisial"
      :foto="orang.foto"
     />
    </div>
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
.cerita {
  display: flex;
  align-items: center;
  gap: 40px;
  margin-top: 64px;
}
.teks { flex: 1; }
.teks h2 { margin-bottom: 16px; }
.teks p { margin-top: 12px; }
.gambar {
  flex: 1;
  min-height: 300px;
  position: relative;
  display: grid;
  place-items: center;
  background: var(--bg-soft);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  color: var(--text-muted);
  font-weight: 600;
  overflow: hidden;
}
.foto-toko {
 position: absolute;
 inset: 0;
 width: 100%;
 height: 100%;
 object-fit: cover;
}
.tim {
 margin-top: 64px;
 text-align: center;
}
.tim h2 { margin-bottom: 24px; }
.anggota {
 display: flex;
 gap: 20px;
 flex-wrap: wrap;
 justify-content: center;
}
@media (max-width: 768px) {
 .cerita { flex-direction: column; gap: 24px; }
 .gambar { min-height: 220px; }
}
</style>
