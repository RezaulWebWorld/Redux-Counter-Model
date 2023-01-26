import {createSlice} from "@reduxjs/toolkit";

export  const sliceCounter=createSlice({
    name:"count",
    initialState:{
        value:0
    },
    reducers:{
        increment:(state)=>{
            state.value=state.value+1
        },
        decreament:(state)=>{
            state.value=state.value-1
        },
        setInput:(state,action)=>{
            state.value=action.payload
        }
    }

})

export let {increment,decreament,setInput}=sliceCounter.actions;
export default sliceCounter.reducer;