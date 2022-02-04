import React, {useEffect} from 'react'
import ListCat from './Cat/ListCat'
import ModalAdd from './Cat/Modal/ModalAdd'
import Loaders from './Cat/Loaders'

export default function App() {
  const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [items, setItems] =  React.useState([]);


    useEffect(()=>{
      fetch(`https://internship.apps.robotbull.com/cats/get/not_booked_cats`)
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

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  }
  else if (!isLoaded) {
    return <Loaders/>;
  } 
  else {
    return (
      <div className='wrapper'>
        <h3>Список доступных котиков: </h3>
        <ModalAdd/>

        {items.length ? (
        <ListCat items = {items}/>):(
        <p>Все коты из списка удалены</p>)}
      </div>
    )  
}
}