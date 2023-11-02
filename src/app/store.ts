import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import moneyCounterReducer from '../features/moneyCounter/moneyCounterSlice';
import itemSelectionReducer from '../features/itemSelection/itemSelectionSlice';



export const store = configureStore({
  reducer: {
    moneyCounter:moneyCounterReducer,
    itemSelection:itemSelectionReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
