<template>
  <div id="app">  
    <AppHeader />
    <router-view/>
  </div>
</template>


<script>
import AppHeader from "./components/AppHeader/AppHeader";
export default {
  components: {
    AppHeader
  }
};
</script>


<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .about,
  .contact,
  .home,
  .package,
  .rooms,
  .tour {
    padding: 20px;
  }
}
</style>
