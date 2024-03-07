<template>
    <div class="flex flex-col justify-center items-center grow relative py-5 rounded-lg xl:gap-20 md:gap-16 gap-10 text-center bg-[url(/img/auth/login.png)] bg-white/80 bg-cover border border-[#0C669C]/80">
        <div class="flex flex-col gap-4">
            <p class="text-xl md:text-2xl xl:text-3xl text-[#0C669C] font-semibold">Регистрация</p>
            <p class="text-xs md:text-sm xl:text-base text-black/80">Добро пожаловать! Зарегистрируйте аккаунт.</p>
        </div>
        <div class="flex flex-col gap-6 md:gap-8 xl:gap-10 w-full">
            <div class="flex flex-col gap-4">
                <div class="flex items-center gap-6 w-full justify-center">
                    <FormKit v-model="regForm.name" outer-class="$remove:mb-4 md:w-1/3" inner-class="$remove:mb-1 $remove:max-w-md $remove:ring-1 $remove:ring-gray-400 w-full $remove:focus-within:ring-2" message-class="text-[#E71616]" input-class="$remove:text-gray-700 $remove:border-none w-full border border-[#0C669C] px-4 py-1 w-full focus:outline-none focus:ring-0 focus:appearance-none rounded-full" name="Имя" placeholder="Имя" type="text"/>
                    <FormKit v-model="regForm.surname" outer-class="$remove:mb-4 md:w-1/3" inner-class="$remove:mb-1 $remove:max-w-md $remove:ring-1 $remove:ring-gray-400 w-full $remove:focus-within:ring-2" message-class="text-[#E71616]" input-class="$remove:text-gray-700 $remove:border-none w-full border border-[#0C669C] px-4 py-1 w-full focus:outline-none focus:ring-0 focus:appearance-none rounded-full" name="Фамилия" placeholder="Фамилия" type="text"/>
                </div>
                <div class="flex items-center gap-6 w-full justify-center">
                    <FormKit v-model="regForm.email" outer-class="$remove:mb-4 md:w-1/3" inner-class="$remove:mb-1 $remove:max-w-md $remove:ring-1 $remove:ring-gray-400 w-full $remove:focus-within:ring-2" message-class="text-[#E71616]" input-class="$remove:text-gray-700 $remove:border-none w-full border border-[#0C669C] px-4 py-1 w-full focus:outline-none focus:ring-0 focus:appearance-none rounded-full" name="Email" placeholder="Email" type="text"/>
                    <FormKit v-model="regForm.password" outer-class="$remove:mb-4 md:w-1/3" inner-class="$remove:mb-1 $remove:max-w-md $remove:ring-1 $remove:ring-gray-400 w-full $remove:focus-within:ring-2" message-class="text-[#E71616]" input-class="$remove:text-gray-700 $remove:border-none w-full border border-[#0C669C] px-4 py-1 w-full focus:outline-none focus:ring-0 focus:appearance-none rounded-full" name="Password" placeholder="••••••" type="text"/>
                </div>
            </div>
            <FormKit type="submit" input-class="bg-[#0C669C] rounded-full text-white text-center w-1/4 py-2 hover:opacity-80 transition-all duration-300 $remove:focus-visible:outline-blue-600 $remove:focus-visible:outline-offset-2 $remove:bg-blue-600 $remove:focus-visible:outline-2 $remove:inline-flex $remove:text-sm">Регистрация</FormKit>
            <div class="flex items-center justify-center gap-5">
                <div class="h-px w-1/6 bg-black/70"></div>
                <p class="text-[#0C669C]">Либо</p>
                <div class="h-px w-1/6 bg-black/70"></div>
            </div>
            <NuxtLink to="/auth" class="bg-[#3BBAC2] rounded-full mx-auto text-white text-center w-1/4 py-2 hover:opacity-80 transition-all duration-300">У меня уже есть аккаунт</NuxtLink>
        </div>
    </div>
</template>

<script setup>
const supabase = useSupabaseClient()

const regForm = ref({
    name:"",
    surname:"",
    email:"",
    password:""
})

const { data, error } = await supabase.auth.signUp({
  email: 'example@email.com',
  password: 'example-password',
})

</script>
