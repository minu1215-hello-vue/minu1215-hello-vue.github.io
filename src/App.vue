<script setup>
import { ref } from 'vue'
import advice from "@/advice/advice.json"

const advices = ref(advice)
const filterKeyword = ref('')
/*
function filtering(keyword) {
 console.log(keyword)
 const authorMatch = advices.author.includes(keyword)
 const profileMatch = advices.authorProfile.includes(keyword)
 const messageMatch = advices.message.includes(keyword)

 return authorMatch || profileMatch || messageMatch
}
*/
</script>
<template>
 <input v-model="filterKeyword" placeholder="키워드 입력" />
 <div v-for="advice in advices">

  <div v-show="advice.author.includes(filterKeyword) ||
		advice.authorProfile.includes(filterKeyword) ||
		advice.message.includes(filterKeyword)">
   name : {{ advice.author }} <br>
   profile : {{ advice.authorProfile }} <br>
   message : {{ advice.message }} <hr>
  </div>
 </div>
</template>
