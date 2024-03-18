<template>
    <n-layout has-sider position="absolute">
        <n-layout-sider ref="siderRef" bordered>
            <n-menu :options="menuOptions" @update:value="handleUpdateValue" />
        </n-layout-sider>
        <n-layout-content ref="contentRef" content-style="padding: 20px;">
            <RouterView />
        </n-layout-content>
    </n-layout>
</template>

<script setup lang="ts" name="App">
    import { NLayout, NLayoutSider, NLayoutContent, NSpace, NIcon, NMenu, type MenuOption } from 'naive-ui'
    import { RouterView, RouterLink } from 'vue-router'
    import { type Component, h } from 'vue';
    import {
        BookOutline as BookIcon,
        PersonOutline as PersonIcon,
        WineOutline as WineIcon,
        HomeOutline as HomeIcon
    } from '@vicons/ionicons5'

    function renderIcon(icon: Component) {
        return () => h(NIcon, null, { default: () => h(icon) })
    }

    let menuOptions: MenuOption[] = [
        {
            icon: renderIcon(HomeIcon),
            label: () =>
                h(
                    RouterLink,
                    { to: { name: 'home' } },
                    { default: () => '首页' }
                ),
            key: 'home',
        },
        {
            key: 'divider-1',
            type: 'divider',
            props: {
                style: {
                    marginLeft: '32px'
                }
            }
        },
        {
            icon: renderIcon(BookIcon),
            label: () =>
                h(
                    RouterLink,
                    { to: { name: 'person2' } },
                    { default: () => 'Person2' }
                ),
            key: 'person2',
        },
        {
            icon: renderIcon(BookIcon),
            label: () =>
                h(
                    RouterLink,
                    { to: { name: 'person3' } },
                    { default: () => 'Person3' }
                ),
            key: 'person3'
        },
        {
            icon: renderIcon(BookIcon),
            label: () =>
                h(
                    RouterLink,
                    { to: { name: 'person4' } },
                    { default: () => 'Person4' }
                ),
            key: 'person4'
        }
    ]

    function handleUpdateValue(value: string) {
        console.log('key: ', value)
    }
</script>