import HyperLinkListItem from "./HyperLinkListItem";
import BugReportIcon from "@mui/icons-material/BugReport";
import { render } from "@testing-library/react";
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
