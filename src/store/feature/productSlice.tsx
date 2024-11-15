import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../models/IProduct";


interface IProductState{
    productList: IProduct[],
    isProductListLoading: boolean,
    searchParametre:string
}
const initialProductState: IProductState ={
    productList: [],
    isProductListLoading: false,
    searchParametre:''
}

export const fetchGethAllProducts = createAsyncThunk(
    'product/fetchGethAllProducts',
    async()=>{
        return await fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data=>data);
    }
);

export const fetchFindProducts = createAsyncThunk(
    'product/fetchGethAllProducts',
    async(search:string)=>{
        return await fetch('https://dummyjson.com/products/search?q='+search)
        .then(res => res.json())
        .then(data=>data);
    }
);

const productSlice = createSlice({
    name:'product',
    initialState: initialProductState,
    reducers:{

    },
    extraReducers:(build) => {
        build.addCase(fetchGethAllProducts.pending,(state)=>{
            state.isProductListLoading = true;
        });

        build.addCase(fetchGethAllProducts.fulfilled,(state,action)=>{
            state.isProductListLoading = false ;
            state.productList = action.payload.products;
        });
    }
})

export default productSlice.reducer;