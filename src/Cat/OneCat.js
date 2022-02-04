//import IconCheckboxes from './IconCheckboxes'
import React from 'react'
import ModalOpen from './Modal/ModalOpen'
import ModalDelete from './ModalDelete'
//import Image from './Image'

const stylesCat = {
    li:{
        display: 'flex', 
        justifuContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marinBottom: '.5rem',
    },
    
    div:{ marginLeft: '40px'},
    imput:{marginRight: '1rem'},
    
}     

export default function OneCat({items}) {


    return (
      <li style={stylesCat.li}> 

        <img src= '' className='image' alt='Фото кота'/> 
        <div style={stylesCat.div}> 
        
            <p> <strong>{items.nameCat}</strong> <br/>
            
            Возраст: {items.age} (лет)<br/>
            Стоимость аренды за 1 час: {items.price}$ <br/> 
            <ModalOpen id={items.id}/>
            </p> 
            
            <p><ModalDelete id={items.id}/></p>
        </div>
      </li> 
    
    )
}

//<button onClick={() => setState({isBooked: true})}>Забронировать</button>
//<Image id={items.id}/>
//<img src={items.image} style={stylesCat.img} alt='Фото кота'/>



// {/* <imput 
//             type='checkbox' 
//             style={stylesCat.input}
//             checked={items.isBooked}
             
//             //  onChange={() => onChange(todo.id)}
//             /> */}