<template>
    <div>
    <Swiper :loop="true" :space-between="20" :modules="[SwiperPagination, SwiperAutoplay, SwiperNavigation]" :pagination="{ clickable: true }" :autoplay="{delay:3500}" :navigation="{enabled: true}" class="w-full md:h-[calc(100vh/2)] z-[1] rounded-md shadow-[0px_0px_13px_-9px_black] overflow-hidden">
            <SwiperSlide class="w-full">
                <NuxtLink class="w-full">
                    <img class="object-cover aspect-video w-full" src="/img/hero/3.jpg" alt="">
                </NuxtLink>
            </SwiperSlide>
            <SwiperSlide class="w-full">
                <NuxtLink class="w-full">
                    <img class="object-cover aspect-video w-full" src="/img/hero/4.jpg" alt="">
                </NuxtLink>
            </SwiperSlide>
            <SwiperSlide class="w-full">
                <NuxtLink class="w-full">
                    <img class="object-cover aspect-video w-full" src="/img/hero/5.jpg" alt="">
                </NuxtLink>
            </SwiperSlide>
        </Swiper>
    </div>
</template>

<script setup>

</script>
