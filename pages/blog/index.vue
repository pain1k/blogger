<template>
  <div class="wrapper-content wrapper-content--fixed">
    <Intro title="My posts:"/>
    <PostsList :posts="postsLoaded"/>
  </div>
</template>

<script>
import PostPreview from "~/components/blog/PostPreview";
export default {
  head() {
    let title = 'My blog page'
    let descr = 'My SSR blog! with Nuxt.js'
    let type = 'site'
    return {
      title: title,
      meta: [
        {hid: 'og:title', name: 'og:title', content: title},
        {hid: 'description', name: 'description', content: descr},
        {hid: 'og:description', name: 'og:description', content: descr},
        {hid: 'og:type', name: 'og:type', content: type}
      ]
    }
  },
  computed:{
    postsLoaded() {
      return this.$store.getters.getPostsLoaded
    }
  },
  components:{
    PostPreview
  },
  name: 'IndexPage'
}
</script>
