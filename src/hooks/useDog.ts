import { computed } from 'vue'
import axios from 'axios'
import { useCountStore } from '@/store/count'
import { nanoid } from 'nanoid'
import { storeToRefs } from 'pinia'

export default () => {
    let countStore = useCountStore()
    let { dogs, randomString, random } = storeToRefs(countStore)

    // computed 是一种只读的依赖，它会根据依赖的值重新计算，并返回计算结果。
    let dogCount = computed(() => dogs.value.length)

    countStore.$subscribe((mutation, state) => {
        localStorage.setItem('dogs', JSON.stringify(state.dogs))
    })

    async function getDog() {
        try {
            // 这里使用 axios 库来获取随机的狗狗图片
            let result = await axios.get('https://dog.ceo/api/breed/african/images/random')
            // 将获取到的图片地址添加到 dogs 数组中
            dogs.value.push(result.data.message)
            // 重新生成随机字符串
            randomString.value = nanoid()
            console.log('new dog url', result.data.message)
        } catch (error) {
            alert(error)
        }
    }

    return { dogs, randomString, random, getDog, dogCount }
}