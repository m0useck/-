<template>
    <header class="w-full relative grid-container py-2">
        <div class="flex items-center gap-10 max-lg:justify-between ">
            <NuxtLink to="/">
                <Icon class="text-4xl text-[#3BBAC2]" name="bi:emoji-sunglasses"/> 
            </NuxtLink>
            <div class="flex items-center lg:justify-between grow max-lg:flex-col max-lg:absolute max-lg:gap-6 max-lg:left-0 max-lg:bg-white max-lg:transition-all max-lg:duration-500 max-lg:z-30 max-lg:h-screen max-lg:justify-center max-lg:w-full" :class="isMenuShow ? 'max-lg:top-full' : 'max-lg:top-0 max-lg:-translate-y-full'">
                <div class="flex items-center gap-16 max-lg:flex-col max-lg:gap-8">
                    <NuxtLink>
                        Каталог
                    </NuxtLink>
                    <NuxtLink>
                        Акции
                    </NuxtLink>
                    <NuxtLink>
                        О нас
                    </NuxtLink>
                </div>
                <div class="flex gap-8 items-center max-md:gap-4">
                    <button>
                        <Icon class="text-2xl text-[#3BBAC2]" name="gravity-ui:magnifier"/>
                    </button>
                    <button>
                        <Icon class="text-2xl text-[#3BBAC2]" name="material-symbols:shopping-cart-outline"/>
                    </button>
                    <NuxtLink class="bg-gradient-to-r from-[#0C669C] to-[#3BBAC2] text-white py-2 px-7 rounded-md">
                        Вход
                    </NuxtLink>
                </div>
            </div>
            <button class="flex flex-col justify-between w-[26px] transition-[height] z-40 ease-linear duration-100 lg:hidden" :class="isMenuShow ? 'h-5' : 'h-3.5'" @click="isMenuShow = !isMenuShow">
                <span :class="{'rotate-45' : isMenuShow}" class="w-full h-0.5 bg-[#3BBAC2] rounded-[1px] origin-[0] transition-transform ease-linear duration-500"></span>
                <span :class="{'opacity-0' : isMenuShow}" class="w-full h-0.5 bg-[#3BBAC2] rounded-[1px] transition-opacity ease-linear duration-500"></span>
                <span :class="{'-rotate-45' : isMenuShow}" class="w-full h-0.5 bg-[#3BBAC2] rounded-[1px] origin-[0] transition-transform ease-linear duration-500"></span>
            </button>
        </div>
    </header>
</template>

<script setup>
    const isMenuShow = ref(false)
</script>

<style lang="scss" scoped>

</style>