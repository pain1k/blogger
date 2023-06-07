<template>
  <div class="wrapper-content wrapper-content--fixed">
      <Promo/>
      <Intro title="My lasts posts:"/>
      <PostsList :posts="postsLoaded"/>
      <Contacts/>
  </div>
</template>

<script>
import Promo from "@/components/Promo";
import Contacts from "@/components/Contacts";
export default {
  components:{
    Promo,Contacts
  },
  head() {
    let title = 'My SSR blog'
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
  name: 'IndexPage'
}
</script>
