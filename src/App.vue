<template>
  <nav>
    <router-link :to="{ name: 'home' }">Home</router-link> |
    <router-link :to="{ name: 'todos.index' }">Todos</router-link>
  </nav>
  <router-view/>
</template>

<style>
@import url('https://pro.fontawesome.com/releases/v5.10.0/css/all.css');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
</style>

<style lang="sass">
@import "./assets/styles/eti.scss"
</style>