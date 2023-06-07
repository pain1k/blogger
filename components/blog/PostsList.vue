<template>
<section class="post-list">
  <div class="container">
    <div class="posts-wrapper">
      <post-preview
        v-for="post in posts"
        :key="post.id"
        :admin="admin"
        :post="post"
      />
    </div>
  </div>
</section>
</template>

<script>
import PostPreview from '@/components/blog/PostPreview'
export default {
  name: "PostsList",
  props:{
    posts:{
      type:Array,
      required:true
    },
    admin:{
      type:Boolean,
      default:false
    }
  },
  components :{
    PostPreview
  }
}
</script>

<style lang="scss">
.posts-wrapper{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
