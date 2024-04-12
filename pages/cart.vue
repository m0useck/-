<template>
    <div class="flex max-lg:flex-col gap-8 md:gap-10 xl:gap-12">
        <div class="flex flex-col gap-10 w-[70%]">
            <div class="flex max-lg:flex-col border-2 border-[#0C669C] rounded-md gap-8 px-12 py-10 bg-white">
                <img class="w-1/2" src="https://www.optic-city.ru/image/cache/rss/1/9/5/3/1/5/9/item_1953159/1953159_0-810x540.jpg.webp" alt="">
                <div class="flex flex-col gap-4">
                    <p class="text-xl">Очки PRODESIGN 1762 1 9631</p>
                    <div class="flex items-center gap-4">
                        <button class="border border-[#D7D7D7] w-10 h-10 rounded-lg text-2xl">-</button>
                        <p class="text-xl">1</p>
                        <button class="border border-[#D7D7D7] w-10 h-10 rounded-lg text-2xl">+</button>
                    </div>
                    <p class="text-3xl">9500Р</p>
                    <div class="flex gap-4 items-center text-red-600">
                        <p class="text-xl">Удалить</p>
                        <Icon class="text-3xl" name="ic:outline-delete-outline"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="w-full lg:w-3/4 lg:mx-auto rounded-xl border-2 border-[#0C669C] p-4 flex flex-col gap-4 items-center justify-center relative h-fit">
        <p class="text-xl">Корзина пуста...</p>
        <p class="text-lg opacity-70">Перейдите в каталог для добавления товаров</p>
        <NuxtLink to="/catalog" class="px-4 py-2 rounded-xl bg-[#3BBAC2]">В каталог</NuxtLink>
    </div>
</template>

<script setup>
useServerSeoMeta({
    title: 'Корзина',
    lang: 'ru'
})
</script>
