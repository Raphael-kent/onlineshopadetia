<template>
 <header class="navbar">
  <div class="container navbar-inner">
   <RouterLink to="/" class="brand">
    <span class="logo">Y</span>
    <span class="brand-text">Onlineshop <strong>SMK Yadika</strong></span>
   </RouterLink>
   <nav class="links">
    <RouterLink to="/" class="link">Landing</RouterLink>
    <RouterLink to="/product" class="link">Produk</RouterLink>
    <RouterLink to="/about" class="link">Tentang</RouterLink>
   </nav>
  </div>
 </header>
</template>
<style scoped>
.navbar {
 position: sticky;
 top: 0;
 z-index: 50;
 background: rgba(255, 255, 255, 0.9);
 backdrop-filter: blur(8px);
 border-bottom: 1px solid var(--border);
}
.navbar-inner {
 display: flex;
 align-items: center;
 justify-content: space-between;
 height: 64px;
}
.brand {
 display: flex;
 align-items: center;
 gap: 10px;
 color: var(--text);
 font-size: 1.02rem;
 font-weight: 500;
}
.brand:hover { color: var(--text); }
.logo {
 display: grid;
 place-items: center;
 width: 34px;
 height: 34px;
 border-radius: 10px;
 background: var(--accent);
 color: #fff;
 font-weight: 700;
}
.brand-text strong { color: var(--accent); font-weight: 700; }
.links {
 display: flex;
 gap: 4px;
}
.link {
 padding: 8px 14px;
 border-radius: 999px;
 color: var(--text-muted);
 font-weight: 500;
 font-size: 0.95rem;
 transition: color 0.2s ease, background 0.2s ease;
}
.link:hover {
 color: var(--accent);
 background: var(--accent-soft);
}
.link.router-link-active {
 color: var(--accent);
 background: var(--accent-soft);
 font-weight: 600;
}
@media (max-width: 480px) {
 .brand-text { font-size: 0.9rem; }
 .link { padding: 8px 10px; font-size: 0.85rem; }
}
</style>
