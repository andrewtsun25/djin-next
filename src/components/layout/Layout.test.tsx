import {render} from "@testing-library/react";
import Layout from "./Layout";

describe("Layout", () => {
  it("renders", () => {
    const layout = render(<Layout><p>Hi!</p></Layout>)
    expect(layout).toMatchSnapshot();
  })
})
