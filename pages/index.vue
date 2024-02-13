<template>
    <div class="flex flex-col items-center gap-6">
        <div class="flex items-center justify-center py-4 px-10 w-full rounded-md gap-16 max-lg:flex-col max-lg:gap-8 bg-gradient-to-r from-[#0C669C] to-[#3BBAC2] text-white">
            <NuxtLink>
                Оправы
            </NuxtLink>
            <NuxtLink>
                Линзы
            </NuxtLink>
            <NuxtLink>
                Контактные линзы
            </NuxtLink>
            <NuxtLink>
                Готовые очки
            </NuxtLink>
            <NuxtLink>
                Солнцезащитные очки
            </NuxtLink>
        </div>
            <Swiper :loop="true" :space-between="20" :modules="[SwiperPagination]" :pagination="{ clickable: true }" class="w-full md:h-[calc(100vh/2)] rounded-md">
                <SwiperSlide class="w-full" v-for="n in 10">
                    <NuxtLink class="w-full">
                        <img class="object-cover aspect-video w-full" src="https://images.wallpaperscraft.ru/image/single/kotenok_malenkij_igrat_1937_1600x900.jpg" alt="">
                    </NuxtLink>
                </SwiperSlide>
            </Swiper>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 text-white">
        <div class="flex flex-col bg-[#218CAD] rounded-md px-6 py-4">
            <div class="flex items-center justify-between">
                <p class="text-2xl">Очки</p>
                <Icon class="text-6xl mr-6" name="ion:glasses-outline"/>
            </div>
            <p class="text-md opacity-70">Если вы нуждаетесь в коррекции зрения, мы подберем качественные и безопасные очки или линзы для глаз.</p>
        </div>
        <div class="flex flex-col bg-[#197299] rounded-md px-6 py-4">
            <div class="flex items-center justify-between">
                <p class="text-2xl">Очки</p>
                <Icon class="text-6xl mr-6" name="ion:glasses-outline"/>
            </div>
            <p class="text-md opacity-70">Если вы нуждаетесь в коррекции зрения, мы подберем качественные и безопасные очки или линзы для глаз.</p>
        </div>
        <div class="flex flex-col bg-[#218CAD] rounded-md px-6 py-4">
            <div class="flex items-center justify-between">
                <p class="text-2xl">Очки</p>
                <Icon class="text-6xl mr-6" name="ion:glasses-outline"/>
            </div>
            <p class="text-md opacity-70">Если вы нуждаетесь в коррекции зрения, мы подберем качественные и безопасные очки или линзы для глаз.</p>
        </div>
    </div>
    <div class="flex flex-col gap-6">
        <p class="text-2xl md:text-3xl xl:text-4xl text-center">Хиты продаж</p>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <Card v-for="card in cards " v-bind="card"></Card>
        </div>
    </div>
</template>

<script setup>
const cards=[
    {
        image: "https://images-ext-2.discordapp.net/external/t5MQMWWZ874YFd0Obx4tPmq7VG7ISdr7V5MZQ6qnCAs/https/polotnos.cdnbro.com/posts/9208918-krutye-ochki-risunok-13.jpg?format=webp&width=676&height=676",
        title: "Очки из майнкрафта для самых крутых и отважных",
        price: 100000
    },
    {
        image: "https://images-ext-2.discordapp.net/external/t5MQMWWZ874YFd0Obx4tPmq7VG7ISdr7V5MZQ6qnCAs/https/polotnos.cdnbro.com/posts/9208918-krutye-ochki-risunok-13.jpg?format=webp&width=676&height=676",
        title: "Очки из майнкрафта для самых крутых и отважных",
        price: 100000
    },
    {
        image: "https://images-ext-2.discordapp.net/external/t5MQMWWZ874YFd0Obx4tPmq7VG7ISdr7V5MZQ6qnCAs/https/polotnos.cdnbro.com/posts/9208918-krutye-ochki-risunok-13.jpg?format=webp&width=676&height=676",
        title: "Очки из майнкрафта для самых крутых и отважных",
        price: 100000
    },
    {
        image: "https://images-ext-2.discordapp.net/external/t5MQMWWZ874YFd0Obx4tPmq7VG7ISdr7V5MZQ6qnCAs/https/polotnos.cdnbro.com/posts/9208918-krutye-ochki-risunok-13.jpg?format=webp&width=676&height=676",
        title: "Очки из майнкрафта для самых крутых и отважных",
        price: 100000
    }
]
</script>

<style scoped>

</style>