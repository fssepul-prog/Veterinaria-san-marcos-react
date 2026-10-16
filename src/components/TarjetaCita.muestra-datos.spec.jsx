import { render, screen } from "@testing-library/react";
import TarjetaCita from "./TarjetaCita";

const cita = {
  id: 1,
  mascota: "Firulais",
  dueno: "Juan Pérez",
  servicio: "Consulta general",
  fecha: "10-10-2026",
  estado: "Pendiente",
};

describe("TarjetaCita - renderizado", () => {
  it("muestra el nombre de la mascota, el dueño y el servicio recibidos por props", () => {
    render(<TarjetaCita cita={cita} onConfirmar={() => {}} />);
    expect(screen.getByText("Firulais")).toBeInTheDocument();
    expect(screen.getByText(/Juan Pérez/i)).toBeInTheDocument();
    expect(screen.getByText(/Consulta general/i)).toBeInTheDocument();
  });
});
