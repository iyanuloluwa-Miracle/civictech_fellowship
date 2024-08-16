<template>
    <div class="flex items-center flex-wrap py-5 px-[7%] min-h-screen gap-4 pb-20">
        <div class="flex-1 min-w-[400px]">
            <h3 class="text-[45px] uppercase text-blue-500">Coming Soon</h3>

            <p class="py-1 text-blue-500">
                We're dedicated to building this platform for you, and your financial support can make a significant
                difference in bringing it to life. Stay tuned for more updates!
            </p>

            <div class="flex gap-4 py-2">
                <div class="flex-1 p-2 bg-gray-200 border border-gray-800 text-center">
                    <h3 class="text-[50px] text-gray-800">{{ days }}</h3>
                    <span class="text-blue-500 text-[20px]">Day</span>
                </div>

                <div class="flex-1 p-2 bg-gray-200 border border-gray-800 text-center">
                    <h3 class="text-[50px] text-gray-800">{{ hours }}</h3>
                    <span class="text-blue-500 text-[20px]">Hour</span>
                </div>

                <div class="flex-1 p-2 bg-gray-200 border border-gray-800 text-center">
                    <h3 class="text-[50px] text-gray-800">{{ minutes }}</h3>
                    <span class="text-blue-500 text-[20px]">Minute</span>
                </div>

                <div class="flex-1 p-2 bg-gray-200 border border-gray-800 text-center">
                    <h3 class="text-[50px] text-gray-800">{{ seconds }}</h3>
                    <span class="text-blue-500 text-[20px]">Second</span>
                </div>
            </div>

            <a href="#"
                class="inline-block py-2 px-12 mt-2 text-[17px] bg-blue-500 text-white transition-all hover:tracking-wider">
                Notify me
            </a>
        </div>

        <div class="flex-1 min-w-[400px]">
            <img src="../assets/pageconstruction.svg" alt="coming-soon image" class="w-full" />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);

const countDate = new Date('Dec 1, 2024 00:00:00').getTime();

const countDown = () => {
  const now = new Date().getTime();
  const gap = countDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  days.value = Math.floor(gap / day);
  hours.value = Math.floor((gap % day) / hour);
  minutes.value = Math.floor((gap % hour) / minute);
  seconds.value = Math.floor((gap % minute) / second);
};

onMounted(() => {
  countDown();
  setInterval(countDown, 1000);
});
</script>

<style scoped>
@media (max-width: 500px) {
  .container .title {
    font-size: 35px;
  }

  .container .content p {
    font-size: 14px;
  }

  .container .content .count-down {
    gap: 5px;
  }

  .container .content .count-down h3 {
    font-size: 30px;
  }

  .container .content .count-down span {
    font-size: 15px;
  }
}
</style>
