import {FistIcon} from "./FistIcon";
import {render} from "@testing-library/react";

describe("FistIcon", () => {
  it("renders", () => {
    const fistIcon = render(<FistIcon />);
    expect(fistIcon).toMatchSnapshot();
  })
})
