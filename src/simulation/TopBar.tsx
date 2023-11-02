import React, { useEffect, useState } from 'react';
import { useAppSelector,useAppDispatch } from '../app/hooks';
import { incrementByOne,incrementByFive,incrementByTen,incrementByTwenty } from '../features/moneyCounter/moneyCounterSlice';



export function TopBar(){
    const dispatch = useAppDispatch();

    return(
        <div>
        <button onClick={() => dispatch(incrementByOne())}>
            pay 1 TL
        </button>
        <button onClick={() => dispatch(incrementByFive())}>
            pay 5 TL
        </button>
        <button onClick={() => dispatch(incrementByTen())}>
            pay 10 TL
        </button>
        <button onClick={() => dispatch(incrementByTwenty())}>
            pay 20 TL
        </button>
    </div>
    );
}