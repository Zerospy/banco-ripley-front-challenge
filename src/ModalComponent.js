import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import PropTypes from 'prop-types';

class ModalComponent extends Component {
state = {
  modal: false
}

toggle = () => {
  this.setState({
    modal: !this.state.modal
  });
}

render() {

    let nombre = this.props.nombre;
    let apellido = this.props.apellido;
    let fechaNac = this.props.fechaNac; 
  return (
      
    <MDBContainer>
      <MDBBtn onClick={this.toggle}          color="secondary"
             > Consultar </MDBBtn>
      <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
        <MDBModalHeader toggle={this.toggle}>Consulta de Rut Challenge Banco Ripley</MDBModalHeader>
        <MDBModalBody>
        <p className="parrafo">  Nombre: {nombre}  </p>
        <p className="parrafo"> Apellido: {apellido} </p> 
        <p className="parrafo">Fecha Nacimiento: {fechaNac} </p> 

        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="secondary" onClick={this.toggle}>Cerrar</MDBBtn>
          
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
    );
  }
}


ModalComponent.propTypes = {
    nombre: PropTypes.string,
    apellido: PropTypes.string,
    fechaNac: PropTypes.string
 
 
 }

export default ModalComponent;