<script setup>
defineProps(['nama', 'harga', 'warna'])

function tambahKeKeranjang(nama) {
 const suara = new Audio('/audio/notifikasi.mp3')
 suara.play()
 alert(`${nama} ditambahkan ke keranjang!`)
}
</script>
<template>
 <div class="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 p-4">
  <div
   :class="warna"
   class="flex items-center justify-center h-40 rounded-lg text-white text-base font-semibold uppercase"
  >
   {{ nama }}
  </div>
  <h3 class="mt-2 text-sm font-semibold">{{ nama }}</h3>
  <p class="mt-1 text-xs text-gray-500">Rp {{ harga.toLocaleString('id-ID') }}</p>
  <button
   class="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white text-xs py-1 px-3 rounded"
   @click="tambahKeKeranjang(nama)"
  >
   Tambah ke Keranjang
  </button>
 </div>
</template>
