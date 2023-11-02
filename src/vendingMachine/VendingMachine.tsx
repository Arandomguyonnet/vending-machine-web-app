/**
 * Where the main code of the Vending machine webapp runs
 */


import React, { useEffect, useState } from 'react';
import { MoneyCounter } from '../features/moneyCounter/MoneyCounter';
import { ItemSelection } from '../features/itemSelection/ItemSelection';
import './VendingMachine.css';

//TODO: fix styling.
export function VendingMachine(){

     return (
        <div className='Vending-machine'>
            <ItemSelection />
            <MoneyCounter />  
        </div>
     );
}