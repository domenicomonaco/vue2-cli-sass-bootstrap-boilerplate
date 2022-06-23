<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->

    <TheHeader></TheHeader>

    <main>
      <div class="container">
        <h1 class="title">Titolo pagina</h1>

        <div>
          <div class="btn btn-primary">Testo</div>
        </div>
        <div>
          <div class="myButton">
            <div class="icon">X</div>
            testo di proba
          </div>

          <div class="myButton blue">
            <div class="icon">X</div>
            testo di proba
          </div>
        </div>
      </div>
    </main>

    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
  name: "App",
  components: { TheHeader, TheFooter },
};
</script>

<style lang="scss">
//@import "assets/scss/main.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.title {
  color: red;
}
</style>
