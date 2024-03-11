<template>
  <div class="w-full fixed z-50 ">
    <div class="bg-red-300" id="header">
      header
    </div>
    <slot />
    <footer class="footer footer-center p-4 bg-base-300 text-base-content">
      <aside>
        <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
      </aside>
    </footer>
  </div>
</template>

<script setup>
</script>
