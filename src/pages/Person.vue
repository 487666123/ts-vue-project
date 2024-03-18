<template>
    <div class="app">
        <h2>姓名: {{ name }}</h2>
        <h2>年龄: {{ age }}</h2>
        <n-space>
            <n-button @click="changeName" type="primary">修改姓名</n-button>
            <n-button @click="changeAge" type="info">修改年龄</n-button>
            <n-button @click="alertTelephone" type="warning">查看联系信息</n-button>
        </n-space>
        <h2>一辆 {{ car.brand }} 车, 价值 {{ car.price }} 万元</h2>
        <n-button @click="changePrice">修改汽车价格</n-button>
        <ul>
            <li v-for="game of games" key="game.id">{{ game.name }}</li>
        </ul>
    </div>
</template>
<script setup lang="ts" name="MyPerson">
    import { NButton, NSpace } from 'naive-ui'
    import { ref } from 'vue'

    let games = ref([
        { id: 'gameid_1', name: '原神' },
        { id: 'gameid_2', name: '三国杀' },
        { id: 'gameid_3', name: '英雄联盟' }
    ])

    let car = ref({
        brand: '奔驰',
        price: 100
    })

    function changePrice() {
        car.value.price += 10
    }

    // 数据
    let name = ref('张三') // 注意: 此时的 name 不是响应式
    let age = ref(18)
    let telephone = ref('10086')

    // 方法
    function changeName() {
        name.value = 'zhang-san' // 注意: 这样修改 name，页面是没有变化的
        console.log(name) // name 确实改了，但是 name 不是响应式
    }

    function changeAge() {
        age.value++
    }

    function alertTelephone() {
        alert(telephone.value)
    }
</script>

<style scoped></style>