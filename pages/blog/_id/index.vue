<template>
<div class="wrapper-content wrapper-content--fixed">
  <Post :post="post"/>
  <comments :comments="comments"/>
  <NewComment :postId="$route.params.id"></NewComment>
</div>
</template>

<script>
import axios from "axios";
import Post from '@/components/blog/Post'
import NewComment from '@/components/comments/NewComment'
import Comments from '@/components/comments/Comments'
export default {
  components:{
    Post,NewComment,Comments
  },
  head() {
    let title = this.post.title
    let descr = this.post.descr
    let img = `${this.post.img}`
    let type = 'article'

    return {
      title: title,
      meta: [
        {hid: 'og:title', name: 'og:title', content: title},
        {hid: 'description', name: 'description', content: descr},
        {hid: 'og:description', name: 'og:description', content: descr},
        {hid: 'og:type', name: 'og:type', content: type},
        {hid: 'og:img', name: 'og:img', content: img}
      ]
    }
  },
  async asyncData(context){
    let [post,comments] = await Promise.all([
      axios.get(`https://blog-70308-default-rtdb.europe-west1.firebasedatabase.app/posts/${context.params.id}.json`),
      axios.get(`https://blog-70308-default-rtdb.europe-west1.firebasedatabase.app/comments.json`)
    ])
    let commentsArrayRes = Object.values(comments.data).filter(comment => (comment.postId === context.params.id && comment.publish))
    return {
      post: post.data,
      comments: commentsArrayRes
    }
  },
  name: "index",
}
</script>

<style lang="scss">
.post{
  max-width: 900px;
  margin: 0 auto;
}
.post-header{
  text-align: center;
  margin-bottom: 30px;
  img{
    margin-bottom: 16px;
    max-width: 400px;
  }
  p{
    color: #999999;
  }
}

.post-body{
  text-align: left;
}
</style>
