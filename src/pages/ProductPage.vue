<script setup>
import ProductCard from '../components/ProductCard.vue'

const daftarProduk = [
 { id: 1, nama: 'Kaos', harga: 25000, warna: 'bg-indigo-950' },
 { id: 2, nama: 'Topi', harga: 15000, warna: 'bg-amber-800' },
 { id: 3, nama: 'Tas', harga: 40000, warna: 'bg-slate-500' },
]
</script>
<template>
 <main class="mx-auto w-full max-w-6xl flex-1 px-4 py-8">
  <h1 class="mb-6 text-2xl font-bold">Produk Kami</h1>
  <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
   <ProductCard
    v-for="produk in daftarProduk"
    :key="produk.id"
    :nama="produk.nama"
    :harga="produk.harga"
    :warna="produk.warna"
   />
  </div>
 </main>
</template>
