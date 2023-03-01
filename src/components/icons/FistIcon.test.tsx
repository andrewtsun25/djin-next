import {render} from "@testing-library/react";

import {FistIcon} from "./FistIcon";

describe("FistIcon", () => {
  it("renders", () => {
    const fistIcon = render(<FistIcon />);
    expect(fistIcon).toMatchSnapshot();
  })
})
