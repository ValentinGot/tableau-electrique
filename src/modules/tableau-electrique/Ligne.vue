<script setup lang="ts">
import LigneDisjoncteur from '@/modules/tableau-electrique/LigneDisjoncteur.vue'
import type { LigneModel } from '@/modules/tableau-electrique/models/ligne.model'

defineProps<{
  type: 'view' | 'print'
  ligne: LigneModel
}>()
</script>

<template>
  <div class="ligne" :class="type">
    <div class="differentiel" v-if="type === 'print'">Interrupteur différentiel</div>
    <LigneDisjoncteur
      v-for="disjoncteur in ligne.disjoncteurs"
      :type="type"
      :disjoncteur="disjoncteur"
      :key="disjoncteur.id"
    />
  </div>
</template>

<style scoped>
.ligne {
  &.view {
    display: flex;
    border: 1px solid #a1d3f4;
  }

  &.print {
    display: flex;
    height: 3cm;
    border: 1px solid #000000;
    border-left: none;

    .differentiel {
      display: flex;
      align-items: center;
      text-align: center;
      width: 3.6cm;
    }
  }
}
</style>
