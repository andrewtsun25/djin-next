import { render } from "@testing-library/react";
import SiteLayout from "./SiteLayout";
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
describe("SiteLayout", () => {
  it("renders", () => {
    const layout = render(
      <SiteLayout>
        <p>Hi!</p>
      </SiteLayout>
    );
    expect(layout).toMatchSnapshot();
  });
});
