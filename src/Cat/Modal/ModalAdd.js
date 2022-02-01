import React from "react";
import Form from "../Form";
import './ModalAdd.css'

const stylesCatSend = {button:{
    border: '1px solid #ddd',
    borderRadius: '20px',
    background: '#fff',
    marginTop: '10px',
    marginBottom: '10px',  
}}
const stylesCatClose = {button:{
    border: '1px solid #ddd',
    borderRadius: '20px',
    background: '#fff',
    marginTop: '10px',
    marginBottom: '10px',  
}}

export default class ModalAdd extends React.Component{
    state={
        isOpen1: false   
    }
    
    render() {
        return (
            <React.Fragment>
                <button 
                style={stylesCatSend.button} 
                onClick={()=>this.setState({isOpen1: true})}>
                    Добавить кота
                </button>

                {this.state.isOpen1 && (
                <div className='modal'> 
                <div className='modal-body'>
                    
                    <h3>Форма для добавления: </h3>
                    <Form/>
                    <div>
                        <button 
                        style={stylesCatClose.button}  
                        onClick={()=>this.setState({isOpen1: false})}>
                            Закрыть
                        </button>
                    </div>
                </div>
                </div>)}

            </React.Fragment>
        )
    }
}
