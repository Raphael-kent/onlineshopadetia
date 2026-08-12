<script setup>
defineProps({
 nama: { type: String, required: true },
 jabatan: { type: String, required: true },
})
function inisial(nama) {
 return nama
  .trim()
  .split(' ')
  .map((kata) => kata[0])
  .slice(0, 2)
  .join('')
  .toUpperCase()
}
</script>
<template>
 <div class="team-card">
  <div class="avatar">{{ inisial(nama) }}</div>
  <h3>{{ nama }}</h3>
  <p class="jabatan">{{ jabatan }}</p>
 </div>
</template>
<style scoped>
.team-card {
 padding: 28px 20px;
 background: #fff;
 border: 1px solid var(--border);
 text-align: center;
}
.avatar {
 width: 84px;
 height: 84px;
 margin: 0 auto 14px;
 display: grid;
 place-items: center;
 border-radius: 50%;
 background: var(--accent-soft);
 color: var(--accent);
 font-size: 1.6rem;
 font-weight: 700;
}
h3 { margin-bottom: 2px; }
.jabatan {
 color: var(--accent);
 font-weight: 600;
 font-size: 0.92rem;
}
</style>
