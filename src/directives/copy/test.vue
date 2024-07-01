<template>
  <!-- copy -->
    <Button v-copy="value"> 复制 </Button>
    <input type="text" v-model="value"/>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value = ref('')
</script>