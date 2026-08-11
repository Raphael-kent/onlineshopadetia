<script setup>
import ProductCard from '../components/ProductCard.vue'
const daftarProduk = [
 { id: 1, nama: 'Kaos Sekolah', harga: 75000, gambar:
'https://placehold.co/150' },
 { id: 2, nama: 'Topi Sekolah', harga: 35000, gambar:
'https://placehold.co/150' },
 { id: 3, nama: 'Tas Sekolah', harga: 120000, gambar:
'https://placehold.co/150' },
]
</script>
<template>
 <main class="page">
  <div class="container">
   <header class="head">
    <h1>Produk Kami</h1>
    <p>Pilih seragam dan perlengkapan sekolahmu.</p>
   </header>
   <div class="grid">
    <ProductCard
     v-for="produk in daftarProduk"
     :key="produk.id"
     :nama="produk.nama"
     :harga="produk.harga"
     :gambar="produk.gambar"
    />
   </div>
  </div>
 </main>
</template>
<style scoped>
.head { margin-bottom: 28px; }
.head p { margin-top: -4px; }
.grid {
 display: grid;
 grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
 gap: 24px;
 justify-items: center;
}
</style>
