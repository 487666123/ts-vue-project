<template>
    <div>
        <h3>Person 3</h3>
        <button @click="getDog">再来一只小狗</button>
        <p>现在有 {{ dogCount }} 张狗狗照片 random: {{ random }}</p>
        <p>
            <img v-for="dog of dogs" :src="dog" alt="">
        </p>
    </div>
</template>

<script setup lang="ts" name="Person3">
    import Person3Child from './Person3Child.vue';
    import useDog from '@/hooks/useDog';
    import emitter from '@/utils/emitter';
    import { provide, ref } from 'vue';

    let { dogs, random, getDog, dogCount } = useDog()

    let str = ref('这是 Person 3 页面')

    function myHandler(value: string) {
        console.log('My Handler', value)
    }

    provide('str', str)

</script>

<style scoped>
    img {
        width: 150px;
        margin: 10px;
    }
</style>