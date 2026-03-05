import React, { useState } from "react";
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
  Card,
  CardHeader,
  CardBody,
} from "reactstrap";

const initialData = [
  {
    id: 1,
    codigo: "RF-001",
    descripcion:
      "El sistema debe permitir a los usuarios registrarse con su correo electrónico y contraseña.",
  },
  {
    id: 2,
    codigo: "RF-002",
    descripcion:
      "El sistema debe permitir a los usuarios iniciar sesión con su correo electrónico y contraseña.",
  },
  {
    id: 3,
    codigo: "RF-003",
    descripcion: "El sistema debe permitir a los usuarios recuperar su contraseña.",
  },
  {
    id: 4,
    codigo: "RF-004",
    descripcion:
      "El sistema debe permitir a los usuarios registrarse con su correo electrónico y contraseña.",
  },
  {
    id: 5,
    codigo: "RF-005",
    descripcion:
      "El sistema debe permitir a los usuarios iniciar sesión con su correo electrónico y contraseña.",
  },
];

export default function Requirements() {
  const [data, setData] = useState(initialData);
  const [modalActualizar, setModalActualizar] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);
  const [form, setForm] = useState({ id: "", codigo: "", descripcion: "" });

  const mostrarModalActualizar = (dato) => {
    setForm(dato);
    setModalActualizar(true);
  };
  const cerrarModalActualizar = () => {
    setModalActualizar(false);
  };
  const mostrarModalInsertar = () => {
    setForm({ id: "", codigo: "", descripcion: "" });
    setModalInsertar(true);
  };
  const cerrarModalInsertar = () => {
    setModalInsertar(false);
  };

  const editar = (dato) => {
    setData((prev) =>
      prev.map((registro) =>
        registro.id === dato.id ? { ...registro, ...dato } : registro,
      ),
    );
    setModalActualizar(false);
  };

  const eliminar = (dato) => {
    if (
      window.confirm(
        `¿Estás seguro que deseas eliminar el elemento ${dato.id}?`,
      )
    ) {
      setData((prev) => prev.filter((registro) => registro.id !== dato.id));
      setModalActualizar(false);
    }
  };

  const insertar = () => {
    const valorNuevo = { ...form, id: data.length + 1 };
    setData((prev) => [...prev, valorNuevo]);
    setModalInsertar(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  return (
    <Container className="mt-4 requirements-normal">
      <Card>
        <CardHeader className="bg-primary text-white">
          <h3>Requisitos</h3>
        </CardHeader>
        <CardBody>
          <Button color="success" onClick={mostrarModalInsertar}>
            Crear nuevo requisito
          </Button>

          <div className="table-responsive mt-3">
            <Table striped hover bordered>
              <thead className="table-dark">
                <tr>
                  <th>ID</th>
                  <th>Código</th>
                  <th>Descripción</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {data.map((dato) => (
                  <tr key={dato.id}>
                    <td>{dato.id}</td>
                    <td>{dato.codigo}</td>
                    <td>{dato.descripcion}</td>
                    <td>
                      <Button
                        size="sm"
                        color="primary"
                        onClick={() => mostrarModalActualizar(dato)}
                      >
                        Editar
                      </Button>{" "}
                      <Button
                        size="sm"
                        color="danger"
                        onClick={() => eliminar(dato)}
                      >
                        Eliminar
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </CardBody>
      </Card>

      <Modal isOpen={modalInsertar} toggle={cerrarModalInsertar}>
        <ModalHeader toggle={cerrarModalInsertar}>Nuevo requisito</ModalHeader>
        <ModalBody>
          <FormGroup>
            <label>ID</label>
            <input
              className="form-control"
              readOnly
              type="text"
              value={data.length + 1}
            />
          </FormGroup>
          <FormGroup>
            <label>Código</label>
            <input
              className="form-control"
              name="codigo"
              type="text"
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <label>Descripción</label>
            <input
              className="form-control"
              name="descripcion"
              type="text"
              onChange={handleChange}
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={insertar}>
            Insertar
          </Button>{" "}
          <Button color="secondary" onClick={cerrarModalInsertar}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={modalActualizar} toggle={cerrarModalActualizar}>
        <ModalHeader toggle={cerrarModalActualizar}>
          Editar requisito
        </ModalHeader>
        <ModalBody>
          <FormGroup>
            <label>ID</label>
            <input
              className="form-control"
              readOnly
              type="text"
              value={form.id}
            />
          </FormGroup>
          <FormGroup>
            <label>Código</label>
            <input
              className="form-control"
              name="codigo"
              type="text"
              value={form.codigo}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <label>Descripción</label>
            <input
              className="form-control"
              name="descripcion"
              type="text"
              value={form.descripcion}
              onChange={handleChange}
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => editar(form)}>
            Guardar
          </Button>{" "}
          <Button color="secondary" onClick={cerrarModalActualizar}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
}
