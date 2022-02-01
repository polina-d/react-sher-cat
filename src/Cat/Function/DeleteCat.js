import React from "react"

export default function DeleteCat(props) {
    return(
        fetch(`https://internship.apps.robotbull.com/cats/delete_cat/${props.items.id}`,
       {method: 'DELETE',
       headers: 'id' })
    )
}