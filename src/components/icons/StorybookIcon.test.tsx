import { render } from "@testing-library/react";

import { StorybookIcon } from "./StorybookIcon";

describe("StorybookIcon", () => {
  it("renders", () => {
    const fistIcon = render(<StorybookIcon />);
    expect(fistIcon).toMatchSnapshot();
  });
});
