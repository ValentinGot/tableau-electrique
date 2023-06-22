<script setup lang="ts">
import Ligne from '@/modules/tableau-electrique/Ligne.vue'
import { tableauElectrique } from '@/tableau-electrique.data'

const lignes = tableauElectrique
</script>

<template>
  <div class="lignes-container">
    <Ligne v-for="ligne in lignes" type="view" :ligne="ligne" :key="ligne.id" />
  </div>
</template>

<style scoped>
.lignes-container {
  padding: 0 20px 20px;

  & > *:not(:first-child) {
    margin-top: 20px;
  }
}
</style>
