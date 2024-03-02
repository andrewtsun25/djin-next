import BugReportIcon from "@mui/icons-material/BugReport";
import { fireEvent, render, waitFor } from "@testing-library/react";

import {
  CollapsibleList,
  LIST_ITEM_COLLAPSE_BTN_TEST_ID,
} from "./CollapsibleList";

describe("CollapsibleList", () => {
  const LIST_ITEM_TEXT = "list item text";

  const renderList = () =>
    render(
      <CollapsibleList icon={<BugReportIcon />} name={"List Name"}>
        <p>{LIST_ITEM_TEXT}</p>
      </CollapsibleList>,
    );

  it("renders", () => {
    const collapsibleList = renderList();
    expect(collapsibleList).toMatchSnapshot();
  });

  it("opens the list", async () => {
    const { findByText, getByTestId } = renderList();
    const collapseBtn = getByTestId(LIST_ITEM_COLLAPSE_BTN_TEST_ID);
    fireEvent.click(collapseBtn); // Open the list
    const listItem = await findByText(LIST_ITEM_TEXT);
    expect(listItem).toBeVisible();
  });

  it("closes the list", async () => {
    const { findByText, getByTestId } = renderList();
    const collapseBtn = getByTestId(LIST_ITEM_COLLAPSE_BTN_TEST_ID);
    fireEvent.click(collapseBtn); // Open the list
    const listItem = await findByText(LIST_ITEM_TEXT);
    expect(listItem).toBeVisible();
    fireEvent.click(collapseBtn); // Close the list
    await waitFor(() => expect(listItem).not.toBeVisible());
  });
});
