import React from 'react'
//import BookingCat from '../Function/BookingCat'
import DataCat from '../Function/DataCat'
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
    state={
        isBooked: false,
        isOpen1: false,
    }

    render() {
        return (
            <React.Fragment>
                <button 
                style={stylesCat1.button} 
                onClick={()=>this.setState({isOpen1: true})}>
                    Подробнее...
                </button>
            
                {this.state.isOpen1 && (
                <div className='modal'> 
                <div className='modal-body-open'>
                    <DataCat id = {this.props.id}/>

                  <button 
                  style={stylesCat.button}  
                  onClick={()=>this.setState({isOpen1: false})}>
                    Закрыть
                  </button>
                </div>
                </div>)}
            </React.Fragment>
        )}
}
