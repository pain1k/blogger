<template>
<div class="control">
  <label>
    <slot/>
  </label>
  <input
  v-bind="$attrs"
  :value="value"
  :type="type"
  :required="required"
  @input="$emit('input',$event.target.value)"
  >
  </input>
</div>
</template>

<script>
export default {
  props:{
    value:{
      type:String,
      default:''
    },
    type:{
      type:String,
      default:'text'
    },
    required:{
      type:Boolean,
      default:true
    }
  },
  name: "Input"
}
</script>

<style scoped>

</style>
