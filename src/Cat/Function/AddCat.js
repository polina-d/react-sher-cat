import React from "react";
import Form from "../Form";
import Box from "@mui/material/Box";
const items = {nameCat: null, age: null, color: null, breed: {nameBreed: null }, price: null}
   
const stylesCatSend = {button:{
    border: '1px solid #ddd',
    borderRadius: '20px',
    background: '#fff',
    marginTop: '10px',
    marginBottom: '10px',
    
}
}
export default function AddCat() {
    return (
        <Box action="https://internship.apps.robotbull.com/cats/create_cat" method="post"
    component="form"
    sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
    noValidate
    autoComplete="off">
        
           <Form items = {items}/>
           <div><button style={stylesCatSend.button}> Отправить </button></div>
           </Box>
    )
    
}
