import { render, screen } from "@testing-library/react";
import RenderJoke from "@/api/RenderJoke";

describe("should test the div category", () => {
  it("should not render one-liner", () => {
    render(<RenderJoke />);

    const container = screen.getByRole("generic", { name: /twopart-label/i });
    const oneliner = within(container).queryAllByRole("generic", {
      name: /oneliner/i,
    });

    expect(oneliner.length).toBe(0);
  });
});

describe("Adding two numbers together", () => {
  it("should produce their sum", () => {
    expect(1 + 1).toBe(2);
  });
});
