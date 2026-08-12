<template>
 <header class="navbar">
  <div class="container navbar-inner">
   <nav class="links">
    <RouterLink to="/" class="link">Lndg</RouterLink>
    <RouterLink to="/product" class="link">Prdk</RouterLink>
    <RouterLink to="/about" class="link">Tntg</RouterLink>
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
}
.navbar-inner {
 display: flex;
 align-items: center;
 justify-content: center;
 height: 64px;
}
.links {
 display: flex;
 gap: 16px;
}
.link {
 color: var(--text-muted);
 font-weight: 500;
 font-size: 0.95rem;
}
.link:hover {
 color: var(--accent);
 text-decoration: underline;
}
.link.router-link-active {
 color: var(--accent);
 font-weight: 700;
}
</style>
