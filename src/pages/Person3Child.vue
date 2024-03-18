<template>
    <div>
        <h3>子组件 {{ $attrs }}</h3>
    </div>
</template>

<script setup lang="ts" name="Person3Child">
    import emitter from '@/utils/emitter';
    import { onUnmounted } from 'vue';

    emitter.on('person3-child-event', () => {
        console.log('子组件接收到了父组件的事件');
    })

    onUnmounted(() => {
        emitter.off('person3-child-event');
    })
</script>