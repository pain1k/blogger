<template>
  <NewPostForm
    :postEdit="post"
    @submit="onSubmit"/>
</template>

<script>
import axios from "axios";
import NewPostForm from '@/components/admin/NewPostForm'
export default {
  components:{
    NewPostForm
  },
  layout: 'admin',
  asyncData(context){
      return axios.get(`https://blog-70308-default-rtdb.europe-west1.firebasedatabase.app/posts/${context.params.postId}.json`)
        .then(res =>{
          return {
            post:{...res.data,id:context.params.postId}
          }
        })
        .catch(e => context.error(e))
  },
  methods:{
    onSubmit(post){
      console.log('Post editing!')
      this.$store.dispatch('editPost',post)
        .then(() => {
          this.$router.push('/admin')
        })
    }
  },
  name: "index"
}
</script>

<style scoped>

</style>
