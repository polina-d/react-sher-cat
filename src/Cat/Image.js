import React, {useEffect} from "react";

export default function Image({id}) {
    const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [items, setItems] =  React.useState([]);
  useEffect(()=>{
    fetch('https://internship.apps.robotbull.com/cats/add_image/${props.id}', {
        method: 'POST',
        body: JSON.stringify({
          // title: 'foo',
          // body: 'bar',
          // userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        
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
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return(
        <div>
            <img className="image" src={items} alt='Фото кота'/>
        </div>
        


    )}
}