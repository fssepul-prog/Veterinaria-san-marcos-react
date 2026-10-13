import { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import FormularioUsuario from "../../components/FormularioUsuario";
import { usuariosIniciales } from "../../data/usuarios";

function AdminUsuarios() {
  // Carga inicial: usa los usuarios guardados en localStorage o los del archivo de datos
  const [usuarios, setUsuarios] = useState(() => {
    const guardados = localStorage.getItem("usuarios");
    return guardados ? JSON.parse(guardados) : usuariosIniciales;
  });

  // Guarda la lista de usuarios en localStorage cada vez que se agrega o modifica uno
  useEffect(() => {
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  }, [usuarios]);

  // Agrega un nuevo usuario con un id generado a partir del tamaño actual de la lista
  function guardar(usuario) {
    // usuarios.length + 1 garantiza que el id sea siempre mayor al último (no se reutiliza)
    setUsuarios([...usuarios, { ...usuario, id: usuarios.length + 1 }]);
  }

  // Alterna el estado activo/inactivo del usuario con ese id
  function cambiarEstado(id) {
    setUsuarios(
      // .map() recorre la lista; solo al usuario con ese id le invierte el valor de "activo"
      usuarios.map((usuario) =>
        usuario.id === id ? { ...usuario, activo: !usuario.activo } : usuario
      )
    );
  }

  // Asigna un nuevo rol al usuario con ese id sin modificar sus otros datos
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
