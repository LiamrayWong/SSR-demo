<template>
  <div>
    <div>id: {{item.id}}</div>
    <div>name: {{item.name}}</div>
  </div>
</template>

<script>
export default {
  asyncData({ store, route }) {
    // 触发 action 后，会返回 Promise
    return store.dispatch('fetchItems', route.params.id)
  },
  computed: {
    // 从 store 的 state 对象中的获取 item。
    item() {
      return this.$store.state.item;
    }
  }
}
</script>
