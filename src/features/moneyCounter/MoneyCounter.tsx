/**
 * Shows how much money should be paid and how much is paid. 
 * 
 */


import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {incrementByOne,incrementByFive,incrementByTen,incrementByTwenty,selectCurrentPayment,resetPayment, incrementTotalByAmount} from './moneyCounterSlice';
import { refund } from '../../simulation/services/refund';
import  './MoneyCounter.css';
import { resetItem, selectItem, selectRequiredMoney } from '../itemSelection/itemSelectionSlice';
import { rejectPayment, returnProduct } from '../../simulation/services/handlePayment';
export function MoneyCounter() {
    const currentPayment = useAppSelector(selectCurrentPayment);
    const requiredMoney = useAppSelector(selectRequiredMoney);
    const requestedItem = useAppSelector(selectItem);
    const dispatch = useAppDispatch();


    function takePayment(){
        //TODO: rewrite this function to be asyncrhon
        //TODO: rewrite this function to make an API call for returning product
        if(currentPayment >= requiredMoney && requiredMoney!=0){

            returnProduct(currentPayment,requiredMoney,requestedItem);
            dispatch(incrementTotalByAmount(requiredMoney));
            dispatch(resetPayment()); 
            dispatch(resetItem());
    
        }
        else{
            rejectPayment();
        }

    }
    return (
        <div>
            <button className= 'Red-button' onClick={() =>{refund(currentPayment);dispatch(resetPayment());dispatch(resetItem())}}>
                Cancel
            </button>
            
            <button className='Green-button' onClick={()=> takePayment()}>
                Accept
            </button>  
            <br/>
            <span>Current Amount:{currentPayment}<br/>Required Amount:{requiredMoney}</span>
            
        </div>
      );

} 