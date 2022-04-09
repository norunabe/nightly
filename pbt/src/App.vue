<template>
  <div class="container-fluid bg-secondary text-center text-light">
      <div class="row justify-content-center">
          <div class="col-12 col-sm-10 col-md-8 col-lg-6 bg-dark text-break" id="root">
              <div id="game" class="d-flex align-items-center justify-content-center"></div>
              <div id="text" class="d-flex align-items-center justify-content-center"></div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
    #root{
        overflow: hidden;
    }
    #game,#text{
        height: 50vh;
    }
</style>