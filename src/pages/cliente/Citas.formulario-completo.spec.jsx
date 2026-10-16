import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Citas from "./Citas";
import { servicios } from "../../data/servicios";

beforeEach(() => {
  localStorage.clear();
});

describe("Citas - formulario", () => {
  it("envía el formulario sin errores al completar los campos obligatorios", async () => {
    const usuario = userEvent.setup();
    render(<MemoryRouter><Citas /></MemoryRouter>);
    await usuario.type(screen.getByLabelText(/nombre completo/i), "Juan Pérez");
    await usuario.type(screen.getByLabelText(/correo electrónico/i), "juan@ejemplo.com");
    await usuario.type(screen.getByLabelText(/teléfono/i), "+56912345678");
    await usuario.type(screen.getByLabelText(/nombre de la mascota/i), "Firulais");
    await usuario.selectOptions(screen.getByLabelText(/especie/i), "Perro");
    await usuario.selectOptions(screen.getByLabelText(/servicio solicitado/i), servicios[0].nombre);
    await usuario.click(screen.getByRole("button", { name: /enviar solicitud/i }));
    expect(screen.getByText(/solicitud enviada/i)).toBeInTheDocument();
    const citas = JSON.parse(localStorage.getItem("citas"));
    expect(citas[citas.length - 1].mascota).toBe("Firulais");
  });
});
