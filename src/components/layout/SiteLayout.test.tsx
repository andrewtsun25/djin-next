import { Typography } from "@mui/material";
import { render } from "@testing-library/react";

import { SiteLayout } from "./SiteLayout";
jest.mock("next/navigation", () => {
  return {
    __esModule: true,
    usePathname: () => "/",
  };
});

describe("SiteLayoutPages", () => {
  it("renders", () => {
    const layout = render(
      <SiteLayout>
        <Typography>Hi!</Typography>
      </SiteLayout>,
    );
    expect(layout).toMatchSnapshot();
  });
});
