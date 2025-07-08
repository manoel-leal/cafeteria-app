<template>
  <section class="selector">
    <h2>Selecione os ingredientes base</h2>
    <div class="grid">
      <label v-for="item in baseIngredients" :key="item.id">
        <input
          type="checkbox"
          :value="item.id"
          v-model="selectedBase"
          :disabled="!item.isAvailable"
        />
        {{ item.name }} <span v-if="!item.isAvailable">🔒</span>
      </label>
    </div>

    <h2>Adicionais (máx. 2)</h2>
    <div class="grid">
      <label v-for="item in extras" :key="item.id">
        <input
          type="checkbox"
          :value="item.id"
          v-model="selectedExtras"
          :disabled="!item.isAvailable || (selectedExtras.length >= 2 && !selectedExtras.includes(item.id))"
        />
        {{ item.name }} <span v-if="!item.isAvailable">🔒</span>
      </label>
    </div>

    <button @click="submit">Criar Pedido</button>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import { API_URL } from '../config';

const router = useRouter();

const baseIngredients = ref([]);
const extras = ref([]);
const selectedBase = ref([]);
const selectedExtras = ref([]);

const submit = async () => {
  try {
    const res = await axios.post(`${API_URL}/orders`, {
      baseIngredients: selectedBase.value,
      extras: selectedExtras.value
    });

    router.push({
      name: 'OrderSuccess',
      query: {
        nome: res.data.nome,
        id: res.data.pedidoId
      }
    });
  } catch (err) {
    console.error(err);
    alert(err.response?.data?.error || 'Erro ao criar pedido');
  }
};

onMounted(async () => {
  const [bases, extrasRes] = await Promise.all([
    axios.get(`${API_URL}/ingredients/base`),
    axios.get(`${API_URL}/ingredients/extras`)
  ]);
  baseIngredients.value = bases.data;
  extras.value = extrasRes.data;
});
</script>

<style scoped>
.grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
}

.selector {
  margin: 2rem auto;
  max-width: 800px;
}
</style>