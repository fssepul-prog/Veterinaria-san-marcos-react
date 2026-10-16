import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Inicio from "./Inicio";

describe("Inicio", () => {
  it("muestra el heading principal y el enlace para solicitar hora", () => {
    render(<MemoryRouter><Inicio /></MemoryRouter>);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /solicitar una hora/i })).toBeInTheDocument();
  });
});
