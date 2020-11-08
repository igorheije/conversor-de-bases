<template>
  <input class="input"
    type="text"
    v-on:keypress="valor"
    
    :name="{bin, dec, oct, hex}"
  >
      
  
</template>

<script>
export default {
    
    methods: {
        valor: function(){
            return console.log('oi')
        }
    },
    props:{
        bin: {type: Boolean},
        dec: {type: Boolean},
        oct: {type: Boolean},
        hex: {type: Boolean}
    }, 
    watch: {

    }
}
</script>

<style>
.input {
    width: 470px;
    margin:  10px 10px 0px 10px;
    font-size: 20px;
    padding: 5px;

    
}

input:focus {
    outline-color: #2b5f34;
}
</style>