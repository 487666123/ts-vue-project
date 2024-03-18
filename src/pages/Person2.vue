<template>
    <!-- :value 单向只读 -->
    <!-- v-model 双向读改 -->
    <n-space vertical>
        <n-card title="数据 Person" embedded>
            {{ person }}
        </n-card>
        <n-input-group>
            <n-input-group-label>姓</n-input-group-label>
            <n-input type="text" v-model:value="person.firstName" />
        </n-input-group>
        <n-input-group>
            <n-input-group-label>名</n-input-group-label>
            <n-input type="text" v-model:value="person.lastName" />
        </n-input-group>
        <n-tag type="info">全名: {{ fullName }}</n-tag>
        <n-input-group>
            <n-input-group-label>目标姓名</n-input-group-label>
            <n-input type="text" v-model:value="targetName" />
        </n-input-group>
        <n-tag type="info">(姓与名之间请使用 空格 分隔)</n-tag>
        <n-space>
            <n-button @click="modifyName" size="small" type="info" ghost>修改姓名</n-button>
            <n-button @click="modifyPerson" size="small" type="success" ghost>修改人</n-button>
        </n-space>
    </n-space>
</template>

<script setup lang="ts" name="MyPerson">
    import {
        NCard,
        NButton, NSpace, NInput, NInputGroup, NInputGroupLabel, NP, NTag
    } from 'naive-ui';
    import { ref, watch, computed, reactive, defineExpose } from 'vue'

    let personData = reactive({
        name: 'Person2'
    })

    let person = reactive({
        name: '张三', age: 18, firstName: '张', lastName: '三'
    })

    let targetName = ref('李 四')

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
            const [str1, str2] = value.split(' ')
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

    defineExpose({ personData })
</script>