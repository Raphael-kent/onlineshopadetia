<script setup>
defineProps(['nama', 'jabatan', 'inisial'])
</script>
<template>
 <div class="team-card">
  <div class="avatar">{{ inisial }}</div>
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
 border-radius: var(--radius);
 box-shadow: var(--shadow);
 text-align: center;
 transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.team-card:hover {
 transform: translateY(-4px);
 box-shadow: var(--shadow-hover);
}
.avatar {
 width: 84px;
 height: 84px;
 margin: 0 auto 14px;
 display: grid;
 place-items: center;
 border-radius: 50%;
 background: var(--gradient-hero);
 color: #fff;
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
