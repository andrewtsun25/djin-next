import { render } from "@testing-library/react";

import SiteLayoutPages from "./SiteLayoutPages";
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
describe("SiteLayoutPages", () => {
  it("renders", () => {
    const layout = render(
      <SiteLayoutPages>
        <p>Hi!</p>
      </SiteLayoutPages>,
    );
    expect(layout).toMatchSnapshot();
  });
});
