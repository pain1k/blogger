<template>
    <PostsList :admin=true :posts="postsLoaded"/>
</template>

<script>
export default {
  layout:'admin',
  mounted() {
    this.$store.dispatch('nuxtServerInit')
    },
  computed:{
    postsLoaded() {
      return this.$store.getters.getPostsLoaded
    }
  },
  name: "index"
}
</script>

<style scoped>

</style>
