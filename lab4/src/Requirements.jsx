import React, { useState } from "react";
import "./Requirements.css";
import {
  Table,
  Button,
  Container,
  FormGroup,
} from "reactstrap";
import RequirementModal from "./RequirementModal";

// initial list of requirements (could later come from an API)
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

function Requirements() {
  const [items, setItems] = useState(initialData);
  const [modalType, setModalType] = useState(null); // 'insert' | 'edit' | null
  const [form, setForm] = useState({ id: "", codigo: "", descripcion: "" });

  const openInsert = () => {
    setForm({ id: items.length + 1, codigo: "", descripcion: "" });
    setModalType("insert");
  };

  const openEdit = (item) => {
    setForm(item);
    setModalType("edit");
  };

  const closeModal = () => {
    setModalType(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSave = () => {
    if (modalType === "insert") {
      setItems((prev) => [...prev, { ...form, id: prev.length + 1 }]);
    } else if (modalType === "edit") {
      setItems((prev) =>
        prev.map((it) => (it.id === form.id ? { ...form } : it)),
      );
    }
    closeModal();
  };

  const handleDelete = (item) => {
    if (
      window.confirm(`¿Estás seguro que deseas eliminar el elemento ${item.id}?`)
    ) {
      setItems((prev) => prev.filter((it) => it.id !== item.id));
    }
  };

  return (
    <>
      <Container>
        <h2 className="requirements-header">Requisitos funcionales</h2>
        <Button color="success" onClick={openInsert} className="mb-3">
          + Crear requisito
        </Button>

        <Table striped hover responsive className="requirements-table">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Código</th>
              <th>Descripción</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.codigo}</td>
                <td>{item.descripcion}</td>
                <td>
                  <Button
                    color="primary"
                    size="sm"
                    onClick={() => openEdit(item)}
                    className="me-1"
                  >
                    Editar
                  </Button>
                  <Button
                    color="danger"
                    size="sm"
                    onClick={() => handleDelete(item)}
                  >
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>

      <RequirementModal
        isOpen={modalType !== null}
        toggle={closeModal}
        title={modalType === "edit" ? "Editar" : "Insertar"}
        form={form}
        onChange={handleChange}
        onSubmit={handleSave}
      />
    </>
  );
}

export default Requirements;