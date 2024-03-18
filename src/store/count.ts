import { nanoid } from "nanoid/non-secure";
import { defineStore } from "pinia";
import { reactive, ref } from "vue";

// 选项式的 store
export const useCountStore = defineStore('count', {
    // state 类似于 data
    // 这里的 state 是一个函数，返回一个初始状态
    state: () => ({
        // dogs 是一个数组，存储了一些狗的图片链接
        dogs:
            // 从 localStorage 中获取数据，如果没有则返回默认数据
            JSON.parse(localStorage.getItem('dogs') as string) ||
            // 默认数据
            ['https://images.dog.ceo/breeds/african/n02116738_4742.jpg'],
        randomString: nanoid()
    }),
    // getters 类似于 computed
    getters: {
        random: state => state.randomString,
    }
})