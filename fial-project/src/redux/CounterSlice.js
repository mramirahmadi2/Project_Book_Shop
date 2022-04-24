import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: 0 , basket: 0 }

function increment (state) {
  state.value += 1
}

function decrement (state) {
 
  if(state.value>0){
    state.value -= 1
  }
}
function zero (state){
  state.value = 0;
}
function BasketSum (state) {
  state.basket += 1
}
function BasketDelete (state) {
  state.basket -= 1
}


const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment,
    decrement,
    zero,
    BasketSum,
    BasketDelete
  }
})

export const {
  increment: incrementAction,
  decrement: decrementAction,
  zero: Zero
} = counterSlice.actions

export default counterSlice.reducer;