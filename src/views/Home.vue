<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable'
import { gql } from '@apollo/client/core'

// Example query
const HELLO_QUERY = gql`
  query HelloWorld {
    hello
  }
`

const { result, loading, error } = useQuery(HELLO_QUERY)
</script>

<template>
  <div class="home">
    <h1>Welcome to Vue 3 + GraphQL Boilerplate</h1>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">Error: {{ error.message }}</div>
    <div v-else>{{ result?.hello }}</div>
  </div>
</template>