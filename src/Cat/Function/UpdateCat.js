export default function UpdataCat(props) {
  
    return (
      fetch(`https://internship.apps.robotbull.com/cats/update_cat/${props.items.id}`, {
        method: 'PUT',
        body: JSON.stringify({
          id: `${props.items.id}`,
          nameCat: `${props.items.nameCat}`,
          price: `${props.items.price}`,
          color: `${props.items.color}`,
          nameBreed: `${props.items.nameBreed}`,
        }),
        // headers: {
        //   'Content-type': 'application/json; charset=UTF-8',
        // },
      })
      .then((response) => response.json())
      
    ) 
}




