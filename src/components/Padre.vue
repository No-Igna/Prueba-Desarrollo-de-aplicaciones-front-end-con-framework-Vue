<template>
  <div class="container">
    <Hijo @nuevoMensaje="mostrarMensaje" />
    <h3>Aqui se mostrara el mensaje: {{ mensajeRecibido }}</h3>
  </div>
</template>

<script>
import Hijo from './Hijo.vue';
export default {
  name: 'Padre',
  components:{
    Hijo,
  },
  data() {
    return {
      mensajeRecibido: '',
    };
  },
  methods: {
    mostrarMensaje(mensaje) {
      this.mensajeRecibido = mensaje;
    }
  }
};
</script>

<style scoped></style>