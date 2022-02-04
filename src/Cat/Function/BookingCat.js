import React from "react";


export default function BookingCat(props) {
    fetch(`https://internship.apps.robotbull.com/cats/book_cat/${props.id}`, {method: 'post'}) 
}