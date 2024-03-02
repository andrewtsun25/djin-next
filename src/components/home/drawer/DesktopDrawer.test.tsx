import { fireEvent, render } from "@testing-library/react";

import { CLOSE_BUTTON_ROLE,DesktopDrawer } from "./DesktopDrawer";

describe("DesktopDrawer", () => {
  const isAppDrawerOpen = true;
  let setIsAppDrawerOpen: (b: boolean) => void;

  beforeEach(() => {
    setIsAppDrawerOpen = jest.fn();
  });

  it("renders", () => {
    const { getByRole } = render(
      <DesktopDrawer
        isAppDrawerOpen={isAppDrawerOpen}
        setIsAppDrawerOpen={setIsAppDrawerOpen}
      />,
    );
    const closeButton = getByRole(CLOSE_BUTTON_ROLE);
    fireEvent.click(closeButton);
    expect(setIsAppDrawerOpen).toHaveBeenCalledWith(false);
  });
});
