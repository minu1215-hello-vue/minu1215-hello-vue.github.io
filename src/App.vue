<script setup>
import { ref } from 'vue'

const show = ref(true)
const list = ref([1, 2, 3])

function renderingList() {
 show.value = !show.value
}

function addList() {
 if(list.value.length) {
  list.value.push(Math.max.apply(null, list.value) + 1)
 } else {
  list.value.push(1)
 }
}

function deleteList() {
 if(list.value.length) {
  list.value.pop()
 }
}

function reverseList() {
 list.value = list.value.reverse()
}

</script>

<template>
 <button @click="renderingList">List 렌더링 ON/OFF </button>
 <button @click="addList">List 추가 </button>
 <button @click="deleteList">List 제거  </button>
 <button @click="reverseList">List 뒤집기 </button>

 <ul v-if="show">
  <li v-for="item of list">{{ item }}</li>
 </ul>
 <p v-else-if="list.length">List is not empty, but hidden.</p>
 <p v-else>List is empty.</p>
</template>
