import BugReportIcon from "@mui/icons-material/BugReport";
import { render } from "@testing-library/react";

import HyperLinkListItem from "./HyperLinkListItem";
describe("HyperLinkListItem", () => {
  it("renders", () => {
    const hyperlinkListItem = render(
      <HyperLinkListItem
        to="https://example.com"
        icon={<BugReportIcon />}
        text="Example"
      />
    );
    expect(hyperlinkListItem).toMatchSnapshot();
  });
});
