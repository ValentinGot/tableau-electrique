<script setup lang="ts"></script>

<template>
  <header>
    <ul>
      <li><router-link to="/" active-class="active">Accueil</router-link></li>
      <li><router-link to="/impression" active-class="active">Impression</router-link></li>
    </ul>
  </header>

  <main>
    <router-view></router-view>
  </main>
</template>

<style scoped>
header {
  padding: 20px;
  background-color: #a1d3f4;
  box-shadow: 0 3px 5px -1px #0003, 0 6px 10px #00000024, 0 1px 18px #0000001f;
  margin-bottom: 20px;

  & ul {
    display: flex;
    list-style-type: none;
    padding: 0;

    & a {
      color: #041825;
      text-decoration: none;

      &.active,
      &:hover {
        text-decoration: underline;
      }
    }

    & li:not(:first-child) {
      margin-left: 10px;
    }
  }

  @media print {
    display: none;
  }
}
</style>
