<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

defineProps(['nama', 'harga', 'warna'])

const zoomTerbuka = ref(false)

function tambahKeKeranjang(nama) {
 const suara = new Audio('/audio/notifikasi.mp3')
 suara.play()
 alert(`${nama} ditambahkan ke keranjang!`)
}

function bukaZoom() {
 zoomTerbuka.value = true
 document.body.style.overflow = 'hidden'
}

function tutupZoom() {
 zoomTerbuka.value = false
 document.body.style.overflow = ''
}

function tanganiEscape(event) {
 if (event.key === 'Escape' && zoomTerbuka.value) tutupZoom()
}

onMounted(() => window.addEventListener('keydown', tanganiEscape))
onBeforeUnmount(() => {
 window.removeEventListener('keydown', tanganiEscape)
 document.body.style.overflow = ''
})
</script>
<template>

 <div class="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 p-4">
  <div
   :class="warna"
   class="flex items-center justify-center h-40 rounded-lg text-white text-base font-semibold uppercase cursor-pointer transition-opacity duration-200 hover:opacity-90"
   @click="bukaZoom"
  >
   {{ nama }}
  </div>
  <h3 class="mt-2 text-sm font-semibold">{{ nama }}</h3>
  <p class="mt-1 text-xs text-gray-500">Rp {{ harga.toLocaleString('id-ID') }}</p>
  <button
   class="mt-2 w-full bg-amber-600 hover:bg-amber-700 text-white text-xs py-1 px-3 rounded"
   @click="tambahKeKeranjang(nama)"
  >
   Tambah ke Keranjang
  </button>
 </div>

 <Teleport to="body">
  <div
   v-if="zoomTerbuka"
   class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
   @click="tutupZoom"
  >
   <div
    :class="warna"
    class="relative flex aspect-square w-full max-w-md items-center justify-center rounded-2xl text-white text-3xl font-bold uppercase shadow-2xl"
    @click.stop
   >
    {{ nama }}
   </div>
  </div>
 </Teleport>
</template>
