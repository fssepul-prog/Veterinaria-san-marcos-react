import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import FormularioUsuario from "../../components/FormularioUsuario";
import { usuariosIniciales } from "../../data/usuarios";

function AdminUsuarios() {
  // Estado de la lista: al abrir recupera lo guardado en localStorage (si existe)
  const [usuarios, setUsuarios] = useState(() => {
    const guardados = localStorage.getItem("usuarios");
    return guardados ? JSON.parse(guardados) : usuariosIniciales;
  });
  // Usuario que se está editando (null = formulario para crear uno nuevo)
  const [editando, setEditando] = useState(null);

  // Cada vez que cambia la lista, se guarda en localStorage
  useEffect(() => {
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  }, [usuarios]);

  // Create y Update: según si hay un usuario en edición o no
  function guardar(datos) {
    if (editando) {
      // map recorre la lista y reemplaza solo el usuario editado
      setUsuarios(usuarios.map((u) => (u.id === editando.id ? { ...u, ...datos } : u)));
      setEditando(null);
    } else {
      setUsuarios([...usuarios, { ...datos, id: Date.now() }]);
    }
  }

  // Cambia activo a inactivo y al revés
  function cambiarEstado(id) {
    setUsuarios(usuarios.map((u) => (u.id === id ? { ...u, activo: !u.activo } : u)));
  }

  // Delete: filter conserva todos los usuarios menos el del id recibido
  function eliminar(id) {
    setUsuarios(usuarios.filter((u) => u.id !== id));
  }

  return (
    <main className="container py-4">
      <h1>Gestión de usuarios</h1>

      <Row className="g-4">
        <Col xs={12} lg={7}>
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Nombre</th>
                  <th scope="col">Correo</th>
                  <th scope="col">Rol</th>
                  <th scope="col">Estado</th>
                  <th scope="col">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {usuarios.map((u) => (
                  <tr key={u.id}>
                    <td>{u.nombre}</td>
                    <td>{u.correo}</td>
                    <td>{u.rol}</td>
                    <td>{u.activo ? "Activo" : "Inactivo"}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-primary me-1"
                        aria-label={`Editar ${u.nombre}`}
                        onClick={() => setEditando(u)}
                      >
                        Editar
                      </button>
                      <button
                        className="btn btn-sm btn-secondary me-1"
                        aria-label={`Cambiar estado de ${u.nombre}`}
                        onClick={() => cambiarEstado(u.id)}
                      >
                        {u.activo ? "Desactivar" : "Activar"}
                      </button>
                      <button
                        className="btn btn-sm btn-danger"
                        aria-label={`Eliminar ${u.nombre}`}
                        onClick={() => eliminar(u.id)}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Col>

        <Col xs={12} lg={5}>
          <FormularioUsuario
            usuarioEditando={editando}
            onGuardar={guardar}
            onCancelar={() => setEditando(null)}
          />
        </Col>
      </Row>
    </main>
  );
}

export default AdminUsuarios;
