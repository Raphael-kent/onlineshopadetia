<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

defineProps(['nama', 'harga', 'warna', 'gambar'])

const zoomTerbuka = ref(false)
const gambarGagal = ref(false)

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

 <div class="rounded-lg border border-krem-300 bg-white p-4">
  <div
   :class="gambar ? '' : warna"
   class="relative flex h-40 items-center justify-center overflow-hidden rounded-md text-white text-base font-semibold uppercase cursor-pointer"
   @click="bukaZoom"
  >
   <img
    v-if="gambar && !gambarGagal"
    :src="gambar"
    :alt="nama"
    class="h-full w-full object-cover"
    @error="gambarGagal = true"
   />
   <template v-else>{{ nama }}</template>
  </div>
  <h3 class="mt-3 text-sm font-semibold">{{ nama }}</h3>
  <p class="mt-1 text-xs text-sage-700">Rp {{ harga.toLocaleString('id-ID') }}</p>
  <button
   class="mt-3 w-full rounded-md bg-sage-400 text-white text-xs font-semibold py-2 hover:bg-sage-600"
   @click="tambahKeKeranjang(nama)"
  >
   Tambah ke Keranjang
  </button>
 </div>

  <Teleport to="body">
   <div
    v-if="zoomTerbuka"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
    @click="tutupZoom"
   >
    <div
     v-if="gambar && !gambarGagal"
     class="relative flex aspect-square w-full max-w-md items-center justify-center overflow-hidden rounded-lg bg-white"
     @click.stop
    >
     <img :src="gambar" :alt="nama" class="h-full w-full object-cover" @error="gambarGagal = true" />
    </div>
    <div
     v-else
     :class="warna"
     class="relative flex aspect-square w-full max-w-md items-center justify-center rounded-lg text-white text-3xl font-bold uppercase"
     @click.stop
    >
     {{ nama }}
    </div>
   </div>
  </Teleport>
</template>
