<template>
  <div class="w-full fixed z-50 ">
    <div class="min-h-[50px] bg-red-300 flex items-center justify-between px-4" id="header">
        <div class='flex-none w-15'>logo</div>
        <div class="grow text-center">titile</div>
        <div class='flex-none w-15 relative' @click="() => {isShowMenu = !isShowMenu}">
          <div class="avatar placeholder cursor-pointer">
            <div class="bg-neutral text-neutral-content rounded-full w-8 hover:bg-neutral-800">
              <span class="text-xs">PP</span>
            </div>
          </div>
          <div v-show="isShowMenu" class="absolute mt-1 right-0">
            <ul class="menu bg-base-200 w-56 rounded-box">
              <li>
                <a class="text-black">
                  <Icon name="mdi:account"  class="h-5 w-5"/>
                  Account
                </a>
              </li>
              <li>
                <a class="text-red-500">
                  <Icon name="mdi:logout"   class="h-5 w-5"/>
                  Log out
                </a>
              </li>
            </ul>
          </div>
        </div>
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
import {ref} from 'vue'
const isShowMenu = ref(false)
</script>
