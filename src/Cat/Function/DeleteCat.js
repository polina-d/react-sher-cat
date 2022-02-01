export default function DeleteCat(props) {
    fetch(`https://internship.apps.robotbull.com/cats/delete_cat/${props.id}`,
       {method: 'DELETE'}) 
}