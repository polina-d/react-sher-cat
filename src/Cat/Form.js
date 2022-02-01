import React, {useEffect} from "react";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const colors = [
    {value: 'black', label: 'Черный'},
    {value: 'gray', label: 'Серый'},
    {value: 'orange', label: 'Рыжий'},
    {value: 'white', label: 'Белый'},
    {value: 'brown', label: 'Коричневый'},
    {value: 'colored', label: 'Цветной'},
  ];

  const stylesCatSend = {button:{
    border: '1px solid #ddd',
    borderRadius: '20px',
    background: '#fff',
    marginTop: '10px',
    marginBottom: '10px',
    
}
}

export default function Form() {

  const [breede, setBreede] = React.useState([]);
  useEffect(()=>{
    fetch('https://internship.apps.robotbull.com/cats/get/get_all_breeds')
    .then(response =>response.json())
    .then(breede =>{setBreede(breede)})
  }, [])

  const [color, setColor] = React.useState("");
  const handleChangeColor = (event) => {
    setColor(event.target.value);
  };
  const [breed, setBreed] = React.useState("");
  const handleChangeBreed = (event) => {
    setBreed(event.target.value);
  };
  
  return (
    <Box action="https://internship.apps.robotbull.com/cats/create_cat" method="post"
    component="form"
    sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
    noValidate
    autoComplete="off">

      <TextField 
        required 
        id="name-cat-form" 
        label="Имя котика" 
        for="nameCat"
        name="nameCat"/>
        
      <TextField 
        required 
        id="age-cat-form" 
        label="Возраст" 
        for="age"
        name="age"/>
        
      <TextField
        id="color-cat-form" 
        select
        label="Цвет"
        for="color"
        name="color"
        value={color}
        onChange={handleChangeColor}
      >
        {colors.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <TextField
          id="breed-cat-form"
          select
          label="Порода"
          for="nameBreed"
          name="nameBreed"
          value={breed}
          onChange={handleChangeBreed}  
        >
          {breede.map((option) => (
            <MenuItem key={option.breedID} value={option.breedID}>
              {option.nameBreed}
            </MenuItem>
          ))}
      </TextField>

        <TextField 
          required 
          id="price-cat-form" 
          label="Стоимость за час" 
          for="price"
          name="price"/>  

        

        <div><button style={stylesCatSend.button}> Отправить </button></div>
    </Box>
  )
}
