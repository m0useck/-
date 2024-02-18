<template>
    <footer class="grid-container w-full mt-16 bg-[#028ECE]/10 py-6">
        <div class="flex items-center max-lg:flex-col xl:gap-32 md:gap-12 gap-8">
            <div class="">
                <img class="md:h-[300px] aspect-video rounded-md" src="/img/footer.png" alt="">
            </div>
            <div class="flex flex-col gap-8 max-lg:w-full lg:grow">
                <div class="flex justify-center items-center gap-6">
                    <NuxtLink class="transition-all duration-300 hover:scale-125"><Icon class="text-3xl" name="skill-icons:github-dark"/></NuxtLink>
                    <NuxtLink class="transition-all duration-300 hover:scale-125"><Icon class="text-3xl" name="logos:telegram"/></NuxtLink>
                    <NuxtLink class="transition-all duration-300 hover:scale-125"><Icon class="text-3xl" name="devicon:figma"/></NuxtLink>
                </div>
                <div class="flex flex-col gap-4">
                    <div class="flex items-center justify-between xl:w-3/4 mx-auto gap-4 max-md:flex-col">
                        <NuxtLink class="flex flex-col w-fit transition-all duration-300 hover:text-[#3BBAC2] after:w-0 after:h-px after:bg-[#3BBAC2] hover:after:w-full after:transition-all after:duration-300">О нас</NuxtLink> 
                        <span class="bg-black rounded-full w-1 h-1"></span>
                        <NuxtLink class="flex flex-col w-fit transition-all duration-300 hover:text-[#3BBAC2] after:w-0 after:h-px after:bg-[#3BBAC2] hover:after:w-full after:transition-all after:duration-300">Проверка зрения</NuxtLink> 
                        <span class="bg-black rounded-full w-1 h-1"></span>
                        <NuxtLink class="flex flex-col w-fit transition-all duration-300 hover:text-[#3BBAC2] after:w-0 after:h-px after:bg-[#3BBAC2] hover:after:w-full after:transition-all after:duration-300">Доставка и оплата</NuxtLink>
                    </div>
                    <span class="bg-black rounded-full w-1 h-1 mx-auto md:hidden"></span>
                    <div class="flex items-center justify-between xl:w-3/4 mx-auto gap-4 max-md:flex-col">
                        <NuxtLink class="flex flex-col w-fit transition-all duration-300 hover:text-[#3BBAC2] after:w-0 after:h-px after:bg-[#3BBAC2] hover:after:w-full after:transition-all after:duration-300">Оферта</NuxtLink>
                        <span class="bg-black rounded-full w-1 h-1"></span>
                        <NuxtLink class="flex flex-col w-fit transition-all duration-300 hover:text-[#3BBAC2] after:w-0 after:h-px after:bg-[#3BBAC2] hover:after:w-full after:transition-all after:duration-300">Политика конфиденциальности</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>

</script>
