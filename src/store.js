import { reactive } from 'vue'

export const store = reactive({
    test: 'test',

    // Metodi

    test()
    {
        console.log('test')
    }
})