<template>
    <section id="home" class="py-5">
        <div class="container flex flex-wrap items-center justify-center mx-auto mt-10 md:px-12 md:flex-row">
            <div class="mb-14 lg:mb-0 lg:w-1/2">
                <h1
                    class="max-w-xl text-[2.9rem] leading-none text-gray-900 font-extrabold text-center lg:text-5xl lg:text-left lg:leading-tight mb-5">
                    A small business is only as good as its tools
                </h1>
                <p class="max-w-xl text-center text-gray-500 lg:text-left lg:max-w-md font-semibold">
                    We are different. Growlight is the only SaaS business platform that
                    lets you run your business on one platform.
                </p>
                <div class="flex justify-center mt-14 lg:justify-start">
                    <Button>Learn More</Button>
                    <Button class="ml-5">Get Started</Button>
                </div>
            </div>
            <div class="lg:w-1/2 flex justify-center">
                <img class="w-full max-w-md h-auto" src="../assets/hero.jpg" alt="hero-img" />
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
