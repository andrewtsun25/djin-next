import { render } from "@testing-library/react";

import { TaekwondoIcon } from "./TaekwondoIcon";

describe("TaekwondoIcon", () => {
  it("renders", () => {
    const fistIcon = render(<TaekwondoIcon />);
    expect(fistIcon).toMatchSnapshot();
  });
});
