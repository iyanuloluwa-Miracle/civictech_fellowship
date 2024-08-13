<template>
    <div class="bg-[#228B22] text-gray-100 py-5 px-5 shadow-custom md:flex justify-between items-center">
        <div class="flex items-center cursor-pointer">
            <span class="text-green-500 text-xl mr-1">
                <img src="../assets/shield.png" alt="logo image" class="w-9 h-9" />
            </span>
            <h1 class="text-xl font-extrabold">Alert Patrol</h1>
        </div>

        <span @click="MenuOpen()" class="absolute md:hidden right-6 top-1.5 text-5xl cursor-pointer">

            <i :class="[open ? 'bi bi-x' : 'bi bi-filter']"></i>

        </span>
        <ul :class="[
            'md:flex md:items-center md:px-0 px-10 md:pb-0 pb-10 md:static absolute bg-[#228B22] md:w-auto w-full top-14 duration-700 ease-in',
            open ? 'left-0' : 'left-[-100%]'
        ]">
            <li class="md:mx-4 md:my-0 my-6" v-for="link in Links" :key="link.name">
                <a :href="link.link" class="text-xl font-bold hover:text-green-500">{{ link.name }}</a>
            </li>
            <Button>Get Started</Button>
        </ul>
    </div>
</template>

<script>
import { ref } from 'vue';
import Button from '../components/Button.vue';

export default {
    components: {
        Button
    },
    setup() {
        let open = ref(false);
        let Links = [
            { name: "Home", link: "#" },
            { name: "How It Works", link: "#" },
            { name: "Features", link: "#" },
            { name: "About Us", link: "#" },
            { name: "Contact", link: "#" },
        ];

        function MenuOpen(){
            open.value = !open.value
        }

        return { Links, open, MenuOpen };
    },
};
</script>
