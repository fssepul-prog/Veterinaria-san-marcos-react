import { render, screen } from "@testing-library/react";
import AdminUsuarios from "./AdminUsuarios";

beforeEach(() => {
  localStorage.clear();
});

describe("AdminUsuarios - renderizado", () => {
  it("muestra el heading y los usuarios de la tabla inicial", () => {
    render(<AdminUsuarios />);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
    expect(screen.getByText("Marcela Iturra")).toBeInTheDocument();
    expect(screen.getByText("Pedro Salgado")).toBeInTheDocument();
  });
});
