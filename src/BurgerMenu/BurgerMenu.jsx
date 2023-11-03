import React, { useState } from 'react'
import Mock from '../Mock'

const BurgerMenu = () => { 
    const [selectedIngredients, setSelectedIngredients] = useState([])
  const addIngredient = (ingredient) => {
    const isAdded = selectedIngredients.find(
      (item) => item.id === ingredient.id
    );
    if (isAdded) {
      setSelectedIngredients(
        selectedIngredients.map((item) => {
          if (item.id === ingredient.id) {
            return { ...item, count: item.count + 1 };
          }
          return item;
        })
      );
    } else {
      setSelectedIngredients([
        ...selectedIngredients,
        {
          ...ingredient,
          count: 1,
        },
      ]);
    }
  };
  const  removeIngredient = (ingredient) =>{
    const isAdded = selectedIngredients.find(
      (item) => item.id === ingredient.id
    );
    if(isAdded ){
      setSelectedIngredients(
        selectedIngredients.map((item) => {
          if (item.id === ingredient.id) {
            return { ...item, count: item.count > 0 ? item.count -1 : 0 };
          }
          return item;
        })
      );
    }
  }

  const totalPrice =   selectedIngredients.reduce((total , item) =>{
    return total +(item.price * item.count) 
} ,0)
    console.log(selectedIngredients)
  return (
    <div className='burger1-2'>
        {
            Mock.map((ingredient) => (
                <div key={ingredient.id}>
                    <li>
                    <span className='ing-name-lst'>{ingredient.name}</span>
                </li>
                <button className='ekle' onClick={() => addIngredient(ingredient)}
                >Ekle</button>

                <button  className='cikar' onClick={() => removeIngredient(ingredient)}
                >Cikar</button>
                </div>
                ))
        }
        <div className='burger2'>
            {totalPrice} {selectedIngredients.map((ingredient) => (
            <li key={ingredient.id}>
              {ingredient.name} x {ingredient.count}
            </li>
          ))}




        </div>
    </div>
    
    ) 
}


export default BurgerMenu