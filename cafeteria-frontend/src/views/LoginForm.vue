<template>
  <form @submit.prevent="login" class="login">
    <h2>🔐 Acesso Restrito</h2>
    <input v-model="username" placeholder="Usuário" />
    <input v-model="password" type="password" placeholder="Senha" />
    <button type="submit">Entrar</button>
    <p v-if="error" class="erro">{{ error }}</p>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { API_URL } from '../config';

const router = useRouter();
const username = ref('');
const password = ref('');
const error = ref(null);

const login = async () => {
  error.value = null;
  try {
    const res = await axios.post(`${API_URL}/auth/login`, {
      username: username.value,
      password: password.value
    });

    localStorage.setItem('token', res.data.token);
    router.push('/');
  } catch (err) {
    error.value = err.response?.data?.error || 'Erro ao fazer login';
  }
};
</script>

<style scoped>
.login {
  max-width: 300px;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.erro {
  color: red;
}
</style>