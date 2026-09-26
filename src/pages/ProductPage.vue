<script setup>
import ProductCard from '../components/ProductCard.vue'

const daftarProduk = [
 { id: 1, nama: 'JA3 max volume', harga: 2500000, warna: 'bg-indigo-950', gambar: '/images/Basketball 4 life.jpg' },
 { id: 2, nama: 'JA4 nightmare', harga: 3400000, warna: 'bg-amber-800', gambar: '/images/Ja 4.jpg' },
 { id: 3, nama: 'JA3 animal pack tiger', harga: 3500000, warna: 'bg-slate-500', gambar: '/images/ja3tiger.jpg' },
]
</script>
<template>
 <main class="mx-auto w-full max-w-6xl flex-1 px-4 py-8">
  <h1 class="mb-6 text-2xl font-bold">Produk Kami - sipaling JA tuh</h1>
  <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
   <ProductCard
    v-for="produk in daftarProduk"
    :key="produk.id"
    :nama="produk.nama"
    :harga="produk.harga"
    :warna="produk.warna"
    :gambar="produk.gambar"
   />
  </div>
 </main>
</template>
