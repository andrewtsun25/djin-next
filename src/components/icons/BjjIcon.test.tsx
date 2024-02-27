import { render } from "@testing-library/react";

import { BjjIcon } from "./BjjIcon";

describe("BjjIcon", () => {
  it("renders", () => {
    const bjjIcon = render(<BjjIcon />);
    expect(bjjIcon).toMatchSnapshot();
  });
});
