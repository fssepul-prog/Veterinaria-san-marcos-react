import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Agenda from "./Agenda";

describe("Agenda - renderizado", () => {
  it("muestra el heading, los botones de días y los horarios del día inicial", () => {
    render(<MemoryRouter><Agenda /></MemoryRouter>);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Lunes" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Sábado" })).toBeInTheDocument();
    expect(screen.getByText("09:00")).toBeInTheDocument();
  });
});
