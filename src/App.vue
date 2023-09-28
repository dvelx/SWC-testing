<template>
  <div class="container">
    <ToolBar />
    <MainDashboard />
  </div>
</template>

<script setup lang="ts">
import ToolBar from "@/components/SideBar.vue";
import MainDashboard from "@/components/MainDashboard.vue";
</script>

<style scoped>
.container {
  display: flex;
  height: 100%;
}
</style>
