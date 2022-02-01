import React from 'react'
import CatInfo from '../Function/CatInfo'
import './ModalOpen.css'


const stylesCat = {
    button:{
    border: '1px solid #ddd',
    borderRadius: '20px',
    background: '#fff'
}
}
const stylesCat1 = {
    button:{
    border: '0px solid #ddd',
    color: '#808080',
    background: '#fff'
}
}

export default class ModalOpen extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            isOpen1: false ,
          error: null,
          isLoaded: false,
          items: [],
        }
    }
    
        componentDidMount() {
            fetch(`https://internship.apps.robotbull.com/cats/${this.props.id}`)
              .then(response => response.json())
              .then(
                (result) => {
                  this.setState({
                    isLoaded: true,
                    items: result.items
                  });
                },
                (error) => {
                  this.setState({
                    isLoaded: true,
                    error
                  })
                  
                }
              )
          }

    render() {
      
        const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Загрузка...</div>;
    } else {
        return (
          
            <React.Fragment>
                <button 
                style={stylesCat1.button} 
                onClick={()=>this.setState({isOpen1: true})}>
                    Подробнее...
                </button>
            
                {this.state.isOpen1 && (<div className='modal'> 
                <div className='modal-body-open'>
                    
                    <CatInfo id={items.id}/>       
                    <button style={stylesCat.button}  onClick={()=>this.setState({isOpen1: false})}>Закрыть</button>
                </div>
                </div>)}
            </React.Fragment>
        )}
     }
}

//<button onClick={() =>{<DeleteCat id={items.id}key={item.id}/>} }>Да</button>