<template>
  <footer>
    <p>SENAI Soluções Digitais — Cafeteria CodeQual ☕</p>
    <button
      v-if="isAuthenticated && currentRoute.name !== 'Login'"
      @click="logout"
      class="logout-btn"
    >
      Sair
    </button>
  </footer>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const currentRoute = useRoute();

const isAuthenticated = computed(() => {
  return !!localStorage.getItem('token');
});

const logout = () => {
  localStorage.removeItem('token');
  router.push({ name: 'Login' });
};
</script>

<style scoped>
footer {
  margin-top: 4rem;
  text-align: center;
  padding: 1rem;
  background: #eee;
}
.logout-btn {
  margin-top: 12px;
  padding: 8px 16px;
  border: none;
  background: #cc0000;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}
.logout-btn:hover {
  background: #a40000;
}
</style>