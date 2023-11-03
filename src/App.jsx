import React from 'react'
import './App.css'
import BurgerMenu from './BurgerMenu/BurgerMenu'

export const App = () => {
  return (
    <div className='mainDiv'>
      <div className="title">Burger App</div>
      <div className="main">
        <div className="left">
          <BurgerMenu/>
        </div>
      </div>



    </div>
  )
}

export default App