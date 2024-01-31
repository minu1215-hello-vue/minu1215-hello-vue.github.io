<script setup>
import { ref } from 'vue'
import advice from "@/advice/advice.json"

const advices = ref(advice)

</script>
<template>
 <div v-for="advice in advices">
  name : {{ advice.author }} <br>
  profile : {{ advice.authorProfile }} <br>
  message : {{ advice.message }} <hr>
 </div>
</template>
