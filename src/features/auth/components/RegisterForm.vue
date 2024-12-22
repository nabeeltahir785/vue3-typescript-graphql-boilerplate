<script setup lang="ts">
import { ref } from 'vue'
import { useAuth } from '../composables/useAuth'
import BaseButton from '@/shared/components/BaseButton.vue'

const { register } = useAuth()
const email = ref('')
const password = ref('')
const name = ref('')

const handleSubmit = async () => {
  await register({ 
    email: email.value, 
    password: password.value,
    name: name.value 
  })
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="auth-form">
    <div class="form-group">
      <input v-model="name" type="text" placeholder="Name" required />
    </div>
    <div class="form-group">
      <input v-model="email" type="email" placeholder="Email" required />
    </div>
    <div class="form-group">
      <input v-model="password" type="password" placeholder="Password" required />
    </div>
    <BaseButton type="submit">Register</BaseButton>
  </form>
</template>

<style scoped>
.auth-form {
  max-width: 400px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 1rem;
}

input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>