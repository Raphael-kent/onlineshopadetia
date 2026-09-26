<template>
 <footer class="footer">
  <div class="container footer-inner">
   <p class="muted">&copy; blessing's &mdash; Onlineshop</p>
  </div>
 </footer>
</template>
<style scoped>
.footer {
  margin-top: auto;
  padding: 28px 0;
  border-top: 1px solid var(--midnight-deep);
  background: var(--midnight-deep);
}
.footer-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  text-align: center;
}
.muted {
  color: #faf6ef;
  font-size: 0.92rem;
}
</style>
