<script setup lang="ts">
import Ligne from '@/modules/tableau-electrique/Ligne.vue'
import { tableauElectrique } from '@/tableau-electrique.data'

const lignes = tableauElectrique
</script>

<template>
  <div class="lignes-container">
    <Ligne v-for="ligne in lignes" type="print" :ligne="ligne" :key="ligne.id" />
  </div>
</template>

<style scoped>
.lignes-container {
  display: inline-flex;
  flex-direction: column;

  & > *:not(:first-child) {
    margin-top: 1cm;
  }
}
</style>
