<template>
<section class="contact">
  <div class="container">
    <h2 class="title">Contact Me!</h2>
    <Message v-if="message" :message="message" />
    <form @submit.prevent="onSubmit" class="contact-form">
      <AppInput v-model="user.name">Name:</AppInput>
      <AppInput v-model="user.email" type="email">Email:</AppInput>
      <AppTextarea v-model="user.text">Text:</AppTextarea>
      <div class="controls">
        <AppButton class="btnWhite">Submit!</AppButton>
      </div>
    </form>
  </div>
</section>
</template>

<script>
export default {
  data(){
    return{
      message:null,
      user:{
        name:'',
        email:'',
        text:'',
      }
    }
  },
  methods:{
    onSubmit(){
      this.message="Submitted!"
      this.user.name=''
      this.user.email=''
      this.user.text=''

      setTimeout(() => {
        this.message = null
      },2000)
    }
  },
  name: "Contacts"
}
</script>

<style lang="scss">
.contact{
  text-align: center;
  background-color: #4f68f4;
  color: #fff;
  .title{
    color: #fff;
  }
  &-form{
    max-width: 600px;
    margin: 30px auto;
  }
  .controls{
    margin: 30px;
  }
}
</style>
