import React from "react";
import './ModalAdd.css'
import Box from "@mui/material/Box";
import UpdateCat from "../Function/UpdateCat"
import Form from "../Form";

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


export default class ModalUpdate extends React.Component{
    state={
        isSent: false,
        isOpen1: false   
    }
    
    render() {
        return (
            <React.Fragment>
                <button 
                style={stylesCatSend.button} 
                onClick={()=>this.setState({isOpen1: true})}>
                    Редактировать
                </button>

                {this.state.isOpen1 && (
                <div className='modal'> 
                <div className='modal-body'>
                    
                    <h3>Форма для редактирования: </h3>
                    <Box component="form"
                    sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
                    noValidate
                    autoComplete="off">
                    <Form items = {this.props.items}/>
                    <div><button style={stylesCatSend.button}  onClick={()=>this.setState({isSent: true})}> Сохранить</button></div>
                    {this.state.isSent && (
                    <div> 
                        <UpdateCat items={this.props.items}/>
                    </div>)}
           
                    </Box>
                    {/* <Form items = {this.props.items}/>
                    <div><button style={stylesCatSend.button}  onClick={()=>this.setState({isSent: true})}> Сохранить</button></div>
                    {this.state.isSent && (
                    <div> 
                        <UpdateCat items={this.props.items}/>
                    </div>)} */}

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
//<UpdateCat items={this.props.items}/>