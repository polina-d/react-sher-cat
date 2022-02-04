import React from "react";
import DeleteCat from "./Function/DeleteCat";
import './ModalDelete.css'

const stylesCat = {button:{
    border: '1px solid #ddd',
    borderRadius: '20px',
    background: '#fff',
    marginLeft: '200px',
}}
const stylesCat1 = {button:{
    border: '1px solid #ddd',
    borderRadius: '20px',
    background: '#fff',
}}

export default class ModalDelete extends React.Component{
    state={
        done: false,
        isOpen1: false
    }
    
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
                    <p>Вы действительно хотите удалить данные?</p>
                    <button style={stylesCat1.button}  onClick={()=>this.setState({done: true})}>Да</button>
                    {this.state.done && (
                    <div> 
                        <DeleteCat id={this.props.id}/>
                    </div>)}
                    
                    <button style={stylesCat.button}  onClick={()=>this.setState({isOpen: false})}>Закрыть</button>
                </div>
                </div>)}
            </React.Fragment>
           
            
        )
    }
}