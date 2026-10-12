// src/pages/cliente/Citas.spec.jsx
// Pruebas de formulario: verifican la validación de campos obligatorios
// y el flujo exitoso de envío de solicitud de cita.
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Citas from "./Citas";
// Se importan los servicios reales para seleccionar el primero de la lista en el formulario.
import { servicios } from "../../data/servicios";

// Se limpia localStorage antes de cada prueba para evitar que datos previos afecten el resultado.
beforeEach(() => {
  localStorage.clear();
});

describe("Citas - formulario", () => {

  it("muestra errores al enviar el formulario vacío", async () => {
    const usuario = userEvent.setup();
    render(<MemoryRouter><Citas /></MemoryRouter>);

    // Se hace clic en "Enviar solicitud" sin completar ningún campo.
    // Esto activa la validación del componente que muestra mensajes de error por campo.
    await usuario.click(screen.getByRole("button", { name: /enviar solicitud/i }));

    // Se verifica que aparezca un mensaje de error por cada campo obligatorio vacío.
    expect(screen.getByText("El nombre es obligatorio.")).toBeInTheDocument();
    expect(screen.getByText("El correo es obligatorio.")).toBeInTheDocument();
    expect(screen.getByText("El teléfono es obligatorio.")).toBeInTheDocument();
    expect(screen.getByText("El nombre de la mascota es obligatorio.")).toBeInTheDocument();
  });

  it("envía el formulario sin errores al completar los campos obligatorios", async () => {
    const usuario = userEvent.setup();
    render(<MemoryRouter><Citas /></MemoryRouter>);

    // Se rellena cada campo obligatorio del formulario usando sus labels como selector.
    // getByLabelText busca el input asociado al <label> con ese texto.
    await usuario.type(screen.getByLabelText(/nombre completo/i), "Juan Pérez");
    await usuario.type(screen.getByLabelText(/correo electrónico/i), "juan@ejemplo.com");
    await usuario.type(screen.getByLabelText(/teléfono/i), "+56912345678");
    await usuario.type(screen.getByLabelText(/nombre de la mascota/i), "Firulais");

    // selectOptions simula elegir una opción de un <select> por su valor visible.
    await usuario.selectOptions(screen.getByLabelText(/especie/i), "Perro");
    await usuario.selectOptions(screen.getByLabelText(/servicio solicitado/i), servicios[0].nombre);

    // Se envía el formulario con todos los campos válidos.
    await usuario.click(screen.getByRole("button", { name: /enviar solicitud/i }));

    // Tras un envío exitoso el componente muestra un mensaje de confirmación.
    expect(screen.getByText(/solicitud enviada/i)).toBeInTheDocument();
  });
});
