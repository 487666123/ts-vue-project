// 创建一个路由器, 并暴漏出去
import { createRouter, createWebHistory } from "vue-router"

import Person from "@/pages/Person.vue"
import Person2 from "@/pages/Person2.vue"
import Person3 from "@/pages/Person3.vue"
import Person4 from "@/pages/Person4.vue"
import PersonContent from "@/pages/PersonContent.vue"

const router = createRouter({
    // 路由器的工作模式
    history: createWebHistory(),
    // 每一个路由规则
    routes: [
        {
            name: 'home',
            path: '/person',
            component: Person
        },
        {
            name: 'person2',
            path: '/person2',
            component: Person2
        },
        {
            name: 'person3',
            path: '/person3',
            component: Person3
        },
        {
            name: 'person4',
            path: '/person4',
            component: Person4,
            children: [
                {
                    name: 'personContent',
                    path: 'content',
                    component: PersonContent,
                    // 使用 props 接收
                    props(route) {
                        return route.query
                    }
                }
            ]
        },
        {
            path: '/',
            redirect: '/person'
        }
    ]
})

// 暴露出去
export default router