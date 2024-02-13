<template>
    <header class="w-full relative grid-container py-2" :class="{'max-lg:border-b border-[#3BBAC2]' : isMenuShow}">
        <div class="flex items-center gap-10 max-lg:justify-between">
            <NuxtLink to="/">
                <img class="w-[150px] h-[120px]" src="assets/img/logo.png" alt=""> 
            </NuxtLink>
            <div class="flex items-center lg:justify-between max-lg:px-4 grow max-lg:flex-col max-lg:absolute max-lg:gap-6 max-lg:left-0 max-lg:bg-white max-lg:transition-all max-lg:duration-500 max-lg:z-30 max-lg:py-6 max-lg:justify-center max-lg:w-full" :class="isMenuShow ? 'max-lg:top-[calc(100%+1px)]' : 'max-lg:top-0 max-lg:-translate-y-full'">
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
                <div class="flex gap-8 items-center max-md:gap-4 max-lg:flex-wrap max-lg:justify-center">
                    <form class="relative max-lg:w-full" action="">
                        <input class="rounded-full border border-[#3BBAC2] pl-4 py-1 pr-10 w-full focus:outline-none focus:ring-0 focus:appearance-none" type="text">
                        <button class="absolute top-1/2 -translate-y-1/2 right-3">
                            <Icon class="text-2xl text-[#3BBAC2]" name="gravity-ui:magnifier"/>
                        </button>
                    </form>
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
        <div @click="isMenuShow = false" class="w-full absolute h-screen bg-black/70 left-0 col-span-full z-20 top-[calc(100%+1px)] lg:hidden" :class="{'hidden' : !isMenuShow}"></div>

        
    </header>
</template>

<script setup>
    const isMenuShow = ref(false)
</script>

<style lang="scss" scoped>

</style>