<!-- src/views/OrderSuccess.vue -->
<template>
  <div class="pedido-finalizado">
    <h1>✅ Pedido criado com sucesso!</h1>
    <h2>☕ {{ nome }}</h2>
    <p>número do pedido: <strong>#{{ id }}</strong></p>

    <router-link to="/" class="btn-voltar">
      Fazer outro pedido
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'OrderSuccess',
  props: {
    nome: { type: String, required: true },
    id: { type: Number, required: true }
  }
};
</script>

<style scoped>
.pedido-finalizado {
  text-align: center;
  margin-top: 80px;
}
.btn-voltar {
  display: inline-block;
  margin-top: 24px;
  background-color: #333;
  color: white;
  padding: 12px 20px;
  text-decoration: none;
  border-radius: 6px;
}
</style>