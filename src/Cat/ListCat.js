import React from 'react'
import OneCat from './OneCat'


const stylesList = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
    }
}

export default function ListCat(props) {
    return(
    <ul style = {stylesList.ul}>
        {props.items.map(items =>{
            return <OneCat items={items} key={items.id} />
        })}
    </ul>
    )
}
