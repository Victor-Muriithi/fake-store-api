import { configureStore } from '@reduxjs/toolkit'
import  productsreducer  from './slices/productsReducer'
import categoryReducer from './slices/categoryReducer'

const store= configureStore({
    reducer: {
        products: productsreducer,
        category: categoryReducer
    }
})

export default store;