import React, { useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
// import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
// import Image from "./Function/Image";

const colors = [
  { value: "black", label: "Черный" },
  { value: "gray", label: "Серый" },
  { value: "orange", label: "Рыжий" },
  { value: "white", label: "Белый" },
  { value: "brown", label: "Коричневый" },
  { value: "colored", label: "Цветной" },
];

export default function Form(props) {
  const [breede, setBreede] = React.useState([]);
  useEffect(() => {
    fetch("https://internship.apps.robotbull.com/cats/get/get_all_breeds")
      .then((response) => response.json())
      .then((breede) => {
        setBreede(breede);
      });
  }, []);

  const [color, setColor] = React.useState(`${props.items.color}`);
  const handleChangeColor = (event) => {
    setColor(event.target.value);
  };
  const [breed, setBreed] = React.useState(`${props.items.breed.nameBreed}`);
  const handleChangeBreed = (event) => {
    setBreed(event.target.value);
  };

  return (
    <div>
      <TextField
        required
        id="name-cat-form"
        label="Имя котика"
        for="nameCat"
        name="nameCat"
        defaultValue={props.items.nameCat}
      />

      <TextField
        required
        id="age-cat-form"
        label="Возраст"
        for="age"
        name="age"
        defaultValue={props.items.age}
      />

      <TextField
        id="color-cat-form"
        select
        label="Цвет"
        for="color"
        name="color"
        value={color}
        onChange={handleChangeColor}
        defaultValue={props.items.color}
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
        name="price"
        defaultValue={props.items.price}
      />

      {/* <TextField
          required 
          type= 'file'
          id="image-cat-form" 
          for="image"
          name="image"      
            >
              <Image id={props.items.id}/>
        </TextField>  */}
    </div>
  );
}
