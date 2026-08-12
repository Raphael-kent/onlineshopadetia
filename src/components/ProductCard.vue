<script setup>
import { ref } from 'vue'
defineProps(['nama', 'harga', 'gambar'])
const gambarDipilih = ref(null)
function bukaPreview(src) {
 gambarDipilih.value = src
}
function tutupPreview() {
 gambarDipilih.value = null
}
function tambahKeKeranjang(nama) {
 const suara = new Audio('/audio/notifikasi.mp3')
 suara.play().catch(() => {})
  alert(`${nama} masuk krnjng!`)
}
</script>
<template>
 <div class="card">
  <div class="img-wrap">
   <img :src="gambar" :alt="nama" @click="bukaPreview(gambar)" />
  </div>
  <h3>{{ nama }}</h3>
  <p class="harga">Rp {{ harga.toLocaleString('id-ID') }}</p>
  <button @click="tambahKeKeranjang(nama)">Msk ke Krnjng</button>
 </div>
 <div v-if="gambarDipilih" class="preview-overlay" @click="tutupPreview">
  <img :src="gambarDipilih" class="preview-besar" />
 </div>
</template>
<style scoped>
.card {
 width: 100%;
 max-width: 260px;
 border: 1px solid var(--border);
 background: #fff;
 padding: 14px;
 text-align: center;
}
.img-wrap {
 background: var(--bg-soft);
 margin-bottom: 12px;
}
.img-wrap img {
 width: 100%;
 aspect-ratio: 1 / 1;
 object-fit: cover;
 cursor: zoom-in;
 transition: transform 0.3s ease;
}
.img-wrap img:hover { transform: scale(1.05); }
h3 { font-size: 1.05rem; margin-bottom: 4px; }
.harga {
 color: var(--accent);
 font-weight: 700;
 font-size: 1.02rem;
 margin-bottom: 12px;
}
button {
 width: 100%;
 padding: 10px 0;
 border: none;
 border-radius: 6px;
 background: var(--accent);
 color: #fff;
 font-family: inherit;
 font-size: 0.92rem;
 font-weight: 600;
 cursor: pointer;
}
button:hover { background: var(--accent-dark); }
.preview-overlay {
 position: fixed;
 inset: 0;
 z-index: 60;
 background: rgba(15, 23, 42, 0.72);
 display: flex;
 align-items: center;
 justify-content: center;
 cursor: zoom-out;
 padding: 24px;
}
.preview-besar {
 max-width: 80%;
 max-height: 80%;
 border-radius: 12px;
 box-shadow: 0 24px 64px rgba(0, 0, 0, 0.4);
}
</style>
