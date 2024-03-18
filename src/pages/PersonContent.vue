<template>
    <h3>PersonContent</h3>
    <p>编号: {{ id }}</p>
    <p>名称: {{ name }}</p>
    <p>年龄: {{ age }}</p>
</template>

<script setup lang="ts" name="PersonContent">
    defineProps(['id', 'name', 'age'])
</script>