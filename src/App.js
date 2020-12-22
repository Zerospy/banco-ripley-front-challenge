import React, { Component } from 'react';
import axios from 'axios';
import { MDBContainer, MDBInputGroup, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from "mdbreact";
import ModalComponent from './ModalComponent';
import PropTypes from 'prop-types';

class App extends Component {


  constructor(props){
    super(props);
    this.handleChangeRut = this.handleChangeRut.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);


                this.state = {
                  rut : '',
                  nombre: '',
                  apellido: '',
                  fechaNac: ''
                };
}


handleChangeRut(event){
  const {value} = event.target
      this.setState({
        rut: event.target.value
      })
}
   handleSubmit(event){

      const rut = event.target;
    console.log(this.state.rut);
    event.preventDefault();
    fetch(`https://cors-anywhere.herokuapp.com/https://challenge-banco-ripley.herokuapp.com/api/${this.state.rut}`, {
        method: "GET"
    })
    .then(res=>res.json())
    .then((result)=>
    {
        console.log(result);
        console.log(result.nombre);

        this.setState({
          rut : result.rut,
          nombre: result.nombre,
          apellido: result.apellido,
          fechaNac: result.fechaNac
        })

          console.log(this.state.fechaNac);
    }
    ,
    (error) =>{
      console.log("fail");
      }
    )
} 

  render() {

    
    return (
      <div>

            <MDBContainer>

            <h1>Consulte rut</h1>
        <p>Rut de prueba 17619755-2</p>

            <MDBInputGroup
          material
          containerClassName="mb-3 mt-0"
          hint="Ingrese Rut de prueba"
          value={this.rut}
          onChange = {this.handleChangeRut}
          onClick={this.handleSubmit}
          append={
     /*        <MDBBtn
              color="secondary"
              className="m-0 px-3 py-2 z-depth-0"

              onClick={this.handleSubmit}
              
            > */
            
             <ModalComponent   nombre={this.state.nombre} apellido = {this.state.apellido} fechaNac= {this.state.fechaNac}> </ModalComponent>
/*             </MDBBtn> */

                                                               



          }
        />
        </MDBContainer>


      </div>
    );
  }
}

export default App;