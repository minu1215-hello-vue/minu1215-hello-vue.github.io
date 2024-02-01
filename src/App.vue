<script setup>
import { reactive, computed, ref } from 'vue'

const author = ref({
 name: 'John Doe',
 books: [1, 2, 3]
})

// a computed ref
const publishedBookMessage = computed(() => {return author.value.books.length > 2 ? 'Yes' : 'No' })
</script>

<template>
 <p>Has published books:</p>
 <span>computed ⬇️<br>{{ publishedBookMessage }}</span>
<!-- <span>{{ author.books.length > 2 ? 'Yes' : 'No' }}</span> -->
</template>
