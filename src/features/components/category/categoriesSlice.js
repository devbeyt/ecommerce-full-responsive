import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


export const fetchCategories = createAsyncThunk('categories/fetchCategories', async function(){
    const request = await fetch(`https://api.escuelajs.co/api/v1/categories`);
    const data = request.json()
    return data;
})


const initialState = {
    entities:[],
    status:'idle',
    error:null,
}

const categoriesSlice = createSlice({
    name:'categories',
    initialState,
    reducers:{},
    extraReducers:{
        [fetchCategories.pending]:(state,action)=>{
            state.status = 'loading';
            state.error = null;
        },
        [fetchCategories.fulfilled]:(state,action)=>{
            state.status = 'resolved'
            state.entities = action.payload;
        },
        [fetchCategories.rejected]:(state,action)=>{
            state.status = 'failed'
            state.error = action.payload.error.message;
        }
    }
})

export const selectAllCategories = state=>state.categories.entities
export default categoriesSlice.reducer;
