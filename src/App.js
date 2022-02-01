import React, {useEffect} from 'react'
import ListCat from './Cat/ListCat'
import Context from './context'
import ModalAdd from './Cat/Modal/ModalAdd'
import Loaders from './Cat/Loaders'

// const stylesCat = {
//   button:{
//       border: '1px solid #ddd',
//       borderRadius: '20px',
//       background: '#fff',
//       marginTop: '10px',
//       marginBottom: '10px',
//   }
// }   

export default function App() {
  
  const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [items, setItems] =  React.useState([]);


    useEffect(()=>{
      fetch('https://internship.apps.robotbull.com/cats/get/not_booked_cats')
      .then(response =>response.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        })      
    }, [])

  function DeleteCat(id){
    return(
      fetch('https://internship.apps.robotbull.com/cats/delete_cat/${id}',
      {method: 'DELETE',
      credentials: 'include',})
      //setItems(items.filter(items => items.id !== id))
    ) 
  
  }

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <Loaders/>;
  } else {
  return (
  <Context.Provider value={{DeleteCat}}>
    <div className='wrapper'>
      <h3>Список доступных котиков: </h3>
      <ModalAdd/>

      {items.length ? (
      <ListCat items = {items}/>):(
      <p>Все коты из списка удалены</p>)}
    </div>
    
  </Context.Provider> 
  )  
}
}