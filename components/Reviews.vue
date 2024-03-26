<template>
    <div class="relative col-span-full w-full grid-container">
        <Swiper :loop="true" :space-between="20" :modules="[SwiperAutoplay, SwiperNavigation]" :autoplay="{delay:3500}" :navigation="{prevEl:'.reviewsPrev', nextEl:'.reviewsNext'}" class="w-full z-[1] rounded-md"
        :breakpoints="
                {
                    320: {
                        'slidesPerView': 1
                    },
                    768: {
                        'slidesPerView': 2.5
                    },
                    1024: {
                        'slidesPerView': 4
                    }
                }">
            <SwiperSlide class="!flex flex-col w-full rounded-md p-4 border border-gray-200 gap-6" v-for="a in 8">
                <div class="flex items-center gap-4">
                    <Icon class="text-4xl text-[#218CAD]" name="material-symbols:account-circle"/>
                    <p class="text-xl">Имя Фамилия</p>  
                </div>
                <p class="opacity-70">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis minima placeat unde nobis eum magnam illo soluta architecto nemo ipsum, quasi ex doloribus beatae voluptates quaerat facilis ipsa odit quibusdam?</p>
            </SwiperSlide>
        </Swiper>
        <button class="absolute top-1/2 -translate-y-1/2 -left-10 reviewsPrev">
            <Icon class="text-4xl text-[#218CAD]" name="material-symbols:chevron-left"/>
        </button>
        <button class="absolute top-1/2 -translate-y-1/2 -right-10 reviewsNext">
            <Icon class="text-4xl text-[#218CAD]" name="material-symbols:chevron-right"/>
        </button>
        <pre>{{ reviews }}</pre>
    </div>
</template>

<script setup>
const supabase = useSupabaseClient()

const { data:reviews, error } = await supabase
  .from('reviews')
  .select(`
    desc,
    users (
      name,
      surname
    )
  `)
</script>
