<template>
  <div class="painel">
    <Conversor/>
     
  </div>
</template>

<script>
import Conversor from "./main/Conversor"

export default {
    components: { Conversor }
}
</script>

<style>
.painel {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid;
    border-radius: 5px;
    
    text-align: center;
    padding: 3px;

    color: white;
    background-color: #60cf82;

    
    height: 520px;
    width:  520px;
    margin: auto;
    margin-top: 0px;
}
</style>