<template>
  <div id="app">
    <router-link :to="{path: '/'}">Home</router-link>
    <router-link :to="{path: '/about'}">About</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  methods: {
    sayHello() {
      alert('hello ssr');
    }
  }
}
</script>
