<template>
    <div class="relative bg-[url(/img/contact/bg.png)] w-full col-span-full py-16 grid-container">
        <div class="absolute w-full h-full top-0 left-0 bg-gradient-to-br from-[#0C669C] to-[#3BBAC2] opacity-85 col-span-full"></div>
        <div class="flex py-10 px-4 md:px-6 xl:px-10 rounded-md bg-white gap-6 z-[1] max-md:flex-col">
            <div class="md:w-[55%]">
                <Swiper :loop="true" :space-between="20" :modules="[SwiperAutoplay, SwiperPagination]" :pagination="{ clickable: true }" :autoplay="{delay:5000}" class="w-full h-full">
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
                <FormKit type="form" @submit="feedback" messages-class="text-[#E71616]" form-class="flex flex-col items-center gap-8 bg-white w-full h-full rounded-md px-4 py-6" :actions="false">
                    <p class="text-center text-xl">Консультация</p>
                    <div class="flex flex-col gap-4 w-full items-center">
                        <FormKit v-model="form.name" validation="required|length:2" outer-class="$remove:mb-4 md:w-4/5" inner-class="$remove:mb-1 $remove:max-w-md $remove:ring-1 $remove:ring-gray-400 w-full $remove:focus-within:ring-2" message-class="text-[#E71616]" input-class="$remove:text-gray-700 $remove:border-none w-full border border-[#0C669C] px-4 py-1 w-full focus:outline-none focus:ring-0 focus:appearance-none rounded-md" name="Имя" placeholder="Имя" type="text"/>
                        <FormKit v-model="form.number" validation="required|length:11" outer-class="$remove:mb-4 md:w-4/5" inner-class="$remove:mb-1 $remove:max-w-md $remove:ring-1 $remove:ring-gray-400 w-full $remove:focus-within:ring-2" message-class="text-[#E71616]" input-class="$remove:text-gray-700 $remove:border-none w-full border border-[#0C669C] px-4 py-1 w-full focus:outline-none focus:ring-0 focus:appearance-none rounded-md" name="Телефон" placeholder="Телефон" type="mask" mask="+7 (###) ### ## ##"/>
                    </div>
                    <FormKit type="submit" input-class="bg-gradient-to-br from-[#0C669C] to-[#3BBAC2] rounded-md text-white text-center w-full py-2 hover:opacity-80 transition-all duration-300 $remove:focus-visible:outline-blue-600 $remove:focus-visible:outline-offset-2 $remove:bg-blue-600 $remove:focus-visible:outline-2 $remove:inline-flex $remove:text-sm">Звонок</FormKit>
                    <button type="button" @click="message.title = null" class="fixed top-10 right-10 z-[11] cursor-pointer flex items-center gap-4 px-6 py-2 rounded-2xl w-fit text-[#131313] shadow-[0_0_20px_-7px]" :class="message.type ? ' bg-[#BDE595]' : 'bg-red-500'" v-if="message.title">
                        <span>{{message.title}}</span>
                        <Icon name="material-symbols:close-rounded" class="text-xl"/>
                    </button>
                </FormKit>
            </div>
        </div>
    </div>
</template>

<script setup>

const token = "7082146541:AAETwhFCqedtNq-qTHNL9e9hf7Mc-F0Qr0E"
const chatId = "-4122136911"
const URL = `https://api.telegram.org/bot${token}/sendMessage`

let message = ref({
    title:null,
    type:true
})
const form = ref({
    name:"",
    number:""
})

const feedback = async () => {
        let msg = "<b>Сообщение с сайта!</b>\n"
        + `<b>Имя:</b> ${form.value.name}\n`
        + `<b>Телефон:</b> ${form.value.number}\n`
        const {data, error} = await useFetch(URL,{
            body:{
                'chat_id': chatId,
                'parse_mode': 'html',
                'text': msg
            },
            method:'post'        
      })
        if (error.value) return message.value.title = 'При отправке произошла ошибка!', message.value.type = false
        message.value.title = 'Успешная отправка!', message.value.type = true 
        form.value.name = ""
        form.value.number = ""
        setTimeout(() => {
            message.value.title = null
        }, 3000);
    }

</script>
