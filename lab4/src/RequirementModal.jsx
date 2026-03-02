import React from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Button,
} from "reactstrap";

/**
 * Reusable modal for creating or editing a requirement.
 *
 * Props:
 *  - isOpen: whether the modal is visible
 *  - toggle: callback to hide the modal
 *  - title: header/title text (e.g. "Insertar" or "Editar")
 *  - form: object with { id, codigo, descripcion }
 *  - onChange: input change handler
 *  - onSubmit: callback invoked when primary button is clicked
 */
const RequirementModal = ({
  isOpen,
  toggle,
  title,
  form,
  onChange,
  onSubmit,
}) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle} centered>
      <ModalHeader toggle={toggle}>{title}</ModalHeader>
      <ModalBody>
        <FormGroup>
          <label>Id:</label>
          <input
            className="form-control"
            readOnly
            type="text"
            value={form.id || ""}
          />
        </FormGroup>
        <FormGroup>
          <label>Código:</label>
          <input
            className="form-control"
            name="codigo"
            type="text"
            value={form.codigo}
            onChange={onChange}
          />
        </FormGroup>
        <FormGroup>
          <label>Descripción:</label>
          <input
            className="form-control"
            name="descripcion"
            type="text"
            value={form.descripcion}
            onChange={onChange}
          />
        </FormGroup>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={onSubmit}>
          {title}
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancelar
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default RequirementModal;
