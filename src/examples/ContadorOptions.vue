<script  lang="ts">
  export default {
    data() {
        return{
            count:0
        }
    },
    methods:{
        increase(){
           this.count+=1; 
        }
    },
    mounted(){
        console.log('El valor inicial de el contador es '+this.count);
    }
  }
</script>

<template>
<p>Objetivo: Tienes que llegar a 20 clicks</p>
<h1>Contador: {{ count }}</h1>
<button @click="increase">
    Aumentar contador
</button>
<p v-if="count<=10">Vamos tu puedes!</p>
<p v-else>Yate falta muy poco...</p>
</template>