import { render, screen } from "@testing-library/react";
import Nosotros from "./Nosotros";

describe("Nosotros", () => {
  it("muestra el heading principal con información de la clínica", () => {
    render(<Nosotros />);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
    expect(screen.getByText(/2009/i)).toBeInTheDocument();
  });
});
