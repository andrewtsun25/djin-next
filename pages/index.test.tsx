import Home from "./index";
import { render } from "@testing-library/react";

describe("Home Page", () => {
  it("renders", () => {
    const homePage = render(<Home />);
    expect(homePage).toMatchSnapshot();
  });
});
