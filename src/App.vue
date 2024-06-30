<template>
  <!-- loading -->
  <div>
    <Button @click="isLoading = !isLoading"> 加载 </Button>
    当前状态： {{ isLoading }}
    <div class="directive-loading-test" v-loading="isLoading">我是内容</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const isLoading = ref(false)
</script>

<style scope>
.directive-loading-test {
  width: 200px;
  height: 100px;
  border-radius: 5px;
  border: 1px solid black;
  margin-top: 10px;
}
</style>
