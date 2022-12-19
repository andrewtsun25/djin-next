import BugReportIcon from "@mui/icons-material/BugReport";
import { render } from "@testing-library/react";
import IconLink from "./IconLink";

describe("IconLink", () => {
  it("renders", () => {
    const iconLink = render(
      <IconLink
        icon={<BugReportIcon />}
        text="Example Link"
        href="https://example.com"
      />
    );
    expect(iconLink).toMatchSnapshot();
  });
});
