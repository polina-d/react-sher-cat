import React, {useEffect} from 'react'

export default function Data(props) {
  const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [items, setItems] =  React.useState([]);

    useEffect(()=>{
      fetch(`https://internship.apps.robotbull.com/cats/${props.id}`)
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
    return <div>Загрузка...</div>;
  } 
  else {
    return(
      <React.Fragment>
        <h3>Вся доступная информация:</h3>
        <div>
            Имя: <strong>{items.nameCat}</strong> <br/>
            Возраст: {items.age} (лет)<br/>
            Цвет: {items.color}<br/>
            Стоимость аренды за 1 час: {items.price}$<br/>
        </div>  
      </React.Fragment>
    )}
    
}

//Порода: {items.breed.nameBreed}<br/>