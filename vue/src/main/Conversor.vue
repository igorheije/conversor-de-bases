<template>

    <div class="conversor">
    <Header/>
    <Label label="Decimal"/>
    <Input name="dec"/>
    <Label label="Binário"/>
    <Input name="bin"/>
    <Label label="Octal"/>
    <Input name="oct"/>
    <Label label="Hexadecimal"/>
    <Input name="hex"/>
    </div>
    
</template>

<script>
import Header from "../components/Header"
import Label from "../components/Label"
import Input from "../components/Input"

export default {
    components: { Label, Input, Header},

    
}
</script>

<style>
.conversor {
    height: 500px;
    width:  500px;
    border-radius: 5px;
    overflow: hidden;
    background-color: #11411f;

    display: grid;
    padding: 10px;
}
</style>