<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function () {
    return {
      nomJug1 : 'Pedro',
      nomJug2 : 'Cacho',
    }
  }
}
</script>

<style>
  html, body, #app{
    height: 100%;
  }

  body{
    background-image: url("./assets/bgg.svg");
    background-repeat: repeat;
    background-size:cover;
    font-family: 'Montserrat', sans-serif !important;
    font-size: 14px;
    line-height: normal;
  }

  .spinner{
    position: fixed;
    top:1px;
    left: 1px;
    height: 100%;
    width: 100%;
    background:rgba(0, 0, 0, 0.5)
  }

  #selected-spinner{
    position: fixed;
    top: 50%;
    left: 50%;
  }


  .container{
    padding-left: 0px!important;
    padding-right: 0px!important;
  }

  @media (min-width: 1200px){
    .container{
      max-width: 1300px!important;
    }
    .modal-xl { max-width: 1300px !important; }
  }

  .lbl{
    font-weight: bolder;
    display: inline-block;
    width: 100%;
  }

  table{
    font-size: 12px!important;
    font-weight: bold!important;
  }

  .table th, .table td{
    vertical-align: middle!important;
  }

  .dropdown-item, .dropdown-toggle{
    cursor: pointer;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

  .component-fade-enter-active, .component-fade-leave-active {
    transition: opacity .3s ease;
  }
  .component-fade-enter, .component-fade-leave-to
    /* .component-fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

  label{
    font-weight: bold;
  }


  .loader-overlay {
    -ms-opacity: 0.2;
    background: rgba(52, 58, 64, 0.8);
    display: none;
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    vertical-align: middle;
    width: 100%;
    z-index: 100000;
  }

  .loader-content {
    margin-left: auto;
    margin-top: auto;
    width: 50%;
  }

  .loader-center {
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    left: 50%;
    display: block;
    position: fixed;
    top: 50%;
    transform: translate(-50%, -55%);
  }

  .loader-text {
    color: #FFF;
    font-size: 18px;
    height: 50%;
  }

  #app{
  }
</style>

<style lang="scss">
  @import '../node_modules/bootstrap/scss/bootstrap.scss';
</style>
