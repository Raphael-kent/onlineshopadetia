<template>
 <header class="navbar">
  <div class="container navbar-inner">
   <RouterLink to="/" class="logo">SMK Yadika <span>&mdash;</span> Onlineshop</RouterLink>
   <nav class="links">
    <RouterLink to="/" class="link" exact-active-class="aktif">Landing</RouterLink>
    <RouterLink to="/product" class="link" active-class="aktif">Product</RouterLink>
    <RouterLink to="/about" class="link" active-class="aktif">About</RouterLink>
    <RouterLink to="/contact" class="link" active-class="aktif">Contact</RouterLink>
   </nav>
  </div>
 </header>
</template>
<style scoped>

.navbar {
 position: sticky;
 top: 0;
 z-index: 50;
 background: #fff;
 border-bottom: 1px solid var(--border);
 box-shadow: var(--sh                             adow);
}
.navbar-inner {
 display: flex;
 align-items: center;
 justify-content: space-between;
 gap: 16px;
 height: 64px;
}
.logo {
 font-weight: 700;
 font-size: 1.05rem;
 color: var(--text);
 white-space: nowrap;
}
.logo span {
 color: var(--accent);
}
.links {
 display: flex;
 gap: 8px;
}
.link {
 display: inline-block;
 padding: 8px 14px;
 border-radius: 999px;
 color: var(--text-muted);
 font-weight: 500;
 font-size: 0.95rem;
 transition: background 0.2s ease, color 0.2s ease;
}
.link:hover {
 color: var(--accent);
 background: var(--accent-soft);
}
.link.aktif {
 color: #fff;
 background: var(--accent);
 font-weight: 600;
}
@media (max-width: 640px) {
 .navbar-inner {
  flex-direction: column;
  gap: 8px;
  height: auto;
  padding-top: 12px;
  padding-bottom: 12px;
 }
 .logo { font-size: 0.98rem; }
 .link { padding: 6px 10px; font-size: 0.88rem; }
}
</style>
