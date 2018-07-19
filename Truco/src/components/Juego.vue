<template>
  <div class="container-fluid h-100">
    <div class="row h-100">
      <div class="col-sm-12 col-md-8 offset-md-2">
        <table class="table tt h-100">
          <tr>
            <td id="jug1" width="50%">
              <div class="card" style="background: rgba(255,255,255,0.5) !important;">
                <div v-show="turnoDe === 2" style="position: absolute; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5); z-index:1;"></div>
                <div class="card-header text-center border-0" style="background: transparent;">
                  <h1>{{jugador1.nombre}}</h1>
                  <h3>Puntos: {{jugador1.puntos}}</h3>
                </div>
                <div class="card-body" style="background: transparent;">
                  <div class="row">
                    <div v-for="carta in jugador1.mano" class="col p-1">
                      <img :class="carta.selected ? 'carta' : 'carta seleccionada'" @click="seleccionarCarta(carta)" class="carta" :src="'../../static/Cartas/'+ carta.numero + carta.palo +'.jpg'" width="100%"/>
                    </div>
                  </div>
                </div>
                <div class="card-footer text-center border-0" style="background: transparent;">
                  <div class="container-fluid">
                    <div class="row">
                      <div class="col-md-4 p-1">
                        <button type="button" class="btn btn-block btn-primary" :disabled="envidoCantado || mano.turno > 1" @click="envidoClick('0','E',1)">Envido</button>
                      </div>
                      <div class="col-md-4 p-1">
                        <button type="button" class="btn btn-block btn-primary" :disabled="envidoCantado || mano.turno > 1" @click="envidoClick('0','R',1)">Real Envido</button>
                      </div>
                      <div class="col-md-4 p-1">
                        <button type="button" class="btn btn-block btn-primary" :disabled="envidoCantado || mano.turno > 1" @click="envidoClick('0','F',1)">Falta Envido</button>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-12 p-1">
                        <button type="button" class="btn btn-block btn-primary" :disabled="trucoCantado === 'V' || (trucoCantado !== false && trucoTieneQuiero === 2)" @click="trucoClick(1)">{{trucoCantado === false ? 'Truco' : (trucoCantado === 'T' ? 'ReTruco': 'Vale 4')}}</button>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col p-1">
                        <button type="button" class="btn btn-block btn-primary" v-show="(jugador1.mano[0].palo === jugador1.mano[1].palo && jugador1.mano[1].palo === jugador1.mano[2].palo) && juegoConFlor === true" :disabled="florCantada" @click="florClick('0','F',1)">Flor</button>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col p-1">
                        <button type="button" class="btn btn-block btn-primary" @click="sugerenciaClick(1)">Sugerencia</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </td>
            <td id="jug2" width="50%">
              <div class="card" style="background: rgba(255,255,255,0.5) !important;">
                <div v-show="turnoDe === 1" style="position: absolute; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5); z-index:1;"></div>
                <div class="card-header text-center border-0" style="background: transparent;">
                  <h1>{{jugador2.nombre}}</h1>
                  <h3>Puntos: {{jugador2.puntos}}</h3>
                </div>
                <div class="card-body" style="background: transparent;">
                  <div class="row">
                    <div v-for="carta2 in jugador2.mano" class="col p-1">
                      <img :class="carta2.selected ? 'carta' : 'carta seleccionada'" @click="seleccionarCarta(carta2)" class="carta" :src="'../../static/Cartas/'+ carta2.numero + carta2.palo +'.jpg'" width="100%"/>
                    </div>
                  </div>
                </div>
                <div class="card-footer text-center border-0" style="background: transparent;">
                  <div class="container-fluid">
                    <div class="row">
                      <div class="col-md-4 p-1">
                        <button type="button" class="btn btn-block btn-primary" :disabled="envidoCantado || mano.turno > 1" @click="envidoClick('0','E',2)">Envido</button>
                      </div>
                      <div class="col-md-4 p-1">
                        <button type="button" class="btn btn-block btn-primary" :disabled="envidoCantado || mano.turno > 1" @click="envidoClick('0','R',2)">Real Envido</button>
                      </div>
                      <div class="col-md-4 p-1">
                        <button type="button" class="btn btn-block btn-primary" :disabled="envidoCantado || mano.turno > 1" @click="envidoClick('0','F',2)">Falta Envido</button>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-12 p-1">
                        <button type="button" class="btn btn-block btn-primary" :disabled="trucoCantado === 'V' || (trucoCantado !== false && trucoTieneQuiero === 1)" @click="trucoClick(2)">{{trucoCantado === false ? 'Truco' : (trucoCantado === 'T' ? 'ReTruco': 'Vale 4')}}</button>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col p-1">
                        <button type="button" class="btn btn-block btn-primary" v-show="(jugador2.mano[0].palo === jugador2.mano[1].palo && jugador2.mano[1].palo === jugador2.mano[2].palo) && juegoConFlor === true" :disabled="florCantada" @click="florClick('0','F',2)">Flor</button>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col p-1">
                        <button type="button" class="btn btn-block btn-primary" @click="sugerenciaClick(2)">Sugerencia</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <div class="row">
                <div class="col-md-6 offset-md-3">
                  <button class="btn btn-danger btn-block" @click="abandonar">Abandonar Partida</button>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>

    <div id="modalEnvido" class="modal" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content text-center">
          <div class="modal-header">
            <h5 class="modal-title">{{popUpEnvido.titulo}}</h5>
          </div>
          <div class="modal-body">
            <p>{{popUpEnvido.texto}}</p>
          </div>
          <div class="modal-footer">
            <button type="button" v-for="btn in popUpEnvido.botones"
                    :class="btn.decision === 'Q' ? 'btn btn-success' : (btn.decision === 'N' ? 'btn btn-danger' : 'btn btn-primary')"
                    @click="envidoClick(btn.desde,btn.hasta,btn.jugador,btn.decision)">{{btn.texto}}</button>
          </div>
        </div>
      </div>
    </div>

    <div id="modalFlor" class="modal" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content text-center">
          <div class="modal-header">
            <h5 class="modal-title">FLOR</h5>
          </div>
          <div class="modal-body">
            <p>{{popUpFlor.texto}}</p>
          </div>
          <div class="modal-footer">
            <button type="button" v-for="btn in popUpFlor.botones"
                    :class="btn.decision === 'Q' ? 'btn btn-success' : (btn.decision === 'N' ? 'btn btn-danger' : 'btn btn-primary')"
                    @click="florClick(btn.desde,btn.hasta,btn.jugador,btn.decision)">{{btn.texto}}</button>
          </div>
        </div>
      </div>
    </div>

    <div id="modalTruco" class="modal" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content text-center">
          <div class="modal-header">
            <h5 class="modal-title">{{trucoCantado === 'T' ? 'TRUCO' : (trucoCantado === 'R' ? 'RETRUCO': 'VALE 4')}}</h5>
          </div>
          <div class="modal-body">
            <p>{{popUpTruco.texto}}</p>
          </div>
          <div class="modal-footer">
            <button type="button" v-for="btn in popUpTruco.botones"
                    :class="btn.decision === 'Q' ? 'btn btn-success' : (btn.decision === 'N' ? 'btn btn-danger' : (btn.decision === false ? 'btn btn-primary' : 'btn btn-info'))"
                    @click="trucoClick(btn.jugador,btn.decision)">{{btn.texto}}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import toastr from '../common/notificacion'

    export default {
        name: "juego",
        data: function () {
          return {
            juegoConFlor: localStorage.getItem('conFlor') === 'true' ? true : false,
            turnoDe : 1,
            jugador1 : {
              nombre : localStorage.getItem('nomJug1'),
              puntos : 0,
              mano : []
            },
            jugador2 : {
              nombre : localStorage.getItem('nomJug2'),
              puntos : 0,
              mano : []
            },
            mano : {
              esMano: 1,
              turno: 1,
              puntosAGanar: 1,
              primera: '',
              segunda: '',
              tercera: ''
            },
            mazo : [],
            cartaTirada: null,
            envidoCantado : false,
            florCantada : false,
            trucoCantado: false,
            trucoTieneQuiero : null,
            popUpEnvido: {
              titulo : '',
              texto : '',
              botones : []
            },
            popUpFlor: {
              texto : '',
              botones : []
            },
            popUpTruco: {
              "texto" : '',
              "botones" : []
            }
          };
        },
        methods: {
          abandonar() {
            this.$router.push('/');
          },
          seleccionarCarta(carta){
            if(!carta.selected){
              carta.selected = true;
              if(this.cartaTirada === null){
                this.cartaTirada = carta;
                this.turnoDe = this.turnoDe === 1 ? 2 : 1;
              }else {
                if(calcularDistancia(carta) < calcularDistancia(this.cartaTirada)){
                  this.asignarBaza(this.turnoDe);
                } else if(calcularDistancia(carta) === calcularDistancia(this.cartaTirada)){
                  this.asignarBaza('E');
                  this.turnoDe = this.mano.esMano;
                } else {
                  this.asignarBaza(this.turnoDe === 1 ? 2 : 1);
                  this.turnoDe = this.turnoDe === 1 ? 2 : 1;
                }
                this.cartaTirada = null;
                this.mano.turno++;
              }

              if(this.mano.turno > 3 || Number(this.verificarMano()) > 0){
                if(this.verificarGanadorPartido() === false){
                  const ganadorDeMano = Number(this.verificarMano());

                  if(ganadorDeMano === 1)
                    this.jugador1.puntos += this.mano.puntosAGanar;
                  else
                    this.jugador2.puntos += this.mano.puntosAGanar;

                  this.terminarMano(ganadorDeMano);
                }
              } else{
                //this.turnoDe = this.turnoDe === 1 ? 2 : 1;
              }

            }
          },
          asignarBaza(ganador){
            switch (this.mano.turno){
              case 1:
                this.mano.primera = ganador;
                break;
              case 2:
                this.mano.segunda = ganador;
                break;
              case 3:
                this.mano.tercera = ganador;
                break;
            }
          },
          verificarMano(){
            if(this.mano.primera === this.mano.segunda && this.mano.primera !== 'E') {
              console.log('1');
              return this.mano.primera;
            }
            else if(this.mano.primera === this.mano.tercera && this.mano.primera !== 'E') {
              console.log('2');
              return this.mano.primera;
            }
            else if(this.mano.primera === 'E' && this.mano.segunda !== 'E') {
              console.log('3');
              return this.mano.segunda;
            }
            else if(this.mano.primera === 'E' && this.mano.segunda === 'E' && this.mano.tercera !== 'E') {
              console.log('4');
              return this.mano.tercera;
            }
            else if(this.mano.primera === 'E' && this.mano.segunda === 'E' && this.mano.tercera === 'E') {
              console.log('5');
              return this.mano.esMano;
            }
            else if(this.mano.segunda === this.mano.tercera && this.mano.segunda !== 'E') {
              console.log('6');
              return this.mano.segunda;
            }
            else if(this.mano.segunda === 'E' && this.mano.primera !== 'E'){
              console.log('7');
              return this.mano.primera;
            } else if(this.mano.tercera ==='E' && this.mano.primera !== 'E' && this.mano.segunda !== 'E' && this.mano.primera !== this.mano.segunda){
              console.log('8');
              return this.mano.primera;
            }
            else {
              return -1;
            }


          },
          terminarMano(ganador){
              toastr('S',(ganador === 1 ? this.jugador1.nombre : this.jugador2.nombre) + ' gano la mano', 'Mano finalizada');

              for(let i = 0; i < 3; i++)
              {
                this.jugador1.mano[i].selected = false;
                this.jugador2.mano[i].selected = false;
              }
              for(let i = 0; i < 3; i++)
              {
                this.mazo.push(this.jugador1.mano.shift());
                this.mazo.push(this.jugador2.mano.shift());
              }
              mano1 = []; mano2 = [];
              repartirMano(3,this.mazo);
              this.jugador1.mano = mano1;
              this.jugador2.mano = mano2;

              this.mano = {
                esMano: this.mano.esMano === 1 ? 2 : 1,
                turno: 1,
                puntosAGanar: 1,
                primera: '',
                segunda: '',
                tercera: ''
              };
              this.turnoDe = this.mano.esMano;
              this.envidoCantado = false;
              this.florCantada = false;
              this.trucoCantado = false;
          },
          verificarGanadorPartido(){
            if(this.jugador1.puntos >= 30){
              toastr('S',this.jugador1.nombre + ' Ganó la partida.','FELICITACIONES!!');
              this.$router.push('/');
              return true;
            }else if(this.jugador2.puntos >= 30){
              toastr('S',this.jugador2.nombre + ' Ganó la partida.','FELICITACIONES!!');
              this.$router.push('/');
              return true;
            }
            return false;
          },
          envidoClick(desde, hasta, numJugador, decision = false){
            this.envidoCantado = true;
            $('#modalEnvido').hide();

            if(decision !== false){
              let puntos = grafoEnvido[indicesEnvido.indexOf(desde)][indicesEnvido.indexOf(hasta)];
              puntos[0] = puntos[0] === 'R' ? this.calcularPuntosFaltaEnvidoQuerido() : puntos[0];
              if(decision === 'Q') {
                  if (this.calcularPuntosEnvido(this.jugador1.mano) > this.calcularPuntosEnvido(this.jugador2.mano)) {
                    toastr('S',this.jugador1.nombre + ' ganó el envido.','ENVIDO');
                    this.jugador1.puntos += Number(puntos[0]);
                  } else if (this.calcularPuntosEnvido(this.jugador2.mano) > this.calcularPuntosEnvido(this.jugador1.mano)) {
                    toastr('S',this.jugador2.nombre + ' ganó el envido.','ENVIDO');
                    this.jugador2.puntos += Number(puntos[0]);
                  } else {
                    if(this.mano.esMano === 1){
                      toastr('S','Hubo un empate. ' + this.jugador1.nombre + ' ganó por ser mano.','ENVIDO');
                      this.jugador1.puntos += Number(puntos[0]);
                    } else {
                      toastr('S','Hubo un empate. ' + this.jugador2.nombre + ' ganó por ser mano.','ENVIDO');
                      this.jugador2.puntos += Number(puntos[0]);
                    }
                  }
              } else {
                if(numJugador === 1){
                  toastr('W',this.jugador2.nombre + ' no quiso.','ENVIDO');
                  this.jugador1.puntos += Number(puntos[1]);
                } else {
                  toastr('W',this.jugador1.nombre + ' no quiso.','ENVIDO');
                  this.jugador2.puntos += Number(puntos[1]);
                }
              }

            } else{
                this.popUpEnvido.titulo = (numJugador === 1 ? this.jugador1.nombre : this.jugador2.nombre) + ' te cantó ' + ((hasta === 'E' || hasta === 'EE') ? 'envido' : ((hasta === 'R' || hasta === 'EEE') ? 'real envido' : 'falta envido'));
                this.popUpEnvido.texto = 'Tenes ' + this.calcularPuntosEnvido(numJugador === 1 ? this.jugador2.mano : this.jugador1.mano) + ' puntos.';
                let botones = [];
                botones.push({texto: 'Quiero', desde: desde, hasta: hasta, jugador:numJugador, decision: 'Q'});
                grafoEnvido[indicesEnvido.indexOf(hasta)].forEach((r, i) => {
                  if(r != null){
                    switch (indicesEnvido[i]){
                      case 'E':
                        botones.push({texto: 'Envido', desde: hasta, hasta:'E', jugador:(numJugador === 1 ? 2 : 1), decision: false});
                        break;
                      case 'EE':
                        botones.push({texto: 'Envido', desde: hasta, hasta:'EE', jugador:(numJugador === 1 ? 2 : 1), decision: false});
                        break;
                      case 'R':
                        botones.push({texto: 'Real Envido', desde: hasta, hasta:'R', jugador:(numJugador === 1 ? 2 : 1), decision: false});
                        break;
                      case 'EER':
                        botones.push({texto: 'Real Envido', desde: hasta, hasta:'EER', jugador:(numJugador === 1 ? 2 : 1), decision: false});
                        break;
                      case 'F':
                        botones.push({texto: 'Falta Envido', desde: hasta, hasta:'F', jugador:(numJugador === 1 ? 2 : 1), decision: false});
                        break;
                    }
                  }
                });
                botones.push({texto: 'No Quiero', desde: desde, hasta: hasta, jugador:numJugador, decision: 'N'});
                this.popUpEnvido.botones = botones;

                $('#modalEnvido').show();
            }
            this.verificarGanadorPartido();
          },
          calcularPuntosFaltaEnvidoQuerido(){
            const puntosJugMasAvanzado = Number(this.jugador1.puntos) > Number(this.jugador2.puntos) ? Number(this.jugador1.puntos) : Number(this.jugador2.puntos);
            if(puntosJugMasAvanzado > 15)
              return (30 - puntosJugMasAvanzado);
            else
              return (15 - puntosJugMasAvanzado);
          },
          calcularPuntosEnvido(mano){
            if( mano[0].palo === mano[1].palo && mano[1].palo === mano[2].palo){
              let numMano = [];
              mano.forEach((c) => { numMano.push(Number(c.numero > 7 ? 0 : c.numero))});
              numMano.sort().reverse();
              return 20 + numMano[0] + numMano[1];
            } else if(mano[0].palo === mano[1].palo){
              return 20 + Number(mano[0].numero > 7 ? 0 : mano[0].numero) + Number(mano[1].numero > 7 ? 0 : mano[1].numero);
            } else if(mano[0].palo === mano[2].palo){
              return 20 + Number(mano[0].numero > 7 ? 0 : mano[0].numero) + Number(mano[2].numero > 7 ? 0 : mano[2].numero);
            } else if(mano[1].palo === mano[2].palo){
              return 20 + Number(mano[1].numero > 7 ? 0 : mano[1].numero) + Number(mano[2].numero > 7 ? 0 : mano[2].numero);
            } else {
              let numMano = [];
              mano.forEach((c) => { numMano.push(Number(c.numero > 7 ? 0 : c.numero))});
              return Math.max(...numMano)
            }

            return puntos
          },
          florClick(desde,hasta,numJugador,decision = false){
            $('#modalFlor').hide();
            this.florCantada = true;
            const manoContraria = numJugador === 1 ? this.jugador2.mano : this.jugador1.mano;
            if(manoContraria[0].palo !== manoContraria[1].palo || manoContraria[2].palo !== manoContraria[1].palo ){
              if(numJugador === 1 && (this.jugador2.mano[0].palo !== this.jugador2.mano[1].palo || this.jugador2.mano[2].palo !== this.jugador2.mano[1].palo)){
                this.jugador1.puntos += 3;
                this.envidoCantado = true;
              } else if(numJugador === 2 && (this.jugador1.mano[0].palo !== this.jugador1.mano[1].palo || this.jugador1.mano[2].palo !== this.jugador1.mano[1].palo)){
                this.jugador2.puntos += 3;
                this.envidoCantado = true;
              }
            } else {
              if(decision !== false){
                let puntos = grafoFlor[indicesFlor.indexOf(desde)][indicesFlor.indexOf(hasta)];
                puntos[0] = puntos[0] === 'R' ? (this.jugador1.puntos > this.jugador2.puntos ? (30 - Number(this.jugador1.puntos)) : (30 - Number(this.jugador2.puntos))) : puntos[0];
                if(decision === 'Q') {
                  if (this.calcularPuntosFlor(this.jugador1.mano) > this.calcularPuntosFlor(this.jugador2.mano)) {
                    toastr('S','ganó ' + this.jugador1.nombre,'FLOR');
                    this.jugador1.puntos += Number(puntos[0]);
                  } else if (this.calcularPuntosFlor(this.jugador2.mano) > this.calcularPuntosFlor(this.jugador1.mano)) {
                    toastr('S','ganó ' + this.jugador2.nombre,'FLOR');
                    this.jugador2.puntos += Number(puntos[0]);
                  } else {
                    if(this.mano.esMano === 1){
                      toastr('S','Hubo un empate. ' + this.jugador1.nombre + ' ganó por ser mano.','FLOR');
                      this.jugador1.puntos += Number(puntos[0]);
                    } else {
                      toastr('S','Hubo un empate. ' + this.jugador2.nombre + ' ganó por ser mano.','FLOR');
                      this.jugador2.puntos += Number(puntos[0]);
                    }
                  }
                } else {
                  if(numJugador === 1){
                    toastr('W',this.jugador2.nombre + ' no quiso.','FLOR');
                    this.jugador1.puntos += Number(puntos[1]);
                  } else {
                    toastr('W',this.jugador1.nombre + ' no quiso.','FLOR');
                    this.jugador2.puntos += Number(puntos[1]);
                  }
                }
                this.envidoCantado = true;
              } else {
                this.popUpFlor.texto = (numJugador === 1 ? this.jugador1.nombre : this.jugador2.nombre) + ' te cantó ' + ((hasta === 'F') ? 'Flor' : (hasta === 'C' ? 'Contraflor' : 'Contraflor al resto'));
                let botones = [];
                botones.push({texto: 'Quiero', desde: desde, hasta: hasta, jugador:numJugador, decision: 'Q'});
                grafoFlor[indicesFlor.indexOf(hasta)].forEach((r, i) => {
                  if(r != null){
                    switch (indicesFlor[i]){
                      case 'F':
                        botones.push({texto: 'Flor', desde: hasta, hasta:'F', jugador:(numJugador === 1 ? 2 : 1), decision: false});
                        break;
                      case 'C':
                        botones.push({texto: 'Contraflor', desde: hasta, hasta:'C', jugador:(numJugador === 1 ? 2 : 1), decision: false});
                        break;
                      case 'R':
                        botones.push({texto: 'Contraflor al resto', desde: hasta, hasta:'R', jugador:(numJugador === 1 ? 2 : 1), decision: false});
                        break;
                    }
                  }
                });
                botones.push({texto: 'No Quiero', desde: desde, hasta: hasta, jugador:numJugador, decision: 'N'});
                this.popUpFlor.botones = botones;

                $('#modalFlor').show();
              }
            }
            this.verificarGanadorPartido();
          },
          calcularPuntosFlor(mano){
            let puntos = 20;
            mano.forEach((c) => { puntos += (c.numero > 7 ? 0 : c.numero); });
            return puntos;
          },
          trucoClick(numJugador, decision = false){
            $('#modalTruco').hide();

            if(decision !== false){
              if(decision === 'E'){
                this.trucoCantado = false;
                this.envidoClick('0','E',numJugador === 1 ? 2 : 1);
              } else if(decision === 'F') {
                this.trucoCantado = false;
                this.florClick('0','F',numJugador === 1 ? 2 : 1);
              }else if(decision === 'Q'){
                this.trucoTieneQuiero = numJugador === 1 ? 2 : 1;
                this.mano.puntosAGanar = this.trucoCantado === 'T' ? 2 : (this.trucoCantado === 'R' ? 3 : 4)
              }else {
                if(this.trucoCantado === 'T'){
                  if(numJugador === 1)
                    this.jugador1.puntos++;
                  else
                    this.jugador2.puntos++;
                  this.verificarGanadorPartido();
                  this.terminarMano();
                } else {
                  this.mano.puntosAGanar = this.trucoCantado === 'R' ? 2 : 3;
                }
              }
            }else {
              this.popUpTruco.texto = (numJugador === 1 ? this.jugador1.nombre : this.jugador2.nombre) + ' te cantó ' + (this.trucoCantado === false ? 'TRUCO' : (this.trucoCantado === 'T' ? 'RETRUCO': 'VALE 4'));

              let botones = [];
              botones.push({texto: 'Quiero', jugador:numJugador, decision: 'Q'});
              grafoTruco[indicesTruco.indexOf(this.trucoCantado)].forEach((r, i) => {
                if(r != null){
                  switch (indicesTruco[i+1]){
                    case 'T':
                      botones.push({texto: 'Truco', jugador:(numJugador === 1 ? 2 : 1), decision: false});
                      break;
                    case 'R':
                      botones.push({texto: 'ReTruco', jugador:(numJugador === 1 ? 2 : 1), decision: false});
                      break;
                    case 'V':
                      botones.push({texto: 'Vale 4', jugador:(numJugador === 1 ? 2 : 1), decision: false});
                      break;
                  }
                }
              });
              if(this.mano.turno === 1 && this.envidoCantado === false)
                botones.push({texto:'El envido esta primero', jugador:numJugador, decision:'E'});
              const manoContraria = numJugador === 1 ? this.jugador2.mano : this.jugador1.mano;
              if((manoContraria[0].palo === manoContraria[1].palo && manoContraria[2].palo === manoContraria[1].palo) && this.juegoConFlor && this.mano.turno === 1)
                botones.push({texto:'La flor esta primero', jugador:numJugador, decision:'F'});
              botones.push({texto: 'No Quiero', jugador:numJugador, decision: 'N'});
              this.popUpTruco.botones = botones;

              $('#modalTruco').show();
              this.trucoCantado = this.trucoCantado === false ? 'T': (this.trucoCantado === 'T' ? 'R' : 'V');
            }
            this.verificarGanadorPartido();
          },
          sugerenciaClick(numJugador) {
            let haySugerencia = false;

            if(this.mano.turno === 3){
              let carta = {};
              if(numJugador === 1){
                this.jugador1.mano.forEach((c)=> {
                  if(!c.selected)
                    carta = c;
                })
              } else {
                this.jugador2.mano.forEach((c)=> {
                  if(!c.selected)
                    carta = c;
                })
              }
              if(probabilidadCarta(carta) > 0.7){
                toastr('S','Cantar truco');
                haySugerencia = true;
              }
            }

            if(!this.envidoCantado && this.mano.turno === 1){
              let puntos = 0;
              if(numJugador === 1)
                puntos = this.calcularPuntosEnvido(this.jugador1.mano);
              else
                puntos = this.calcularPuntosEnvido(this.jugador2.mano);

              if(puntos >= 20) {
                const probFaltaEnvido = (((puntos - 20) + 1) / 14);
                if(probFaltaEnvido > 0.6){
                  toastr('S','Cantar Falta Envido');
                  haySugerencia = true;
                }
              }
            }

            if(this.mano.turno === 1){
              let mano = 0;
              if(numJugador === 1)
                mano = this.jugador1.mano;
              else
                mano = this.jugador2.mano;

              let prob = 0;
              mano.forEach((c) => {
                prob += probabilidadCarta(c);
              });

              if((prob/3) > 0.8){
                toastr('S','Perder 1er baza.');
                haySugerencia = true;
              }
            }

            if(!haySugerencia)
              toastr('e','No hay sugerencia');
          }
        },
        created () {
          this.mazo = mezclarCartas(armarMazo(true));

          mano1 = []; mano2 = [];
          repartirMano(3,this.mazo);
          this.jugador1.mano = mano1;//= [{palo:'E',numero:1},{palo:'E',numero:7},{palo:'B',numero:1}]; //
          this.jugador2.mano = mano2;//= [{palo:'B',numero:1},{palo:'B',numero:3},{palo:'B',numero:4}];//
        },
    }

    let mano1 = [];
    let mano2 = [];

    const armarMazo = (paraTruco, sacarComodines = false) =>{
      let cartas = [];

      const palos = {"B":"Basto", "E":"Espada", "O":"Oro", "C":"Copa"};

      Object.keys(palos).forEach(function(value) {
        for(let i=1;i<=12;i++)
        {
          if(paraTruco && (i === 8 || i === 9))
            continue;
          cartas.push({"palo":value,"numero":i, "selected": false});
        }
      });

      if(!paraTruco && !sacarComodines){
        cartas.push({"palo":"Comodin","numero":1, "selected": false});
        cartas.push({"palo":"Comodin","numero":2, "selected": false});
      }
      return cartas;
    };

    const mezclarCartas = (mazo) => {
      const cant = mazo.length;
      for (let i=0;i<cant;i++)
      {
        const posicion1 = parseInt(Math.random()*cant);
        const posicion2 = parseInt(Math.random()*cant);
        const tmp = mazo[i];
        mazo[i] = mazo[posicion1];
        mazo[posicion1] = mazo[posicion2];
        mazo[posicion2] = tmp;
      }
      return mazo;
    }

    const repartirMano = (cantCartas, mazo) => {
      if(cantCartas === 0)
      {}
      else{
        mano1.push(mazo.shift());
        mano2.push(mazo.shift());
        repartirMano(Number(cantCartas)-1, mazo);
      }
    };

    const calcularDistancia = (carta) => {
      const indiceCarta = indiceGrafo.indexOf(carta.numero + carta.palo) !== -1 ? indiceGrafo.indexOf(carta.numero + carta.palo) : indiceGrafo.indexOf(carta.numero + 'X');

      let distancia = 0;

      for(let i = indiceCarta; i > 0; i--){
        distancia += (grafoCartas[i-1][i])[0];
      }

      return distancia;
    };

    const probabilidadCarta = (carta )=> {
      const indiceCarta = indiceGrafo.indexOf(carta.numero + carta.palo) !== -1 ? indiceGrafo.indexOf(carta.numero + carta.palo) : indiceGrafo.indexOf(carta.numero + 'X');

      const numA = 14 - Number(indiceCarta-1);
      return numA === 1 ? 0 : (Math.round(((numA)/14) * 100)/100);
    };

    const grafoCartas =
      [
        [[null, null], [1,0], [null, null], [null, null], [null, null], [null, null], [null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null]],
        [[null, null],[null, null], [1,1], [null, null], [null, null], [null, null], [null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null]],
        [[null, null],[null, null],[null, null], [1,2], [null, null], [null, null], [null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null]],
        [[null, null],[null, null],[null, null],[null, null], [1,3], [null, null], [null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null]],
        [[null, null],[null, null],[null, null],[null, null],[null, null], [1,4], [null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null]],
        [[null, null],[null, null],[null, null],[null, null],[null, null],[null, null], [1,5],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null]],
        [[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null], [1,6],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null]],
        [[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null], [1,7],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null]],
        [[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null], [1,8],[null, null],[null, null],[null, null],[null, null],[null, null]],
        [[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null], [1,9],[null, null],[null, null],[null, null],[null, null]],
        [[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null], [1,10],[null, null],[null, null],[null, null]],
        [[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null], [1,11],[null, null],[null, null]],
        [[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null], [1,12],[null, null]],
        [[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null], [1,13]],
        [[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null],[null, null]]
      ];

    const indiceGrafo = ['0','1E','1B','7E','7O','3X','2X','1X','12X','11X','10X','7X','6X','5X','4X'];

    const grafoEnvido =
      [
        [null,[2,1],null,[3,1],null,['R',1]],
        [null,null,[4,2],[5,2],null,['R',2]],
        [null,null,null,null,[7,4],['R',5]],
        [null,null,null,null,null,['R',3]],
        [null,null,null,null,null,['R',7]],
        [null,null,null,null,null,null],
      ];

    const indicesEnvido = ['0','E','EE','R','EER','F'];

    const grafoFlor =
      [
        [null,[4,3],null,null],
        [null,null,[6,3],['R',4]],
        [null,null,null,['R',6]],
        [null,null,null,null]
      ];

    const indicesFlor = ['0','F','C','R'];

    const grafoTruco =
      [
        [null,[2,1],null,null],
        [null,null,[3,2],null],
        [null,null,null,[4,3]],
        [null,null,null,null]
      ];

    const indicesTruco = [false,'T','R','V'];

    $(".carta").click(function(){
      $(this).toggleClass("seleccionada");
    });
</script>

<style>
  .carta{
    margin: 0px 0px 50px 00px;
    display: block;
    background: #fff;
    border-bottom: 1px solid #f1f1f1;
    cursor: pointer;
    transition: margin 700ms;
  }
  .carta.seleccionada {
    margin: 50px 0px 0px 0px;
  }

  .tt{
    width: 100%;
    height: 100%;
  }

  #jug1{

  }

  #jug2{

  }

  .dialog-content{text-align: center!important;}
</style>
