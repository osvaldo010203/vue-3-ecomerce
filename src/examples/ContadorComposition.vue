<script setup lang="ts">
    import { onMounted, ref } from 'vue'
    const count = ref(0);
    function aumentar(){
        count.value+=1;
    }
    onMounted(() =>{
        console.log('El valor del contador es '+ count.value)
    });
</script>
<template>
    <p>Hola soy una composision de Contador API</p>
    <h1>Contador:  {{ count }}</h1>
    <button @click="aumentar">
        no hace nada
    </button>
</template>