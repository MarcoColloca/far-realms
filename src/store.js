import { reactive } from 'vue'

export const store = reactive({
    test: 'test',
    notFound: false,

    /* Metodi */
    test()
    {
        console.log('test')
    }
})