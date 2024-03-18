<template>
    <div class="main">
        <h3>我是 Person4, 我就这一句话</h3>
        <!-- 二级导航区 -->
        <ul class="navigate">
            <li v-for="person of persons" :key="person.id">
                <button @click="showPersonInfo(person)">查看新闻</button>
                <RouterLink :to="{ name: 'personContent', query: person }">
                    {{ person.name }}
                </RouterLink>
            </li>
        </ul>
        <!-- 内容区 -->
        <div class="content">
            <RouterView />
        </div>
    </div>
</template>

<script setup lang="ts">
    import { RouterLink, RouterView, useRouter } from 'vue-router';
    import type { Persons } from '@/types';
    import { reactive } from 'vue';

    const persons = reactive<Persons>([
        { id: 'pl001', name: '张三', age: 18 },
        { id: 'pl002', name: '李四', age: 28 },
        { id: 'pl003', name: '王五', age: 38 },
        { id: 'pl004', name: '李六', age: 48 }
    ])

    const router = useRouter()

    function showPersonInfo(person: any) {
        router.replace({
            name: 'personContent',
            query: person
        })
    }
</script>

<style scoped>
    .navigate {
        display: inline-block;
        width: 30%;
        height: 200px;
        margin: 0px;
        border: #000 solid 2px;
    }

    .content {
        display: inline-block;
        width: 70% -2px;
        margin: 0px;
        height: 200px;
        border: #000 solid 2px;
        border-left: 0;
    }
</style>