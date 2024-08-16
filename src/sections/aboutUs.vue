<template>
    <section>
        <h1 class="text-[2.9rem] mt-9 text-[#228B22] font-extrabold lg:mb-5 pt-2 lg:text-5xl text-center">About Us</h1>

        <div
            class="flex flex-col-reverse lg:flex-row items-center justify-around lg:space-x-8 space-y-8 lg:space-y-0 px-4 py-8">

            <div class="lg:max-w-2xl text-center lg:text-left">
                <h2 class="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">Our Mission</h2>
                <p class="text-lg lg:text-xl font-semibold text-gray-500  mb-6">
                    At EcoGuard, we are committed to empowering communities to take action against environmental
                    pollution. Our platform provides an accessible and effective way for individuals to report pollution
                    incidents, helping to create a cleaner and safer environment for everyone. By leveraging technology,
                    we aim to bridge the gap between citizens and authorities, ensuring that environmental concerns are
                    addressed swiftly and transparently. Together, we can protect our planet and build a sustainable
                    future.
                </p>

                <router-link to="/comingsoon">
                    <Button
                        class="bg-[#228B22] text-white font-semibold py-3 px-8 rounded-md shadow-md hover:bg-[#1b7028] transition-colors duration-300">Learn
                        More</Button>

                </router-link>

            </div>

            <div class="flex-shrink-0 w-full lg:w-auto">
                <img src="../assets/aboutus.svg" alt="aboutUs page" class="w-full max-w-md mx-auto lg:mx-0 h-auto" />
            </div>

        </div>
    </section>
</template>

<script>
import Button from "../components/Button.vue";

export default {
    components: {
        Button,
    },
    setup() { },
};
</script>
