
CREATE TABLE workItem
( id SERIAL PRIMARY KEY,
code VARCHAR(255) NOT NULL,
num INT,
description VARCHAR(255),
parent_id INT,
CONSTRAINT parent_fk FOREIGN KEY (parent_id) REFERENCES workItem (id));


INSERT INTO workItem (code, num, description, parent_id) VALUES
('EP', 1, 'Generar un módulo de generación de tareas pendientes con filtros y búsqueda',null);
INSERT INTO workItem (code, num, description, parent_id) VALUES
('HU', 1, 'Yo como usuario quiero poder generar requerimientos adicionales a los proporcionados por la IA',1);
INSERT INTO workItem (code, num, description, parent_id) VALUES
('T', 1, 'Agregar el botón de + a la pantalla de requerimientos para generar un nuevo requerimiento',2);