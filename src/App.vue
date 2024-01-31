<script setup>
import { ref } from 'vue'

const parentMessage = ref('Parent')
const items = ref([
			{ message: 'Foo',
			  message2: 'Foo2' }, 
			{ message: 'Bar',
			  message2: 'Bar2' }
		])
</script>

<template>
 <li v-for="(item, index) in items">
  {{ parentMessage }} - {{ index }} - {{ item.message }} - {{ item.message2 }}
 </li>
</template>
