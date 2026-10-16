import { render, screen } from "@testing-library/react";
import RecepcionCitas from "./RecepcionCitas";

beforeEach(() => {
  localStorage.clear();
});

describe("RecepcionCitas - renderizado", () => {
  it("muestra el heading y las citas de la lista inicial", () => {
    render(<RecepcionCitas />);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
    expect(screen.getByText("Firulais")).toBeInTheDocument();
    expect(screen.getByText("Luna")).toBeInTheDocument();
  });
});
