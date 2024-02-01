<script setup>
import { ref } from 'vue'

let id = 0
const newTodo = ref('')
const todos = ref([
 { id: id++, issue: 'Backlog' }, 
 { id: id++, issue: 'Todo' },
 { id: id++, issue: 'Going Hawaii' }
])
function addTodo() {
 todos.value.push({id: id++, issue: newTodo.value})
 newTodo.value = ''
}
function removeTodo(removeTodo) {
 todos.value = todos.value.filter(todo => todo.id !== removeTodo.id)
}
</script>

<template>
 <form @submit.prevent="addTodo">
  <input v-model="newTodo">
  <button>할 일 추가</button>
 </form>
 <ul>
  <li v-for="todo in todos">
   {{ todo.issue }} - <button @click="removeTodo(todo)">Done</button>
  </li>
 </ul>
</template>

