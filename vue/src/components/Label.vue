<template>
  <label class="label">
      {{label}}
  </label>
</template>

<script>
export default {
    props: {
        label: {}
    }
}
</script>

<style>
.label {
    display: flex;
    justify-content: initial;
    padding: 1px 10PX ;
    margin-top: 30px;

    font-size: 20px;
}
</style>