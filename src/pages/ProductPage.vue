<script setup>
import ProductCard from '../components/ProductCard.vue'

const daftarProduk = [
 { id: 1, nama: 'tas', harga: 300000, warna: 'bg-indigo-950', gambar: '/images/tas.jpg' },
 { id: 2, nama: 'kaos', harga: 100000, warna: 'bg-amber-800', gambar: '/images/kaos.jpg' },
 { id: 3, nama: 'sepatu', harga: 450000, warna: 'bg-slate-500', gambar: '/images/sepatu.jpg' },
]
</script>
<template>
 <main class="mx-auto w-full max-w-6xl flex-1 px-4 py-8">
  <h1 class="mb-6 text-2xl font-bold">Produk Kami </h1>
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
