import { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import FormularioUsuario from "../../components/FormularioUsuario";
import { usuariosIniciales } from "../../data/usuarios";

function AdminUsuarios() {
  const [usuarios, setUsuarios] = useState(() => {
    const guardados = localStorage.getItem("usuarios");
    return guardados ? JSON.parse(guardados) : usuariosIniciales;
  });

  useEffect(() => {
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  }, [usuarios]);

  // Create: los usuarios no se eliminan, solo se desactivan, por eso length + 1 sirve de id
  function guardar(usuario) {
    setUsuarios([...usuarios, { ...usuario, id: usuarios.length + 1 }]);
  }

  // Cambia solo el usuario con ese id: activo pasa a inactivo y al revés
  function cambiarEstado(id) {
    setUsuarios(
      usuarios.map((usuario) =>
        usuario.id === id ? { ...usuario, activo: !usuario.activo } : usuario
      )
    );
  }

  // Asignar rol: cambia solo el rol del usuario con ese id
  function cambiarRol(id, rol) {
    setUsuarios(
      usuarios.map((usuario) =>
        usuario.id === id ? { ...usuario, rol: rol } : usuario
      )
    );
  }

  return (
    <main className="container py-4">
      <h1 className="mb-4">Gestión de usuarios</h1>

      <Row className="g-4">
        <Col xs={12} lg={8}>
          <div className="table-responsive">
            <table className="table table-bordered table-hover">
              <caption>Usuarios del sistema</caption>
              <thead className="table-success">
                <tr>
                  <th scope="col">Nombre</th>
                  <th scope="col">Correo</th>
                  <th scope="col">Rol</th>
                  <th scope="col">Estado</th>
                  <th scope="col">Acción</th>
                </tr>
              </thead>
              <tbody>
                {usuarios.map((usuario) => (
                  <tr key={usuario.id}>
                    <td>{usuario.nombre}</td>
                    <td>{usuario.correo}</td>
                    <td>
                      <Form.Select
                        value={usuario.rol}
                        onChange={(evento) => cambiarRol(usuario.id, evento.target.value)}
                      >
                        <option>Administrador</option>
                        <option>Recepcionista</option>
                        <option>Dueño de mascota</option>
                      </Form.Select>
                    </td>
                    <td>{usuario.activo ? "Activo" : "Inactivo"}</td>
                    <td>
                      <button
                        className="btn btn-secondary"
                        onClick={() => cambiarEstado(usuario.id)}
                      >
                        {usuario.activo ? "Desactivar" : "Activar"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Col>

        <Col xs={12} lg={4}>
          <h2 className="h5">Nuevo usuario</h2>
          <FormularioUsuario onGuardar={guardar} />
        </Col>
      </Row>
    </main>
  );
}

export default AdminUsuarios;
