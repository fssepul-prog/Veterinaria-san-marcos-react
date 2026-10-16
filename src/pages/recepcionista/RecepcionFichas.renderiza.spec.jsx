import { render, screen } from "@testing-library/react";
import RecepcionFichas from "./RecepcionFichas";

beforeEach(() => {
  localStorage.clear();
});

describe("RecepcionFichas - renderizado", () => {
  it("muestra el heading y las fichas de pacientes iniciales", () => {
    render(<RecepcionFichas />);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
    expect(screen.getByText("Toby")).toBeInTheDocument();
    expect(screen.getByText("Michi")).toBeInTheDocument();
  });
});
