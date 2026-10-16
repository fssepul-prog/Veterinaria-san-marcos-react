import { render, screen } from "@testing-library/react";
import Recursos from "./Recursos";

describe("Recursos", () => {
  it("muestra el heading principal y las recomendaciones de cuidado", () => {
    render(<Recursos />);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
    expect(screen.getByText(/Vacunas al día/i)).toBeInTheDocument();
  });
});
