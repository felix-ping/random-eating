<template>
  <div class="wrapper"> 
    <ele v-for='n in 4' :key='n'></ele>
  </div>
</template>

<script>
import ele from './ele'
export default {
  name:'pages',
  data(){
    return {
      lists:['pag1','pag2','pag3']
    }
  },
  components:{
    ele
  },
  methods:{
    clickColumn:function(e,n){
      console.log(e)
      console.log(n)
    }
  }
}
</script>

<style src="../main.css"></style>





