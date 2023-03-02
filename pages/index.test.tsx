import { render } from "@testing-library/react";

import Home from "./index";

describe("Home Page", () => {
  it("renders", () => {
    const homePage = render(<Home />);
    expect(homePage).toMatchSnapshot();
  });
});
