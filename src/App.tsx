import React from 'react'
import { MoneyCounter } from './features/moneyCounter/MoneyCounter'
import { TopBar } from './simulation/TopBar'
import './App.css'
import { VendingMachine } from './vendingMachine/VendingMachine'
import { BottomBar } from './simulation/BottomBar'

//TODO:add timer.
//TODO:add cooling system
//TODO add scam protection
//TODO add energy saving.

//TODO: redo parts of the code to make it compatible with a fake API


function App() {
  return (
    <div className="App">
      <div className='Top-bar'><TopBar /></div>
      <div><VendingMachine/></div>
      <div className='Bottom-bar'><BottomBar /></div>
    </div>
  )
}

export default App
