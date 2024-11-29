<template>
  <div class="my-4">
    <input type="text" v-model="mensaje" class="form-control mb-2" placeholder="Escribe un Mensaje">
    <button @click="enviarMensaje" class="btn btn-dark w-100">Enviar</button>
  </div>
</template>

<script>
export default {
  name: 'Hijo',
  data() {
    return {
      mensaje: ''
    };
  },
  methods:{
    enviarMensaje(){
      this.$emit('nuevoMensaje', this.mensaje);
      this.mensaje='';
    }
  }
};
</script>

<style scoped>
</style>