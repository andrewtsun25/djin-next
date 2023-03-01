import {render} from "@testing-library/react";

import {KatanaIcon} from "./KatanaIcon";

describe("KatanaIcon", () => {
  it("renders", () => {
    const fistIcon = render(<KatanaIcon />);
    expect(fistIcon).toMatchSnapshot();
  })
})
