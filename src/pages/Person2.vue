<template>
    <!-- :value 单向只读 -->
    <!-- v-model 双向读改 -->
    <p>姓: <input type="text" v-model="person.firstName"></p>
    <p>名: <input type="text" v-model="person.lastName"></p>
    <p>全名: {{ fullName }}</p>
    <p>目标姓名: <input type="text" v-model="targetName"></p>
    <p>(姓名之间请使用 “-” 分隔)</p>
    <button @click="modifyName">修改姓名</button>
    <button @click="modifyPerson">修改人</button>
    <h4>{{ person }}</h4>
</template>

<!-- Watch -->
<!-- 监视数据的变化 -->
<!-- Vue3:
        1.ref 
        2.reactive
        3.函数返回值
        4.包含上述内容的数组
 -->

<script setup lang="ts" name="MyPerson">
    import { ref, watch, computed, reactive, defineExpose } from 'vue'

    let personData = reactive({
        name: 'Person2'
    })

    let person = reactive({
        name: '张三', age: 18, firstName: '张', lastName: '三'
    })

    let targetName = ref('李-四')

    // 计算属性:
    //  根据方法内 “使用的值” 的变化 “缓存结果” “节省性能”

    // ReadOnly 只读
    // let fullName = computed(() => firstName.value + lastName.value)

    // Read & Write 可读可写
    let fullName = computed({
        get() {
            return person.firstName + person.lastName
        },
        set(value) {
            const [str1, str2] = value.split('-')
            person.firstName = str1
            person.lastName = str2
        }
    })

    function modifyName() {
        fullName.value = targetName.value
    }

    function modifyPerson() {
        Object.assign(person, {
            name: '李四',
            age: 24,
            firstName: '李',
            lastName: '四'
        })
    }

    // 监视 Watch
    // 情况一: 监视 "ref" 定义的 "对象类型" 数据, 监视的是对象的地址值
    // 若想监视对象内部属性的变, 需要手动开启深度监视
    // reactive 默认开启深度监视, 并且无法关闭 (关不掉，根本关不掉！)
    watch(person, (newValue, oldValue) => {
        console.log('new value', newValue);
        console.log('old value', oldValue);
    }, { deep: true })
    // deep 深度
    // immediate 立刻
    // watch 参数
    //  1. 被监视的数据
    //  2. 监视的回调
    //  3. 配置对象

    watch(() => person.name, (value) => {
        console.log(value)
    })

    defineExpose({ personData })
</script>