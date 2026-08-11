<script setup>
const tahun = new Date().getFullYear()
</script>
<template>
 <footer class="footer">
  <div class="container footer-inner">
   <p class="muted">&copy; {{ tahun }} SMK Yadika Soreang &mdash; Onlineshop Sekolah</p>
   <p class="muted small">Dikelola oleh siswa jurusan PPLG</p>
  </div>
 </footer>
</template>
<style scoped>
.footer {
 margin-top: auto;
 padding: 28px 0;
 border-top: 1px solid var(--border);
 background: var(--bg-soft);
}
.footer-inner {
 display: flex;
 flex-direction: column;
 align-items: center;
 gap: 4px;
 text-align: center;
}
.muted {
 color: var(--text-muted);
 font-size: 0.92rem;
}
.small { font-size: 0.85rem; }
</style>
