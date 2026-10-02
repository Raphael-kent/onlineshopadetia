<script setup>
import { ref } from 'vue'

defineProps(['nama', 'jabatan', 'inisial', 'foto'])

const fotoGagal = ref(false)
</script>
<template>
 <div class="team-card">
  <div class="avatar">
   <img
    v-if="foto && !fotoGagal"
    :src="foto"
    :alt="nama"
    class="h-full w-full object-cover"
    @error="fotoGagal = true"
   />
   <template v-else>{{ inisial }}</template>
  </div>
  <h3>{{ nama }}</h3>
  <p class="jabatan">{{ jabatan }}</p>
 </div>
</template>
<style scoped>
.team-card {
  flex: 1 1 200px;
  max-width: 240px;
  padding: 28px 20px;
  background: #fff;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  text-align: center;
}
.avatar {
  width: 84px;
  height: 84px;
  margin: 0 auto 14px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  overflow: hidden;
  background: var(--accent-soft);
  color: var(--accent-dark);
  font-size: 1.6rem;
  font-weight: 700;
}
h3 { margin-bottom: 2px; }
.jabatan {
  color: var(--accent-dark);
  font-weight: 600;
  font-size: 0.92rem;
}
</style>
