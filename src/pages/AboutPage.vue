<script setup>
import TeamCard from '../components/TeamCard.vue'

const daftarTim = [
 { id: 1, nama: 'Andi', jabatan: 'Ketua Tim', inisial: 'A' },
 { id: 2, nama: 'Budi', jabatan: 'Desain UI & UX', inisial: 'B' },
 { id: 3, nama: 'Citra', jabatan: 'Programmer', inisial: 'C' },
 { id: 4, nama: 'Dina', jabatan: 'Bendahara', inisial: 'D' },
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
     <p>Onlineshop ini dikelola langsung oleh siswa SMK Yadika Soreang jurusan PPLG, sebagai proyek belajar sekaligus mengembangkan keterampilan membuat dan mengelola perlengkapan sekolah dengan mudah dan harga terjangkau.</p>
     <p>Setiap produk dipilih dan dikelola oleh tim siswa, mulai dari penentuan bahan, harga, sampai layanan pengambilan di koperasi sekolah. Dengan begitu, kualitas dan harganya tetap terjaga untuk teman-teman semua.</p>
    </div>
    <div class="gambar">
     <p>[Foto / ilustrasi toko]</p>
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
 background: var(--gradient-header);
 color: #fff;
 text-align: center;
 padding: 64px 20px;
}
.page-header h1 {
 color: #fff;
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
 display: grid;
 place-items: center;
 background: var(--bg-soft);
 border: 2px dashed var(--border);
 border-radius: var(--radius);
 color: var(--text-muted);
 font-weight: 600;
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
