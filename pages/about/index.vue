<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section class="about">
      <div class="container">
        <h1 class="title">About my blog</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, temporibus?</p>
        <intro title="sfsd">fasdasf</intro>
        <img src="@/assets/img/about.jpg" alt="">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, temporibus?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, temporibus?</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  head() {
    let title = 'About my SSR blog'
    let descr = 'About my SSR blog! with Nuxt.js'
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
}
</script>

<style lang="scss" scoped>
.about{
  text-align: center;
  p{
    margin-bottom: 10px;
  }
}
</style>
