<template>
    <div class="flex flex-col gap-6">
        <p class="text-3xl">О компании</p>
        <div class="flex gap-4 max-xl:flex-col">
            <div class="flex flex-col gap-4">
                <div class="flex w-full bg-gradient-to-br from-[#0C669C] to-[#3BBAC2] p-0.5 rounded-lg gap-6">
                    <div class="bg-white w-full h-full px-6 py-6 rounded-md">
                        <p>Добро пожаловать в мир Оптика — место, где каждая оправа и каждая линза отражают ваш стиль и уникальность. Мы стремимся сделать ваш выбор намного удобнее и стильнее, предлагая широкий ассортимент продукции высокого качества. Наша цель - помочь вам не только видеть, но и выглядеть потрясающе в любое время. Доверьте свое зрение опытным профессионалам и подчеркните свою индивидуальность вместе с Оптика.</p>
                    </div>
                </div>
                <div class="flex w-full bg-gradient-to-tr from-[#0C669C]/90 to-[#3BBAC2]/90 text-white rounded-md px-6 py-6 gap-6">
                    <p>В нашем интернет-магазине вы найдете найдете не только стильные оправы и контактные линзы высокого качества, но и профессиональные консультации опытных специалистов. Мы ценим каждого клиента, стремимся к их максимальному удовлетворению и уверены — ваш опыт покупок с нами будет комфортным, простым и приятным. Доверьте свое зрение нам, и мы подарим вам ясность и стиль в каждом образе.</p>
                </div>
            </div>
            <img class="xl:w-1/2 max-xl:aspect-video w-full max-xl:object-cover max-xl:h-[400px] rounded-md" src="/img/about/bg.jpg" alt=""> 
        </div>
    </div>
    <div class="flex flex-col gap-6">
        <p class="text-3xl">Контакты</p>
        <div style="position:relative;overflow:hidden;"><a href="https://yandex.ru/maps/213/moscow/house/kronshtadtskiy_bulvar_vl37bs1/Z04YcwdmSkIOQFtvfXR1eX5rZQ==/?ll=37.506379%2C55.848281&utm_medium=mapframe&utm_source=maps&z=17.06" style="color:#eee;font-size:12px;position:absolute;top:14px;">Кронштадтский бульвар, вл37Бс1 — Яндекс Карты</a><iframe class="w-full h-[500px]" src="https://yandex.ru/map-widget/v1/?ll=37.506379%2C55.848281&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1Njc4MjEwNhJS0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAsINCa0YDQvtC90YjRgtCw0LTRgtGB0LrQuNC5INCx0YPQu9GM0LLQsNGALCDQstC7MzfQkdGBMSIKDYkGFkIVpGRfQg%2C%2C&z=17.06" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe></div>
        <div class="flex items-center flex-wrap md:justify-center gap-4">
            <NuxtLink to="tel:8-999-888-77-66" class="flex items-center gap-2">
                <Icon class="text-3xl shrink-0 text-[#0C669C]" name="material-symbols:call"/>
                <p class="text-xl">8-999-888-77-66</p>
            </NuxtLink>
            <NuxtLink to="mailto:123123123123@mail.ru" class="flex items-center gap-2">
                <Icon class="text-3xl shrink-0 text-[#0C669C]" name="material-symbols:alternate-email-rounded"/>
                <p class="text-xl">123123123123@mail.ru</p>
            </NuxtLink>
            <div class="flex items-center gap-2">
                <Icon class="text-3xl shrink-0 text-[#0C669C]" name="material-symbols:add-location-alt-outline"/>
                <p class="text-xl">Кронштадский бульвар 37Б</p>
            </div>
            <div class="flex items-center gap-2">
                <Icon class="text-3xl shrink-0 text-[#0C669C]" name="material-symbols:alarm-outline-rounded"/>
                <p class="text-xl">10:00-18:00</p>
            </div>
        </div>
    </div>
    <div class="">
        <p class="text-3xl">Отзывы</p>
    </div>
</template>

<script setup>
useServerSeoMeta({
    title: 'О нас',
    lang: 'ru'
})
</script>