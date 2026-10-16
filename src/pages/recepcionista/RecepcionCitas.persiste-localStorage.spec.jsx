import { render } from "@testing-library/react"
import { vi } from "vitest"
import RecepcionCitas from "./RecepcionCitas"

beforeEach(() => {
  localStorage.clear()
})

describe("RecepcionCitas - persistencia", () => {
  it("guarda las citas en localStorage al renderizar", () => {
    const espia = vi.spyOn(Storage.prototype, "setItem")
    render(<RecepcionCitas />)
    expect(espia).toHaveBeenCalledWith("citas", expect.any(String))
    espia.mockRestore()
  })
})
