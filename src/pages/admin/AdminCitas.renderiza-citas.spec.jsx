import { render, screen } from "@testing-library/react";
import AdminCitas from "./AdminCitas";

beforeEach(() => {
  localStorage.clear();
});

describe("AdminCitas", () => {
  it("renderiza el heading y muestra las citas iniciales", () => {
    render(<AdminCitas />);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
    expect(screen.getByText("Firulais")).toBeInTheDocument();
  });
});
