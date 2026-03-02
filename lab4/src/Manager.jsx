import React from "react";
import "./App.css";
import {
  Table,
  Button,
  Container,
  FormGroup,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

const data = [
  {
    id: 1,
    nombre: "Jorge Carranza",
    empresa: "Tec",
    edad: "20",
    Pais: "Mexico",
    contacto: "jorge.carranza@tec.mx",
  },
  {
    id: 2,
    nombre: "Ramon Velez",
    empresa: "Banorte",
    edad: "35",
    Pais: "Mexico",
    contacto: "ramon.velez@banorte.com",
  },
  {
    id: 3,
    nombre: "Hugo Sanchez ",
    empresa: "Real Madrid",
    edad: "28",
    Pais: "Mexico",
    contacto: "hugo.sanchez@realmadrid.com",
  },
  {
    id: 4,
    nombre: "Rafael Marquez",
    empresa: "Barcelona",
    edad: "32",
    Pais: "Mexico",
    contacto: "rafael.marquez@barcelona.com",
  },
  {
    id: 5,
    nombre: "Carlos Alcaraz",
    empresa: "Mallorca",
    edad: "23",
    Pais: "Mexico",
    contacto: "carlos.alcaraz@mallorca.com",
  },
  {
    id: 6,
    nombre: "N. Djokovic",
    empresa: "Serbia",
    edad: "36",
    Pais: "Serbia",
    contacto: "n.djokovic@serbia.com",
  },
  {
    id: 7,
    nombre: "Sergio Perez",
    empresa: "Cadillac",
    edad: "29",
    Pais: "Mexico",
    contacto: "sergio.perez@cadillac.com",
  },
  {
    id: 8,
    nombre: "Max Verstapen",
    empresa: "Oracle Red Bull Racing",
    edad: "25",
    Pais: "Holanda",
    contacto: "max.verstapen@oracle.com",
  },
  {
    id: 9,
    nombre: "Carlos Sainz",
    empresa: "Williams Racing",
    edad: "27",
    Pais: "España",
    contacto: "carlos.sainz@williams.com",
  },
];

class Manager extends React.Component {
  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      id: "",
      nombre: "",
      empresa: "",
      edad: "",
      Pais: "",
      ontacto: "",
    },
  };
  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
    cerrarModalActualizar = () => {
      this.setState({ modalActualizar: false });
    };
  };
  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
    cerrarModalInsertar = () => {
      this.setState({ modalInsertar: false });
    };
  };

  editar = (dato) => {
    var contador = 0;
    var arreglo = this.state.data;
    arreglo.map((registro) => {
      if (dato.id === registro.id) {
        arreglo[contador].nombre = dato.nombre;
        arreglo[contador].empresa = dato.empresa;
        arreglo[contador].edad = dato.edad;
        arreglo[contador].Pais = dato.Pais;
        arreglo[contador].contacto = dato.contacto;
      }
    });
    contador++;
    this.setState({ data: arreglo, modalActualizar: false });
  };
  eliminar = (dato) => {
    var opcion = window.confirm(
      "Estás Seguro que deseas Eliminar el elemento " + dato.id,
    );
    if (opcion === true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map((registro) => {
        if (dato.id === registro.id) {
          arreglo.splice(contador, 1);
        }
      });
      contador++;
      this.setState({ data: arreglo, modalActualizar: false });
    }
  };
  insertar = () => {
    var valorNuevo = { ...this.state.form };
    valorNuevo.id = this.state.data.length + 1;
    var lista = this.state.data;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data: lista });
  };
  handleChange = (e) => {
    this.setState({
      form: { ...this.state.form, [e.target.name]: e.target.value },
    });
  };
  render() {
    return (
      <>
        <Container>
          <br />
          <Button color="success" onClick={() => this.mostrarModalInsertar()}>
            Crear
          </Button>
          <br />
          <br />
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Empresa</th>
                <th>Edad</th>
                <th>Pais</th>
                <th>Contacto</th>
                <th>Acción</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.id}</td>
                  <td>{dato.nombre}</td>
                  <td>{dato.empresa}</td>
                  <td>{dato.edad}</td>
                  <td>{dato.Pais}</td>
                  <td>{dato.contacto}</td>
                  <td>
                    <Button
                      color="primary"
                      onClick={() => this.mostrarModalActualizar(dato)}
                    >
                      Editar
                    </Button>{" "}
                    <Button color="danger" onClick={() => this.eliminar(dato)}>
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>

        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
            <div>
              <h3>Insertar nombre</h3>
            </div>
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <label>Id: </label>
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.data.length + 1}
              />
            </FormGroup>
            <FormGroup>
              <label>Nombre: </label>
              <input
                className="form-control"
                name="nombre"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>Empresa: </label>
              <input
                className="form-control"
                name="empresa"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>Edad: </label>
              <input
                className="form-control"
                name="edad"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>Pais: </label>
              <input    
                className="form-control"
                name="pais"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>Contacto: </label>
              <input
                className="form-control"
                name="contacto"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.insertar()}>
              Insertar{" "}
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => this.cerrarModalInsertar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
            <div>
              <h3>Editar Registro</h3>
            </div>
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <label> Id:</label>
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.id}
              />
            </FormGroup>
            <FormGroup>
              <label>Nombre:</label>
              <input
                className="form-control"
                name="nombre"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.nombre}
              />
            </FormGroup>
            <FormGroup>
              <label>Empresa:</label>
              <input
                className="form-control"
                name="empresa"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.empresa}
              />
            </FormGroup>
            <FormGroup>
              <label>Edad:</label>
              <input
                className="form-control"
                name="edad"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.edad}
              />
            </FormGroup>
            <FormGroup>
              <label>Pais:</label>
              <input
                className="form-control"
                name="pais"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.pais}
                
              />
            </FormGroup>
            <FormGroup>
              <label>Contacto:</label>
              <input
                className="form-control"
                name="contacto"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.contacto}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.editar(this.state.form)}
            >
              Editar
            </Button>
            <Button color="danger" onClick={() => this.cerrarModalActualizar()}>
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}

export default Manager;