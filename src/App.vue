<script setup>
import category from "@/assets/category.json"

const categories = category

</script>
<template>
 <div v-for="item in categories">
  name : {{ item.name }} <br> 
  url : <a v-bind:href=item.image_url>{{ item.image_url }}</a> <br> 
  code : {{ item.code }} <hr>
 </div>
</template>
