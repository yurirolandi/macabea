<template>
  <div id="app">  
    <AppHeader />
    <router-view/>
    <AppFooter />
  </div>
</template>


<script>
import AppHeader from "./components/AppHeader/AppHeader";
import AppFooter from "./components/AppFooter/AppFooter";
export default {
  components: {
    AppHeader,
    AppFooter
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

  .section {
    padding: 90px 20px;
    .title {
      &:first-child{
        margin-top: 30px;
      }
      span {
        display: block;
        height: 1px;
        width: 100px;
        margin: 0 auto;
        background-color: #2c3e50;
      }
    }

    .text{
      text-align: justify;
    }

    .subtitle {
      margin: 20px 0 30px 0;
    }

    .container {
      display: flex;
      justify-content: space-evenly;
      align-content: center;
      flex-wrap: wrap;
      padding: 30px;
    }
  }
}
</style>
