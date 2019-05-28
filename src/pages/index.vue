<template>
  <f-container class="content">
    <div class="flux-logo"><span>[</span>Flux<span>]</span>Widget Base</div>
    <p class="version"></p>

    <ul class="menu">
      <li v-for="(item, index) in menuItems" :key="index">
        <a target="_blank" :href="item.url">
          {{ item.name }}
        </a>
      </li>
    </ul>
  </f-container>
</template>

<script>
export default {
  data: () => ({
    menuItems: [
      {
        name: 'Documentation',
        url: 'https://github.com/doc88git/flux-widget-base'
      },
      {
        name: 'Style Guide',
        url: 'https://github.com/doc88git/flux-style-guide'
      },
      {
        name: 'Flux-CLI',
        url: 'https://github.com/doc88git/flux-cli'
      },
      {
        name: 'Doc88',
        url: 'http://doc88.com.br'
      }
    ]
  })
}
</script>

<style lang="scss">
.content {
  @apply flex flex-wrap mx-auto items-center justify-center h-screen;
  .flux-logo {
    @apply w-full text-center m-0 text-5xl;
    color: theme('colors.primary');
    span {
      @apply text-6xl mx-2;
      color: theme('colors.secondary');
    }
  }
  ul.menu {
    @apply w-full text-center uppercase;
    li {
      @apply inline mx-10;
      color: theme('colors.secondary');
      a:hover {
        color: theme('colors.black');
      }
    }
  }
}
</style>
