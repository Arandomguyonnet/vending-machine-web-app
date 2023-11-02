/**
 * Holds currentPayment and total Money
 * 
 * 
 * 
 */



import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

export interface MoneyCounterState {
    currentPayment: number;
    totalMoney:number;//money collected since last reset
    status: 'idle' | 'loading' | 'failed';//currently not used

  }
  
  const initialState: MoneyCounterState = {
    currentPayment: 0,
    totalMoney:0,
    status: 'idle',
  };
  

  export const moneyCounterSlice = createSlice({
    name: 'moneyCounter',
    initialState,
    reducers: {
      incrementByOne:(state) =>{
        state.currentPayment += 1;
      },
      incrementByFive:(state) =>{
        state.currentPayment += 5;
      },
      incrementByTen:(state) =>{
        state.currentPayment += 10;
      },
      incrementByTwenty:(state) =>{
        state.currentPayment += 20;
      },
      resetPayment:(state)=>{
        state.currentPayment=0;

      },

      incrementTotalByAmount: (state, action: PayloadAction<number>) => {
        state.totalMoney += action.payload;
      },
      resetState:(state) =>{//TODO:reset function needs to be rewritten
        state.totalMoney=0; 
        state.currentPayment=0;
        
      }

    },

  });
  
  export const { incrementByOne,incrementByFive,incrementByTen,incrementByTwenty,resetPayment,incrementTotalByAmount,resetState} = moneyCounterSlice.actions;
  
 
  export const selectCurrentPayment = (state: RootState) => state.moneyCounter.currentPayment;
  export const selectTotalMoney =(state:RootState) => state.moneyCounter.totalMoney;

  export default moneyCounterSlice.reducer;
  