<template>
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
        <div class="relative w-full -mt-6 col-span-full grid-container py-10 bg-[#0C669C]">
            <div class="absolute w-full h-full top-0 bg-[url(/img/hero/bg.png)] bg-bottom left-0 col-span-full"></div>
            <Swiper :loop="true" :space-between="20" :modules="[SwiperPagination, SwiperAutoplay]" :pagination="{ clickable: true }" :autoplay="{delay:3500}" class="w-full md:h-[calc(100vh/2)] z-[1] rounded-md shadow-[0px_0px_13px_-9px_black] overflow-hidden">
                <SwiperSlide class="w-full" v-for="n in 10">
                    <NuxtLink class="w-full">
                        <img class="object-cover aspect-video w-full" src="/img/hero/3.jpg" alt="">
                        <img class="object-cover aspect-video w-full" src="/img/hero/4.jpg" alt="">
                    </NuxtLink>
                    <!-- <NuxtLink class="w-full">
                        <img class="object-cover aspect-video w-full " src="/img/hero/4.jpg" alt="">
                    </NuxtLink> -->
                </SwiperSlide>
            </Swiper>
        </div>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 text-white">
        <div class="flex flex-col bg-[#218CAD] rounded-md px-6 py-6">
            <div class="flex items-center justify-between">
                <p class="text-2xl">Большой ассортимент</p>
                <Icon class="text-5xl mr-6" name="material-symbols:shopping-bag-outline"/>
            </div>
            <p class="text-md opacity-70">У нас в магазине оптики огромный выбор оправ и линз для всех возрастов и стилей. Найдите идеальные очки, подчеркивающие вашу уникальность!</p>
        </div>
        <div class="flex flex-col bg-[#197299] rounded-md px-6 py-6">
            <div class="flex items-center justify-between">
                <p class="text-2xl">Гарантия качества</p>
                <Icon class="text-5xl mr-6" name="material-symbols:google-guarantee"/>
            </div>
            <p class="text-md opacity-70">Мы гарантируем высокое качество продукции в магазине оптики. Каждая пара очков проходит строгий контроль, чтобы обеспечить надежность и комфорт для ваших глаз.</p>
        </div>
        <div class="flex flex-col bg-[#218CAD] rounded-md px-6 py-6">
            <div class="flex items-center justify-between">
                <p class="text-2xl">Доступные цены</p>
                <Icon class="text-5xl mr-6" name="solar:sale-bold"/>
            </div>
            <p class="text-md opacity-70">Отличное качество по доступным ценам! Найдите стильные и комфортные очки по выгодным предложениям в нашем магазине оптики.</p>
        </div>
    </div>
    <div class="flex flex-col gap-6">
        <p class="text-2xl md:text-3xl xl:text-4xl text-center">Хиты продаж</p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card v-for="card in cards " v-bind="card"></Card>
        </div>
    </div>
    <div class="relative bg-[url(/img/contact/bg.png)] w-full col-span-full py-16 grid-container">
        <div class="absolute w-full h-full top-0 left-0 bg-gradient-to-br from-[#0C669C] to-[#3BBAC2] opacity-85 col-span-full"></div>
        <div class="flex py-10 px-4 md:px-6 xl:px-10 rounded-md bg-white gap-6 z-[1] max-md:flex-col">
            <div class="md:w-[55%]">
                <Swiper :loop="true" :space-between="20" :modules="[SwiperAutoplay]" :autoplay="{delay:3000}" class="w-full">
                    <SwiperSlide class="!flex flex-col gap-8 w-full">
                        <p class="text-2xl">Близорукость</p>
                        <p class="opacity-70">Близорукость — распространенное заболевание глаз, при котором человек видит хорошо близко, но плохо вдали. Причина - фокусировка света в области перед сетчаткой. Лечится очками, контактными линзами или хирургическими методами. Раннее выявление и правильная коррекция важны для сохранения зрения и комфортной жизни.</p> 
                    </SwiperSlide>
                    <SwiperSlide class="!flex flex-col gap-8 w-full">
                        <p class="text-2xl">Дальнозоркость</p>
                        <p class="opacity-70">Дальнозоркость  - состояние, когда человек видит хорошо вдали, но плохо близко. Происходит из-за того, что фокус света падает позади сетчатки. Нередко возникает у детей и может быть унаследовано. Лечится очками, линзами или хирургическим вмешательством. Важна регулярная проверка зрения у офтальмолога для своевременной коррекции и поддержания зрительного комфорта.</p> 
                    </SwiperSlide>
                    <SwiperSlide class="!flex flex-col gap-8 w-full">
                        <p class="text-2xl">Астигматизм</p>
                        <p class="opacity-70">Астигматизм - это нарушение зрения, когда корневая поверхность глаза не идеально округлая, что вызывает искажение изображения. Человек видит размыто как на близком, так и на дальнем расстоянии. Лечится очками, линзами или хирургически. Важно регулярно проверять зрение у офтальмолога для подбора оптимального способа коррекции и поддержания зрительного комфорта.</p> 
                    </SwiperSlide>
                </Swiper>
            </div>
            <div class="flex flex-col md:w-[45%] rounded-lg p-1 bg-gradient-to-br from-[#0C669C] to-[#3BBAC2]">
                <div class="flex flex-col items-center gap-8 bg-white w-full h-full rounded-md px-4 py-6">
                    <p class="text-center text-xl">Консультация</p>
                    <div class="flex flex-col gap-4 w-full items-center">
                        <input class="border border-[#0C669C] px-4 py-1 w-4/5 focus:outline-none focus:ring-0 focus:appearance-none rounded-md" placeholder="Имя" type="text">
                        <input class="border border-[#0C669C] px-4 py-1 w-4/5 focus:outline-none focus:ring-0 focus:appearance-none rounded-md" placeholder="Телефон" type="text">
                    </div>
                    <button class="bg-gradient-to-br from-[#0C669C] to-[#3BBAC2] rounded-md text-white text-center w-1/2 py-2">Звонок</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const cards=[
    {
        image: "https://www.optic-city.ru/image/cache/rss/1/9/5/3/1/5/9/item_1953159/1953159_0-810x540.jpg.webp",
        title: "Очки Boss 1428 0OC",
        price: 14599
    },
    {
        image: "https://www.optic-city.ru/image/cache/rss/1/8/1/7/8/3/5/item_1817835/1817835_0-810x540.jpg.webp",
        title: "Очки RayBan 5228 5014 (55)",
        price: 15749
    },
    {
        image: "https://www.optic-city.ru/image/cache/rss/1/9/1/3/4/7/1/item_1913471/1913471_0-810x540.jpg.webp",
        title: "Очки PRODESIGN 1762 1 9631",
        price: 199899
    }
]
</script>

<style scoped>

</style>