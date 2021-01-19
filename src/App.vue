<template>
  <div>
    <p>hello world</p>
    <button @click="sayHello">say hello</button>
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
