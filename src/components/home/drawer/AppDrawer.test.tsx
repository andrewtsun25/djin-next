import { fireEvent, render } from "@testing-library/react";
import AppDrawer, { CLOSE_BUTTON_ROLE } from "./AppDrawer";

describe("AppDrawer", () => {
  const isAppDrawerOpen = true;
  let setIsAppDrawerOpen: (b: boolean) => void;

  beforeEach(() => {
    setIsAppDrawerOpen = jest.fn();
  });

  it("renders", () => {
    const { getByRole } = render(
      <AppDrawer
        isAppDrawerOpen={isAppDrawerOpen}
        setIsAppDrawerOpen={setIsAppDrawerOpen}
      />
    );
    const closeButton = getByRole(CLOSE_BUTTON_ROLE);
    fireEvent.click(closeButton);
    expect(setIsAppDrawerOpen).toHaveBeenCalledWith(false);
  });

  it("closes the drawer", () => {});
});
