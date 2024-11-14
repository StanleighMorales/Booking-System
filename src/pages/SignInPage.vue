<template>
  <q-layout view="lHh Lpr lFf"> <!-- Wrap QPage in QLayout -->
    <q-page class=" column flex items-center justify-center q-pa-lg q-bg-orange-100">
      <!-- Auth Card -->
        <!-- Logo -->
        <div class="q-pa-md flex flex-col items-center justify-center text-center">
          <q-avatar size="56px" icon="medical_services" color="orange" />
          <q-space />
          <div>
            <h1 class="text-h6 text-white">Tooth Art</h1>
            <span class="text-caption text-white">DENTAL CLINIC</span>
          </div>
        </div>

        <!-- Form -->
        <q-card class="q-pa-md q-ma-auto q-rounded q-shadow-2 rounded-xl">
        <div class="q-pa-md">
          <h2 class="text-h4 text-center text-primary q-mb-xl">
            {{ isLogin ? 'LOGIN' : 'REGISTER' }}
          </h2>

          <q-form @submit="isLogin ? handleLogin() : handleRegister()" class="q-gutter-md">
            <!-- Login Form -->
            <q-input
              v-if="isLogin"
              v-model="loginForm.username"
              label="Username"
              outlined
              dense
              :error="errors.username"
              :error-message="errors.username"
              required
            />
            <q-input
              v-if="isLogin"
              v-model="loginForm.password"
              label="Password"
              type="password"
              outlined
              dense
              :error="errors.password"
              :error-message="errors.password"
              required
            />

            <!-- Register Form -->
            <q-input
              v-if="!isLogin"
              v-model="registerForm.email"
              label="Email"
              type="email"
              outlined
              dense
              :error="errors.email"
              :error-message="errors.email"
              required
            />
            <q-input
              v-if="!isLogin"
              v-model="registerForm.password"
              label="Password"
              type="password"
              outlined
              dense
              :error="errors.password"
              :error-message="errors.password"
              required
            />
            <q-input
              v-if="!isLogin"
              v-model="registerForm.confirmPassword"
              label="Confirm Password"
              type="password"
              outlined
              dense
              :error="errors.confirmPassword"
              :error-message="errors.confirmPassword"
              required
            />

            <!-- Submit Button -->
            <div class="flex justify-center">
              <q-btn
              type="submit"
              class="q-mt-md bg-primary text-white"
              :loading="loading"
              :disable="loading"
              size="lg"
              unelevated
              stretch
              rounded
              style="width: 10em;"
            >
            {{ isLogin ? 'LOGIN' : 'REGISTER' }}
            </q-btn>
            </div>

          </q-form>

          <!-- Toggle Link -->
          <div class="q-pa-md text-center text-caption">
            <q-btn flat @click="toggleForm">
              <span v-if="isLogin">Don't have an account? Register</span>
              <span v-else>Already have an account? Login</span>
            </q-btn>
          </div>
        </div>
      </q-card>
    </q-page>
  </q-layout>
</template>

<script setup>
import { ref, reactive } from 'vue'

const isLogin = ref(true)
const loading = ref(false)
const errors = reactive({})

const loginForm = reactive({
  username: '',
  password: ''
})

const registerForm = reactive({
  email: '',
  password: '',
  confirmPassword: ''
})

const toggleForm = () => {
  isLogin.value = !isLogin.value
  resetErrors()
}

const resetErrors = () => {
  Object.keys(errors).forEach(key => {
    errors[key] = ''
  })
}

const handleLogin = () => {
  resetErrors()
  if (validateLogin()) {
    loading.value = true
    // Simulate login
    setTimeout(() => {
      loading.value = false
      console.log('Login:', loginForm)
    }, 2000)
  }
}

const handleRegister = () => {
  resetErrors()
  if (validateRegister()) {
    loading.value = true
    // Simulate registration
    setTimeout(() => {
      loading.value = false
      console.log('Register:', registerForm)
    }, 2000)
  }
}

const validateLogin = () => {
  let valid = true
  if (!loginForm.username) {
    errors.username = 'Username is required'
    valid = false
  }
  if (!loginForm.password) {
    errors.password = 'Password is required'
    valid = false
  }
  return valid
}

const validateRegister = () => {
  let valid = true
  if (!registerForm.email) {
    errors.email = 'Email is required'
    valid = false
  }
  if (!registerForm.password) {
    errors.password = 'Password is required'
    valid = false
  }
  if (registerForm.password !== registerForm.confirmPassword) {
    errors.confirmPassword = 'Passwords do not match'
    valid = false
  }
  return valid
}
</script>

<style scoped>
/* Additional styling if needed */
</style>
