<script setup lang="ts">
import type { LigneDisjoncteurModel } from '@/modules/tableau-electrique/models/ligne-disjoncteur.model'

const props = defineProps<{
  type: 'view' | 'print'
  disjoncteur: LigneDisjoncteurModel
}>()

const imgUrl = new URL(`/src/assets/${props.disjoncteur.type}.png`, import.meta.url).href
</script>

<template>
  <div class="disjoncteur" :class="type">
    <img :src="imgUrl" :alt="disjoncteur.type" :title="disjoncteur.type" />

    <div class="pieces" v-if="type === 'view'">
      <span class="piece" v-for="(piece, index) in disjoncteur.pieces" :key="index">{{
        piece
      }}</span>
    </div>

    <ul v-if="type === 'view' && disjoncteur.detail">
      <li v-for="(detail, index) in disjoncteur.detail" :key="index">{{ detail }}</li>
    </ul>

    <p v-if="type === 'print'">{{ disjoncteur.shortDescription }}</p>
  </div>
</template>

<style scoped>
.disjoncteur {
  &.view {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    min-height: 270px;
    padding: 10px;
    user-select: none;

    & img {
      height: 80px;
    }

    .pieces {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 10px;

      .piece {
        background-color: #a1d3f4;
        margin: 2px;
        padding: 2px 8px;
        border-radius: 10px;
      }
    }

    & ul {
      margin-top: 10px;
      align-self: flex-start;
    }

    &:not(:first-child) {
      border-left: 1px solid #a1d3f4;
    }

    &:hover {
      cursor: pointer;
      transition: 0.25s background-color;
      background-color: #edf6fd;
    }
  }

  &.print {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1.8cm;
    padding: 1mm;
    border-left: 1px solid #000000;

    & img {
      width: 8mm;
    }

    & p {
      margin: 2mm 0 0;
      text-align: center;
      font-size: 0.75rem;
    }
  }
}
</style>
