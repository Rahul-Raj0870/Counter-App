import { createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
    name:'counter',
    initialState:{
        count : 0
    },
    reducers:{
        increment:(state)=>{
            state.count++
        },
        reset:(state)=>{
            return{...state,count:0}
        },
        decrement:(state)=>{
            state.count--
        },
        incrementByAmount:(state,action)=>{
            state.count += action.payload
        }

    }

})

export const {increment,reset,decrement,incrementByAmount} = counterSlice.actions
export default counterSlice.reducer