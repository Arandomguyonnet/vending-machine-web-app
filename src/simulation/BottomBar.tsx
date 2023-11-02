import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { resetState as resetMoney, selectTotalMoney } from '../features/moneyCounter/moneyCounterSlice';


export function BottomBar(){

    const dispatch = useAppDispatch();
    const totalMoney =useAppSelector(selectTotalMoney);

    return(
        <div>
            <button onClick={()=>{alert("retrieved "+totalMoney+" TL");dispatch(resetMoney)}}> Reset machine</button>
        </div>
        
    )
}