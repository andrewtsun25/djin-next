import { render } from "@testing-library/react";
import Layout from "./Layout";
jest.mock("next/router", () => {
  return {
    __esModule: true,
    useRouter: () => {
      return {
        asRouter: "/",
      };
    },
  };
});
describe("Layout", () => {
  it("renders", () => {
    const layout = render(
      <Layout>
        <p>Hi!</p>
      </Layout>
    );
    expect(layout).toMatchSnapshot();
  });
});
