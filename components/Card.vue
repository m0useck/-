<template>
    <div class="bg-gradient-to-br from-[#0C669C] to-[#3BBAC2] p-0.5 rounded-lg hover:shadow-[0px_0px_13px_-3px_black] hover:scale-[101%] transition-all duration-300 group">
        <div class="flex flex-col gap-4 px-3 py-5 rounded-md bg-white overflow-hidden w-full h-full">
          <img :src="props.image" alt="">  
          <p class="text-xl">{{ props.title }}</p>
          <p class="flex flex-col text-center w-fit mx-auto text-3xl transition-all duration-300 group-hover:text-[#3BBAC2] after:w-0 after:h-px after:bg-[#3BBAC2] group-hover:after:w-full after:transition-all after:duration-300">{{ props.price }}₽</p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
        image: String,
        title: String,
        price: Number
    })
</script>
