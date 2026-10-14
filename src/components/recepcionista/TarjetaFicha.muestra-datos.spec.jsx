import { render, screen } from "@testing-library/react";
import TarjetaFicha from "./TarjetaFicha";

const ficha = {
  id: 1,
  dueno: "Javiera Contreras",
  mascota: "Toby",
  fecha: "09-10-2026",
  motivo: "Picazón en la piel",
  diagnostico: "Dermatitis leve.",
};

describe("TarjetaFicha", () => {
  it("muestra el nombre de la mascota y el dueño recibidos por props", () => {
    render(<TarjetaFicha ficha={ficha} onEditar={() => {}} />);
    expect(screen.getByText("Toby")).toBeInTheDocument();
    expect(screen.getByText(/Javiera Contreras/i)).toBeInTheDocument();
  });
});
