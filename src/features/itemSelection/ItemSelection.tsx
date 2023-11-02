/**
 * Selecting an item from the machine is handled here
 * 
 */



//TODO: add a display of what item is selected

import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { requestCoke, requestSoda, requestWater, selectItem, selectRequiredMoney } from './itemSelectionSlice';
import './itemSelection.css';
import water from './water.jpg';
import coke from './coke.jpg';
import soda from './soda.jpg'; 

export function ItemSelection(){
    const requiredMoney = useAppSelector(selectRequiredMoney);
    const requestedItem = useAppSelector(selectItem);
    const dispatch = useAppDispatch();
    return(
        <div>
            <button onClick={()=> dispatch(requestWater())}>
                <img className= "itemSelectBox" src={water} alt ='Water' /> 
            </button>   
   
            <button onClick={()=> dispatch(requestCoke())}>
                <img className= "itemSelectBox" src={coke} alt ='Coke' /> 
            </button>
            <button onClick={()=> dispatch(requestSoda())}>
                <img className= "itemSelectBox" src={soda} alt ='Soda' /> 
            </button>
        </div>
        
    )
}