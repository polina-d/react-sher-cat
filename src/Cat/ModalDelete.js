import React from "react";
import './ModalDelete.css'
import OneCat from "./OneCat";


const stylesCat = {button:{
    border: '1px solid #ddd',
    borderRadius: '20px',
    background: '#fff'
}
}

export default class ModalDelete extends React.Component{
    state={
        isOpen1: false   
    }
    // constructor(props) {
    //     super(props);
    //     this.state={
    //         isOpen: false,
    //         items: [],
    //         error: null,
    //         isLoaded: false,}
    // }
    
    // componentDidMount() {
    //     fetch('https://internship.apps.robotbull.com/cats/delete_cat/{id}')
    //     .then(response =>response.json())
    //     .then(
    //     (result) => {
    //         this.setState({
    //             isLoaded: false,  
    //             items: result.items
    //         })

    //     },
    //     (error) => {
    //         this.setState({
    //             isLoaded: true,
    //             error
    //     })})
    // }

    render() {
        return (
            
            <React.Fragment>
                <button 
                style={stylesCat.button} 
                onClick={()=>this.setState({isOpen: true})}>
                    Удалить из списка
                </button>
            
                {this.state.isOpen && (<div className='modal'> 
                <div className='modal-body-delete'>
                    <h3>Подтвердить удаление</h3>
                    <p>Уверены?</p>
                    
                    <button style={stylesCat.button}  onClick={()=>this.setState({isOpen: false})}>Закрыть</button>
                </div>
                </div>)}
            </React.Fragment>
        )
    }
}

//<button onClick={() =>{<DeleteCat id={items.id}key={item.id}/>} }>Да</button>


