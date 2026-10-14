import { render, screen } from "@testing-library/react";
import MisSolicitudes from "./MisSolicitudes";

describe("MisSolicitudes - lista vacía", () => {
  it("muestra el mensaje cuando no hay solicitudes agendadas", () => {
    render(<MisSolicitudes solicitudes={[]} onEliminar={() => {}} />);
    expect(screen.getByText(/no tienes servicios agendados/i)).toBeInTheDocument();
  });
});
