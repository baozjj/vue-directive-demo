<template>
  <div class="container">
    <!-- loading -->
    <loadingDirective/>
    <!-- copy -->
    <copyDirective/>
  </div>
</template>

<script setup lang="ts">
import loadingDirective from './directives/loading/test.vue'
import copyDirective from './directives/copy/test.vue'
</script>

<style scope>
.container {
  display: flex;
  flex-direction: column;
}
</style>
