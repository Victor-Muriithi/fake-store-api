import { createSlice } from '@reduxjs/toolkit'

const categorySlice = createSlice({
    name: 'category',
    initialState: [],
    reducers: {
        addProductsCategory: (state, { payload }) => {
            return state = payload
        }, deleteCatProduct: (state) => {
            return state = [];
        }
    }
})

export const { addProductsCategory, deleteCatProduct } = categorySlice.actions;
export default categorySlice.reducer;