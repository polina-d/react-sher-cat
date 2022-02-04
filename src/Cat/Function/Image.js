export default function Image(props) {
    fetch(`https://internship.apps.robotbull.com/cats/add_image/${props.id}`, {method: 'POST'})
    .then((response) => response.json())
    .then((json) => console.log(json));
  }
