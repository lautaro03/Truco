<template>
  <div class="container h-100">
    <div class="row h-100">
      <div class="col-md-4 offset-md-4">
        <div class="card" style="background: rgba(255,255,255,0.5) !important;">
          <div class="card-header text-center border-0" style="background: transparent;">
            <img src="../assets/Logo.png" alt="Logo" width="100%">
            <hr>
          </div>
          <div class="card-body" style="background: transparent;">
            <div class="form-group">
              <label for="nom1">Nombre del Jugador 1:</label>
              <input type="text" class="form-control" id="nom1" v-model="nom1">
            </div>
            <div class="form-group">
              <label for="nom2">Nombre del Jugador 2:</label>
              <input type="text" class="form-control" id="nom2" v-model="nom2">
            </div>
            <div class="form-group">
              <div class="custom-control custom-checkbox">
                <input type="checkbox" v-model="conFlor" class="custom-control-input" id="customCheck1">
                <label class="custom-control-label" for="customCheck1">Jugar con FLOR</label>
              </div>
            </div>
            <div class="form-group">
              <button type="button" class="btn btn-success btn-block" @click="iniciar">Iniciar Juego</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "inicio",
        data: function () {
          return {
            nom1: '',
            nom2: '',
            conFlor: false
          }
        },
        methods: {
          iniciar() {
            const regexp = new RegExp(/^[a-zA-Z]+([\s]{1}[a-zA-Z]*)?$/);

            if(!regexp.test(this.nom1) || this.nom1 === ''){
              this.$swal({
                type: 'error',
                title: 'Nombre del Jugador 1 Invalido.',
                text: 'El nombre debe contener solamente letras'
              })
            } else if(!regexp.test( this.nom2) || this.nom2 === ''){
              this.$swal({
                type: 'error',
                title: 'Nombre del Jugador 2 Invalido.',
                text: 'El nombre debe contener solamente letras'
              })
            } else {
              localStorage.setItem('nomJug1',this.nom1);
              localStorage.setItem('nomJug2',this.nom2);
              localStorage.setItem('conFlor',this.conFlor);
              this.$router.push('/Juego');
            }
          },
        },
        created() {

        }
    }
</script>

<style scoped>

</style>
