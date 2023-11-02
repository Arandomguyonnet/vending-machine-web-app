/**
 * Holds the state of chosen item and its price. Items are hardcoded for simplicitys sake.
 * 
 */



import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';


export interface ItemSelectionState {//TODO: add a maximum number of each item
    status: 'idle' | 'loading' | 'failed';
    requiredMoney:number;
    requestedItem: null|'water'|'coke'|'soda'
  }
  
  const initialState: ItemSelectionState = {
    requiredMoney:0,
    requestedItem:null,
    status: 'idle',
  };
  

  export const itemSelectionSlice = createSlice({
    name: 'itemSelection',
    initialState,
    reducers: {
      resetItem:(state)=>{
        state.requestedItem=null;
        state.requiredMoney=0;
        
      },
      requestWater:(state)=>{
        state.requestedItem='water';
        state.requiredMoney=25
      }, 
      requestCoke:(state)=>{
        state.requestedItem='coke';
        state.requiredMoney=35
      }, 
      requestSoda:(state)=>{
        state.requestedItem='soda';
        state.requiredMoney=45
      },


    },

  });
  
  export const {resetItem,requestCoke,requestSoda,requestWater} = itemSelectionSlice.actions;
  
 
  //export const selectCount = (state: RootState) => state.moneyCounter.value;
  export const selectRequiredMoney = (state: RootState) => state.itemSelection.requiredMoney;
  export const selectItem = (state: RootState) => state.itemSelection.requestedItem;


  export default itemSelectionSlice.reducer;
  